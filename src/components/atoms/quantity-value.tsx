export interface QuantityValueProps {
  available: number;
  initial: number;
  unit?: string;
}

/**
 * "available / initial" quantity. The available figure is emphasized; when it
 * reaches zero the value is toned to signal no sellable stock (text still
 * carries the meaning — colour is never the only cue).
 */
export function QuantityValue({ available, initial, unit }: QuantityValueProps) {
  const soldOut = available === 0;
  return (
    <span className={`qty-value${soldOut ? " is-empty" : ""}`}>
      <strong>{available.toLocaleString("en-US")}</strong>
      <span className="qty-sep" aria-hidden="true"> / </span>
      <span className="qty-initial">{initial.toLocaleString("en-US")}</span>
      {unit && <span className="qty-unit"> {unit}</span>}
    </span>
  );
}
