import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Convert western digits to Bengali numerals (for dates, counts, etc.). */
const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
export function toBn(value: number | string): string {
  return String(value).replace(/[0-9]/g, (d) => bnDigits[Number(d)]);
}

export function formatBnDate(iso: string): string {
  const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  const d = new Date(iso);
  return `${toBn(d.getDate())} ${months[d.getMonth()]}, ${toBn(d.getFullYear())}`;
}
