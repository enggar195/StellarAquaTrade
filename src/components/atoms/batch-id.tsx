export interface BatchIdProps {
  value: string;
}

/** Batch identifier, rendered in a tabular monospace style so IDs stand out. */
export function BatchId({ value }: BatchIdProps) {
  return <span className="batch-id">{value}</span>;
}
