"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    color: "rgba(30, 58, 138, 0.22)", // primary blue
    width: 600,
    height: 600,
    initial: { x: "-10%", y: "-20%" },
    animate: { x: ["−10%", "15%", "-25%", "-10%"], y: ["-20%", "10%", "-5%", "-20%"] },
    duration: 22,
  },
  {
    color: "rgba(16, 185, 129, 0.18)", // emerald green
    width: 500,
    height: 500,
    initial: { x: "60%", y: "50%" },
    animate: { x: ["60%", "40%", "70%", "60%"], y: ["50%", "20%", "60%", "50%"] },
    duration: 26,
  },
  {
    color: "rgba(251, 191, 36, 0.16)", // soft gold
    width: 420,
    height: 420,
    initial: { x: "20%", y: "70%" },
    animate: { x: ["20%", "45%", "5%", "20%"], y: ["70%", "55%", "80%", "70%"] },
    duration: 30,
  },
  {
    color: "rgba(128, 0, 32, 0.12)", // burgundy accent
    width: 380,
    height: 380,
    initial: { x: "80%", y: "-10%" },
    animate: { x: ["80%", "65%", "85%", "80%"], y: ["-10%", "20%", "0%", "-10%"] },
    duration: 18,
  },
];

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.width,
            height: blob.height,
            background: blob.color,
            filter: "blur(130px)",
            left: 0,
            top: 0,
          }}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
