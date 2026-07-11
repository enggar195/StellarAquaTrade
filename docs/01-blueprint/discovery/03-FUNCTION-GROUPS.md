# 03-FUNCTION-GROUPS.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Function Group Summary

| Code | Function Group | Included Capabilities |
|---|---|---|
| FG-01 | Identity & Trust | Registration, company onboarding, team membership, verification status, roles, wallet linking. |
| FG-02 | Fish Supply | Species references, batch creation, source, quality, health context, media, availability, reservation. |
| FG-03 | Commercial Negotiation | Private catalog, RFQ, quotation, revisions, cost breakdown, policy, acceptance. |
| FG-04 | Trade Control | Trade agreement, parties, item allocation, lifecycle states, deadlines, next-action ownership. |
| FG-05 | Payment & Web3 | Freighter, balances, Testnet payment, transaction proof, future escrow, release, refund, events. |
| FG-06 | Document Assurance | Requirement matrix, upload, version, expiry, verification, access, hash proof. |
| FG-07 | Packing Operations | Allocation, fasting/treatment checks, bags, boxes, labels, evidence, QC readiness. |
| FG-08 | Logistics | Forwarder, AWB, route, segments, event timeline, delays, handover and delivery. |
| FG-09 | Arrival & Claims | Inspection window, unboxing evidence, counts, mismatch, claim, response, mediation, resolution. |
| FG-10 | Work Management | Dashboards, tasks, alerts, reminders, escalation, contextual communication. |
| FG-11 | Governance | Audit logs, configuration, user administration, monitoring, reconciliation, security. |
| FG-12 | Measurement | Trade, quality, DOA, shipment, payment, adoption, and belt-submission evidence. |

## 2. Cross-Cutting Functional Rules

- Every state-changing action records actor, company, time, previous state, new state, and source.
- Role permission is checked server-side and, for smart contracts, on-chain where applicable.
- Files have version history and access rules.
- Testnet and Mainnet are never visually ambiguous.
- Direct payment, payment evidence, and escrow are distinct concepts.
- Counts in arrival inspection must reconcile to expected quantity or require an explicit variance reason.
- Claim resolution must reconcile affected quantity and financial outcome.
- Dashboard metrics must have a user-visible definition through the `?` tooltip.
- Table exports must respect the same role and tenant filters as the visible screen.
- Empty, loading, error, permission-denied, and stale-data states are required.


## 3. Internationalization as a Cross-Cutting Function

Internationalization applies to all function groups. It covers navigation, cards, tooltips, validation, status labels, table headers, chart labels, alerts, toast messages, and accessibility labels. Technical identifiers such as wallet addresses, hashes, IDs, XLM, Stellar, and Freighter are not translated.
