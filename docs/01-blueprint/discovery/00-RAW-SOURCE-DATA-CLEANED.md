# 00-RAW-SOURCE-DATA-CLEANED.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Consolidated Product Input

### 1.1 Product Context

AquaTrade is planned as a hybrid Web3 application for cross-border ornamental fish trading. It is not intended to replace official quarantine, customs, airline, banking, or government systems. It provides a controlled collaboration and trust layer for:

- fish batch identity and commercial availability;
- buyer request, quotation, and trade agreement;
- health and compliance document references;
- packing and shipment evidence;
- arrival inspection and dead-on-arrival (DOA) claims;
- Stellar wallet transactions and, in later phases, smart-contract escrow;
- audit trails and measurable user traction.

### 1.2 Initial Problem Statements

1. Buyers cannot easily verify whether fish identity, grade, condition, and evidence are consistent before shipment.
2. Exporters need clearer payment confidence and structured proof of delivery conditions.
3. Photos, videos, health references, packing evidence, and AWB data are fragmented across chat and email.
4. DOA claims are difficult to evaluate because evidence, timestamps, policy, and quantities are not standardized.
5. Status across quotation, documents, packing, shipment, arrival, and payment is not visible in one place.
6. A Web3 implementation must have a meaningful role beyond writing a document hash to a blockchain.

### 1.3 Confirmed Product Principles

- Start with private B2B trade, not an open consumer marketplace.
- Use a hybrid Web2/Web3 architecture.
- Keep private files and operational details off-chain.
- Use user-controlled wallets; never store user secret keys or seed phrases.
- Level 1 White Belt remains deliberately small: Freighter, Testnet, XLM balance, direct XLM transaction, public deployment, public repository.
- Future escrow must be explicitly distinguished from the current direct Testnet payment.
- Official documents are referenced, stored, and verified by authorized users; AquaTrade does not issue official certificates.
- Business workflows must be validated with real exporters, importers, logistics partners, and reviewers before database design is frozen.

### 1.4 Primary End-to-End Process

```text
Exporter creates fish batch
    ↓
Buyer creates RFQ or receives a private catalog
    ↓
Exporter submits quotation
    ↓
Buyer and exporter accept trade terms
    ↓
White Belt: direct Testnet XLM payment evidence
Future: smart-contract escrow funding
    ↓
Exporter allocates fish and prepares documents
    ↓
Packing checklist, evidence, and QC
    ↓
Shipment booking, AWB, flight, and tracking events
    ↓
Buyer completes timestamped arrival inspection
    ↓
Accepted → settlement/release
Issue → DOA claim → response/mediation → refund/replacement/partial release
```

### 1.5 Product Roles

- Buyer / Importer
- Exporter
- Breeder / Supplier
- QC / Inspector
- Logistics / Freight Forwarder
- Document Verifier
- Mediator
- Finance / Approver
- Platform Administrator

### 1.6 MVP Validation Scenario

The first clickable business prototype should demonstrate one complete scenario:

```text
1 Indonesian exporter
1 overseas importer
1 fish batch
1 RFQ
1 quotation
1 trade order
1 document checklist
1 packing checklist
1 shipment
1 arrival inspection
1 optional DOA claim
1 Testnet payment record
```

### 1.7 Known Assumptions to Validate

| Area | Current Assumption | Validation Needed |
|---|---|---|
| Commercial unit | Fish are sold by batch or batch allocation | Validate individual-fish versus batch practices by species |
| Reservation | A batch may be partially reserved | Validate when stock becomes unavailable to other buyers |
| DOA window | Inspection window is configured per trade | Validate common windows by route and species |
| Evidence | Timestamped unboxing photo/video is acceptable evidence | Validate required angle, duration, and file format |
| Refund | Partial refund and replacement are both possible | Validate which is more common and how value is calculated |
| Documents | Requirements depend on route and trade | Validate document matrix with domain specialists |
| Shipment events | Initial version may use manual updates | Validate accessible APIs from logistics partners |
| Payment | White Belt uses Testnet XLM direct payment | Validate future asset, anchor, compliance, and settlement model |
| Mediator | Platform admin can mediate MVP disputes | Validate neutral third-party requirements |
| Language | Global UI starts in English | Validate need for Indonesian, Japanese, Chinese, or other localization |

### 1.8 White Belt Requirements Preserved

- Freighter setup and Stellar Testnet.
- Wallet connect and app-side disconnect.
- Fetch and display native XLM balance.
- Send a native XLM transaction on Testnet.
- Display success/failure feedback and transaction hash.
- Public GitHub repository.
- Public deployed application.
- README with description, local setup, and required screenshots.
- No backend, worker, database, or smart contract is required to complete Level 1.

### 1.9 Design Instruction from Product Owner

The design output must use an enterprise glassmorphism theme. Each card must include a visible `?` help icon. Hover, keyboard focus, or mobile tap opens a tooltip explaining:

- what the card represents;
- how its value is calculated or sourced;
- why the user should care;
- whether the value is operational, estimated, Testnet-only, or future scope.

The design prompt must remove ambiguity for Claude by specifying exact components, charts, table columns, form fields, sample labels, sample values, actions, and state handling.


### 1.10 Confirmed Internationalization and White Belt Navigation

The following requirements are now confirmed:

- Supported UI locales: English (`en`), Bahasa Indonesia (`id`), and Simplified Chinese (`zh-CN`).
- English is the default and fallback locale.
- Language switching is available before login and in the authenticated topbar.
- User-facing text must use semantic translation keys; no hardcoded UI copy in page components.
- The current White Belt wallet, XLM balance, funding help, send transaction, and result experience is one page and one primary menu.
- Canonical route: `/test-xlm` under locale-aware routing.
- Menu labels:
  - English: `Test XLM`
  - Indonesia: `Uji XLM`
  - Simplified Chinese: `XLM 测试`
- `Test XML` is not used because the Stellar native asset code is XLM.
- Wallet, balance, payment, and transaction are sections inside the Test XLM page during White Belt, not separate top-level menus.


### 1.10 Current Implementation Guardrails

- The public White Belt route is `/{locale}/test-xlm`.
- Login is a future product design prototype and is not required for Level 1.
- Test XLM supports positive amounts with at most seven decimal places.
- Testnet funding assistance is never shown on Mainnet.
- Payment Summary is future business workflow and does not duplicate the Test XLM send form.
