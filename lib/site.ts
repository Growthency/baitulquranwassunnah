/**
 * Central configuration for the institution.
 * Update contact details, links and identity here — everything else reads from this.
 */
export const site = {
  name: "বাইতুল কুরআন ওয়াস সুন্নাহ",
  nameFull: "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা",
  nameArabic: "بيت القرآن والسنة",
  nameEn: "Baitul Quran Was Sunnah Madrasa",
  tagline: "কুরআন ও সুন্নাহর আলোকে আদর্শ প্রজন্ম",
  description:
    "যাত্রাবাড়ী, ঢাকায় অবস্থিত একটি আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান — যেখানে নাজেরা, হিফজুল কুরআন, নূরানী ও কিতাব বিভাগের পাশাপাশি সাধারণ শিক্ষার সমন্বয়ে গড়ে ওঠে আদর্শ, আত্মনির্ভর ও চরিত্রবান প্রজন্ম।",
  established: "২০২১",
  establishedEn: 2021,
  url: "https://baitulquranwassunnah.com",

  // ── যোগাযোগ (এই তথ্যগুলো প্রয়োজনে আপডেট করুন) ─────────────────────
  phone: "+৮৮০ ১৬০১-৪০০৫২২",
  phoneRaw: "+8801601400522",
  whatsapp: "8801601400522",
  whatsappMessage:
    "আসসালামু আলাইকুম, আমি বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা সম্পর্কে জানতে চাই।",
  email: "info@baitulquranwassunnah.com",
  admissionEmail: "admission@baitulquranwassunnah.com",
  address: "বিজিবি মার্কেট জামে মসজিদ, যাত্রাবাড়ী, ঢাকা–১২০৪",
  addressShort: "যাত্রাবাড়ী, ঢাকা",
  mapEmbed:
    "https://maps.google.com/maps?q=Jatrabari%2C%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Jatrabari+Dhaka",

  hours: [
    { day: "শনি – বৃহস্পতি", time: "সকাল ৮:০০ – বিকাল ৫:০০" },
    { day: "শুক্রবার", time: "অফিস বন্ধ (আবাসিক চালু)" },
  ],

  social: {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const nav: NavItem[] = [
  { label: "হোম", href: "/" },
  { label: "পরিচিতি", href: "/about" },
  { label: "বিভাগসমূহ", href: "/programs" },
  { label: "ভর্তি", href: "/admissions" },
  { label: "সুযোগ-সুবিধা", href: "/facilities" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "ব্লগ", href: "/blog" },
  { label: "যোগাযোগ", href: "/contact" },
];
