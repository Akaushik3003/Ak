"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import MagneticLink from "@/components/MagneticLink";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#journey" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 18;
    setIsScrolled((current) => (current === next ? current : next));
  });

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.68, ease: "easeOut" }}
      >
        <nav
          aria-label="Main navigation"
          className={[
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6",
            isScrolled
              ? "border-white/80 bg-white/90 shadow-[0_12px_36px_rgba(15,23,42,0.10)] backdrop-blur-xl"
              : "border-white/70 bg-white/72 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-lg",
          ].join(" ")}
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-full text-lg font-semibold tracking-tight text-slate-950 sm:text-xl"
            aria-label="A.Kaushik home"
          >
            A<span className="text-cyan-600">.</span>Kaushik
          </a>

          <div className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="nav-link text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {item.name}
              </a>
            ))}
            <MagneticLink
              href="/Kaushik.pdf"
              download
              className="cta-button inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-700"
            >
              Resume <ArrowUpRight size={15} aria-hidden="true" />
            </MagneticLink>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="nav-mobile-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/Kaushik.pdf"
                  download
                  onClick={closeMenu}
                  className="cta-button mt-2 inline-flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                >
                  Download resume <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
