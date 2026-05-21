"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/Button";
import { Typewriter } from "./Typewriter";
import { site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      {/* Hero-local glow accents */}
      <div className="pointer-events-none absolute -right-10 top-24 size-[34rem] rounded-full bg-gold-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-[30rem] rounded-full bg-brand-200/30 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center lg:text-right"
        >
          <motion.div variants={item} className="flex justify-center lg:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-100 backdrop-blur">
              <Sparkles className="size-4 text-gold-500" />
              আসসালামু আলাইকুম · প্রতিষ্ঠিত {site.established}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            dir="rtl"
            className="text-gold-shimmer mt-6 font-arabic text-2xl sm:text-3xl"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-[2.5rem] font-bold leading-[1.12] text-balance text-brand-900 sm:text-6xl lg:text-[4rem]"
          >
            কুরআন ও সুন্নাহর আলোকে
            <span className="mt-2 block min-h-[1.2em]">
              <Typewriter
                className="text-shimmer"
                words={[
                  "আদর্শ প্রজন্ম গড়ি",
                  "হাফেজ তৈরি করি",
                  "আলোকিত মানুষ গড়ি",
                  "দ্বীন ও দুনিয়ার সমন্বয়",
                ]}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg lg:ml-auto lg:mr-0"
          >
            যাত্রাবাড়ী, ঢাকায় অবস্থিত একটি আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান।
            নূরানী, নাজেরা, হিফজ ও কিতাব বিভাগের পাশাপাশি সাধারণ শিক্ষার সমন্বয়ে
            আমরা গড়ে তুলি আত্মনির্ভর, চরিত্রবান ও আল্লাহভীরু প্রজন্ম।
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-end"
          >
            <Button href="/admissions" variant="gold" size="lg">
              ভর্তি আবেদন করুন <ArrowRight className="size-5" />
            </Button>
            <Button href="/programs" variant="outline" size="lg">
              বিভাগসমূহ দেখুন
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-ink-soft lg:justify-end"
          >
            <span className="inline-flex items-center gap-2">
              <BookOpen className="size-4 text-brand-600" /> তাজবিদসহ বিশুদ্ধ কুরআন
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-4 text-brand-600" /> অভিজ্ঞ উস্তাদ
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="size-4 text-brand-600" /> নিরাপদ আবাসন
            </span>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* rotating arabesque ring */}
          <div className="animate-spin-slow pointer-events-none absolute -inset-6 rounded-[3rem] pattern-arabesque opacity-60" />

          <motion.div
            style={{ y: imgY }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-950/25 ring-1 ring-gold-300/40"
          >
            <Image
              src="/images/hero-main.webp"
              alt="বিশুদ্ধ কুরআন তিলাওয়াতে মগ্ন শিক্ষার্থী"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />

            {/* caption chip on image */}
            <div className="absolute inset-x-5 bottom-5">
              <div className="glass-dark rounded-2xl px-5 py-4 text-cream-50">
                <p className="font-arabic text-lg text-gold-200" dir="rtl">
                  وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                </p>
                <p className="mt-1 text-sm text-cream-100/80">
                  “আর কুরআন তিলাওয়াত করো ধীরে-সুস্থে, সুস্পষ্টভাবে।”
                </p>
              </div>
            </div>
          </motion.div>

          {/* floating badges */}
          <motion.div
            style={{ y: badgeY }}
            className="animate-float absolute -left-4 top-10 sm:-left-8"
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-brand-950/10">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-700 text-cream-50">
                <GraduationCap className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-brand-900">৪০+</p>
                <p className="text-xs text-ink-muted">কৃতী হাফেজ</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: badgeY }}
            className="animate-float-slow absolute -right-3 bottom-24 sm:-right-7"
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-brand-950/10">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-gold-400 text-brand-950">
                <BookOpen className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-brand-900">৬টি</p>
                <p className="text-xs text-ink-muted">শিক্ষা বিভাগ</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ink-muted"
        >
          <span className="text-xs">নিচে স্ক্রল করুন</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink-muted/40 p-1">
            <span className="size-1.5 rounded-full bg-brand-600" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
