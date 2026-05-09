import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { books, resources, testimonials } from "@/lib/site-data";
import { BookCard } from "@/components/books/book-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const featured = books.filter((book) => book.isFeatured);

  return (
    <main>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-16">
        <FadeIn>
          <p className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">✨ New Releases for 2026</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-brand-blue sm:text-5xl">
            Nurturing Young Minds Through Creative Learning
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Discover interactive storytelling and brain-teasing challenges crafted to build curiosity, confidence, and thinking skills for every child.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/books"><Button>Explore Books</Button></Link>
            <Link href="/resources"><Button variant="secondary">View Samples</Button></Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-white/70 bg-white p-3 shadow-xl shadow-slate-200">
            <Image src="/assets/books/inside-preview.svg" alt="Children reading educational books" width={800} height={520} className="rounded-2xl" priority />
          </div>
        </FadeIn>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Our Mission: Building Future Thinkers</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              At SSB Publications, we believe the true purpose of education is to spark curiosity. Our books blend creativity with structured skill-building so every child learns to ask better questions and think independently.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Card className="p-4 text-sm text-slate-700">Premium quality content reviewed with child-development principles.</Card>
              <Card className="p-4 text-sm text-slate-700">Skill-focused activities for logic, creativity, writing, and reasoning.</Card>
            </div>
          </div>
          <Card className="bg-brand-blue p-8 text-white">
            <p className="text-4xl font-extrabold">10k+</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-blue-100">Students inspired</p>
            <hr className="my-6 border-blue-400/50" />
            <p className="text-4xl font-extrabold">500+</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-blue-100">Schools partnered</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Featured Explorations</h2>
            <p className="text-slate-600">Hand-picked adventures for every growing mind.</p>
          </div>
          <Link href="/books" className="text-sm font-semibold text-brand-blue">View All Publications</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 3).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-5">
            <h3 className="font-bold text-slate-900">Why Parents Trust Us</h3>
            <p className="mt-2 text-sm text-slate-600">Age-appropriate progression, clear pedagogy, and practical activities children actually enjoy.</p>
          </Card>
          <Card className="p-5">
            <h3 className="font-bold text-slate-900">Skill-Building Approach</h3>
            <p className="mt-2 text-sm text-slate-600">Every book maps activities to core cognitive and communication skills with measurable outcomes.</p>
          </Card>
          <Card className="p-5">
            <h3 className="font-bold text-slate-900">School Partnerships</h3>
            <p className="mt-2 text-sm text-slate-600">Curriculum support, teacher guides, and institutional pricing for schools and learning centers.</p>
          </Card>
        </div>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-brand-blue">Browse by Age Category</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["3-5", "5-7", "7-10", "10-12"].map((age) => (
              <Link
                key={age}
                href={`/books?age=${age}`}
                className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1 text-sm font-semibold text-brand-blue"
              >
                Ages {age}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-brand-blue">Featured Resources</h2>
            <Link href="/resources" className="text-sm font-semibold text-brand-blue">View all resources</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{resource.type}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{resource.title}</p>
                <Link href="/resources" className="mt-3 inline-block text-sm font-semibold text-brand-blue">
                  Open
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-brand-blue">Trusted by Educators & Families</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="p-5">
                <p className="text-sm leading-7 text-slate-600">“{item.quote}”</p>
                <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-center">
            <h3 className="text-xl font-bold text-slate-900">Get Free Weekly Worksheets</h3>
            <p className="mt-2 text-sm text-slate-600">Download printable activity sheets to keep learning joyful at home.</p>
            <Link href="/resources" className="mt-4 inline-block"><Button>Explore Free Resources</Button></Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SSB Publications",
            url: "https://ssb-publications.vercel.app",
            logo: "https://ssb-publications.vercel.app/logo.png",
            sameAs: ["https://www.instagram.com", "https://www.facebook.com"],
          }),
        }}
      />
    </main>
  );
}
