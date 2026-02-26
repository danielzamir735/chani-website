"use client";

import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    name: "שרה ודוד כהן",
    role: "בני זוג, תל אביב",
    text: "היינו עם חוב של 200,000 ₪ ולא ידענו לאן לפנות. חני שינתה לנו את החיים — תוך שנה יצאנו מהמינוס ואנחנו כבר חוסכים לעתיד!",
    stars: 5,
  },
  {
    name: "מיכל לוי",
    role: "עצמאית, חיפה",
    text: "הייתי בפאניקה מוחלטת. חני הביאה סדר, שקט ופתרונות מעשיים. הליווי האישי שלה הוא מעל ומעבר לכל ציפייה. ממליצה בחום!",
    stars: 5,
  },
  {
    name: "יוסי ורחל מזרחי",
    role: "משפחה, ירושלים",
    text: "3 ילדים ושכר צנוע — חשבנו שאין מוצא. חני הוכיחה שתמיד יש דרך. בזכותה אנחנו ישנים טוב בלילה ויש לנו תוכנית לעתיד.",
    stars: 5,
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080504 0%, #0d0810 60%, #080504 100%)",
      }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.35) 30%, rgba(212,175,55,0.35) 70%, transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(128,0,32,0.07) 0%, transparent 70%)",
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
            style={{ color: "#D4AF37" }}
          >
            מה אומרים עלינו
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            סיפורי הצלחה אמיתיים
          </h2>
          <p
            className="mt-4 text-lg max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(200,185,175,0.65)" }}
          >
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
                boxShadow:
                  "0 32px 72px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,175,55,0.25)",
              }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative rounded-2xl p-7 text-right flex flex-col gap-5 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none select-none self-end"
                style={{ color: "rgba(212,175,55,0.25)", lineHeight: 1 }}
              >
                ״
              </div>

              {/* Stars */}
              <div className="flex gap-1 justify-end -mt-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg
                    key={si}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#D4AF37"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(220,205,195,0.8)" }}
              >
                {t.text}
              </p>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(to left, rgba(212,175,55,0.3), transparent)",
                }}
              />

              {/* Author */}
              <div className="text-right">
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(212,175,55,0.6)" }}
                >
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
