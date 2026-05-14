import Image from "next/image";
import { Header } from "@/components/Header";

const trustBadges = [
  "Florida Licensed Attorney",
  "Federal Court Admissions",
  "Certified Mediator",
  "English • Mandarin • Spanish",
];

const credentials = [
  { mark: "UM", title: "University of Miami", detail: "School of Law • J.D." },
  { mark: "UC", title: "University of Connecticut", detail: "B.A." },
  { mark: "FM", title: "Florida Supreme Court", detail: "Certified Mediator" },
  { mark: "FL", title: "Middle & Southern", detail: "District Courts of Florida" },
  { mark: "多", title: "Fluent In", detail: "English, Mandarin & Spanish" },
];

// Practice areas must be confirmed with the attorney before final publishing.
const practiceAreas = [
  {
    title: "Business & Civil Litigation",
    description: "Strategic advocacy for commercial conflicts, civil claims, and matters requiring disciplined case positioning.",
  },
  {
    title: "Mediation & Dispute Resolution",
    description: "Confidential pathways to resolution guided by a Florida Supreme Court Certified Mediator.",
  },
  {
    title: "Real Estate & Contract Matters",
    description: "Practical counsel for agreements, property disputes, negotiations, and contract-focused risk management.",
  },
  {
    title: "Immigration & Cross-Border Legal Support",
    description: "Clear multilingual guidance for individuals, families, entrepreneurs, and international business concerns.",
  },
  {
    title: "Personal & Business Legal Counsel",
    description: "Responsive legal advice for high-stakes decisions, disputes, transactions, and ongoing legal needs.",
  },
];

const bioCredentials = [
  "J.D., University of Miami School of Law",
  "B.A., University of Connecticut",
  "Licensed to practice law throughout the State of Florida",
  "Admitted in the Middle and Southern District Courts of Florida",
  "Florida Supreme Court Certified Mediator",
  "Fluent in English, Mandarin, and Spanish",
];

const mediationServices = [
  "Business & Commercial Disputes",
  "Contract & Real Estate Disputes",
  "Civil & General Litigation Matters",
];

const reasons = [
  "Direct attorney access",
  "Florida state and federal court experience",
  "Certified mediation perspective",
  "Multilingual legal guidance",
  "Practical, resolution-focused strategy",
  "Discreet, professional representation",
];

const siteUrl = "https://huanglawfl.com";

export default function Home() {
  const legalJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Huang Law, P.A.",
    url: siteUrl,
    areaServed: "Florida",
    founder: {
      "@type": "Person",
      name: "Mr. Huang",
      alumniOf: ["University of Miami School of Law", "University of Connecticut"],
      knowsLanguage: ["English", "Mandarin", "Spanish"],
      jobTitle: "Florida Attorney and Florida Supreme Court Certified Mediator",
    },
    knowsAbout: [
      "Florida attorney services",
      "Certified mediation",
      "Middle District of Florida",
      "Southern District of Florida",
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
              <p className="eyebrow">Miami Law. Florida Focus. Global Perspective.</p>
              <h1 id="hero-title">Strategic Legal Counsel. Trusted Advocacy Across Florida.</h1>
              <p className="hero-lede">
                Representing clients with precision, discretion, and multilingual legal insight across Florida state and federal courts.
              </p>
              <div className="trust-badges" aria-label="Attorney credentials">
                {trustBadges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <div className="button-row">
                <a className="button button-gold" href="#contact">Schedule a Consultation</a>
                <a className="button button-ghost" href="#about">View Credentials</a>
              </div>
            </div>
            <div className="hero-portrait" aria-label="Portrait of Mr. Huang">
              <Image
                src="/images/attorney-huang.svg"
                alt="Professional portrait of Mr. Huang, Florida attorney and certified mediator"
                width={900}
                height={1120}
                priority
              />
            </div>
          </div>
        </section>

        <section className="credential-strip" aria-label="Huang Law credentials">
          <div className="credential-grid container">
            {credentials.map((credential) => (
              <div className="credential-item" key={credential.title}>
                <span className="credential-mark" aria-hidden="true">{credential.mark}</span>
                <strong>{credential.title}</strong>
                <small>{credential.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="section practice" id="practice-areas" aria-labelledby="practice-heading">
          <div className="container section-heading centered">
            <p className="eyebrow">Practice Areas</p>
            <h2 id="practice-heading">Focused Legal Solutions. Practical Results.</h2>
          </div>
          <div className="practice-grid container">
            {practiceAreas.map((area, index) => (
              <article className="practice-card" key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about container" id="about" aria-labelledby="about-heading">
          <div className="about-image">
            <Image
              src="/images/attorney-huang.svg"
              alt="Mr. Huang in professional attire for Huang Law, P.A."
              width={900}
              height={1120}
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About Mr. Huang</p>
            <h2 id="about-heading">Experienced. Multilingual. Solutions-Driven.</h2>
            <p>
              Mr. Huang is a Florida attorney and Florida Supreme Court Certified Mediator with a practice focused on litigation, dispute resolution, and strategic legal counsel. He is committed to delivering practical, cost-effective solutions tailored to each client’s unique goals.
            </p>
            <ul className="check-list two-column">
              {bioCredentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
            <a className="button button-navy" href="#contact">Learn More About Mr. Huang</a>
          </div>
        </section>

        <section className="section mediation" id="mediation" aria-labelledby="mediation-heading">
          <div className="container split-heading">
            <div>
              <p className="eyebrow">Certified Mediation</p>
              <h2 id="mediation-heading">Certified Mediation for Complex Disputes</h2>
            </div>
            <p>
              As a Florida Supreme Court Certified Mediator, Mr. Huang helps parties resolve disputes efficiently, confidentially, and cost-effectively.
            </p>
          </div>
          <div className="container mediation-grid">
            {mediationServices.map((service) => (
              <article className="dark-card" key={service}>
                <span aria-hidden="true">◆</span>
                <h3>{service}</h3>
                <p>Structured preparation, calm facilitation, and practical attention to risk, cost, and durable resolution.</p>
              </article>
            ))}
          </div>
          <div className="container section-action">
            <a className="button button-gold" href="#contact">Learn More About Mediation</a>
          </div>
        </section>

        <section className="section languages" id="resources" aria-labelledby="language-heading">
          <div className="container language-grid">
            <div className="section-heading">
              <p className="eyebrow">Multilingual Counsel</p>
              <h2 id="language-heading">Legal Guidance in English, Mandarin, and Spanish.</h2>
              <p>
                Huang Law provides clear, strategic legal counsel for individuals, families, entrepreneurs, and businesses across Florida’s diverse communities.
              </p>
              <a className="text-link" href="#contact">Discuss your matter confidentially</a>
            </div>
            <div className="language-panel" aria-label="Languages offered">
              {[
                ["English", "Precise counsel for Florida legal matters"],
                ["Mandarin", "Clear communication for Chinese-speaking clients"],
                ["Spanish", "Accessible guidance for Spanish-speaking clients"],
              ].map(([language, note]) => (
                <div key={language}>
                  <strong>{language}</strong>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="experience" aria-labelledby="why-heading">
          <div className="container section-heading centered">
            <p className="eyebrow">Why Clients Choose Huang Law</p>
            <h2 id="why-heading">Sophisticated counsel with direct, practical focus.</h2>
          </div>
          <div className="container reason-grid">
            {reasons.map((reason) => (
              <div className="reason" key={reason}>
                <span aria-hidden="true">↗</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="cta-heading">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Consultation Requests</p>
              <h2 id="cta-heading">Speak with an attorney who understands the law, the courts, and your language.</h2>
            </div>
            <div className="contact-card">
              <p>For consultations, mediation availability, or general firm inquiries, contact Huang Law, P.A.</p>
              <dl>
                <div><dt>Phone</dt><dd>To be confirmed</dd></div>
                <div><dt>Email</dt><dd>To be confirmed</dd></div>
                <div><dt>Office</dt><dd>Florida office location to be confirmed</dd></div>
              </dl>
              <div className="button-row">
                <a className="button button-gold" href="mailto:info@huanglawfl.com">Schedule a Consultation</a>
                <a className="button button-ghost" href="mailto:info@huanglawfl.com">Contact the Firm</a>
              </div>
            </div>
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
            <p>
              Strategic legal counsel, mediation, and multilingual representation across Florida.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Navigation</h2>
            <a href="#practice-areas">Practice Areas</a>
            <a href="#about">About</a>
            <a href="#mediation">Mediation</a>
            <a href="#experience">Results & Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <div>
            <h2>Practice Areas</h2>
            {practiceAreas.slice(0, 4).map((area) => <a key={area.title} href="#practice-areas">{area.title}</a>)}
          </div>
          <div>
            <h2>Contact</h2>
            <p>Phone: To be confirmed</p>
            <p>Email: To be confirmed</p>
            <p>Office: Florida office location to be confirmed</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            Attorney Advertising. The information on this website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting Huang Law, P.A. does not create an attorney-client relationship.
          </p>
          <div>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Use</a>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalJsonLd) }} />
    </>
  );
}
