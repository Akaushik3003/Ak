import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-white/75 px-6 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-slate-950"
          >
            A<span className="text-cyan-600">.</span>Kaushik
          </a>
          <p className="mt-1 text-sm text-slate-500">
            AI Engineer &amp; Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Akaushik3003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700"
          >
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700"
          >
            Contact
          </a>
        </div>

        <p className="text-xs text-slate-500 sm:text-right">
          © 2026 A.Kaushik. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
