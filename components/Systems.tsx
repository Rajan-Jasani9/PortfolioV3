"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const systems = [
  "Payment processing pipelines",
  "Web scraping & automation engines",
  "Content Processing Pipelines for RAG chatbots",
  "RAG pipelines & vector search",
  "Auth systems & role-based access",
  "High-scale APIs",
];

export default function Systems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 from-gray-950 to-black"
      id="systems"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Systems I Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          Infrastructure and architectures I build
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 border border-gray-800/50 rounded-xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-white font-medium">{system}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
