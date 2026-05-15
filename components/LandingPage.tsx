import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { firmLegalServiceSchema, LandingPage as LandingPageData, legalDisclaimer, site } from "@/lib/site";

function landingFaqSchema(page: LandingPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function breadcrumbSchema(page: LandingPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: `${site.url}/${page.slug}`,
      },
    ],
  };
}

export function LandingPage({ page }: { page: LandingPageData }) {
  return (
    <>
      <Header />
      <main id="top">
        <section className="subpage-hero">
          <div className="container subpage-hero-grid">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.h1}</h1>
              <p>{page.intro}</p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/contact">Schedule a Consultation</Link>
                <Link className="button button-ghost" href="/about">View Attorney Profile</Link>
              </div>
            </div>
            <aside className="subpage-card" aria-label="Firm credentials">
              <strong>Huang Law, P.A.</strong>
              <span>Florida litigation, creditor, banking, probate, immigration, and mediation counsel</span>
              <span>English, Mandarin, and Spanish</span>
              <span><a href={site.phoneHref}>{site.phone}</a></span>
            </aside>
          </div>
        </section>

        <section className="section page-section">
          <div className="container three-column">
            <div>
              <p className="eyebrow">Scope</p>
              <h2>Focused support for the issues that usually drive the matter.</h2>
            </div>
            <div className="list-panel">
              {page.helps.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="section page-section alt-band">
          <div className="container three-column">
            <div>
              <p className="eyebrow">Why Huang Law</p>
              <h2>Precise counsel for serious Florida legal and financial disputes.</h2>
            </div>
            <div className="list-panel">
              {page.why.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container section-intro">
            <p className="eyebrow">Questions</p>
            <h2>Common questions before requesting a consultation.</h2>
          </div>
          <div className="container faq-grid">
            {page.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="landing-contact-heading">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Contact Huang Law</p>
              <h2 id="landing-contact-heading">Send the firm a focused, non-confidential intake summary.</h2>
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
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
      <JsonLd data={landingFaqSchema(page)} />
      <JsonLd data={breadcrumbSchema(page)} />
    </>
  );
}
