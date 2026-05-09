import { MetadataRoute } from "next";
import { books } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ssb-publications.vercel.app";
  const routes = [
    "",
    "/books",
    "/resources",
    "/checkout",
    "/about",
    "/contact",
    "/for-schools",
    "/privacy-policy",
    "/terms-and-conditions",
    "/shipping-policy",
    "/admin",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = books.map((book) => ({
    url: `${base}/books/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...productRoutes];
}
