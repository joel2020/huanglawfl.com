import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Huang Law, P.A.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <Link className="legal-back" href="/">Back to Huang Law</Link>
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>
          Huang Law, P.A. collects information that visitors choose to provide through email, consultation requests, or direct communication with the firm. That information may include contact details, preferred language, matter type, timing, and a brief summary of the legal issue.
        </p>
        <h2>How Information Is Used</h2>
        <p>
          Information submitted to the firm is used to review consultation requests, communicate with prospective clients, evaluate conflicts, and provide legal services when an attorney-client relationship is established.
        </p>
        <h2>No Attorney-Client Relationship</h2>
        <p>
          Sending information through this website does not create an attorney-client relationship. Do not send confidential information until Huang Law, P.A. confirms that it can represent you.
        </p>
        <h2>Website Data</h2>
        <p>
          The website may use standard technical data, such as browser information, device information, and basic usage data, to maintain performance, security, and reliability.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy questions may be sent to <a href="mailto:info@huanglawfl.com">info@huanglawfl.com</a>.
        </p>
      </div>
    </main>
  );
}
