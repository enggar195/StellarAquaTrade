# 20-DECISION-LOG.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Current Decisions

| ID | Decision | Rationale | Status |
|---|---|---|---|
| DEC-001 | AquaTrade is a private B2B workflow before becoming a public marketplace | Reduces scope and makes real-user validation easier | Accepted |
| DEC-002 | White Belt uses direct native-XLM Testnet payment | Matches Level 1 requirements exactly | Accepted |
| DEC-003 | Direct payment must not be called escrow | Prevents misleading product and reviewer claims | Accepted |
| DEC-004 | Glassmorphism uses enterprise readability guardrails | Meets visual preference without sacrificing data clarity | Accepted |
| DEC-005 | Every card has a visible `?` tooltip | Product owner requirement and supports explainability | Accepted |
| DEC-006 | Initial design set is 25 pages | Sufficient to validate end-to-end workflow without designing all 153 pages | Accepted |
| DEC-007 | Full documents and media remain off-chain | Privacy, size, access control, and cost | Accepted |
| DEC-008 | Database design follows validation | Avoids encoding unvalidated assumptions | Accepted |
| DEC-009 | UI supports English, Bahasa Indonesia, and Simplified Chinese | Cross-border usage and confirmed product requirement | Accepted |
| DEC-011 | English is default and fallback locale | Stable cross-border baseline | Accepted |
| DEC-012 | White Belt uses one Test XLM menu/page | Keeps Level 1 focused and prevents redundant navigation | Accepted |
| DEC-013 | Atomic Design and Storybook are mandatory for reusable frontend components | Reuse, consistency, and visual regression readiness | Accepted |
| DEC-010 | Exporter may act as QC in MVP | Reduces initial role complexity | Assumption to validate |

| DEC-014 | Test XLM is publicly accessible without application login | Prevents out-of-scope authentication from blocking White Belt review | Accepted |
| DEC-015 | Login is a future business-MVP design prototype during White Belt | Preserves requested UI work without inventing backend authentication | Accepted |
| DEC-016 | AquaTrade is the platform; AquaTrade Pay is the White Belt payment experience | Removes product-naming ambiguity | Accepted |
| DEC-017 | Payment Summary must not duplicate Test XLM | Preserves one White Belt payment page/menu | Accepted |
