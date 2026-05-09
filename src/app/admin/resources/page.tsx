import { resources } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminResourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-brand-blue">Resource Management</h1>
      <form className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2">
        <Input placeholder="Resource title" />
        <Input placeholder="Book slug" />
        <Input placeholder="Chapter/Unit" />
        <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option>Type</option>
          <option>Answer Keys</option>
          <option>Teacher Guides</option>
          <option>Worksheets</option>
          <option>Puzzle Solutions</option>
          <option>Activity Sheets</option>
        </select>
        <Input type="file" className="md:col-span-2" />
        <Button className="md:col-span-2">Upload Resource</Button>
      </form>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="font-semibold text-slate-900">Existing Resources</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {resources.map((resource) => (
            <li key={resource.id} className="rounded-xl bg-slate-50 p-3">{resource.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
