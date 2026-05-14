import Image from "next/image";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Header } from "@/components/Header";

const siteUrl = "https://huanglawfl.com";
const phone = "(213) 259-3316";
const email = "info@huanglawfl.com";
const officeAddress = "2139 N. University Dr., #5184, Coral Springs, FL 33071";

const credibility = [
  { value: "FL", label: "Licensed Florida Attorney" },
  { value: "MED", label: "Florida Supreme Court Certified Mediator" },
  { value: "FED", label: "Middle and Southern Districts of Florida" },
  { value: "3", label: "English, Mandarin, and Spanish" },
];

const services = [
  {
    title: "Business and Civil Litigation",
    description:
      "Focused representation for commercial conflicts, civil disputes, contract claims, and matters that need disciplined case strategy.",
  },
  {
    title: "Certified Mediation",
    description:
      "Structured mediation for parties who need a practical path toward resolution while controlling cost, risk, and uncertainty.",
  },
  {
    title: "Contracts, Real Estate, and Cross-Border Counsel",
    description:
      "Clear guidance for agreements, property disputes, negotiations, and multilingual matters involving Florida clients and international concerns.",
  },
];

const mediationServices = [
  {
    title: "Business & Commercial Disputes",
    description:
      "Neutral facilitation for partnership conflicts, business torts, contract disputes, and commercial matters — helping parties reach durable, cost-effective outcomes without prolonged litigation.",
  },
  {
    title: "Contract & Real Estate Disputes",
    description:
      "Structured guidance through property disagreements, lease conflicts, contractor disputes, and contract interpretation matters with full confidentiality.",
  },
  {
    title: "Civil & General Litigation Matters",
    description:
      "Skilled facilitation for a broad range of civil disputes, with a focus on reducing cost, preserving relationships, and reaching practical resolutions faster than trial.",
  },
];

const credentials = [
  "Florida Bar No. 1023249",
  "J.D., University of Miami School of Law",
  "B.A., University of Connecticut",
  "Licensed to practice law throughout Florida",
  "Admitted in the Middle and Southern District Courts of Florida",
  "Florida Supreme Court Certified Mediator",
  "Fluent in English, Mandarin, and Spanish",
];

const process = [
  {
    title: "Conflict and Intake Review",
    description:
      "The first step is a focused intake review so the firm can understand the parties, urgency, language needs, and legal posture.",
  },
  {
    title: "Attorney-Led Strategy",
    description:
      "Clients work directly with counsel to define the objective, pressure points, likely costs, and the cleanest path forward.",
  },
  {
    title: "Resolution or Litigation Plan",
    description:
      "The firm prepares for negotiation, mediation, or litigation with the same attention to evidence, leverage, and practical outcome.",
  },
];

const languages = [
  ["English", "Precise counsel for Florida legal and business matters"],
  ["Mandarin", "Clear communication for Chinese-speaking clients and cross-border concerns"],
  ["Spanish", "Accessible guidance for Spanish-speaking clients across Florida"],
];

export default function Home() {
  const legalJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Huang Law, P.A.",
    url: siteUrl,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2139 N. University Dr., #5184",
      addressLocality: "Coral Springs",
      addressRegion: "FL",
      postalCode: "33071",
      addressCountry: "US",
    },
    areaServed: "Florida",
    founder: {
      "@type": "Person",
      name: "Haidan Huang",
      alumniOf: ["University of Miami School of Law", "University of Connecticut"],
      knowsLanguage: ["English", "Mandarin", "Spanish"],
      jobTitle: "Florida Attorney and Florida Supreme Court Certified Mediator",
    },
    knowsAbout: [
      "Business litigation",
      "Civil litigation",
      "Certified mediation",
      "Contract disputes",
      "Real estate disputes",
      "Multilingual legal counsel",
    ],
  };

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">Florida Litigation, Mediation, and Multilingual Counsel</p>
              <h1 id="hero-title">Direct attorney judgment for disputes that need a serious plan.</h1>
              <p className="hero-lede">
                Huang Law, P.A. represents Florida clients in business disputes, civil matters, mediation, contracts, real estate conflicts, and cross-border legal concerns.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact">Request a Consultation</a>
                <a className="button button-ghost" href="#credentials">View Credentials</a>
              </div>
              <div className="hero-note">
                <strong>Direct attorney access.</strong>
                <span>Consultations by appointment. English, Mandarin, and Spanish available.</span>
              </div>
            </div>
            <div className="hero-portrait" aria-label="Portrait of Haidan Daniel Huang">
              <Image
                src="/images/mr-huang.png"
                alt="Haidan Daniel Huang, Florida attorney and certified mediator"
                width={900}
                height={1120}
                priority
              />
              <div className="portrait-caption">
                <strong>Haidan "Daniel" Huang</strong>
                <span>Florida Attorney and Supreme Court Certified Mediator</span>
              </div>
            </div>
          </div>
        </section>

        <section className="credibility-strip" id="credentials" aria-label="Huang Law credentials">
          <div className="credibility-grid container">
            {credibility.map((item) => (
              <div className="credibility-item" key={item.label}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-heading">
          <div className="container section-intro">
            <p className="eyebrow">Focused Counsel</p>
            <h2 id="services-heading">Built for clients who value preparation, discretion, and clear legal judgment.</h2>
          </div>
          <div className="service-grid container">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="attorney-section container" id="attorney" aria-labelledby="attorney-heading">
          <div className="attorney-image">
            <Image
              src="/images/mr-huang.png"
              alt="Professional portrait of Haidan Daniel Huang"
              width={900}
              height={1120}
            />
          </div>
          <div className="attorney-copy">
            <p className="eyebrow">Attorney Profile</p>
            <h2 id="attorney-heading">A boutique practice led by the attorney clients actually work with.</h2>
            <p>
              Haidan "Daniel" Huang is a Florida attorney, Managing Partner of Huang Law, P.A., and Florida Supreme Court Certified Mediator. His practice focuses on litigation, dispute resolution, and strategic counsel for clients who need direct communication and practical execution.
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
              <h2 id="mediation-heading">Focused mediation for business, real estate, and civil disputes.</h2>
            </div>
            <p>
              As a Florida Supreme Court Certified Mediator, Haidan "Daniel" Huang helps parties work through disputes with preparation, confidentiality, and attention to practical outcomes.
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
              <p className="eyebrow">Why The Firm Feels Different</p>
              <h2 id="proof-heading">Smaller by design. Senior attention by default.</h2>
            </div>
            <div className="proof-panel">
              <div>
                <strong>Selective matters</strong>
                <p>The firm is positioned for clients who need judgment, not volume processing.</p>
              </div>
              <div>
                <strong>Mediation perspective</strong>
                <p>Every dispute is evaluated through leverage, cost, risk, and the possibility of resolution.</p>
              </div>
              <div>
                <strong>Multilingual access</strong>
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
                Clear communication matters when the dispute, transaction, or family concern crosses languages, cultures, or borders.
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
                <p>For consultations, mediation availability, or general firm inquiries, contact Huang Law, P.A.</p>
                <dl>
                  <div><dt>Phone</dt><dd><a href="tel:+12132593316">{phone}</a></dd></div>
                  <div><dt>Email</dt><dd><a href={`mailto:${email}`}>{email}</a></dd></div>
                  <div><dt>Office</dt><dd>{officeAddress}</dd></div>
                </dl>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#top" aria-label="Huang Law home">
              <span className="brand-mark" aria-hidden="true">HL</span>
              <span className="brand-text"><span>Huang Law</span><em>P.A.</em></span>
            </a>
            <p>Business litigation, mediation, and multilingual legal counsel for Florida clients.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Navigation</h2>
            <a href="#services">Services</a>
            <a href="#attorney">Attorney</a>
            <a href="#experience">Why Choose Us</a>
            <a href="#process">Process</a>
            <a href="#languages">Languages</a>
            <a href="#contact">Contact</a>
          </nav>
          <div>
            <h2>Services</h2>
            {services.map((service) => <a key={service.title} href="#services">{service.title}</a>)}
          </div>
          <div>
            <h2>Contact</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Office: {officeAddress}</p>
            <p>Consultations by appointment</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            Attorney Advertising. Haidan "Daniel" Huang, Florida Bar No. 1023249. The information on this website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting Huang Law, P.A. does not create an attorney-client relationship.
          </p>
          <div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalJsonLd) }} />
    </>
  );
}
