"use client";

import { HelpTooltip } from "@/components/molecules/help-tooltip";

export interface PrototypeDataBannerProps {
  title: string;
  body: string;
}

/** Prototype-data disclosure banner with a visible "?" help tooltip. */
export function PrototypeDataBanner({ title, body }: PrototypeDataBannerProps) {
  return (
    <aside className="prototype-data-banner" aria-label={title}>
      <span className="pdb-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
      </span>
      <div className="pdb-text">
        <div className="pdb-head">
          <strong>{title}</strong>
          <HelpTooltip title={title} content={body} />
        </div>
        <p>{body}</p>
      </div>
    </aside>
  );
}
