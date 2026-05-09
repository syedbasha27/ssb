import Link from "next/link";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/books", label: "Books" },
  { href: "/admin/resources", label: "Resources" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/reviews", label: "Reviews" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/analytics", label: "Analytics" },
];

export function AdminNav() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-blue">Admin CMS</h2>
      <nav className="space-y-1 text-sm">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
