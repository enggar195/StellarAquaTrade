export interface MetricValueProps {
  value: string;
  unit?: string;
}

/** Large KPI value with an optional unit. */
export function MetricValue({ value, unit }: MetricValueProps) {
  return (
    <p className="metric-value">
      <span className="metric-number">{value}</span>
      {unit && <span className="metric-unit">{unit}</span>}
    </p>
  );
}
