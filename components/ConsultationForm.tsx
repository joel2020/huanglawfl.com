"use client";

import { FormEvent, useEffect, useState } from "react";
import { countyOptions, matterTypes, urgencyOptions } from "@/lib/site";

const languageOptions = ["English", "Mandarin", "Spanish"];

type ContactResponse = {
  ok?: boolean;
  mailto?: string;
  error?: string;
};

export function ConsultationForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [matterType, setMatterType] = useState(matterTypes[0]);

  useEffect(() => {
    function handleMatterSelect(event: Event) {
      const customEvent = event as CustomEvent<string>;
      const selected = customEvent.detail;

      if (selected && matterTypes.includes(selected)) {
        setMatterType(selected);
      }

      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.addEventListener("huanglaw:select-matter", handleMatterSelect);
    return () => window.removeEventListener("huanglaw:select-matter", handleMatterSelect);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      preferredLanguage: String(formData.get("preferredLanguage") || ""),
      matterType: String(formData.get("matterType") || ""),
      county: String(formData.get("county") || ""),
      opposingParties: String(formData.get("opposingParties") || ""),
      urgency: String(formData.get("urgency") || ""),
      description: String(formData.get("description") || ""),
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
      setMatterType(matterTypes[0]);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The message could not be sent.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="intake-form" id="consultation-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Full name</span>
          <input name="fullName" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          <span>Preferred language</span>
          <select name="preferredLanguage" defaultValue="English" required>
            {languageOptions.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Matter type</span>
          <select name="matterType" value={matterType} onChange={(event) => setMatterType(event.target.value)} required>
            {matterTypes.map((matter) => (
              <option key={matter}>{matter}</option>
            ))}
          </select>
        </label>
        <label>
          <span>County</span>
          <select name="county" defaultValue="Miami-Dade" required>
            {countyOptions.map((county) => (
              <option key={county}>{county}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Opposing party / parties</span>
          <input name="opposingParties" type="text" placeholder="Names for conflict check" required />
        </label>
        <label>
          <span>Urgency</span>
          <select name="urgency" defaultValue="This week" required>
            {urgencyOptions.map((urgency) => (
              <option key={urgency}>{urgency}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Brief description</span>
        <textarea
          name="description"
          rows={5}
          placeholder="Share a brief non-confidential summary, the parties involved, the forum or county, any deadline, and the result you need."
          required
        />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" required />
        <span>I understand this form does not create an attorney-client relationship.</span>
      </label>
      <p className="form-disclaimer">
        Submitting this form does not create an attorney-client relationship. Please do not include confidential information until an attorney-client relationship has been formally established.
      </p>
      <button className="button button-gold" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Preparing Request" : "Schedule a Consultation"}
      </button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
