# 17-DEVELOPER-HANDOFF.md
## AquaTrade Frontend Delivery Handoff

> **Repository:** `aquatrade-fe`  
> **Framework:** Next.js + TypeScript  
> **Design:** Oceanic Enterprise Glassmorphism  
> **Locales:** English, Bahasa Indonesia, Simplified Chinese  
> **Current White Belt Page:** Test XLM

---

## 1. Mandatory Development Approach

Build shared UI using Atomic Design:

```text
src/components/
├── atoms/
├── molecules/
├── organisms/
├── templates/
└── pages/
```

A component that appears more than once, or is likely to be reused, must not remain embedded as page-specific JSX.

## 2. Storybook Requirement

Storybook is required for:

- every atom;
- every reusable molecule;
- important reusable organisms;
- reusable templates where practical.

Language-sensitive components must include:

- `English`
- `Indonesian`
- `SimplifiedChinese`
- `LongIndonesianText`
- `ChineseTooltip`

Recommended quality command:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build-storybook
pnpm build
```

## 3. Login Page Detailed Design

### 3.1 Layout

Create a full-height single-viewport split screen:

- left showcase: approximately 55%;
- right interactive area: approximately 45%;
- no hard divider;
- on mobile, interactive form appears first and showcase becomes a banner below.

### 3.2 Left Showcase

The left side is full bleed and must not be placed inside a framed card.

Top:

- AquaTrade logo;
- product name `AquaTrade Pay`;
- subtitle `STELLAR TESTNET · WHITE BELT L1`.

Main illustration:

- a majestic container ship at a working sea port;
- large hull and stacked colorful containers;
- ship bridge, funnel with subtle smoke, mast, flag, and radar;
- recognizable container cranes / CC actively operating;
- visible RTG equipment in the container yard;
- a cargo aircraft flying in the sky;
- moon, stars, sea waves, bubbles, and limited underwater fish or whale silhouettes;
- premium night-port atmosphere, not cartoonish;
- subtle organic bobbing, wave, smoke, and bubble motion;
- decorative illustration hidden from assistive technology;
- reduced or disabled animation under `prefers-reduced-motion`.

Bottom:

- value proposition headline;
- one supporting paragraph;
- feature chips: Fish Batch Passport, RFQ & Quotation, Shipment Tracking, Arrival Inspection, DOA Claim, Test XLM.

Use top and bottom dark scrims so overlaid text remains readable.

### 3.3 Right Interactive Area

- vertically centered;
- maximum content width around 500 px;
- eyebrow, large gradient heading, subtitle;
- glass login card;
- glass Testnet/program information card;
- compact trust note card;
- every card has a visible top-right `?` tooltip.

Login form fields:

- Work email;
- Password;
- Show password;
- Remember me;
- Forgot password;
- Sign in;
- Create account.

The language switcher appears near the right-column header and shows:

```text
English
Bahasa Indonesia
简体中文
```

Wallet connection is not performed in the login form. For White Belt, Test XLM is public and does not require application authentication. The login page is a future business-MVP design/component prototype until backend authentication is activated.

### 3.4 Visual System

- navy range `#04101a` to `#0a1c2e`;
- cyan `#22d3ee`;
- soft aqua `#7de3f4`;
- indigo `#6366f1`;
- Inter typography;
- white-to-soft-gray heading gradient;
- subtle global grid, cyan/indigo radial glow, and bubbles;
- soft aqua-to-indigo seam between columns;
- remove seam on stacked mobile layout.

## 4. Test XLM Page

Use one route and one primary menu:

```text
/{locale}/test-xlm
```

Compose the page from reusable organisms:

```text
TestXlmPage
├── TestnetNoticeBanner
├── WalletConnectionCard
├── BalanceCard
├── SendTestXlmCard
├── TransactionResultCard
└── RecentTestTransactionsCard
```

Localized navigation:

| Locale | Label |
|---|---|
| `en` | Test XLM |
| `id` | Uji XLM |
| `zh-CN` | XLM 测试 |

Do not create separate White Belt top-level menus for Wallet, Balance, Payment, or Transaction.

## 5. Claude Implementation Command

```text
Read the complete AquaTrade 01-blueprint documentation in the documented order.
Use Atomic Design and reuse existing components.
Create Storybook stories for all new atoms and reusable molecules, and for important reusable organisms.
Support en, id, and zh-CN through semantic translation keys.
Do not hardcode user-facing text.
Implement only the requested page and do not invent business rules.
Every card must include the visible ? tooltip control.
For White Belt, use one page/menu named Test XLM containing wallet connection, balance, send-XLM flow, transaction feedback, and hash.
Run lint, typecheck, tests, Storybook build, and production build before completion.
```


## 6. Active-Scope Safety

- Do not implement fake login security or persist credentials without backend scope.
- Do not redirect public White Belt reviewers from Test XLM to Login.
- Validate amount as positive with at most seven decimal places.
- Friendbot funding is Testnet-only and must never appear as a Mainnet action.
