"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 border-t border-gray-200">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >

        {/* Left */}
        <div>

          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            A.Kaushik
          </h2>

          <p className="text-gray-600 mt-2">
            AI Engineer & Full Stack Developer
          </p>

        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/Akaushik3003"
            target="_blank"
            className="text-gray-700 hover:text-cyan-500 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-cyan-500 transition duration-300"
          >
            Contact
          </a>

        </div>

      </motion.div>

    </footer>
  );
}