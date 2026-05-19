"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#fafafa] text-black py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-cyan-500 text-sm mb-6">
            Contact
          </p>

          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-10">
            Let’s Build
            <br />
            Something Great.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            I’m always open to discussing new opportunities,
            collaborations, innovative projects, and creative ideas.
          </p>

          {/* Email Card */}
          <div className="mt-14">

            <a
              href="mailto:a.kaushik3003@gmail.com"
              className="flex items-center gap-5 bg-white border border-gray-200 rounded-3xl px-6 py-5 shadow-md hover:shadow-cyan-100 transition duration-300 hover:-translate-y-1 w-fit"
            >

              {/* Mail Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center text-3xl">
                📩
              </div>

              {/* Text */}
              <div>

                <p className="text-gray-500 text-sm">
                  Send me an Email
                </p>

                <p className="text-lg font-semibold text-black">
                  akaushik5008@gmail.com
                </p>

              </div>

            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-8 mt-14">

            <a
              href="https://github.com/Akaushik3003"
              target="_blank"
              className="text-lg text-gray-700 hover:text-cyan-500 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              className="text-lg text-gray-700 hover:text-cyan-500 transition duration-300"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-[35px] p-10 shadow-xl"
        >

          <form className="space-y-8">

            {/* Name */}
            <div>

              <label className="block text-gray-600 mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition duration-300"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-gray-600 mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition duration-300"
              />

            </div>

            {/* Message */}
            <div>

              <label className="block text-gray-600 mb-3">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition duration-300 resize-none"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-5 rounded-2xl transition duration-300 shadow-lg hover:shadow-cyan-300/40"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}