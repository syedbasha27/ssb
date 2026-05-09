export default function AdminUsersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold text-brand-blue">User & Admin Management</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="font-semibold text-slate-900">Permissions</p>
        <p className="mt-2 text-sm text-slate-600">Assign roles such as super_admin, content_admin, order_admin, and reviewer from this panel.</p>
      </div>
    </div>
  );
}
