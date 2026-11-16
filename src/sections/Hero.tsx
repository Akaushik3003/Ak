"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Code2, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import MagneticLink from "@/components/MagneticLink";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.14,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.68, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] scroll-mt-24 items-center overflow-hidden px-6 pb-16 pt-32 sm:min-h-screen"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div
          className="order-1 relative z-10"
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.19em] text-cyan-800 sm:text-sm"
          >
            <span className="h-px w-9 bg-cyan-600" />
            Software · thoughtful by design
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-[clamp(3.8rem,12vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-slate-950"
          >
            <span className="block">A.</span>
            <span className="mt-2 block text-cyan-800 sm:mt-3">Kaushik</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:mt-10 sm:text-lg sm:leading-9"
          >
            I build technology that protects what matters and helps meaningful
            ideas stay within reach — from private communication to the
            preservation of Telugu food stories.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticLink
              href="#projects"
              className="cta-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.17)] transition-all hover:bg-cyan-800 hover:shadow-[0_18px_42px_rgba(8,145,178,0.22)]"
            >
              Explore selected work <ArrowDownRight size={17} aria-hidden="true" />
            </MagneticLink>
            <MagneticLink
              href="/Kaushik.pdf"
              download
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-slate-500 hover:bg-white"
            >
              Download resume <ArrowUpRight size={16} aria-hidden="true" />
            </MagneticLink>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500"
          >
            <span>Security-minded systems</span>
            <span className="h-1 w-1 rounded-full bg-cyan-600" />
            <span>Culture-forward products</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 mx-auto w-full max-w-[27rem] lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.85, delay: 0.25, ease: "easeOut" }}
        >
          <div className="hero-art relative">
            <motion.span
              className="hero-orbit hero-orbit--outer"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="hero-orbit hero-orbit--inner"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />
            <span
              className="absolute -right-3 -top-12 z-0 select-none text-[7rem] font-semibold leading-none tracking-[-0.08em] text-slate-200/80 sm:-right-8 sm:-top-16 sm:text-[10rem]"
              aria-hidden="true"
            >
              01
            </span>
            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white bg-white p-2.5 shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
              <div className="relative aspect-[5/3] overflow-hidden rounded-[1.45rem] bg-slate-100 sm:aspect-[4/5]">
                <Image
                  src="/ak.jpeg"
                  alt="Portrait of A.Kaushik"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                      Software developer
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      A.Kaushik
                    </p>
                  </div>
                  <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur">
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              className="hero-float-card hero-float-card--stack"
              animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={17} aria-hidden="true" />
              <span>Python · React</span>
            </motion.div>
            <motion.div
              className="hero-float-card hero-float-card--security"
              animate={reduceMotion ? undefined : { y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <ShieldCheck size={17} aria-hidden="true" />
              <span>Secure systems</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-5 -left-4 z-20 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_16px_38px_rgba(15,23,42,0.12)] sm:block lg:-left-9"
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Areas of focus
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Software · Design · Learning
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
