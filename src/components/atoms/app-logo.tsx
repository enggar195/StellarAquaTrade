import { LogoMark } from "@/components/atoms/logo-mark";

export interface AppLogoProps {
  name: string;
  subtitle?: string;
  /** When true, only the mark is shown (collapsed sidebar). */
  compact?: boolean;
}

/** AquaTrade lockup: droplet mark + wordmark (+ optional subtitle). */
export function AppLogo({ name, subtitle, compact = false }: AppLogoProps) {
  return (
    <span className={`app-logo${compact ? " compact" : ""}`}>
      <LogoMark size={compact ? 34 : 38} />
      {!compact && (
        <span className="app-logo-text">
          <span className="app-logo-name">{name}</span>
          {subtitle && <span className="app-logo-sub">{subtitle}</span>}
        </span>
      )}
    </span>
  );
}
