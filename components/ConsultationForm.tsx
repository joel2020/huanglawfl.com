"use client";

import { FormEvent, useState } from "react";

const matterTypes = [
  "Business or civil dispute",
  "Mediation request",
  "Contract or real estate matter",
  "Immigration or cross-border concern",
  "General legal counsel",
];

const languages = ["English", "Mandarin", "Spanish"];
const urgencyLevels = ["This week", "Within 30 days", "Planning ahead"];

export function ConsultationForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Consultation Request - Huang Law, P.A.");
    const body = encodeURIComponent(
      [
        "New consultation request",
        "",
        `Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Phone: ${formData.get("phone") || ""}`,
        `Preferred language: ${formData.get("language") || ""}`,
        `Matter type: ${formData.get("matter") || ""}`,
        `Timing: ${formData.get("urgency") || ""}`,
        "",
        "Brief summary:",
        `${formData.get("message") || ""}`,
      ].join("\n"),
    );

    setStatus("Opening your email app with a prepared consultation request.");
    window.location.href = `mailto:info@huanglawfl.com?subject=${subject}&body=${body}`;
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
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Preferred language</span>
          <select name="language" defaultValue="English">
            {languages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Matter type</span>
          <select name="matter" defaultValue={matterTypes[0]}>
            {matterTypes.map((matter) => (
              <option key={matter}>{matter}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Timing</span>
          <select name="urgency" defaultValue={urgencyLevels[0]}>
            {urgencyLevels.map((urgency) => (
              <option key={urgency}>{urgency}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Brief summary</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Share the parties involved, what happened, and what outcome you need."
          required
        />
      </label>
      <p className="form-disclaimer">
        Submitting this request does not create an attorney-client relationship. Do not include confidential details until the firm confirms representation.
      </p>
      <button className="button button-gold" type="submit">Prepare Consultation Request</button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
