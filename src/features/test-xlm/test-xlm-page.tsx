"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  paymentSchema,
  type PaymentInput,
} from "@/features/payment/payment-schema";
import { AquaBackground } from "@/components/aqua-background";
import { OceanScene } from "@/components/ocean-scene";
import { productConfig } from "@/config/product";
import { stellarConfig } from "@/lib/stellar/config";
import {
  connectFreighter,
  restoreFreighterSession,
} from "@/lib/stellar/freighter";
import { fetchXlmBalance, fundWithFriendbot } from "@/lib/stellar/horizon";
import { sendTestnetXlmPayment } from "@/lib/stellar/payment";
import { toFriendlyError } from "@/lib/stellar/errors";

interface TransactionResult {
  status: "success" | "failure";
  message: string;
  hash?: string;
}

type BusyState =
  | "idle"
  | "connecting"
  | "loading-balance"
  | "funding"
  | "awaiting-signature"
  | "submitting";

const initialPayment: PaymentInput = {
  destination: "",
  amount: "1",
  reference: "",
};

function shortenAddress(address: string): string {
  return `${address.slice(0, 7)}…${address.slice(-7)}`;
}

export function TestXlmPage() {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [networkName, setNetworkName] = useState("TESTNET");
  const [isTestnet, setIsTestnet] = useState(true);
  const [payment, setPayment] = useState<PaymentInput>(initialPayment);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState<BusyState>("idle");
  const [notice, setNotice] = useState<string | null>(null);
  const [transactionResult, setTransactionResult] =
    useState<TransactionResult | null>(null);

  const isBusy = busy !== "idle";
  const connected = Boolean(address);

  const explorerTransactionUrl = useMemo(() => {
    if (!transactionResult?.hash) return null;
    return `${stellarConfig.explorerUrl}/tx/${transactionResult.hash}`;
  }, [transactionResult]);

  const refreshBalance = useCallback(async (walletAddress: string) => {
    setBusy("loading-balance");
    setNotice(null);
    try {
      setBalance(await fetchXlmBalance(walletAddress));
    } catch (error) {
      setNotice(toFriendlyError(error));
    } finally {
      setBusy("idle");
    }
  }, []);

  useEffect(() => {
    let active = true;

    async function restore() {
      try {
        const session = await restoreFreighterSession();
        if (!active || !session) return;

        setAddress(session.address);
        setIsTestnet(session.isTestnet);
        setNetworkName(session.networkName);
        if (session.isTestnet) {
          await refreshBalance(session.address);
        }
      } catch {
        // A manual Connect action will surface actionable errors.
      }
    }

    void restore();
    return () => {
      active = false;
    };
  }, [refreshBalance]);

  async function handleConnect() {
    setBusy("connecting");
    setNotice(null);
    setTransactionResult(null);

    try {
      const session = await connectFreighter();
      setAddress(session.address);
      setIsTestnet(session.isTestnet);
      setNetworkName(session.networkName);

      if (!session.isTestnet) {
        setBalance(null);
        setNotice("Switch Freighter to Stellar Testnet, then reconnect.");
        return;
      }

      await refreshBalance(session.address);
    } catch (error) {
      setNotice(toFriendlyError(error));
    } finally {
      setBusy("idle");
    }
  }

  function handleDisconnect() {
    setAddress(null);
    setBalance(null);
    setNetworkName("TESTNET");
    setIsTestnet(true);
    setPayment(initialPayment);
    setFieldErrors({});
    setNotice(null);
    setTransactionResult(null);
    setBusy("idle");
  }

  async function handleFund() {
    if (!address) return;
    setBusy("funding");
    setNotice(null);
    try {
      await fundWithFriendbot(address);
      await refreshBalance(address);
      setNotice("Testnet wallet funded successfully. Test XLM has no monetary value.");
    } catch (error) {
      setNotice(toFriendlyError(error));
    } finally {
      setBusy("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);
    setTransactionResult(null);

    const validation = paymentSchema.safeParse(payment);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const field = String(issue.path[0] ?? "form");
        if (!errors[field]) errors[field] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    if (!address) {
      setNotice("Connect Freighter before sending a transaction.");
      return;
    }

    if (!isTestnet) {
      setNotice("Switch Freighter to Stellar Testnet before sending.");
      return;
    }

    setFieldErrors({});
    setBusy("awaiting-signature");

    try {
      const paymentPromise = sendTestnetXlmPayment(address, validation.data);
      setBusy("submitting");
      const hash = await paymentPromise;
      setTransactionResult({
        status: "success",
        message: "The XLM payment was confirmed on Stellar Testnet.",
        hash,
      });
      await refreshBalance(address);
    } catch (error) {
      setTransactionResult({
        status: "failure",
        message: toFriendlyError(error),
      });
    } finally {
      setBusy("idle");
    }
  }

  return (
    <main className="app-split">
      <AquaBackground />

      {/* ===== Left: interactive column (glass) ===== */}
      <section className="app-form-col">
        <div className="app-form-inner">
          <header className="form-intro">
            <div className="hero-topline">
              <p className="eyebrow">{productConfig.level}</p>
              <span className="network-badge">STELLAR TESTNET</span>
            </div>
            <h1 className="form-title">Send test XLM on Stellar</h1>
            <p className="form-sub">
              Connect Freighter, stay on Testnet, and settle an ornamental-fish
              trade in seconds — non-custodial, no backend.
            </p>
          </header>

          <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="section-label">Wallet</p>
              <h2>Freighter connection</h2>
            </div>
            <span className={`status-dot ${connected ? "online" : ""}`}>
              {connected ? "Connected" : "Disconnected"}
            </span>
          </div>

          {!connected ? (
            <button className="primary-button" onClick={handleConnect} disabled={isBusy}>
              {busy === "connecting" ? "Connecting…" : "Connect Freighter"}
            </button>
          ) : (
            <div className="wallet-details">
              <div className="metric-row">
                <span>Address</span>
                <strong title={address ?? ""}>{address ? shortenAddress(address) : "-"}</strong>
              </div>
              <div className="metric-row">
                <span>Network</span>
                <strong className={isTestnet ? "good-text" : "danger-text"}>
                  {networkName}
                </strong>
              </div>
              <div className="metric-row balance-row">
                <span>XLM balance</span>
                <strong>{balance ?? "Not loaded"}</strong>
              </div>
              <div className="button-row">
                <button
                  className="secondary-button"
                  onClick={() => address && refreshBalance(address)}
                  disabled={isBusy || !isTestnet}
                >
                  Refresh balance
                </button>
                <button className="ghost-button" onClick={handleDisconnect} disabled={isBusy}>
                  Disconnect
                </button>
              </div>
              <button
                className="text-button"
                onClick={handleFund}
                disabled={isBusy || !isTestnet}
              >
                Fund this Testnet wallet with Friendbot
              </button>
            </div>
          )}
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="section-label">Payment</p>
              <h2>Send test XLM</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="payment-form">
            <label>
              <span>{productConfig.recipientLabel}</span>
              <input
                value={payment.destination}
                onChange={(event) =>
                  setPayment((current) => ({ ...current, destination: event.target.value }))
                }
                placeholder="G…"
                autoComplete="off"
                disabled={isBusy}
              />
              {fieldErrors.destination && <small className="field-error">{fieldErrors.destination}</small>}
            </label>

            <label>
              <span>Amount in XLM</span>
              <input
                value={payment.amount}
                onChange={(event) =>
                  setPayment((current) => ({ ...current, amount: event.target.value }))
                }
                inputMode="decimal"
                placeholder="1.0000000"
                disabled={isBusy}
              />
              {fieldErrors.amount && <small className="field-error">{fieldErrors.amount}</small>}
            </label>

            <label>
              <span>{productConfig.referenceLabel} <em>optional</em></span>
              <input
                value={payment.reference}
                onChange={(event) =>
                  setPayment((current) => ({ ...current, reference: event.target.value }))
                }
                placeholder={productConfig.referencePlaceholder}
                maxLength={28}
                disabled={isBusy}
              />
              {fieldErrors.reference && <small className="field-error">{fieldErrors.reference}</small>}
            </label>

            <button
              className="primary-button"
              type="submit"
              disabled={isBusy || !connected || !isTestnet}
            >
              {busy === "awaiting-signature"
                ? "Approve in Freighter…"
                : busy === "submitting"
                  ? "Submitting…"
                  : "Review and send"}
            </button>
          </form>
        </article>

        {notice && <aside className="notice-card">{notice}</aside>}

        {transactionResult && (
          <section className={`result-card ${transactionResult.status}`}>
            <div>
              <p className="section-label">Transaction result</p>
              <h2>{transactionResult.status === "success" ? "Success" : "Failed"}</h2>
              <p>{transactionResult.message}</p>
            </div>
            {transactionResult.hash && (
              <div className="transaction-meta">
                <code>{transactionResult.hash}</code>
                {explorerTransactionUrl && (
                  <a href={explorerTransactionUrl} target="_blank" rel="noreferrer">
                    View on Stellar Expert
                  </a>
                )}
              </div>
            )}
          </section>
        )}

          <footer>
            Testnet only. Never enter a seed phrase or secret key into this
            application.
          </footer>
        </div>
      </section>

      {/* ===== Right: full-height ocean showcase (full-bleed, no card) ===== */}
      <aside className="app-showcase">
        <OceanScene />
        <div className="showcase-scrim" aria-hidden="true" />

        <div className="showcase-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 4 11 4 16a8 8 0 0 0 16 0c0-5-8-14-8-14Z" />
            </svg>
          </span>
          <div>
            <p className="brand-name">{productConfig.name}</p>
            <p className="brand-sub">Stellar Testnet · White Belt L1</p>
          </div>
        </div>

        <div className="showcase-copy">
          <h2 className="showcase-title">{productConfig.tagline}</h2>
          <p className="showcase-desc">{productConfig.description}</p>
          <ul className="hero-chips">
            {productConfig.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
}
