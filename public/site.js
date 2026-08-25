(() => {
  "use strict";

  const form = document.querySelector("#intake-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const value = (data, name, limit) => String(data.get(name) || "").trim().slice(0, limit);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.removeAttribute("data-state");

    const data = new FormData(form);
    if (value(data, "website", 200)) {
      status.textContent = "Unable to prepare the draft. Please call Huang Law instead.";
      status.dataset.state = "error";
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please complete the required fields and consent checkbox.";
      status.dataset.state = "error";
      return;
    }

    const body = [
      "HUANG LAW WEBSITE INQUIRY",
      "",
      `Name: ${value(data, "name", 100)}`,
      `Reply-to email: ${value(data, "email", 254)}`,
      `Phone: ${value(data, "phone", 30) || "Not provided"}`,
      `Matter type: ${value(data, "matter", 60)}`,
      `Adverse party or parties: ${value(data, "adverse", 200) || "Not provided"}`,
      "",
      "Brief, non-confidential summary:",
      value(data, "summary", 600),
      "",
      "Acknowledgment: I understand that this inquiry does not create an attorney-client relationship and that representation must be confirmed in writing."
    ].join("\r\n");

    const href = `mailto:dan@huanglawfl.com?subject=${encodeURIComponent("Huang Law website inquiry")}&body=${encodeURIComponent(body)}`;
    const draftLink = document.createElement("a");
    draftLink.href = href;
    draftLink.hidden = true;
    document.body.append(draftLink);

    status.textContent = "Your email application should open with a draft. Review it before choosing whether to send.";
    draftLink.click();
    draftLink.remove();
  });
})();
