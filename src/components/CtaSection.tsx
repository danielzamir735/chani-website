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
  hidden: { opacity: 0, y: 28 },
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
      style={{ background: "#0F172A" }}
    >
      {/* SVG Wave divider — light testimonials section flows into dark CTA */}
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
            fill="#F1F5F9"
          />
        </svg>
      </div>

      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(30,58,138,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(147,197,253,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center pt-8">
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
            style={{ color: "rgba(147,197,253,0.8)" }}
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
                background: "linear-gradient(135deg, #34d399 20%, #16A34A 100%)",
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
            style={{ color: "rgba(203,213,225,0.75)" }}
          >
            פגישת ייעוץ ראשונה בחינם ובלי התחייבות. נאמר לכם בכנות אם ואיך
            אנחנו יכולים לעזור — ונתחיל מיד.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center"
          >
            {/* Primary — WhatsApp / Green CTA */}
            <div className="relative inline-flex">
              {/* Pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-green-500 pointer-events-none"
                animate={{ scale: [1, 1.45], opacity: [0.35, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full bg-green-500 pointer-events-none"
                animate={{ scale: [1, 1.45], opacity: [0.35, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
              />

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(22,163,74,0.65)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full text-white font-bold text-lg overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #16A34A 0%, #15803d 60%, #16A34A 100%)",
                  boxShadow: "0 10px 36px rgba(22,163,74,0.45)",
                }}
              >
                {/* Shimmer */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.16) 50%, transparent 62%)",
                  }}
                  animate={{ x: ["-100%", "220%"] }}
                  transition={{
                    duration: 2.8,
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
            </div>

            {/* Secondary — Phone */}
            <motion.a
              href={PHONE_LINK}
              whileHover={{ scale: 1.04, borderColor: "rgba(147,197,253,0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(203,213,225,0.9)",
              }}
            >
              או התקשרו ישירות
            </motion.a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            variants={itemVariants}
            className="text-xs"
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            100% דיסקרטיות • ללא התחייבות • פגישה ראשונה חינם
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
