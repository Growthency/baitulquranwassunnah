import Link from "next/link";
import { ArrowRight, Megaphone, Phone } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./Reveal";
import { Icon } from "./ui/Icon";
import { StatCounter } from "./StatCounter";
import { SectionDivider } from "./SectionDivider";
import { Marquee } from "./Marquee";
import { Button } from "./ui/Button";
import { stats, notices } from "@/lib/content";
import { site } from "@/lib/site";

export function StatsBand() {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 px-6 py-12 shadow-2xl shadow-brand-950/30 sm:px-12 sm:py-14">
        <div className="pattern-arabesque absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="flex flex-col items-center px-2 text-center md:border-l md:border-white/10 md:first:border-l-0">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-gold-300 ring-1 ring-white/10">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <div className="mt-4 font-display text-4xl font-bold text-cream-50 sm:text-5xl">
                  <StatCounter
                    value={s.value}
                    suffix={s.suffix}
                    animate={s.value < 1900}
                  />
                </div>
                <p className="mt-2 text-sm text-cream-100/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}

export function NoticeTicker() {
  return (
    <Container>
      <div className="flex items-stretch overflow-hidden rounded-2xl bg-white/70 ring-1 ring-brand-100 backdrop-blur">
        <div className="flex shrink-0 items-center gap-2 bg-brand-700 px-5 text-cream-50">
          <Megaphone className="size-4 text-gold-300" />
          <span className="text-sm font-semibold">ঘোষণা</span>
        </div>
        <Marquee className="flex-1 py-3">
          {notices.map((n) => (
            <span
              key={n.title}
              className="mx-6 inline-flex items-center gap-2 text-sm text-ink-soft"
            >
              <span className="inline-block size-1.5 rounded-full bg-gold-400" />
              <span className="font-medium text-brand-700">{n.tag}:</span>
              {n.title}
            </span>
          ))}
        </Marquee>
      </div>
    </Container>
  );
}

export function CTASection({
  title = "আপনার সন্তানের উজ্জ্বল ভবিষ্যতের যাত্রা শুরু হোক এখান থেকেই",
  subtitle = "সীমিত আসনে চলছে ভর্তি কার্যক্রম। আজই যোগাযোগ করুন কিংবা অনলাইনে আবেদন করে নিশ্চিত করুন আপনার সন্তানের আসন।",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 text-cream-50">
      <SectionDivider variant="wave" flip className="text-cream-50" />
      <div className="pattern-arabesque absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-gold-shimmer font-arabic text-2xl" dir="rtl">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-[2.7rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-cream-100/80">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/admissions" variant="gold" size="lg">
              ভর্তি আবেদন করুন <ArrowRight className="size-5" />
            </Button>
            <Button
              href={`tel:${site.phoneRaw}`}
              variant="light"
              size="lg"
              className="bg-white/10 text-cream-50 ring-1 ring-white/20 hover:bg-white/20"
            >
              <Phone className="size-5" /> {site.phone}
            </Button>
          </div>
        </div>
      </Container>
      <SectionDivider variant="wave" className="text-cream-50" />
    </section>
  );
}

export function SectionWrap({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
