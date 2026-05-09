import { Metadata } from "next";
import { resources } from "@/lib/site-data";
import { ResourceList } from "@/components/resources/resource-list";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Resources & Answer Keys | SSB Publications",
  description: "Download worksheets, answer keys and educational resources.",
};

type Props = {
  searchParams: Promise<{ q?: string; type?: string }>;
};

export default async function ResourcesPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = (params.q ?? "").toLowerCase();
  const type = params.type ?? "all";

  const filtered = resources.filter((resource) => {
    const matchQuery = `${resource.title} ${resource.bookSlug} ${resource.chapter}`.toLowerCase().includes(query);
    const matchType = type === "all" || resource.type === type;
    return matchQuery && matchType;
  });

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">Resources & Answer Keys</h1>
      <p className="mt-2 text-slate-600">Access teacher guides, worksheets, puzzle solutions, and downloadable support materials.</p>
      <form className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input name="q" defaultValue={params.q} placeholder="Search by book/chapter" />
        <select name="type" defaultValue={type} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option value="all">All Types</option>
          <option value="Answer Keys">Answer Keys</option>
          <option value="Teacher Guides">Teacher Guides</option>
          <option value="Worksheets">Worksheets</option>
          <option value="Puzzle Solutions">Puzzle Solutions</option>
          <option value="Activity Sheets">Activity Sheets</option>
        </select>
        <button className="h-11 rounded-xl bg-brand-blue px-4 text-sm font-semibold text-white">Search</button>
      </form>
      <div className="mt-6">
        <ResourceList resources={filtered} />
      </div>
    </main>
  );
}
