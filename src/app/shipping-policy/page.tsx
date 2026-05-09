export default function ShippingPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-blue">Shipping Policy</h1>
      <p className="mt-4 text-slate-700">Orders are dispatched within 24–48 working hours and delivered based on location serviceability.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
        <li>Free shipping on orders above ₹999.</li>
        <li>COD available for eligible pin codes.</li>
        <li>Tracking details are shared via email after dispatch.</li>
      </ul>
    </main>
  );
}
