import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Huang Law, P.A.",
};

export default function TermsOfUse() {
  return (
    <main className="legal-page">
      <div className="container legal-shell">
        <Link className="legal-back" href="/">Back to Huang Law</Link>
        <p className="eyebrow">Terms of Use</p>
        <h1>Terms of Use</h1>
        <p>
          This website is provided by Huang Law, P.A. for general informational purposes. The information on this site is not legal advice and should not be relied on as a substitute for advice from a qualified attorney.
        </p>
        <h2>Attorney Advertising</h2>
        <p>
          This website may be considered attorney advertising under applicable rules of professional conduct. Prior results, credentials, or descriptions of services do not guarantee a similar outcome.
        </p>
        <h2>No Attorney-Client Relationship</h2>
        <p>
          Viewing this website, using the consultation request form, sending email, or contacting Huang Law, P.A. does not create an attorney-client relationship. Representation begins only after the firm confirms the engagement in writing.
        </p>
        <h2>Confidential Information</h2>
        <p>
          Do not send confidential or time-sensitive information through this website until the firm has confirmed that it can represent you.
        </p>
        <h2>Jurisdiction</h2>
        <p>
          Huang Law, P.A. provides legal services for Florida matters and other matters where the firm is authorized to act.
        </p>
      </div>
    </main>
  );
}
