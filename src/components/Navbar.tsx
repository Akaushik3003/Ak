"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
          A.Kaushik
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative text-gray-700 hover:text-cyan-500 transition duration-300 font-medium group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Kaushik.pdf"
            download
            className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-400/40"
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl text-black cursor-pointer">
          ☰
        </div>

      </div>
    </motion.nav>
  );
}