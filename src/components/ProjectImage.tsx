"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div className={[
          "project-image-wrap relative order-2 aspect-[3/2] min-h-[15rem] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[34rem]",
          className,
        ].filter(Boolean).join(" ")}>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="group/image absolute inset-0 flex w-full items-center justify-center p-2 sm:p-4"
          aria-label={"Open full-size image: " + alt}
          aria-haspopup="dialog"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
            className="project-image object-contain p-2 transition-transform duration-700 ease-out group-hover/image:scale-[1.035]"
          />
          <span className="project-image-hint absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-slate-950/75 px-3 py-2 text-xs font-semibold text-white opacity-100 shadow-lg backdrop-blur transition-all sm:opacity-0 sm:group-hover/image:translate-y-0 sm:group-hover/image:opacity-100">
            <Maximize2 size={14} aria-hidden="true" />
            View full image
          </span>
        </button>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="project-lightbox fixed inset-0 z-[150] grid place-items-center bg-slate-950/90 p-3 backdrop-blur-md sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) setIsOpen(false);
                }}
              >
                <motion.div
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-label={alt + " full-size preview"}
                  className="relative h-[min(88vh,900px)] w-full max-w-7xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100vw"
                    unoptimized
                    className="object-contain p-3 sm:p-7"
                  />
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white shadow-lg transition hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Close full-size image preview"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
