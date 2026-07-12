export type OceanIntensity = "subtle" | "balanced" | "immersive";
export type BubbleDepth = "bg" | "mid" | "fg";

export interface Bubble {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  blur: number;
  depth: BubbleDepth;
}

/** Default desktop bubble count per intensity. */
export const INTENSITY_BUBBLES: Record<OceanIntensity, number> = {
  subtle: 16,
  balanced: 24,
  immersive: 28,
};

const DEPTHS: BubbleDepth[] = ["bg", "mid", "fg"];
// Left/center/right zones so bubbles cover the open areas evenly.
const ZONES: [number, number][] = [
  [4, 30],
  [36, 64],
  [70, 96],
];

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

/**
 * Deterministic bubble definitions — no Math.random, so server and client
 * markup match and screenshots are stable. Bubbles are spread across left /
 * center / right zones and split into background, midground and foreground
 * depth levels (background = smaller/dimmer/slower/softer, foreground =
 * larger/brighter/faster/sharper) to create real underwater depth.
 */
export function createBubbles(count: number): Bubble[] {
  const bubbles: Bubble[] = [];
  for (let i = 0; i < count; i += 1) {
    const zone = ZONES[i % 3];
    const spread = ((i * 37) % 100) / 100; // deterministic 0..1
    const left = round1(zone[0] + spread * (zone[1] - zone[0]));
    // Decorrelate depth from horizontal zone.
    const depth = DEPTHS[(i + Math.floor(i / 3)) % 3];

    const size = depth === "bg" ? 5 + (i % 4) : depth === "mid" ? 10 + (i % 6) : 18 + (i % 10);
    const opacity =
      depth === "bg"
        ? round1(0.18 + (i % 3) * 0.03) // 0.18–0.24
        : depth === "mid"
          ? round1(0.3 + (i % 3) * 0.04) // 0.30–0.38
          : round1(0.4 + (i % 3) * 0.03); // 0.40–0.46
    const blur = depth === "bg" ? 1.4 : depth === "mid" ? 0.5 : 0;
    const duration = (depth === "bg" ? 26 : depth === "mid" ? 20 : 15) + ((i * 7) % 8);

    bubbles.push({
      left,
      size,
      duration,
      delay: -((i * 5) % 28),
      drift: ((i % 5) - 2) * 9,
      opacity,
      blur,
      depth,
    });
  }
  return bubbles;
}
