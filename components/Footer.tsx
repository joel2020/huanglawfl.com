import { legalDisclaimer, serviceCards, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="/#top" aria-label="Huang Law home">
            <span className="brand-mark" aria-hidden="true">HL</span>
            <span className="brand-text"><span>Huang Law</span><em>P.A.</em></span>
          </a>
          <p>Business disputes, civil litigation, mediation, real estate disputes, and multilingual legal counsel for Florida clients.</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          <a href="/#services">Services</a>
          <a href="/#who-we-help">Who We Help</a>
          <a href="/#attorney">Attorney</a>
          <a href="/#experience">Why Choose Us</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div>
          <h2>Services</h2>
          {serviceCards.map((service) => <a key={service.href} href={service.href}>{service.title}</a>)}
        </div>
        <div>
          <h2>Contact</h2>
          <p>Phone: {site.phone}</p>
          <p>Email: {site.email}</p>
          <p>Office: {site.address}</p>
          <p>Consultations by appointment</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{legalDisclaimer} {site.attorney}, Florida Bar No. {site.barNumber}.</p>
        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
