"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black py-32 px-6"
    >

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-cyan-500 text-sm mb-6">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            Who I Am
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed max-w-5xl mx-auto">

            I am A.Kaushik, a Computer Science undergraduate with hands-on
            experience in Python, SQL, React, and full-stack development.
            I enjoy building modern, scalable, and user-friendly web applications
            while continuously exploring new technologies and improving my
            problem-solving skills.

            <br />
            <br />

            I am passionate about creating impactful digital solutions,
            learning emerging technologies, and gaining real-world
            industry experience through projects and internships.

          </p>

        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >

          {/* Card 1 */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500">

            <h3 className="text-4xl font-bold text-cyan-500 mb-4">
              5+
            </h3>

            <p className="text-xl font-semibold mb-3">
              Projects Built
            </p>

            <p className="text-gray-600 leading-relaxed">
              Developed academic and personal projects using
              modern full-stack technologies and secure systems.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500">

            <h3 className="text-4xl font-bold text-cyan-500 mb-4">
              Internship
            </h3>

            <p className="text-xl font-semibold mb-3">
              Vishwam AI
            </p>

            <p className="text-gray-600 leading-relaxed">
              Worked on full-stack development, responsive UI,
              and modern web application features.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-cyan-200/40 transition duration-500">

            <h3 className="text-4xl font-bold text-cyan-500 mb-4">
              Skills
            </h3>

            <p className="text-xl font-semibold mb-3">
              Tech Stack
            </p>

            <p className="text-gray-600 leading-relaxed">
              Python, React, SQL, Next.js, JavaScript,
              Full Stack Development, and UI Design.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}