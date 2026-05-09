import { Book } from "@/types";
import { BookCard } from "@/components/books/book-card";

export function BookGrid({ books }: { books: Book[] }) {
  if (!books.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
        No books matched your filters. Try changing category, age group, or search terms.
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
