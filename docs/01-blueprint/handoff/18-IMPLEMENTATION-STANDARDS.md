# 18-IMPLEMENTATION-STANDARDS.md
## AquaTrade Frontend Architecture, Storybook, i18n, and Quality Standard

---

## 1. Atomic Design Standard

### Atoms

Examples: Button, Input, Checkbox, IconButton, Badge, Chip, Label, TooltipTrigger, LogoMark.

Rules:

- no business workflow;
- no network calls;
- explicit variants;
- accessible by default;
- Storybook required.

### Molecules

Examples: FormField, PasswordField, CardHeaderWithHelp, LanguageSwitcher, StatusPill, AddressDisplay.

Rules:

- compose atoms;
- limited local interaction;
- reusable across modules;
- Storybook required when reusable.

### Organisms

Examples: LoginFormCard, WalletConnectionCard, SendTestXlmCard, DataTable, KpiCard, ChartCard.

Rules:

- compose atoms and molecules;
- business-context props are allowed;
- API access stays in feature/container layer where possible;
- Storybook strongly recommended.

### Templates

Examples: AuthSplitLayout, DashboardLayout, TestXlmTemplate.

Rules:

- define layout slots;
- contain no hardcoded business copy;
- story required when reused.

### Pages

Pages connect route, data, authorization, feature state, and composed templates. Pages should not duplicate lower-level UI.

## 2. Suggested Folder Structure

```text
src/
├── app/[locale]/
│   ├── login/
│   └── test-xlm/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── features/
│   ├── auth/
│   ├── wallet/
│   └── test-xlm/
├── i18n/
│   ├── config.ts
│   ├── routing.ts
│   └── dictionaries/
│       ├── en/
│       ├── id/
│       └── zh-CN/
└── stories/
```

## 3. Storybook Standard

Each story should cover relevant states:

- Default
- Focused
- Disabled
- Loading
- Error
- LongText
- English
- Indonesian
- SimplifiedChinese
- ReducedMotion, for animated components

Storybook must use the real i18n provider and dictionaries.

## 4. Internationalization Standard

Supported locales:

```text
en
id
zh-CN
```

Default and fallback: English.

Use semantic keys:

```json
{
  "navigation": {
    "testXlm": "Test XLM"
  }
}
```

Do not use English sentences as translation keys. Do not hardcode user-facing copy in JSX.

Translate:

- navigation;
- page headings;
- card titles and tooltips;
- form labels and placeholders;
- validation;
- status messages;
- table headers;
- chart legends;
- toasts;
- accessibility labels.

Do not translate:

- wallet addresses;
- hashes;
- trade/batch IDs;
- XLM;
- Stellar;
- Freighter.

## 5. Formatting Standard

Use `Intl` for localized dates, time, numbers, percentages, and relative time. Preserve explicit XLM precision:

```text
1.2500000 XLM
```

Testnet XLM must not be converted into real fiat value without an explicitly documented demo rate.

## 6. Test XLM Standard

Canonical route:

```text
/{locale}/test-xlm
```

The page is publicly accessible for White Belt review and contains:

- Testnet notice;
- Freighter detection;
- connect/disconnect;
- network validation;
- public address;
- XLM balance;
- Testnet funding help;
- recipient and amount;
- positive amount validation with at most seven decimal places;
- signature state;
- submit state;
- success/failure;
- transaction hash;
- explorer action.

Direct Testnet transfer must not be called escrow.

## 7. Tooltip Standard

All information-bearing cards include a visible top-right `?` button. Tooltip content includes:

- meaning;
- source/calculation;
- why it matters;
- scope note.

Tooltips support hover, focus, mobile tap, Escape, and localized accessible labels.

## 8. Security Standard

- Never request or store secret keys or seed phrases.
- Freighter performs user signing.
- Never log signed XDR containing sensitive context without a documented need.
- Map raw SDK errors to safe localized application codes.
- Validate network before signing.
- Clearly label Testnet.

## 9. Accessibility Standard

- correct `<html lang>`;
- keyboard navigation;
- visible focus ring;
- WCAG AA text contrast;
- minimum 44 px effective touch targets;
- translated screen-reader labels;
- reduced-motion support;
- chart content available as text or table.

## 10. Quality Gate

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build-storybook
pnpm build
```

The work is incomplete when any required gate fails.


## 11. Authentication Scope Guard

The login page may be implemented as a design-system and Storybook prototype, but functional authentication is outside White Belt while the backend is out of scope. Do not store credentials, create mock security claims, or gate `/{locale}/test-xlm`.

## 12. Testnet Funding Guard

Friendbot or equivalent Testnet funding assistance must be shown only on Testnet. Handle funding loading, success, failure, already-funded, and rate-limit/error states. Never expose a Friendbot action on Mainnet.
