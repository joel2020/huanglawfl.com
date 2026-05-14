import { countyOptions, matterTypes, site, urgencyOptions } from "@/lib/site";

const allowedLanguages = new Set(site.languages);
const allowedMatterTypes = new Set(matterTypes);
const allowedCounties = new Set(countyOptions);
const allowedUrgency = new Set(urgencyOptions);

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  preferredLanguage?: string;
  matterType?: string;
  county?: string;
  opposingParties?: string;
  urgency?: string;
  description?: string;
  consent?: boolean;
};

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function bodyLines(payload: Required<Omit<ContactPayload, "consent">>) {
  return [
    `Full name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Preferred language: ${payload.preferredLanguage}`,
    `Matter type: ${payload.matterType}`,
    `County: ${payload.county}`,
    `Opposing party / parties: ${payload.opposingParties}`,
    `Urgency: ${payload.urgency}`,
    "",
    "Brief description:",
    payload.description,
    "",
    "Consent: I understand this form does not create an attorney-client relationship.",
  ];
}

function buildMailto(payload: Required<Omit<ContactPayload, "consent">>) {
  const subject = encodeURIComponent(`${payload.matterType} - Huang Law consultation request`);
  const body = encodeURIComponent(bodyLines(payload).join("\n"));

  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return json({ error: "Invalid request." }, 400);
  }

  const fullName = payload.fullName?.trim() || "";
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const preferredLanguage = payload.preferredLanguage?.trim() || "";
  const matterType = payload.matterType?.trim() || "";
  const county = payload.county?.trim() || "";
  const opposingParties = payload.opposingParties?.trim() || "";
  const urgency = payload.urgency?.trim() || "";
  const description = payload.description?.trim() || "";

  if (!fullName || !email || !phone || !preferredLanguage || !matterType || !county || !opposingParties || !urgency || !description) {
    return json({ error: "Please complete all required fields." }, 400);
  }

  if (!payload.consent) {
    return json({ error: "Please acknowledge that this form does not create an attorney-client relationship." }, 400);
  }

  if (!allowedLanguages.has(preferredLanguage) || !allowedMatterTypes.has(matterType) || !allowedCounties.has(county) || !allowedUrgency.has(urgency)) {
    return json({ error: "Please choose valid form options." }, 400);
  }

  const cleanPayload = {
    fullName,
    email,
    phone,
    preferredLanguage,
    matterType,
    county,
    opposingParties,
    urgency,
    description,
  };
  const mailto = buildMailto(cleanPayload);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return json({ ok: true, mailto });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Huang Law Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || site.email],
      reply_to: email,
      subject: `${matterType} - Huang Law consultation request`,
      text: bodyLines(cleanPayload).join("\n"),
    }),
  });

  if (!response.ok) {
    return json({ ok: true, mailto });
  }

  return json({ ok: true });
}
