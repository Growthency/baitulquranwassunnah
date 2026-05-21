import { site } from "./site";
import type { BlogPost } from "./blog";
import type { Faq } from "./content";

const ORG_ID = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: site.nameFull,
    alternateName: site.nameEn,
    url: site.url,
    logo: `${site.url}/logo.webp`,
    image: `${site.url}/og.png`,
    description: site.description,
    foundingDate: String(site.establishedEn),
    email: site.email,
    telephone: site.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: "BGB Market Jame Masjid",
      addressLocality: "Jatrabari",
      addressRegion: "Dhaka",
      postalCode: "1204",
      addressCountry: "BD",
    },
    areaServed: "Dhaka, Bangladesh",
    sameAs: [site.social.facebook, site.social.youtube],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.nameFull,
    inLanguage: "bn-BD",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${site.url}${item.path}` } : {}),
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "bn-BD",
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    articleSection: post.category,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
