import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ForSchoolsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">For Schools</h1>
      <p className="mt-2 max-w-3xl text-slate-600">
        Built for school administrators and educators: institutional pricing, bulk ordering, curriculum mapping, teacher support, and partnership onboarding.
      </p>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Bulk ordering",
          "Institutional pricing inquiry",
          "Curriculum mapping",
          "Teacher support",
          "Sample request forms",
          "Partnership program",
          "Order tracking support",
          "Dedicated account assistance",
        ].map((item) => (
          <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">{item}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <form action="/api/school-inquiry" method="post" className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-bold text-slate-900">School Partnership Form</h2>
          <Input name="school_name" required placeholder="School Name" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input name="contact_name" required placeholder="Contact Person" />
            <Input name="email" type="email" required placeholder="Official Email" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input name="phone" placeholder="Phone" />
            <Input name="city" placeholder="City" />
          </div>
          <Textarea name="requirements" rows={4} placeholder="Tell us your class levels, subjects, and expected quantity." />
          <Button>Submit Inquiry</Button>
        </form>
        <div className="rounded-2xl bg-brand-blue p-6 text-white">
          <h3 className="text-2xl font-bold">Need immediate support?</h3>
          <p className="mt-3 text-blue-100">Chat with our school partnerships desk on WhatsApp for quick sample and pricing help.</p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-blue"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </section>
    </main>
  );
}
