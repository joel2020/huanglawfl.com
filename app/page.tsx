import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { QuickActions } from "@/components/QuickActions";
import {
  attorneySchema,
  audiences,
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
    title: "Judgment for serious disputes",
    description:
      "The firm evaluates claims through leverage, forum, cost, collectability, timing, and the practical business consequences of each move.",
  },
  {
    title: "A resource for other lawyers",
    description:
      "Huang Law works with referral counsel, national firms, and in-house teams that need Florida local counsel with responsive communication.",
  },
  {
    title: "Financial and creditor fluency",
    description:
      "The practice is built for litigation, banking, creditor, bankruptcy, and enforcement matters where documentation and recovery strategy matter.",
  },
];

const representativeClients = [
  "Law firms and referral attorneys",
  "Corporate legal departments",
  "Banks and financial institutions",
  "Secured and unsecured creditors",
  "Trustees, lenders, and businesses",
  "Entrepreneurs and individuals with complex matters",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero text-hero" aria-labelledby="hero-title">
          <div className="container hero-copy">
            <p className="eyebrow">Florida Litigation, Creditor, Banking, Probate, Immigration, and Mediation Counsel</p>
            <h1 id="hero-title">Strategic Counsel for Complex Litigation, Financial Disputes, and Cross-Border Matters</h1>
            <p className="hero-lede">
              Huang Law represents businesses, financial institutions, creditors, and individuals in sophisticated matters involving civil litigation, bankruptcy, banking law, probate, immigration, and dispute resolution.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">Schedule a Consultation</Link>
              <Link className="button button-ghost" href="/practice-areas">View Practice Areas</Link>
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
              <p className="eyebrow">Trusted By Law Firms, Businesses, And Financial Institutions</p>
              <h2 id="audience-heading">Counsel for clients who need precision before momentum turns into risk.</h2>
            </div>
            <p>
              The firm is structured for matters involving money, leverage, reputation, asset recovery, disputed obligations, fiduciary duties, and Florida court procedure.
            </p>
          </div>
          <div className="container audience-grid">
            {audiences.map((audience) => (
              <article className="compact-card" key={audience}>
                <span aria-hidden="true">HL</span>
                <h3>{audience}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-heading">
          <div className="container section-intro">
            <p className="eyebrow">Practice Areas</p>
            <h2 id="services-heading">Focused Florida representation for litigation, finance, probate, and cross-border matters.</h2>
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

        <section className="section proof" id="why-huang-law" aria-labelledby="why-heading">
          <div className="container proof-grid">
            <div>
              <p className="eyebrow">Why Huang Law</p>
              <h2 id="why-heading">Institutional discipline with boutique-level accountability.</h2>
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
            <h2 id="attorney-heading">Dan Huang is litigation counsel, mediator, and multilingual advisor for Florida matters.</h2>
            <p>
              {site.attorney} advises clients, referral attorneys, and institutional stakeholders in matters that require clear judgment, procedural command, and disciplined communication.
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
              <h2 id="mediation-heading">Certified mediation for parties seeking a structured path to resolution.</h2>
            </div>
            <p>
              As a Florida Supreme Court Certified Mediator, Mr. Huang helps parties work through business, creditor, probate, civil, and financial disputes with confidentiality and practical focus.
            </p>
          </div>
        </section>

        <section className="section representative" aria-labelledby="clients-heading">
          <div className="container section-intro centered">
            <p className="eyebrow">Representative Clients</p>
            <h2 id="clients-heading">Built for sophisticated clients and referring counsel.</h2>
          </div>
          <div className="container client-grid">
            {representativeClients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="contact-heading">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Contact Huang Law</p>
              <h2 id="contact-heading">Discuss a Florida matter that requires strategic legal judgment.</h2>
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
      <Link className="mobile-sticky-cta" href="/contact">Schedule a Consultation</Link>
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
      <JsonLd data={attorneySchema()} />
      <JsonLd data={faqSchema()} />
    </>
  );
}
