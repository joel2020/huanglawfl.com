const recipientEmail = "info@huanglawfl.com";
const allowedSubjects = new Set(["Consultation Request", "Mediation Inquiry", "General Question"]);

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: boolean;
};

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function buildMailto(payload: Required<Pick<ContactPayload, "name" | "email" | "subject" | "message">> & Pick<ContactPayload, "phone">) {
  const subject = encodeURIComponent(`${payload.subject} - Huang Law, P.A.`);
  const body = encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Subject: ${payload.subject}`,
      "",
      "Message:",
      payload.message,
      "",
      "Consent: I understand this form does not create an attorney-client relationship.",
    ].join("\n"),
  );

  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return json({ error: "Invalid request." }, 400);
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const subject = payload.subject?.trim() || "";
  const message = payload.message?.trim() || "";

  if (!name || !email || !subject || !message) {
    return json({ error: "Name, email, subject, and message are required." }, 400);
  }

  if (!payload.consent) {
    return json({ error: "Please acknowledge that this form does not create an attorney-client relationship." }, 400);
  }

  if (!allowedSubjects.has(subject)) {
    return json({ error: "Please choose a valid subject." }, 400);
  }

  const mailto = buildMailto({ name, email, phone, subject, message });
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
      to: [process.env.CONTACT_TO_EMAIL || recipientEmail],
      reply_to: email,
      subject: `${subject} - Huang Law, P.A.`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
        "",
        "Consent: I understand this form does not create an attorney-client relationship.",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return json({ ok: true, mailto });
  }

  return json({ ok: true });
}
