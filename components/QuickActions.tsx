"use client";

import { matterTypes, quickActions } from "@/lib/site";

const actionToMatter: Record<string, string> = {
  "Creditor's rights": "Creditor's Rights",
  "Banking law": "Banking Law",
  Bankruptcy: "Bankruptcy",
  "Civil litigation": "General Civil Litigation",
  "Local counsel": "Florida local counsel",
  Probate: "Probate Law",
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
