import { NextRequest, NextResponse } from "next/server";
import { consumeRateLimit } from "@/lib/security/rate-limit";
import { newsletterSchema } from "@/lib/security/validators";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const limiter = await consumeRateLimit(`newsletter:${ip}`, 15, 60_000);
  if (!limiter.allowed) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const body = Object.fromEntries(await request.formData());
  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const supabase = await createClient();
  const { error } = await supabase
    .from("newsletter_subscribers")
    .upsert({ email: parsed.data.email }, { onConflict: "email", ignoreDuplicates: true });
  if (error) return NextResponse.redirect(new URL("/?subscribed=0", request.url));

  return NextResponse.redirect(new URL("/?subscribed=1", request.url));
}
