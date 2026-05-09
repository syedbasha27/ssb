export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-blue">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">We collect only required user information for order fulfillment, support, and service improvements. We never sell personal data.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
        <li>Data used for order processing and communication.</li>
        <li>Payment processing is handled securely via Razorpay.</li>
        <li>You can request data deletion by contacting support.</li>
      </ul>
    </main>
  );
}
