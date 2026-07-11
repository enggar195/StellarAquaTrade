"use client";

import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { GlassCard } from "@/components/organisms/glass-card";
import { useI18n } from "@/i18n/i18n-context";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.4-3 7.9-7 9-4-1.1-7-4.6-7-9V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Compact trust card reinforcing that no seed phrase is ever requested. */
export function TrustNoteCard() {
  const { dict } = useI18n();
  const t = dict.auth.trust;

  return (
    <GlassCard className="trust-card">
      <CardHeaderWithHelp title={t.title} tooltip={dict.auth.tooltips.trustNote} icon={<ShieldIcon />} />
      <ul className="trust-list">
        {t.items.map((item) => (
          <li key={item}>
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
