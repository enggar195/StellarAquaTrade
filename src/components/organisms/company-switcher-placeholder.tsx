"use client";

import { CompanyIdentity } from "@/components/molecules/company-identity";
import { useI18n } from "@/i18n/i18n-context";

/** Workspace/company identity shown in the topbar. Prototype — non-interactive. */
export function CompanySwitcherPlaceholder() {
  const { dict } = useI18n();
  return (
    <div
      className="topbar-identity company"
      aria-label={`${dict.dashboard.companySwitcher} — ${dict.dashboard.prototypeLabel}`}
      title={dict.dashboard.prototypeLabel}
    >
      <CompanyIdentity name={dict.dashboard.workspaceName} sublabel={dict.dashboard.prototypeLabel} />
    </div>
  );
}
