"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WA_LINK = "https://wa.me/YOUR_NUMBER_HERE?text=שלום חני, אשמח לתיאום פגישת ייעוץ";

// Split headline into words — each word gets its own spring-stagger animation
const headlineWords = [
  { text: "מהמינוס", highlight: false },
  { text: "לחופש", highlight: false },
  { text: "כלכלי.", highlight: true },
];

const trustStats = [
  { value: "500+", label: "משפחות שיצאו לחופש" },
  { value: "₪2M+", label: "חובות שנמחקו" },
  { value: "100%", label: "דיסקרטיות" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center pt-20"
      style={{ background: "#F8FAFC" }}
    >
      {/* Animated gradient orb — top right (RTL: left side visually) */}
      <motion.div
        className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.11) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.12, 1], x: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated gradient orb — bottom right (text side) */}
      <motion.div
        className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.2, 1], y: [0, -28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Bottom fade into dark ImpactNumbers section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #F8FAFC, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full relative z-[5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text side ── */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-8 rounded-full shrink-0 bg-rose-400" />
              <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-rose-500">
                חני כוכב לב — יועצת לכלכלת המשפחה
              </span>
            </motion.div>

            {/* Word-by-word split headline */}
            <h1 className="text-[clamp(3rem,7.5vw,6.5rem)] font-extrabold leading-[1.05] tracking-tight">
              {headlineWords.map((word, i) => (
                <span key={word.text} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      damping: 22,
                      stiffness: 90,
                      delay: 0.15 + i * 0.16,
                    }}
                    style={
                      word.highlight
                        ? { color: "#1E3A8A" }
                        : { color: "#0F172A" }
                    }
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72, ease: "easeOut" }}
              className="text-lg md:text-xl leading-relaxed max-w-md text-slate-600"
            >
              ייעוץ אישי ומקצועי שמלווה משפחות ברחבי הארץ — לצאת מחובות,
              לנהל תקציב חכם, ולבנות עתיד כלכלי בטוח.
            </motion.p>

            {/* CTA with pulse rings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="relative inline-flex self-start"
            >
              {/* Pulse ring 1 */}
              <motion.span
                className="absolute inset-0 rounded-full bg-green-400 pointer-events-none"
                animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
              {/* Pulse ring 2 (offset) */}
              <motion.span
                className="absolute inset-0 rounded-full bg-green-400 pointer-events-none"
                animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
              />

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 50px rgba(22,163,74,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-bold text-lg cursor-pointer overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #16A34A 0%, #15803d 60%, #16A34A 100%)",
                  boxShadow: "0 10px 36px rgba(22,163,74,0.4)",
                }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.18) 50%, transparent 62%)",
                  }}
                  animate={{ x: ["-100%", "220%"] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: 2,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative">תאמו פגישת ייעוץ חינם ←</span>
              </motion.a>
            </motion.div>

            {/* Trust stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="flex items-center gap-8 flex-wrap pt-2"
            >
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold leading-none" style={{ color: "#1E3A8A" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image side ── */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              style={{ y: imageY }}
              className="relative w-full max-w-[360px]"
            >
              {/* Blob shape 1 — large, behind photo */}
              <motion.div
                className="absolute -inset-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.14), rgba(244,63,94,0.08))",
                  filter: "blur(2px)",
                }}
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 60% 40% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Blob shape 2 — smaller accent */}
              <motion.div
                className="absolute -inset-4 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30,58,138,0.08), rgba(59,130,246,0.1))",
                }}
                animate={{
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 60% 40% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 60% 40% 70%",
                  ],
                }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />

              {/* Photo card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 40px 80px -16px rgba(15,23,42,0.22), 0 0 0 1px rgba(30,58,138,0.08)",
                }}
              >
                <Image
                  src="/chani.jpg"
                  alt="חני כוכב לב — יועצת פיננסית"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.05) 40%, transparent 70%)",
                  }}
                />

                {/* Name overlay */}
                <div className="absolute bottom-6 right-6 left-6 text-right">
                  <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                    חני כוכב לב
                  </p>
                  <p className="text-sm drop-shadow-md text-blue-200">
                    יועצת לכלכלת המשפחה
                  </p>
                </div>
              </motion.div>

              {/* Floating social proof badge */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 100,
                  delay: 1.5,
                }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-4 py-3"
                style={{
                  boxShadow:
                    "0 20px 50px rgba(15,23,42,0.15), 0 0 0 1px rgba(30,58,138,0.07)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, #1E3A8A, #3B82F6)" }}
                  >
                    ✓
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-slate-900 leading-tight">
                      500+ משפחות
                    </div>
                    <div className="text-xs text-slate-500">יצאו לחופש כלכלי</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
