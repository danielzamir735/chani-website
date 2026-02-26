"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    prefix: "",
    end: 500,
    suffix: "+",
    label: "משפחות שיצאו לחופש כלכלי",
    display: "500+",
  },
  {
    prefix: "",
    end: 100,
    suffix: "%",
    label: "שקיפות, דיסקרטיות ומקצועיות",
    display: "100%",
  },
  {
    prefix: "₪",
    end: 2,
    suffix: "M+",
    label: "מיליון שקלים של חובות שנוהלו ונמחקו",
    display: "₪2M+",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

const colVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ImpactNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0a0a 0%, #1a0a14 50%, #0a0f1a 100%)" }}
    >
      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(128,0,32,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Gold top border line */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-12"
          style={{ color: "#D4AF37" }}
        >
          תוצאות שמדברות בעד עצמן
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={colVariants}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Number */}
              <div
                className="text-5xl md:text-6xl font-extrabold leading-none"
                style={{
                  background: "linear-gradient(135deg, #ffffff 40%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {isInView ? (
                  <>
                    {stat.prefix}
                    <CountUp
                      end={stat.end}
                      duration={2.2}
                      useEasing
                      easingFn={(t, b, c, d) => {
                        t /= d;
                        return c * t * t * t + b;
                      }}
                    />
                    {stat.suffix}
                  </>
                ) : (
                  <span style={{ opacity: 0 }}>{stat.display}</span>
                )}
              </div>

              {/* Divider */}
              <div
                className="w-10 h-px"
                style={{ background: "#D4AF37", opacity: 0.5 }}
              />

              {/* Label */}
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gold bottom border line */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
