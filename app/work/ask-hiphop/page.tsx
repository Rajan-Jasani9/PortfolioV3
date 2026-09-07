import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ask HipHop — Engineering Case Study",
  description:
    "How Rajan Jasani designed backend, retrieval and ingestion systems for Ask HipHop, a citation-first cultural knowledge platform.",
};

const flow = [
  ["Question", "User intent enters the system"],
  ["Classification", "Route the request before retrieval"],
  ["Retrieval plan", "Choose knowledge bases and constraints"],
  ["Search", "Vector search plus metadata filters"],
  ["Rerank", "Improve relevance before generation"],
  ["Generate", "Compose a grounded answer"],
  ["Cite", "Return source-aware output"],
];

const decisions = [
  {
    title: "Classify before retrieving",
    body: "A domain system benefits from knowing what kind of question it is answering before searching. Classification gives retrieval a narrower job and makes metadata constraints explicit instead of hoping similarity search discovers the right context on its own.",
  },
  {
    title: "Treat ingestion as its own system",
    body: "Books, long-form video and structured entity data arrive through different pipelines. Asynchronous workers keep ingestion, parsing, embedding and indexing away from interactive request latency while making retries and failure states observable.",
  },
  {
    title: "Keep provenance attached to context",
    body: "Retrieval is not useful enough if the product cannot explain where an answer came from. Source metadata survives the pipeline so the generated response can remain tied to inspectable evidence.",
  },
  {
    title: "Design for multiple knowledge spaces",
    body: "The system evolved beyond a single vector collection. Retrieval planning and metadata filters allow questions to be evaluated against the appropriate project or knowledge base rather than searching everything indiscriminately.",
  },
];

export default function AskHipHopCaseStudy() {
  return (
    <main className="case-shell">
      <header className="case-nav">
        <Link href="/" className="case-home">RJ</Link>
        <Link href="/#work">Back to selected work</Link>
      </header>

      <section className="case-hero case-frame">
        <div className="case-hero-copy">
          <p className="case-eyebrow">Production knowledge system</p>
          <h1>Ask HipHop</h1>
          <p className="case-deck">
            Building a citation-first research system for a knowledge domain where context, source quality and interpretation matter.
          </p>
        </div>
        <dl className="case-meta">
          <div><dt>Role</dt><dd>Backend / Applied AI Engineering</dd></div>
          <div><dt>System</dt><dd>RAG · Async ingestion · APIs</dd></div>
          <div><dt>Stack</dt><dd>FastAPI · PostgreSQL · Redis · AWS</dd></div>
          <div><dt>Status</dt><dd>Production</dd></div>
        </dl>
      </section>

      <section className="case-visual case-frame">
        <div className="case-browser-bar"><span>chat.ask.hiphop</span><span>selected interface</span></div>
        <div className="case-browser-image">
          <Image src="/cha.png" alt="Ask HipHop interface" fill sizes="100vw" priority />
        </div>
      </section>

      <section className="case-summary case-frame">
        <div className="case-summary-copy">
          <p className="case-section-label">The system</p>
          <h2>Not one model call. A chain of engineering decisions.</h2>
          <p>
            Ask HipHop combines domain content, long-form media and structured data behind a retrieval system designed to preserve context and provenance. The backend coordinates ingestion, retrieval planning, vector search, reranking and grounded generation instead of treating RAG as a single similarity-search step.
          </p>
        </div>
        <div className="case-scale">
          <div><strong>60+</strong><span>textbooks</span></div>
          <div><strong>500+</strong><span>hours of video</span></div>
          <div><strong>40+</strong><span>backend APIs</span></div>
        </div>
      </section>

      <section className="case-flow-section case-frame">
        <p className="case-section-label">Request path</p>
        <div className="case-flow">
          {flow.map(([title, description], index) => (
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
          <p className="case-section-label">Engineering decisions</p>
          <h2>The useful part is why the architecture exists.</h2>
        </div>
        <div className="case-decision-list">
          {decisions.map((decision) => (
            <article key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-stack case-frame">
        <div>
          <p className="case-section-label">Backend</p>
          <p>FastAPI · PostgreSQL · Redis · asynchronous workers</p>
        </div>
        <div>
          <p className="case-section-label">AI / Retrieval</p>
          <p>Bedrock · embeddings · vector retrieval · reranking · metadata filters</p>
        </div>
        <div>
          <p className="case-section-label">Product</p>
          <p>React · citation-aware chat · public entity experiences</p>
        </div>
      </section>

      <footer className="case-footer case-frame">
        <p>Next system</p>
        <Link href="/work/bina-ai">BinaAI <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
