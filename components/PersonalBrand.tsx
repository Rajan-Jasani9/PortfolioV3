"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PersonalBrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-black py-20 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left - Statement */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            I build systems<br />that scale.
          </h2>

          <div className="w-24 h-[2px] bg-cyan-400 mb-8"></div>

          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Engineer by profession. System builder by obsession.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            I design software the same way I design my life — disciplined,
            intentional, and optimized for long-term growth.
          </p>
        </motion.div>

        {/* Right - Minimal Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-10"
        >
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I work with Python, Django, FastAPI, AWS, PostgreSQL, and modern
            vector databases to build SaaS platforms, automation engines,
            and AI-driven products.
          </p>

          <p className="text-gray-500 italic">
            Not flashy. Not noisy. Just well-engineered.
          </p>

          {/* Glow */}
          <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-2xl blur-xl -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}
