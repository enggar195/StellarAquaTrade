# Claude Code Instructions — AquaTrade Pay Frontend

## Current milestone

Stellar Journey Level 1 / White Belt only.

## Required features

1. Freighter connect and app-side disconnect.
2. Testnet network guard.
3. Native XLM balance display.
4. Native XLM Testnet payment.
5. Success/failure feedback and transaction hash.
6. Public-repository quality README and screenshot evidence.

## Boundaries

- Do not add backend dependencies to the Level 1 transaction flow.
- Do not implement escrow or smart-contract behavior in this repository yet.
- Do not request, persist, transmit, or log seed phrases/private keys.
- Keep shared Stellar logic under `src/lib/stellar`.
- Keep product-specific wording in `src/config/product.ts`.
- Add or update tests when changing validation or transaction behavior.
- Preserve the distinction between current features and future roadmap.
