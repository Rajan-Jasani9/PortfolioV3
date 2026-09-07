"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Notes", href: "#notes" },
  { label: "About", href: "#about" },
];

const layers = [
  {
    name: "Interface",
    detail: "Products, APIs and surfaces people actually use.",
    tech: "Next.js · React · REST",
  },
  {
    name: "Orchestration",
    detail: "Explicit application flow, state transitions and background work.",
    tech: "FastAPI · Django · Redis",
  },
  {
    name: "Intelligence",
    detail: "Retrieval, model calls, reranking and structured outputs.",
    tech: "RAG · Bedrock · Embeddings",
  },
  {
    name: "Data",
    detail: "Durable state, vectors, metadata and source provenance.",
    tech: "PostgreSQL · S3 · Vector search",
  },
  {
    name: "Infrastructure",
    detail: "Workers, cloud resources, observability and deployment boundaries.",
    tech: "AWS · Redis · Async workers",
  },
];

const traceSteps = [
  "Question",
  "Classify",
  "Plan",
  "Retrieve",
  "Rerank",
  "Generate",
  "Cite",
];

const writing = [
  {
    topic: "Retrieval architecture",
    title: "Why vector similarity is only the beginning",
    description: "Classification, retrieval planning, metadata constraints and reranking inside a domain-specific RAG system.",
  },
  {
    topic: "Private client systems",
    title: "How to explain a closed AI product without leaking the client",
    description: "A technical case-study pattern for architecture, safeguards, evaluation and product behavior without exposing sensitive implementation details.",
  },
  {
    topic: "Backend systems",
    title: "Async ingestion is a product capability, not a background detail",
    description: "Retries, state transitions, observability and failure recovery for document-heavy AI applications.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SystemXRay() {
  const [activeLayer, setActiveLayer] = useState(2);
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="xray-shell" aria-label="Interactive exploded software system">
      <div className="xray-stage">
        <div className="xray-rail" aria-hidden="true" />
        {layers.map((layer, index) => (
          <motion.button
            type="button"
            key={layer.name}
            className={`xray-layer xray-layer-${index} ${activeLayer === index ? "is-active" : ""}`}
            onMouseEnter={() => setActiveLayer(index)}
            onFocus={() => setActiveLayer(index)}
            onClick={() => setActiveLayer(index)}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.14 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="xray-layer-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="xray-layer-name">{layer.name}</span>
            <span className="xray-layer-pulse" aria-hidden="true" />
          </motion.button>
        ))}
      </div>

      <motion.div
        className="xray-readout"
        key={layers[activeLayer].name}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <p>{layers[activeLayer].name}</p>
        <strong>{layers[activeLayer].detail}</strong>
        <span>{layers[activeLayer].tech}</span>
      </motion.div>
    </div>
  );
}

function RequestTrace() {
  const [run, setRun] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (!run) return;

    if (reduceMotion) {
      setActiveStep(traceSteps.length - 1);
      return;
    }

    const timers = traceSteps.map((_, index) =>
      window.setTimeout(() => setActiveStep(index), index * 470)
    );
    const reset = window.setTimeout(() => setActiveStep(-1), traceSteps.length * 470 + 950);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(reset);
    };
  }, [run, reduceMotion]);

  return (
    <div className="trace-panel">
      <div className="trace-heading">
        <div>
          <p>Request path</p>
          <h4>Trace one answer through the system.</h4>
        </div>
        <button type="button" onClick={() => setRun((value) => value + 1)}>
          Trace request <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="trace-flow" aria-live="polite">
        {traceSteps.map((step, index) => {
          const isActive = activeStep === index;
          const isPassed = activeStep > index;
          return (
            <div className={`trace-node ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`} key={step}>
              <span className="trace-dot" aria-hidden="true" />
              <strong>{step}</strong>
              {index < traceSteps.length - 1 && <span className="trace-line" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SystemXRayPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());
  const heroLines = useMemo(() => ["ENGINEERING", "SYSTEMS THAT", "THINK, RETRIEVE", "AND SCALE."], []);

  return (
    <main className="sx-shell" id="top">
      <header className="sx-nav">
        <a href="#top" className="sx-brand" aria-label="Rajan Jasani home">
          <span>RJ</span>
          <strong>Rajan Jasani</strong>
        </a>

        <nav className="sx-nav-links" aria-label="Primary navigation">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <a href="mailto:rajan.developer09@gmail.com" className="sx-nav-contact">Contact <ArrowUpRight size={15} /></a>
        </nav>

        <button
          type="button"
          className="sx-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <motion.nav
        className={`sx-mobile-menu ${menuOpen ? "is-open" : ""}`}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a href="mailto:rajan.developer09@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
      </motion.nav>

      <section className="sx-hero sx-frame">
        <div className="sx-hero-copy">
          <motion.div
            className="sx-hero-meta"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>Backend systems</span>
            <span>Applied AI</span>
            <span>Pune / India</span>
          </motion.div>

          <h1>
            {heroLines.map((line, index) => (
              <span className="sx-hero-line-mask" key={line}>
                <motion.span
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={reduceMotion ? undefined : { y: 0 }}
                  transition={{ duration: 0.72, delay: 0.05 + index * 0.065, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="sx-hero-bottom"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            <p>
              I design backend and AI systems where retrieval, orchestration, data and infrastructure have to work as one production system.
            </p>
            <div className="sx-hero-links">
              <a href="#work">Selected work <span aria-hidden="true">↓</span></a>
              <a href="/Rajan Jasani.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} /></a>
            </div>
          </motion.div>
        </div>

        <SystemXRay />
      </section>

      <section className="sx-statement sx-frame">
        <Reveal className="sx-statement-grid">
          <p className="sx-section-name">What I do</p>
          <p className="sx-statement-copy">
            Open the system. See how it works. My portfolio is built around architecture, technical decisions and the constraints that shaped the final product.
          </p>
        </Reveal>
      </section>

      <section className="sx-work sx-frame" id="work">
        <div className="sx-section-header">
          <Reveal><h2>Selected systems</h2></Reveal>
          <Reveal delay={0.04}><p>Three kinds of proof: production work, private client systems and technical experiments.</p></Reveal>
        </div>

        <article className="sx-flagship" id="ask-hiphop">
          <div className="sx-project-copy">
            <div className="sx-project-topline">
              <span>Production knowledge system</span>
              <span>2025—26</span>
            </div>
            <Reveal>
              <h3>Ask HipHop</h3>
              <p className="sx-project-lead">
                A citation-first research system for a domain where context, source quality and interpretation matter as much as retrieval speed.
              </p>
            </Reveal>
            <Reveal className="sx-project-body" delay={0.05}>
              <p>
                I worked across API design, asynchronous ingestion, multi-knowledge-base retrieval, metadata filtering, reranking, source provenance and grounded response generation.
              </p>
              <div className="sx-metrics" aria-label="Ask HipHop system scale">
                <div><strong>60+</strong><span>textbooks</span></div>
                <div><strong>500+</strong><span>hours video</span></div>
                <div><strong>40+</strong><span>backend APIs</span></div>
              </div>
            </Reveal>
          </div>

          <Reveal className="sx-product-visual" delay={0.08}>
            <div className="sx-browser-caption">
              <span>chat.ask.hiphop</span>
              <span>production</span>
            </div>
            <div className="sx-browser-image">
              <Image src="/cha.png" alt="Ask HipHop product interface" fill sizes="(max-width: 900px) 100vw, 56vw" priority />
            </div>
          </Reveal>

          <Reveal className="sx-trace-wrap" delay={0.08}>
            <RequestTrace />
          </Reveal>
        </article>

        <article className="sx-private-project">
          <div className="sx-private-heading">
            <span>Private client system</span>
            <h3>BinaAI</h3>
          </div>
          <div className="sx-private-visual">
            <Image src="/binaAI.png" alt="BinaAI interface preview" fill sizes="(max-width: 900px) 100vw, 42vw" />
            <div className="sx-private-mask" aria-hidden="true"><span>CLIENT ACCESS CLOSED</span></div>
          </div>
          <div className="sx-private-copy">
            <p className="sx-private-lead">Curriculum-aware AI exam preparation with grounded answers, citations, quizzes and controlled access.</p>
            <p>
              The public case study will explain the architecture and development process without publishing private code, client data or confidential prompts.
            </p>
            <dl className="sx-dossier-list">
              <div><dt>Problem</dt><dd>Ground answers inside a strict exam curriculum.</dd></div>
              <div><dt>System</dt><dd>Django + FastAPI services, PostgreSQL, vector retrieval and React.</dd></div>
              <div><dt>Focus</dt><dd>Scope classification, citations, structured outputs and usage gating.</dd></div>
              <div><dt>Disclosure</dt><dd>Architecture only; client-sensitive details omitted.</dd></div>
            </dl>
          </div>
        </article>

        <div className="sx-supporting-list" aria-label="Supporting systems">
          <a href="https://github.com/Rajan-Jasani9/Hybrid-RAG-Playground" target="_blank" rel="noreferrer" className="sx-supporting-row">
            <span>Hybrid RAG Playground</span>
            <p>Inspectable vector + lexical retrieval experiments.</p>
            <ArrowUpRight size={18} />
          </a>
          <a href="https://github.com/Rajan-Jasani9/Engineering-Systems-Video-Pipeline-v3.0" target="_blank" rel="noreferrer" className="sx-supporting-row">
            <span>Engineering Systems Video Pipeline</span>
            <p>Programmatic technical-video production workflow.</p>
            <ArrowUpRight size={18} />
          </a>
          <div className="sx-supporting-row">
            <span>Measurement Management System</span>
            <p>Field reporting and offline sync for civil engineering operations.</p>
            <span className="sx-row-status">client system</span>
          </div>
        </div>
      </section>

      <section className="sx-notes sx-frame" id="notes">
        <div className="sx-section-header sx-section-header-dark">
          <Reveal><h2>Engineering notes</h2></Reveal>
          <Reveal delay={0.04}><p>Writing tied to systems I have actually built, debugged and operated.</p></Reveal>
        </div>

        <div className="sx-notes-list">
          {writing.map((item, index) => (
            <Reveal className="sx-note-row" key={item.title} delay={index * 0.04}>
              <span className="sx-note-topic">{item.topic}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="sx-note-state">Drafting</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sx-about sx-frame" id="about">
        <div className="sx-about-intro">
          <Reveal><h2>Backend first.<br />Product aware.</h2></Reveal>
          <Reveal delay={0.05}>
            <p>
              I work mainly with Python, FastAPI, Django, PostgreSQL, Redis and AWS, with applied AI focused on retrieval, agents and production integration rather than model demos in isolation.
            </p>
          </Reveal>
        </div>

        <div className="sx-about-ledger">
          <div><span>Current</span><strong>Software Engineer L2 · Crest Infosystems</strong></div>
          <div><span>Focus</span><strong>Backend · Applied AI · System Design</strong></div>
          <div><span>Community</span><strong>Django India · DjangoDay India</strong></div>
          <div><span>Certification</span><strong>AWS Certified AI Practitioner</strong></div>
          <div><span>Publishing</span><strong>Engineering Systems</strong></div>
        </div>
      </section>

      <footer className="sx-footer sx-frame" id="contact">
        <div className="sx-footer-top">
          <p>Have a difficult backend or AI system to build?</p>
          <a href="mailto:rajan.developer09@gmail.com">rajan.developer09@gmail.com <ArrowUpRight size={20} /></a>
        </div>
        <div className="sx-footer-name" aria-hidden="true">RAJAN JASANI</div>
        <div className="sx-footer-bottom">
          <span>Backend systems / Applied AI</span>
          <div>
            <a href="https://github.com/Rajan-Jasani9" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/rajanjasani" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:rajan.developer09@gmail.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
