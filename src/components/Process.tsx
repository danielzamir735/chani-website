"use client";

import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

const steps = [
  {
    number: "01",
    tag: "המחשבה הנכונה",
    title: "לבטוח בכסף",
    description:
      "הצעד הראשון הוא להבין שהמצב הנוכחי שלכם אינו גזירת גורל. נחשוף ביחד את הדפוסים שמעכבים אתכם, נשבור אמונות מגבילות שנבנו שנים, ונבנה בסיס של ביטחון עצמי פיננסי שישנה את כל מה שמגיע אחריו.",
    bullets: [
      "מיפוי הקשר האישי שלכם עם כסף",
      "פירוק אמונות מגבילות ודפוסי עוני",
      "בניית חשיבת שפע במקום חשיבת מחסור",
      "הגדרת מטרות פיננסיות ריאליות ומעוררות",
    ],
    large: true,
  },
  {
    number: "02",
    tag: "המערכת שמשנה הכל",
    title: "לנהל כסף",
    description:
      "נבנה יחד מערכת ניהול תקציב שעובדת אוטומטית — גם בלי שתצטרכו לחשוב עליה כל יום.",
    bullets: [
      "תקציב חודשי ריאלי שבאמת מחזיק",
      "ביטול הוצאות שלא ידעתם עליהן",
      "מעטפת ביטחון למקרי חירום",
    ],
    large: false,
  },
  {
    number: "03",
    tag: "הכסף עובד בשבילכם",
    title: "להצמיח כסף",
    description:
      "אחרי שהבסיס יציב, נתחיל לגרום לכסף לעבוד בשבילכם — לא להפך.",
    bullets: [
      "חיסכון שיטתי שמצטבר מדי חודש",
      "השקעות מותאמות לפרופיל שלכם",
      "תכנון פרישה ועתיד כלכלי בטוח",
    ],
    large: false,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-28 px-6 md:px-16 lg:px-28 bg-[#0f0a0a] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#800020]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#D4AF37]/4 rounded-full blur-[100px]" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-xs font-bold tracking-[0.28em] text-[#D4AF37] uppercase mb-4">
          השיטה שעובדת
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          התהליך בנוי משלושה שלבים מרכזיים
        </h2>
        <p className="text-stone-400 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
          תהליך מובנה, ברור ואישי — שמוביל ממצב של כאוס כלכלי לשקט נפשי מלא.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto relative z-10">
        {/* Large card — step 01 */}
        <motion.div
          variants={cardVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:col-span-2 md:row-span-2 rounded-3xl p-8 md:p-10 bg-white/[0.04] border border-white/8 flex flex-col gap-6 text-right cursor-default backdrop-blur-sm"
        >
          <div className="flex items-start justify-between flex-row-reverse">
            <span className="text-6xl font-black text-white/8 leading-none select-none tabular-nums">
              {steps[0].number}
            </span>
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.22em] uppercase pt-1">
              {steps[0].tag}
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">{steps[0].title}</h3>
            <p className="text-stone-400 mt-3 text-base leading-relaxed">
              {steps[0].description}
            </p>
          </div>

          <ul className="flex flex-col gap-4 mt-auto">
            {steps[0].bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-stone-300">
                <span className="w-5 h-5 rounded-full border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#D4AF37] text-[10px]">✓</span>
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <div className="h-px bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
        </motion.div>

        {/* Small cards — steps 02 & 03 */}
        {steps.slice(1).map((step, i) => (
          <motion.div
            key={step.number}
            variants={cardVariants}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="min-h-[240px] rounded-3xl p-6 bg-white/[0.04] border border-white/8 flex flex-col gap-4 text-right cursor-default backdrop-blur-sm"
          >
            <div className="flex items-center justify-between flex-row-reverse">
              <span className="text-4xl font-black text-white/8 leading-none select-none tabular-nums">
                {step.number}
              </span>
              <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
                {step.tag}
              </p>
            </div>

            <h3 className="text-xl font-bold text-white">{step.title}</h3>

            <ul className="flex flex-col gap-3 mt-auto">
              {step.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-stone-400">
                  <span className="w-4 h-4 rounded-full border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#D4AF37] text-[9px]">✓</span>
                  </span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
