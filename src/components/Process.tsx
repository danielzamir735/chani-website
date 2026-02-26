"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  TrendingDown,
  AlertCircle,
  Wallet,
  Search,
  Compass,
  HeartHandshake,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: TrendingDown,
    title: "המינוס חונק",
    text: "עובדים קשה, הכסף נעלם. בסוף החודש — ריק.",
    color: "#F43F5E",
    bg: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.15)",
  },
  {
    icon: AlertCircle,
    title: "לחץ ומועקה",
    text: "לילות ללא שינה, ויכוחים על כסף, חוסר ודאות שלא מרפה.",
    color: "#F43F5E",
    bg: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.15)",
  },
  {
    icon: Wallet,
    title: "אין חסכונות",
    text: "הפחד שלא תוכלו לעזור לילדים, או לחיות בכבוד בגיל פנסיה.",
    color: "#F43F5E",
    bg: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.15)",
  },
];

const methodSteps = [
  {
    num: "01",
    icon: Search,
    title: "מיפוי ושיקוף",
    text: "עושים סדר בבלגן. מבינים בדיוק לאן הולך הכסף ומה מצב החובות.",
  },
  {
    num: "02",
    icon: Compass,
    title: "בניית תוכנית",
    text: "תופרים חליפה כלכלית אישית שתואמת את ההכנסות והיעדים שלכם.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "ליווי לתוצאות",
    text: "צועדים יחד, צעד אחר צעד, עד שאתם יוצאים מהמינוס ומתחילים לחסוך.",
  },
];

// ─── Pain card ───────────────────────────────────────────────────────────────

const painCardVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

function PainCard({
  icon: Icon,
  title,
  text,
  color,
  bg,
  border,
  index,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  color: string;
  bg: string;
  border: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={painCardVariants}
      whileHover={{ y: -6, boxShadow: "0 28px 64px rgba(15,23,42,0.14)" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="bg-white rounded-2xl p-8 text-right flex flex-col gap-5 cursor-default"
      style={{
        boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
        border: `1px solid ${border}`,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 self-end"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        <Icon className="w-7 h-7" style={{ color }} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-lg leading-relaxed text-slate-500">{text}</p>
      </div>
    </motion.div>
  );
}

// ─── Method card (centered grid) ─────────────────────────────────────────────

function MethodCard({
  step,
  index,
}: {
  step: (typeof methodSteps)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: index * 0.15,
      }}
      whileHover={{ y: -6, boxShadow: "0 32px 72px rgba(15,23,42,0.14)" }}
      className="relative bg-white rounded-3xl p-8 md:p-10 flex flex-col items-center text-center gap-6 cursor-default"
      style={{
        boxShadow: "0 4px 32px rgba(15,23,42,0.08)",
        border: "1px solid rgba(30,58,138,0.08)",
      }}
    >
      {/* Step number badge — RTL start corner */}
      <div
        className="absolute top-5 end-5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
        style={{ background: "linear-gradient(135deg, #1E3A8A, #3B82F6)" }}
      >
        {index + 1}
      </div>

      {/* Icon bubble */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{
          background: "rgba(30,58,138,0.07)",
          border: "1px solid rgba(30,58,138,0.12)",
        }}
      >
        <Icon className="w-8 h-8" style={{ color: "#1E3A8A" }} strokeWidth={1.8} />
      </div>

      {/* Text content — all perfectly centered */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
          {step.title}
        </h3>
        <p className="text-lg leading-relaxed text-slate-500 max-w-[240px]">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Section heading variants ──────────────────────────────────────────────────

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
      style={{ background: "#F8FAFC" }}
    >
      {/* Wave from dark ImpactNumbers section back to light */}
      <div className="absolute -top-1 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: "72px", display: "block" }}
        >
          <path
            d="M0,72 C360,0 1080,72 1440,0 L1440,72 L0,72 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>

      {/* ════════════════ PART 1 — PAIN CARDS ════════════════ */}
      <div className="pt-28 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <p className="text-xs font-extrabold tracking-[0.3em] uppercase mb-3 text-rose-500">
              האם זה נשמע מוכר?
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              הכאב שכולם מכירים
            </h2>
            <p className="mt-4 text-lg max-w-lg mx-auto leading-relaxed text-slate-500">
              לפני שמתחילים — חשוב שתדעו שאתם לא לבד.
            </p>
          </motion.div>

          {/* Stagger + blur-reveal grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {painPoints.map((p, i) => (
              <PainCard key={p.title} {...p} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════ TRANSITION BRIDGE ════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3 py-4"
      >
        <div
          className="w-px h-14 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(244,63,94,0.5), rgba(30,58,138,0.5))",
          }}
        />
        <div
          className="px-5 py-2.5 rounded-full text-sm font-bold"
          style={{
            background: "rgba(30,58,138,0.07)",
            border: "1px solid rgba(30,58,138,0.12)",
            color: "#1E3A8A",
          }}
        >
          הפתרון שחיפשתם
        </div>
        <div
          className="w-px h-14 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(30,58,138,0.5), rgba(30,58,138,0.05))",
          }}
        />
      </motion.div>

      {/* ════════════════ PART 2 — METHOD CARDS GRID ════════════════ */}
      <div className="pb-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-extrabold tracking-[0.3em] uppercase mb-3"
              style={{ color: "rgba(30,58,138,0.6)" }}
            >
              3 צעדים לחופש כלכלי
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              השיטה של חני
            </h2>
            <p className="mt-4 text-lg max-w-lg mx-auto leading-relaxed text-slate-500">
              תהליך מובנה, אישי וברור — שמוביל ממינוס לשקט נפשי.
            </p>
          </motion.div>

          {/* Method cards grid — 3 columns, perfectly centered content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {methodSteps.map((step, i) => (
              <MethodCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
