import { Metadata } from "next";
import { CheckoutClient } from "./checkout-client";

export const metadata: Metadata = {
  title: "Checkout | SSB Publications",
  description: "Secure checkout with Razorpay and cash on delivery support.",
};

export default function CheckoutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">Checkout</h1>
      <p className="mt-2 text-slate-600">Secure checkout with invoice-ready order details and delivery tracking support.</p>
      <div className="mt-6">
        <CheckoutClient />
      </div>
    </main>
  );
}
