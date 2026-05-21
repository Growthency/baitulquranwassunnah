import Link from "next/link";
import Image from "next/image";
import { Home, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center py-32">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="relative inline-flex size-20 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold-300/50">
            <Image
              src="/logo.webp"
              alt={site.nameFull}
              width={160}
              height={160}
              className="size-full object-cover"
            />
          </span>
          <p className="text-shimmer mt-8 font-display text-7xl font-bold">৪০৪</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-brand-900 sm:text-3xl">
            পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className="mt-3 text-ink-soft">
            আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরিয়ে নেওয়া হয়েছে অথবা ঠিকানাটি সঠিক নয়।
            চলুন আবার শুরুতে ফিরে যাই।
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="primary">
              <Home className="size-4" /> হোমে ফিরুন
            </Button>
            <Button href="/programs" variant="outline">
              বিভাগসমূহ দেখুন <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
