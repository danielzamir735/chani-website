"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const benefits = [
  "לישון בשקט בלילה — בלי חרדות מחשבונות",
  "חופשה משפחתית שאפשר להרשות לעצמכם",
  "ילדים שגדלים לתוך עתיד בטוח ויציב",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 md:px-16 lg:px-28 bg-[#0F172A] overflow-hidden"
    >
      {/* Parallax background glows */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 right-1/3 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-600/8 rounded-full blur-3xl" />
      </motion.div>

      {/* Text — right side on desktop (RTL), below image on mobile */}
      <motion.div
        className="flex-1 flex flex-col items-end text-right gap-7 order-2 md:order-first relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase"
        >
          ייעוץ פיננסי משפחתי | חני כוכב לב
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          מכאוס כלכלי{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-amber-400">לביטחון</span>
            <motion.span
              className="absolute inset-x-0 bottom-0.5 h-[6px] bg-amber-500/25 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 1.0, ease: "easeOut" }}
              style={{ originX: 1 }}
            />
          </span>{" "}
          ושקט נפשי
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-slate-300 leading-relaxed max-w-lg"
        >
          אני עוזרת למשפחות להשתחרר מהמינוס, לסגור חובות ולבנות עתיד שבו
          הכסף עובד בשבילכם — ולא אתם בשבילו.
        </motion.p>

        <motion.ul variants={fadeUp} className="flex flex-col gap-3">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 text-slate-300 text-base"
            >
              <span className="text-amber-400 shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-4 justify-end pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 bg-amber-500 text-[#0F172A] text-base font-bold rounded-full shadow-lg shadow-amber-500/30 cursor-pointer"
          >
            לקביעת פגישת ייעוץ חינם
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 border border-slate-600 text-slate-300 text-base font-semibold rounded-full cursor-pointer"
          >
            קראו עוד
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image — left side on desktop (RTL), top on mobile */}
      <motion.div
        className="flex-1 w-full max-w-sm md:max-w-none order-first md:order-last relative z-10"
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl shadow-black/60">
          {/*
            Replace placeholder with your photo:
            <Image src="/chani.jpg" alt="חני כוכב לב" fill className="object-cover object-top" />
          */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-slate-500 text-sm select-none">
              תמונה של חני כוכב לב
            </span>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />

          {/* Social proof badge */}
          <motion.div
            className="absolute bottom-6 left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          >
            <p className="text-amber-400 text-xs font-semibold tracking-wide">
              +200 משפחות
            </p>
            <p className="text-white text-sm font-bold">
              שינו את חייהן הכלכליים
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
