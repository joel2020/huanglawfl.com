"use client";

import { matterTypes, quickActions } from "@/lib/site";

const actionToMatter: Record<string, string> = {
  "Civil litigation": "General Civil Litigation",
  "Creditor's rights": "Creditor's Rights",
  Bankruptcy: "Bankruptcy",
  "Banking law": "Banking Law",
  Probate: "Probate Law",
  Immigration: "Immigration",
};

export function QuickActions() {
  return (
    <div className="quick-actions" aria-label="Common matter shortcuts">
      {quickActions.map((action) => {
        const matter = actionToMatter[action] || matterTypes[0];

        return (
          <button
            key={action}
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("huanglaw:select-matter", { detail: matter }));
            }}
          >
            {action}
          </button>
        );
      })}
    </div>
  );
}
