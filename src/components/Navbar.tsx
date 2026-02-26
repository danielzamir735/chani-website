"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const WA_LINK = "https://wa.me/YOUR_NUMBER_HERE?text=שלום חני, אשמח לתיאום פגישת ייעוץ";

const navLinks = [
  { label: "השיטה שלי", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  // Transition from fully transparent to dark blurred bg
  const bgOpacity = useTransform(scrollY, [0, 70], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 70], [0, 1]);

  return (
    <motion.header className="fixed top-0 inset-x-0 z-50">
      {/* Dark blurred bg — fades in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: bgOpacity,
          background: "rgba(8,5,4,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
      {/* Bottom border — fades in on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          opacity: borderOpacity,
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.25) 30%, rgba(212,175,55,0.25) 70%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <motion.span
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-extrabold text-lg tracking-wide select-none"
          style={{ color: "#D4AF37" }}
        >
          חני כוכב לב
        </motion.span>

        {/* Nav links — desktop */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ color: "#D4AF37" }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium"
              style={{ color: "rgba(220,205,190,0.65)" }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          {/* WhatsApp icon button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34,197,94,0.5)" }}
            whileTap={{ scale: 0.93 }}
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{
              background: "linear-gradient(135deg, #16a34a, #22c55e)",
              boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
            }}
            aria-label="פנו אלינו בוואטסאפ"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.a>

          {/* Primary CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(128,0,32,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-full text-sm font-bold text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #800020, #a0182e)",
              boxShadow: "0 4px 18px rgba(128,0,32,0.35)",
            }}
          >
            פגישה חינם
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
}
