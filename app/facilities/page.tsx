import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Sunrise } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/cards";
import { CTASection } from "@/components/sections";
import { facilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "সুযোগ-সুবিধা",
  alternates: { canonical: "/facilities" },
  description:
    "আবাসন, পুষ্টিকর খাবার, পাঠাগার, নিরাপত্তা ও সুসজ্জিত পরিবেশসহ আমাদের সকল সুযোগ-সুবিধা সম্পর্কে জানুন।",
};

const routine = [
  { time: "ফজর", detail: "জামাতে নামাজ, তিলাওয়াত ও সকালের সবক" },
  { time: "সকাল", detail: "নাশতা ও নিয়মিত শ্রেণি কার্যক্রম" },
  { time: "যোহর", detail: "জামাতে নামাজ, দুপুরের খাবার ও বিশ্রাম" },
  { time: "আসর", detail: "সবক পুনরাবৃত্তি ও খেলাধুলা" },
  { time: "মাগরিব", detail: "তিলাওয়াত, আমুখতা ও দোয়া" },
  { time: "ইশা", detail: "রাতের খাবার, পড়া শেষে বিশ্রাম" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        arabic="بِيئَةٌ آمِنَةٌ لِلتَّعَلُّم"
        eyebrow="সুযোগ-সুবিধা"
        title="শেখার জন্য একটি পরিপূর্ণ পরিবেশ"
        description="একজন শিক্ষার্থীর সার্বিক বিকাশের জন্য প্রয়োজনীয় প্রতিটি সুবিধা—নিরাপত্তা, যত্ন ও স্বাচ্ছন্দ্যের সমন্বয়ে।"
        breadcrumb={[{ label: "সুযোগ-সুবিধা" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i % 4}>
                <FeatureCard feature={f} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety highlight */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-950/20 ring-1 ring-gold-300/30">
                <Image
                  src="/images/gallery-campus.webp"
                  alt="মাদরাসা প্রাঙ্গণ"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="নিরাপত্তা ও তত্ত্বাবধান"
                title="অভিভাবকের নিশ্চিন্ত আস্থার জায়গা"
                description="সন্তানের নিরাপত্তায় আমরা কোনো আপস করি না। সম্পূর্ণ ক্যাম্পাস সার্বক্ষণিক তত্ত্বাবধান ও নজরদারির আওতাধীন।"
              />
              <ul className="mt-6 space-y-3">
                {[
                  "সম্পূর্ণ ক্যাম্পাসে ২৪ ঘণ্টা সিসিটিভি নজরদারি",
                  "নিয়ন্ত্রিত প্রবেশ ও দায়িত্বশীল তত্ত্বাবধান",
                  "প্রাথমিক স্বাস্থ্যসেবা ও জরুরি ব্যবস্থা",
                  "পরিচ্ছন্ন ও স্বাস্থ্যকর পরিবেশ",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 ring-1 ring-brand-100 backdrop-blur">
                    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-600" />
                    <span className="text-ink-soft">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Daily routine */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="দৈনন্দিন জীবন"
            title="একনজরে আবাসিক রুটিন"
            description="সুশৃঙ্খল দৈনন্দিন রুটিনে গড়ে ওঠে ইবাদত, পড়াশোনা ও বিশ্রামের সুন্দর ভারসাম্য।"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routine.map((r, i) => (
              <Reveal key={r.time} delay={i % 3}>
                <div className="flex items-center gap-4 rounded-3xl bg-white/70 p-6 ring-1 ring-brand-100 backdrop-blur">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-brand-950">
                    <Sunrise className="size-6" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-brand-900">
                      {r.time}
                    </p>
                    <p className="text-sm text-ink-soft">{r.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
