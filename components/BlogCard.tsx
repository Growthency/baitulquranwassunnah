import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBnDate, toBn, cn } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl bg-white/80 ring-1 ring-brand-100 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-950/15",
        featured && "md:flex-row",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/10]",
        )}
      >
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-700 shadow">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-ink-muted">
          <span>{formatBnDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" /> {toBn(post.readMins)} মিনিট পড়া
          </span>
        </div>
        <h3
          className={cn(
            "mt-3 font-display font-semibold text-brand-900 transition-colors group-hover:text-brand-700",
            featured ? "text-2xl" : "text-xl",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition-colors group-hover:text-gold-600">
          সম্পূর্ণ পড়ুন
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
