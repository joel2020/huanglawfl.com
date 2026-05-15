import Link from "next/link";
import { legalDisclaimer, practiceAreas, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/#top" aria-label="Huang Law home">
            <span className="brand-mark" aria-hidden="true">HL</span>
            <span className="brand-text"><span>Huang Law</span><em>P.A.</em></span>
          </Link>
          <p>Strategic Florida counsel for litigation, creditor rights, bankruptcy, banking law, probate, immigration, mediation, and local counsel engagements.</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          <Link href="/practice-areas">Practice Areas</Link>
          <Link href="/about">About</Link>
          <Link href="/florida-local-counsel">Local Counsel</Link>
          <Link href="/florida-certified-mediator">Mediation</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <h2>Practice Areas</h2>
          {practiceAreas.map((service) => <Link key={service.href} href={service.href}>{service.title}</Link>)}
        </div>
        <div>
          <h2>Contact</h2>
          <p><a href={site.phoneHref}>{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p>{site.address}</p>
          <p>Consultations by appointment</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{legalDisclaimer}</p>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
