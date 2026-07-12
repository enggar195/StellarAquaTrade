import type { CSSProperties } from "react";

export interface HorizontalBarItem {
  label: string;
  value: number;
  color?: string;
}

export interface HorizontalBarChartProps {
  items: HorizontalBarItem[];
  unit?: string;
  max?: number;
}

/**
 * Minimal horizontal bar chart (flat, no 3D, no decorative gradients). Real
 * text labels + values make it readable to assistive tech; the ChartCard adds a
 * text summary alongside.
 */
export function HorizontalBarChart({ items, unit, max }: HorizontalBarChartProps) {
  const maxValue = max ?? Math.max(1, ...items.map((item) => item.value));

  return (
    <ul className="hbar-chart">
      {items.map((item) => (
        <li key={item.label} className="hbar-row">
          <span className="hbar-label">{item.label}</span>
          <span className="hbar-track">
            <span
              className="hbar-fill"
              style={{ width: `${(item.value / maxValue) * 100}%`, ...(item.color ? { background: item.color } : {}) } as CSSProperties}
            />
          </span>
          <span className="hbar-value">{unit ? `${item.value} ${unit}` : item.value}</span>
        </li>
      ))}
    </ul>
  );
}
