import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Huang Law PLLC",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <Link className="legal-back" href="/">Back to Huang Law</Link>
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>
          Huang Law PLLC collects information visitors choose to provide through email, phone calls, consultation requests, or direct communication with the firm. That information may include name, email, phone number, preferred language, matter type, county, opposing party information for conflict checks, urgency, and a brief description.
        </p>
        <h2>How Information Is Used</h2>
        <p>
          Information submitted to the firm is used to review inquiries, evaluate conflicts, respond to prospective clients, and provide legal services when an attorney-client relationship is formally established.
        </p>
        <h2>No Attorney-Client Relationship</h2>
        <p>
          Submitting information through this website does not create an attorney-client relationship. Do not send confidential information until the firm confirms representation.
        </p>
        <h2>Website Data</h2>
        <p>
          The website may use standard technical data and privacy-conscious analytics tools when configured through environment variables. No fake tracking IDs are embedded in the site.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy questions may be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </main>
  );
}
