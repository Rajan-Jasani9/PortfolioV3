"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "Measurement Management System",
    description:
      "Delivered a Measurement Management System for a civil engineering firm in Surat. Streamlined site data collection and reporting processes, and included an offline data sync process for seamless field operations.",
    tech: ["Django", "Django REST Framework", "PostgreSQL", "React", "Offline Sync"],
    link: "https://shreemahakalienterprise.netlify.app/",
  },
  {
    title: "HUD Finance-focused RAG Chatbot",
    description:
      "Built the backend for a HUD (Housing and Urban Development) finance-focused RAG chatbot. Included document upload, processing, and question-answering capabilities using vector search for intelligent document retrieval.",
    tech: ["FastAPI", "Python", "Vector Databases", "Pinecone", "OpenAI", "RAG"],
    link: "#",
  },
  {
    title: "Google/Yelp Review & Marketing Widgets Backend",
    description:
      "Recently built a FastAPI-based backend for generating customizable Google/Yelp reviews and marketing widgets. Scraped Yelp, used Google Reviews API, and utilized templates to produce a simple two-line HTML embed (div + script) for easy website integration.",
    tech: ["FastAPI", "Python", "Web Scraping", "Google Reviews API", "Yelp API"],
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 lg:px-16 bg-black"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          Showcase of my recent work and contributions
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative border border-gray-800/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              
              {/* Preview Area */}
              {(project.image || project.video) && (
                <div className="relative w-full h-48 sm:h-64 bg-gray-800 overflow-hidden">
                  {project.video ? (
                    <video
                      className="w-full h-full object-cover"
                      src={project.video}
                      controls
                      muted
                    />
                  ) : (
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={project.image}
                      alt={project.title}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
              )}

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="ml-4 p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all"
                      aria-label={`Visit ${project.title}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  )}
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
