export interface NetworkBadgeProps {
  label?: string;
}

/** "Stellar Testnet" indicator badge (with a live-status dot). */
export function NetworkBadge({ label = "Stellar Testnet" }: NetworkBadgeProps) {
  return <span className="network-badge">{label}</span>;
}
