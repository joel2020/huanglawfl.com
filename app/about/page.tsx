import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { attorneySchema, credentials, firmLegalServiceSchema, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Michael Huang | Florida Attorney and Certified Mediator",
  description:
    "Michael Huang is a Florida attorney, certified mediator, and multilingual advisor serving law firms, businesses, financial institutions, creditors, and sophisticated clients.",
  alternates: { canonical: "/about" },
};

const profilePoints = [
  "Trusted litigation counsel for Florida matters involving legal and financial consequences",
  "Florida Supreme Court Certified Mediator for civil, commercial, creditor, probate, and financial disputes",
  "Strategic resource for referral attorneys, law firms, and institutional clients",
  "Fluent in English, Mandarin, and Spanish for clients and matters that cross languages or borders",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="subpage-hero">
          <div className="container subpage-hero-grid">
            <div>
              <p className="eyebrow">Attorney Profile</p>
              <h1>Michael Huang, Esq.</h1>
              <p>
                Florida litigation counsel, certified mediator, and multilingual advisor for clients who need strategic judgment in serious disputes and cross-border matters.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/contact">Contact Huang Law</Link>
                <Link className="button button-ghost" href="/practice-areas">View Practice Areas</Link>
              </div>
            </div>
            <aside className="subpage-card" aria-label="Contact information">
              <strong>Contact</strong>
              <span><a href={site.phoneHref}>{site.phone}</a></span>
              <span><a href={`mailto:${site.email}`}>{site.email}</a></span>
              <span>{site.address}</span>
            </aside>
          </div>
        </section>

        <section className="attorney-section container standalone-profile" aria-labelledby="profile-heading">
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
            <p className="eyebrow">Counsel And Mediator</p>
            <h2 id="profile-heading">A strategic Florida resource for law firms, institutions, and sophisticated clients.</h2>
            <p>
              Michael Huang represents clients in matters that require precise issue spotting, careful document review, procedural judgment, and direct attorney communication. His practice is built for disputes where the legal path must account for business consequences, recovery strategy, timing, and settlement leverage.
            </p>
            <div className="list-panel profile-list">
              {profilePoints.map((point) => <span key={point}>{point}</span>)}
            </div>
          </div>
        </section>

        <section className="section page-section alt-band">
          <div className="container three-column">
            <div>
              <p className="eyebrow">Credentials</p>
              <h2>Education, admissions, certification, and language capabilities.</h2>
            </div>
            <div className="list-panel">
              {credentials.map((credential) => <span key={credential}>{credential}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
      <JsonLd data={attorneySchema()} />
    </>
  );
}
