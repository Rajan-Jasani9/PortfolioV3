"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Award, Copy, Check } from "lucide-react";
import Image from "next/image";

interface Certification {
  title: string;
  issuer: string;
  description?: string;
  link: string;
  validationLink?: string;
  validationCode?: string;
  badgeImage: string;
  date?: string;
}

const certifications: Certification[] = [
  {
    title: "AI Practitioner",
    issuer: "Amazon Web Services",
    description: "Certified in AI practices and methodologies",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/",
    validationLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/",
    validationCode: "d86819f14bd14addb6b92861a915890c",
    badgeImage: "/ai-practitioner.png",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-12 px-4 sm:px-8 lg:px-16 bg-black"
      id="certifications"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          Professional certifications and credentials
        </motion.p>

        <div className="w-full max-w-3xl">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ cert, index, isInView }: { cert: Certification; index: number; isInView: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cert.validationCode) {
      try {
        await navigator.clipboard.writeText(cert.validationCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const handleCodeClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cert.validationCode) {
      await handleCopyCode(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative border border-gray-800/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
      
      <div className="relative p-4 sm:p-6 flex flex-row items-start gap-4 sm:gap-6">
        {/* Badge Image */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center">
          <Image
            src={cert.badgeImage}
            alt={`${cert.title} Badge`}
            fill
            className="object-contain"
          />
        </div>

        {/* Certification Info */}
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {cert.title}
            </h3>
            {cert.link !== "#" && (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 group-hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
          
          <p className="text-cyan-400 text-xs sm:text-sm mb-2">
            {cert.issuer}
          </p>
          
          {cert.description && (
            <p className="text-gray-400 text-xs leading-relaxed mb-3">
              {cert.description}
            </p>
          )}
          
          {/* Validation Section */}
          {cert.validationCode && cert.validationLink && (
            <div className="mt-3 pt-3 border-t border-gray-800/50">
              <p className="text-gray-500 text-xs mb-1.5">Verification Code</p>
              <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-2 border border-gray-800/50">
                <code 
                  onClick={handleCodeClick}
                  className="flex-1 text-xs text-cyan-400 font-mono break-all cursor-pointer hover:text-cyan-300 transition-colors"
                  title="Click to copy"
                >
                  {cert.validationCode}
                </code>
                <motion.button
                  onClick={handleCopyCode}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 text-gray-400 hover:text-cyan-400 transition-colors flex-shrink-0"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </motion.button>
              </div>
              <a
                href={cert.validationLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-1.5 inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Verify credential <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
          
          {cert.date && (
            <p className="text-gray-500 text-xs mt-2">
              Issued: {cert.date}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
