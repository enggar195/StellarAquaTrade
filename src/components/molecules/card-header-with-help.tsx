import type { ReactNode } from "react";

import { HelpTooltip } from "@/components/molecules/help-tooltip";

export interface CardHeaderWithHelpProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  tooltip: string;
}

/** Card header with an icon, title/subtitle and the visible "?" help tooltip. */
export function CardHeaderWithHelp({ title, subtitle, icon, tooltip }: CardHeaderWithHelpProps) {
  return (
    <div className="aq-card-header">
      <div className="aq-card-heading">
        {icon && <span className="aq-card-icon" aria-hidden="true">{icon}</span>}
        <div>
          <h3 className="aq-card-title">{title}</h3>
          {subtitle && <p className="aq-card-subtitle">{subtitle}</p>}
        </div>
      </div>
      <HelpTooltip title={title} content={tooltip} />
    </div>
  );
}
