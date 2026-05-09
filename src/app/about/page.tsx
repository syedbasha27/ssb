export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">About SSB Publications</h1>
      <p className="mt-4 leading-8 text-slate-700">
        SSB Publications was built on one belief: children learn best when education feels meaningful, joyful, and hands-on. We partner with educators, child-development experts, and curriculum planners to create books that balance imagination with academic growth.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Our Approach</h2>
          <p className="mt-2 text-sm text-slate-600">Skill-building by design: logic, language, creativity, and reasoning in every title.</p>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Our Promise</h2>
          <p className="mt-2 text-sm text-slate-600">Premium quality content families trust and schools can map to classroom outcomes.</p>
        </div>
      </div>
    </main>
  );
}
