"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";

export default function SiteEffects() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = reduceMotion
      ? null
      : new Lenis({
          duration: 1.1,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          anchors: { offset: -96 },
        });

    lenis?.stop();

    let frame = 0;
    if (lenis) {
      const tick = (time: number) => {
        lenis.raf(time);
        frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      lenis?.start();
    }, reduceMotion ? 0 : 640);

    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, [reduceMotion]);

  return (
    <>
      <div className="ambient-background" aria-hidden="true">
        <span className="ambient-orb ambient-orb--sky" />
        <span className="ambient-orb ambient-orb--violet" />
        <span className="ambient-particle ambient-particle--one" />
        <span className="ambient-particle ambient-particle--two" />
        <span className="ambient-particle ambient-particle--three" />
      </div>

      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="page-loader"
            role="status"
            aria-label="Loading A.Kaushik's portfolio"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.38, ease: "easeOut" } }}
          >
            <div className="page-loader__content">
              <div className="page-loader__mark">A.K</div>
              <p className="page-loader__name">A.Kaushik</p>
              <p className="page-loader__role">Software Developer</p>
              <div className="page-loader__track" aria-hidden="true">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.62, ease: "easeInOut" }}
                />
              </div>
              <p className="page-loader__caption">Loading portfolio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
