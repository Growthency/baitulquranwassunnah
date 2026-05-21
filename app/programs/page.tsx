import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Users, Home as HomeIcon, CheckCircle2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "বিভাগসমূহ",
  alternates: { canonical: "/programs" },
  description:
    "নূরানী, নাজেরা, হিফজুল কুরআন ও কিতাব বিভাগসহ আমাদের সকল শিক্ষা বিভাগের বিস্তারিত তথ্য।",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        arabic="أَقْسَامُنَا التَّعْلِيمِيَّة"
        eyebrow="শিক্ষা বিভাগসমূহ"
        title="আপনার সন্তানের জন্য সঠিক বিভাগ"
        description="শিশুর প্রথম পাঠ থেকে উচ্চতর কিতাব শিক্ষা পর্যন্ত—প্রতিটি স্তরে সুপরিকল্পিত, যত্নশীল ও অভিজ্ঞ তত্ত্বাবধানে সাজানো আমাদের শিক্ষা কার্যক্রম।"
        breadcrumb={[{ label: "বিভাগসমূহ" }]}
      />

      <div className="space-y-20 py-12 sm:py-16">
        {programs.map((p, i) => {
          const reversed = i % 2 === 1;
          return (
            <section key={p.slug} id={p.slug} className="scroll-mt-28">
              <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  {/* Image */}
                  <Reveal className={reversed ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-950/20 ring-1 ring-gold-300/30">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width: 1024px) 90vw, 45vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                        <p
                          className="absolute bottom-5 right-6 font-arabic text-3xl text-gold-200"
                          dir="rtl"
                        >
                          {p.arabic}
                        </p>
                        <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-2xl bg-white/90 text-brand-700 shadow-md">
                          <Icon name={p.icon} className="size-6" />
                        </span>
                      </div>
                    </div>
                  </Reveal>

                  {/* Content */}
                  <Reveal delay={1} className={reversed ? "lg:order-1" : ""}>
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700 ring-1 ring-gold-200">
                        <Sparkles className="size-4" /> {p.tagline}
                      </span>
                      <h2 className="mt-4 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
                        {p.name}
                      </h2>
                      <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                        {p.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-sm text-ink-soft ring-1 ring-brand-100">
                          <Clock className="size-4 text-brand-600" /> মেয়াদ: {p.duration}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-sm text-ink-soft ring-1 ring-brand-100">
                          <Users className="size-4 text-brand-600" /> বয়স: {p.age}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-sm text-ink-soft ring-1 ring-brand-100">
                          <HomeIcon className="size-4 text-brand-600" /> {p.type}
                        </span>
                      </div>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">
                        <div>
                          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-700">
                            যা শেখানো হয়
                          </h3>
                          <ul className="mt-3 space-y-2">
                            {p.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-700">
                            অর্জন
                          </h3>
                          <ul className="mt-3 space-y-2">
                            {p.outcomes.map((o) => (
                              <li key={o} className="flex items-start gap-2 text-sm text-ink-soft">
                                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-500" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <CTASection
        title="পছন্দের বিভাগ ঠিক করেছেন?"
        subtitle="আপনার সন্তানের জন্য উপযুক্ত বিভাগ নির্বাচন করে আজই ভর্তির আবেদন করুন। প্রয়োজনে আমাদের সাথে কথা বলে বিস্তারিত জেনে নিন।"
      />
    </>
  );
}
