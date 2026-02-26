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

const services = [
  {
    id: 1,
    emoji: "🛑",
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
    emoji: "🌅",
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
    emoji: "📊",
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
      className="py-24 px-6 md:px-16 lg:px-28 bg-[#1C0010] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
          מה אני עושה
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          השירותים שישנו את חייכם
        </h2>
        <p className="text-stone-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          לא ייעוץ קר ובירוקרטי. ליווי אישי, חם ומקצועי שמביא לשינוי אמיתי
          ומדיד.
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
        {/* Large card — col-span-2, row-span-2 (right 2/3 in RTL) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="md:col-span-2 md:row-span-2 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#3D0018]/70 to-[#1C0010] border border-[#800020]/30 flex flex-col gap-6 text-right cursor-default"
        >
          <span className="text-5xl">{services[0].emoji}</span>
          <div>
            <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">
              {services[0].tag}
            </p>
            <h3 className="text-3xl font-bold text-white">{services[0].title}</h3>
            <p className="text-stone-400 mt-3 text-base leading-relaxed">
              {services[0].description}
            </p>
          </div>
          <ul className="flex flex-col gap-4 mt-auto">
            {services[0].bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-stone-300">
                <span className="text-[#D4AF37] shrink-0 mt-0.5">✦</span>
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-[#800020]/25">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold rounded-full cursor-pointer"
            >
              קראו עוד על השירות
            </motion.button>
          </div>
        </motion.div>

        {/* Small cards — auto-place to col 3 in RTL (left column) */}
        {services.slice(1).map((s) => (
          <motion.div
            key={s.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="min-h-[240px] rounded-3xl p-6 bg-gradient-to-br from-[#3D0018]/70 to-[#1C0010] border border-[#800020]/30 flex flex-col gap-4 text-right cursor-default"
          >
            <span className="text-4xl">{s.emoji}</span>
            <div>
              <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-1">
                {s.tag}
              </p>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
            </div>
            <ul className="flex flex-col gap-3 mt-auto">
              {s.bullets.map((b) => (
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
