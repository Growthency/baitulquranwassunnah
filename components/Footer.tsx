import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FacebookIcon, YoutubeIcon } from "./ui/SocialIcons";
import { nav, site } from "@/lib/site";
import { programs } from "@/lib/content";
import { toBn } from "@/lib/utils";

export function Footer() {
  const year = toBn(new Date().getFullYear());
  return (
    <footer className="relative z-10 mt-24 overflow-hidden bg-brand-950 text-cream-100/80">
      <div className="pattern-arabesque absolute inset-0 opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative inline-flex size-14 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold-300/40">
                <Image
                  src="/logo.webp"
                  alt={site.nameFull}
                  width={112}
                  height={112}
                  className="size-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold text-cream-50">
                  {site.name}
                </span>
                <span className="font-arabic text-base text-gold-300" dir="rtl">
                  {site.nameArabic}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              কুরআন ও সুন্নাহর আলোকে আদর্শ, আত্মনির্ভর ও চরিত্রবান প্রজন্ম গড়ে
              তোলাই আমাদের অঙ্গীকার। দ্বীনি ও সাধারণ শিক্ষার সুন্দর সমন্বয়ে গড়ে
              ওঠে আগামীর আলোকিত মানুষ।
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-gold-400 hover:text-brand-950"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-gold-400 hover:text-brand-950"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-semibold text-cream-50">
              দ্রুত লিংক
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-base font-semibold text-cream-50">
              বিভাগসমূহ
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {programs.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs#${p.slug}`}
                    className="transition-colors hover:text-gold-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-semibold text-cream-50">
              যোগাযোগ
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-300" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold-300" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-gold-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-300" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-300" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-sm text-cream-100/60 sm:flex-row sm:text-left">
          <p>
            © {year} {site.nameFull}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="font-arabic text-base text-gold-300/80" dir="rtl">
            رَبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
    </footer>
  );
}
