"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.17 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeOut" } },
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

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 md:px-16 lg:px-28 bg-[#fdf8f0] overflow-hidden"
    >
      {/* Parallax background decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[#800020]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#D4AF37]/8 rounded-full blur-3xl" />
      </motion.div>

      {/* Text content — right in RTL, bottom on mobile */}
      <motion.div
        className="flex-1 flex flex-col items-end text-right gap-6 order-2 md:order-first relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-bold tracking-[0.25em] text-[#800020] uppercase"
        >
          ייעוץ פיננסי משפחתי | חני כוכב לב
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight text-stone-800"
        >
          הגיע הזמן שתהיה לך{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#800020]">שליטה אמיתית</span>
            <motion.span
              className="absolute inset-x-0 bottom-0.5 h-[5px] bg-[#D4AF37]/50 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 1.0, ease: "easeOut" }}
              style={{ originX: 1 }}
            />
          </span>{" "}
          על הכסף שלך
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-stone-500 leading-relaxed max-w-lg"
        >
          ניהול כסף לא צריך להיות מלחיץ. יחד נבנה מערכת פשוטה שעובדת בשבילכם
          — ותחזרו לישון בשקט בלילה.
        </motion.p>

        <motion.ul variants={fadeUp} className="flex flex-col gap-3">
          {proofPoints.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 text-stone-600 text-base"
            >
              <span className="text-[#D4AF37] shrink-0 text-lg">✦</span>
              <span>{p}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 pt-1"
        >
          <div className="flex -space-x-2 space-x-reverse">
            {["ר", "ש", "מ"].map((initial) => (
              <div
                key={initial}
                className="w-9 h-9 rounded-full bg-[#800020]/15 border-2 border-[#fdf8f0] flex items-center justify-center text-[#800020] text-xs font-bold"
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-stone-500 text-sm">
            <span className="font-bold text-stone-700">+200 משפחות</span> כבר
            שינו את חייהן הכלכליים
          </p>
        </motion.div>
      </motion.div>

      {/* Lead Magnet Form — left in RTL, top on mobile */}
      <motion.div
        id="contact"
        className="flex-1 w-full max-w-md order-first md:order-last relative z-10"
        initial={{ opacity: 0, x: -36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl shadow-[#800020]/10 border border-stone-100 p-8">
          {/* Form header */}
          <div className="text-right mb-7">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#b8912e] text-xs font-bold tracking-wide mb-3">
              חינם לחלוטין
            </span>
            <h3 className="text-2xl font-bold text-stone-800">
              קבלו את המדריך שלנו
            </h3>
            <p className="text-stone-500 text-sm mt-2 leading-relaxed">
              5 צעדים פשוטים לשלוט בכסף שלכם תוך 30 יום
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center py-8 flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-3xl">
                ✅
              </div>
              <h4 className="font-bold text-stone-800 text-lg">תודה רבה!</h4>
              <p className="text-stone-500 text-sm">
                המדריך בדרך אליכם. נדבר בקרוב!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-stone-700 text-sm font-semibold text-right">
                  שם מלא
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="הכניסו את שמכם המלא"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-right placeholder:text-stone-400 outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-stone-700 text-sm font-semibold text-right">
                  מספר טלפון
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05X-XXXXXXX"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-left placeholder:text-stone-400 outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-[#800020] text-white font-bold rounded-xl shadow-lg shadow-[#800020]/25 cursor-pointer mt-1"
              >
                שלחו לי את המדריך ←
              </motion.button>

              <p className="text-stone-400 text-xs text-center">
                ללא ספאם. ניתן להסיר בכל עת.
              </p>
            </form>
          )}
        </div>

        {/* Trust badges below form */}
        <div className="flex justify-center gap-6 mt-4">
          {["🔒 מאובטח", "✓ ללא התחייבות", "⚡ תגובה מהירה"].map((badge) => (
            <span key={badge} className="text-stone-400 text-xs">
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
