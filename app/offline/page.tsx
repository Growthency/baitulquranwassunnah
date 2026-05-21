import Image from "next/image";
import { WifiOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata = { title: "অফলাইন" };

export default function OfflinePage() {
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
          <span className="mt-8 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
            <WifiOff className="size-7" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-semibold text-brand-900 sm:text-3xl">
            আপনি এখন অফলাইনে
          </h1>
          <p className="mt-3 text-ink-soft">
            ইন্টারনেট সংযোগ খুঁজে পাওয়া যাচ্ছে না। সংযোগ ফিরে এলে আবার চেষ্টা
            করুন—আমরা আপনার অপেক্ষায় থাকব, ইনশাআল্লাহ।
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary">
              আবার চেষ্টা করুন
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
