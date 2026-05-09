import Link from "next/link";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-lg shadow-green-500/30 transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      💬
    </Link>
  );
}
