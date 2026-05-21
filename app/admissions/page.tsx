import type { Metadata } from "next";
import { FileText, MessagesSquare, BadgeCheck, CalendarCheck, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/Accordion";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ভর্তি",
  description:
    "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসায় ভর্তির নিয়মাবলি, প্রয়োজনীয় কাগজপত্র ও অনলাইন আবেদন ফরম।",
};

const steps = [
  {
    icon: FileText,
    title: "আবেদন জমা দিন",
    desc: "অনলাইন ফরম পূরণ করুন অথবা সরাসরি অফিসে এসে আবেদন করুন।",
  },
  {
    icon: MessagesSquare,
    title: "মৌখিক যাচাই",
    desc: "শিক্ষার্থীর বর্তমান স্তর জানতে একটি সংক্ষিপ্ত মৌখিক পরীক্ষা নেওয়া হয়।",
  },
  {
    icon: BadgeCheck,
    title: "ভর্তি নিশ্চিত করুন",
    desc: "প্রয়োজনীয় কাগজপত্র জমা ও ভর্তি ফি পরিশোধের মাধ্যমে আসন নিশ্চিত।",
  },
  {
    icon: CalendarCheck,
    title: "ক্লাস শুরু",
    desc: "নির্ধারিত দিনে শুরু হয় আপনার সন্তানের নতুন পথচলা।",
  },
];

const requirements = [
  "শিক্ষার্থীর জন্ম নিবন্ধন সনদের ফটোকপি",
  "সাম্প্রতিক ২ কপি পাসপোর্ট সাইজ ছবি",
  "অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি",
  "পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        arabic="هَلُمَّ إِلَى الْعِلْم"
        eyebrow="ভর্তি কার্যক্রম"
        title="আপনার সন্তানের জন্য একটি আলোকিত শুরু"
        description="সীমিত আসনে চলছে ভর্তি কার্যক্রম। সহজ কয়েকটি ধাপেই সম্পন্ন করুন আবেদন প্রক্রিয়া।"
        breadcrumb={[{ label: "ভর্তি" }]}
      />

      {/* Process */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="ভর্তি প্রক্রিয়া"
            title="মাত্র চারটি সহজ ধাপে"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i % 4}>
                <div className="relative h-full rounded-3xl bg-white/70 p-7 ring-1 ring-brand-100 backdrop-blur">
                  <span className="absolute right-6 top-5 font-display text-5xl font-bold text-brand-100">
                    {i + 1}
                  </span>
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-cream-50 shadow-lg">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-brand-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + requirements */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  align="left"
                  eyebrow="আবেদন করুন"
                  title="অনলাইন ভর্তি ফরম"
                  description="নিচের ফরমটি পূরণ করুন—আমরা দ্রুততম সময়ে আপনার সাথে যোগাযোগ করব।"
                />
                <div className="mt-6 rounded-3xl bg-brand-50/70 p-6 ring-1 ring-brand-100">
                  <h3 className="font-display text-lg font-semibold text-brand-900">
                    যা যা প্রয়োজন
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-ink-soft">
                        <BadgeCheck className="mt-0.5 size-4 shrink-0 text-brand-600" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-brand-100">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-700 text-cream-50">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs text-ink-muted">সরাসরি যোগাযোগ</p>
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="font-display text-lg font-semibold text-brand-900"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <AdmissionForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="সচরাচর জিজ্ঞাসা"
            title="যা জানতে চান অভিভাবকরা"
          />
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
