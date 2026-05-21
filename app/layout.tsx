import type { Metadata } from "next";
import { Anek_Bangla, Hind_Siliguri, Amiri } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteBackground } from "@/components/SiteBackground";
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
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
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
        <SiteBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
