const buckets = new Map<string, { count: number; expiresAt: number }>();

async function consumeWithUpstash(key: string, limit: number, windowMs: number) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const now = Date.now();
  const windowKey = `ratelimit:${key}:${Math.floor(now / windowMs)}`;
  const headers = { Authorization: `Bearer ${token}` };

  const incrementRes = await fetch(`${url}/incr/${encodeURIComponent(windowKey)}`, {
    method: "POST",
    headers,
  });
  if (!incrementRes.ok) return null;

  const incrementPayload = (await incrementRes.json()) as { result: number };
  const count = Number(incrementPayload.result);

  if (count === 1) {
    await fetch(`${url}/expire/${encodeURIComponent(windowKey)}/${Math.ceil(windowMs / 1000)}`, {
      method: "POST",
      headers,
    });
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
