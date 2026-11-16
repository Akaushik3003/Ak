"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current || status === "sending") return;

    setStatus("sending");
    emailjs
      .sendForm(
        "service_76akn92s",
        "contact_form",
        form.current,
        "pscuF4eCl7UEKToRd",
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => setStatus("error"),
      );
  }

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32"
    >
      <div className="contact-glow contact-glow--one" aria-hidden="true" />
      <div className="contact-glow contact-glow--two" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <Reveal direction="left">
          <p className="text-xs font-semibold uppercase tracking-[0.19em] text-cyan-300 sm:text-sm">
            06 / Contact
          </p>
          <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">
            Let’s Build
            <br />
            <span className="text-cyan-300">Something Great.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            I’m always open to discussing new opportunities, collaborations,
            innovative projects, and creative ideas.
          </p>

          <a
            href="mailto:akaushik5008@gmail.com"
            className="mt-9 inline-flex max-w-full items-center gap-3 border-b border-white/25 pb-3 text-sm font-medium text-white transition-colors hover:border-cyan-300 hover:text-cyan-200 sm:text-base"
          >
            <Mail size={18} aria-hidden="true" />
            <span className="break-all">akaushik5008@gmail.com</span>
            <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
          </a>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="https://github.com/Akaushik3003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-200"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/akaushik30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-200"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <motion.div
            className="rounded-[1.75rem] border border-white/70 bg-white p-5 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-7 border-b border-slate-200 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">
                Send a message
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Let’s talk about your idea.
              </h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  className="contact-input"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="contact-input"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="contact-input resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="cta-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-cyan-800 disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <ArrowUpRight size={16} aria-hidden="true" />}
              </button>

              <p
                className="min-h-5 text-sm text-slate-600"
                role="status"
                aria-live="polite"
              >
                {status === "success" && "Thanks — your message was sent."}
                {status === "error" && "Something went wrong. Please try again."}
              </p>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
