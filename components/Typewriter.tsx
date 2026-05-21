"use client";

import { useEffect, useMemo, useState } from "react";

export function Typewriter({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = words[index % words.length];

  // Split into grapheme clusters so Bengali conjuncts never break apart.
  const chars = useMemo(() => {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const seg = new Intl.Segmenter("bn", { granularity: "grapheme" });
      return Array.from(seg.segment(current), (s) => s.segment);
    }
    return Array.from(current);
  }, [current]);

  useEffect(() => {
    if (!deleting && sub === chars.length) {
      const t = setTimeout(() => setDeleting(true), 1700);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? 38 : 95,
    );
    return () => clearTimeout(t);
  }, [sub, deleting, chars.length, words.length]);

  return (
    <span className={className} aria-label={current}>
      {chars.slice(0, sub).join("")}
      <span className="caret" aria-hidden />
    </span>
  );
}
