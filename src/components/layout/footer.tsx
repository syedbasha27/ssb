import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">SSB Publications</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Nurturing curiosity through thoughtfully designed educational books and resources.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/books">All Books</Link></li>
            <li><Link href="/for-schools">For Schools</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Newsletter</h4>
          <form action="/api/newsletter" method="post" className="mt-3 space-y-2">
            <Input name="email" type="email" required placeholder="Your email" />
            <Button className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SSB Publications. Nurturing curiosity through quality education.
      </p>
    </footer>
  );
}
