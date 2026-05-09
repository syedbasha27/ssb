-- SSB Publications PostgreSQL schema (Supabase)
create extension if not exists "pgcrypto";

create type public.order_status as enum ('pending', 'paid', 'processing', 'packed', 'shipped', 'delivered', 'cancelled');
create type public.payment_mode as enum ('razorpay', 'cod');
create type public.user_role as enum ('super_admin', 'content_admin', 'order_admin', 'review_admin', 'viewer');

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.users(id) on delete cascade,
  role public.user_role not null default 'viewer',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  description text,
  category_id uuid references public.categories(id),
  age_group text not null,
  price numeric(10,2) not null,
  discounted_price numeric(10,2) not null,
  stock int not null default 0,
  is_featured boolean not null default false,
  is_bestseller boolean not null default false,
  is_new_release boolean not null default false,
  cover_image_path text,
  gallery_paths text[] not null default '{}',
  sample_pdf_path text,
  preview_pdf_path text,
  educational_benefits text[] not null default '{}',
  skill_tags text[] not null default '{}',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  book_id uuid references public.books(id) on delete set null,
  title text not null,
  resource_type text not null,
  chapter text,
  file_path text not null,
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.cart (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  book_id uuid not null references public.books(id) on delete cascade,
  quantity int not null default 1,
  unique(user_id, book_id)
);

create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  discount_type text not null,
  discount_value numeric(10,2) not null,
  min_order_amount numeric(10,2) not null default 0,
  max_uses int,
  active boolean not null default true,
  starts_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  user_id uuid references public.users(id),
  status public.order_status not null default 'pending',
  payment_mode public.payment_mode not null,
  payment_status text not null default 'pending',
  razorpay_order_id text,
  razorpay_payment_id text,
  subtotal numeric(10,2) not null,
  shipping_amount numeric(10,2) not null default 0,
  discount_amount numeric(10,2) not null default 0,
  total_amount numeric(10,2) not null,
  coupon_id uuid references public.coupons(id),
  shipping_name text not null,
  shipping_phone text,
  shipping_email text,
  shipping_address text not null,
  shipping_city text,
  shipping_state text,
  shipping_pincode text,
  tracking_number text,
  invoice_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  book_id uuid references public.books(id),
  title_snapshot text not null,
  unit_price numeric(10,2) not null,
  quantity int not null,
  line_total numeric(10,2) not null
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  user_id uuid references public.users(id) on delete set null,
  rating int not null check (rating between 1 and 5),
  title text,
  body text,
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.school_inquiries (
  id uuid primary key default gen_random_uuid(),
  school_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  city text,
  requirements text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.downloads (
  id uuid primary key default gen_random_uuid(),
  resource_id uuid references public.resources(id) on delete cascade,
  user_id uuid references public.users(id) on delete set null,
  downloaded_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed_at timestamptz not null default now()
);

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  content jsonb not null,
  updated_by uuid references public.users(id),
  updated_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.admins enable row level security;
alter table public.books enable row level security;
alter table public.categories enable row level security;
alter table public.resources enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.cart enable row level security;
alter table public.reviews enable row level security;
alter table public.school_inquiries enable row level security;
alter table public.coupons enable row level security;
alter table public.downloads enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_inquiries enable row level security;
alter table public.site_content enable row level security;

create or replace function public.is_admin(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.admins a
    where a.user_id = uid and a.is_active = true
  );
$$;

create policy "Public can read published books"
on public.books for select using (published_at is not null);

create policy "Public can read categories"
on public.categories for select using (true);

create policy "Public can read approved reviews"
on public.reviews for select using (is_approved = true);

create policy "Public can read resources"
on public.resources for select using (true);

create policy "Users manage their cart"
on public.cart for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can create their own reviews"
on public.reviews for insert with check (auth.uid() = user_id);

create policy "Users can create orders"
on public.orders for insert with check (auth.uid() = user_id or user_id is null);

create policy "Users can view own orders"
on public.orders for select using (auth.uid() = user_id);

create policy "Users can view own order items"
on public.order_items for select using (
  exists (select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid())
);

create policy "Admins full access books"
on public.books for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access categories"
on public.categories for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access resources"
on public.resources for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access orders"
on public.orders for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access order items"
on public.order_items for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access reviews"
on public.reviews for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access school inquiries"
on public.school_inquiries for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access coupons"
on public.coupons for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access downloads"
on public.downloads for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access newsletter"
on public.newsletter_subscribers for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access contact"
on public.contact_inquiries for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));
create policy "Admins full access site content"
on public.site_content for all using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

-- storage buckets to create in Supabase dashboard:
-- book-images, book-pdfs, worksheets, answer-keys, preview-pages
