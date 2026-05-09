const buckets = new Map<string, { count: number; expiresAt: number }>();
let hasWarnedFallback = false;

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 2000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function consumeWithUpstash(key: string, limit: number, windowMs: number) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const now = Date.now();
  const windowKey = `ratelimit:${key}:${Math.floor(now / windowMs)}`;
  const headers = { Authorization: `Bearer ${token}` };

  let incrementRes: Response;
  try {
    incrementRes = await fetchWithTimeout(
      `${url}/incr/${encodeURIComponent(windowKey)}`,
      { method: "POST", headers },
      2000,
    );
  } catch {
    return null;
  }
  if (!incrementRes.ok) return null;

  const incrementPayload = (await incrementRes.json()) as { result: number };
  const count = Number(incrementPayload.result);

  if (count === 1) {
    try {
      await fetchWithTimeout(
        `${url}/expire/${encodeURIComponent(windowKey)}/${Math.ceil(windowMs / 1000)}`,
        { method: "POST", headers },
        2000,
      );
    } catch {
      return null;
    }
  }

  const retryAfterMs = windowMs - (now % windowMs);
  return {
    allowed: count <= limit,
    retryAfterMs: count <= limit ? undefined : retryAfterMs,
  };
}

export async function consumeRateLimit(key: string, limit: number, windowMs: number) {
  const distributedResult = await consumeWithUpstash(key, limit, windowMs);
  if (distributedResult) return distributedResult;

  // Fallback is intended for local/dev only. In production use Upstash Redis
  // so limits are shared across all serverless instances.
  if (process.env.NODE_ENV === "production" && !hasWarnedFallback) {
    console.error("Rate limit fallback is in-memory. Configure UPSTASH_REDIS_REST_URL/TOKEN for distributed limits.");
    hasWarnedFallback = true;
  }

  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.expiresAt < now) {
    buckets.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true };
  }

  if (current.count >= limit) {
    return { allowed: false, retryAfterMs: current.expiresAt - now };
  }

  current.count += 1;
  buckets.set(key, current);
  return { allowed: true };
}
