import type { CSSProperties } from "react";

import { QuantityValue } from "@/components/atoms/quantity-value";

export interface BatchQuantityProps {
  available: number;
  initial: number;
  unit?: string;
}

/** Available / initial quantity plus a thin proportion meter. */
export function BatchQuantity({ available, initial, unit }: BatchQuantityProps) {
  const ratio = initial > 0 ? Math.min(1, Math.max(0, available / initial)) : 0;
  return (
    <span className="batch-qty">
      <QuantityValue available={available} initial={initial} unit={unit} />
      <span className="batch-qty-meter" aria-hidden="true">
        <span className="batch-qty-fill" style={{ width: `${ratio * 100}%` } as CSSProperties} />
      </span>
    </span>
  );
}
