"use client";

import type { ReactNode } from "react";

import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { PrototypeDataNote } from "@/components/molecules/prototype-data-note";
import { GlassCard } from "@/components/organisms/glass-card";
import { useI18n } from "@/i18n/i18n-context";

export type ChartState = "ready" | "loading" | "empty" | "error";

export interface ChartCardProps {
  title: string;
  tooltip: string;
  source: string;
  /** Accessible text summary of the chart. */
  summary: string;
  legend: ReactNode;
  /** Period/selector label; defaults to the shared "Last 6 months". */
  period?: string;
  state?: ChartState;
  children: ReactNode;
}

/** Chart wrapper: title, "?" tooltip, period, chart, legend, text summary, states. */
export function ChartCard({ title, tooltip, source, summary, legend, period, state = "ready", children }: ChartCardProps) {
  const { dict } = useI18n();
  const c = dict.buyerDashboard.charts;

  return (
    <GlassCard className="chart-card">
      <div className="chart-head">
        <CardHeaderWithHelp title={title} tooltip={tooltip} />
        <span className="chart-period">{period ?? c.period6m}</span>
      </div>

      {state === "loading" ? (
        <div className="chart-state" role="status">
          <span className="chart-spinner" aria-hidden="true" />
          {c.loading}
        </div>
      ) : state === "error" ? (
        <div className="chart-state error" role="alert">
          {c.error}
        </div>
      ) : state === "empty" ? (
        <div className="chart-state">{c.empty}</div>
      ) : (
        <>
          <div className="chart-body">{children}</div>
          <div className="chart-legend">{legend}</div>
          <p className="chart-summary">{summary}</p>
          <p className="chart-source">
            <PrototypeDataNote label={source} />
          </p>
        </>
      )}
    </GlassCard>
  );
}
