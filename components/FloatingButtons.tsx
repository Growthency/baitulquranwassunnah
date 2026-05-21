"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { WhatsappIcon } from "./ui/SocialIcons";
import { site } from "@/lib/site";

export function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;

  return (
    <>
      {/* WhatsApp — bottom left */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp-এ যোগাযোগ করুন"
        className="group fixed bottom-5 left-5 z-40 inline-flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:gap-2 hover:pr-5"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsappIcon className="size-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[10rem]">
          WhatsApp করুন
        </span>
      </a>

      {/* Scroll to top — bottom right */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="উপরে ফিরে যান"
            className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-brand-700 text-cream-50 shadow-xl shadow-brand-950/25 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-800"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
