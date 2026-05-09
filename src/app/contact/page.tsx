import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-extrabold text-brand-blue">Contact Us</h1>
      <p className="mt-2 text-slate-600">We are here to support parents, educators, and schools.</p>
      <form action="/api/contact" method="post" className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
        <Input name="name" required placeholder="Full Name" />
        <Input name="email" type="email" required placeholder="Email" />
        <Input name="phone" placeholder="Phone" />
        <Textarea name="message" required placeholder="How can we help?" rows={5} />
        <Button>Send Message</Button>
      </form>
    </main>
  );
}
