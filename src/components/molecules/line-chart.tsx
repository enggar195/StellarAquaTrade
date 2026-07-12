export interface LineSeries {
  label: string;
  color: string;
  values: number[];
}

export interface LineChartProps {
  labels: string[];
  series: LineSeries[];
}

/**
 * Minimal deterministic line chart (inline SVG, no dependency, no 3D). The
 * chart is decorative for AT — the ChartCard renders the accessible text
 * summary alongside it.
 */
export function LineChart({ labels, series }: LineChartProps) {
  const W = 340;
  const H = 180;
  const padL = 26;
  const padR = 12;
  const padT = 12;
  const padB = 26;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const max = Math.max(1, ...series.flatMap((s) => s.values));
  const n = labels.length;

  const x = (i: number) => padL + (n <= 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v: number) => padT + plotH - (v / max) * plotH;

  return (
    <svg className="line-chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {[0, 0.5, 1].map((f) => (
        <line key={f} className="chart-grid" x1={padL} x2={W - padR} y1={padT + plotH - f * plotH} y2={padT + plotH - f * plotH} />
      ))}
      {[0, max].map((v) => (
        <text key={v} className="chart-axis" x={padL - 6} y={y(v) + 3} textAnchor="end">
          {v}
        </text>
      ))}
      {labels.map((label, i) => (
        <text key={label} className="chart-axis" x={x(i)} y={H - 8} textAnchor="middle">
          {label}
        </text>
      ))}
      {series.map((s) => (
        <g key={s.label} style={{ color: s.color }}>
          <polyline className="line-path" points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")} />
          {s.values.map((v, i) => (
            <circle key={i} className="line-dot" cx={x(i)} cy={y(v)} r="2.6" />
          ))}
        </g>
      ))}
    </svg>
  );
}
