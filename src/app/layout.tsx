import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { ToastProvider } from "@/components/providers/toast-provider";
import { CartProvider } from "@/components/providers/cart-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://ssb-publications.vercel.app"),
  title: {
    default: "SSB Publications | Premium Educational Books for Children",
    template: "%s | SSB Publications",
  },
  description:
    "Premium educational publishing for children, parents, and schools. Explore books, worksheets, answer keys, and school partnership resources.",
  openGraph: {
    title: "SSB Publications",
    description: "Curiosity-first books and educational resources for growing minds.",
    url: "https://ssb-publications.vercel.app",
    siteName: "SSB Publications",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <ToastProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppFloat />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
