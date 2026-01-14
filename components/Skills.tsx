"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  SiPython,
  SiDjango,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiAmazon,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaDatabase, FaCloud, FaServer } from "react-icons/fa";

/* -------------------------------------------------
   Icon Mapping (Only Real, Existing Icons)
-------------------------------------------------- */

const skillIcons: Record<string, React.ComponentType<any>> = {
  Python: SiPython,
  Django: SiDjango,
  JavaScript: SiJavascript,
  ReactJs: SiReact,
  NextJs: SiNextdotjs,
  PostgreSQL: SiPostgresql,
  AWS: SiAmazon,
  Git: SiGit,
  GitHub: SiGithub,

  // Backend & infra (no official logos → use system icons)
  FastAPI: FaServer,
  "Django Rest Framework": FaServer,
  VectorDBs: FaDatabase,
  Pinecone: FaDatabase,
  "Pg-Vector Extension": FaDatabase,
  "S3 Vector Bucket": FaDatabase,
  S3: FaDatabase,
  EC2: FaCloud,
};

/* -------------------------------------------------
   Categories
-------------------------------------------------- */

const skillCategories = {
  "Backend & APIs": [
    "Python",
    "FastAPI",
    "Django",
    "Django Rest Framework",
  ],
  "Frontend": ["JavaScript", "ReactJs", "NextJs"],
  "Database & Vector": [
    "PostgreSQL",
    "VectorDBs",
    "Pinecone",
    "Pg-Vector Extension",
    "S3 Vector Bucket",
  ],
  "Cloud & DevOps": [
    "AWS",
    "S3",
    "EC2",
    "Git",
    "GitHub",
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 lg:px-16 bg-black"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-14"
        >
          Technologies I use to build scalable and efficient systems
        </motion.p>

        {/* Categories */}
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * categoryIndex }}
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-800 via-cyan-500/40 to-transparent" />
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {skills.map((skill, index) => {
                  const Icon = skillIcons[skill] || FaDatabase;

                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.06, y: -6 }}
                      className="group relative p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-md hover:border-cyan-500/60 transition-all"
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all" />

                      <div className="relative flex flex-col items-center gap-3">
                        <Icon className="text-4xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-white text-sm font-medium text-center">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
