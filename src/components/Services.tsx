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

const services = [
  {
    id: 1,
    tag: "חיים ללא חובות",
    title: "עצירת הסחרור",
    description:
      "נפסיק את הדימום הכלכלי — ביחד נמפה את כל החובות, נסדר עדיפויות ונבנה תכנית מעשית לצאת מהמינוס לתמיד.",
    bullets: [
      "מיפוי מלא של חובות, הלוואות וכרטיסי אשראי",
      "תכנית מובנית לסגירה מהירה של חובות",
      "משא ומתן מול בנקים וגופי אשראי",
      "שינוי הרגלים שנותן תוצאות מיידיות",
    ],
    large: true,
  },
  {
    id: 2,
    tag: "עתיד שאפשר לחלום עליו",
    title: "תכנון פרישה וחסכונות",
    description: "נבנה יחד עתיד שבו אתם שולטים — פנסיה, חסכונות וביטחון.",
    bullets: [
      "פנסיה ממוטבת שעובדת בשבילכם",
      "קרנות חיסכון לילדים",
      "השקעות נבונות לטווח ארוך",
    ],
    large: false,
  },
  {
    id: 3,
    tag: "שליטה יומיומית",
    title: "ניהול שוטף חכם",
    description: "כלים פשוטים שיתנו לכם שליטה מלאה על ההווה הכלכלי שלכם.",
    bullets: [
      "תקציב חודשי ריאלי שבאמת עובד",
      "מעקב פשוט ומהיר אחר הוצאות",
      "כרית ביטחון לחירום ולהפתעות",
    ],
    large: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 md:px-16 lg:px-28 bg-stone-950 relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#800020]/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px]" />
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
          מה אני עושה
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          השירותים שישנו את חייכם
        </h2>
        <p className="text-stone-400 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
          לא ייעוץ קר ובירוקרטי. ליווי אישי, חם ומקצועי שמביא לשינוי אמיתי ומדיד.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto relative z-10">
        {/* Large card */}
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
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.22em] uppercase">
            {services[0].tag}
          </p>
          <div>
            <h3 className="text-3xl font-bold text-white">{services[0].title}</h3>
            <p className="text-stone-400 mt-3 text-base leading-relaxed">
              {services[0].description}
            </p>
          </div>
          <ul className="flex flex-col gap-4 mt-auto">
            {services[0].bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-stone-300">
                <span className="w-5 h-5 rounded-full border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#D4AF37] text-[10px]">✓</span>
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
          <div className="h-px bg-white/8 mt-2" />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex self-start px-5 py-2.5 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold rounded-full cursor-pointer hover:bg-[#D4AF37]/10 transition-colors duration-200"
          >
            קראו עוד על השירות
          </motion.a>
        </motion.div>

        {/* Small cards */}
        {services.slice(1).map((s, i) => (
          <motion.div
            key={s.id}
            variants={cardVariants}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="min-h-[240px] rounded-3xl p-6 bg-white/[0.04] border border-white/8 flex flex-col gap-4 text-right cursor-default backdrop-blur-sm"
          >
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
              {s.tag}
            </p>
            <h3 className="text-xl font-bold text-white">{s.title}</h3>
            <ul className="flex flex-col gap-3 mt-auto">
              {s.bullets.map((b) => (
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
