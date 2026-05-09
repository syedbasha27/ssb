"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/components/providers/cart-provider";
import { useToast } from "@/components/providers/toast-provider";

export function BookCard({ book }: { book: Book }) {
  const { addToCart } = useCart();
  const { pushToast } = useToast();

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative p-4">
        <div className="mb-3 flex gap-2">
          {book.isBestseller && <Badge text="Bestseller" tone="orange" />}
          {book.isNewRelease && <Badge text="New" tone="green" />}
        </div>
        <Image src={book.coverImage} alt={book.title} width={420} height={560} className="mx-auto h-56 w-auto rounded-xl" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-bold text-slate-900">{book.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-600">{book.subtitle}</p>
        <p className="text-sm text-slate-500">Age {book.ageGroup}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-brand-blue">{formatCurrency(book.discountedPrice)}</span>
          <span className="text-sm text-slate-400 line-through">{formatCurrency(book.price)}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link href={`/books/${book.slug}`}>
            <Button variant="secondary" className="w-full">
              Details
            </Button>
          </Link>
          <Button
            className="w-full"
            onClick={() => {
              addToCart(book);
              pushToast(`${book.title} added to cart`);
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </article>
  );
}
