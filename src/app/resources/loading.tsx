export default function ResourcesLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-5 h-10 w-64 animate-pulse rounded-xl bg-slate-200" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
