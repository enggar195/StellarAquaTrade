# AquaTrade Documentation

## Current Stage

AquaTrade is currently implementing Stellar White Belt Level 1. The default landing route is `/{locale}/login` (a frontend UI prototype — no real authentication). The active public White Belt application page is `/{locale}/test-xlm`, which remains publicly accessible and is not gated behind Login.

## White Belt L1 Phase

**White Belt — Level 1** is the first rank of the Stellar Journey. The goal of
this phase is to ship a **working, public Stellar Testnet dApp** that connects a
wallet, reads a balance, and sends a payment — with no backend.

**Delivered in this phase**

- Freighter detection, connect, and app-side disconnect.
- Stellar **Testnet** network guard (wrong-network users are told to switch).
- Native **XLM** balance from Horizon, with Friendbot Testnet funding.
- Direct **Testnet XLM** payment: validation → Freighter signing → submission.
- Success/failure feedback with the transaction hash and an explorer link.
- Locale-aware routing for `en`, `id`, `zh-CN` with a reusable language switcher.
- The functional **Test XLM** page (`/{locale}/test-xlm`) and a **Login** UI
  prototype (`/{locale}/login`) built with Atomic Design + Storybook.

**Explicitly out of scope for L1** (future belts): backend API, database,
worker, real authentication/session, smart-contract escrow, mainnet, and the
full export–import trade workflow. The Login page is a UI prototype only — it
performs no real authentication and stores no credentials.

**Quality gates for the phase**

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook
```

## Phase Branch Strategy

Each Stellar Journey phase lives on its **own branch** so belts can progress
independently and be reviewed in isolation:

| Phase | Branch |
|---|---|
| White Belt — Level 1 | `WHITE-BELT-L1` |
| Future belts | one branch per phase (e.g. `WHITE-BELT-L2`, `YELLOW-BELT-L1`, …) |

The current phase's work is committed to `WHITE-BELT-L1`. Later phases branch
from the completed phase so we can continue belt by belt without disturbing
earlier deliverables.

## Folder Roles

```text
docs/
├── 00-white-belt/   # current binding scope and acceptance criteria
└── 01-blueprint/    # future product, UX, design, and implementation guidance
```

## Reading Order

1. `00-white-belt/00-LEVEL-1-SCOPE.md`
2. `00-white-belt/01-ACCEPTANCE-CRITERIA.md`
3. `01-blueprint/CLAUDE-START-HERE.md`
4. `01-blueprint/README.md` and its prescribed order
5. `00-white-belt/02-ROADMAP.md`

## Precedence

White Belt scope and acceptance criteria override future blueprint features. Backend, database, worker, authentication, smart contract, escrow, shipment, and claims remain future scope unless explicitly activated.

## Current Navigation

| Locale | Route | Label |
|---|---|---|
| English | `/en/test-xlm` | Test XLM |
| Bahasa Indonesia | `/id/test-xlm` | Uji XLM |
| Simplified Chinese | `/zh-CN/test-xlm` | XLM 测试 |

The Test XLM page is public and must not require application login.
