import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, CalendarDays, UserRound, ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/sections";
import { getAllPosts, getAllSlugs, getPostBySlug, type BlogBlock } from "@/lib/blog";
import { formatBnDate, toBn } from "@/lib/utils";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "লেখা পাওয়া যায়নি" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [post.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-bold text-brand-900 sm:text-3xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-9 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-7 text-cream-50 shadow-xl shadow-brand-950/20 sm:p-9">
          <p className="text-pretty text-xl leading-relaxed sm:text-2xl">
            “{block.text}”
          </p>
          {block.cite && (
            <footer className="mt-4 text-sm font-medium text-gold-300">
              — {block.cite}
            </footer>
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-ink-soft">
              <span className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold-500" />
              <span className="text-lg leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p className="mt-5 text-lg leading-[1.95] text-ink-soft">{block.text}</p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = (await getAllPosts())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "হোম", path: "/" },
          { name: "ব্লগ", path: "/blog" },
          { name: post.title },
        ])}
      />
      {/* Cover hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/55 to-brand-950/30" />
        <Container className="absolute inset-x-0 bottom-0 pb-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-gold-400 px-4 py-1.5 text-sm font-semibold text-brand-950">
              {post.category}
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-balance text-cream-50 sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream-100/80">
              <span className="inline-flex items-center gap-2">
                <UserRound className="size-4 text-gold-300" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-gold-300" />
                {formatBnDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-gold-300" /> {toBn(post.readMins)} মিনিট পড়া
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-gold-700"
            >
              <ChevronLeft className="size-4" /> সব লেখায় ফিরে যান
            </Link>
            <p className="mt-6 border-r-4 border-gold-400 bg-gold-50/50 py-3 pr-5 text-lg font-medium leading-relaxed text-brand-800">
              {post.excerpt}
            </p>
            <div className="mt-2">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-brand-50/60 p-6 text-center ring-1 ring-brand-100">
              <p className="font-arabic text-2xl text-gold-700" dir="rtl">
                وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                “আর এ ব্যাপারেই প্রতিযোগীদের প্রতিযোগিতা করা উচিত।”
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold text-brand-900 sm:text-3xl">
                আরও পড়ুন
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-gold-700"
              >
                সব লেখা <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i % 3}>
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </article>
  );
}
