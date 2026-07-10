# AquaTrade Pay

A Stellar Testnet payment foundation for ornamental fish buyers and exporters.

## Current scope: Stellar Journey Level 1 — White Belt

This public frontend dApp intentionally implements only the Level 1 fundamentals:

- Connect and disconnect a Freighter wallet
- Enforce Stellar Testnet
- Fetch and display the native XLM balance
- Fund the connected Testnet account through Friendbot
- Send a native XLM payment on Testnet
- Display success/failure feedback and the transaction hash

Future product modules such as trade orders, documents, shipment, escrow, claims, quality inspection, and smart contracts are roadmap items and are not represented as completed Level 1 features.

## Stack

- Next.js 16 + React 19 + TypeScript
- `@stellar/freighter-api`
- `@stellar/stellar-sdk`
- Stellar Horizon Testnet
- Zod validation
- Docker / Docker Compose

## Run locally

Requirements: Node.js 24 LTS and pnpm 11.

```bash
cp .env.example .env.local
corepack enable
corepack prepare pnpm@11.0.0 --activate
pnpm install
pnpm dev:https
```

Open `https://localhost:3000`. Your browser may ask you to trust the local development certificate.

## Run with Docker

```bash
cp .env.example .env
# The HOST_PORT default for this repository is 3000.
docker compose up --build
```

Open `http://localhost:3000`.

> Freighter requires a secure context in many browser configurations. For the most reliable wallet test, use `pnpm dev:https` locally or deploy the application to a public HTTPS host.

## Freighter Testnet setup

1. Install and unlock Freighter.
2. Change the wallet network to **Testnet**.
3. Connect the wallet from the application.
4. Use **Fund this Testnet wallet with Friendbot** when the account has no XLM.
5. Use another funded Testnet G-address as the recipient.
6. Approve the payment inside Freighter.

Testnet XLM has no monetary value.

## Required submission screenshots

Save screenshots under `public/screenshots/`:

1. `01-wallet-connected.png`
2. `02-balance-displayed.png`
3. `03-transaction-success.png`

The transaction-success screenshot must show the confirmation and transaction hash.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Repository structure

```text
src/
├── app/                     Next.js App Router
├── components/              Level 1 UI
├── config/                  Product-specific terminology
├── features/payment/        Input schema and tests
└── lib/stellar/             Freighter, Horizon, and payment integration
docs/                        Level 1 scope and roadmap
public/screenshots/          Submission evidence
```

## Security

- The frontend never requests or stores a seed phrase or secret key.
- Transactions are signed by the user inside Freighter.
- The application is restricted to Stellar Testnet for Level 1.
