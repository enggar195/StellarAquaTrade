import type { TxStatus } from "@/features/buyer-dashboard/data/buyer-dashboard.mock";

export interface TransactionStatusProps {
  status: TxStatus;
  label: string;
}

/** Transaction status: icon + text + semantic color. */
export function TransactionStatus({ status, label }: TransactionStatusProps) {
  return (
    <span className={`tx-status ${status}`}>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {status === "successful" ? <path d="M5 12.5l4.5 4.5L19 7" /> : <path d="M7 7l10 10M17 7L7 17" />}
      </svg>
      <span>{label}</span>
    </span>
  );
}
