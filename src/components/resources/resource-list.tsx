import Link from "next/link";
import { Resource } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ResourceList({ resources }: { resources: Resource[] }) {
  if (!resources.length) {
    return <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">No resources found.</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <Card key={resource.id} className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{resource.type}</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900">{resource.title}</h3>
          <p className="mt-1 text-sm text-slate-600">
            {resource.bookSlug} · {resource.chapter}
          </p>
          <Link href={resource.fileUrl} className="mt-4 block">
            <Button className="w-full">Download PDF</Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}
