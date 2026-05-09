import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for may have moved or no longer exists.</p>
      <Link href="/" className="mt-5 inline-block rounded-xl bg-brand-blue px-5 py-2 text-white">
        Back to Home
      </Link>
    </main>
  );
}
