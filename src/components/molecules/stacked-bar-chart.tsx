import type { CSSProperties } from "react";

export interface StackSegment {
  label: string;
  value: number;
  color: string;
}

export interface StackedBarChartProps {
  segments: StackSegment[];
  total: number;
}

/**
 * Single stacked bar with a value legend. Flat, deterministic. The bar is
 * decorative for AT; the legend and the ChartCard summary carry the values.
 */
export function StackedBarChart({ segments, total }: StackedBarChartProps) {
  return (
    <div className="sbar-chart">
      <div className="sbar-track" aria-hidden="true">
        {segments.map((segment) => (
          <span
            key={segment.label}
            className="sbar-seg"
            style={{ width: `${total > 0 ? (segment.value / total) * 100 : 0}%`, background: segment.color } as CSSProperties}
          />
        ))}
      </div>
      <ul className="sbar-values">
        {segments.map((segment) => (
          <li key={segment.label}>
            <span className="sbar-dot" style={{ background: segment.color } as CSSProperties} aria-hidden="true" />
            <span className="sbar-name">{segment.label}</span>
            <strong>{segment.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
