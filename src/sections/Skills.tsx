"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Wrench,
  Layers3,
} from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#fafafa] text-black py-32 px-6"
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
            Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            What I Work With
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Technologies, tools, and frameworks I use to build
            modern, scalable, and user-friendly applications.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-200 rounded-[32px] p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500"
          >

            <Code2
              size={48}
              className="text-cyan-500 mb-8"
            />

            <h3 className="text-3xl font-bold mb-8">
              Languages
            </h3>

            <p className="text-gray-600 leading-loose text-lg">
              Python,
              JavaScript,
              SQL,
              HTML,
              CSS,
              C
            </p>

          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-200 rounded-[32px] p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500"
          >

            <GraduationCap
              size={48}
              className="text-cyan-500 mb-8"
            />

            <h3 className="text-3xl font-bold mb-8">
              Education
            </h3>

            <p className="text-gray-600 leading-loose text-lg">
              B.E in
              Computer Science
              and Engineering
            </p>

          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-200 rounded-[32px] p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500"
          >

            <Layers3
              size={48}
              className="text-cyan-500 mb-8"
            />

            <h3 className="text-3xl font-bold mb-8">
              Frameworks
            </h3>

            <p className="text-gray-600 leading-loose text-lg">
              React,
              Next.js,
              FastAPI,
              Flask,
              Streamlit
            </p>

          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-200 rounded-[32px] p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500"
          >

            <Wrench
              size={48}
              className="text-cyan-500 mb-8"
            />

            <h3 className="text-3xl font-bold mb-8">
              Tools
            </h3>

            <p className="text-gray-600 leading-loose text-lg">
              VS Code,
              GitHub,
              Firebase,
              MongoDB,
              Vercel,
              Postman
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}