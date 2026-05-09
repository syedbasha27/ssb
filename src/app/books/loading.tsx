export default function BooksLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-5 h-10 w-48 animate-pulse rounded-xl bg-slate-200" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-80 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
