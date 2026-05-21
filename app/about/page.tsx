import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Quote } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { TeacherCard } from "@/components/cards";
import { StatsBand, CTASection } from "@/components/sections";
import { values, timeline, teachers } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "পরিচিতি",
  alternates: { canonical: "/about" },
  description:
    "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসার লক্ষ্য, উদ্দেশ্য, পথচলা ও শিক্ষকমণ্ডলী সম্পর্কে বিস্তারিত জানুন।",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        arabic="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا"
        eyebrow="আমাদের সম্পর্কে"
        title="কুরআন ও সুন্নাহর আলোকে পথচলা"
        description="2021 সালে যাত্রা শুরু করা একটি আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান, যেখানে দ্বীন ও জ্ঞানের সমন্বয়ে গড়ে ওঠে আগামীর আলোকিত প্রজন্ম।"
        breadcrumb={[{ label: "পরিচিতি" }]}
      />

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-950/20 ring-1 ring-gold-300/30">
                  <Image
                    src="/images/gallery-calligraphy.webp"
                    alt="ইসলামি ক্যালিগ্রাফি"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 text-center shadow-xl shadow-brand-950/10 ring-1 ring-brand-100 backdrop-blur">
                  <p className="font-display text-2xl font-bold text-brand-800">
                    প্রতিষ্ঠিত {site.established}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{site.address}</p>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="যেভাবে শুরু"
                title="একটি স্বপ্ন থেকে একটি প্রতিষ্ঠান"
                description="যাত্রাবাড়ীর বিজিবি মার্কেট জামে মসজিদকে কেন্দ্র করে অল্প কয়েকজন শিক্ষার্থী নিয়ে আমাদের পথচলা শুরু হয়। উদ্দেশ্য ছিল একটাই—এমন একটি প্রতিষ্ঠান গড়ে তোলা, যেখানে শিশুরা শুধু কুরআন মুখস্থই করবে না, বরং কুরআন-সুন্নাহর আদর্শকে ধারণ করে প্রকৃত মানুষ হয়ে উঠবে।"
              />
              <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
                আজ আল্লাহর অশেষ রহমতে আমরা নূরানী, নাজেরা, হিফজ ও কিতাব বিভাগের
                পাশাপাশি সাধারণ শিক্ষার সমন্বয়ে দুই শতাধিক শিক্ষার্থীর দ্বীনি ও
                নৈতিক গঠনে নিয়োজিত। আমরা বিশ্বাস করি, সঠিক শিক্ষা ও আদর্শই পারে
                একটি প্রজন্মকে আলোকিত করতে।
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-white/75 p-8 ring-1 ring-brand-100 backdrop-blur">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-100/60 blur-2xl" />
                <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-cream-50 shadow-lg">
                  <Target className="size-7" />
                </span>
                <h3 className="relative mt-5 font-display text-2xl font-semibold text-brand-900">
                  আমাদের লক্ষ্য
                </h3>
                <p className="relative mt-3 leading-relaxed text-ink-soft">
                  বিশুদ্ধ কুরআন ও সহিহ সুন্নাহর শিক্ষার মাধ্যমে এমন একটি প্রজন্ম
                  গড়ে তোলা, যারা ইলম ও আমলে পরিপূর্ণ, চরিত্রে আদর্শবান এবং সমাজের
                  জন্য কল্যাণকর। দ্বীন ও দুনিয়ার ভারসাম্যপূর্ণ শিক্ষাই আমাদের
                  মূল লক্ষ্য।
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-white/75 p-8 ring-1 ring-brand-100 backdrop-blur">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gold-100/60 blur-2xl" />
                <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-brand-950 shadow-lg">
                  <Eye className="size-7" />
                </span>
                <h3 className="relative mt-5 font-display text-2xl font-semibold text-brand-900">
                  আমাদের স্বপ্ন
                </h3>
                <p className="relative mt-3 leading-relaxed text-ink-soft">
                  একটি আদর্শ দ্বীনি শিক্ষাপ্রতিষ্ঠান হিসেবে গড়ে ওঠা, যেখান থেকে
                  বেরিয়ে আসা প্রতিটি শিক্ষার্থী হবে কুরআনের ধারক, সুন্নাহর
                  অনুসারী এবং আত্মনির্ভর ও দূরদর্শী একজন মানুষ—যে আলো ছড়াবে
                  পরিবার, সমাজ ও দেশে।
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            arabic="قِيَمُنَا"
            eyebrow="আমাদের মূল্যবোধ"
            title="যে ভিত্তির ওপর দাঁড়িয়ে আমরা"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i}>
                <div className="group h-full rounded-3xl bg-white/70 p-7 text-center ring-1 ring-brand-100 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-950/10">
                  <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-cream-50 shadow-lg">
                    <Icon name={v.icon} className="size-6" />
                  </span>
                  <p className="mt-4 font-arabic text-2xl text-gold-700" dir="rtl">
                    {v.arabic}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-brand-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="আমাদের পথচলা"
            title="বছরের পর বছর, ধাপে ধাপে এগিয়ে চলা"
          />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold-300 via-brand-300 to-transparent md:left-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i % 2}>
                  <div
                    className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                      i % 2 === 0
                        ? "md:ml-auto md:pl-12"
                        : "md:mr-auto md:pr-12 md:text-right"
                    }`}
                  >
                    <span
                      className={`absolute left-4 top-1.5 size-3.5 -translate-x-1/2 rounded-full bg-gold-400 ring-4 ring-cream-50 md:left-0 ${
                        i % 2 === 0 ? "md:-left-1.5" : "md:left-auto md:-right-1.5 md:translate-x-1/2"
                      }`}
                    />
                    <div className="rounded-3xl bg-white/75 p-6 ring-1 ring-brand-100 backdrop-blur">
                      <span className="inline-flex rounded-full bg-brand-700 px-3 py-1 font-display text-sm font-semibold text-cream-50">
                        {t.year}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-semibold text-brand-900">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {t.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Muhtamim message */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 p-8 text-cream-50 shadow-2xl shadow-brand-950/30 sm:p-12">
              <div className="pattern-arabesque absolute inset-0 opacity-30" />
              <Quote className="relative size-12 text-gold-400/70" />
              <div className="relative mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-pretty text-lg leading-relaxed text-cream-100/90 sm:text-xl">
                    প্রিয় অভিভাবক, সন্তান আল্লাহর পক্ষ থেকে এক মূল্যবান আমানত।
                    এই আমানতকে কুরআন-সুন্নাহর আলোকে গড়ে তোলার চেয়ে বড় বিনিয়োগ
                    আর কিছু নেই। আমরা প্রতিটি শিক্ষার্থীকে নিজের সন্তানের মতো করে
                    আগলে রাখি—যেন সে ইলম, আমল ও আখলাকে একজন পরিপূর্ণ মানুষ হয়ে
                    গড়ে ওঠে। আপনাদের আস্থা ও দোয়াই আমাদের পথচলার শক্তি।
                  </p>
                </div>
                <div className="flex items-center gap-4 md:flex-col md:items-end md:text-right">
                  <span className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 font-display text-2xl font-bold text-brand-950">
                    আম
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-cream-50">
                      মুফতি আব্দুল্লাহ আল-মামুন
                    </p>
                    <p className="text-sm text-gold-200">মুহতামিম (পরিচালক)</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Teachers */}
      <section id="teachers" className="scroll-mt-28 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="আমাদের উস্তাদগণ"
            title="নিবেদিতপ্রাণ শিক্ষকমণ্ডলী"
            description="যাঁদের জ্ঞান, আন্তরিকতা ও তত্ত্বাবধানে গড়ে ওঠে প্রতিটি শিক্ষার্থী।"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t, i) => (
              <Reveal key={t.name} delay={i % 3}>
                <TeacherCard teacher={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="py-8">
        <StatsBand />
      </div>

      <CTASection />
    </>
  );
}
