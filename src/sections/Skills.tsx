"use client";

import {
  Blocks,
  Braces,
  Database,
  Network,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const capabilities = [
  {
    number: "01",
    title: "Interfaces people can move through",
    description:
      "I bring product flows to life with responsive web interfaces and the frameworks behind them.",
    tools: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
    icon: Blocks,
    size: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Logic that gets the work done",
    description:
      "Application code, server routes, and APIs connect the experience to the work happening behind it.",
    tools: ["Python", "FastAPI", "Express.js", "REST APIs", "C"],
    icon: Braces,
    size: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Information that stays organized",
    description:
      "I work with relational and document databases to structure information and make it useful.",
    tools: ["Prisma ORM", "SQLite", "MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    icon: Database,
    size: "lg:col-span-5",
  },
  {
    number: "04",
    title: "The foundations underneath",
    description:
      "Core computer science ideas and everyday developer tools help me reason through the details.",
    tools: [
      "Object-oriented programming",
      "Data structures",
      "DBMS",
      "Operating systems",
      "Computer networks",
      "Git",
      "GitHub",
      "VS Code",
    ],
    icon: Network,
    size: "lg:col-span-7",
  },
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="skills"
      className="section-surface scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid items-end gap-5 sm:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="section-eyebrow">03 / In my toolkit</p>
              <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-6xl">
                From idea to working product.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:justify-self-end sm:text-right">
              I choose tools around what the product needs: a clear interface,
              dependable logic, and information people can find again.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal
                key={capability.number}
                className={capability.size}
                delay={index * 0.08}
                distance={20}
              >
                <motion.article
                  className="skill-card group relative h-full min-h-[17rem] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.045)] sm:p-8"
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <div className="relative z-10 flex items-start justify-between gap-5">
                    <span className="skill-card-index text-sm font-semibold tracking-[0.16em] text-cyan-800">
                      {capability.number}
                    </span>
                    <span className="skill-card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative z-10 mt-7">
                    <h3 className="max-w-md text-xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-2xl">
                      {capability.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      {capability.description}
                    </p>
                  </div>
                  <ul className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {capability.tools.map((tool) => (
                      <li key={tool} className="skill-chip">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <span className="skill-card-glow" aria-hidden="true" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
