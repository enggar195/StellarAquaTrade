import type { ReactNode } from "react";

import { MetricValue } from "@/components/atoms/metric-value";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { GlassCard } from "@/components/organisms/glass-card";

export type KpiCardState = "ready" | "loading" | "empty";

export interface KpiCardProps {
  label: string;
  tooltip: string;
  value: string;
  unit?: string;
  support: string;
  /** When present, the value shows a "unit · BADGE" note line below it. */
  badge?: string;
  icon?: ReactNode;
  state?: KpiCardState;
}

/** Buyer KPI card: icon + label + value + support text + visible "?" tooltip. */
export function KpiCard({ label, tooltip, value, unit, support, badge, icon, state = "ready" }: KpiCardProps) {
  return (
    <GlassCard className="kpi-card">
      <CardHeaderWithHelp title={label} tooltip={tooltip} icon={icon} />
      {state === "loading" ? (
        <div className="kpi-skeleton" aria-hidden="true" />
      ) : state === "empty" ? (
        <p className="kpi-empty" aria-hidden="true">
          —
        </p>
      ) : (
        <>
          <MetricValue value={value} unit={badge ? undefined : unit} />
          {badge && (
            <p className="kpi-value-note">
              {unit && <span className="kpi-unit-inline">{unit}</span>}
              {unit && <span aria-hidden="true"> · </span>}
              <span className="kpi-testnet">{badge}</span>
            </p>
          )}
          <p className="kpi-support">{support}</p>
        </>
      )}
    </GlassCard>
  );
}
