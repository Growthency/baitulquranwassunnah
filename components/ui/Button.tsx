import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-cream-50 shadow-lg shadow-brand-900/20 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-900/25 hover:-translate-y-0.5",
  gold: "bg-gradient-to-br from-gold-300 to-gold-500 text-brand-950 shadow-lg shadow-gold-600/25 hover:shadow-xl hover:shadow-gold-600/30 hover:-translate-y-0.5",
  outline:
    "border border-brand-700/40 text-brand-800 hover:border-brand-700 hover:bg-brand-700 hover:text-cream-50",
  ghost: "text-brand-800 hover:bg-brand-50",
  light:
    "bg-cream-50 text-brand-800 shadow-lg shadow-brand-950/10 hover:bg-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const isHttp = href.startsWith("http");
    const isProtocol = isHttp || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isProtocol) {
      return (
        <a
          href={href}
          className={classes}
          {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
