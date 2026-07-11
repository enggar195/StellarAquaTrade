# 07-GLOSSARY.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Product and Domain Terms

| Term | Definition |
|---|---|
| AquaTrade | The long-term cross-border ornamental-fish trade platform. |
| AquaTrade Pay | The White Belt-facing public Testnet payment learning experience. |
| AquaTrade company verification | A platform-level review status; not government certification. |
| Batch | A commercially managed group of fish sharing declared source and product attributes. |
| Batch passport | A shareable summary of batch identity, availability, and selected verification signals. |
| DOA | Dead on arrival; fish recorded dead during the agreed arrival-inspection window. |
| Escrow | Funds controlled by a smart contract and released or refunded according to authorized state transitions. |
| Freighter | A Stellar wallet used to authorize and sign transactions. |
| Mainnet | The production Stellar network where assets may have real value. |
| RFQ | Request for quotation created by a buyer. |
| Testnet | A Stellar testing network; Testnet XLM has no monetary value. |
| Trade order | The accepted commercial agreement produced from an RFQ and quotation. |
| Document hash | A cryptographic fingerprint used to detect whether a file version changed. |
| Arrival inspection window | The agreed period after delivery in which the buyer must submit inspection evidence. |
| Direct payment | A transfer from one wallet to another; it is not the same as escrow. |
| Claim resolution | The final agreed or mediated outcome: release, partial release, refund, replacement, or no action. |

## 2. UI Naming Rules

- Use **Buyer / Importer** in onboarding, then use **Buyer** in compact UI.
- Use **Exporter** for the company selling and shipping fish.
- Use **Fish Batch**, not generic `Product`.
- Use **Arrival Inspection**, not `Receiving Form`.
- Use **DOA Claim**, not generic `Complaint`.
- Use **Direct Testnet Payment** until escrow is genuinely implemented.
- Use **Document Reference** where AquaTrade does not validate the issuing authority.


## 3. Language and Test XLM Terms

| Term | Definition |
|---|---|
| Test XLM | The single White Belt page combining Freighter connection, Testnet balance, XLM transfer, result, and transaction proof. |
| XLM | The native asset code of Stellar. Do not write XML. |
| `zh-CN` | Simplified Chinese locale used by AquaTrade. |
| Locale-aware route | A route prefixed or resolved by selected language, such as `/en/test-xlm` or `/zh-CN/test-xlm`. |
