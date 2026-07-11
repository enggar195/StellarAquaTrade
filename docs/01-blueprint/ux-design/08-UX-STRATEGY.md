# 08-UX-STRATEGY.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. UX Vision

> **A calm, transparent cross-border operations workspace that makes risk, responsibility, and evidence obvious without making users understand blockchain internals.**

## 2. User Experience Principles

1. **Action first.** Dashboards answer “What must I do today?”
2. **State clarity.** Every trade, document, shipment, and claim has an explicit state and next owner.
3. **Evidence in context.** Photos, videos, files, and transaction hashes appear beside the decision they support.
4. **Web3 without jargon.** Users see wallet, network, signature, and transaction status; they do not see protocol complexity.
5. **Trust through explanation.** Every card includes a `?` tooltip.
6. **Mobile where work happens.** Packing and arrival inspection are mobile-first.
7. **Desktop where comparison matters.** RFQ, quotation, document review, and dashboards favor wide layouts.
8. **No hidden calculation.** Totals, fees, readiness, and claim values expose formulas or source data.
9. **No false authority.** AquaTrade differentiates platform verification from official certification.
10. **Accessible glass.** Glassmorphism is controlled by contrast, reduced transparency, solid fallbacks, and keyboard-accessible tooltips.

## 3. Primary Navigation by Role

### Buyer

Dashboard · RFQs · Quotations · Trades · Shipments · Claims · Test XLM · Notifications

### Exporter

Dashboard · Fish Batches · Catalog · RFQs · Quotations · Trades · Packing · Shipments · Claims · Test XLM

### Operations / Admin

Operations Dashboard · Companies · Documents · Shipments · Claims · Configuration · Monitoring

## 4. Responsive Strategy

| Context | Priority |
|---|---|
| Desktop ≥1280px | Analytics, table comparison, quotation, document review |
| Tablet 768–1279px | Operational review, forms, shipment updates |
| Mobile <768px | Test XLM actions, packing evidence, arrival inspection, claim evidence |

## 5. Tooltip Standard

Every card header contains:

```text
Card title                              [?]
```

Interaction:

- Hover opens tooltip after 150–250 ms.
- Keyboard focus opens the same tooltip.
- Mobile tap toggles tooltip; tapping outside closes it.
- `Escape` closes it.
- Icon button has `aria-label="Explain <card title>"`.
- Tooltip is rendered in a portal to avoid clipping by glass cards.
- Maximum width 320 px.
- Tooltip content is 1–3 short paragraphs:
  1. what the card means;
  2. how data is sourced/calculated;
  3. what action the user should consider.

## 6. Validation Objectives

The prototype is successful when users can answer:

- What is the current trade stage?
- What do I need to do next?
- What evidence is missing?
- What is Testnet-only?
- When can I submit a claim?
- Who decides a dispute?
- Which information is official, declared, or platform-verified?


## 7. Multilingual UX Strategy

- English, Indonesian, and Simplified Chinese are first-class UI languages.
- Do not rely on fixed-width English labels.
- Indonesian strings may be significantly longer; buttons and cards must expand safely.
- Chinese does not use automatic uppercase styling or excessive letter spacing.
- The language switcher appears on login and the authenticated topbar.
- Use language names, not flags alone: `English`, `Indonesia`, `简体中文`.
- The selected route and safe form state should be retained after a language change.
