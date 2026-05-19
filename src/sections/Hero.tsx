"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 overflow-hidden bg-white text-black flex items-center justify-center py-16"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-300 rounded-full blur-[140px] opacity-30 top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full blur-[140px] opacity-30 bottom-[-100px] right-[-100px]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-10">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/ak.jpeg"
              alt="A.Kaushik"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <p className="uppercase tracking-[0.3em] text-sm text-cyan-500 mb-5">
          Welcome To My Portfolio
        </p>

        {/* Name */}
        <h1 className="font-sans text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
          A.Kaushik
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
          Computer Science undergraduate passionate about full-stack
          development, scalable applications, and modern digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-cyan-400/40"
          >
            View Projects
          </a>

          <a
            href="/Kaushik.pdf"
            download
            className="px-8 py-4 rounded-full border border-gray-400 text-black hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}