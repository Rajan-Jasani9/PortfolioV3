"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ServerCog,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import { ReactNode, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
];

const systemPrinciples = [
  {
    icon: Database,
    title: "Retrieval architecture",
    text: "Turn large information spaces into usable, grounded and inspectable context.",
  },
  {
    icon: Workflow,
    title: "Async pipelines",
    text: "Design background workflows that can retry, recover and scale independently.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & RBAC",
    text: "Build secure access models that stay understandable as products grow.",
  },
  {
    icon: Layers3,
    title: "Applied AI systems",
    text: "Make model behavior part of a reliable product system, not a disconnected demo.",
  },
  {
    icon: ServerCog,
    title: "Backend architecture",
    text: "Prefer explicit boundaries, observable services and boring reliability over cleverness.",
  },
];

const writingTopics = [
  {
    kicker: "Retrieval",
    title: "Designing retrieval plans before vector search",
    text: "How classification, metadata and reranking can make domain-specific RAG systems more predictable.",
  },
  {
    kicker: "Applied AI",
    title: "Building curriculum-aware AI without exposing client internals",
    text: "A technical breakdown of architecture, safeguards and evaluation patterns from a private education project.",
  },
  {
    kicker: "Backend Systems",
    title: "Async ingestion as a product capability",
    text: "Why ingestion, retries, observability and state transitions deserve first-class architecture.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SystemFlow() {
  const steps = ["Question", "Classification", "Retrieval plan", "Vector search", "Rerank", "LLM", "Grounded response"];

  return (
    <div className="system-flow" aria-label="A simplified retrieval augmented generation flow">
      {steps.map((step, index) => (
        <div className="flow-step-wrap" key={step}>
          <motion.div
            className={`flow-step ${index === steps.length - 1 ? "flow-step-accent" : ""}`}
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.055 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </motion.div>
          {index < steps.length - 1 && <div className="flow-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function HeroArchitecture() {
  const reduceMotion = useReducedMotion();
  const layers = [
    { label: "Interfaces", meta: "APIs · products", offset: 0 },
    { label: "Intelligence", meta: "LLMs · retrieval", offset: 1 },
    { label: "Data", meta: "Postgres · vectors", offset: 2 },
    { label: "Infrastructure", meta: "AWS · workers", offset: 3 },
  ];

  return (
    <div className="hero-architecture" aria-hidden="true">
      <div className="architecture-axis architecture-axis-x" />
      <div className="architecture-axis architecture-axis-y" />
      {layers.map((layer, index) => (
        <motion.div
          key={layer.label}
          className={`architecture-layer architecture-layer-${layer.offset}`}
          initial={reduceMotion ? false : { opacity: 0, y: 26, rotateX: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.25 + index * 0.11, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>{layer.label}</span>
          <small>{layer.meta}</small>
        </motion.div>
      ))}
      <motion.div
        className="architecture-core"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        RJ
      </motion.div>
      <span className="architecture-note architecture-note-top">people → systems → outcomes</span>
      <span className="architecture-note architecture-note-bottom">reliable · scalable · useful</span>
    </div>
  );
}

export default function PremiumPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main className="portfolio-shell">
      <header className="premium-nav">
        <a className="brand-lockup" href="#top" aria-label="Rajan Jasani home">
          <span className="brand-monogram">RJ</span>
          <span className="brand-copy">
            <strong>Rajan Jasani</strong>
            <small>Systems × Applied AI</small>
          </span>
        </a>

        <nav className="desktop-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact">Let&apos;s build <ArrowUpRight size={15} /></a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <motion.div
        className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -12 }}
        transition={{ duration: 0.25 }}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation</a>
      </motion.div>

      <section className="premium-hero section-frame" id="top">
        <div className="hero-copy-column">
          <motion.p
            className="hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Software Engineer · Backend Systems · Applied AI
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            Backend systems.
            <em>Applied intelligence.</em>
            Built for production.
          </motion.h1>

          <motion.p
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            I design and engineer AI-powered products, retrieval systems and scalable backend infrastructure — with a focus on making complex systems understandable, observable and useful.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <a className="button-primary" href="#work">Explore selected work <ArrowUpRight size={16} /></a>
            <a className="button-quiet" href="/Rajan Jasani.pdf" target="_blank" rel="noreferrer">View résumé</a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <span><MapPin size={14} /> India · Pune focused</span>
            <span>Backend Engineer</span>
            <span>Applied AI</span>
            <span>System Design</span>
          </motion.div>
        </div>

        <HeroArchitecture />
      </section>

      <section className="selected-work section-frame" id="work">
        <Reveal className="section-heading-row">
          <div>
            <p className="section-kicker">Selected systems</p>
            <h2>Work that explains <em>how I think.</em></h2>
          </div>
          <p className="section-note">Real products, private client systems and engineering experiments — presented through architecture, decisions and outcomes.</p>
        </Reveal>

        <article className="flagship-project">
          <Reveal className="flagship-copy">
            <div className="project-label-row">
              <span>Flagship system</span>
              <span>Domain RAG · Production</span>
            </div>
            <h3>Ask HipHop</h3>
            <p className="project-deck">A citation-first cultural knowledge system built to answer difficult questions without flattening context.</p>
            <p className="project-body">Designed around multi-source ingestion, question classification, retrieval planning, vector search, reranking and grounded generation. The system turns books, long-form video and structured entity data into a research experience with traceable answers.</p>

            <div className="metric-grid">
              <div><strong>60+</strong><span>textbooks ingested</span></div>
              <div><strong>500+</strong><span>hours of video</span></div>
              <div><strong>40+</strong><span>backend APIs</span></div>
              <div><strong>RAG</strong><span>retrieval-first architecture</span></div>
            </div>

            <div className="project-actions">
              <a className="button-primary" href="https://chat.ask.hiphop" target="_blank" rel="noreferrer">Open product <ArrowUpRight size={16} /></a>
              <span className="text-action">Deep-dive case study next</span>
            </div>
          </Reveal>

          <Reveal className="flagship-visual" delay={0.08}>
            <div className="product-window">
              <div className="product-window-bar"><span /><span /><span /><small>Ask HipHop</small></div>
              <div className="product-image-wrap">
                <Image src="/cha.png" alt="Ask HipHop product interface" fill sizes="(max-width: 900px) 100vw, 56vw" priority />
              </div>
            </div>
          </Reveal>

          <Reveal className="flagship-flow" delay={0.12}>
            <p className="mini-label">System flow</p>
            <SystemFlow />
          </Reveal>
        </article>

        <div className="secondary-project-grid">
          <Reveal className="secondary-project private-project">
            <div className="project-label-row"><span>Private client case study</span><span>Education AI</span></div>
            <h3>BinaAI</h3>
            <p className="project-deck">Curriculum-aware AI exam preparation with grounded answers, citations and structured learning workflows.</p>
            <div className="secondary-product-image">
              <Image src="/binaAI.png" alt="BinaAI interface preview" fill sizes="(max-width: 760px) 100vw, 48vw" />
            </div>
            <div className="private-project-footer">
              <p>Client access is closed. The public case study will focus on architecture, retrieval, safeguards, structured outputs and development decisions — without exposing private code or data.</p>
              <span>Architecture write-up planned</span>
            </div>
          </Reveal>

          <Reveal className="supporting-systems" delay={0.08}>
            <p className="mini-label">Supporting builds</p>
            <a href="https://rag.rajanjasani.in/" target="_blank" rel="noreferrer" className="support-row">
              <div><strong>Hybrid RAG Playground</strong><span>Inspect retrieval results across vector and lexical search.</span></div>
              <ArrowUpRight size={18} />
            </a>
            <div className="support-row">
              <div><strong>Measurement Management System</strong><span>Field data, reporting and offline sync for civil engineering operations.</span></div>
              <span className="support-tag">Client system</span>
            </div>
            <a href="https://github.com/Rajan-Jasani9/Engineering-Systems-Video-Pipeline-v3.0" target="_blank" rel="noreferrer" className="support-row">
              <div><strong>Engineering Systems Video Pipeline</strong><span>Programmatic workflow for producing technical video content.</span></div>
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="systems-section section-frame" id="systems">
        <Reveal className="section-heading-row compact-heading">
          <div>
            <p className="section-kicker">Engineering lens</p>
            <h2>How I think about <em>systems.</em></h2>
          </div>
          <p className="section-note">The tools change. These are the recurring concerns I optimize for.</p>
        </Reveal>

        <div className="principles-grid">
          {systemPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal className="principle-card" delay={index * 0.045} key={principle.title}>
                <Icon size={24} strokeWidth={1.45} />
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="writing-section section-frame" id="writing">
        <Reveal className="writing-intro">
          <div>
            <p className="section-kicker">Technical writing</p>
            <h2>Build it. Then explain <em>why it works.</em></h2>
          </div>
          <p>I&apos;m turning production lessons and private-client architecture into public technical notes — without publishing confidential implementation details.</p>
        </Reveal>

        <div className="writing-grid">
          {writingTopics.map((topic, index) => (
            <Reveal className="writing-card" key={topic.title} delay={index * 0.06}>
              <div className="writing-card-top"><span>{topic.kicker}</span><BookOpen size={18} /></div>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
              <span className="draft-label">Editorial queue</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section section-frame" id="about">
        <Reveal className="about-main">
          <p className="section-kicker">Current work</p>
          <h2>Software Engineer L2 at Crest Skillserve.</h2>
          <p>I work across backend services, RAG systems, APIs, cloud infrastructure and production AI workflows. Outside work, I build independent systems, publish system-design content and contribute to the Django community.</p>
        </Reveal>

        <div className="credibility-grid">
          <Reveal className="credibility-item"><span>Work</span><strong>Crest Skillserve</strong><small>Software Engineer L2</small></Reveal>
          <Reveal className="credibility-item" delay={0.04}><span>Writing / Video</span><strong>Engineering Systems</strong><small>System design education</small></Reveal>
          <Reveal className="credibility-item" delay={0.08}><span>Community</span><strong>Django India</strong><small>Meetups · DjangoDay contributor</small></Reveal>
          <Reveal className="credibility-item" delay={0.12}><span>Credential</span><strong>AWS AI Practitioner</strong><small>Certified</small></Reveal>
        </div>
      </section>

      <footer className="premium-contact section-frame" id="contact">
        <Reveal className="contact-main">
          <p className="section-kicker">Let&apos;s connect</p>
          <h2>Building something technically ambitious?</h2>
          <p>I&apos;m interested in backend, applied AI and system-design-heavy opportunities where engineering quality matters.</p>
          <a className="contact-email" href="mailto:rajan.developer09@gmail.com">rajan.developer09@gmail.com <ArrowUpRight size={20} /></a>
        </Reveal>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/rajanjasani" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href="https://github.com/Rajan-Jasani9" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href="mailto:rajan.developer09@gmail.com"><Mail size={17} /> Email</a>
        </div>
        <div className="footer-signoff"><span>Rajan Jasani</span><span>Backend systems · Applied intelligence · Built for production.</span></div>
      </footer>
    </main>
  );
}
