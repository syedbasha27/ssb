"use client";

import { Book } from "@/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = { book: Book; qty: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  clearCart: () => undefined,
  total: 0,
});

const CART_KEY = "ssb_cart";

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(CART_KEY);
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addToCart(book: Book) {
        setItems((prev) => {
          const existing = prev.find((item) => item.book.slug === book.slug);
          if (existing) {
            return prev.map((item) =>
              item.book.slug === book.slug ? { ...item, qty: Math.min(item.qty + 1, book.stock) } : item,
            );
          }
          return [...prev, { book, qty: 1 }];
        });
      },
      removeFromCart(slug: string) {
        setItems((prev) => prev.filter((item) => item.book.slug !== slug));
      },
      clearCart() {
        setItems([]);
      },
      total: items.reduce((sum, item) => sum + item.book.discountedPrice * item.qty, 0),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
