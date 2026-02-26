"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const steps = [
  {
    number: "01",
    icon: "🧠",
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
    icon: "⚙️",
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
    icon: "📈",
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
      className="py-24 px-6 md:px-16 lg:px-28 bg-[#1C0010] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#800020]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
          השיטה שעובדת
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          התהליך בנוי משלושה שלבים מרכזיים
        </h2>
        <p className="text-stone-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          תהליך מובנה, ברור ואישי — שמוביל ממצב של כאוס כלכלי לשקט נפשי מלא.
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto relative z-10"
      >
        {/* Large card — step 01 (col-span-2, row-span-2 → right 2/3 in RTL) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="md:col-span-2 md:row-span-2 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#3D0018]/70 to-[#1C0010] border border-[#800020]/30 flex flex-col gap-6 text-right cursor-default"
        >
          {/* Step number */}
          <div className="flex items-start justify-between flex-row-reverse">
            <span className="text-6xl font-black text-[#D4AF37]/20 leading-none select-none">
              {steps[0].number}
            </span>
            <span className="text-4xl">{steps[0].icon}</span>
          </div>

          <div>
            <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">
              {steps[0].tag}
            </p>
            <h3 className="text-3xl font-bold text-white">{steps[0].title}</h3>
            <p className="text-stone-400 mt-3 text-base leading-relaxed">
              {steps[0].description}
            </p>
          </div>

          <ul className="flex flex-col gap-4 mt-auto">
            {steps[0].bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-stone-300">
                <span className="text-[#D4AF37] shrink-0 mt-0.5">✦</span>
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>

          {/* Decorative gold divider */}
          <div className="h-px bg-gradient-to-l from-[#D4AF37]/40 to-transparent mt-2" />
        </motion.div>

        {/* Small cards — steps 02 & 03 (left column in RTL) */}
        {steps.slice(1).map((step) => (
          <motion.div
            key={step.number}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="min-h-[240px] rounded-3xl p-6 bg-gradient-to-br from-[#3D0018]/70 to-[#1C0010] border border-[#800020]/30 flex flex-col gap-4 text-right cursor-default"
          >
            {/* Step number + icon */}
            <div className="flex items-center justify-between flex-row-reverse">
              <span className="text-4xl font-black text-[#D4AF37]/20 leading-none select-none">
                {step.number}
              </span>
              <span className="text-3xl">{step.icon}</span>
            </div>

            <div>
              <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-1">
                {step.tag}
              </p>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
            </div>

            <ul className="flex flex-col gap-3 mt-auto">
              {step.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-stone-400">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5 text-xs">
                    ✦
                  </span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
