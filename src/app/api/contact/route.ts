import { NextRequest, NextResponse } from "next/server";
import { consumeRateLimit } from "@/lib/security/rate-limit";
import { contactSchema } from "@/lib/security/validators";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const limiter = await consumeRateLimit(`contact:${ip}`, 10, 60_000);
  if (!limiter.allowed) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const body = Object.fromEntries(await request.formData());
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const supabase = await createClient();
  const { error } = await supabase.from("contact_inquiries").insert(parsed.data);
  if (error) return NextResponse.redirect(new URL("/contact?submitted=0", request.url));

  return NextResponse.redirect(new URL("/contact?submitted=1", request.url));
}
