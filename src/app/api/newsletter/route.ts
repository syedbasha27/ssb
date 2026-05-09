import { NextRequest, NextResponse } from "next/server";
import { consumeRateLimit } from "@/lib/security/rate-limit";
import { newsletterSchema } from "@/lib/security/validators";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const limiter = consumeRateLimit(`newsletter:${ip}`, 15, 60_000);
  if (!limiter.allowed) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const body = Object.fromEntries(await request.formData());
  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const supabase = await createClient();
  await supabase.from("newsletter_subscribers").insert({ email: parsed.data.email }).select().maybeSingle();

  return NextResponse.redirect(new URL("/?subscribed=1", request.url));
}
