const reviews = [
  { id: "REV-1", book: "Detective Mind", content: "My child now loves solving logic questions.", status: "Pending" },
  { id: "REV-2", book: "Wonder Science", content: "Great for school activity periods.", status: "Approved" },
];

export default function AdminReviewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-brand-blue">Review Moderation</h1>
      <div className="mt-5 space-y-3">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">{review.book} · {review.status}</p>
            <p className="mt-2 text-slate-700">{review.content}</p>
            <div className="mt-3 flex gap-2 text-sm">
              <button className="rounded-lg bg-emerald-600 px-3 py-1 text-white">Approve</button>
              <button className="rounded-lg bg-red-600 px-3 py-1 text-white">Remove</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
