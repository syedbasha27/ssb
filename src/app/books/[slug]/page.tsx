import { notFound } from "next/navigation";
import Image from "next/image";
import { books, faqs } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { AddToCartButtons } from "./product-actions";
import { BookGrid } from "@/components/books/book-grid";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);
  if (!book) return notFound();

  const related = books.filter((item) => item.slug !== book.slug && item.category === book.category);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <Image src={book.coverImage} alt={book.title} width={500} height={650} className="mx-auto h-auto w-full max-w-sm rounded-xl" priority />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {book.gallery.map((image) => (
              <Image key={image} src={image} alt={`${book.title} preview`} width={360} height={220} className="h-36 w-full rounded-xl bg-white object-cover p-2 shadow-sm" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge text={book.category} tone="blue" />
            {book.isBestseller && <Badge text="Bestseller" tone="orange" />}
            {book.isNewRelease && <Badge text="New Release" tone="green" />}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold text-brand-blue">{book.title}</h1>
          <p className="mt-2 text-lg text-slate-600">{book.subtitle}</p>
          <p className="mt-4 text-slate-700">{book.description}</p>
          <div className="mt-4 flex items-end gap-3">
            <p className="text-3xl font-extrabold text-brand-blue">{formatCurrency(book.discountedPrice)}</p>
            <p className="text-lg text-slate-400 line-through">{formatCurrency(book.price)}</p>
          </div>
          <p className="mt-2 text-sm text-slate-500">Stock available: {book.stock}</p>
          <AddToCartButtons book={book} />

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-900">Educational Benefits</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {book.educationalBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <h3 className="mt-5 font-semibold text-slate-900">Skill Tags</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {book.skillTags.map((tag) => (
                <Badge key={tag} text={tag} />
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-900">Look Inside</h2>
            <p className="mt-2 text-sm text-slate-600">Interactive preview and sample pages for parents and teachers.</p>
            <Image src="/assets/books/inside-preview.svg" alt="Inside preview" width={800} height={500} className="mt-3 rounded-xl" />
            <a href="#" className="mt-4 inline-block text-sm font-semibold text-brand-blue underline-offset-4 hover:underline">Download Sample PDF</a>
          </section>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-brand-blue">Frequently Asked Questions</h2>
        <div className="mt-3 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-brand-blue">Related Books</h2>
          <div className="mt-4">
            <BookGrid books={related} />
          </div>
        </section>
      )}
    </main>
  );
}
