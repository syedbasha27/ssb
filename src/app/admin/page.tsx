import { Card } from "@/components/ui/card";

export default function AdminOverviewPage() {
  const stats = [
    { label: "Total Sales", value: "₹4,82,600" },
    { label: "Top-Selling Book", value: "Wonder Science" },
    { label: "Resource Downloads", value: "2,490" },
    { label: "School Inquiries", value: "126" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-brand-blue">Dashboard Overview</h1>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
