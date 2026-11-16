"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  direction = "up",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const offsetX = reduceMotion ? 0 : direction === "left" ? -distance : direction === "right" ? distance : 0;
  const offsetY = reduceMotion || direction !== "up" ? 0 : distance;

  return (
    <motion.div
      initial={{ opacity: reduceMotion ? 1 : 0, x: offsetX, y: offsetY, scale: reduceMotion ? 1 : 0.98, filter: reduceMotion ? "blur(0px)" : "blur(7px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
