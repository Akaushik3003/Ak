"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, LockKeyhole, MoveUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const ideas = [
  {
    number: "01",
    title: "Privacy is part of the experience.",
    detail:
      "A secure system should make people feel confident using it. My encryption project explores how several layers of protection can fit into one understandable flow.",
    note: "Trust, built into the details",
    icon: LockKeyhole,
  },
  {
    number: "02",
    title: "The things we share deserve to last.",
    detail:
      "Recipes carry more than instructions. TeluguKitchen explores how a welcoming digital space can help collect, organize, and pass on regional food knowledge.",
    note: "Culture, kept within reach",
    icon: Heart,
  },
];

export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="achievements"
      className="section-surface scroll-mt-24 overflow-hidden px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-[1fr_0.8fr] sm:items-end">
            <div>
              <p className="section-eyebrow">04 / What matters to me</p>
              <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-6xl">
                More than code.
                <span className="block text-cyan-800">A reason to build.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:justify-self-end sm:text-right">
              The projects I’m proudest of begin with a human question, then
              follow it all the way into the details.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:gap-7">
          <motion.span
            className="idea-connector hidden lg:block"
            aria-hidden="true"
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          />
          {ideas.map((idea, index) => {
            const Icon = idea.icon;
            return (
              <Reveal key={idea.number} delay={index * 0.14} distance={24}>
                <article className="idea-card relative h-full overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold tracking-[0.18em] text-cyan-800">{idea.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-9 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-3xl">
                    {idea.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {idea.detail}
                  </p>
                  <p className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">
                    {idea.note} <MoveUpRight size={14} aria-hidden="true" />
                  </p>
                  <span className="idea-card-orbit" aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
