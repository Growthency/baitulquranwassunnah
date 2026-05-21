import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/sections";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "ব্লগ",
  alternates: { canonical: "/blog" },
  description:
    "কুরআন শিক্ষা, হিফজ, নূরানী পদ্ধতি ও সন্তান গঠন নিয়ে উপকারী লেখা ও প্রবন্ধ।",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        arabic="اِقْرَأْ بِاسْمِ رَبِّكَ"
        eyebrow="ব্লগ ও প্রবন্ধ"
        title="জ্ঞান, অনুপ্রেরণা ও দিকনির্দেশনা"
        description="অভিভাবক ও শিক্ষার্থীদের জন্য দ্বীনি শিক্ষাবিষয়ক চিন্তাশীল ও উপকারী লেখার সংকলন।"
        breadcrumb={[{ label: "ব্লগ" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          {featured && (
            <Reveal>
              <div className="mb-10">
                <BlogCard post={featured} featured />
              </div>
            </Reveal>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i % 3}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
