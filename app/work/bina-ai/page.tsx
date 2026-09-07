import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BinaAI — Private Client Case Study",
  description:
    "A sanitized engineering case study covering the architecture and product decisions behind a curriculum-aware AI exam preparation system.",
};

const capabilities = [
  "Curriculum-aware question handling",
  "Grounded responses with citations",
  "Quiz and assessment generation",
  "Structured model outputs",
  "Trial and usage gating",
  "Document-backed retrieval",
];

const architecture = [
  ["Student request", "Question or study action enters the product"],
  ["Scope classification", "Determine whether the request belongs inside the supported curriculum"],
  ["Retrieval", "Find relevant material from approved educational content"],
  ["Generation", "Produce a structured answer or assessment"],
  ["Guardrails", "Keep output within the learning workflow and supported scope"],
  ["Persistence", "Store product state, usage and learning interactions"],
];

export default function BinaAICaseStudy() {
  return (
    <main className="case-shell">
      <header className="case-nav">
        <Link href="/" className="case-home">RJ</Link>
        <Link href="/#work">Back to selected work</Link>
      </header>

      <section className="case-hero case-frame case-hero-private">
        <div className="case-hero-copy">
          <p className="case-eyebrow">Private client system</p>
          <h1>BinaAI</h1>
          <p className="case-deck">
            A curriculum-aware AI exam preparation product built around grounded answers, citations, structured assessments and controlled access.
          </p>
        </div>
        <dl className="case-meta">
          <div><dt>Disclosure</dt><dd>Sanitized public case study</dd></div>
          <div><dt>Role</dt><dd>Backend / AI Engineering</dd></div>
          <div><dt>Stack</dt><dd>Django · FastAPI · PostgreSQL · React</dd></div>
          <div><dt>Access</dt><dd>Client project closed</dd></div>
        </dl>
      </section>

      <section className="case-private-banner case-frame">
        <strong>What this page does not expose</strong>
        <p>
          No private source code, production credentials, client data, confidential prompts or internal business rules are reproduced here. The goal is to explain the engineering shape of the product and the reasoning behind it.
        </p>
      </section>

      <section className="case-visual case-frame">
        <div className="case-browser-bar"><span>BinaAI</span><span>selected interface / client access closed</span></div>
        <div className="case-browser-image case-browser-image-private">
          <Image src="/binaAI.png" alt="BinaAI interface preview" fill sizes="100vw" priority />
          <div className="case-redaction" aria-hidden="true"><span>PRIVATE CLIENT SYSTEM</span></div>
        </div>
      </section>

      <section className="case-summary case-frame">
        <div className="case-summary-copy">
          <p className="case-section-label">The problem</p>
          <h2>Useful AI had to stay inside the curriculum.</h2>
          <p>
            An educational assistant cannot simply answer broadly and sound confident. The system needed to understand whether a request belonged to the supported learning scope, retrieve from approved material, return grounded responses and fit those answers into an exam-preparation workflow.
          </p>
        </div>
        <div className="case-capability-list">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </section>

      <section className="case-flow-section case-frame">
        <p className="case-section-label">Product flow</p>
        <div className="case-flow case-flow-private">
          {architecture.map(([title, description], index) => (
            <div className="case-flow-node" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-decisions case-frame">
        <div className="case-decisions-heading">
          <p className="case-section-label">What mattered technically</p>
          <h2>Product boundaries were part of the AI architecture.</h2>
        </div>
        <div className="case-decision-list">
          <article>
            <h3>Scope before confidence</h3>
            <p>The product first needed to decide whether a question belonged to the supported curriculum. That boundary is more important than simply generating a plausible answer.</p>
          </article>
          <article>
            <h3>Ground the learning experience</h3>
            <p>Retrieval and citations help turn the model from a generic conversational layer into an assistant attached to the material the student is expected to learn.</p>
          </article>
          <article>
            <h3>Structured outputs for product behavior</h3>
            <p>Quizzes, assessments and workflow actions benefit from predictable schemas rather than free-form text. Model output becomes easier to validate and integrate into the UI.</p>
          </article>
          <article>
            <h3>AI features still need normal backend discipline</h3>
            <p>Authentication, usage limits, persistence, API boundaries and service ownership remain core product concerns even when the most visible feature is an LLM-powered assistant.</p>
          </article>
        </div>
      </section>

      <section className="case-stack case-frame">
        <div>
          <p className="case-section-label">Application</p>
          <p>Django REST · FastAPI services · React</p>
        </div>
        <div>
          <p className="case-section-label">Data</p>
          <p>PostgreSQL · document storage · vector retrieval</p>
        </div>
        <div>
          <p className="case-section-label">AI product patterns</p>
          <p>Scope classification · citations · structured generation · gated usage</p>
        </div>
      </section>

      <footer className="case-footer case-frame">
        <p>Previous system</p>
        <Link href="/work/ask-hiphop">Ask HipHop <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
