"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formatILS = (n: number) => `₪${n.toLocaleString("he-IL")}`;

export default function Calculator() {
  const [income, setIncome] = useState(12000);
  const [wastePercent, setWastePercent] = useState(15);

  const monthlyWaste = Math.round((income * wastePercent) / 100);
  const yearlySavings = monthlyWaste * 12;

  return (
    <section
      id="calculator"
      className="py-24 px-6 md:px-16 lg:px-28 bg-[#fdf8f0]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] text-[#800020] uppercase mb-3">
            מחשבון חיסכון
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            כמה אתם מפסידים כל שנה?
          </h2>
          <p className="text-stone-500 mt-4 text-lg">
            הזיזו את הגלגלת וגלו את הפוטנציאל הטמון בתקציב שלכם
          </p>
        </div>

        {/* Glassmorphic card */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[#1C0010]/90 backdrop-blur-2xl" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-[#800020]/20" />

          <div className="relative p-8 md:p-12 flex flex-col gap-10">
            {/* Income slider */}
            <div className="flex flex-col gap-4 text-right">
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-bold text-[#D4AF37] tabular-nums">
                  {formatILS(income)}
                </span>
                <label className="text-stone-300 font-semibold text-base">
                  הכנסה חודשית
                </label>
              </div>
              <input
                type="range"
                min={7000}
                max={30000}
                step={500}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#D4AF37] bg-[#3D0018]"
              />
              <div className="flex justify-between text-xs text-stone-600">
                <span>₪30,000</span>
                <span>₪7,000</span>
              </div>
            </div>

            {/* Waste % slider */}
            <div className="flex flex-col gap-4 text-right">
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-bold text-rose-400 tabular-nums">
                  {formatILS(monthlyWaste)}{" "}
                  <span className="text-sm text-stone-500 font-normal">
                    ({wastePercent}%)
                  </span>
                </span>
                <label className="text-stone-300 font-semibold text-base">
                  בזבוז חודשי משוער
                </label>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={1}
                value={wastePercent}
                onChange={(e) => setWastePercent(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-rose-400 bg-[#3D0018]"
              />
              <div className="flex justify-between text-xs text-stone-600">
                <span>40%</span>
                <span>5%</span>
              </div>
            </div>

            <div className="h-px bg-[#800020]/25" />

            {/* Animated result */}
            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-stone-400 text-sm">חיסכון שנתי פוטנציאלי</p>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={yearlySavings}
                  initial={{ opacity: 0, y: -14, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold text-[#D4AF37] tabular-nums"
                >
                  {formatILS(yearlySavings)}
                </motion.p>
              </AnimatePresence>
              <p className="text-stone-500 text-sm">
                בשנה — כסף שיכול לשנות את חיי המשפחה שלכם
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-[#D4AF37] text-[#1C0010] text-base font-bold rounded-2xl shadow-lg shadow-[#D4AF37]/15 cursor-pointer"
            >
              בואו נחלק את התקציב שלכם נכון
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
