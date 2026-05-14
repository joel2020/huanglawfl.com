export const site = {
  name: "Huang Law, P.A.",
  attorney: 'Haidan "Daniel" Huang',
  schemaAttorneyName: "Haidan Huang",
  barNumber: "1023249",
  url: "https://huanglawfl.com",
  phone: "(213) 259-3316",
  phoneHref: "tel:+12132593316",
  email: "info@huanglawfl.com",
  addressLine: "2139 N. University Dr., #5184",
  city: "Coral Springs",
  state: "FL",
  postalCode: "33071",
  address: "2139 N. University Dr., #5184, Coral Springs, FL 33071",
  languages: ["English", "Mandarin", "Spanish"],
};

export const trustItems = [
  "Florida Licensed Attorney",
  "Florida Supreme Court Certified Mediator",
  "Middle & Southern Districts of Florida",
  "English • Mandarin • Spanish",
];

export const credentials = [
  "Florida Bar No. 1023249",
  "J.D., University of Miami School of Law",
  "B.A., University of Connecticut",
  "Licensed to practice law throughout Florida",
  "Admitted in the Middle and Southern District Courts of Florida",
  "Florida Supreme Court Certified Mediator",
  "Fluent in English, Mandarin, and Spanish",
];

export const serviceCards = [
  {
    title: "Business & Contract Disputes",
    href: "/business-litigation-attorney-miami",
    description:
      "Strategic counsel for business owners, professionals, and companies dealing with contract breaches, partnership tension, commercial claims, and negotiation pressure.",
  },
  {
    title: "Civil Litigation",
    href: "/civil-litigation-attorney-miami",
    description:
      "Focused representation for civil disputes that require disciplined analysis, court awareness, and a practical plan before positions harden.",
  },
  {
    title: "Mediation & Dispute Resolution",
    href: "/mediation-attorney-miami",
    description:
      "Confidential mediation support from a Florida Supreme Court Certified Mediator for parties seeking a controlled path toward resolution.",
  },
  {
    title: "Real Estate Disputes",
    href: "/real-estate-dispute-attorney-miami",
    description:
      "Guidance for property disagreements, lease issues, buyer and seller disputes, investor concerns, and contract interpretation matters.",
  },
  {
    title: "Multilingual Legal Counsel",
    href: "/multilingual-attorney-miami",
    description:
      "Clear legal communication in English, Mandarin, and Spanish for clients who need Florida counsel without language friction.",
  },
];

export const whoWeHelp = [
  "Business owners in contract or partnership disputes",
  "Real estate buyers, sellers, landlords, and investors",
  "Professionals facing civil claims or negotiation pressure",
  "International clients with Florida legal concerns",
  "Parties seeking private mediation",
  "Chinese-speaking and Spanish-speaking clients who need clear legal guidance",
];

export const quickActions = [
  "Business dispute",
  "Mediation",
  "Contract issue",
  "Real estate dispute",
  "Multilingual legal help",
  "Not sure where to start",
];

export const matterTypes = [
  "Business dispute",
  "Mediation",
  "Contract issue",
  "Real estate dispute",
  "Multilingual legal help",
  "Civil litigation",
  "Not sure where to start",
];

export const urgencyOptions = ["Urgent", "This week", "Within 30 days", "Planning ahead"];
export const countyOptions = ["Miami-Dade", "Broward", "Palm Beach", "Other Florida county", "Not sure"];

export const legalDisclaimer =
  "Attorney Advertising. This website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting Huang Law, P.A. does not create an attorney-client relationship.";

export type LandingPage = {
  slug: string;
  kind: "service" | "city";
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  localIntro: string;
  helps: string[];
  why: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
};

const conservativeFaqs = {
  consultation: {
    question: "Does contacting the firm create an attorney-client relationship?",
    answer:
      "No. Contacting Huang Law, P.A. or submitting a form does not create an attorney-client relationship. Representation begins only after the firm confirms the engagement in writing.",
  },
  confidential: {
    question: "Should I send confidential documents through the website?",
    answer:
      "No. Prospective clients should not send confidential information until the firm confirms it can review the matter and represent them.",
  },
};

export const landingPages: LandingPage[] = [
  {
    slug: "business-litigation-attorney-miami",
    kind: "service",
    title: "Business Litigation Attorney Miami",
    metaTitle: "Business Litigation Attorney Miami | Huang Law, P.A.",
    description:
      "Miami business litigation counsel for contract disputes, partnership conflicts, commercial claims, and negotiation strategy.",
    eyebrow: "Business Litigation",
    h1: "Business litigation counsel for Miami-area disputes that need a disciplined plan.",
    localIntro:
      "Miami-Dade businesses often face legal pressure before a dispute becomes a lawsuit. Huang Law, P.A. helps business owners and professionals evaluate the facts, leverage, documents, and next steps with direct attorney involvement.",
    helps: [
      "Contract breaches and payment disputes",
      "Partnership and ownership conflicts",
      "Commercial claims and pre-suit negotiations",
      "Business tort and civil dispute strategy",
      "Mediation preparation for business disputes",
    ],
    why: [
      "Direct access to a Florida attorney",
      "Certified mediation perspective on risk and resolution",
      "English, Mandarin, and Spanish communication",
      "Conservative, evidence-focused case positioning",
    ],
    process: [
      "Review the dispute, parties, documents, and business objective.",
      "Assess negotiation, mediation, and litigation options.",
      "Build a practical plan for communication, leverage, and next steps.",
    ],
    faqs: [
      { question: "Can Huang Law review a business dispute before a lawsuit is filed?", answer: "Yes. The firm can help evaluate a business dispute before litigation begins, including contract terms, communications, risk, and practical next steps." },
      { question: "Does every business dispute need litigation?", answer: "No. Many business disputes can be positioned for negotiation or mediation. The right path depends on the facts, documents, urgency, and goals." },
      { question: "Can the firm help with mediation preparation?", answer: "Yes. Huang Law, P.A. can help clients prepare for mediation by organizing issues, documents, leverage, and settlement objectives." },
      { question: "What should I gather before contacting the firm?", answer: "Helpful materials include contracts, invoices, emails, demand letters, timelines, and names of all parties involved." },
      conservativeFaqs.consultation,
      conservativeFaqs.confidential,
    ],
    relatedLinks: [
      { label: "Contract Disputes", href: "/contract-disputes-attorney-miami" },
      { label: "Mediation", href: "/mediation-attorney-miami" },
    ],
  },
  {
    slug: "civil-litigation-attorney-miami",
    kind: "service",
    title: "Civil Litigation Attorney Miami",
    metaTitle: "Civil Litigation Attorney Miami | Huang Law, P.A.",
    description:
      "Civil litigation counsel for Miami-area clients facing claims, disputes, negotiation pressure, or mediation.",
    eyebrow: "Civil Litigation",
    h1: "Civil litigation guidance for Miami-area clients facing serious disputes.",
    localIntro:
      "Civil claims can move quickly. Huang Law, P.A. helps clients understand the dispute, preserve important information, evaluate risk, and respond with a measured litigation or resolution strategy.",
    helps: [
      "Civil claims and pre-suit disputes",
      "Demand letters and response strategy",
      "Negotiation and mediation planning",
      "Document review and factual timelines",
      "Court-aware dispute positioning",
    ],
    why: [
      "Florida state and federal court admissions",
      "Practical evaluation of cost, leverage, and risk",
      "Direct attorney communication",
      "Multilingual support when language clarity matters",
    ],
    process: [
      "Identify the claims, parties, deadlines, and evidence.",
      "Discuss response options and potential resolution paths.",
      "Prepare the next step with attention to legal and practical consequences.",
    ],
    faqs: [
      { question: "When should I contact a civil litigation attorney?", answer: "It is often useful to contact counsel as soon as a dispute, demand, threatened lawsuit, or formal claim appears." },
      { question: "Can Huang Law help before a case is filed?", answer: "Yes. Pre-suit strategy can be important for preserving evidence, avoiding mistakes, and evaluating resolution options." },
      { question: "Is mediation available for civil disputes?", answer: "Many civil disputes can be mediated. Whether mediation is appropriate depends on the parties, facts, and procedural posture." },
      { question: "Does the firm guarantee outcomes?", answer: "No. No attorney can guarantee a result. The firm focuses on careful analysis, strategy, and communication." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Business Litigation", href: "/business-litigation-attorney-miami" },
      { label: "Mediation", href: "/mediation-attorney-miami" },
    ],
  },
  {
    slug: "contract-disputes-attorney-miami",
    kind: "service",
    title: "Contract Disputes Attorney Miami",
    metaTitle: "Contract Disputes Attorney Miami | Huang Law, P.A.",
    description:
      "Miami contract dispute counsel for breach, interpretation, payment, performance, and negotiation matters.",
    eyebrow: "Contract Disputes",
    h1: "Contract dispute counsel for Miami clients who need clarity before conflict escalates.",
    localIntro:
      "Contract disputes often turn on language, timing, performance, and documentation. Huang Law, P.A. helps clients evaluate agreements and build a response that fits the commercial reality.",
    helps: [
      "Breach of contract issues",
      "Payment and performance disputes",
      "Contract interpretation questions",
      "Demand letters and settlement discussions",
      "Mediation of contract disagreements",
    ],
    why: [
      "Practical review of written agreements and communications",
      "Business-minded approach to risk and cost",
      "Certified mediation perspective",
      "Clear communication in English, Mandarin, and Spanish",
    ],
    process: [
      "Review the agreement, amendments, messages, and performance history.",
      "Identify obligations, defenses, deadlines, and leverage.",
      "Recommend a path for negotiation, mediation, or litigation.",
    ],
    faqs: [
      { question: "What documents matter in a contract dispute?", answer: "The written contract, amendments, invoices, notices, emails, text messages, and payment records may all matter." },
      { question: "Can contract disputes be resolved without trial?", answer: "Some contract disputes resolve through negotiation or mediation. The right approach depends on the facts and the parties." },
      { question: "Can the firm review a demand letter?", answer: "Yes. Reviewing a demand letter early can help clarify risk, deadlines, and response strategy." },
      { question: "Do oral agreements matter?", answer: "Sometimes. Whether an oral agreement is enforceable depends on the facts and applicable law." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Business Litigation", href: "/business-litigation-attorney-miami" },
      { label: "Real Estate Disputes", href: "/real-estate-dispute-attorney-miami" },
    ],
  },
  {
    slug: "real-estate-dispute-attorney-miami",
    kind: "service",
    title: "Real Estate Dispute Attorney Miami",
    metaTitle: "Real Estate Dispute Attorney Miami | Huang Law, P.A.",
    description:
      "Miami real estate dispute counsel for buyers, sellers, landlords, investors, leases, contracts, and property disagreements.",
    eyebrow: "Real Estate Disputes",
    h1: "Real estate dispute counsel for Miami buyers, sellers, landlords, and investors.",
    localIntro:
      "Real estate conflicts can affect money, timing, occupancy, and business plans. Huang Law, P.A. helps clients evaluate the legal and practical issues behind Florida property disputes.",
    helps: [
      "Buyer and seller disputes",
      "Lease and landlord-tenant related conflicts",
      "Investor and property agreement issues",
      "Contract interpretation and performance disputes",
      "Mediation of property disagreements",
    ],
    why: [
      "Focused review of documents and transaction history",
      "Practical attention to timing and cost",
      "Mediation-informed approach to resolution",
      "Multilingual legal communication for diverse clients",
    ],
    process: [
      "Review contracts, notices, communications, and property documents.",
      "Identify immediate risks, deadlines, and available options.",
      "Prepare a plan for negotiation, mediation, or litigation if needed.",
    ],
    faqs: [
      { question: "Can Huang Law help with a real estate contract dispute?", answer: "Yes. The firm can review the agreement, communications, performance issues, and potential next steps." },
      { question: "Are real estate disputes good candidates for mediation?", answer: "Some are. Mediation can help parties address cost, timing, and practical outcomes without prolonged litigation." },
      { question: "Should I wait before contacting counsel?", answer: "Waiting can create risk if deadlines, notices, or evidence are involved. Early review can help avoid preventable mistakes." },
      { question: "Can the firm help investors?", answer: "The firm can assist investors with Florida legal concerns involving agreements, disputes, and property-related conflicts." },
      conservativeFaqs.confidential,
    ],
    relatedLinks: [
      { label: "Contract Disputes", href: "/contract-disputes-attorney-miami" },
      { label: "Mediation", href: "/mediation-attorney-miami" },
    ],
  },
  {
    slug: "mediation-attorney-miami",
    kind: "service",
    title: "Mediation Attorney Miami",
    metaTitle: "Mediation Attorney Miami | Huang Law, P.A.",
    description:
      "Miami mediation services from a Florida Supreme Court Certified Mediator for business, contract, real estate, and civil disputes.",
    eyebrow: "Mediation",
    h1: "Certified mediation for Miami-area parties seeking a private path forward.",
    localIntro:
      "Mediation gives parties a confidential setting to address risk, cost, timing, and possible resolution. Haidan Huang is a Florida Supreme Court Certified Mediator.",
    helps: [
      "Business and commercial disputes",
      "Contract and real estate disagreements",
      "Civil litigation matters",
      "Pre-suit dispute resolution",
      "Multilingual mediation-related communication",
    ],
    why: [
      "Florida Supreme Court Certified Mediator",
      "Attorney perspective on litigation risk",
      "Calm, structured facilitation",
      "English, Mandarin, and Spanish fluency",
    ],
    process: [
      "Identify the parties, dispute type, and scheduling needs.",
      "Confirm mediation format, preparation materials, and participants.",
      "Facilitate a confidential process focused on practical resolution.",
    ],
    faqs: [
      { question: "Is mediation confidential?", answer: "Mediation is generally designed to be confidential, though specific rules and agreements may affect how confidentiality applies." },
      { question: "Does the mediator represent either side?", answer: "No. A mediator is neutral and does not represent either party in the mediation." },
      { question: "What types of matters can be mediated?", answer: "Business, contract, real estate, and many civil disputes may be appropriate for mediation." },
      { question: "Can mediation happen before a lawsuit?", answer: "Yes. Parties may seek mediation before litigation when they want to explore resolution early." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Business Litigation", href: "/business-litigation-attorney-miami" },
      { label: "Civil Litigation", href: "/civil-litigation-attorney-miami" },
    ],
  },
  {
    slug: "mandarin-speaking-attorney-miami",
    kind: "service",
    title: "Mandarin Speaking Attorney Miami",
    metaTitle: "Mandarin Speaking Attorney Miami | Huang Law, P.A.",
    description:
      "Mandarin-speaking Florida attorney for Miami-area clients with business, civil, contract, real estate, and mediation needs.",
    eyebrow: "Mandarin-Speaking Counsel",
    h1: "Mandarin-speaking legal counsel for Miami clients with Florida legal concerns.",
    localIntro:
      "Legal issues are harder when language creates uncertainty. Huang Law, P.A. provides Mandarin-language communication for clients who need Florida legal guidance with clarity.",
    helps: [
      "Business and contract disputes",
      "Real estate and property disagreements",
      "Civil claims and negotiation pressure",
      "Mediation-related communication",
      "International clients with Florida legal concerns",
    ],
    why: [
      "Direct attorney access in Mandarin and English",
      "Florida litigation and mediation perspective",
      "Clear explanation of process, documents, and next steps",
      "Culturally aware communication for sensitive matters",
    ],
    process: [
      "Understand the matter, language preference, parties, and urgency.",
      "Review documents and explain Florida legal options clearly.",
      "Prepare next steps for negotiation, mediation, or litigation strategy.",
    ],
    faqs: [
      { question: "Can I communicate with the firm in Mandarin?", answer: "Yes. Haidan Huang is fluent in Mandarin and can communicate with Mandarin-speaking clients." },
      { question: "Can the firm help international clients with Florida matters?", answer: "The firm can assist international clients with Florida legal concerns within the firm's practice areas." },
      { question: "Can documents be reviewed if they involve multiple languages?", answer: "The firm can discuss document review needs during intake and identify what materials are relevant." },
      { question: "Does the firm handle every type of legal matter?", answer: "No. The firm focuses on selected Florida legal matters and will evaluate whether the inquiry fits its practice." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Multilingual Attorney", href: "/multilingual-attorney-miami" },
      { label: "Business Litigation", href: "/business-litigation-attorney-miami" },
    ],
  },
  {
    slug: "spanish-speaking-attorney-miami",
    kind: "service",
    title: "Spanish Speaking Attorney Miami",
    metaTitle: "Spanish Speaking Attorney Miami | Huang Law, P.A.",
    description:
      "Spanish-speaking Florida attorney for Miami-area clients with civil, business, contract, real estate, and mediation matters.",
    eyebrow: "Spanish-Speaking Counsel",
    h1: "Spanish-speaking legal counsel for Miami-area clients who need clear Florida guidance.",
    localIntro:
      "Clients should not have to guess what a legal document, dispute, or negotiation means. Huang Law, P.A. provides Spanish-language communication for Florida legal matters within the firm's practice areas.",
    helps: [
      "Civil claims and dispute strategy",
      "Business and contract disagreements",
      "Real estate disputes",
      "Mediation preparation and participation",
      "Communication with families, owners, and professionals",
    ],
    why: [
      "Spanish-language communication",
      "Direct attorney involvement",
      "Practical dispute and mediation perspective",
      "Conservative guidance without overstating outcomes",
    ],
    process: [
      "Review the issue, documents, parties, and preferred language.",
      "Explain the legal posture and available options.",
      "Build a communication and resolution plan.",
    ],
    faqs: [
      { question: "Can I speak with the firm in Spanish?", answer: "Yes. Huang Law, P.A. offers Spanish-language communication for clients who prefer it." },
      { question: "Can family members help explain the issue?", answer: "The firm can discuss communication preferences during intake while protecting confidentiality and professional obligations." },
      { question: "Does the firm provide legal advice before engagement?", answer: "The firm can review inquiries, but legal advice is provided only when appropriate and after engagement terms are confirmed." },
      { question: "What matters does the firm focus on?", answer: "The firm focuses on business disputes, civil litigation, mediation, contract issues, real estate disputes, and multilingual legal matters." },
      conservativeFaqs.confidential,
    ],
    relatedLinks: [
      { label: "Multilingual Attorney", href: "/multilingual-attorney-miami" },
      { label: "Civil Litigation", href: "/civil-litigation-attorney-miami" },
    ],
  },
  {
    slug: "multilingual-attorney-miami",
    kind: "service",
    title: "Multilingual Attorney Miami",
    metaTitle: "Multilingual Attorney Miami | Huang Law, P.A.",
    description:
      "Multilingual Florida attorney serving Miami-area clients in English, Mandarin, and Spanish for selected civil and business matters.",
    eyebrow: "Multilingual Legal Counsel",
    h1: "Multilingual Florida legal counsel for Miami clients who need clarity.",
    localIntro:
      "In a diverse market like Miami, legal communication must be precise. Huang Law, P.A. helps clients navigate selected Florida legal matters in English, Mandarin, and Spanish.",
    helps: [
      "Business owners with cross-language disputes",
      "International clients with Florida legal concerns",
      "Families and professionals coordinating legal communication",
      "Real estate and contract disputes",
      "Mediation and civil litigation planning",
    ],
    why: [
      "English, Mandarin, and Spanish fluency",
      "Florida attorney and certified mediator credentials",
      "Direct attorney access",
      "Clear explanation of process, risk, and next steps",
    ],
    process: [
      "Identify the language preference, matter type, and parties.",
      "Review key documents and explain Florida legal options.",
      "Coordinate a practical strategy for communication and resolution.",
    ],
    faqs: [
      { question: "What languages does the firm offer?", answer: "The firm offers communication in English, Mandarin, and Spanish." },
      { question: "Can multilingual counsel help avoid misunderstandings?", answer: "Clear language access can help clients better understand documents, process, and strategy." },
      { question: "Does multilingual counsel mean the firm handles every legal issue?", answer: "No. The firm focuses on the practice areas described on this website unless another matter is specifically confirmed during intake." },
      { question: "Can the firm help international clients?", answer: "The firm can review Florida legal concerns for international clients within its practice areas." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Mandarin-Speaking Attorney", href: "/mandarin-speaking-attorney-miami" },
      { label: "Spanish-Speaking Attorney", href: "/spanish-speaking-attorney-miami" },
    ],
  },
  {
    slug: "miami-attorney",
    kind: "city",
    title: "Miami Attorney",
    metaTitle: "Miami Attorney | Litigation, Mediation & Multilingual Counsel",
    description:
      "Florida attorney serving Miami clients in business disputes, civil litigation, mediation, contracts, real estate disputes, and multilingual matters.",
    eyebrow: "Miami Legal Counsel",
    h1: "Miami legal counsel for disputes, mediation, contracts, and multilingual matters.",
    localIntro:
      "Miami clients often need counsel who can move between business reality, litigation risk, mediation, and multilingual communication. Huang Law, P.A. provides direct attorney attention for selected Florida matters.",
    helps: [
      "Business and contract disputes in the Miami area",
      "Civil claims and negotiation pressure",
      "Real estate and property disagreements",
      "Private mediation for civil and commercial matters",
      "English, Mandarin, and Spanish communication",
    ],
    why: [
      "Boutique firm attention",
      "Certified mediation credential",
      "Florida state and federal court admissions",
      "Multilingual communication for Miami's diverse client base",
    ],
    process: [
      "Gather the facts, parties, documents, county, and urgency.",
      "Evaluate whether negotiation, mediation, or litigation strategy fits.",
      "Create a practical next-step plan.",
    ],
    faqs: [
      { question: "Does Huang Law serve Miami clients?", answer: "Yes. Huang Law, P.A. serves Florida clients, including clients with Miami-area legal concerns." },
      { question: "What Miami matters does the firm focus on?", answer: "The firm focuses on business disputes, civil litigation, mediation, contracts, real estate disputes, and multilingual legal counsel." },
      { question: "Can I request a consultation online?", answer: "Yes. The consultation form collects basic intake details and includes the required no attorney-client relationship acknowledgment." },
      { question: "Can I communicate in Mandarin or Spanish?", answer: "Yes. The firm offers communication in English, Mandarin, and Spanish." },
      conservativeFaqs.confidential,
    ],
    relatedLinks: [
      { label: "Business Litigation", href: "/business-litigation-attorney-miami" },
      { label: "Multilingual Attorney", href: "/multilingual-attorney-miami" },
    ],
  },
  {
    slug: "coral-gables-attorney",
    kind: "city",
    title: "Coral Gables Attorney",
    metaTitle: "Coral Gables Attorney | Huang Law, P.A.",
    description:
      "Florida legal counsel for Coral Gables business, civil, real estate, contract, mediation, and multilingual legal matters.",
    eyebrow: "Coral Gables Legal Counsel",
    h1: "Coral Gables legal counsel for business, property, and civil disputes.",
    localIntro:
      "Coral Gables clients often need legal guidance that respects business relationships, property interests, and reputational concerns. Huang Law, P.A. provides direct attorney strategy for selected Florida disputes.",
    helps: [
      "Contract and business disagreements",
      "Real estate and property-related disputes",
      "Civil claims and pre-suit negotiations",
      "Private mediation planning",
      "Multilingual communication for owners and professionals",
    ],
    why: [
      "Discreet boutique-firm approach",
      "Practical focus on risk, documents, and leverage",
      "Certified mediation perspective",
      "English, Mandarin, and Spanish communication",
    ],
    process: [
      "Clarify the legal issue, documents, and parties.",
      "Identify deadlines, negotiation posture, and practical constraints.",
      "Prepare a measured plan for resolution or litigation readiness.",
    ],
    faqs: [
      { question: "Can Huang Law assist Coral Gables business owners?", answer: "The firm can review business and contract disputes involving Florida legal concerns." },
      { question: "Can real estate disputes be reviewed?", answer: "Yes. The firm can evaluate selected real estate disputes involving contracts, property disagreements, and related communications." },
      { question: "Is mediation available for Coral Gables disputes?", answer: "Mediation may be available where the parties agree or where a court process requires it." },
      { question: "Does the firm offer multilingual support?", answer: "Yes. English, Mandarin, and Spanish communication are available." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Real Estate Disputes", href: "/real-estate-dispute-attorney-miami" },
      { label: "Contract Disputes", href: "/contract-disputes-attorney-miami" },
    ],
  },
  {
    slug: "brickell-attorney",
    kind: "city",
    title: "Brickell Attorney",
    metaTitle: "Brickell Attorney | Business, Contract & Mediation Counsel",
    description:
      "Florida attorney for Brickell business owners, professionals, investors, and international clients with selected civil and commercial legal matters.",
    eyebrow: "Brickell Legal Counsel",
    h1: "Brickell legal counsel for business disputes, contracts, and multilingual matters.",
    localIntro:
      "Brickell's business and international community often needs legal advice that is fast, precise, and commercially aware. Huang Law, P.A. helps clients evaluate disputes and legal pressure with direct attorney involvement.",
    helps: [
      "Business owner and professional disputes",
      "Contract review in conflict situations",
      "Investor and real estate-related disagreements",
      "Civil claims and negotiation strategy",
      "Mandarin and Spanish communication for international clients",
    ],
    why: [
      "Boutique attorney access",
      "Business-minded dispute strategy",
      "Certified mediation perspective",
      "Multilingual communication for complex client needs",
    ],
    process: [
      "Identify the business issue, documents, and immediate pressure points.",
      "Review legal options and possible resolution channels.",
      "Prepare a practical strategy for negotiation, mediation, or litigation.",
    ],
    faqs: [
      { question: "Can Huang Law help Brickell business clients?", answer: "The firm can review selected Florida business, contract, civil, and real estate disputes." },
      { question: "Can international clients contact the firm?", answer: "Yes. The firm can review Florida legal concerns for international clients within its practice areas." },
      { question: "Is multilingual communication available?", answer: "Yes. The firm communicates in English, Mandarin, and Spanish." },
      { question: "What should I include in the intake form?", answer: "Include the parties, matter type, county, urgency, and a brief non-confidential description." },
      conservativeFaqs.confidential,
    ],
    relatedLinks: [
      { label: "Business Litigation", href: "/business-litigation-attorney-miami" },
      { label: "Mandarin-Speaking Attorney", href: "/mandarin-speaking-attorney-miami" },
    ],
  },
  {
    slug: "aventura-attorney",
    kind: "city",
    title: "Aventura Attorney",
    metaTitle: "Aventura Attorney | Huang Law, P.A.",
    description:
      "Florida counsel for Aventura clients with business, civil, real estate, mediation, and multilingual legal concerns.",
    eyebrow: "Aventura Legal Counsel",
    h1: "Aventura legal counsel for civil, business, real estate, and multilingual matters.",
    localIntro:
      "Aventura clients may face disputes involving property, business relationships, contracts, or cross-border concerns. Huang Law, P.A. provides focused Florida legal guidance for selected matters.",
    helps: [
      "Real estate and contract disputes",
      "Business and partnership disagreements",
      "Civil claims and negotiation pressure",
      "Mediation for private dispute resolution",
      "English, Mandarin, and Spanish communication",
    ],
    why: [
      "Focused boutique practice",
      "Direct communication with counsel",
      "Mediation-informed strategy",
      "Language access for diverse clients",
    ],
    process: [
      "Review the matter type, parties, location, documents, and urgency.",
      "Discuss Florida legal options and practical risks.",
      "Plan the next communication, negotiation, mediation, or litigation step.",
    ],
    faqs: [
      { question: "Does Huang Law serve Aventura clients?", answer: "Yes. Huang Law, P.A. can review Florida legal matters for Aventura-area clients." },
      { question: "Can the firm help with property disputes?", answer: "The firm can review selected property and real estate disputes involving Florida legal concerns." },
      { question: "Can mediation help avoid prolonged conflict?", answer: "Mediation can sometimes help parties address disputes more efficiently, depending on the facts and willingness to participate." },
      { question: "Can I request Mandarin or Spanish communication?", answer: "Yes. English, Mandarin, and Spanish communication are available." },
      conservativeFaqs.consultation,
    ],
    relatedLinks: [
      { label: "Real Estate Disputes", href: "/real-estate-dispute-attorney-miami" },
      { label: "Mediation", href: "/mediation-attorney-miami" },
    ],
  },
  {
    slug: "doral-attorney",
    kind: "city",
    title: "Doral Attorney",
    metaTitle: "Doral Attorney | Multilingual Business & Civil Counsel",
    description:
      "Florida attorney for Doral business owners, families, professionals, and international clients with selected disputes and multilingual legal concerns.",
    eyebrow: "Doral Legal Counsel",
    h1: "Doral legal counsel for business, civil, contract, and multilingual matters.",
    localIntro:
      "Doral's business and multilingual communities often need Florida legal guidance that is practical and clear. Huang Law, P.A. helps clients evaluate disputes, contracts, mediation options, and communication strategy.",
    helps: [
      "Business and contract disputes",
      "Civil claims and negotiation pressure",
      "Real estate and property disagreements",
      "Mediation preparation",
      "Spanish, Mandarin, and English legal communication",
    ],
    why: [
      "Multilingual counsel for diverse client needs",
      "Direct attorney access",
      "Florida litigation and mediation perspective",
      "Practical attention to documents, parties, and deadlines",
    ],
    process: [
      "Gather the facts, county, parties, and preferred language.",
      "Review documents and identify legal and practical issues.",
      "Recommend a resolution, mediation, or litigation-readiness path.",
    ],
    faqs: [
      { question: "Can Huang Law help Doral business owners?", answer: "The firm can review selected business and contract disputes involving Florida law." },
      { question: "Is Spanish communication available?", answer: "Yes. The firm offers communication in Spanish, Mandarin, and English." },
      { question: "Can the firm help with mediation?", answer: "Yes. Haidan Huang is a Florida Supreme Court Certified Mediator." },
      { question: "Does contacting the firm mean I am represented?", answer: "No. Representation begins only after the firm confirms the engagement in writing." },
      conservativeFaqs.confidential,
    ],
    relatedLinks: [
      { label: "Spanish-Speaking Attorney", href: "/spanish-speaking-attorney-miami" },
      { label: "Contract Disputes", href: "/contract-disputes-attorney-miami" },
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
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: firmAddressSchema(),
    areaServed: ["Florida", "Miami-Dade County", "Broward County", "Palm Beach County"],
    founder: {
      "@type": "Person",
      name: site.schemaAttorneyName,
      alumniOf: ["University of Miami School of Law", "University of Connecticut"],
      knowsLanguage: site.languages,
      jobTitle: "Florida Attorney and Florida Supreme Court Certified Mediator",
    },
    knowsAbout: [
      "Business disputes",
      "Civil litigation",
      "Certified mediation",
      "Contract disputes",
      "Real estate disputes",
      "Multilingual legal counsel",
    ],
  };
}
