"use client";

import { ArrowDownRight, Braces, HeartHandshake, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

const values = [
  {
    title: "Make complex things feel clear",
    detail: "A strong product should feel thoughtful on the inside and effortless on the outside.",
    icon: Braces,
  },
  {
    title: "Build with trust in mind",
    detail: "Security, care, and respect for people’s information belong in the first sketch, not the final patch.",
    icon: Shield,
  },
  {
    title: "Give useful ideas a life",
    detail: "I’m drawn to projects that solve a real problem or keep something meaningful within reach.",
    icon: HeartHandshake,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-surface scroll-mt-24 border-y border-slate-200/70 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal>
          <p className="section-eyebrow">01 / A little about me</p>
          <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-6xl">
            Curious about what technology can protect — and preserve.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            I’m Kaushik, a developer who likes working where a tricky technical
            idea meets a human reason to build. One project led me into
            post-quantum security; another into the stories carried by Telugu
            home cooking. They may seem far apart, but both ask the same thing:
            how can technology help people keep what matters safe and accessible?
          </p>
          <a
            href="#projects"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 transition-colors hover:text-cyan-600"
          >
            See the ideas behind my work <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="lg:border-l lg:border-slate-200 lg:pl-12">
          <Reveal delay={0.08}>
            <p className="section-eyebrow">How I like to build</p>
          </Reveal>
          <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.12 + index * 0.09} distance={16}>
                  <article className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-950 sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
