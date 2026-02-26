"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WA_LINK =
  "https://wa.me/YOUR_NUMBER_HERE?text=שלום חני, אשמח לתיאום פגישת ייעוץ";
const PHONE_LINK = "tel:+972XXXXXXXXX";

function PulseRing({ color }: { color: string }) {
  return (
    <>
      <motion.span
        className="absolute inset-0 rounded-full block"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.75], opacity: [0.45, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute inset-0 rounded-full block"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.75], opacity: [0.45, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.65 }}
      />
    </>
  );
}

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4 items-center">
      {/* Phone button */}
      <div className="relative">
        <PulseRing color="#1E3A8A" />
        <motion.a
          href={PHONE_LINK}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", damping: 20, stiffness: 320 }}
          className="relative flex items-center justify-center w-12 h-12 rounded-full text-white cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #1E3A8A, #2d52b8)",
            boxShadow: "0 8px 28px rgba(30,58,138,0.45)",
          }}
          aria-label="התקשרו אלינו"
        >
          <Phone className="w-5 h-5" strokeWidth={2} />
        </motion.a>
      </div>

      {/* WhatsApp button */}
      <div className="relative">
        <PulseRing color="#22c55e" />
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", damping: 20, stiffness: 320 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full text-white cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #16a34a, #22c55e)",
            boxShadow: "0 8px 32px rgba(34,197,94,0.45)",
          }}
          aria-label="פתחו שיחה בוואטסאפ"
        >
          <MessageCircle className="w-7 h-7" strokeWidth={2} fill="white" />
        </motion.a>
      </div>
    </div>
  );
}
