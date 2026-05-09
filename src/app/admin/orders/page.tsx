import { Card } from "@/components/ui/card";

const orders = [
  { id: "ORD-101", customer: "Aisha Khan", mode: "Razorpay", status: "Processing" },
  { id: "ORD-102", customer: "Bright Future School", mode: "COD", status: "Packed" },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-extrabold text-brand-blue">Order Management</h1>
      <Card className="overflow-x-auto p-0">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr><th className="px-4 py-3">Order ID</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Payment</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Action</th></tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.mode}</td>
                <td className="px-4 py-3">{order.status}</td>
                <td className="px-4 py-3"><button className="text-brand-blue">Update status</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="flex gap-2">
        <button className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white">Export Orders CSV</button>
      </div>
    </div>
  );
}
