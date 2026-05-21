import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const studentName = String(body?.studentName ?? "").trim();
    const guardianName = String(body?.guardianName ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const program = String(body?.program ?? "").trim();
    const age = String(body?.age ?? "").trim();
    const address = String(body?.address ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!studentName || !guardianName || !phone || !program) {
      return NextResponse.json(
        { ok: false, error: "তারকা চিহ্নিত তথ্যগুলো পূরণ করুন।" },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from("admission_applications").insert({
        student_name: studentName,
        guardian_name: guardianName,
        phone,
        program,
        age,
        address,
        message,
      });
      if (error) {
        return NextResponse.json(
          { ok: false, error: "আবেদন জমা দেওয়া যায়নি, পরে চেষ্টা করুন।" },
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
