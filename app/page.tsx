import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProgramCard, FeatureCard, TeacherCard, TestimonialCard } from "@/components/cards";
import { BlogCard } from "@/components/BlogCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { StatsBand, NoticeTicker, CTASection } from "@/components/sections";
import {
  programs,
  features,
  facilities,
  teachers,
  testimonials,
  values,
  gallery,
} from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <Hero />

      <div className="py-6">
        <NoticeTicker />
      </div>

      {/* About summary */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-5 -top-5 size-28 rounded-3xl bg-gold-200/50 blur-2xl" />
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-950/20 ring-1 ring-gold-300/30">
                  <Image
                    src="/images/about-main.webp"
                    alt="পবিত্র কুরআন"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 max-w-[14rem] rounded-2xl bg-white/90 p-5 shadow-xl shadow-brand-950/10 ring-1 ring-brand-100 backdrop-blur sm:-right-6">
                  <p className="font-arabic text-xl text-gold-700" dir="rtl">
                    إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">
                    “নিশ্চয় আমিই কুরআন নাজিল করেছি, আর আমিই এর সংরক্ষক।”
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                align="left"
                eyebrow="আমাদের পরিচিতি"
                title="দ্বীন ও আদর্শের আলোয় গড়ে ওঠা এক বিশ্বস্ত প্রতিষ্ঠান"
                description="বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা যাত্রাবাড়ী, ঢাকায় অবস্থিত একটি আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান। প্রতিষ্ঠালগ্ন থেকেই আমরা কুরআন-সুন্নাহর বিশুদ্ধ শিক্ষা ও সমকালীন জ্ঞানের সমন্বয়ে আদর্শ প্রজন্ম গড়ে তুলতে নিরলসভাবে কাজ করে যাচ্ছি।"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i}>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 ring-1 ring-brand-100 backdrop-blur">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <Icon name={v.icon} className="size-5" />
                      </span>
                      <div>
                        <p className="font-display font-semibold text-brand-900">
                          {v.title}{" "}
                          <span className="font-arabic text-sm text-gold-700">
                            {v.arabic}
                          </span>
                        </p>
                        <p className="mt-0.5 text-sm leading-snug text-ink-soft">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/about" variant="primary">
                  আমাদের সম্পর্কে জানুন <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />

      {/* Programs */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            arabic="أَقْسَامُنَا التَّعْلِيمِيَّة"
            eyebrow="শিক্ষা বিভাগসমূহ"
            title="প্রতিটি শিক্ষার্থীর জন্য সঠিক পথের দিশা"
            description="শিশুর প্রথম পাঠ থেকে শুরু করে উচ্চতর কিতাব শিক্ষা পর্যন্ত—প্রতিটি ধাপে রয়েছে সুপরিকল্পিত ও অভিজ্ঞ তত্ত্বাবধান।"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={i % 3}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="কেন আমাদের বেছে নেবেন"
            title="যে কারণে অভিভাবকরা আমাদের ওপর আস্থা রাখেন"
            description="শুধু পাঠদান নয়—আমরা গড়ে তুলি একটি নিরাপদ, যত্নশীল ও অনুপ্রেরণাদায়ী পরিবেশ, যেখানে প্রতিটি শিশু তার সর্বোচ্চ সম্ভাবনায় পৌঁছাতে পারে।"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i % 4}>
                <FeatureCard feature={f} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="সুযোগ-সুবিধা"
            title="শেখার জন্য একটি পরিপূর্ণ পরিবেশ"
            description="আবাসন থেকে পাঠাগার, পুষ্টিকর খাবার থেকে নিরাপত্তা—শিক্ষার্থীর সার্বিক বিকাশের জন্য প্রয়োজনীয় সবকিছুর সুন্দর ব্যবস্থা।"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 4).map((f, i) => (
              <Reveal key={f.title} delay={i % 4}>
                <FeatureCard feature={f} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/facilities" variant="outline">
              সকল সুযোগ-সুবিধা দেখুন <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Teachers */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="আমাদের উস্তাদগণ"
            title="অভিজ্ঞ, আদর্শবান ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী"
            description="দেশের স্বনামধন্য প্রতিষ্ঠান থেকে উচ্চশিক্ষিত উস্তাদগণ আন্তরিকতা ও যত্নের সাথে প্রতিটি শিক্ষার্থীকে গড়ে তোলেন।"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t, i) => (
              <Reveal key={t.name} delay={i % 3}>
                <TeacherCard teacher={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="অভিভাবকদের মতামত"
            title="যাঁরা আস্থা রেখেছেন, তাঁদের অভিজ্ঞতা"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i % 2}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow="গ্যালারি" title="আমাদের প্রাঙ্গণের কিছু মুহূর্ত" />
          <div className="mt-12">
            <Reveal>
              <GalleryGrid items={gallery.slice(0, 6)} />
            </Reveal>
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/gallery" variant="outline">
              সম্পূর্ণ গ্যালারি <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Blog */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="ব্লগ ও প্রবন্ধ"
            title="দ্বীনি শিক্ষা নিয়ে আমাদের ভাবনা"
            description="অভিভাবক ও শিক্ষার্থীদের জন্য কুরআন শিক্ষা, হিফজ ও সন্তান গঠনবিষয়ক উপকারী লেখা।"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i % 3}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/blog" variant="outline">
              সকল লেখা পড়ুন <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
