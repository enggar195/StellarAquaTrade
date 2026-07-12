import { ComingSoonAction } from "@/components/molecules/coming-soon-action";

export interface CriticalActionBannerProps {
  title: string;
  body: string;
  action: string;
  comingSoonLabel: string;
}

/** High-priority alert banner. Its action is a future feature (non-navigating). */
export function CriticalActionBanner({ title, body, action, comingSoonLabel }: CriticalActionBannerProps) {
  return (
    <aside className="critical-banner" aria-label={title}>
      <span className="critical-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l9 16H3z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      </span>
      <div className="critical-text">
        <strong>{title}</strong>
        <p>{body}</p>
      </div>
      <ComingSoonAction label={action} title={comingSoonLabel} />
    </aside>
  );
}
