"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  AlertCircle,
  Wallet,
  Search,
  Compass,
  HeartHandshake,
} from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "המינוס חונק",
    text: "תחושה שאתם עובדים קשה אבל הכסף פשוט נעלם.",
  },
  {
    icon: AlertCircle,
    title: "לחץ ומועקה",
    text: "לילות ללא שינה, ויכוחים על כסף וחוסר ודאות כלכלית.",
  },
  {
    icon: Wallet,
    title: "אין חסכונות לעתיד",
    text: "הפחד שלא תוכלו לעזור לילדים או לחיות בכבוד בפנסיה.",
  },
];

const solutionSteps = [
  {
    icon: Search,
    title: "1. מיפוי ושיקוף",
    text: "עושים סדר בבלגן. מבינים בדיוק לאן הולך הכסף ומה מצב החובות.",
  },
  {
    icon: Compass,
    title: "2. בניית תוכנית",
    text: "תופרים חליפה כלכלית אישית שתואמת את ההכנסות והיעדים שלכם.",
  },
  {
    icon: HeartHandshake,
    title: "3. ליווי לתוצאות",
    text: "צועדים יחד, צעד אחר צעד, עד שאתם יוצאים מהמינוס ומתחילים לחסוך.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section
      id="process"
      className="py-28 px-6 md:px-16 lg:px-28 bg-stone-50 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#800020]/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ── PART 1: The Pain ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.28em] text-[#800020]/70 uppercase mb-3">
            האם זה נשמע לכם מוכר?
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            הכאב שכולם מכירים
          </h2>
          <p className="text-stone-500 mt-4 text-lg max-w-lg mx-auto leading-relaxed">
            לפני שמתחילים — חשוב שתדעו שאתם לא לבד.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {painPoints.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm rounded-2xl p-8 text-right flex flex-col gap-4 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 self-end">
                <Icon className="w-6 h-6 text-red-400" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PART 2: The Solution ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mt-24 mb-12"
        >
          <p className="text-xs font-bold tracking-[0.28em] text-[#D4AF37] uppercase mb-3">
            3 צעדים לחופש כלכלי
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            השיטה של חני
          </h2>
          <p className="text-stone-500 mt-4 text-lg max-w-lg mx-auto leading-relaxed">
            תהליך מובנה, אישי וברור — שמוביל ממינוס לשקט נפשי.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {solutionSteps.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm rounded-2xl p-8 text-right flex flex-col gap-4 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 self-end">
                <Icon className="w-6 h-6 text-emerald-500" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
