export interface DocumentBlockerProps {
  text: string;
  /** true = a blocking item (warning), false = nothing blocking (ok). */
  blocking: boolean;
}

/** Blocking item shown as icon + text (never color alone). */
export function DocumentBlocker({ text, blocking }: DocumentBlockerProps) {
  return (
    <span className={`blocker ${blocking ? "warn" : "ok"}`}>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {blocking ? <path d="M12 3l9 16H3zM12 10v4M12 17h.01" /> : <path d="M5 12.5l4.5 4.5L19 7" />}
      </svg>
      <span>{text}</span>
    </span>
  );
}
