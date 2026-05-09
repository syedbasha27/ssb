import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AdminContentPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-extrabold text-brand-blue">Content Management</h1>
      <form className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
        <Input placeholder="Homepage hero title" />
        <Textarea placeholder="Mission statement" rows={4} />
        <Input placeholder="Trust section headline" />
        <Input type="file" />
        <Button>Save Content</Button>
      </form>
    </div>
  );
}
