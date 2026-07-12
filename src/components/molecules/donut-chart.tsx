export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export interface DonutChartProps {
  segments: DonutSegment[];
  total: number;
  centerLabel: string;
}

/** Minimal deterministic donut chart (inline SVG). Decorative for AT. */
export function DonutChart({ segments, total, centerLabel }: DonutChartProps) {
  const size = 176;
  const stroke = 22;
  const r = (size - stroke) / 2;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;

  const fraction = (value: number) => (total > 0 ? value / total : 0) * circumference;
  const arcs = segments.map((segment, index) => ({
    ...segment,
    dash: fraction(segment.value),
    offset: segments.slice(0, index).reduce((sum, previous) => sum + fraction(previous.value), 0),
  }));

  return (
    <svg className="donut-chart" viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle className="donut-track" cx={c} cy={c} r={r} fill="none" strokeWidth={stroke} />
      {arcs.map((arc) => (
        <circle
          key={arc.label}
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke={arc.color}
          strokeWidth={stroke}
          strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
          strokeDashoffset={-arc.offset}
          transform={`rotate(-90 ${c} ${c})`}
        />
      ))}
      <text className="donut-total" x={c} y={c - 1} textAnchor="middle">
        {total}
      </text>
      <text className="donut-total-label" x={c} y={c + 16} textAnchor="middle">
        {centerLabel}
      </text>
    </svg>
  );
}
