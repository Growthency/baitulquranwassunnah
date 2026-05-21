# Baitul Quran Was Sunnah Madrasa

Official website for Baitul Quran Was Sunnah Madrasa — Jatrabari, Dhaka.
A modern, content-rich site covering programs, admissions, facilities, gallery and a blog.

## Tech stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **Supabase** for the blog, contact and admission submissions
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Supabase is optional — the blog ships with bundled posts and the forms work out of the box.
To persist submissions and manage posts from the database, copy `.env.local.example` to
`.env.local` and fill in your project values:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Then run the SQL in `supabase/schema.sql` from the Supabase SQL editor.

## Useful notes

- Site identity, contact details and navigation live in `lib/site.ts`.
- Page content (programs, facilities, teachers, FAQ, gallery) lives in `lib/content.ts`.
- Blog posts live in `lib/blog.ts` (used as a fallback when the database is empty).
- Images are optimised webp files under `public/images`. The helper used to generate
  them is `scripts/convert-images.mjs`.

## Build

```bash
npm run build
npm run start
```
