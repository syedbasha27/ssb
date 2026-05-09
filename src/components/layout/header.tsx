"use client";

import Link from "next/link";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/providers/cart-provider";

const nav = [
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/for-schools", label: "For Schools" },
];

export function Header() {
  const { items } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-brand-blue">
          SSB Publications
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative hidden w-60 lg:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input placeholder="Search books/resources..." className="pl-9" />
          </div>
          <Link href="/checkout" className="relative text-brand-blue">
            <ShoppingCart className="size-4" />
            {items.length > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex size-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                {items.length}
              </span>
            )}
          </Link>
          <Link href="/auth/login" className="text-brand-blue">
            <UserRound className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
