import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
    >
      <div className="marquee-track flex w-max shrink-0 items-center">
        {children}
      </div>
      <div className="marquee-track flex w-max shrink-0 items-center" aria-hidden>
        {children}
      </div>
    </div>
  );
}
