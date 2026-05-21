import { cn } from "@/lib/utils";

type Variant = "wave" | "curve" | "tilt" | "arc";

const paths: Record<Variant, string> = {
  wave: "M0,64 C240,128 480,8 720,48 C960,88 1200,16 1440,72 L1440,120 L0,120 Z",
  curve: "M0,0 C420,120 1020,120 1440,0 L1440,120 L0,120 Z",
  tilt: "M0,120 L1440,16 L1440,120 Z",
  arc: "M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z",
};

export function SectionDivider({
  variant = "wave",
  className,
  flip = false,
}: {
  variant?: Variant;
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative w-full leading-[0]",
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[52px] w-full sm:h-[80px] md:h-[110px]"
      >
        <path d={paths[variant]} fill="currentColor" />
      </svg>
    </div>
  );
}
