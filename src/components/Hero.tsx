"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
};

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-background flex items-center relative overflow-hidden">
      {/* Subtle radial glow behind the image side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 55%, rgba(30,58,138,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Text block — right in RTL (first child = start) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
            >
              מכאב כלכלי לחופש וביטחון.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              חני כוכב לב - יועצת לכלכלת המשפחה. הדרך המוכחת שלכם לצאת מהמינוס,
              לנשום לרווחה, ולבנות עתיד כלכלי יציב.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="bg-primary text-white rounded-full px-8 py-4 font-semibold shadow-lg mt-2 cursor-pointer"
              >
                תאמו פגישת ייעוץ
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image block — left in RTL (second child = end) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 32px 64px -16px rgba(30,58,138,0.18), 0 0 0 1px rgba(30,58,138,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Image
              src="/chani.jpg"
              alt="חני כוכב לב"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
