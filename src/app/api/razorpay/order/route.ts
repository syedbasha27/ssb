import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getRazorpayClient } from "@/lib/razorpay";

const schema = z.object({ amount: z.number().min(1) });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount } = schema.parse(body);

    const razorpay = getRazorpayClient();
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `ssb_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch {
    return NextResponse.json({ error: "Unable to create Razorpay order" }, { status: 400 });
  }
}
