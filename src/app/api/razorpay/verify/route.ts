import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`)
      .digest("hex");

    const isValid = expected === data.razorpay_signature;
    return NextResponse.json({ verified: isValid });
  } catch {
    return NextResponse.json({ verified: false }, { status: 400 });
  }
}
