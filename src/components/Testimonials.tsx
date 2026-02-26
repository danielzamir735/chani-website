"use client";

import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    name: "שרה ודוד כהן",
    role: "בני זוג, תל אביב",
    text: "היינו עם חוב של 200,000 ₪ ולא ידענו לאן לפנות. חני שינתה לנו את החיים — תוך שנה יצאנו מהמינוס ואנחנו כבר חוסכים לעתיד!",
    stars: 5,
    initials: "שד",
  },
  {
    name: "מיכל לוי",
    role: "עצמאית, חיפה",
    text: "הייתי בפאניקה מוחלטת. חני הביאה סדר, שקט ופתרונות מעשיים. הליווי האישי שלה הוא מעל ומעבר לכל ציפייה. ממליצה בחום!",
    stars: 5,
    initials: "מל",
  },
  {
    name: "יוסי ורחל מזרחי",
    role: "משפחה, ירושלים",
    text: "3 ילדים ושכר צנוע — חשבנו שאין מוצא. חני הוכיחה שתמיד יש דרך. בזכותה אנחנו ישנים טוב בלילה ויש לנו תוכנית לעתיד.",
    stars: 5,
    initials: "ירמ",
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: "#F1F5F9" }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(30,58,138,0.12) 30%, rgba(30,58,138,0.12) 70%, transparent)",
        }}
      />

      {/* Very subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-extrabold tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(30,58,138,0.6)" }}
          >
            מה אומרים עלינו
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            סיפורי הצלחה אמיתיים
          </h2>
          <p className="mt-4 text-lg max-w-md mx-auto leading-relaxed text-slate-500">
            משפחות שהחליטו לקחת צעד אחד — ושינו את חייהן.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 32px 72px rgba(15,23,42,0.14)",
              }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="bg-white rounded-2xl p-7 text-right flex flex-col gap-5 cursor-default"
              style={{
                boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
                border: "1px solid rgba(30,58,138,0.06)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 justify-end">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg
                    key={si}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#3B82F6"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none select-none self-end -mt-3"
                style={{ color: "rgba(59,130,246,0.18)", lineHeight: 1 }}
              >
                ״
              </div>

              {/* Text */}
              <p className="text-base md:text-lg leading-relaxed flex-1 text-slate-600">
                {t.text}
              </p>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(to left, rgba(30,58,138,0.12), transparent)",
                }}
              />

              {/* Author row */}
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs mt-0.5 text-slate-400">{t.role}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: "linear-gradient(135deg, #1E3A8A, #3B82F6)" }}
                >
                  {t.initials}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
