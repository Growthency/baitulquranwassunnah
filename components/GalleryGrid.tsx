import Image from "next/image";
import type { GalleryItem } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-3">
      {items.map((item, i) => (
        <figure
          key={item.src}
          className={cn(
            "group relative overflow-hidden rounded-3xl ring-1 ring-brand-100",
            item.tall && "row-span-2",
          )}
        >
          <Image
            src={item.src}
            alt={item.caption}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-sm font-medium text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
