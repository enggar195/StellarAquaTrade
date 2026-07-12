export interface NetworkBadgeProps {
  label?: string;
}

/**
 * "Stellar Testnet" indicator badge (with a live-status dot). The leading word
 * (e.g. "Stellar") is split out so it can collapse on small screens, leaving a
 * compact "● Testnet".
 */
export function NetworkBadge({ label = "Stellar Testnet" }: NetworkBadgeProps) {
  const parts = label.trim().split(/\s+/);
  const main = parts[parts.length - 1];
  const prefix = parts.slice(0, -1).join(" ");

  return (
    <span className="network-badge">
      {prefix && <span className="network-badge-prefix">{prefix}&nbsp;</span>}
      <span className="network-badge-main">{main}</span>
    </span>
  );
}
