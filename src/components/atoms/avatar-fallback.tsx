export interface AvatarFallbackProps {
  name: string;
  size?: number;
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Initials avatar used for the prototype user identity (no real photo). */
export function AvatarFallback({ name, size = 34 }: AvatarFallbackProps) {
  return (
    <span className="avatar-fallback" style={{ width: size, height: size }} aria-hidden="true">
      {initials(name)}
    </span>
  );
}
