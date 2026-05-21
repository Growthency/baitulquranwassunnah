"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function SiteBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-cream-50" />
      {/* drifting aurora mesh */}
      <div className="aurora absolute inset-0 opacity-80" />

      {/* parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-24 top-24 size-[36rem]"
      >
        <div className="blob inset-0 bg-brand-300/40" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-28 top-[28rem] size-[34rem]"
      >
        <div className="blob inset-0 bg-gold-300/35" />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[8%] top-[120vh] size-[32rem]"
      >
        <div className="blob inset-0 bg-teal-300/30" />
      </motion.div>
      <motion.div
        style={{ y: y4 }}
        className="absolute right-[6%] top-[180vh] size-[30rem]"
      >
        <div className="blob inset-0 bg-maroon-300/25" />
      </motion.div>

      {/* gentle vignette + grain to keep it premium */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_55%,rgba(252,250,242,0.65)_100%)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
