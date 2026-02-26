"use client";

import { motion, type Variants } from "framer-motion";

const WA_LINK =
  "https://wa.me/YOUR_NUMBER_HERE?text=שלום חני, אשמח לתיאום פגישת ייעוץ";
const PHONE_LINK = "tel:+972XXXXXXXXX";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a0504 0%, #130810 50%, #080504 100%)",
      }}
    >
      {/* Top gold divider */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)",
          opacity: 0.3,
        }}
      />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(128,0,32,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,175,55,0.2) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.25,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-extrabold tracking-[0.3em] uppercase"
            style={{ color: "#D4AF37" }}
          >
            הצעד הראשון הוא בחינם
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            מוכנים להתחיל?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #800020 20%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              דברו איתנו.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(220,205,190,0.68)" }}
          >
            פגישת ייעוץ ראשונה בחינם ובלי התחייבות. נאמר לכם בכנות אם ואיך
            אנחנו יכולים לעזור — ונתחיל מיד.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center"
          >
            {/* Primary — WhatsApp */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 60px rgba(128,0,32,0.7), 0 0 150px rgba(128,0,32,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full text-white font-bold text-lg overflow-hidden cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #800020 0%, #a0182e 60%, #800020 100%)",
                boxShadow:
                  "0 10px 36px rgba(128,0,32,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              {/* Shimmer */}
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
                  delay: 1,
                  ease: "easeInOut",
                }}
              />
              {/* WhatsApp icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                className="relative shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative">שלחו הודעה בוואטסאפ</span>
            </motion.a>

            {/* Secondary — Phone */}
            <motion.a
              href={PHONE_LINK}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(230,215,200,0.85)",
              }}
            >
              או התקשרו ישירות
            </motion.a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            variants={itemVariants}
            className="text-xs"
            style={{ color: "rgba(180,165,150,0.5)" }}
          >
            100% דיסקרטיות • ללא התחייבות • פגישה ראשונה חינם
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gold divider */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)",
          opacity: 0.2,
        }}
      />
    </section>
  );
}
