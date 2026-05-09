export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-blue">Terms & Conditions</h1>
      <p className="mt-4 text-slate-700">By using this website, you agree to our ordering, payment, and content usage terms.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
        <li>All content is copyright SSB Publications.</li>
        <li>Prices and offers may change without prior notice.</li>
        <li>Users must provide accurate checkout information.</li>
      </ul>
    </main>
  );
}
