# Claude Task Prompt — Strengthen AquaTrade Ocean Ambience Background

## Objective

Enhance the existing AquaTrade dashboard background so the application clearly feels like it is inside a calm, premium underwater/ocean environment.

The current dashboard layout, cards, charts, tables, and data are already correct. This task must only improve:

- ocean ambience;
- visible underwater depth;
- animated bubbles;
- subtle water-light/caustic effects;
- glassmorphism perception;
- background layering;
- contrast and readability.

Do not redesign the dashboard structure.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

The Buyer Dashboard is already implemented and functionally correct.

The current problem is visual:
the application background still looks like a mostly flat dark navy surface. The ocean ambience and animated bubbles are too faint or not visible enough, so the glassmorphism effect does not feel convincing.

Your task is to make the ocean atmosphere clearly visible while keeping the dashboard professional, calm, readable, and performant.

Do not change dashboard data, charts, tables, KPI content, routes, translations, or business logic.

==================================================
1. READ THESE FILES FIRST
==================================================

Read:

1. CLAUDE.md, if present
2. docs/README.md
3. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
4. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
5. docs/01-blueprint/handoff/24-CLAUDE-TASK-SLICE-BUYER-DASHBOARD.md
6. This task file

==================================================
2. CURRENT VISUAL ISSUE
==================================================

The background currently appears too flat and too dark.

The existing result does not visibly communicate:

- underwater ambience;
- moving bubbles;
- ocean depth;
- refracted underwater light;
- spatial separation between background and glass cards.

The visual enhancement must be noticeable in a normal screenshot.

Do not make the effect so faint that it disappears.

==================================================
3. TARGET VISUAL RESULT
==================================================

The final dashboard should visibly feel like:

- a calm deep-ocean control room;
- layered underwater depth;
- premium enterprise glassmorphism;
- soft cyan/teal/indigo lighting;
- slow bubbles rising behind the application content;
- subtle water caustics/light rays;
- professional, not playful;
- immersive, but still suitable for operational dashboards.

The visual hierarchy must remain:

1. content and data;
2. glass cards;
3. ocean ambience;
4. decorative motion.

==================================================
4. BUILD A REUSABLE OCEAN BACKGROUND SYSTEM
==================================================

Create a reusable background organism such as:

- OceanAmbienceBackground
or
- UnderwaterBackground

Recommended location:

src/components/organisms/ocean-ambience-background/

Recommended composition:

OceanAmbienceBackground
├── OceanBaseGradient
├── RadialGlowLayer
├── CausticLightLayer
├── BubbleField
├── UnderwaterMistLayer
└── NoiseOrGridLayer

Do not put bubble markup directly inside the dashboard page component.

The dashboard page must only consume the reusable background component.

==================================================
5. REQUIRED BACKGROUND LAYERS
==================================================

Use all of the following layers.

--------------------------------------------------
5.1 Base Ocean Gradient
--------------------------------------------------

Use a deep vertical and diagonal gradient.

Suggested colors:

- #020817
- #03111f
- #04101a
- #071827
- #0a2236

The background should become slightly brighter toward the upper-right or central-right area.

Avoid a pure black background.

--------------------------------------------------
5.2 Radial Cyan / Indigo Glows
--------------------------------------------------

Add at least three large blurred glows:

1. cyan glow near upper-right;
2. indigo glow near upper-center;
3. teal glow near lower-left or lower-center.

Suggested opacity:

- approximately 0.10 to 0.22

Suggested blur:

- approximately 120 px to 260 px

The glows must be visibly present in screenshots but must not reduce text contrast.

--------------------------------------------------
5.3 Underwater Caustics / Light Rays
--------------------------------------------------

Add a subtle underwater refracted-light layer.

Acceptable techniques:

- CSS radial/repeating gradients;
- optimized SVG;
- masked light streaks;
- pseudo-elements.

Requirements:

- very slow movement;
- low contrast;
- broad, soft forms;
- slightly brighter near the upper-right;
- should look like underwater light, not a laser effect;
- should be visible in open spaces between cards.

Do not use harsh white lines.

--------------------------------------------------
5.4 Bubble Field — Must Be Clearly Visible
--------------------------------------------------

Add a visible but restrained field of rising bubbles.

Desktop recommendation:

- approximately 18 to 28 bubbles total.

Tablet recommendation:

- approximately 12 to 18 bubbles.

Mobile recommendation:

- approximately 8 to 12 bubbles.

Bubble sizes:

- small: 4–8 px;
- medium: 9–16 px;
- large: 18–28 px.

Bubble style:

- transparent center;
- thin cyan/white edge;
- subtle inner highlight;
- soft glow;
- slight blur on some bubbles;
- varied opacity.

Recommended opacity range:

- 0.18 to 0.50.

At least several bubbles must be visible in a normal screenshot.

Do not make all bubbles opacity 0.05 or lower.

Bubble movement:

- rise from bottom toward top;
- slow drift left/right;
- slight scale change;
- duration approximately 12–30 seconds;
- staggered negative delays;
- no synchronized movement;
- no fast bouncing.

The bubbles must remain behind cards and content.

--------------------------------------------------
5.5 Underwater Mist / Depth Layer
--------------------------------------------------

Add a broad soft mist layer near the lower part of the viewport.

Use:

- dark teal mist;
- subtle blue fog;
- soft blur;
- very low movement or static layer.

Purpose:

- create depth;
- prevent the background from looking like a flat gradient;
- make glass cards appear to float above the ocean scene.

--------------------------------------------------
5.6 Subtle Grid or Noise
--------------------------------------------------

Add one very subtle technical texture:

- faint grid;
or
- low-opacity noise.

Do not use both aggressively.

The texture must remain secondary.

==================================================
6. Z-INDEX AND LAYERING
==================================================

Use a stable layer structure.

Recommended:

- background base: z-index 0;
- glows/caustics/bubbles: z-index 1;
- mist/texture: z-index 2;
- application shell/content: z-index 10;
- tooltip/popover/modal: existing overlay z-index above content.

The ocean background must use:

- pointer-events: none;
- aria-hidden="true";
- user-select: none.

Do not allow decorative layers to block interaction.

==================================================
7. MAKE GLASSMORPHISM READABLE
==================================================

The current cards are visually strong but may be too opaque to reveal the environment.

Refine card surfaces carefully.

Suggested card background:

- rgba(8, 29, 44, 0.70) to rgba(13, 43, 63, 0.80)

Suggested dense table/card background:

- rgba(7, 24, 38, 0.82) to rgba(8, 29, 44, 0.90)

Suggested border:

- rgba(125, 227, 244, 0.12) to rgba(255, 255, 255, 0.16)

Add:

- subtle top-edge highlight;
- soft inner highlight;
- soft shadow;
- restrained aqua edge glow on hover/focus only.

Do not make cards transparent enough to damage readability.

Do not globally reduce opacity without checking charts and tables.

==================================================
8. KEEP BACKGROUND VISIBLE IN OPEN AREAS
==================================================

The ocean ambience must remain visible in:

- gaps between KPI cards;
- area around charts;
- area below tables;
- right and lower unused areas;
- transitions near sidebar/content boundary;
- top area beneath the header.

Do not place one large opaque wrapper behind all dashboard content.

The page content wrapper should remain transparent or only minimally tinted.

==================================================
9. SIDEBAR AND TOPBAR INTEGRATION
==================================================

Sidebar:

- keep a dark glass surface;
- add a subtle vertical ocean gradient;
- allow faint cyan light bleed near the active item;
- do not animate bubbles inside the sidebar separately.

Topbar:

- keep readable and stable;
- allow very subtle background glow;
- do not place visible bubbles over text or controls.

The background system should feel continuous behind the shell.

==================================================
10. MOTION AND REDUCED MOTION
==================================================

Normal motion:

- bubble movement;
- very slow caustic drift;
- optional subtle mist drift.

Use only transform and opacity where possible.

Avoid:

- layout animation;
- large blur animation;
- high-frequency repaint;
- heavy canvas;
- WebGL;
- autoplay video.

prefers-reduced-motion:

- stop bubble translation;
- stop caustic movement;
- keep a static visually complete ocean composition;
- do not remove the entire ambience.

==================================================
11. RESPONSIVE BEHAVIOR
==================================================

Desktop:

- full ocean layering;
- 18–28 bubbles;
- visible caustics and glows.

Tablet:

- reduce bubble count;
- reduce blur size where needed;
- maintain depth.

Mobile:

- reduce bubble count;
- reduce large bubble size;
- avoid bubbles crossing form/table text areas;
- keep performance stable;
- preserve a visible ocean feel.

==================================================
12. ACCESSIBILITY
==================================================

Requirements:

- aria-hidden="true" for decorative background;
- pointer-events: none;
- no essential information in the animation;
- reduced-motion support;
- text contrast remains WCAG-conscious;
- focus rings remain visible above glows;
- tooltip and menu overlays remain readable.

==================================================
13. PERFORMANCE
==================================================

Requirements:

- no video background;
- no Canvas particle engine;
- no WebGL;
- no third-party particle library unless already present and very lightweight;
- avoid generating random values during every render;
- generate deterministic bubble definitions;
- memoize or define static bubble configuration;
- use CSS custom properties for position, size, duration, delay, drift;
- avoid excessive box-shadow layers;
- keep DOM bubble count within the recommended range.

==================================================
14. RECOMMENDED IMPLEMENTATION SHAPE
==================================================

Example component API:

type OceanAmbienceBackgroundProps = {
  intensity?: "subtle" | "balanced" | "immersive";
  bubbleCount?: number;
  showCaustics?: boolean;
  showMist?: boolean;
};

Use:

<OceanAmbienceBackground
  intensity="balanced"
  bubbleCount={24}
  showCaustics
  showMist
/>

Use a balanced default.

Do not expose business logic through this component.

==================================================
15. VISUAL ACCEPTANCE CRITERIA
==================================================

The task is complete only when:

- [ ] the dashboard no longer looks like a flat dark background;
- [ ] ocean depth is clearly visible;
- [ ] bubbles are visibly present in a normal screenshot;
- [ ] at least several bubbles can be seen without zooming;
- [ ] bubbles move slowly and organically;
- [ ] cyan/teal/indigo glows are visible;
- [ ] underwater light/caustic effect is visible in open spaces;
- [ ] cards visibly feel like glass floating above the background;
- [ ] text and data remain easy to read;
- [ ] charts remain clear;
- [ ] table readability is preserved;
- [ ] sidebar and topbar remain stable;
- [ ] no interaction is blocked;
- [ ] reduced-motion works;
- [ ] mobile performance remains acceptable.

==================================================
16. FUNCTIONAL ACCEPTANCE CRITERIA
==================================================

- [ ] no dashboard data changed;
- [ ] no chart data changed;
- [ ] no table columns changed;
- [ ] no route changed;
- [ ] no translation key removed;
- [ ] no Test XLM behavior changed;
- [ ] no Login behavior changed;
- [ ] no backend integration added;
- [ ] no authentication logic added.

==================================================
17. STORYBOOK
==================================================

Create stories for the reusable ocean background component.

Required stories:

- Balanced
- Subtle
- Immersive
- ReducedMotion
- Desktop
- Mobile
- WithGlassCardPreview

The WithGlassCardPreview story must show:

- ocean background;
- one KPI card;
- one chart-like glass card;
- visible bubbles behind them.

This story is required to verify that the glass effect is visually noticeable.

==================================================
18. TESTS
==================================================

Add tests where practical for:

- OceanAmbienceBackground renders;
- aria-hidden is present;
- pointer-events are disabled;
- deterministic bubble count;
- reduced-motion class/state is supported;
- dashboard content remains present;
- no business data changed.

Do not attempt to unit-test visual beauty.

==================================================
19. QUALITY COMMANDS
==================================================

Run:

pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook

Do not report completion while any command fails.

==================================================
20. FINAL REPORT FORMAT
==================================================

Report:

1. Existing background issue identified
2. Files created
3. Files modified
4. Reusable component created
5. Bubble count by breakpoint
6. Background layers added
7. Glass-card refinements
8. Reduced-motion behavior
9. Storybook stories created
10. Tests added or updated
11. Commands run and results
12. Desktop validation
13. Tablet validation
14. Mobile validation
15. Confirmation that dashboard data and structure were not changed

Do not continue to other pages after this visual enhancement task.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 25-CLAUDE-TASK-ENHANCE-OCEAN-AMBIENCE.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/25-CLAUDE-TASK-ENHANCE-OCEAN-AMBIENCE.md

Make the underwater ambience clearly visible in screenshots.
Do not redesign or change dashboard data.
```
