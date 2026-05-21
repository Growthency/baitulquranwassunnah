"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { programs } from "@/lib/content";

const field =
  "w-full rounded-xl bg-white/80 px-4 py-3 text-ink ring-1 ring-brand-100 outline-none transition-all placeholder:text-ink-muted/60 focus:ring-2 focus:ring-gold-400";
const label = "mb-1.5 block text-sm font-medium text-brand-800";

const empty = {
  studentName: "",
  guardianName: "",
  phone: "",
  program: "",
  age: "",
  address: "",
  message: "",
};

export function AdmissionForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const update =
    (k: keyof typeof empty) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setForm(empty);
      } else {
        setStatus("error");
        setError(data.error || "কিছু একটা সমস্যা হয়েছে।");
      }
    } catch {
      setStatus("error");
      setError("সংযোগে সমস্যা হয়েছে, পরে আবার চেষ্টা করুন।");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white/80 p-10 text-center ring-1 ring-brand-100 backdrop-blur">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-brand-900">
          আবেদন গৃহীত হয়েছে!
        </h3>
        <p className="mt-2 max-w-sm text-ink-soft">
          আপনার আবেদনটি আমরা পেয়েছি। ভর্তিসংক্রান্ত পরবর্তী ধাপ জানাতে আমরা শীঘ্রই
          আপনার সাথে যোগাযোগ করব, ইনশাআল্লাহ।
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-medium text-cream-50 transition-colors hover:bg-brand-800"
        >
          নতুন আবেদন করুন
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white/70 p-6 ring-1 ring-brand-100 backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="a-student">
            শিক্ষার্থীর নাম <span className="text-maroon-400">*</span>
          </label>
          <input
            id="a-student"
            className={field}
            placeholder="শিক্ষার্থীর পূর্ণ নাম"
            value={form.studentName}
            onChange={update("studentName")}
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="a-guardian">
            অভিভাবকের নাম <span className="text-maroon-400">*</span>
          </label>
          <input
            id="a-guardian"
            className={field}
            placeholder="অভিভাবকের নাম"
            value={form.guardianName}
            onChange={update("guardianName")}
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="a-phone">
            মোবাইল নম্বর <span className="text-maroon-400">*</span>
          </label>
          <input
            id="a-phone"
            className={field}
            placeholder="01XXXXXXXXX"
            value={form.phone}
            onChange={update("phone")}
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="a-program">
            যে বিভাগে ভর্তি হতে চান <span className="text-maroon-400">*</span>
          </label>
          <select
            id="a-program"
            className={field}
            value={form.program}
            onChange={update("program")}
            required
          >
            <option value="" disabled>
              বিভাগ নির্বাচন করুন
            </option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="a-age">
            শিক্ষার্থীর বয়স
          </label>
          <input
            id="a-age"
            className={field}
            placeholder="যেমন: 7 বছর"
            value={form.age}
            onChange={update("age")}
          />
        </div>
        <div>
          <label className={label} htmlFor="a-address">
            ঠিকানা
          </label>
          <input
            id="a-address"
            className={field}
            placeholder="বর্তমান ঠিকানা"
            value={form.address}
            onChange={update("address")}
          />
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="a-message">
          অতিরিক্ত তথ্য
        </label>
        <textarea
          id="a-message"
          rows={4}
          className={field}
          placeholder="জানাতে চান এমন কিছু থাকলে লিখুন..."
          value={form.message}
          onChange={update("message")}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-maroon-50 px-4 py-3 text-sm text-maroon-600">
          <AlertCircle className="size-4" /> {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 px-8 py-3.5 font-medium text-brand-950 shadow-lg shadow-gold-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" /> জমা হচ্ছে...
          </>
        ) : (
          <>
            <Send className="size-5" /> আবেদন জমা দিন
          </>
        )}
      </button>
    </form>
  );
}
