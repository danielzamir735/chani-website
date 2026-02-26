"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.14 },
  }),
};

const proofPoints = [
  "להפסיק לאבד שינה על חשבונות וחובות",
  "לדעת בדיוק לאן הולך כל שקל",
  "לבנות עתיד כלכלי בטוח לכל המשפחה",
];

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white pt-16">
      {/* ─── Left panel: Image (in RTL, this renders on the left / physical left) ─── */}
      <div className="relative w-full lg:w-[46%] min-h-[55vw] lg:min-h-0 order-first lg:order-last">
        {/* Soft-blur shadow overlay on the inner edge */}
        <div className="absolute inset-0 z-10 lg:bg-gradient-to-r lg:from-white lg:via-white/5 lg:to-transparent pointer-events-none" />
        <Image
          src="/chani.jpg"
          alt="חני כוכב לב — יועצת פיננסית"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="select-none"
          sizes="(max-width: 1024px) 100vw, 46vw"
        />
        {/* Credential badge pinned to bottom of image */}
        <motion.div
          className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl shadow-black/10 border border-stone-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        >
          <p className="text-xs text-stone-400 font-medium">מאמינים בנו</p>
          <p className="text-stone-800 font-bold text-lg leading-tight">+200 משפחות</p>
        </motion.div>
      </div>

      {/* ─── Right panel: Content ─── */}
      <div className="flex-1 flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24 lg:py-0 order-last lg:order-first">
        <div className="max-w-xl mr-auto lg:mr-0 lg:ml-auto w-full">

          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="text-xs font-bold tracking-[0.22em] text-[#800020] uppercase mb-6"
          >
            ייעוץ פיננסי משפחתי · חני כוכב לב
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-[3.6rem] xl:text-7xl font-extrabold leading-[1.1] text-stone-900 mb-6"
          >
            הגיע הזמן
            <br />
            שתהיה לך{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#800020]">שליטה אמיתית</span>
              <motion.span
                className="absolute inset-x-0 bottom-1 h-[6px] bg-[#D4AF37]/40 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                style={{ originX: 1 }}
              />
            </span>
            <br />
            על הכסף שלך
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-stone-500 leading-relaxed mb-8 max-w-md"
          >
            ניהול כסף לא צריך להיות מלחיץ. יחד נבנה מערכת פשוטה שעובדת בשבילכם
            — ותחזרו לישון בשקט בלילה.
          </motion.p>

          {/* Proof points */}
          <motion.ul
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 mb-10"
          >
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-stone-600 text-base">
                <span className="w-5 h-5 rounded-full bg-[#800020]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#800020] text-xs">✓</span>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          {/* Lead form */}
          <motion.div
            id="contact"
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="bg-white border border-stone-100 rounded-3xl shadow-2xl shadow-stone-200/80 p-7"
          >
            {/* Form header */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#b8912e] text-xs font-bold tracking-wide mb-3">
                חינם לחלוטין
              </span>
              <h3 className="text-xl font-bold text-stone-800">קבלו את המדריך שלנו</h3>
              <p className="text-stone-500 text-sm mt-1.5 leading-relaxed">
                5 צעדים פשוטים לשלוט בכסף שלכם תוך 30 יום
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center py-6 flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-2xl">✅</div>
                <h4 className="font-bold text-stone-800 text-lg">תודה רבה!</h4>
                <p className="text-stone-500 text-sm">המדריך בדרך אליכם. נדבר בקרוב!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-stone-700 text-sm font-semibold">שם מלא</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="הכניסו את שמכם המלא"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-right placeholder:text-stone-400 outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-stone-700 text-sm font-semibold">מספר טלפון</label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05X-XXXXXXX"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-left placeholder:text-stone-400 outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition-all duration-200"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-[#800020] text-white font-bold rounded-xl shadow-lg shadow-[#800020]/25 cursor-pointer mt-1 text-base"
                >
                  שלחו לי את המדריך ←
                </motion.button>

                <p className="text-stone-400 text-xs text-center">ללא ספאם. ניתן להסיר בכל עת.</p>
              </form>
            )}
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="visible"
            className="flex justify-start gap-6 mt-5"
          >
            {["🔒 מאובטח", "✓ ללא התחייבות", "⚡ תגובה מהירה"].map((badge) => (
              <span key={badge} className="text-stone-400 text-xs">{badge}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
