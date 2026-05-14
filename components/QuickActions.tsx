"use client";

import { quickActions } from "@/lib/site";

const actionToMatter: Record<string, string> = {
  "Business dispute": "Business dispute",
  Mediation: "Mediation",
  "Contract issue": "Contract issue",
  "Real estate dispute": "Real estate dispute",
  "Multilingual legal help": "Multilingual legal help",
  "Not sure where to start": "Not sure where to start",
};

export function QuickActions() {
  return (
    <div className="quick-actions" aria-label="Common legal matter shortcuts">
      {quickActions.map((action) => (
        <button
          key={action}
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("huanglaw:select-matter", { detail: actionToMatter[action] }));
          }}
        >
          {action}
        </button>
      ))}
    </div>
  );
}
