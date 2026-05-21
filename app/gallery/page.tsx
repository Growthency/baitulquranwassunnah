import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/sections";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "গ্যালারি",
  description:
    "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসার শিক্ষা কার্যক্রম, প্রাঙ্গণ ও নানা মুহূর্তের ছবি।",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        arabic="لَحَظَاتٌ مِنْ رِحَابِنَا"
        eyebrow="গ্যালারি"
        title="আমাদের প্রাঙ্গণের কিছু মুহূর্ত"
        description="শিক্ষা, ইবাদত ও প্রাণবন্ত পরিবেশের কিছু খণ্ডচিত্র, যা বলে দেয় আমাদের প্রতিদিনের গল্প।"
        breadcrumb={[{ label: "গ্যালারি" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <GalleryGrid items={gallery} />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
