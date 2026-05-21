import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function Eyebrow({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
        light
          ? "bg-white/10 text-gold-200 ring-1 ring-white/15"
          : "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
        className,
      )}
    >
      <span className="inline-block size-1.5 rounded-full bg-gold-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  arabic,
  title,
  description,
  align = "center",
  light = false,
  shimmer = false,
  className,
}: {
  eyebrow?: string;
  arabic?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  shimmer?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {arabic && (
        <Reveal>
          <p
            className={cn(
              "font-arabic text-2xl",
              light ? "text-gold-200/90" : "text-gold-500",
            )}
            dir="rtl"
          >
            {arabic}
          </p>
        </Reveal>
      )}
      {eyebrow && (
        <Reveal delay={1}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={2}>
        <h2
          className={cn(
            "font-display text-3xl font-semibold leading-[1.15] text-balance sm:text-4xl md:text-[2.7rem]",
            shimmer
              ? "text-shimmer"
              : light
                ? "text-cream-50"
                : "text-brand-900",
            align === "center" ? "max-w-3xl" : "max-w-2xl",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={3}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
              light ? "text-cream-100/80" : "text-ink-soft",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
