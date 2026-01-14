"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer L2",
    company: "Crest Skillserve Pvt Ltd.",
    location: "Surat",
    period: "May 2024 - Present",
    responsibilities: [
      "Developed full-stack web applications and REST APIs using Django, DRF, React, and PostgreSQL, with a focus on performance and scalability",
      "Built automated data extraction pipelines using Scrapy and Playwright for large-scale, reliable web scraping",
      "Integrated AI features using OpenAI APIs and Pinecone for semantic search and intelligent automation",
      "Built the end-to-end backend for a Traditional Chinese Medicine-based RAG chatbot using a microservices architecture, supporting a knowledge base of 600+ videos and 100+ textbooks, with services for video transcription, PDF/text vectorization, query processing, similarity search, and core application logic",
      "Currently working on a cricket video analysis system that extracts player keypoints using RTMPose and detects the cricket bat with a retrained YOLOv8 model",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "Crest Infosystems Pvt Ltd.",
    location: "Surat",
    period: "Jan 2024 - May 2024",
    responsibilities: [
      "Assisted in API development tasks, including database design, endpoint creation, and data serialization for real-world client projects",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16  from-black to-gray-950"
      id="experience"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          My professional journey and key achievements
        </motion.p>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Pulsing timeline dot */}
                <motion.div
                  className="absolute left-2 sm:left-6 top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black z-10"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0, 212, 255, 0.7)",
                      "0 0 0 8px rgba(0, 212, 255, 0)",
                      "0 0 0 0 rgba(0, 212, 255, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "rgba(0, 212, 255, 0.5)" }}
                  className="border border-gray-800 rounded-2xl bg-gray-900/50 hover:border-cyan-500/50 hover:bg-gray-900 transition-all duration-300 p-6 sm:p-8 backdrop-blur-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {exp.company} | {exp.location}
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + idx * 0.1 }}
                        className="flex items-start text-gray-400 leading-relaxed"
                      >
                        <span className="text-cyan-500 mr-3 mt-1.5">▹</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
