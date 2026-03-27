"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Youtube } from "lucide-react";
import Image from "next/image";

export default function EngineeringSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 px-6 lg:px-16 bg-black"
      id="engineering-systems"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          System Design Learning
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          A YouTube channel for understanding system design concepts
        </motion.p>

        <motion.a
          href="https://www.youtube.com/@engineering_systems_r9"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="group relative border border-gray-800/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300 overflow-hidden block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
          <div className="relative w-full h-48 sm:h-64 overflow-hidden">
            <Image
              src="/engineering-systems.png"
              alt="Engineering Systems - Mastering System Design & Architecture"
              width={800}
              height={450}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Engineering Systems
                  </h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    A YouTube channel for understanding system design concepts — mastering distributed systems, APIs, load balancing, and architecture patterns.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors flex-shrink-0">
                <ExternalLink className="w-5 h-5" />
                Watch on YouTube
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
