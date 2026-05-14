import Image from "next/image";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { QuickActions } from "@/components/QuickActions";
import {
  credentials,
  firmAddressSchema,
  firmLegalServiceSchema,
  legalDisclaimer,
  serviceCards,
  site,
  trustItems,
  whoWeHelp,
} from "@/lib/site";

const process = [
  {
    title: "Conflict and Intake Review",
    description:
      "The firm identifies the parties, county, documents, timing, preferred language, and whether the matter fits the firm's practice.",
  },
  {
    title: "Attorney-Led Strategy",
    description:
      "Clients work directly with counsel to define the objective, pressure points, likely costs, and realistic next steps.",
  },
  {
    title: "Resolution or Litigation Plan",
    description:
      "The firm prepares for negotiation, mediation, or litigation with attention to evidence, leverage, and practical outcome.",
  },
];

const mediationServices = [
  {
    title: "Business & Commercial Disputes",
    description:
      "Neutral facilitation for partnership conflicts, business torts, contract disputes, and commercial matters, helping parties evaluate durable and cost-conscious resolution options.",
  },
  {
    title: "Contract & Real Estate Disputes",
    description:
      "Structured guidance through property disagreements, lease conflicts, contractor disputes, and contract interpretation matters with full confidentiality.",
  },
  {
    title: "Civil & General Litigation Matters",
    description:
      "Skilled facilitation for civil disputes with a focus on reducing cost, preserving workable relationships, and exploring practical resolutions faster than trial.",
  },
];

const languages = [
  ["English", "Precise counsel for Florida legal and business matters"],
  ["Mandarin", "Clear communication for Chinese-speaking clients and cross-border concerns"],
  ["Spanish", "Accessible guidance for Spanish-speaking clients across Florida"],
];

function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.schemaAttorneyName,
    alternateName: site.attorney,
    jobTitle: "Managing Partner, Florida Attorney, and Florida Supreme Court Certified Mediator",
    worksFor: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
    },
    alumniOf: ["University of Miami School of Law", "University of Connecticut"],
    knowsLanguage: site.languages,
  };
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: firmAddressSchema(),
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">Florida Litigation, Mediation, and Multilingual Counsel</p>
              <h1 id="hero-title">Strategic Litigation, Mediation, and Multilingual Counsel for High-Stakes Florida Matters.</h1>
              <p className="hero-lede">
                Huang Law, P.A. is a boutique Florida law firm for business owners, professionals, families, and international clients who need direct attorney access, disciplined legal strategy, and clear communication in English, Mandarin, or Spanish.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact">Request a Confidential Consultation</a>
                <a className="button button-ghost" href="#credentials">View Attorney Credentials</a>
              </div>
              <QuickActions />
            </div>
            <div className="hero-portrait" aria-label={`Portrait of ${site.attorney}`}>
              <Image
                src="/images/mr-huang-hero.png"
                alt={`${site.attorney}, Florida attorney and certified mediator`}
                width={720}
                height={896}
                sizes="(max-width: 840px) 92vw, 430px"
                priority
              />
              <div className="portrait-caption">
                <strong>{site.attorney}</strong>
                <span>Managing Partner, Florida Attorney, and Supreme Court Certified Mediator</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" id="credentials" aria-label="Huang Law credentials">
          <div className="trust-grid container">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-heading">
          <div className="container section-intro">
            <p className="eyebrow">Focused Florida Counsel</p>
            <h2 id="services-heading">Conservative practice areas for serious legal pressure.</h2>
            <p>
              The firm focuses on disputes, mediation, contracts, real estate conflicts, and multilingual legal guidance. No outcome is promised. The priority is disciplined strategy and clear communication.
            </p>
          </div>
          <div className="service-grid service-grid-wide container">
            {serviceCards.map((service, index) => (
              <a className="service-card" key={service.href} href={service.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section who-help" id="who-we-help" aria-labelledby="who-heading">
          <div className="container section-intro centered">
            <p className="eyebrow">Who We Help</p>
            <h2 id="who-heading">Built for clients who need judgment, language clarity, and a practical plan.</h2>
          </div>
          <div className="container help-grid">
            {whoWeHelp.map((item) => (
              <article className="help-card" key={item}>
                <span aria-hidden="true">HL</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="attorney-section container" id="attorney" aria-labelledby="attorney-heading">
          <div className="attorney-image">
            <Image
              src="/images/mr-huang.png"
              alt={`Professional portrait of ${site.attorney}`}
              width={720}
              height={896}
              sizes="(max-width: 840px) 100vw, 470px"
            />
          </div>
          <div className="attorney-copy">
            <p className="eyebrow">Attorney Profile</p>
            <h2 id="attorney-heading">A boutique practice led by the attorney clients actually work with.</h2>
            <p>
              {site.attorney} is a Florida attorney, Managing Partner of Huang Law, P.A., and Florida Supreme Court Certified Mediator. His practice focuses on litigation, dispute resolution, contracts, real estate disputes, and multilingual counsel for clients who need direct communication and practical execution.
            </p>
            <div className="credential-list" aria-label="Attorney credentials">
              {credentials.map((credential) => (
                <span key={credential}>{credential}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section mediation" id="mediation" aria-labelledby="mediation-heading">
          <div className="container split-heading">
            <div>
              <p className="eyebrow">Certified Mediation</p>
              <h2 id="mediation-heading">Private dispute resolution for business, real estate, and civil matters.</h2>
            </div>
            <p>
              As a Florida Supreme Court Certified Mediator, {site.attorney} helps parties work through disputes with preparation, confidentiality, and attention to practical outcomes.
            </p>
          </div>
          <div className="container mediation-grid">
            {mediationServices.map((service) => (
              <article className="dark-card" key={service.title}>
                <span aria-hidden="true">◆</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof" id="experience" aria-labelledby="proof-heading">
          <div className="container proof-grid">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 id="proof-heading">Smaller by design. Senior attention by default.</h2>
            </div>
            <div className="proof-panel">
              <div>
                <strong>Direct attorney access</strong>
                <p>Clients work with counsel directly instead of being pushed through a high-volume intake machine.</p>
              </div>
              <div>
                <strong>Mediation perspective</strong>
                <p>Disputes are evaluated through leverage, cost, risk, and the possibility of resolution.</p>
              </div>
              <div>
                <strong>Multilingual clarity</strong>
                <p>Clients can discuss sensitive legal issues in English, Mandarin, or Spanish.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section process" id="process" aria-labelledby="process-heading">
          <div className="container section-intro centered">
            <p className="eyebrow">How Engagement Starts</p>
            <h2 id="process-heading">A clean intake process for serious legal matters.</h2>
          </div>
          <div className="process-grid container">
            {process.map((step, index) => (
              <article className="process-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section languages" id="languages" aria-labelledby="language-heading">
          <div className="container language-grid">
            <div>
              <p className="eyebrow">Multilingual Counsel</p>
              <h2 id="language-heading">Legal guidance in English, Mandarin, and Spanish.</h2>
              <p>
                Clear communication matters when a dispute, transaction, family concern, or Florida legal issue crosses languages, cultures, or borders.
              </p>
            </div>
            <div className="language-panel" aria-label="Languages offered">
              {languages.map(([language, note]) => (
                <div key={language}>
                  <strong>{language}</strong>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="contact-heading">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Consultation Requests</p>
              <h2 id="contact-heading">Tell the firm what happened, who is involved, and what needs to happen next.</h2>
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
      <a className="mobile-sticky-cta" href="#contact">Request Consultation</a>
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
