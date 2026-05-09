# SSB Publications

Production-ready educational publishing platform built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

## Features

- Premium educational storefront and content-rich homepage
- Books catalog with search, category/age filters, sorting, pagination, badges
- Product detail pages with previews, educational benefits, skill tags, related books, FAQ
- Resources & answer keys page with filtering and download structure
- Cart + checkout flow with Razorpay/COD support structure
- Admin CMS dashboard sections (books, resources, orders, users, reviews, content, analytics)
- Supabase Auth integration structure + admin route protection
- Supabase PostgreSQL schema with RLS policies
- SEO support (metadata, OpenGraph, robots, sitemap, schema.org)
- Mobile-first responsive UI, loading skeletons, empty states, toast feedback, WhatsApp floating CTA

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase (Auth, PostgreSQL, Storage)
- Razorpay
- Vercel-ready deployment

## Quick Start

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

Required keys:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `NEXT_PUBLIC_SITE_URL`

## Supabase Setup

1. Create a Supabase project.
2. Run SQL in order:
   - `supabase/schema.sql`
   - `supabase/seed.sql`
3. Create storage buckets:
   - `book-images`
   - `book-pdfs`
   - `worksheets`
   - `answer-keys`
   - `preview-pages`
4. Add at least one auth user and insert into `users` + `admins` table with active admin role.

## Razorpay Setup

1. Create Razorpay account and get test/live keys.
2. Add keys to environment variables.
3. Use `POST /api/razorpay/order` to create payment orders.
4. Verify payment signatures via `POST /api/razorpay/verify`.
5. After verification, persist payment/order status in Supabase `orders` table.

## CMS Usage (Admin)

1. Visit `/auth/login` and login with Supabase Auth credentials.
2. Access `/admin` dashboard.
3. Manage sections:
   - `/admin/books`
   - `/admin/resources`
   - `/admin/orders`
   - `/admin/users`
   - `/admin/reviews`
   - `/admin/content`
   - `/admin/analytics`

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Add environment variables in Vercel project settings.
4. Deploy with default Next.js build command:

```bash
npm run build
```

## Folder Structure

```text
src/
  app/
    (public pages, admin pages, api routes)
  components/
    admin/
    books/
    layout/
    motion/
    providers/
    resources/
    ui/
  lib/
    security/
    supabase/
    site-data.ts
    razorpay.ts
    utils.ts
  types/
supabase/
  schema.sql
  seed.sql
```

## Validation

```bash
npm run lint
npm run build
```

