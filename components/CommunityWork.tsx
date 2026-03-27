"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users, Globe } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

interface CommunityWorkItem {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  image?: JSX.Element | string;
}

const communityWorks: CommunityWorkItem[] = [
  {
    title: "Lead Django India Monthly Meet-up",
    description:
      "Led a Django India Monthly Meet-up where I delivered a talk on 'Beyond .all(): Mastering Django ORM from Basics to Brilliance'. The session covered advanced ORM techniques, query optimization, and best practices for building efficient Django applications.",
    link: "https://www.djangoindia.org/gallery/django-india-surat-meetup",
    icon: <Users className="w-6 h-6" />,
    image: <Image src="/django-india-meetup-preview.png" alt="Django India Meet-up" width={800} height={500} />,
  },
  {
    title: "Developed Website for DjangoDay.in",
    description:
      "Designed and developed the official website for DjangoDay India 2025, the premier conference for Django enthusiasts and professionals. Built a modern, responsive platform showcasing the event schedule, keynote speakers, sponsors, and community partnerships. The website features a culturally-inspired design reflecting India's diversity and heritage, providing an engaging experience for attendees and sponsors.",
    link: "https://djangoday.in/",
    icon: <Globe className="w-6 h-6" />,
    image: <Image src="/djangoday-preview.png" alt="DjangoDay.in Website" width={800} height={500} />,
  },
];

export default function CommunityWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-12 px-4 sm:px-8 lg:px-16 bg-black"
      id="community"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Community Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          Contributing to the Django community and open source ecosystem
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {communityWorks.map((work, index) => (
            <motion.a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative border border-gray-800/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              
              {/* Preview Area */}
              {work.image && (
                <div className="relative w-full h-48 sm:h-64 overflow-hidden">
                  {work.image}
                </div>
              )}
              
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      {work.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {work.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-4 p-2 text-gray-400 group-hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
