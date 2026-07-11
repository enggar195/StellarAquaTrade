export interface LoginHelperNoteProps {
  message: string;
}

/**
 * Neutral informational message shown after a valid prototype submission.
 * Announced politely; carries no authenticated meaning.
 */
export function LoginHelperNote({ message }: LoginHelperNoteProps) {
  return (
    <p className="aq-helper-note" role="status">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 11v5M12 8h.01" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
      <span>{message}</span>
    </p>
  );
}
