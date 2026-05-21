import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description:
    "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসার ঠিকানা, ফোন, ইমেইল ও যোগাযোগ ফরম। যেকোনো জিজ্ঞাসায় আমাদের সাথে যোগাযোগ করুন।",
};

export default function ContactPage() {
  const info = [
    {
      icon: MapPin,
      label: "ঠিকানা",
      value: site.address,
      href: site.mapLink,
    },
    {
      icon: Phone,
      label: "মোবাইল",
      value: `${site.phone}, ${site.phone2}`,
      href: `tel:${site.phoneRaw}`,
    },
    {
      icon: Mail,
      label: "ইমেইল",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <>
      <PageHeader
        arabic="تَوَاصَلْ مَعَنَا"
        eyebrow="যোগাযোগ"
        title="আমরা আপনার অপেক্ষায়"
        description="ভর্তি, বিভাগ কিংবা যেকোনো জিজ্ঞাসায় নিঃসংকোচে যোগাযোগ করুন—আমরা সাহায্য করতে সদা প্রস্তুত।"
        breadcrumb={[{ label: "যোগাযোগ" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left: info + map */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="যোগাযোগের তথ্য"
                title="সরাসরি কথা বলুন বা পরিদর্শন করুন"
              />
              <div className="mt-8 space-y-4">
                {info.map((c, i) => (
                  <Reveal key={c.label} delay={i}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 ring-1 ring-brand-100 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-950/10"
                    >
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-cream-50 shadow-lg">
                        <c.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm text-ink-muted">{c.label}</p>
                        <p className="mt-0.5 font-medium text-brand-900">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
                <Reveal delay={3}>
                  <div className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 ring-1 ring-brand-100 backdrop-blur">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-brand-950 shadow-lg">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm text-ink-muted">অফিস সময়</p>
                      {site.hours.map((h) => (
                        <p key={h.day} className="mt-0.5 text-sm font-medium text-brand-900">
                          {h.day}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-brand-700 text-cream-50 transition-colors hover:bg-brand-800"
                >
                  <FacebookIcon className="size-5" />
                </a>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-brand-700 text-cream-50 transition-colors hover:bg-brand-800"
                >
                  <YoutubeIcon className="size-5" />
                </a>
              </div>

              <Reveal delay={2}>
                <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-brand-100 shadow-lg shadow-brand-950/10">
                  <iframe
                    src={site.mapEmbed}
                    title="মানচিত্রে আমাদের অবস্থান"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={1}>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="বার্তা পাঠান"
                  title="আপনার প্রশ্ন লিখুন"
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
