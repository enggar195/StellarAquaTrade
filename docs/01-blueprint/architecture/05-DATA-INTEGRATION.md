# 05-DATA-INTEGRATION.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.
> **Scope:** Logical integration blueprint only; API vendors and regulatory connectivity are not yet confirmed.

---

## 1. Integration Context

## 1. Integration Principles

- The frontend interacts with Freighter for user authorization and signing.
- The backend stores private operational data and prepares role-safe APIs.
- The worker ingests blockchain events, sends notifications, processes media, and synchronizes external status.
- Smart contracts hold only state and value that genuinely benefit from shared execution.
- Large files remain in object storage.
- Every external integration stores source, external reference, last-sync time, and error state.

## 2. Logical Architecture

```text
Next.js Web
  ├── Freighter / Stellar SDK → Stellar Testnet / Mainnet
  └── HTTPS API → Backend
                    ├── PostgreSQL
                    ├── Object Storage
                    ├── Redis / Queue
                    └── Worker
                          ├── Stellar event ingestion
                          ├── Email / messaging
                          ├── Logistics synchronization
                          └── Media processing
```

## 3. On-Chain versus Off-Chain Boundary

| Data | Location | Reason |
|---|---|---|
| Wallet addresses and authorized parties | On-chain for contract scope | Needed for contract authorization |
| Escrow amount and asset | On-chain | Contract-controlled value |
| Trade state required for release/refund | On-chain | Prevent unilateral state manipulation |
| Selected document hash | On-chain | Tamper-evident proof |
| Full company profile | Off-chain | Private and mutable |
| Fish photos and videos | Off-chain object storage | Size and privacy |
| Health / official PDF | Off-chain | Sensitive file and access control |
| Packing and unboxing media | Off-chain | Size, retention, moderation |
| Detailed RFQ and quotation | Off-chain | Commercial confidentiality |
| Search, dashboard, analytics | Off-chain read model | Performance and reporting |
| Blockchain event projection | Off-chain database | Long-term history and application queries |

## 4. Candidate Integrations by Phase

| Integration | Initial Mode | Future Mode |
|---|---|---|
| Stellar | Freighter + Horizon/RPC | Contract events + Mainnet + reconciliation |
| Email | Transactional email | Multi-channel notification preferences |
| Logistics | Manual event entry | Forwarder or tracking API |
| Object storage | S3-compatible | Region-aware retention and lifecycle |
| Identity | Email/password | OIDC / enterprise SSO |
| Official documents | Upload and reference | Approved partner or authority link where possible |
| Analytics | Internal events | Product analytics and belt traction reporting |

## 5. Event Ingestion Requirements

The worker must eventually persist:

- network;
- contract ID;
- ledger;
- transaction hash;
- event type;
- business reference;
- decoded payload;
- ledger-close time;
- ingestion time;
- processing status;
- retry count.

The database remains a query projection. Contract state remains authoritative only for contract-controlled payment and authorization state.


## 6. Locale Data and API Boundary

- APIs return stable codes, not translated business strings.
- The frontend translates status and validation codes.
- User locale is stored on the user profile and may also be read from a pre-login cookie.
- Transaction hashes, wallet addresses, asset codes, and business IDs are never localized.
- Dates and numbers are formatted in the UI through `Intl` using the selected locale.
