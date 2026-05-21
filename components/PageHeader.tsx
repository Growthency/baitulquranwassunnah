import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui/SectionHeading";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  arabic,
  title,
  description,
  breadcrumb = [],
}: {
  eyebrow?: string;
  arabic?: string;
  title: string;
  description?: string;
  breadcrumb?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-36 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full pattern-arabesque opacity-40" />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {arabic && (
            <Reveal>
              <p className="font-arabic text-2xl text-gold-500 sm:text-3xl" dir="rtl">
                {arabic}
              </p>
            </Reveal>
          )}
          {eyebrow && (
            <Reveal delay={1}>
              <div className="mt-3">
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            </Reveal>
          )}
          <Reveal delay={2}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-balance text-brand-900 sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={3}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
          <Reveal delay={4}>
            <nav className="mt-7 flex items-center gap-2 text-sm text-ink-muted">
              <Link href="/" className="transition-colors hover:text-brand-700">
                হোম
              </Link>
              {breadcrumb.map((c) => (
                <span key={c.label} className="flex items-center gap-2">
                  <ChevronLeft className="size-4 rotate-180 text-gold-400" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-brand-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-brand-700">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
