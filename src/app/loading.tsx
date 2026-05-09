export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-4 h-10 w-1/3 animate-pulse rounded-xl bg-slate-200" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="h-56 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
