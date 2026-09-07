import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajanjasani.in"),
  title: {
    default: "Rajan Jasani — Backend Systems & Applied AI",
    template: "%s | Rajan Jasani",
  },
  description:
    "Rajan Jasani is a backend and applied AI engineer building production RAG systems, scalable APIs, async pipelines and cloud-backed software products.",
  keywords: [
    "Rajan Jasani",
    "Backend Engineer",
    "Applied AI Engineer",
    "Python Developer",
    "FastAPI",
    "Django",
    "RAG Engineer",
    "System Design",
    "PostgreSQL",
    "AWS",
    "AI Engineer Pune",
  ],
  authors: [{ name: "Rajan Jasani" }],
  creator: "Rajan Jasani",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rajanjasani.in",
    siteName: "Rajan Jasani",
    title: "Rajan Jasani — Backend Systems & Applied AI",
    description:
      "Production backend systems, retrieval architecture, applied AI and system design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajan Jasani — Backend Systems & Applied AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Jasani — Backend Systems & Applied AI",
    description: "Production backend systems, retrieval architecture, applied AI and system design.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajan Jasani",
    url: "https://rajanjasani.in",
    jobTitle: "Backend & Applied AI Engineer",
    sameAs: [
      "https://github.com/Rajan-Jasani9",
      "https://www.linkedin.com/in/rajanjasani",
    ],
    knowsAbout: [
      "Backend engineering",
      "Retrieval augmented generation",
      "System design",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "AWS",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
