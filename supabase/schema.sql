-- ============================================================================
--  Baitul Quran Was Sunnah — database schema
--  Run this in the Supabase SQL editor to enable dynamic blog posts and to
--  persist contact / admission submissions.
--
--  Note: the site ships with the same blog posts as a built-in fallback, so
--  the blog is fully populated even before this runs. Once the blog_posts
--  table has rows, those take precedence over the fallback.
-- ============================================================================

-- ---------- Blog posts -------------------------------------------------------
create table if not exists public.blog_posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  excerpt      text not null,
  cover        text not null,
  category     text not null,
  author       text not null default 'শিক্ষা বিভাগ',
  read_mins    int  not null default 5,
  blocks       jsonb not null default '[]'::jsonb,
  published    boolean not null default true,
  published_at timestamptz not null default now(),
  created_at   timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

-- Anyone may read published posts.
create policy "blog_posts_public_read"
  on public.blog_posts for select
  using (published = true);

-- ---------- Contact messages -------------------------------------------------
create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  phone      text not null,
  email      text,
  subject    text,
  message    text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Allow public (anon) inserts from the website form.
create policy "contact_messages_public_insert"
  on public.contact_messages for insert
  with check (true);

-- ---------- Admission applications -------------------------------------------
create table if not exists public.admission_applications (
  id            uuid primary key default gen_random_uuid(),
  student_name  text not null,
  guardian_name text not null,
  phone         text not null,
  program       text not null,
  age           text,
  address       text,
  message       text,
  status        text not null default 'new',
  created_at    timestamptz not null default now()
);

alter table public.admission_applications enable row level security;

create policy "admission_applications_public_insert"
  on public.admission_applications for insert
  with check (true);

-- ---------- Example blog post (template) -------------------------------------
-- The full set of launch posts is bundled in lib/blog.ts. To manage posts
-- from the database, insert rows following this shape:
--
-- insert into public.blog_posts (slug, title, excerpt, cover, category, author, read_mins, blocks)
-- values (
--   'my-post-slug',
--   'লেখার শিরোনাম',
--   'সংক্ষিপ্ত বিবরণ।',
--   '/images/blog-hifz.webp',
--   'কুরআন শিক্ষা',
--   'শিক্ষা বিভাগ',
--   5,
--   '[{"type":"p","text":"প্রথম অনুচ্ছেদ।"},{"type":"h2","text":"উপশিরোনাম"}]'::jsonb
-- );
