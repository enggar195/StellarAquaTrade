/**
 * Decorative, non-interactive animated background.
 * Pure SVG + CSS (see globals.css). Renders behind all content and is
 * hidden from assistive tech. Deterministic values only — no random —
 * so server and client markup match.
 */

const BUBBLES = [
  { left: 6, size: 10, delay: 0, duration: 15 },
  { left: 14, size: 18, delay: 4, duration: 20 },
  { left: 23, size: 7, delay: 8, duration: 13 },
  { left: 34, size: 22, delay: 2, duration: 24 },
  { left: 44, size: 12, delay: 11, duration: 17 },
  { left: 52, size: 8, delay: 6, duration: 14 },
  { left: 61, size: 16, delay: 1, duration: 21 },
  { left: 70, size: 10, delay: 9, duration: 16 },
  { left: 78, size: 24, delay: 5, duration: 26 },
  { left: 86, size: 9, delay: 13, duration: 15 },
  { left: 93, size: 14, delay: 3, duration: 19 },
  { left: 40, size: 6, delay: 7, duration: 12 },
];

export function AquaBackground() {
  return (
    <div className="aqua-bg" aria-hidden="true">
      {/* Soft drifting colour orbs */}
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />

      {/* Subtle grid + node field */}
      <svg className="aqua-grid" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="rgba(120,180,220,0.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>

      {/* Rising bubbles */}
      <div className="bubbles">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Flowing water waves at the base */}
      <svg
        className="aqua-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#0a6180" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#0a6180" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="wave wave-back" fill="url(#waveGrad2)" d="M0,160 C240,220 480,100 720,140 C960,180 1200,240 1440,160 L1440,320 L0,320 Z" />
        <path className="wave wave-front" fill="url(#waveGrad1)" d="M0,200 C240,140 480,260 720,200 C960,140 1200,220 1440,190 L1440,320 L0,320 Z" />
      </svg>
    </div>
  );
}
