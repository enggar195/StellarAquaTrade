import { MetricValue } from "@/components/atoms/metric-value";
import { TestnetScopeBadge } from "@/components/atoms/testnet-scope-badge";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { GlassCard } from "@/components/organisms/glass-card";

export type KpiCardState = "ready" | "loading" | "empty";

export interface KpiCardProps {
  label: string;
  tooltip: string;
  value: string;
  unit?: string;
  support: string;
  badge?: string;
  state?: KpiCardState;
}

/** Buyer KPI card: value + support text + visible "?" tooltip. */
export function KpiCard({ label, tooltip, value, unit, support, badge, state = "ready" }: KpiCardProps) {
  return (
    <GlassCard className="kpi-card">
      <CardHeaderWithHelp title={label} tooltip={tooltip} />
      {state === "loading" ? (
        <div className="kpi-skeleton" aria-hidden="true" />
      ) : state === "empty" ? (
        <p className="kpi-empty" aria-hidden="true">
          —
        </p>
      ) : (
        <>
          <div className="kpi-value-row">
            <MetricValue value={value} unit={unit} />
            {badge && <TestnetScopeBadge label={badge} />}
          </div>
          <p className="kpi-support">{support}</p>
        </>
      )}
    </GlassCard>
  );
}
