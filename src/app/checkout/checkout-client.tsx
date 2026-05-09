"use client";

import { useState } from "react";
import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "@/components/providers/toast-provider";

export function CheckoutClient() {
  const { items, total, removeFromCart, clearCart } = useCart();
  const { pushToast } = useToast();
  const [paymentMode, setPaymentMode] = useState<"razorpay" | "cod">("razorpay");

  async function handleCheckout() {
    if (!items.length) return;

    if (paymentMode === "cod") {
      pushToast("COD order placed successfully.");
      clearCart();
      return;
    }

    const response = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    });

    if (!response.ok) {
      pushToast("Unable to initialize Razorpay.");
      return;
    }

    pushToast("Razorpay order created. Complete payment in integration flow.");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-bold text-slate-900">Delivery Details</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input placeholder="Parent/School Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" type="email" className="sm:col-span-2" />
          <Textarea placeholder="Full shipping address" className="sm:col-span-2" rows={4} />
          <Input placeholder="Pincode" />
          <Input placeholder="Coupon code" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700">Payment Method</p>
          <div className="mt-2 flex gap-3">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="radio" checked={paymentMode === "razorpay"} onChange={() => setPaymentMode("razorpay")} /> Razorpay
            </label>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="radio" checked={paymentMode === "cod"} onChange={() => setPaymentMode("cod")} /> Cash on Delivery
            </label>
          </div>
        </div>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
        <div className="mt-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-slate-600">Your cart is empty. Add books to continue checkout.</p>
          ) : (
            items.map((item) => (
              <div key={item.book.slug} className="rounded-xl bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">{item.book.title}</p>
                <p className="text-sm text-slate-600">Qty: {item.qty}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-brand-blue">{formatCurrency(item.book.discountedPrice * item.qty)}</p>
                  <button className="text-xs text-red-600" onClick={() => removeFromCart(item.book.slug)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <div className="flex justify-between text-sm text-slate-600"><span>Subtotal</span><span>{formatCurrency(total)}</span></div>
          <div className="mt-1 flex justify-between text-sm text-slate-600"><span>Shipping</span><span>{formatCurrency(total > 999 ? 0 : 99)}</span></div>
          <div className="mt-2 flex justify-between text-lg font-bold text-slate-900"><span>Total</span><span>{formatCurrency(total > 999 ? total : total + 99)}</span></div>
        </div>
        <Button className="mt-4 w-full" onClick={handleCheckout} disabled={!items.length}>Place Order</Button>
      </section>
    </div>
  );
}
