"use client";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const milestones = [
  {
    label: "Where I’m learning",
    title: "Computer Science & Engineering",
    organization: "Matrusri Engineering College · B.E.",
    period: "2022 — 2026",
    story:
      "My studies give me the foundations to look beneath an interface: how data moves, how systems are designed, and what makes software dependable.",
    icon: GraduationCap,
  },
  {
    label: "A first look inside a product team",
    title: "AI Developer Intern",
    organization: "Viswam.ai",
    period: "Summer 2025",
    story:
      "Working on a platform for cultural data showed me how much good product work happens between the lines: making contributions safe, organizing knowledge well, and helping people find what they came for.",
    icon: BriefcaseBusiness,
  },
];

export default function Journey() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="journey"
      className="section-surface-soft scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">02 / Along the way</p>
          <h2 className="section-heading">Every build teaches me something.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A few turning points that shaped how I think about software and the people who use it.
          </p>
        </Reveal>

        <div className="relative mt-14 space-y-5 sm:mt-16 sm:space-y-7">
          <motion.span
            className="journey-line"
            aria-hidden="true"
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.12} distance={20}>
                <article className="journey-card relative grid gap-5 rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_12px_38px_rgba(15,23,42,0.05)] sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7 sm:p-8">
                  <div className="journey-node relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-white text-cyan-700 shadow-sm">
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                        {item.label}
                      </p>
                      <p className="text-xs font-medium text-slate-500 sm:text-right">
                        {item.period}
                      </p>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
                      {item.organization}
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {item.story}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
