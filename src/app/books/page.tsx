import { Metadata } from "next";
import { BookGrid } from "@/components/books/book-grid";
import { Input } from "@/components/ui/input";
import { categories, books } from "@/lib/site-data";
import { ageGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Books | SSB Publications",
  description: "Explore puzzle, science, activity and learning books for children.",
};

type Props = {
  searchParams: Promise<{
    query?: string;
    category?: string;
    age?: string;
    sort?: "price_asc" | "price_desc" | "new";
    page?: string;
  }>;
};

const PAGE_SIZE = 8;

export default async function BooksPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = (params.query ?? "").toLowerCase();
  const category = params.category ?? "all";
  const age = params.age ?? "all";
  const sort = params.sort ?? "new";
  const page = Number(params.page ?? "1");

  let filtered = books.filter((book) => {
    const matchQuery = [book.title, book.subtitle, book.category].join(" ").toLowerCase().includes(query);
    const matchCategory = category === "all" || book.category === category;
    const matchAge = age === "all" || book.ageGroup === age;
    return matchQuery && matchCategory && matchAge;
  });

  filtered = filtered.sort((a, b) => {
    if (sort === "price_asc") return a.discountedPrice - b.discountedPrice;
    if (sort === "price_desc") return b.discountedPrice - a.discountedPrice;
    return Number(Boolean(b.isNewRelease)) - Number(Boolean(a.isNewRelease));
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">Books Library</h1>
      <p className="mt-2 text-slate-600">Discover books that blend curiosity, creativity, and critical thinking.</p>

      <form className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input name="query" defaultValue={params.query} placeholder="Search books" />
        <select name="category" defaultValue={category} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option value="all">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <select name="age" defaultValue={age} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option value="all">All Ages</option>
          {ageGroups.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <select name="sort" defaultValue={sort} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option value="new">New Arrivals</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </form>

      <div className="mt-7"><BookGrid books={paginated} /></div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const p = idx + 1;
          const next = new URLSearchParams({
            ...(params.query ? { query: params.query } : {}),
            ...(category !== "all" ? { category } : {}),
            ...(age !== "all" ? { age } : {}),
            sort,
            page: String(p),
          });

          return (
            <a
              key={p}
              href={`/books?${next.toString()}`}
              className={`inline-flex size-9 items-center justify-center rounded-lg border text-sm ${p === page ? "border-brand-blue bg-brand-blue text-white" : "border-slate-200 bg-white text-slate-700"}`}
            >
              {p}
            </a>
          );
        })}
      </div>
    </main>
  );
}
