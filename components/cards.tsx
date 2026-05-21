import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Icon } from "./ui/Icon";
import type { Program, Feature, Teacher, Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs#${program.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/80 ring-1 ring-brand-100 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-950/15 hover:ring-brand-200"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={program.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/10 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex size-11 items-center justify-center rounded-2xl bg-white/90 text-brand-700 shadow-md">
          <Icon name={program.icon} className="size-5" />
        </span>
        <p
          className="absolute bottom-3 right-4 font-arabic text-2xl text-gold-200"
          dir="rtl"
        >
          {program.arabic}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-brand-900">
          {program.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-gold-700">{program.tagline}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {program.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-gold-400" /> বয়স {program.age}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-brand-700 transition-colors group-hover:text-gold-700">
            বিস্তারিত
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl bg-white/70 p-7 ring-1 ring-brand-100 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-brand-950/10">
      <div className="absolute -right-8 -top-8 size-24 rounded-full bg-gold-100/60 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
      <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-cream-50 shadow-lg shadow-brand-900/20 transition-transform duration-500 group-hover:scale-105">
        <Icon name={feature.icon} className="size-6" />
      </span>
      <h3 className="relative mt-5 font-display text-lg font-semibold text-brand-900">
        {feature.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
        {feature.description}
      </p>
    </div>
  );
}

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="group flex flex-col items-center rounded-3xl bg-white/75 p-7 text-center ring-1 ring-brand-100 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-950/10">
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-300 to-brand-400 opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70" />
        <span className="relative flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 font-display text-3xl font-semibold text-gold-200 ring-2 ring-white">
          {teacher.initials}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-brand-900">
        {teacher.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-gold-700">{teacher.role}</p>
      <p className="mt-2 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-700 ring-1 ring-brand-100">
        {teacher.specialty}
      </p>
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-3xl bg-white/80 p-7 ring-1 ring-brand-100 backdrop-blur",
        className,
      )}
    >
      <Quote className="size-8 text-gold-300" />
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-ink-soft">
        “{testimonial.quote}”
      </blockquote>
      <div className="mt-5 flex items-center gap-1 text-gold-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-brand-100 pt-4">
        <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-sm font-semibold text-gold-200">
          {testimonial.initials}
        </span>
        <div className="leading-tight">
          <p className="font-medium text-brand-900">{testimonial.name}</p>
          <p className="text-xs text-ink-muted">{testimonial.relation}</p>
        </div>
      </figcaption>
    </figure>
  );
}
