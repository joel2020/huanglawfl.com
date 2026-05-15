import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { attorneySchema, firmLegalServiceSchema, practiceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas | Florida Litigation, Creditor Rights, Bankruptcy, Banking, Probate, Immigration",
  description:
    "Huang Law represents clients in general civil litigation, creditor's rights, bankruptcy, banking law, probate law, immigration, and mediation throughout Florida.",
  alternates: { canonical: "/practice-areas" },
};

const sectionIds: Record<string, string> = {
  "General Civil Litigation": "general-civil-litigation",
  "Creditor's Rights": "creditors-rights",
  Bankruptcy: "bankruptcy",
  "Banking Law": "banking-law",
  "Probate Law": "probate-law",
  Immigration: "immigration",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="subpage-hero">
          <div className="container subpage-hero-grid">
            <div>
              <p className="eyebrow">Practice Areas</p>
              <h1>Florida counsel for litigation, financial disputes, probate, immigration, and mediation.</h1>
              <p>
                Huang Law serves law firms, businesses, lenders, creditors, legal departments, and sophisticated individuals in matters requiring careful strategy and direct attorney involvement.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/contact">Discuss Your Matter</Link>
                <Link className="button button-ghost" href="/about">View Attorney Profile</Link>
              </div>
            </div>
            <aside className="subpage-card" aria-label="SEO keywords">
              <strong>Florida Counsel</strong>
              <span>Business litigation</span>
              <span>Creditor rights and bankruptcy</span>
              <span>Banking, probate, immigration, and mediation</span>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container practice-list">
            {practiceAreas.map((area, index) => (
              <article id={sectionIds[area.title]} className="practice-row" key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">{area.keyword}</p>
                  <h2>{area.title}</h2>
                  <p>{area.description}</p>
                </div>
                <Link className="text-link" href="/contact">Discuss this matter</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={firmLegalServiceSchema()} />
      <JsonLd data={attorneySchema()} />
    </>
  );
}
