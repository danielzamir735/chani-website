"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const WA_LINK = "https://wa.me/YOUR_NUMBER_HERE?text=שלום חני, אשמח לתיאום פגישת ייעוץ";

// Heading split into lines for dramatic staggered reveal
const headingLines = [
  { text: "מהמינוס", white: true },
  { text: "לשקט", white: false },
  { text: "נפשי.", white: false },
];

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 90, skewY: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 80,
      delay: 0.25 + i * 0.18,
    },
  }),
};

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

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center pt-20"
      style={{
        background:
          "linear-gradient(160deg, #0a0504 0%, #130810 55%, #080a12 100%)",
      }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,175,55,0.25) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.35,
        }}
      />

      {/* Burgundy glow — text side (RTL: right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 78% 50%, rgba(128,0,32,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Gold glow — image side (RTL: left) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 60% at 22% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-[5%] right-[5%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)",
          opacity: 0.35,
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, #080504, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full relative z-[5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text side (RTL: right column on desktop) ── */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div
                className="h-px w-10 flex-shrink-0"
                style={{
                  background: "linear-gradient(to left, #D4AF37, transparent)",
                }}
              />
              <span
                className="text-xs font-extrabold tracking-[0.28em] uppercase"
                style={{ color: "#D4AF37" }}
              >
                חני כוכב לב — יועצת לכלכלת המשפחה
              </span>
            </motion.div>

            {/* Heading — line by line */}
            <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[1.05] tracking-tight">
              {headingLines.map((line, i) => (
                <span key={line.text} className="block overflow-hidden">
                  <motion.span
                    custom={i}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    className="block"
                    style={
                      line.white
                        ? { color: "#ffffff" }
                        : {
                            background:
                              "linear-gradient(135deg, #800020 20%, #D4AF37 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                    }
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="text-lg md:text-xl leading-relaxed max-w-md"
              style={{ color: "rgba(231,220,210,0.72)" }}
            >
              ייעוץ אישי ומקצועי שמלווה משפחות ברחבי הארץ — לצאת מחובות,
              לנהל תקציב חכם, ולבנות עתיד כלכלי בטוח.
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 55px rgba(128,0,32,0.7), 0 0 130px rgba(128,0,32,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative inline-flex items-center px-9 py-4 rounded-full text-white font-bold text-lg overflow-hidden cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #800020 0%, #a0182e 60%, #800020 100%)",
                  boxShadow:
                    "0 10px 36px rgba(128,0,32,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.14) 50%, transparent 62%)",
                  }}
                  animate={{ x: ["-100%", "220%"] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: 2.5,
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
              transition={{ duration: 1, delay: 1.4 }}
              className="flex items-center gap-7 flex-wrap pt-1"
            >
              {trustStats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold text-white leading-none">
                    {stat.value}
                  </span>
                  <span
                    className="text-xs leading-tight"
                    style={{ color: "rgba(212,175,55,0.65)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image side (RTL: left column on desktop, below text on mobile) ── */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              style={{ y: imageY }}
              className="relative w-full max-w-[340px] md:max-w-[400px] mb-8 me-2"
            >
              {/* Gold offset frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-5 -right-5 left-6 bottom-6 rounded-3xl pointer-events-none"
                style={{ border: "1px solid rgba(212,175,55,0.22)" }}
              />

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 56px 90px -16px rgba(0,0,0,0.75), 0 0 0 1px rgba(212,175,55,0.14), inset 0 1px 0 rgba(212,175,55,0.1)",
                }}
              >
                <Image
                  src="/chani.jpg"
                  alt="חני כוכב לב — יועצת פיננסית"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Bottom gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,5,4,0.7) 0%, rgba(8,5,4,0.15) 35%, transparent 65%)",
                  }}
                />

                {/* Name overlay on photo */}
                <div className="absolute bottom-6 right-6 left-6 text-right">
                  <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                    חני כוכב לב
                  </p>
                  <p
                    className="text-sm drop-shadow-md"
                    style={{ color: "#D4AF37" }}
                  >
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
                    "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.2)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #800020, #D4AF37)",
                    }}
                  >
                    ✓
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-stone-900 leading-tight">
                      500+ משפחות
                    </div>
                    <div className="text-xs text-stone-500">
                      יצאו לחופש כלכלי
                    </div>
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
