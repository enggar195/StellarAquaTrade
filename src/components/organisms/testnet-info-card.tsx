"use client";

import { Badge } from "@/components/atoms/badge";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { InfoLineItem } from "@/components/molecules/info-line-item";
import { GlassCard } from "@/components/organisms/glass-card";
import { useI18n } from "@/i18n/i18n-context";

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.4 3.6 8.5S14.4 18.2 12 20.5M12 3.5C9.6 5.8 8.4 8.9 8.4 12S9.6 18.2 12 20.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Informational Testnet card. No wallet-connect action — that lives on Test XLM. */
export function TestnetInfoCard() {
  const { dict } = useI18n();
  const t = dict.auth.testnet;

  return (
    <GlassCard className="testnet-card">
      <CardHeaderWithHelp title={t.title} tooltip={dict.auth.tooltips.testnetInfo} icon={<NetworkIcon />} />
      <div className="aq-info-list">
        <InfoLineItem label={t.networkLabel} value={<Badge tone="violet">{t.networkValue}</Badge>} />
        <InfoLineItem label={t.stageLabel} value={<Badge tone="cyan">{t.stageValue}</Badge>} />
        <InfoLineItem label={t.scopeLabel} value={t.scopeValue} />
        <InfoLineItem label={t.futureLabel} value={<Badge tone="neutral">{t.futureValue}</Badge>} />
      </div>
    </GlassCard>
  );
}
