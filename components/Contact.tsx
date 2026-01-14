"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Code2, Mail, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-black px-6 sm:px-10 lg:px-24 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Let’s connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            If you're building something serious — infrastructure, SaaS, or AI —
            let’s talk.
          </p>
        </motion.div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <ContactCard
            icon={<Mail size={28} />}
            label="Email"
            value="rajan.developer09@gmail.com"
            href="mailto:rajan.developer09@gmail.com"
          />

          <ContactCard
            icon={<Phone size={28} />}
            label="Phone"
            value="+91 7016566752"
            href="tel:+917016566752"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <SocialCard
            icon={<Github size={28} />}
            label="GitHub"
            value="Rajan-Jasani9"
            href="https://github.com/Rajan-Jasani9/"
          />

          <SocialCard
            icon={<Linkedin size={28} />}
            label="LinkedIn"
            value="rajanjasani"
            href="https://www.linkedin.com/in/rajanjasani/"
          />

          <SocialCard
            icon={<Instagram size={28} />}
            label="Instagram"
            value="@khanabadosh_r9"
            href="https://www.instagram.com/khanabadosh_r9/"
          />

          <SocialCard
            icon={<Code2 size={28} />}
            label="LeetCode"
            value="rajan_jasani9"
            href="https://leetcode.com/u/rajan_jasani9/"
          />
        </motion.div>

      </div>
    </section>
  );
}

/* ---------------------------------- */

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4 text-white">
        {icon}
        <span className="text-lg font-semibold">{label}</span>
      </div>

      <p className="text-gray-400 group-hover:text-gray-300 transition">
        {value}
      </p>
    </a>
  );
}

function SocialCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4 text-white">
        {icon}
        <span className="text-lg font-semibold">{label}</span>
      </div>

      <p className="text-gray-400 group-hover:text-gray-300 transition">
        {value}
      </p>
    </a>
  );
}
