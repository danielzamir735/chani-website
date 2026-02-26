"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    color: "rgba(59, 130, 246, 0.07)",
    width: 800,
    height: 800,
    initial: { x: "-10%", y: "-25%" },
    animate: { x: ["-10%", "8%", "-18%", "-10%"], y: ["-25%", "2%", "-12%", "-25%"] },
    duration: 26,
  },
  {
    color: "rgba(244, 63, 94, 0.05)",
    width: 600,
    height: 600,
    initial: { x: "70%", y: "50%" },
    animate: { x: ["70%", "50%", "78%", "70%"], y: ["50%", "22%", "62%", "50%"] },
    duration: 30,
  },
  {
    color: "rgba(30, 58, 138, 0.04)",
    width: 500,
    height: 500,
    initial: { x: "30%", y: "75%" },
    animate: { x: ["30%", "55%", "15%", "30%"], y: ["75%", "55%", "82%", "75%"] },
    duration: 34,
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
            filter: "blur(120px)",
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
