"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export default function MagneticLink({
  href,
  children,
  className,
  download,
  target,
  rel,
  "aria-label": ariaLabel,
}: MagneticLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.25 });

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
    x.set(Math.max(-9, Math.min(9, offsetX)));
    y.set(Math.max(-7, Math.min(7, offsetY)));
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
      aria-label={ariaLabel}
      className={className}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
