"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    color: "rgba(128, 0, 32, 0.2)",
    width: 700,
    height: 700,
    initial: { x: "-5%", y: "-20%" },
    animate: { x: ["-5%", "10%", "-15%", "-5%"], y: ["-20%", "5%", "-10%", "-20%"] },
    duration: 24,
  },
  {
    color: "rgba(212, 175, 55, 0.10)",
    width: 550,
    height: 550,
    initial: { x: "65%", y: "55%" },
    animate: { x: ["65%", "45%", "75%", "65%"], y: ["55%", "25%", "65%", "55%"] },
    duration: 28,
  },
  {
    color: "rgba(128, 0, 32, 0.12)",
    width: 480,
    height: 480,
    initial: { x: "25%", y: "70%" },
    animate: { x: ["25%", "50%", "10%", "25%"], y: ["70%", "50%", "80%", "70%"] },
    duration: 32,
  },
  {
    color: "rgba(212, 175, 55, 0.07)",
    width: 420,
    height: 420,
    initial: { x: "75%", y: "-5%" },
    animate: { x: ["75%", "60%", "80%", "75%"], y: ["-5%", "15%", "5%", "-5%"] },
    duration: 20,
  },
];

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.width,
            height: blob.height,
            background: blob.color,
            filter: "blur(140px)",
            left: 0,
            top: 0,
          }}
          initial={blob.initial}
          animate={blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
