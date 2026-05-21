import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "নাম, মোবাইল ও বার্তা পূরণ করুন।" },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from("contact_messages")
        .insert({ name, phone, email, subject, message });
      if (error) {
        return NextResponse.json(
          { ok: false, error: "বার্তা পাঠানো যায়নি, পরে আবার চেষ্টা করুন।" },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "সার্ভার ত্রুটি ঘটেছে।" },
      { status: 500 },
    );
  }
}
