import Link from "next/link";
import { getWhatsAppLink } from "@/lib/config";

export function WhatsAppFloat() {
  const whatsappLink = getWhatsAppLink();
  if (!whatsappLink) return null;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-lg shadow-green-500/30 transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      💬
    </Link>
  );
}
