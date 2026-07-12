import type { CSSProperties } from "react";

import { createBubbles, INTENSITY_BUBBLES, type Bubble, type OceanIntensity } from "./bubbles";

export interface OceanAmbienceBackgroundProps {
  intensity?: OceanIntensity;
  bubbleCount?: number;
  showCaustics?: boolean;
  showMist?: boolean;
}

function OceanBaseGradient() {
  return <div className="ocean-base" />;
}

function RadialGlowLayer() {
  return (
    <div className="ocean-glows">
      <span className="ocean-glow ocean-glow-cyan" />
      <span className="ocean-glow ocean-glow-indigo" />
      <span className="ocean-glow ocean-glow-teal" />
    </div>
  );
}

/** Soft underwater light shafts angling down from the upper-right. */
function LightShaftLayer() {
  return (
    <div className="ocean-shafts">
      <span className="ocean-shaft ocean-shaft-1" />
      <span className="ocean-shaft ocean-shaft-2" />
      <span className="ocean-shaft ocean-shaft-3" />
    </div>
  );
}

/** Organic caustic light pools (not a technical grid). */
function CausticLightLayer() {
  return (
    <div className="ocean-caustics">
      <span className="ocean-caustic ocean-caustic-1" />
      <span className="ocean-caustic ocean-caustic-2" />
      <span className="ocean-caustic ocean-caustic-3" />
    </div>
  );
}

/** Signature AquaTrade detail: a very faint, slow whale silhouette. Decorative. */
function SignatureSilhouette() {
  return (
    <div className="ocean-silhouette">
      <svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path
          d="M6,50 C36,20 120,18 168,34 C186,40 208,44 214,50 C206,56 190,58 168,62 C120,74 40,74 6,54 C2,52 2,52 6,50 Z"
          fill="currentColor"
        />
        <path d="M8,52 L-16,36 L-4,52 L-16,70 Z" fill="currentColor" />
        <path d="M96,66 L120,88 L138,66 Z" fill="currentColor" />
        <circle cx="176" cy="46" r="2.4" fill="#02060d" />
      </svg>
    </div>
  );
}

function UnderwaterMistLayer() {
  return <div className="ocean-mist" />;
}

function GridNoiseLayer() {
  return <div className="ocean-grid" />;
}

function BubbleField({ bubbles }: { bubbles: Bubble[] }) {
  return (
    <div className="ocean-bubbles">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="ocean-bubble"
          data-depth={bubble.depth}
          style={
            {
              "--b-left": `${bubble.left}%`,
              "--b-size": `${bubble.size}px`,
              "--b-dur": `${bubble.duration}s`,
              "--b-delay": `${bubble.delay}s`,
              "--b-drift": `${bubble.drift}px`,
              "--b-opacity": bubble.opacity,
              "--b-blur": `${bubble.blur}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

/**
 * Reusable layered underwater backdrop. Fixed behind the application shell,
 * decorative only (aria-hidden, non-interactive). Composition, back-to-front:
 * base ocean gradient → radial glows → light shafts → organic caustics → whale
 * silhouette → depth-layered rising bubbles → mist → subtle grid. Deterministic
 * and dependency-free, so it is cheap to render and stable in screenshots.
 */
export function OceanAmbienceBackground({
  intensity = "balanced",
  bubbleCount,
  showCaustics = true,
  showMist = true,
}: OceanAmbienceBackgroundProps) {
  const count = bubbleCount ?? INTENSITY_BUBBLES[intensity];
  const bubbles = createBubbles(count);

  return (
    <div className={`ocean-ambience intensity-${intensity}`} aria-hidden="true">
      <OceanBaseGradient />
      <RadialGlowLayer />
      <LightShaftLayer />
      {showCaustics && <CausticLightLayer />}
      <SignatureSilhouette />
      <BubbleField bubbles={bubbles} />
      {showMist && <UnderwaterMistLayer />}
      <GridNoiseLayer />
    </div>
  );
}
