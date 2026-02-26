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
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
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
      className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* SVG Wave divider — light hero flows into dark section */}
      <div className="absolute -top-1 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: "72px", display: "block" }}
        >
          <path
            d="M0,0 C360,72 1080,0 1440,72 L1440,0 L0,0 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>

      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto pt-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-14"
          style={{ color: "rgba(147,197,253,0.8)" }}
        >
          תוצאות שמדברות בעד עצמן
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={colVariants}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Animated number */}
              <div
                className="text-6xl md:text-7xl font-black leading-none tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #34D399 100%)",
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
                      duration={2.4}
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
                className="w-12 h-px"
                style={{ background: "rgba(147,197,253,0.4)" }}
              />

              {/* Label */}
              <p
                className="text-base md:text-lg leading-relaxed max-w-[200px]"
                style={{ color: "rgba(203,213,225,0.8)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade back to light */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(15,23,42,0.4))",
        }}
      />
    </section>
  );
}
