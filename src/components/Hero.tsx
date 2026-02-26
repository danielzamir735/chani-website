"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 md:px-16 lg:px-28">
      {/* Text — order-2 on mobile (below image), order-first on desktop (right in RTL) */}
      <motion.div
        className="flex-1 flex flex-col items-end text-right gap-7 order-2 md:order-first"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-[0.2em] text-amber-600 uppercase"
        >
          ייעוץ פיננסי אישי
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-snug text-stone-800"
        >
          חני כוכב לב —{" "}
          <span className="text-amber-600">הדרך שלכם לחופש כלכלי</span> מתחילה
          כאן
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-stone-500 leading-relaxed max-w-lg"
        >
          ליווי אישי ומקצועי ליציאה מחובות, ניהול תקציב חכם ובניית עתיד בטוח
          למשפחה שלכם.
        </motion.p>

        <motion.div variants={fadeUp} className="pt-2">
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#b45309" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="px-9 py-4 bg-amber-600 text-white text-base font-semibold rounded-full shadow-lg shadow-amber-500/30 cursor-pointer"
          >
            לקביעת פגישת ייעוץ חינם
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image — order-first on mobile (top), order-last on desktop (left in RTL) */}
      <motion.div
        className="flex-1 w-full max-w-sm md:max-w-none order-first md:order-last"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-stone-100 to-stone-50 shadow-2xl shadow-stone-300/60">
          {/*
            Replace the placeholder below with your actual photo:
            <Image src="/chani.jpg" alt="חני כוכב לב" fill className="object-cover object-top" />
          */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-stone-300 text-sm select-none">
              תמונה של חני כוכב לב
            </span>
          </div>

          {/* Decorative soft gradient at the bottom */}
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-amber-50/50 to-transparent pointer-events-none" />

          {/* Subtle decorative ring */}
          <motion.div
            className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-amber-200/60"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-amber-300/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
