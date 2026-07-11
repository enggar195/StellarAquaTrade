# AquaTrade — Complete Blueprint v0.4

This package is the single Markdown source of truth for AquaTrade product discovery, UX design, Claude prompts, frontend architecture, and user validation.

## Recommended Placement

### Recommended for the current bootcamp stage

Place this `01-blueprint` folder beside `docs/00-white-belt` in the frontend repository:

```text
aquatrade-fe/
├── docs/
│   └── 01-blueprint/
├── src/
├── package.json
└── CLAUDE.md
```

Final paths:

```text
aquatrade-fe/docs/00-white-belt/
aquatrade-fe/docs/01-blueprint/
```

This is recommended now because Claude is currently implementing the frontend, login design, multilingual UI, Storybook, and Test XLM page.

### Recommended after backend and contracts become active

Create a dedicated documentation repository:

```text
aquatrade-docs/
└── 01-blueprint/
```

Treat that repository as the source of truth, then copy or synchronize only relevant documents into `aquatrade-fe`, `aquatrade-be`, and `aquatrade-contracts`.

Do not maintain independent edited copies across all repositories without a synchronization process.

## Reading Order for Claude

1. `discovery/00-RAW-SOURCE-DATA-CLEANED.md`
2. `discovery/01-SOLUTION-BRIEF.md`
3. `discovery/02-MODULE-MAP.md`
4. `discovery/03-FUNCTION-GROUPS.md`
5. `discovery/04-ROLES-PERMISSIONS.md`
6. `discovery/07-GLOSSARY.md`
7. `architecture/05-DATA-INTEGRATION.md`
8. `architecture/06-KPI-DASHBOARD.md`
9. `ux-design/08-UX-STRATEGY.md`
10. `ux-design/09-INFORMATION-ARCHITECTURE.md`
11. `ux-design/10-USER-FLOWS.md`
12. `ux-design/11-PAGE-INVENTORY.md`
13. `ux-design/12-SCREEN-REQUIREMENTS.md`
14. `ux-design/13-DESIGN-SYSTEM.md`
15. `ux-pilot/14-UX-PILOT-MASTER-PROMPT.md`
16. `ux-pilot/15-UX-PILOT-SCREEN-PROMPTS.md`
17. `handoff/16-CLAUDE-DESIGN-HANDOFF.md`
18. `handoff/17-DEVELOPER-HANDOFF.md`
19. `handoff/18-IMPLEMENTATION-STANDARDS.md`
20. `handoff/19-USER-VALIDATION-PLAN.md`
21. `handoff/20-DECISION-LOG.md`

## Confirmed Standards in v0.4

- Atomic Design for reusable frontend components.
- Storybook for all atoms and reusable molecules, plus important organisms/templates.
- English, Bahasa Indonesia, and Simplified Chinese.
- One White Belt menu/page named Test XLM.
- Canonical route `/{locale}/test-xlm`.
- Login illustration includes container ship, active port, CC, RTG, and cargo aircraft.
- Oceanic Enterprise Glassmorphism.
- Visible `?` tooltip on every information-bearing card.
- White Belt direct Testnet payment is not called escrow.

## How to Instruct Claude

```text
Read docs/01-blueprint/README.md and follow the reading order.
Do not implement before reading handoff/17-DEVELOPER-HANDOFF.md and handoff/18-IMPLEMENTATION-STANDARDS.md.
Use Atomic Design, Storybook, and en/id/zh-CN translation dictionaries.
For White Belt, use one menu/page named Test XLM.
```


## Scope Precedence

When documents overlap, use this priority:

1. `../00-white-belt/00-LEVEL-1-SCOPE.md`
2. `../00-white-belt/01-ACCEPTANCE-CRITERIA.md`
3. `CLAUDE-START-HERE.md`
4. `handoff/18-IMPLEMENTATION-STANDARDS.md`
5. relevant UX and screen documents
6. `../00-white-belt/02-ROADMAP.md`

The White Belt Test XLM page must be publicly accessible and must not require application login. The login page is a future business-MVP design prototype until a backend authentication scope is explicitly activated.
