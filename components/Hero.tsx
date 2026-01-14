"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} intensity={0.6} />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#00d4ff"
            wireframe
            emissive="#00d4ff"
            emissiveIntensity={0.15}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black"
      id="home"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Scene />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent "></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        {/* Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8 rounded-full overflow-hidden border-4 "
        >
          {/* Replace with your image */}
          <Image
            src="/rajan.jpg"   // put your photo in public/rajan.jpg
            alt="Rajan Jasani"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Name with typing */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4  from-white via-cyan-200">
          <Typewriter
            words={["Rajan Jasani"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
          />
        </h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-2xl sm:text-3xl text-gray-300 mb-6"
        >
          Backend Engineer • System Builder
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10"
        >
          I build scalable backend systems, SaaS platforms, and AI-powered
          products using Python, Django, FastAPI, AWS, and Vector Databases.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
