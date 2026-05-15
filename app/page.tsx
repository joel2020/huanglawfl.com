import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { QuickActions } from "@/components/QuickActions";
import {
  attorneySchema,
  credentials,
  faqSchema,
  firmLegalServiceSchema,
  legalDisclaimer,
  practiceAreas,
  site,
  trustItems,
} from "@/lib/site";

const whyItems = [
  {
    title: "Commercial judgment before escalation",
    description:
      "Claims are evaluated through evidence, leverage, forum, cost, collectability, and the business consequences of each procedural move.",
  },
  {
    title: "A Florida resource for counsel",
    description:
      "The firm works with referral counsel, national firms, and in-house teams that need Florida procedure, hearing support, and reliable local judgment.",
  },
  {
    title: "Financial dispute fluency",
    description:
      "Banking, creditor, bankruptcy-related, and enforcement matters are handled with attention to documentation, recovery posture, and timing.",
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
  {
    title: "Sophisticated individual matters",
    description: "Probate, immigration, multilingual, and cross-border issues where strategy and discretion matter.",
  },
];

const representativeMatters = [
  "Creditor claims and enforcement actions",
  "Banking and loan litigation",
  "Bankruptcy-related creditor issues",
  "Judgment recovery strategy",
  "Borrower and guarantor disputes",
  "Business and contract disputes",
  "Florida local counsel engagements",
  "Probate administration and fiduciary disputes",
  "Business and family-based immigration",
  "Mediation of financial and commercial disputes",
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
            <p className="eyebrow">Florida creditor rights, banking disputes, enforcement litigation, and local counsel</p>
            <h1 id="hero-title">Florida Counsel for Creditors, Lenders, and High-Value Business Disputes</h1>
            <p className="hero-lede">
              Huang Law PLLC represents creditors, lenders, financial institutions, businesses, and referral counsel in matters involving enforcement, loan disputes, insolvency risk, and Florida litigation.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">Discuss Your Matter</Link>
              <Link className="button button-ghost" href="/practice-areas">Review Practice Areas</Link>
            </div>
            <QuickActions />
          </div>
        </section>

        <section className="trust-strip" aria-label="Huang Law credentials">
          <div className="container trust-grid">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section audience-section" aria-labelledby="audience-heading">
          <div className="container split-heading light">
            <div>
              <p className="eyebrow">Who The Firm Serves</p>
              <h2 id="audience-heading">Built for clients whose disputes involve recovery, leverage, and Florida procedure.</h2>
            </div>
            <p>
              The homepage is intentionally weighted toward creditor, lender, banking, enforcement, business dispute, and local counsel needs. Probate and immigration remain available when the matter calls for that support.
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
            <h2 id="services-heading">Core Florida services for financial disputes, enforcement, litigation, and related matters.</h2>
          </div>
          <div className="container service-grid">
            {practiceAreas.map((service, index) => (
              <Link className="service-card" key={service.title} href={service.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section matters-section" aria-labelledby="matters-heading">
          <div className="container split-heading light">
            <div>
              <p className="eyebrow">Representative Matter Types</p>
              <h2 id="matters-heading">Financial disputes rarely stay in one procedural lane.</h2>
            </div>
            <p>
              A creditor issue may become bankruptcy-related. A loan dispute may require emergency enforcement. A business case may turn on mediation posture or local Florida procedure.
            </p>
          </div>
          <div className="container matter-list" aria-label="Representative matter types">
            {representativeMatters.map((matter) => (
              <Link key={matter} href="/practice-areas">{matter}</Link>
            ))}
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

        <section className="attorney-section container" id="attorney" aria-labelledby="attorney-heading">
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
            <p className="eyebrow">Attorney Profile</p>
            <h2 id="attorney-heading">Dan Huang advises clients, lawyers, and institutions in Florida matters requiring careful judgment.</h2>
            <p>
              Mr. Huang is a Florida attorney, federal court practitioner, Florida Supreme Court Certified Mediator, and multilingual advisor. He works with clients and referral counsel in English, Mandarin, and Spanish.
            </p>
            <div className="credential-list" aria-label="Attorney credentials">
              {credentials.map((credential) => (
                <span key={credential}>{credential}</span>
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
