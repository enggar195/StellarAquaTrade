import { AvatarFallback } from "@/components/atoms/avatar-fallback";

export interface UserIdentityProps {
  name: string;
  role: string;
  compact?: boolean;
}

/** User identity block (avatar + name + role). Prototype — no real session. */
export function UserIdentity({ name, role, compact = false }: UserIdentityProps) {
  return (
    <div className={`identity-block user${compact ? " compact" : ""}`}>
      <AvatarFallback name={name} size={compact ? 32 : 34} />
      {!compact && (
        <span className="identity-text">
          <span className="identity-name">{name}</span>
          <span className="identity-sub">{role}</span>
        </span>
      )}
    </div>
  );
}
