import { Card } from "@/components/ui/card";

export default function AdminAnalyticsPage() {
  const metrics = [
    { label: "Total Sales", value: "₹4.8L" },
    { label: "Top-Selling Books", value: "Wonder Science, Detective Mind" },
    { label: "Downloads", value: "2,490" },
    { label: "Traffic Overview", value: "18.2k monthly visitors" },
    { label: "School Inquiry Conversion", value: "22%" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold text-brand-blue">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{metric.label}</p>
            <p className="mt-2 text-xl font-bold text-slate-900">{metric.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
