"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "./ui/Button";
import { FacebookIcon, YoutubeIcon } from "./ui/SocialIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility strip */}
      <div
        className={cn(
          "hidden overflow-hidden bg-brand-900 text-cream-100/90 transition-all duration-500 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5 text-gold-300" />
              {site.address}
            </span>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold-200"
            >
              <Phone className="size-3.5 text-gold-300" />
              {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cream-100/60">আমাদের অনুসরণ করুন</span>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-gold-200"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors hover:text-gold-200"
            >
              <YoutubeIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass shadow-lg shadow-brand-950/5"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold-300/50 sm:size-14">
              <Image
                src="/logo.webp"
                alt={site.nameFull}
                width={112}
                height={112}
                className="size-full object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-brand-900 sm:text-xl">
                {site.name}
              </span>
              <span className="text-[0.7rem] tracking-wide text-ink-muted sm:text-xs">
                মাদরাসা · প্রতিষ্ঠিত {site.established}
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-800"
                      : "text-ink-soft hover:text-brand-700",
                  )}
                >
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-50 ring-1 ring-brand-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button href="/admissions" size="sm" variant="gold" className="hidden sm:inline-flex">
              ভর্তি আবেদন
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="মেনু"
              className="inline-flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-800 ring-1 ring-brand-100 transition-colors hover:bg-brand-100 xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-3 mt-2 rounded-3xl p-4 shadow-xl shadow-brand-950/10 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-brand-700 text-cream-50"
                        : "text-ink-soft hover:bg-brand-50",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button href="/admissions" variant="gold" size="sm">
                ভর্তি আবেদন
              </Button>
              <Button href={`tel:${site.phoneRaw}`} variant="outline" size="sm">
                <Phone className="size-4" /> কল করুন
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
