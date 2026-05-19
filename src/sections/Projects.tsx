"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Chess-Based Encryption",
    description:
      "Secure encryption platform using chess movement logic, steganography, and cryptographic algorithms.",
    tech: ["Python", "Security", "Encryption"],
    github: "https://github.com/Akaushik3003/Chess-Based-Encryption",
    image: "/chess.png",
  },

  {
    title: "TeluguKitchen",
    description:
      "Modern food and recipe platform with responsive UI and clean user experience.",
    tech: ["React", "Frontend", "UI"],
    github: "https://github.com/Akaushik3003/TeluguKitchen",
    image: "/telugu.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white text-black py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-cyan-500 text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing development,
            problem-solving, and modern UI experiences.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#f8f8f8] border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-cyan-200/40 transition duration-500"
            >

              {/* Project Image */}
              <div className="relative w-full h-[300px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* GitHub Button */}
                <div className="mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-block px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 hover:-translate-y-1 transition duration-300 shadow-md hover:shadow-cyan-300/40"
                  >
                    View GitHub Repository
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}