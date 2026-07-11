import { LogoMark } from "@/components/atoms/logo-mark";

export interface CompanyIdentityProps {
  name: string;
  sublabel: string;
  compact?: boolean;
}

/** Workspace / company identity block. Prototype — no real tenant. */
export function CompanyIdentity({ name, sublabel, compact = false }: CompanyIdentityProps) {
  return (
    <div className={`identity-block${compact ? " compact" : ""}`}>
      <span className="identity-mark">
        <LogoMark size={30} />
      </span>
      {!compact && (
        <span className="identity-text">
          <span className="identity-name">{name}</span>
          <span className="identity-sub">{sublabel}</span>
        </span>
      )}
    </div>
  );
}
