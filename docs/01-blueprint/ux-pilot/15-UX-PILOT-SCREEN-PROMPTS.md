# 15-UX-PILOT-SCREEN-PROMPTS.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Usage

Each prompt below is intentionally explicit. Paste the master context from `14-UX-PILOT-MASTER-PROMPT.md` before the selected screen block, or instruct Claude Code to read both files.

---

## PROMPT 01 — Login

**Page Code:** `AQT-PG-01-06`  
**Target Role:** All users  
**Primary Action:** `Sign in`

```text
=== SCREEN-SPECIFIC REQUIREMENT: LOGIN ===

Page name: Login
Module: Access
Target role: All users
Purpose: Design the future company-authentication experience while keeping the current White Belt Test XLM route public.
Primary action: Sign in — future business-MVP behavior

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Welcome Back”
   Example value: “Secure access to AquaTrade”
   Tooltip: “Explains that this form belongs to future business authentication. White Belt Test XLM remains publicly accessible and wallet connection happens on that page.”
2. Card: “Platform Security”
   Example value: “Protected company access”
   Tooltip: “Explains the security measures visible to users, such as encrypted transport and session controls.”

REQUIRED COMPONENTS:
- Split-screen auth layout
- Email field
- Password field
- Show password toggle
- Remember me checkbox
- Forgot password link
- Sign in button
- Create account link
- Product value panel

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- No table required.

FORM FIELDS:
- Work email — email, required
- Password — password, required, minimum 8 characters

SAMPLE CONTENT:
- buyer@oceanimport.jp / ••••••••

REQUIRED STATES:
- Default
- Invalid credentials
- Account suspended
- Loading
- Success redirect

SCREEN-SPECIFIC UX NOTES:
Do not show wallet controls on this page. Follow the working-port illustration requirements in handoff/17-DEVELOPER-HANDOFF.md. During White Belt, do not implement fake authentication, store credentials, or gate the public Test XLM route.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 02 — Registration

**Page Code:** `AQT-PG-01-07`  
**Target Role:** Buyer, Exporter, Breeder  
**Primary Action:** `Create account`

```text
=== SCREEN-SPECIFIC REQUIREMENT: REGISTRATION ===

Page name: Registration
Module: Access
Target role: Buyer, Exporter, Breeder
Purpose: Create an initial user account and choose the intended company role without forcing full verification at once.
Primary action: Create account

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Account Type”
   Example value: “Buyer / Importer or Exporter / Breeder”
   Tooltip: “Explains how the selected account type changes onboarding questions and dashboard access.”
2. Card: “What happens next?”
   Example value: “Verify email → Company onboarding → Wallet connection”
   Tooltip: “Sets expectations for the next steps after account creation.”

REQUIRED COMPONENTS:
- Four-step progress indicator
- Role cards
- Personal information form
- Email verification notice
- Terms acceptance
- Password strength meter

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- No table required.

FORM FIELDS:
- Account type — card selector, required
- Full name — text, required
- Work email — email, required
- Phone / WhatsApp — international phone
- Country — searchable select
- Password — required
- Confirm password — required
- Accept terms — checkbox required

SAMPLE CONTENT:
- Aiko Tanaka, buyer@oceanimport.jp, Japan

REQUIRED STATES:
- Default
- Email already registered
- Weak password
- Submission loading
- Email verification sent

SCREEN-SPECIFIC UX NOTES:
Role cards must include concise examples and a (?) tooltip. Keep the registration flow short; company data belongs to onboarding.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 03 — Company Onboarding Wizard

**Page Code:** `AQT-PG-02-01`  
**Target Role:** Company owner / invited administrator  
**Primary Action:** `Submit for verification`

```text
=== SCREEN-SPECIFIC REQUIREMENT: COMPANY ONBOARDING WIZARD ===

Page name: Company Onboarding Wizard
Module: Company & Verification
Target role: Company owner / invited administrator
Purpose: Collect the minimum company, trade, route, and verification data needed to operate safely.
Primary action: Submit for verification

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Profile Completion”
   Example value: “72% complete”
   Tooltip: “Shows how much required onboarding information is complete and which step remains.”
2. Card: “Verification Readiness”
   Example value: “3 of 4 checks ready”
   Tooltip: “Explains whether company identity, contact, trade role, and documents are ready for review.”
3. Card: “Expected Review Time”
   Example value: “1–3 business days”
   Tooltip: “Sets a transparent expectation; this is a product estimate, not a regulatory guarantee.”

REQUIRED COMPONENTS:
- Five-step wizard
- Company identity form
- Trade role and markets
- Address and contacts
- Document upload
- Review summary
- Autosave indicator

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Uploaded document | Type | File name | Expiry | Status | Action

FORM FIELDS:
- Legal company name
- Trading name
- Company type
- Country
- Registration number
- Tax identifier optional
- Address
- Primary contact
- Trade role
- Export/import routes
- Primary airports
- Website
- Business document upload
- Terms declaration

SAMPLE CONTENT:
- PT Nusantara Aquatic Export — Indonesia — Exporter — CGK to NRT/SIN

REQUIRED STATES:
- Draft
- Incomplete required field
- Uploading
- Ready to submit
- Under review
- Revision requested

SCREEN-SPECIFIC UX NOTES:
Do not claim official verification by a government authority. Label the platform status as AquaTrade company verification.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 04 — Buyer Dashboard

**Page Code:** `AQT-PG-04-01`  
**Target Role:** Buyer / Importer  
**Primary Action:** `Create RFQ`

```text
=== SCREEN-SPECIFIC REQUIREMENT: BUYER DASHBOARD ===

Page name: Buyer Dashboard
Module: Dashboard
Target role: Buyer / Importer
Purpose: Show the buyer what requires attention today: quotations, funding, shipments, arrival inspection, and claims.
Primary action: Create RFQ

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Active RFQs”
   Example value: “4”
   Tooltip: “Counts RFQs that are open, negotiating, or awaiting quotation selection.”
2. Card: “Awaiting Funding”
   Example value: “2 trades”
   Tooltip: “Counts accepted trades that cannot move to preparation until the agreed payment step is completed.”
3. Card: “Shipments In Transit”
   Example value: “3”
   Tooltip: “Counts active shipments that have departed but are not yet delivered.”
4. Card: “Arrival Inspection Due”
   Example value: “1 due in 3h”
   Tooltip: “Highlights deliveries inside the inspection window; missing the deadline may affect claim eligibility.”
5. Card: “Open Claims”
   Example value: “1”
   Tooltip: “Counts submitted claims not yet resolved.”
6. Card: “Trade Spend”
   Example value: “12,450 XLM test equivalent”
   Tooltip: “Shows trade value for the selected period; White Belt data must be labeled Testnet where applicable.”

REQUIRED COMPONENTS:
- Role greeting
- Critical action banner
- Six KPI cards
- Trade activity trend chart
- Shipment status donut
- Action-required table
- Recent transaction list

CHARTS:
- Line chart — Trade activity by month: RFQs [3,5,4,7,6,8], confirmed trades [1,2,2,3,3,4]
- Donut chart — Shipment composition: Preparing 2, In transit 3, Arrived 1, Delayed 1

TABLE / LIST:
- Exact columns: Priority | Reference | Exporter | Required action | Deadline | Status | Action

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- TRD-2026-0042 — PT Nusantara Aquatic Export — Complete arrival inspection before 14:30 JST

REQUIRED STATES:
- Default
- No active trades
- Partial data loading
- Network warning
- Critical deadline

SCREEN-SPECIFIC UX NOTES:
All dashboard cards have top-right (?) icons. Do not show generic charts; each chart must answer a decision question.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 05 — Exporter Dashboard

**Page Code:** `AQT-PG-04-02`  
**Target Role:** Exporter / Breeder  
**Primary Action:** `Create Fish Batch`

```text
=== SCREEN-SPECIFIC REQUIREMENT: EXPORTER DASHBOARD ===

Page name: Exporter Dashboard
Module: Dashboard
Target role: Exporter / Breeder
Purpose: Prioritize buyer requests, batch availability, preparation work, documents, shipment readiness, and payment status.
Primary action: Create Fish Batch

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Available Batches”
   Example value: “18”
   Tooltip: “Counts verified or sellable batches with remaining quantity.”
2. Card: “New RFQs”
   Example value: “6”
   Tooltip: “Counts buyer requests that have not yet received a quotation.”
3. Card: “Orders in Preparation”
   Example value: “3”
   Tooltip: “Counts funded or confirmed trades being prepared for shipment.”
4. Card: “Documents Missing”
   Example value: “2”
   Tooltip: “Counts trade documents blocking shipment readiness.”
5. Card: “Funds Secured”
   Example value: “8,500 XLM test”
   Tooltip: “Shows test funds linked to active trades; never imply fiat settlement in White Belt.”
6. Card: “Claims Awaiting Response”
   Example value: “1”
   Tooltip: “Counts buyer claims needing exporter response before the deadline.”

REQUIRED COMPONENTS:
- Operations alert banner
- Six KPI cards
- Available quantity chart
- Preparation workload chart
- RFQ response table
- Upcoming shipment table

CHARTS:
- Horizontal bar — Available quantity by species: Betta 320, Guppy 480, Discus 85, Koi 140, Arowana 12
- Stacked bar — Orders by preparation stage: Allocation 2, Health docs 1, Packing 2, Ready 1

TABLE / LIST:
- Exact columns: RFQ ID | Buyer | Destination | Requested fish | Qty | Due date | Status | Action

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- RFQ-2026-0061 — Ocean Import Co. — Tokyo — Betta HMPK — 120 pcs

REQUIRED STATES:
- Default
- No new RFQ
- Document blocker
- Shipment delay
- Loading

SCREEN-SPECIFIC UX NOTES:
Use export operations terminology. Keep revenue analytics secondary to fulfillment actions.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 06 — Test XLM

**Page Code:** `AQT-PG-03-01`  
**Target Role:** Public White Belt participant; future Buyer, Exporter, Finance  
**Primary Action:** `Connect Freighter / Send Test XLM`

```text
=== SCREEN-SPECIFIC REQUIREMENT: TEST XLM ===

Page name: Test XLM
Module: Stellar Wallet
Target role: Public White Belt participant; future Buyer, Exporter, Finance
Purpose: Connect Freighter, verify Testnet, show XLM balance, and provide a safe Level 1 transaction entry point.
Primary action: Connect Freighter / Send Test XLM

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Connected Wallet”
   Example value: “GABC...7XQ2”
   Tooltip: “Shows the public Stellar address currently authorized in this browser. AquaTrade never asks for the secret key.”
2. Card: “XLM Balance”
   Example value: “9,845.2500000 XLM”
   Tooltip: “Shows native XLM available on the selected network.”
3. Card: “Network”
   Example value: “Stellar Testnet”
   Tooltip: “Confirms transactions use Testnet funds with no real monetary value during White Belt.”
4. Card: “Latest Transaction”
   Example value: “Successful · 3 min ago”
   Tooltip: “Shows the last transaction submitted from AquaTrade and its confirmation status.”

REQUIRED COMPONENTS:
- Network badge
- Connect/disconnect control
- Address copy button
- Refresh balance
- Fund Testnet wallet
- Send payment form
- Transaction result card
- Explorer link

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Time | Type | Recipient | Amount | Network | Status | Transaction hash

FORM FIELDS:
- Recipient Stellar address — G..., required and valid
- Amount — decimal, >0, maximum 7 decimal places
- Trade reference — optional memo, max 28 bytes if used as text memo

SAMPLE CONTENT:
- Send 1.2500000 XLM to GB...N4 for FISH-TRD-001

REQUIRED STATES:
- Freighter not installed
- Disconnected
- Connecting
- Wrong network
- Account not funded
- Testnet funding in progress
- Testnet funding succeeded
- Testnet funding failed
- Insufficient spendable balance
- Awaiting signature
- Success
- User rejected
- Submission failed

SCREEN-SPECIFIC UX NOTES:
This page is the White Belt source of truth. Never store or request seed phrases. Clearly label direct payment versus future escrow.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 07 — Fish Batch List

**Page Code:** `AQT-PG-06-01`  
**Target Role:** Exporter, Breeder, QC  
**Primary Action:** `Create Fish Batch`

```text
=== SCREEN-SPECIFIC REQUIREMENT: FISH BATCH LIST ===

Page name: Fish Batch List
Module: Fish Batch Passport
Target role: Exporter, Breeder, QC
Purpose: Manage sellable fish inventory as batches with availability, health, QC, and reservation status.
Primary action: Create Fish Batch

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Total Active Batches”
   Example value: “24”
   Tooltip: “Counts non-archived batches currently managed by the company.”
2. Card: “Available Quantity”
   Example value: “1,037 fish”
   Tooltip: “Sum of remaining sellable quantity across available and partially reserved batches.”
3. Card: “QC Pending”
   Example value: “3”
   Tooltip: “Counts batches that cannot be shared until internal QC is completed.”
4. Card: “Reserved”
   Example value: “5 batches”
   Tooltip: “Counts batches fully or partly reserved by confirmed trades.”

REQUIRED COMPONENTS:
- KPI row
- Filter bar
- View toggle table/cards
- Batch table
- Quick preview drawer
- Bulk archive action

CHARTS:
- Donut — Batch status: Available 12, Partially reserved 4, Reserved 5, QC pending 3

TABLE / LIST:
- Exact columns: Batch ID | Species / Variety | Grade | Size | Available / Initial Qty | Origin | QC | Availability | Updated | Action

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- BAT-IDN-260701-014 — Betta splendens HMPK Super Red — A — 4.5–5 cm — 88/120

REQUIRED STATES:
- Default
- No batches
- Filtered empty
- QC blocked
- Archive confirmation

SCREEN-SPECIFIC UX NOTES:
Batch IDs must be human-readable. Row click opens a detail drawer with media, health status, and reservation summary.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 08 — Create Fish Batch

**Page Code:** `AQT-PG-06-02`  
**Target Role:** Exporter, Breeder  
**Primary Action:** `Save & Submit for QC`

```text
=== SCREEN-SPECIFIC REQUIREMENT: CREATE FISH BATCH ===

Page name: Create Fish Batch
Module: Fish Batch Passport
Target role: Exporter, Breeder
Purpose: Create a standardized batch record with commercial, origin, health, media, and availability information.
Primary action: Save & Submit for QC

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Batch Identity”
   Example value: “Species, variety, origin, and source”
   Tooltip: “Explains the immutable reference fields used to identify the batch.”
2. Card: “Commercial Profile”
   Example value: “Grade, size, quantity, and visibility”
   Tooltip: “Explains the information buyers use to assess suitability.”
3. Card: “Health & Husbandry”
   Example value: “Recent treatment and water-condition context”
   Tooltip: “Provides operational context; it is not a substitute for an official health certificate.”
4. Card: “Media Evidence”
   Example value: “Photos and short videos”
   Tooltip: “Helps buyers verify representative appearance before quotation.”

REQUIRED COMPONENTS:
- Four-section stepper
- Autosave
- Media uploader
- Quantity calculator
- Preview panel
- Submit confirmation

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- No table required.

FORM FIELDS:
- Source breeder
- Species
- Scientific name read-only
- Variety/strain
- Batch date
- Country/region of origin
- Initial quantity
- Available quantity
- Grade
- Size range
- Gender composition
- Age group
- Health condition
- Last treatment
- Feeding notes
- Water temperature
- pH
- TDS optional
- Photo upload
- Video upload
- Visibility

SAMPLE CONTENT:
- Betta HMPK Super Red, Grade A, 120 pcs, 4.5–5 cm, Kediri, Indonesia

REQUIRED STATES:
- Draft
- Validation error
- Uploading media
- QC submission
- Saved

SCREEN-SPECIFIC UX NOTES:
Use progressive disclosure. Do not require every husbandry field for MVP; distinguish required, recommended, and optional.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 09 — Fish Batch Detail

**Page Code:** `AQT-PG-06-04`  
**Target Role:** Exporter, Buyer, QC  
**Primary Action:** `Share Batch / Reserve Quantity`

```text
=== SCREEN-SPECIFIC REQUIREMENT: FISH BATCH DETAIL ===

Page name: Fish Batch Detail
Module: Fish Batch Passport
Target role: Exporter, Buyer, QC
Purpose: Provide a complete operational and buyer-facing view of one batch.
Primary action: Share Batch / Reserve Quantity

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Availability”
   Example value: “88 of 120 fish available”
   Tooltip: “Shows remaining quantity after active reservations.”
2. Card: “Quality Status”
   Example value: “QC Passed”
   Tooltip: “Shows the latest internal quality review, reviewer, and date.”
3. Card: “Health Summary”
   Example value: “No active issue reported”
   Tooltip: “Summarizes recorded health and treatment information, not an official health certification.”
4. Card: “Buyer Interest”
   Example value: “3 inquiries”
   Tooltip: “Counts open inquiries or RFQs referencing this batch.”

REQUIRED COMPONENTS:
- Hero media gallery
- Batch identity header
- KPI cards
- Tabbed content
- Availability history
- Buyer inquiry list
- Action drawer

CHARTS:
- Area chart — Available quantity over 30 days: 120,120,110,100,88

TABLE / LIST:
- Exact columns: Date | Event | Quantity change | Available balance | Reference | Actor

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- BAT-IDN-260701-014 · Betta HMPK Super Red · Grade A

REQUIRED STATES:
- Available
- Partially reserved
- Reserved
- QC pending
- Suspended
- Archived

SCREEN-SPECIFIC UX NOTES:
Buyer sees only approved fields. Exporter/QC sees operational tabs and edit history.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 10 — Fish Batch Passport / QR View

**Page Code:** `AQT-PG-06-08`  
**Target Role:** Buyer, Exporter, Logistics verifier  
**Primary Action:** `Download Passport / Copy Share Link`

```text
=== SCREEN-SPECIFIC REQUIREMENT: FISH BATCH PASSPORT / QR VIEW ===

Page name: Fish Batch Passport / QR View
Module: Fish Batch Passport
Target role: Buyer, Exporter, Logistics verifier
Purpose: Present a compact, shareable, QR-accessible batch summary with verification signals.
Primary action: Download Passport / Copy Share Link

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Batch Verification”
   Example value: “Record active”
   Tooltip: “Explains that the AquaTrade batch record exists and shows its latest verified update.”
2. Card: “Document Proof”
   Example value: “2 verified references”
   Tooltip: “Counts document references whose stored hash and latest file version match.”
3. Card: “Origin”
   Example value: “Kediri, Indonesia”
   Tooltip: “Shows the declared source location and source organization.”
4. Card: “Current Trade Status”
   Example value: “Available”
   Tooltip: “Shows whether the batch is available, reserved, or sold.”

REQUIRED COMPONENTS:
- Passport header
- QR code
- Representative image
- Identity facts
- Verification timeline
- Document proof list
- Share controls

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Proof type | Reference | Issuer / uploader | Verified at | Hash status

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- Passport AQT-BAT-IDN-260701-014

REQUIRED STATES:
- Public-safe view
- Authenticated extended view
- Expired share link
- Record suspended

SCREEN-SPECIFIC UX NOTES:
Never expose private treatment details, buyer names, or full official documents on a public QR page.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 11 — RFQ List

**Page Code:** `AQT-PG-08-01`  
**Target Role:** Buyer, Exporter  
**Primary Action:** `Create RFQ`

```text
=== SCREEN-SPECIFIC REQUIREMENT: RFQ LIST ===

Page name: RFQ List
Module: RFQ
Target role: Buyer, Exporter
Purpose: Track buyer requests and exporter response obligations.
Primary action: Create RFQ

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Open RFQs”
   Example value: “8”
   Tooltip: “Counts requests still accepting or evaluating quotations.”
2. Card: “Awaiting My Response”
   Example value: “3”
   Tooltip: “For exporters, counts invited RFQs without a submitted quotation.”
3. Card: “Negotiating”
   Example value: “2”
   Tooltip: “Counts RFQs with active quotation revision or counter-offer.”
4. Card: “Closing Soon”
   Example value: “1”
   Tooltip: “Counts RFQs whose response deadline is within 24 hours.”

REQUIRED COMPONENTS:
- Role-aware KPI cards
- Status tabs
- Filter bar
- RFQ table
- RFQ preview drawer

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: RFQ ID | Buyer / Requester | Destination | Requested items | Target arrival | Response deadline | Responses | Status | Action

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- RFQ-2026-0061 — Ocean Import Co. — Tokyo NRT — 120 Betta HMPK — 2026-08-15

REQUIRED STATES:
- Buyer view
- Exporter view
- No RFQs
- Deadline warning
- Expired

SCREEN-SPECIFIC UX NOTES:
The same page changes primary action and columns based on role; do not mix buyer-private data across companies.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 12 — Create RFQ

**Page Code:** `AQT-PG-08-02`  
**Target Role:** Buyer / Importer  
**Primary Action:** `Publish RFQ`

```text
=== SCREEN-SPECIFIC REQUIREMENT: CREATE RFQ ===

Page name: Create RFQ
Module: RFQ
Target role: Buyer / Importer
Purpose: Capture buyer demand clearly enough for exporters to produce comparable quotations.
Primary action: Publish RFQ

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Trade Route”
   Example value: “Japan · NRT”
   Tooltip: “Explains destination constraints that affect documents, packing, freight, and lead time.”
2. Card: “Requested Items”
   Example value: “2 item lines”
   Tooltip: “Shows how many species or batch requirements are included.”
3. Card: “Required Documents”
   Example value: “4 selected”
   Tooltip: “Shows requested compliance or commercial document references.”
4. Card: “Response Deadline”
   Example value: “5 days”
   Tooltip: “Shows how long invited exporters have to respond.”

REQUIRED COMPONENTS:
- Three-step RFQ wizard
- Item repeater
- Route selector
- Document checklist
- Exporter invitation
- Summary review

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Item | Species / Variety | Grade | Size | Quantity | Preferred batch | Action

FORM FIELDS:
- RFQ title
- Destination country
- Destination airport
- Requested arrival date
- Response deadline
- Species
- Variety
- Preferred grade
- Size range
- Quantity
- Batch-specific toggle
- Packing request
- Required documents
- DOA policy preference
- Special notes
- Invite exporters

SAMPLE CONTENT:
- August Japan Betta Shipment — NRT — 120 HMPK Super Red + 80 Yellow Fancy

REQUIRED STATES:
- Draft
- No matching exporter
- Validation error
- Published
- Cancelled

SCREEN-SPECIFIC UX NOTES:
Provide helper text for domain terms. Allow private invitation first; public RFQ can remain future scope.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 13 — RFQ Detail

**Page Code:** `AQT-PG-08-03`  
**Target Role:** Buyer, invited Exporter  
**Primary Action:** `Submit Quotation / Compare Responses`

```text
=== SCREEN-SPECIFIC REQUIREMENT: RFQ DETAIL ===

Page name: RFQ Detail
Module: RFQ
Target role: Buyer, invited Exporter
Purpose: Provide one source of truth for requested items, route, required documents, responses, and activity.
Primary action: Submit Quotation / Compare Responses

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Response Deadline”
   Example value: “3d 6h remaining”
   Tooltip: “Shows the remaining time for exporters to submit a valid quotation.”
2. Card: “Invited Exporters”
   Example value: “5”
   Tooltip: “Counts companies invited by the buyer.”
3. Card: “Quotations Received”
   Example value: “2”
   Tooltip: “Counts valid quotation responses available to the buyer.”
4. Card: “Requested Quantity”
   Example value: “200 fish”
   Tooltip: “Sums all requested item quantities.”

REQUIRED COMPONENTS:
- RFQ header
- KPI cards
- Requested item table
- Trade route card
- Document requirement card
- Response list
- Activity timeline

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Item | Species / Variety | Grade | Size | Qty | Notes

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- RFQ-2026-0061 — August Japan Betta Shipment

REQUIRED STATES:
- Open
- Negotiating
- Accepted
- Expired
- Cancelled
- Exporter not invited

SCREEN-SPECIFIC UX NOTES:
Buyer sees all responses; each exporter sees only its own response and public RFQ details.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 14 — Create Quotation

**Page Code:** `AQT-PG-09-02`  
**Target Role:** Exporter  
**Primary Action:** `Submit Quotation`

```text
=== SCREEN-SPECIFIC REQUIREMENT: CREATE QUOTATION ===

Page name: Create Quotation
Module: Quotation
Target role: Exporter
Purpose: Build a transparent quotation that separates fish, packing, documents, freight, platform, and risk assumptions.
Primary action: Submit Quotation

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Fish Subtotal”
   Example value: “1,680 XLM test equivalent”
   Tooltip: “Shows the subtotal of item unit prices before service and logistics charges.”
2. Card: “Estimated Freight”
   Example value: “420 XLM test equivalent”
   Tooltip: “Shows the exporter-entered freight estimate and assumptions.”
3. Card: “Total Quote”
   Example value: “2,300 XLM test equivalent”
   Tooltip: “Shows the calculated total. During Testnet, all payment values must be labeled test values.”
4. Card: “Quote Validity”
   Example value: “Valid for 5 days”
   Tooltip: “Shows the deadline before the quotation requires revision.”

REQUIRED COMPONENTS:
- RFQ summary
- Quotation item editor
- Cost breakdown
- Shipment estimate
- Policy section
- Live total sidebar
- Preview

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Item | Requested Qty | Offered Qty | Unit price | Subtotal | Batch source | Action

FORM FIELDS:
- Unit price per item
- Available quantity
- Substitution rule
- Packing cost
- Health/document cost
- Freight estimate
- Insurance optional
- Platform fee display
- Currency/asset
- Quote expiry
- Estimated shipment date
- Arrival window
- DOA policy
- Payment terms
- Notes

SAMPLE CONTENT:
- 120 Betta HMPK × 9 XLM + services and freight

REQUIRED STATES:
- Draft
- Quantity unavailable
- Expired RFQ
- Calculation error
- Submitted

SCREEN-SPECIFIC UX NOTES:
Calculations must be deterministic and visible. Do not hide fees. Testnet values are prototypes, not commercial exchange-rate claims.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 15 — Quotation Detail

**Page Code:** `AQT-PG-09-03`  
**Target Role:** Buyer, Exporter  
**Primary Action:** `Accept Quotation / Revise`

```text
=== SCREEN-SPECIFIC REQUIREMENT: QUOTATION DETAIL ===

Page name: Quotation Detail
Module: Quotation
Target role: Buyer, Exporter
Purpose: Review a complete commercial offer, compare assumptions, negotiate revisions, and accept a quotation.
Primary action: Accept Quotation / Revise

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Quoted Total”
   Example value: “2,300 XLM test equivalent”
   Tooltip: “Shows the complete quotation total and selected payment asset.”
2. Card: “Estimated Arrival”
   Example value: “15 Aug 2026”
   Tooltip: “Shows the exporter's proposed arrival date based on current assumptions.”
3. Card: “DOA Coverage”
   Example value: “Up to 10% with evidence”
   Tooltip: “Summarizes the proposed claim policy; full policy remains visible below.”
4. Card: “Validity”
   Example value: “Expires in 3 days”
   Tooltip: “Shows how long the buyer can accept this quotation.”

REQUIRED COMPONENTS:
- Quotation header
- Cost summary cards
- Item table
- Cost breakdown waterfall
- Policy cards
- Revision comparison
- Action panel

CHARTS:
- Waterfall chart — Fish 1,680 + Packing 120 + Documents 80 + Freight 420 + Platform 0 = 2,300

TABLE / LIST:
- Exact columns: Item | Batch | Offered Qty | Unit price | Subtotal | Availability

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- QUO-2026-0048 from PT Nusantara Aquatic Export

REQUIRED STATES:
- Submitted
- Counter-offer
- Revised
- Accepted
- Rejected
- Expired

SCREEN-SPECIFIC UX NOTES:
Clearly differentiate quoted data, buyer counter-offer, and accepted terms.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 16 — Trade Order List

**Page Code:** `AQT-PG-10-01`  
**Target Role:** Buyer, Exporter, Operations  
**Primary Action:** `Open Trade`

```text
=== SCREEN-SPECIFIC REQUIREMENT: TRADE ORDER LIST ===

Page name: Trade Order List
Module: Trade Order
Target role: Buyer, Exporter, Operations
Purpose: Track confirmed trades by lifecycle stage, risk, and next required action.
Primary action: Open Trade

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Active Trades”
   Example value: “7”
   Tooltip: “Counts non-completed, non-cancelled trades.”
2. Card: “Awaiting Funding”
   Example value: “2”
   Tooltip: “Counts trades accepted by both parties but not yet funded.”
3. Card: “Preparing Shipment”
   Example value: “3”
   Tooltip: “Counts trades in allocation, documents, or packing.”
4. Card: “At Risk”
   Example value: “1”
   Tooltip: “Counts trades with overdue action, missing document, or shipment delay.”

REQUIRED COMPONENTS:
- Lifecycle tabs
- KPI cards
- Advanced filters
- Trade table
- Risk preview drawer

CHARTS:
- Funnel — Accepted 10, Funded 8, Preparing 6, Shipped 4, Completed 3

TABLE / LIST:
- Exact columns: Trade ID | Buyer | Exporter | Route | Value | Current stage | Next action | Deadline | Risk | Action

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- TRD-2026-0042 — Ocean Import Co. ↔ PT Nusantara Aquatic Export — CGK→NRT

REQUIRED STATES:
- Active
- At risk
- Completed
- Cancelled
- No trades

SCREEN-SPECIFIC UX NOTES:
Use lifecycle language, not order-status ambiguity. Show which party owns the next action.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 17 — Trade Order Detail

**Page Code:** `AQT-PG-10-04`  
**Target Role:** Buyer, Exporter, Operations, Finance  
**Primary Action:** `Complete Next Action`

```text
=== SCREEN-SPECIFIC REQUIREMENT: TRADE ORDER DETAIL ===

Page name: Trade Order Detail
Module: Trade Order
Target role: Buyer, Exporter, Operations, Finance
Purpose: Act as the operational command page for one agreed trade.
Primary action: Complete Next Action

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Trade Value”
   Example value: “2,300 XLM test equivalent”
   Tooltip: “Shows the accepted commercial total for the trade.”
2. Card: “Funding Status”
   Example value: “Test payment recorded”
   Tooltip: “Shows current Level 1 payment evidence; future versions will distinguish escrow funding.”
3. Card: “Shipment Readiness”
   Example value: “76%”
   Tooltip: “Aggregates required allocation, documents, packing, and QC checks.”
4. Card: “Arrival Claim Window”
   Example value: “6 hours after delivery”
   Tooltip: “Shows the agreed period for buyer inspection and evidence submission.”

REQUIRED COMPONENTS:
- Trade header
- Lifecycle progress bar
- KPI cards
- Next-action banner
- Two-column workspace
- Item summary
- Document readiness
- Payment summary
- Shipment summary
- Timeline

CHARTS:
- Radial progress — Shipment readiness 76%

TABLE / LIST:
- Exact columns: Item | Batch | Ordered Qty | Allocated Qty | Packed Qty | Status

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- TRD-2026-0042 · Japan Betta Shipment

REQUIRED STATES:
- Awaiting approval
- Awaiting funding
- Preparing
- Ready to ship
- Shipped
- Inspection pending
- Claimed
- Completed

SCREEN-SPECIFIC UX NOTES:
Primary CTA changes by role and state. Never present an action to an unauthorized party.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 18 — Trade Timeline

**Page Code:** `AQT-PG-10-06`  
**Target Role:** Buyer, Exporter, Operations, Mediator  
**Primary Action:** `Export Timeline`

```text
=== SCREEN-SPECIFIC REQUIREMENT: TRADE TIMELINE ===

Page name: Trade Timeline
Module: Trade Order
Target role: Buyer, Exporter, Operations, Mediator
Purpose: Provide an auditable chronology of commercial, document, shipment, payment, and claim events.
Primary action: Export Timeline

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Current Stage”
   Example value: “Preparing shipment”
   Tooltip: “Explains the active lifecycle stage.”
2. Card: “Last Activity”
   Example value: “Document verified 2h ago”
   Tooltip: “Shows the most recent meaningful event.”
3. Card: “Next Deadline”
   Example value: “Packing QC due 18 Jul”
   Tooltip: “Shows the nearest required action deadline.”
4. Card: “Event Integrity”
   Example value: “24 recorded events”
   Tooltip: “Counts application and blockchain-linked events available for this trade.”

REQUIRED COMPONENTS:
- Stage filter
- Actor filter
- Vertical timeline
- Event detail drawer
- Evidence link
- Blockchain proof chip

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- No table required.

FORM FIELDS:
- No primary form.

SAMPLE CONTENT:
- 2026-07-15 10:42 — Health certificate reference verified — Maya Pratama

REQUIRED STATES:
- Default
- No events
- Filtered
- Event proof unavailable
- Exporting

SCREEN-SPECIFIC UX NOTES:
Events must identify actor, timestamp, source, and related record. Do not imply all events are on-chain.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 19 — Payment Summary

**Page Code:** `AQT-PG-11-01`  
**Target Role:** Buyer, Exporter, Finance  
**Primary Action:** `Send Test XLM / View Transaction`

```text
=== SCREEN-SPECIFIC REQUIREMENT: PAYMENT SUMMARY ===

Page name: Payment Summary
Module: Payment & Escrow
Target role: Buyer, Exporter, Finance
Purpose: Future business-MVP trade-level payment evidence and settlement overview. This is not a second White Belt send page.
Primary action: View Payment Evidence / View Transaction

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Agreed Trade Value”
   Example value: “2,300 XLM test equivalent”
   Tooltip: “Shows the accepted trade amount from the quotation.”
2. Card: “Testnet Payment Sent”
   Example value: “1.2500000 XLM”
   Tooltip: “Shows the actual White Belt Testnet transaction, which has no real monetary value.”
3. Card: “Payment Mode”
   Example value: “Direct Testnet Payment”
   Tooltip: “Clarifies that this version is not an escrow and does not secure the full trade value.”
4. Card: “Transaction Status”
   Example value: “Successful”
   Tooltip: “Shows confirmation from Stellar Testnet and links to the transaction hash.”

REQUIRED COMPONENTS:
- Phase disclosure banner
- Payment cards
- Transaction evidence
- Link to the public Test XLM page when demonstration evidence is needed
- Future escrow roadmap panel
- Reconciliation note

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Time | Sender | Recipient | Amount | Network | Mode | Status | Hash

FORM FIELDS:
- No send form on this screen. Testnet transfers are performed only on Test XLM.

SAMPLE CONTENT:
- 1.2500000 XLM sent on Testnet for TRD-2026-0042

REQUIRED STATES:
- No transaction
- Awaiting wallet
- Awaiting signature
- Success
- Failed
- Wrong network

SCREEN-SPECIFIC UX NOTES:
This future business-MVP page must never misrepresent Testnet payment as commercial settlement. It may reference Test XLM evidence, but must not duplicate its send form or appear in White Belt navigation. Future escrow controls appear as labeled roadmap placeholders only.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 20 — Document Requirement Checklist

**Page Code:** `AQT-PG-12-06`  
**Target Role:** Exporter, Buyer, Document Verifier, Operations  
**Primary Action:** `Upload Document`

```text
=== SCREEN-SPECIFIC REQUIREMENT: DOCUMENT REQUIREMENT CHECKLIST ===

Page name: Document Requirement Checklist
Module: Documents
Target role: Exporter, Buyer, Document Verifier, Operations
Purpose: Track every required commercial, health, origin, packing, and logistics document for a trade.
Primary action: Upload Document

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Required Documents”
   Example value: “7”
   Tooltip: “Counts documents configured for this trade and route.”
2. Card: “Verified”
   Example value: “4”
   Tooltip: “Counts uploaded document versions approved by the authorized verifier.”
3. Card: “Action Required”
   Example value: “2”
   Tooltip: “Counts missing or rejected documents blocking readiness.”
4. Card: “Expiring Soon”
   Example value: “1”
   Tooltip: “Counts documents approaching expiry before the planned shipment date.”

REQUIRED COMPONENTS:
- Readiness progress bar
- KPI cards
- Requirement table
- Upload drawer
- Version history drawer
- Verification action

CHARTS:
- Donut — Document status: Verified 4, Under review 1, Missing 1, Rejected 1

TABLE / LIST:
- Exact columns: Requirement | Applies to | Reference | Latest file | Expiry | Verification status | Blocking | Action

FORM FIELDS:
- Document type
- Reference number
- Issuer
- Issue date
- Expiry date
- File upload
- Notes

SAMPLE CONTENT:
- Health Certificate Reference — Under review — HC-IDN-2026-00812

REQUIRED STATES:
- Missing
- Uploaded
- Under review
- Verified
- Rejected
- Expired
- Replaced

SCREEN-SPECIFIC UX NOTES:
AquaTrade stores references and files but does not claim to issue official certificates. Show document access restrictions.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 21 — Packing Checklist

**Page Code:** `AQT-PG-13-04`  
**Target Role:** Exporter, Packing operator, QC  
**Primary Action:** `Submit Packing for QC`

```text
=== SCREEN-SPECIFIC REQUIREMENT: PACKING CHECKLIST ===

Page name: Packing Checklist
Module: Pre-Shipment & Packing
Target role: Exporter, Packing operator, QC
Purpose: Confirm that allocated fish are prepared, bagged, boxed, labeled, and evidenced before handover.
Primary action: Submit Packing for QC

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Allocated Fish”
   Example value: “200 / 200”
   Tooltip: “Confirms the ordered quantity has been assigned to specific batches.”
2. Card: “Bags Prepared”
   Example value: “20”
   Tooltip: “Shows the planned number of sealed fish bags.”
3. Card: “Boxes Prepared”
   Example value: “4”
   Tooltip: “Shows the planned export boxes and total gross weight.”
4. Card: “Checklist Completion”
   Example value: “82%”
   Tooltip: “Shows completed mandatory packing checks before QC approval.”

REQUIRED COMPONENTS:
- Preparation progress
- KPI cards
- Checklist grouped by stage
- Bag and box table
- Evidence uploader
- QC sign-off panel

CHARTS:
- Progress ring — 82% checklist completion

TABLE / LIST:
- Exact columns: Box | Bag range | Species | Qty | Gross weight | Label | Evidence | Status

FORM FIELDS:
- Fasting completed
- Last feed timestamp
- Treatment completed
- Water prepared
- Bag count
- Fish per bag
- Oxygen confirmed
- Double-bag confirmed
- Labels attached
- Box number
- Weight
- Dimensions
- Temperature logger optional
- Photos/videos

SAMPLE CONTENT:
- BOX-01 — Bags 01–05 — Betta HMPK — 50 fish — 7.8 kg

REQUIRED STATES:
- Draft
- Incomplete mandatory item
- Ready for QC
- Revision requested
- Approved

SCREEN-SPECIFIC UX NOTES:
Checklist items need clear evidence rules. Use large tap targets for mobile packing operations.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 22 — Shipment Detail

**Page Code:** `AQT-PG-14-03`  
**Target Role:** Buyer, Exporter, Logistics, Operations  
**Primary Action:** `Update Shipment Status`

```text
=== SCREEN-SPECIFIC REQUIREMENT: SHIPMENT DETAIL ===

Page name: Shipment Detail
Module: Logistics
Target role: Buyer, Exporter, Logistics, Operations
Purpose: Show shipment identity, route, schedule, AWB, boxes, handover status, delay risk, and delivery evidence.
Primary action: Update Shipment Status

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Shipment Status”
   Example value: “In Transit”
   Tooltip: “Shows the latest confirmed logistics milestone.”
2. Card: “Flight”
   Example value: “GA874 · CGK→HND”
   Tooltip: “Shows the planned or actual primary flight segment.”
3. Card: “Boxes”
   Example value: “4”
   Tooltip: “Shows total export boxes associated with the trade.”
4. Card: “ETA”
   Example value: “16 Aug · 07:25 JST”
   Tooltip: “Shows the latest estimated arrival time and timezone.”
5. Card: “Delay Risk”
   Example value: “Low”
   Tooltip: “Summarizes schedule deviation and missing-event risk.”

REQUIRED COMPONENTS:
- Shipment header
- Route map/timeline
- KPI cards
- Flight segments
- Box summary
- AWB document
- Status update drawer
- Delay banner

CHARTS:
- No chart. Do not add a decorative chart.

TABLE / LIST:
- Exact columns: Segment | From | To | Flight | Planned departure | Actual departure | Planned arrival | Status

FORM FIELDS:
- Forwarder
- Airline
- Origin airport
- Destination airport
- Flight number
- Departure time
- Arrival time
- Master AWB
- House AWB
- Box count
- Weight
- Tracking link
- Status notes

SAMPLE CONTENT:
- SHP-2026-0037 · CGK → HND → NRT · MAWB 126-12345675

REQUIRED STATES:
- Booked
- Picked up
- At origin
- Departed
- In transit
- Arrived
- Delayed
- Delivered

SCREEN-SPECIFIC UX NOTES:
Show all times with timezone labels. Do not imply live airline integration when updates are manual.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 23 — Shipment Timeline

**Page Code:** `AQT-PG-14-04`  
**Target Role:** Buyer, Exporter, Logistics, Operations  
**Primary Action:** `Add Logistics Event`

```text
=== SCREEN-SPECIFIC REQUIREMENT: SHIPMENT TIMELINE ===

Page name: Shipment Timeline
Module: Logistics
Target role: Buyer, Exporter, Logistics, Operations
Purpose: Provide an event-by-event logistics view with planned versus actual time.
Primary action: Add Logistics Event

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Progress”
   Example value: “5 of 8 milestones”
   Tooltip: “Shows how many configured logistics milestones are complete.”
2. Card: “Schedule Variance”
   Example value: “+35 minutes”
   Tooltip: “Shows actual versus planned timing for the most relevant milestone.”
3. Card: “Latest Location”
   Example value: “Haneda cargo terminal”
   Tooltip: “Shows the latest declared event location.”
4. Card: “Next Milestone”
   Example value: “Transfer to NRT”
   Tooltip: “Shows the next expected logistics event.”

REQUIRED COMPONENTS:
- Horizontal route strip
- Vertical logistics timeline
- Planned vs actual labels
- Evidence chips
- Event editor drawer

CHARTS:
- Gantt-like timeline — planned versus actual milestone timing

TABLE / LIST:
- No table required.

FORM FIELDS:
- Event type
- Timestamp
- Timezone
- Location
- Source
- Notes
- Attachment

SAMPLE CONTENT:
- Arrived HND 07:58 JST, planned 07:25 JST, +33 min

REQUIRED STATES:
- On schedule
- Delayed
- Missing event
- Delivered

SCREEN-SPECIFIC UX NOTES:
Manual and integrated events must be visually distinguished by source badge.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 24 — Start Arrival Inspection

**Page Code:** `AQT-PG-15-02`  
**Target Role:** Buyer / Importer QC  
**Primary Action:** `Submit Inspection`

```text
=== SCREEN-SPECIFIC REQUIREMENT: START ARRIVAL INSPECTION ===

Page name: Start Arrival Inspection
Module: Arrival Inspection
Target role: Buyer / Importer QC
Purpose: Guide the buyer through timestamped unboxing and fish-condition evidence inside the agreed claim window.
Primary action: Submit Inspection

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Inspection Window”
   Example value: “4h 12m remaining”
   Tooltip: “Shows remaining time to submit arrival evidence under the agreed trade policy.”
2. Card: “Expected Quantity”
   Example value: “200 fish”
   Tooltip: “Shows the final packed quantity expected at arrival.”
3. Card: “Boxes Received”
   Example value: “4 / 4”
   Tooltip: “Confirms physical box count before fish-level inspection.”
4. Card: “Current Finding”
   Example value: “3 DOA · 6 stressed”
   Tooltip: “Updates automatically from entered inspection counts.”

REQUIRED COMPONENTS:
- Countdown banner
- Four-step mobile wizard
- Box condition
- Bag condition
- Fish count grid
- Evidence capture
- Summary and declaration

CHARTS:
- Stacked bar — Condition counts: Healthy 191, Stressed 6, DOA 3

TABLE / LIST:
- Exact columns: Item / Batch | Expected | Healthy | Stressed | DOA | Missing | Mismatch

FORM FIELDS:
- Delivery timestamp
- Box received count
- Box damage
- Seal condition
- Bag leakage
- Water condition
- Healthy qty
- Stressed qty
- DOA qty
- Missing qty
- Species mismatch qty
- Grade mismatch qty
- Photo/video evidence
- Notes
- Declaration checkbox

SAMPLE CONTENT:
- BAT-IDN-260701-014 — Expected 120 — Healthy 115 — Stressed 3 — DOA 2

REQUIRED STATES:
- Not started
- In progress
- Evidence uploading
- Accepted
- Accept with issue
- Claim required
- Window expired

SCREEN-SPECIFIC UX NOTES:
Optimize for mobile camera usage. Preserve timestamps and never allow submitted evidence to be silently overwritten.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---

## PROMPT 25 — Claim Detail

**Page Code:** `AQT-PG-16-03`  
**Target Role:** Buyer, Exporter, Mediator  
**Primary Action:** `Respond to Claim / Record Resolution`

```text
=== SCREEN-SPECIFIC REQUIREMENT: CLAIM DETAIL ===

Page name: Claim Detail
Module: DOA Claim & Dispute
Target role: Buyer, Exporter, Mediator
Purpose: Provide a fair, evidence-based workspace for claim review, response, negotiation, and resolution.
Primary action: Respond to Claim / Record Resolution

REQUIRED CARDS — include a visible top-right ? tooltip icon on every card:
1. Card: “Claimed Quantity”
   Example value: “3 DOA + 1 missing”
   Tooltip: “Shows the quantity and category submitted by the buyer.”
2. Card: “Claimed Value”
   Example value: “45 XLM test equivalent”
   Tooltip: “Shows the calculated value under the agreed quotation terms; Testnet values remain non-commercial.”
3. Card: “Response Deadline”
   Example value: “18h remaining”
   Tooltip: “Shows how long the exporter has to respond under the configured policy.”
4. Card: “Requested Resolution”
   Example value: “Partial refund”
   Tooltip: “Shows the buyer's requested outcome; it is not yet an approved decision.”

REQUIRED COMPONENTS:
- Claim header
- KPI cards
- Evidence gallery
- Inspection comparison
- Policy reference
- Response panel
- Negotiation history
- Mediator decision area
- Resolution summary

CHARTS:
- Comparison bar — Expected 200, Healthy 191, Stressed 6, DOA 3, Missing 0

TABLE / LIST:
- Exact columns: Affected item | Expected | Buyer finding | Exporter accepted | Disputed | Value

FORM FIELDS:
- Exporter response
- Accepted quantity
- Rejected quantity
- Reason
- Counter resolution
- Mediator notes
- Final resolution
- Refund/release amount
- Replacement reference

SAMPLE CONTENT:
- CLM-2026-0012 for TRD-2026-0042

REQUIRED STATES:
- Submitted
- Under exporter review
- Negotiating
- Mediation required
- Approved
- Partially approved
- Rejected
- Resolved

SCREEN-SPECIFIC UX NOTES:
Separate facts, claims, responses, and final decision. Every decision must show actor, timestamp, and rationale.

Do not add unlisted dashboard cards, charts, table columns, or Web3 claims.
=== END SCREEN-SPECIFIC REQUIREMENT ===
```

---


## GLOBAL ADDENDUM — COMPONENT REUSE AND LANGUAGE

Apply this addendum to every page prompt:

```text
Use Atomic Design and reuse existing atoms, molecules, organisms, and templates.
Create Storybook stories for all new atoms and reusable molecules, plus important organisms.
Support en, id, and zh-CN through translation keys; do not hardcode user-facing copy.
All card ? tooltips must be translated.
The White Belt wallet page is named Test XLM and is one menu/page, not separate Wallet, Balance, or Payment navigation items.
```


## Global Active-Scope Reminder

The active White Belt route is public `/{locale}/test-xlm`. Login and all business workflow prompts are future design artifacts unless explicitly activated.
