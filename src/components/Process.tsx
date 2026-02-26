"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
    text: "עובדים קשה, הכסף נעלם. בסוף החודש — ריק.",
  },
  {
    icon: AlertCircle,
    title: "לחץ ומועקה",
    text: "לילות ללא שינה, ויכוחים על כסף, חוסר ודאות שלא מרפה.",
  },
  {
    icon: Wallet,
    title: "אין חסכונות",
    text: "הפחד שלא תוכלו לעזור לילדים, או לחיות בכבוד בגיל פנסיה.",
  },
];

const solutionSteps = [
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

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

function PainCard({
  icon: Icon,
  title,
  text,
  index,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 60px rgba(128,0,32,0.25), 0 0 0 1px rgba(128,0,32,0.3)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="relative rounded-2xl p-7 text-right flex flex-col gap-4 cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 self-end"
        style={{ background: "rgba(128,0,32,0.18)", border: "1px solid rgba(128,0,32,0.3)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#ff6b8a" }} strokeWidth={1.7} />
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(200,185,180,0.7)" }}>
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function StepCard({
  num,
  icon: Icon,
  title,
  text,
  index,
}: {
  num: string;
  icon: React.ElementType;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 60px rgba(212,175,55,0.18), 0 0 0 1px rgba(212,175,55,0.3)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="relative rounded-2xl p-7 text-right flex flex-col gap-4 cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Step number */}
      <div className="flex items-center justify-between">
        <span
          className="text-4xl font-extrabold leading-none select-none"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {num}
        </span>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: "rgba(212,175,55,0.12)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} strokeWidth={1.7} />
        </div>
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(200,185,175,0.7)" }}>
          {text}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080504 0%, #0f0a0e 50%, #080504 100%)",
      }}
    >
      {/* Subtle section divider glow */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(128,0,32,0.4) 30%, rgba(128,0,32,0.4) 70%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── PART 1: Pain ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-extrabold tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(128,0,32,0.8)" }}
          >
            האם זה נשמע מוכר?
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            הכאב שכולם מכירים
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(200,185,180,0.65)" }}>
            לפני שמתחילים — חשוב שתדעו שאתם לא לבד.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {painPoints.map((p, i) => (
            <PainCard key={p.title} {...p} index={i} />
          ))}
        </motion.div>

        {/* ── Transition arrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3 my-20"
        >
          <div
            className="w-px h-16"
            style={{
              background:
                "linear-gradient(to bottom, rgba(128,0,32,0.6), rgba(212,175,55,0.6))",
            }}
          />
          <div
            className="px-5 py-2.5 rounded-full text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(128,0,32,0.2), rgba(212,175,55,0.15))",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#D4AF37",
            }}
          >
            הפתרון שחיפשתם
          </div>
          <div
            className="w-px h-16"
            style={{
              background:
                "linear-gradient(to bottom, rgba(212,175,55,0.6), rgba(212,175,55,0.05))",
            }}
          />
        </motion.div>

        {/* ── PART 2: Solution ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-6"
        >
          <p
            className="text-xs font-extrabold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#D4AF37" }}
          >
            3 צעדים לחופש כלכלי
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            השיטה של חני
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(200,185,175,0.65)" }}>
            תהליך מובנה, אישי וברור — שמוביל ממינוס לשקט נפשי.
          </p>
        </motion.div>

        {/* Animated connector line (desktop) */}
        <div className="hidden md:block relative h-1 mx-12 mb-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(212,175,55,0.08)" }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 rounded-full"
            style={{
              scaleX: lineScale,
              transformOrigin: "right",
              background: "linear-gradient(to left, rgba(212,175,55,0.7), rgba(212,175,55,0.2))",
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {solutionSteps.map((s, i) => (
            <StepCard key={s.title} {...s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
