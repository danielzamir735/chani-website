"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const WA_LINK = "https://wa.me/YOUR_NUMBER_HERE?text=שלום חני, אשמח לתיאום פגישת ייעוץ";

const navLinks = [
  { label: "השיטה שלי", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="relative py-1 group">
      <span className="text-sm font-medium text-slate-600 group-hover:text-blue-900 transition-colors duration-200">
        {label}
      </span>
      <motion.span
        className="absolute bottom-0 right-0 h-0.5 bg-blue-800 rounded-full"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </a>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 70], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 70], [0, 1]);

  return (
    <motion.header className="fixed top-0 inset-x-0 z-50">
      {/* Frosted glass bg — fades in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: bgOpacity,
          background: "rgba(248, 250, 252, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
      {/* Bottom border shadow — fades in on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          opacity: shadowOpacity,
          background:
            "linear-gradient(90deg, transparent, rgba(30,58,138,0.12) 30%, rgba(30,58,138,0.12) 70%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <motion.span
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-extrabold text-lg tracking-wide select-none"
          style={{ color: "#1E3A8A" }}
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
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(22,163,74,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white cursor-pointer hidden sm:block"
            style={{
              background: "linear-gradient(135deg, #16A34A, #15803d)",
              boxShadow: "0 4px 18px rgba(22,163,74,0.3)",
            }}
          >
            לתיאום פגישת היכרות
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
}
