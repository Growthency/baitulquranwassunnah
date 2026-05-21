"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { toBn } from "@/lib/utils";

export function StatCounter({
  value,
  suffix = "",
  duration = 1.8,
  animate = true,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  animate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !animate) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, animate]);

  return (
    <span ref={ref}>
      {toBn(animate ? n : value)}
      {suffix}
    </span>
  );
}
