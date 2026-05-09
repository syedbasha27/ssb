"use client";

import { Book } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/cart-provider";
import { useToast } from "@/components/providers/toast-provider";
import { useRouter } from "next/navigation";

export function AddToCartButtons({ book }: { book: Book }) {
  const { addToCart } = useCart();
  const { pushToast } = useToast();
  const router = useRouter();

  return (
    <div className="mt-5 flex gap-3">
      <Button
        onClick={() => {
          addToCart(book);
          pushToast(`${book.title} added to cart`);
        }}
      >
        Add to Cart
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          addToCart(book);
          router.push("/checkout");
        }}
      >
        Buy Now
      </Button>
    </div>
  );
}
