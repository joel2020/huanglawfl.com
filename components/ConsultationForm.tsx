"use client";

import { FormEvent, useState } from "react";

const subjects = ["Consultation Request", "Mediation Inquiry", "General Question"];

type ContactResponse = {
  ok?: boolean;
  mailto?: string;
  error?: string;
};

export function ConsultationForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
    };

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as ContactResponse;

      if (!response.ok) {
        throw new Error(data.error || "The message could not be sent.");
      }

      if (data.mailto) {
        setStatus("Opening your email app with a prepared message.");
        window.location.href = data.mailto;
        return;
      }

      setStatus("Your message was sent to Huang Law, P.A.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The message could not be sent.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone <em>optional</em></span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Subject</span>
          <select name="subject" defaultValue={subjects[0]} required>
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Share a brief summary of the matter. Do not include confidential details until the firm confirms representation."
          required
        />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" required />
        <span>I understand this form does not create an attorney-client relationship.</span>
      </label>
      <p className="form-disclaimer">
        Submitting this request does not create an attorney-client relationship. Do not include confidential details until the firm confirms representation.
      </p>
      <button className="button button-gold" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Preparing Request" : "Send Message"}
      </button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
