import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  attorneySchema,
  faqSchema,
  firmLegalServiceSchema,
  legalDisclaimer,
  practiceAreas,
  site,
  trustItems,
} from "@/lib/site";

const corePracticeAreas = practiceAreas.slice(0, 4);
const secondaryPracticeAreas = practiceAreas.slice(4);

const whyItems = [
  {
    title: "Commercial discipline before escalation",
    description:
      "Each matter is evaluated through evidence, leverage, forum, cost, collectability, and business consequences before the next move is made.",
  },
  {
    title: "Useful to referral and national counsel",
    description:
      "The firm supports lawyers and legal departments that need Florida procedure, hearing support, and reliable local judgment.",
  },
  {
    title: "Built around financial disputes",
    description:
      "Banking, creditor, bankruptcy-related, and enforcement matters are handled with attention to documents, recovery posture, and timing.",
  },
];

const whoWeServe = [
  {
    title: "Financial institutions and creditors",
    description: "Loan disputes, enforcement actions, collections, insolvency issues, and creditor-side litigation.",
  },
  {
    title: "Lenders and businesses in disputes",
    description: "Commercial claims, contract disputes, borrower conflicts, guarantor issues, and litigation risk.",
  },
  {
    title: "Referral counsel and national firms",
    description: "Florida court support for out-of-state lawyers, national firms, and legal departments.",
  },
];

const authorityItems = [
  {
    label: "Admissions",
    value: "Florida state courts and U.S. District Courts for the Middle and Southern Districts of Florida",
  },
  {
    label: "Mediation",
    value: "Florida Supreme Court Certified Mediator for civil, commercial, probate, creditor, and financial disputes",
  },
  {
    label: "Languages",
    value: "English, Mandarin, and Spanish",
  },
  {
    label: "Counsel role",
    value: "Direct attorney attention for clients, referral counsel, national firms, and legal departments",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Florida Creditor Rights, Banking Disputes & Local Counsel | Huang Law PLLC",
  },
  description:
    "Huang Law PLLC provides Florida counsel for creditors, lenders, financial institutions, businesses, banking disputes, enforcement actions, bankruptcy-related matters, and local counsel work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Huang Law PLLC | Florida Creditor Rights, Banking Disputes & Local Counsel",
    description:
      "Strategic Florida counsel for creditors, lenders, banking disputes, enforcement actions, business litigation, mediation, and local counsel engagements.",
    url: "https://www.huanglawfl.com",
    siteName: "Huang Law PLLC",
    type: "website",
    images: [
      {
        url: "/images/huang-law-og.svg",
        width: 1200,
        height: 630,
        alt: "Huang Law PLLC wordmark",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero text-hero" aria-labelledby="hero-title">
          <div className="container hero-copy">
            <p className="eyebrow">Florida creditor rights, banking disputes, and local counsel</p>
            <h1 id="hero-title">Florida counsel for creditors, lenders, and business disputes.</h1>
            <p className="hero-lede">
              Huang Law PLLC represents financial institutions, businesses, and referral counsel in enforcement actions, loan disputes, insolvency-related matters, and Florida litigation.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">Discuss Your Matter</Link>
              <Link className="button button-ghost" href="/practice-areas">Practice Areas</Link>
            </div>
            <div className="hero-trust" aria-label="Huang Law credentials">
              {trustItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section audience-section" aria-labelledby="audience-heading">
          <div className="container split-heading light">
            <div>
              <p className="eyebrow">Who We Serve</p>
              <h2 id="audience-heading">For matters where recovery, leverage, and Florida procedure matter.</h2>
            </div>
            <p>
              The firm is built for creditor, lender, banking, enforcement, business dispute, and local counsel needs. Other practice areas remain available when they fit the matter.
            </p>
          </div>
          <div className="container audience-grid">
            {whoWeServe.map((audience) => (
              <article className="compact-card" key={audience.title}>
                <span aria-hidden="true">HL</span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-heading">
          <div className="container section-intro">
            <p className="eyebrow">Practice Areas</p>
            <h2 id="services-heading">Core commercial services for financial disputes, enforcement, and litigation.</h2>
          </div>
          <div className="container service-grid">
            {corePracticeAreas.map((service, index) => (
              <Link className="service-card" key={service.title} href={service.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="container secondary-practices" aria-label="Additional capabilities">
            <p>Additional capabilities</p>
            <div>
              {secondaryPracticeAreas.map((service) => (
                <Link key={service.title} href={service.href}>{service.title}</Link>
              ))}
              <Link href="/florida-certified-mediator">Mediation</Link>
              <Link href="/florida-local-counsel">Florida Local Counsel</Link>
            </div>
          </div>
        </section>

        <section className="section proof" id="why-huang-law" aria-labelledby="why-heading">
          <div className="container proof-grid">
            <div>
              <p className="eyebrow">Why Huang Law</p>
              <h2 id="why-heading">Senior attention, measured strategy, and Florida procedural judgment.</h2>
            </div>
            <div className="proof-panel">
              {whyItems.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="attorney-section attorney-authority container" id="attorney" aria-labelledby="attorney-heading">
          <div className="attorney-image">
            <Image
              src="/images/mr-huang.png"
              alt={`${site.attorney}, Florida attorney and certified mediator`}
              width={720}
              height={896}
              sizes="(max-width: 840px) 92vw, 500px"
              priority
            />
          </div>
          <div className="attorney-copy">
            <p className="eyebrow">Attorney and Mediator</p>
            <h2 id="attorney-heading">Dan Huang brings Florida litigation judgment to financial and business disputes.</h2>
            <p>
              Mr. Huang advises creditors, lenders, businesses, and referral counsel in matters that require measured advocacy, procedural command, and direct attorney attention.
            </p>
            <div className="authority-list" aria-label="Attorney credentials">
              {authorityItems.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            <Link className="text-link" href="/about">Read Attorney Profile</Link>
          </div>
        </section>

        <section className="section mediation" id="mediation" aria-labelledby="mediation-heading">
          <div className="container split-heading">
            <div>
              <p className="eyebrow">Mediation</p>
              <h2 id="mediation-heading">Certified mediation for disputes that need structure, confidentiality, and practical evaluation.</h2>
            </div>
            <p>
              As a Florida Supreme Court Certified Mediator, Mr. Huang helps parties evaluate risk, cost, timing, evidence, and settlement options in civil, commercial, probate, creditor, and financial disputes.
            </p>
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="contact-heading">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Contact Huang Law</p>
              <h2 id="contact-heading">Send a focused, non-confidential intake summary.</h2>
              <p className="contact-lede">
                The firm reviews new inquiries for subject matter fit, conflicts, timing, jurisdiction, and next steps. A brief summary is enough to begin that review.
              </p>
              <div className="contact-card">
                <p>{legalDisclaimer}</p>
                <dl>
                  <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
                  <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                  <div><dt>Office</dt><dd>{site.address}</dd></div>
                </dl>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Link className="mobile-sticky-cta" href="/contact">Discuss Your Matter</Link>
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
      <JsonLd data={attorneySchema()} />
      <JsonLd data={faqSchema()} />
    </>
  );
}
