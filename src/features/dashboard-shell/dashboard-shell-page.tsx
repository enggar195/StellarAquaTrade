"use client";

import { StatusDot } from "@/components/atoms/status-dot";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { GlassCard } from "@/components/organisms/glass-card";
import { DashboardContentLayout } from "@/components/templates/dashboard-content-layout";
import { useI18n } from "@/i18n/i18n-context";

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

/**
 * Neutral shell-preview page. No business KPIs or charts — just a prototype
 * banner and three compact status cards, each with a visible "?" tooltip.
 */
export function DashboardShellPage() {
  const { dict } = useI18n();
  const d = dict.dashboard;

  return (
    <DashboardContentLayout title={d.pageTitle}>
      <div className="proto-banner" role="note">
        <StatusDot tone="prototype" pulse />
        <div>
          <strong>{d.bannerTitle}</strong>
          <p>{d.bannerBody}</p>
        </div>
      </div>

      <div className="shell-cards">
        <GlassCard className="shell-card">
          <CardHeaderWithHelp title={d.shellStatus.title} tooltip={d.shellStatus.tooltip} />
          <p className="shell-card-body">{d.shellStatus.body}</p>
        </GlassCard>

        <GlassCard className="shell-card">
          <CardHeaderWithHelp title={d.availableNow.title} tooltip={d.availableNow.tooltip} />
          <ul className="shell-list available">
            {d.availableNow.items.map((item) => (
              <li key={item}>
                <CheckMark />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="shell-card">
          <CardHeaderWithHelp title={d.comingNext.title} tooltip={d.comingNext.tooltip} />
          <ul className="shell-list coming">
            {d.comingNext.items.map((item) => (
              <li key={item}>
                <StatusDot tone="muted" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </DashboardContentLayout>
  );
}
