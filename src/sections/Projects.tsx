"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import ProjectImage from "@/components/ProjectImage";

const projects = [
  {
    title: "Chess-Based Encryption",
    subtitle: "A private message, hidden in plain sight",
    question: "What if sending a secret could look like sharing an ordinary image?",
    story:
      "I explored that idea by bringing together post-quantum key exchange, strong message encryption, a chessboard-inspired permutation, and image steganography. A React interface and FastAPI service connect the pieces into an encrypt-and-decrypt experience.",
    detail: "Kyber512 · XChaCha20 · ChessPerm · LSB PNG steganography",
    tech: ["Python", "FastAPI", "React", "liboqs"],
    github: "https://github.com/Akaushik3003/Chess-Based-Encryption",
    image: "/chess.png",
  },
  {
    title: "TeluguKitchen",
    subtitle: "A home for Telugu food stories",
    question: "How can a recipe live on beyond the kitchen where it began?",
    story:
      "TeluguKitchen is my attempt at a thoughtful home for regional recipes and the knowledge around them. People can contribute recipes and media; search and categories make them easier to rediscover, while sign-in and moderation help keep the collection organized.",
    detail: "Recipe submissions · contributor moderation · cultural collection",
    tech: ["Next.js 14", "TypeScript", "Prisma", "SQLite"],
    github: "https://github.com/Akaushik3003/TeluguKitchen",
    image: "/telugu.png",
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="projects"
      className="section-surface-soft scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 grid gap-5 sm:mb-16 sm:grid-cols-[1fr_0.8fr] sm:items-end">
            <div>
              <p className="section-eyebrow">05 / Selected work</p>
              <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-6xl">
                Built with purpose.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:justify-self-end sm:text-right">
              Two very different ideas, connected by a belief that software
              should help people protect or preserve what matters.
            </p>
          </div>
        </Reveal>

        <div className="space-y-5 sm:space-y-7">
          {projects.map((project, index) => {
            const imageOnRight = index % 2 === 0;
            return (
              <Reveal key={project.title} delay={index * 0.1} distance={22}>
                <motion.article
                  className="project-card group overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <div className="grid lg:grid-cols-2">
                    <div
                      className={[
                        "order-1 flex flex-col justify-center p-6 sm:p-9 lg:p-12",
                        imageOnRight ? "lg:order-1" : "lg:order-2",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tabular-nums tracking-[0.18em] text-cyan-800">
                          0{index + 1}
                        </span>
                        <span className="h-px w-8 bg-cyan-600" />
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                          Featured project
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-800">
                        {project.subtitle}
                      </p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        The question
                      </p>
                      <p className="mt-2 max-w-xl text-base font-medium leading-7 text-slate-800 sm:text-lg sm:leading-8">
                        {project.question}
                      </p>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        {project.story}
                      </p>
                      <p className="mt-4 text-xs font-medium leading-6 text-slate-500">
                        {project.detail}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex w-fit items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-700 hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
                        aria-label={"View " + project.title + " on GitHub"}
                      >
                        <Code2 size={16} aria-hidden="true" />
                        View GitHub repository
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>

                    <ProjectImage
                      src={project.image}
                      alt={project.title + " project screenshot"}
                      className={imageOnRight ? "lg:order-2" : "lg:order-1"}
                    />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
