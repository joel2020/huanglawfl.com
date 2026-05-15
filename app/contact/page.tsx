import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { firmLegalServiceSchema, legalDisclaimer, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Huang Law | Schedule a Consultation",
  description:
    "Contact Huang Law, P.A. to discuss Florida litigation, creditor rights, bankruptcy, banking, probate, immigration, mediation, or local counsel matters.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="final-cta contact-page" aria-labelledby="contact-heading">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Contact Huang Law</p>
              <h1 id="contact-heading">Schedule a Consultation</h1>
              <p className="contact-lede">
                Send a brief, non-confidential summary of the matter, the parties involved, the relevant county or court, and any upcoming deadline.
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
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
    </>
  );
}
