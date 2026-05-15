import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Attorney advertising, privacy, and no attorney-client relationship notices for Huang Law, P.A.",
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <Link className="legal-back" href="/">Back to Huang Law</Link>
        <p className="eyebrow">Disclaimer</p>
        <h1>Disclaimer</h1>
        <p>
          This website is attorney advertising for Huang Law, P.A. and {site.attorney}.
        </p>
        <h2>No Attorney-Client Relationship</h2>
        <p>
          Viewing this website, submitting a contact form, sending email, or calling the firm does not create an attorney-client relationship. Representation begins only after Huang Law, P.A. confirms the engagement in writing.
        </p>
        <h2>Jurisdiction Notice</h2>
        <p>
          {site.attorney} is licensed in Florida. Huang Law, P.A. provides legal services for Florida matters and other matters where the firm is authorized to act.
        </p>
        <h2>Privacy and Contact Form Data</h2>
        <p>
          Information submitted through the contact form may include name, email, phone number, preferred language, matter type, county, opposing party information, urgency, and a brief description. The firm uses that information to review inquiries, evaluate conflicts, and respond to prospective clients. Do not submit confidential information until the firm confirms representation.
        </p>
      </div>
    </main>
  );
}
