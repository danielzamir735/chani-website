"use client";

import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
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

const timelineSteps = [
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
      className="bg-white rounded-2xl p-7 text-right flex flex-col gap-4 cursor-default"
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
        <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-500">{text}</p>
      </div>
    </motion.div>
  );
}

// ─── Timeline step ────────────────────────────────────────────────────────────

function TimelineStep({
  step,
  index,
}: {
  step: (typeof timelineSteps)[0];
  index: number;
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true, margin: "-80px" });

  // Alternating sides: index 0 & 2 → content on the RIGHT (RTL start side)
  //                    index 1    → content on the LEFT  (RTL end side)
  const isStartSide = index % 2 === 0;

  const Icon = step.icon;

  return (
    <div
      ref={stepRef}
      className="relative flex items-center min-h-[160px]"
    >
      {/* Center dot — always at 50% */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", damping: 18, stiffness: 200, delay: 0.1 }}
      >
        <div
          className="w-5 h-5 rounded-full border-2 bg-white"
          style={{ borderColor: "#1E3A8A" }}
        />
        {/* Outer ring */}
        <motion.div
          className="absolute w-10 h-10 rounded-full"
          style={{ border: "1px solid rgba(30,58,138,0.2)" }}
          animate={isInView ? { scale: [0.8, 1.2, 1], opacity: [0, 0.6, 0] } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        />
      </motion.div>

      {/* Content card — alternates sides on desktop */}
      <div
        className={`
          w-full md:w-[calc(50%-3rem)]
          ${isStartSide
            ? "md:me-auto md:pe-0 md:ms-0"
            : "md:ms-auto md:ps-0 md:me-0"
          }
        `}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: isStartSide ? 40 : -40,
            filter: "blur(4px)",
          }}
          animate={
            isInView
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          whileHover={{ y: -4, boxShadow: "0 28px 64px rgba(15,23,42,0.12)" }}
          className="bg-white rounded-2xl p-6 text-right cursor-default"
          style={{
            boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
            border: "1px solid rgba(30,58,138,0.08)",
          }}
        >
          <div className="flex items-start gap-4 flex-row-reverse">
            {/* Icon bubble */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "rgba(30,58,138,0.07)",
                border: "1px solid rgba(30,58,138,0.12)",
              }}
            >
              <Icon className="w-5 h-5" style={{ color: "#1E3A8A" }} strokeWidth={1.8} />
            </div>

            <div className="flex-1 min-w-0">
              {/* Step number */}
              <span
                className="text-xs font-extrabold tracking-[0.2em] uppercase"
                style={{ color: "rgba(30,58,138,0.4)" }}
              >
                שלב {step.num}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">{step.text}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-drawing line for the timeline
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 30%"],
  });
  const lineScaleY = useTransform(timelineProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
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

      {/* ════════════════ PART 2 — VERTICAL TIMELINE ════════════════ */}
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

          {/* Timeline container */}
          <div ref={timelineRef} className="relative">
            {/* Track line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden hidden md:block">
              {/* Gray track */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(30,58,138,0.08)" }}
              />
              {/* Animated blue fill — draws down on scroll */}
              <motion.div
                className="absolute top-0 left-0 right-0 rounded-full"
                style={{
                  scaleY: lineScaleY,
                  transformOrigin: "top",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, #1E3A8A 0%, #3B82F6 60%, rgba(59,130,246,0.3) 100%)",
                }}
              />
            </div>

            {/* Vertical track for mobile — on the right edge (RTL start) */}
            <div className="absolute right-0 top-0 bottom-0 w-0.5 overflow-hidden md:hidden">
              <div
                className="absolute inset-0"
                style={{ background: "rgba(30,58,138,0.1)" }}
              />
              <motion.div
                className="absolute top-0 left-0 right-0"
                style={{
                  scaleY: lineScaleY,
                  transformOrigin: "top",
                  height: "100%",
                  background: "linear-gradient(to bottom, #1E3A8A, #3B82F6)",
                }}
              />
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-12 md:gap-20 pe-6 md:pe-0">
              {timelineSteps.map((step, i) => (
                <TimelineStep key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
