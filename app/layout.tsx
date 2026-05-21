import type { Metadata, Viewport } from "next";
import { Anek_Bangla, Hind_Siliguri, Amiri } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteBackground } from "@/components/SiteBackground";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PWA } from "@/components/PWA";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const anek = Anek_Bangla({
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-anek",
});

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "মাদরাসা",
    "হিফজ",
    "নূরানী",
    "কিতাব বিভাগ",
    "ইসলামিক শিক্ষা",
    "যাত্রাবাড়ী মাদরাসা",
    "ঢাকা মাদরাসা",
    "Baitul Quran Was Sunnah",
    "Madrasa Dhaka",
  ],
  authors: [{ name: site.nameFull }],
  creator: site.nameFull,
  publisher: site.nameFull,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: site.url,
    siteName: site.nameFull,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: site.nameFull },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: site.name,
  },
  applicationName: site.name,
};

export const viewport: Viewport = {
  themeColor: "#134634",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${anek.variable} ${hind.variable} ${amiri.variable} antialiased`}
    >
      <body className="relative min-h-dvh overflow-x-hidden bg-cream-50 text-ink">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-2.5 focus:text-cream-50 focus:shadow-lg"
        >
          মূল কন্টেন্টে যান
        </a>
        <SiteBackground />
        <Navbar />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <PWA />
      </body>
    </html>
  );
}
