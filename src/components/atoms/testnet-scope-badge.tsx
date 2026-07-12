export interface TestnetScopeBadgeProps {
  label: string;
}

/** Badge marking a value as Testnet sample data (no monetary value). */
export function TestnetScopeBadge({ label }: TestnetScopeBadgeProps) {
  return <span className="testnet-scope-badge">{label}</span>;
}
