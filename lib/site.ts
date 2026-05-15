export const site = {
  name: "Huang Law PLLC",
  attorney: "Michael Huang, Esq.",
  schemaAttorneyName: "Michael Huang",
  url: "https://www.huanglawfl.com",
  phone: "305-389-3339",
  phoneHref: "tel:+13053893339",
  email: "dan@huanglawfl.com",
  addressLine: "2139 North University Drive, #5184",
  city: "Coral Springs",
  state: "FL",
  postalCode: "33071",
  address: "2139 North University Drive, #5184, Coral Springs, FL 33071",
  languages: ["English", "Mandarin", "Spanish"],
};

export const legalDisclaimer =
  "Attorney Advertising. This website is for general informational purposes only and does not constitute legal advice. Contacting Huang Law PLLC does not create an attorney-client relationship.";

export const trustItems = [
  "Florida local counsel",
  "Federal and state court litigation",
  "Creditor and lender representation",
  "Certified mediation",
];

export const credentials = [
  "J.D., University of Miami School of Law",
  "B.A., University of Connecticut",
  "Licensed to practice throughout Florida",
  "Admitted to the U.S. District Courts for the Middle and Southern Districts of Florida",
  "Florida Supreme Court Certified Mediator",
  "Fluent in English, Mandarin, and Spanish",
];

export const practiceAreas = [
  {
    title: "General Civil Litigation",
    href: "/practice-areas#general-civil-litigation",
    keyword: "Florida business litigation attorney",
    description:
      "Representation in business disputes, contract matters, partnership conflicts, and complex litigation in Florida state and federal courts.",
  },
  {
    title: "Creditor's Rights",
    href: "/practice-areas#creditors-rights",
    keyword: "Florida creditor rights lawyer",
    description:
      "Strategic representation for secured and unsecured creditors in collections, enforcement actions, and insolvency proceedings.",
  },
  {
    title: "Bankruptcy",
    href: "/practice-areas#bankruptcy",
    keyword: "Florida bankruptcy attorney",
    description:
      "Counsel to creditors, trustees, and businesses in Chapter 7, Chapter 11, and Chapter 13 proceedings.",
  },
  {
    title: "Banking Law",
    href: "/practice-areas#banking-law",
    keyword: "Florida banking law attorney",
    description:
      "Advising lenders and financial institutions in loan disputes, enforcement matters, and related litigation.",
  },
  {
    title: "Probate Law",
    href: "/practice-areas#probate-law",
    keyword: "Florida probate litigation lawyer",
    description:
      "Guidance in probate administration, fiduciary disputes, contested estates, and related litigation.",
  },
  {
    title: "Immigration",
    href: "/practice-areas#immigration",
    keyword: "Florida immigration lawyer",
    description:
      "Business and family-based immigration services delivered with practical and strategic counsel.",
  },
];

export const audiences = [
  "Law firms seeking Florida local counsel",
  "Referral attorneys and co-counsel",
  "Corporate legal departments",
  "Banks and financial institutions",
  "Creditors, lenders, and trustees",
  "Businesses, entrepreneurs, and sophisticated individuals",
];

export const quickActions = [
  "Civil litigation",
  "Creditor's rights",
  "Bankruptcy",
  "Banking law",
  "Probate",
  "Immigration",
];

export const matterTypes = [
  "General Civil Litigation",
  "Creditor's Rights",
  "Bankruptcy",
  "Banking Law",
  "Probate Law",
  "Immigration",
  "Florida local counsel",
  "Mediation",
  "Other complex matter",
];

export const urgencyOptions = ["Urgent", "This week", "Within 30 days", "Planning ahead"];
export const countyOptions = ["Miami-Dade", "Broward", "Palm Beach", "Other Florida county", "Federal matter", "Not sure"];

export type LandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  helps: string[];
  why: string[];
  faqs: { question: string; answer: string }[];
};

const intakeFaqs = [
  {
    question: "Does contacting Huang Law create an attorney-client relationship?",
    answer:
      "No. Representation begins only after the firm completes a conflict review and confirms the engagement in writing.",
  },
  {
    question: "Should confidential information be sent through the website?",
    answer:
      "No. Prospective clients should send only a brief, non-confidential summary until the firm confirms it can review the matter.",
  },
];

export const landingPages: LandingPage[] = [
  {
    slug: "florida-business-litigation-attorney",
    title: "Florida Business Litigation Attorney",
    metaTitle: "Florida Business Litigation Attorney | Huang Law PLLC",
    description:
      "Florida business litigation counsel for contract disputes, commercial claims, partnership conflicts, and complex civil litigation.",
    eyebrow: "Business Litigation",
    h1: "Florida business litigation counsel for disputes with financial and strategic consequences.",
    intro:
      "Huang Law represents businesses, owners, referral attorneys, and legal departments in commercial disputes that require disciplined analysis, precise pleadings, and practical judgment.",
    helps: ["Contract and payment disputes", "Partnership and ownership conflicts", "Business tort claims", "Pre-suit strategy and mediation", "State and federal court litigation"],
    why: ["Direct attorney attention", "Florida state and federal court admissions", "Mediation-informed litigation judgment", "English, Mandarin, and Spanish fluency"],
    faqs: [
      {
        question: "Does Huang Law serve as Florida local counsel?",
        answer:
          "Yes. The firm can support out-of-state attorneys and law firms in Florida litigation, local procedure, filings, hearings, and dispute strategy.",
      },
      {
        question: "Can business disputes be evaluated before suit is filed?",
        answer:
          "Yes. Early review can clarify leverage, evidence, forum, cost, and whether negotiation, mediation, or litigation is the right next step.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-creditor-rights-lawyer",
    title: "Florida Creditor Rights Lawyer",
    metaTitle: "Florida Creditor Rights Lawyer | Huang Law PLLC",
    description:
      "Florida creditor rights representation for secured and unsecured creditors in enforcement, collections, and insolvency matters.",
    eyebrow: "Creditor's Rights",
    h1: "Strategic creditor representation in Florida enforcement and insolvency matters.",
    intro:
      "The firm represents creditors, lenders, and institutional clients in matters where recovery strategy, timing, documentation, and forum selection matter.",
    helps: ["Secured and unsecured creditor claims", "Collections and enforcement actions", "Judgment recovery strategy", "Insolvency and bankruptcy proceedings", "Negotiation and settlement positioning"],
    why: ["Commercially focused counsel", "Bankruptcy and litigation perspective", "Measured enforcement strategy", "Responsive support for institutional clients"],
    faqs: [
      {
        question: "Can the firm represent institutional creditors?",
        answer:
          "Yes. Huang Law represents creditors, lenders, and businesses in Florida enforcement and insolvency-related matters.",
      },
      {
        question: "Does the firm handle bankruptcy-related creditor issues?",
        answer:
          "Yes. The firm advises creditors and businesses in Chapter 7, Chapter 11, and Chapter 13 proceedings.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-bankruptcy-attorney",
    title: "Florida Bankruptcy Attorney",
    metaTitle: "Florida Bankruptcy Attorney | Huang Law PLLC",
    description:
      "Florida bankruptcy counsel for creditors, trustees, and businesses in Chapter 7, Chapter 11, and Chapter 13 proceedings.",
    eyebrow: "Bankruptcy",
    h1: "Bankruptcy counsel for creditors, trustees, and businesses navigating financial distress.",
    intro:
      "Huang Law advises clients in bankruptcy matters where litigation posture, claim priority, documentation, and negotiation strategy can materially affect recovery.",
    helps: ["Chapter 7 creditor issues", "Chapter 11 business matters", "Chapter 13 proceedings", "Claims and objections", "Adversary proceeding strategy"],
    why: ["Creditor-focused judgment", "Litigation and negotiation experience", "Practical assessment of recovery paths", "Clear communication with stakeholders"],
    faqs: [
      {
        question: "Who does Huang Law represent in bankruptcy matters?",
        answer:
          "The firm counsels creditors, trustees, and businesses in bankruptcy-related matters and proceedings.",
      },
      {
        question: "Can bankruptcy issues overlap with litigation?",
        answer:
          "Yes. Bankruptcy matters often involve claims disputes, adversary proceedings, enforcement issues, and settlement strategy.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-banking-law-attorney",
    title: "Florida Banking Law Attorney",
    metaTitle: "Florida Banking Law Attorney | Huang Law PLLC",
    description:
      "Florida banking law attorney advising lenders and financial institutions in loan disputes, enforcement matters, and related litigation.",
    eyebrow: "Banking Law",
    h1: "Counsel for lenders and financial institutions in Florida banking disputes.",
    intro:
      "The firm advises banks, lenders, and financial institutions in matters involving loan disputes, enforcement actions, borrower conflicts, and related litigation.",
    helps: ["Loan disputes", "Enforcement matters", "Borrower and guarantor disputes", "Litigation support for lenders", "Creditor strategy"],
    why: ["Institutional client orientation", "Precise documentation review", "Litigation-ready analysis", "Discreet and responsive communication"],
    faqs: [
      {
        question: "Does Huang Law advise banks and lenders?",
        answer:
          "Yes. The firm advises lenders and financial institutions in loan disputes, enforcement matters, and related litigation.",
      },
      {
        question: "Can the firm coordinate with in-house counsel?",
        answer:
          "Yes. The firm can work directly with in-house legal departments, outside counsel, and referral attorneys.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-probate-litigation-lawyer",
    title: "Florida Probate Litigation Lawyer",
    metaTitle: "Florida Probate Litigation Lawyer | Huang Law PLLC",
    description:
      "Florida probate litigation counsel for probate administration, fiduciary disputes, contested estates, and related litigation.",
    eyebrow: "Probate Law",
    h1: "Probate counsel for contested estates, fiduciary disputes, and administration issues.",
    intro:
      "Huang Law helps clients address probate matters where family dynamics, fiduciary duties, asset questions, and litigation risk require careful handling.",
    helps: ["Probate administration", "Fiduciary disputes", "Contested estates", "Beneficiary disputes", "Related civil litigation"],
    why: ["Careful factual development", "Dispute resolution perspective", "Court-aware strategy", "Measured communication in sensitive matters"],
    faqs: [
      {
        question: "Does the firm handle contested probate matters?",
        answer:
          "Yes. Huang Law can assist with fiduciary disputes, contested estates, and probate-related litigation.",
      },
      {
        question: "Can probate disputes be mediated?",
        answer:
          "Many probate disputes may be appropriate for mediation depending on the parties, issues, and procedural posture.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-immigration-lawyer",
    title: "Florida Immigration Lawyer",
    metaTitle: "Florida Immigration Lawyer | Huang Law PLLC",
    description:
      "Florida immigration lawyer for business and family-based immigration matters with English, Mandarin, and Spanish communication.",
    eyebrow: "Immigration",
    h1: "Immigration counsel for business and family matters requiring practical guidance.",
    intro:
      "The firm provides business and family-based immigration services with clear communication, multilingual access, and attention to the client’s broader legal context.",
    helps: ["Business immigration matters", "Family-based immigration", "Multilingual client communication", "Document review and process guidance", "Cross-border planning concerns"],
    why: ["English, Mandarin, and Spanish fluency", "Practical counsel for sensitive matters", "Direct attorney involvement", "Strategic coordination when matters cross practice areas"],
    faqs: [
      {
        question: "What immigration services does Huang Law provide?",
        answer:
          "The firm provides business and family-based immigration services and evaluates each inquiry based on the facts and procedural posture.",
      },
      {
        question: "Can clients communicate in Mandarin or Spanish?",
        answer:
          "Yes. Huang Law offers communication in English, Mandarin, and Spanish.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-certified-mediator",
    title: "Florida Certified Mediator",
    metaTitle: "Florida Certified Mediator | Huang Law PLLC",
    description:
      "Florida Supreme Court Certified Mediator for business, civil, probate, creditor, and financial disputes.",
    eyebrow: "Mediation",
    h1: "Certified mediation for parties seeking a disciplined path to resolution.",
    intro:
      "As a Florida Supreme Court Certified Mediator, Michael Huang helps parties evaluate risk, cost, evidence, timing, and settlement options in a confidential setting.",
    helps: ["Business and commercial disputes", "Creditor and financial disputes", "Civil litigation matters", "Probate and fiduciary disputes", "Pre-suit dispute resolution"],
    why: ["Florida Supreme Court Certified Mediator", "Litigation-aware facilitation", "Calm, structured process", "Multilingual communication"],
    faqs: [
      {
        question: "Is the mediator neutral?",
        answer:
          "Yes. A mediator is neutral and does not represent either party in the mediation.",
      },
      {
        question: "Can mediation occur before litigation?",
        answer:
          "Yes. Parties may use mediation before a lawsuit when they want to explore resolution early.",
      },
      ...intakeFaqs,
    ],
  },
  {
    slug: "florida-local-counsel",
    title: "Florida Local Counsel",
    metaTitle: "Florida Local Counsel | Huang Law PLLC",
    description:
      "Florida local counsel for law firms, referral attorneys, and national counsel handling Florida litigation and disputes.",
    eyebrow: "Florida Local Counsel",
    h1: "Florida local counsel for law firms handling matters in state and federal courts.",
    intro:
      "Huang Law serves as a strategic Florida resource for law firms and referral attorneys who need responsive local counsel, procedural judgment, and practical litigation support.",
    helps: ["Florida state and federal litigation support", "Local procedure and filing coordination", "Hearing and mediation support", "Referral counsel communication", "Strategic issue spotting"],
    why: ["Attorney-to-attorney responsiveness", "Federal and state court admissions", "Discreet referral relationship handling", "Institutional-quality communication"],
    faqs: [
      {
        question: "Does Huang Law accept referrals from other attorneys?",
        answer:
          "Yes. The firm works with referral attorneys and law firms seeking Florida counsel for litigation, mediation, and selected practice-area matters.",
      },
      {
        question: "Can the firm coordinate with national counsel?",
        answer:
          "Yes. Huang Law can coordinate with national counsel, in-house legal teams, and referral counsel on Florida matters.",
      },
      ...intakeFaqs,
    ],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function firmAddressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.addressLine,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.postalCode,
    addressCountry: "US",
  };
}

export function firmLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${site.url}/#legalservice`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/mr-huang.png`,
    priceRange: "$$$",
    address: firmAddressSchema(),
    areaServed: ["Florida", "Miami-Dade County", "Broward County", "Palm Beach County"],
    knowsLanguage: site.languages,
    founder: {
      "@type": "Attorney",
      "@id": `${site.url}/#attorney`,
      name: site.schemaAttorneyName,
      jobTitle: "Florida Attorney and Florida Supreme Court Certified Mediator",
      alumniOf: ["University of Miami School of Law", "University of Connecticut"],
      knowsLanguage: site.languages,
    },
    knowsAbout: practiceAreas.map((area) => area.title),
  };
}

export function attorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${site.url}/#attorney`,
    name: site.schemaAttorneyName,
    honorificSuffix: "Esq.",
    jobTitle: "Florida Attorney and Florida Supreme Court Certified Mediator",
    worksFor: {
      "@id": `${site.url}/#legalservice`,
    },
    alumniOf: ["University of Miami School of Law", "University of Connecticut"],
    knowsLanguage: site.languages,
    image: `${site.url}/images/mr-huang.png`,
    url: `${site.url}/about`,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Huang Law serve as Florida local counsel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Huang Law works with law firms, referral attorneys, national counsel, and legal departments that need Florida counsel for litigation, mediation, and selected practice-area matters.",
        },
      },
      {
        "@type": "Question",
        name: "What practice areas does Huang Law handle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The firm handles general civil litigation, creditor's rights, bankruptcy, banking law, probate law, immigration, and mediation.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does Michael Huang speak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Michael Huang is fluent in English, Mandarin, and Spanish.",
        },
      },
    ],
  };
}
