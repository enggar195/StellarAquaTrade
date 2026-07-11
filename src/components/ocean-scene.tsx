/**
 * Full-height ocean showcase scene, portrait format. A grand container cargo
 * ship is the dominant focal point on the surface, with a moonlit night sky
 * above and a calm deep below (subtle whale + a few drifting fish + bubbles).
 * Pure inline SVG with SMIL motion — self-contained, deterministic, decorative
 * only (aria-hidden). No state, no external assets. Rendered full-bleed behind
 * the showcase brand/copy, so top and bottom stay visually calm for legibility.
 */

const CONTAINER_COLORS = {
  cyan: "#22d3ee",
  teal: "#2dd4bf",
  orange: "#fb923c",
  blue: "#60a5fa",
  amber: "#fbbf24",
  rose: "#fb7185",
};

const PALETTE = [
  CONTAINER_COLORS.cyan,
  CONTAINER_COLORS.orange,
  CONTAINER_COLORS.teal,
  CONTAINER_COLORS.blue,
  CONTAINER_COLORS.amber,
  CONTAINER_COLORS.rose,
];

function Container({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width="42" height="26" rx="2.5" fill={color} />
      <rect width="42" height="26" rx="2.5" fill="#000" opacity="0.16" />
      <rect width="42" height="26" rx="2.5" fill={color} opacity="0.82" />
      <line x1="14" y1="2" x2="14" y2="24" stroke="#0b1a24" strokeWidth="0.7" opacity="0.35" />
      <line x1="28" y1="2" x2="28" y2="24" stroke="#0b1a24" strokeWidth="0.7" opacity="0.35" />
      <line x1="1.5" y1="13" x2="40.5" y2="13" stroke="#ffffff" strokeWidth="0.6" opacity="0.1" />
    </g>
  );
}

function Fish({
  path,
  dur,
  begin,
  color,
  scale = 1,
  opacity = 0.7,
}: {
  path: string;
  dur: string;
  begin: string;
  color: string;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g opacity={opacity}>
      <g transform={`scale(${scale})`}>
        <path d="M-10,0 Q-2,-7 9,-4 Q14,-2 16,0 Q14,2 9,4 Q-2,7 -10,0 Z" fill={color} />
        <path d="M-10,0 L-19,-6 L-15,0 L-19,6 Z" fill={color} />
        <path d="M2,-4 L7,-9 L9,-3 Z" fill={color} opacity="0.8" />
        <circle cx="10" cy="-1" r="1.2" fill="#0b1a24" />
      </g>
      <animateMotion dur={dur} begin={begin} repeatCount="indefinite" rotate="auto" path={path} />
    </g>
  );
}

function Whale() {
  return (
    <g opacity="0.26">
      <g transform="scale(1.1)">
        <path
          d="M-64,0 C-42,-28 34,-26 66,-8 C78,-2 78,4 62,10 C26,26 -42,26 -64,6 Z"
          fill="url(#whaleGrad)"
        />
        <path d="M-64,4 L-92,-16 L-78,3 L-92,22 Z" fill="url(#whaleGrad)" />
        <path d="M4,18 L26,40 L40,18 Z" fill="#123049" />
        <path d="M-58,8 C-16,26 34,24 64,10 C40,20 -18,24 -58,10 Z" fill="#9fc4de" opacity="0.22" />
        <circle cx="50" cy="-3" r="2.2" fill="#0b1a24" />
      </g>
      <animateMotion
        dur="58s"
        begin="-10s"
        repeatCount="indefinite"
        rotate="auto"
        path="M560,782 C420,760 300,804 180,782 C60,762 -60,800 -140,780"
      />
    </g>
  );
}

const STARS = [
  { x: 44, y: 40, r: 1.1 },
  { x: 96, y: 84, r: 0.8 },
  { x: 150, y: 30, r: 1 },
  { x: 214, y: 60, r: 0.7 },
  { x: 286, y: 26, r: 0.9 },
  { x: 120, y: 150, r: 0.7 },
  { x: 40, y: 118, r: 0.9 },
  { x: 250, y: 128, r: 0.8 },
  { x: 200, y: 200, r: 0.7 },
  { x: 300, y: 176, r: 1 },
];

// Distant horizon ship silhouettes.
const FAR_SHIPS = [
  { x: 70, s: 1 },
  { x: 388, s: 0.8 },
];

// Deck cargo pyramid — rows of stacked containers (bow left, bridge right).
const CARGO_ROWS = [
  { y: 404, xs: [80, 124, 168, 212, 256, 300] },
  { y: 378, xs: [102, 146, 190, 234, 278] },
  { y: 352, xs: [124, 168, 212, 256] },
];

export function OceanScene() {
  return (
    <div className="ocean-scene" aria-hidden="true">
      <svg
        viewBox="0 0 480 960"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c1f36" />
            <stop offset="55%" stopColor="#0f2b45" />
            <stop offset="100%" stopColor="#123a58" />
          </linearGradient>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e3550" />
            <stop offset="30%" stopColor="#0a2740" />
            <stop offset="100%" stopColor="#03101b" />
          </linearGradient>
          <linearGradient id="hullGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#46586f" />
            <stop offset="100%" stopColor="#232c3a" />
          </linearGradient>
          <linearGradient id="bridgeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbe6f2" />
            <stop offset="100%" stopColor="#a7b6c9" />
          </linearGradient>
          <linearGradient id="whaleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a5a80" />
            <stop offset="100%" stopColor="#102a41" />
          </linearGradient>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cdeefb" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#cdeefb" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="godRay" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#8fdcf0" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#8fdcf0" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="reflectGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b2536" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0b2536" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sky + sea */}
        <rect x="0" y="0" width="480" height="432" fill="url(#skyGrad)" />
        <rect x="0" y="432" width="480" height="528" fill="url(#seaGrad)" />

        {/* Stars */}
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#dff4fb">
            <animate attributeName="opacity" values="0.25;1;0.25" dur={`${3 + (i % 5)}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Moon + glow (upper right) */}
        <circle cx="372" cy="96" r="90" fill="url(#moonGlow)" />
        <circle cx="372" cy="96" r="24" fill="#e8f7fd" opacity="0.9" />
        <circle cx="380" cy="90" r="24" fill="url(#skyGrad)" opacity="0.5" />

        {/* Under-surface light rays */}
        <g>
          <polygon points="150,432 118,960 232,960 214,432" fill="url(#godRay)">
            <animate attributeName="opacity" values="0.35;0.75;0.35" dur="8s" repeatCount="indefinite" />
          </polygon>
          <polygon points="300,432 322,960 408,960 352,432" fill="url(#godRay)">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="10s" repeatCount="indefinite" />
          </polygon>
        </g>

        {/* Distant horizon ships */}
        {FAR_SHIPS.map((f, i) => (
          <g key={i} opacity="0.3" fill="#1c3a54" transform={`translate(${f.x},420) scale(${f.s})`}>
            <rect x="0" y="0" width="48" height="8" rx="1.5" />
            <rect x="11" y="-9" width="26" height="9" rx="1.5" />
            <rect x="20" y="-16" width="10" height="8" />
          </g>
        ))}

        {/* Deep whale (behind everything underwater) */}
        <Whale />

        {/* ===== Grand container ship (hero, bobbing) ===== */}
        <g>
          <g>
            {/* faint reflection on the water */}
            <path d="M62,432 L418,432 L404,470 Q240,486 96,470 Z" fill="url(#reflectGrad)" transform="translate(0,4)" />

            {/* bow mast + flag (left) */}
            <line x1="80" y1="432" x2="80" y2="344" stroke="#8493a6" strokeWidth="2.4" />
            <path d="M80,346 L52,352 L80,362 Z" fill={CONTAINER_COLORS.cyan}>
              <animateTransform attributeName="transform" type="rotate" values="0 80 352; 7 80 352; 0 80 352" dur="3.2s" repeatCount="indefinite" />
            </path>

            {/* main mast + radar (centre) */}
            <line x1="234" y1="352" x2="234" y2="292" stroke="#8493a6" strokeWidth="2.4" />
            <line x1="220" y1="306" x2="248" y2="306" stroke="#8493a6" strokeWidth="2" />
            <circle cx="234" cy="290" r="3" fill="#e35d4a">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* deck cargo */}
            {CARGO_ROWS.map((row) =>
              row.xs.map((x, i) => (
                <Container key={`${row.y}-${x}`} x={x} y={row.y} color={PALETTE[(i + row.y) % PALETTE.length]} />
              )),
            )}

            {/* bridge / superstructure (stern, right) */}
            <rect x="352" y="356" width="52" height="76" rx="4" fill="url(#bridgeGrad)" />
            <rect x="358" y="364" width="40" height="9" rx="1.5" fill="#1f3448" />
            <rect x="358" y="378" width="40" height="7" rx="1.5" fill="#2b4258" opacity="0.85" />
            <rect x="358" y="390" width="40" height="7" rx="1.5" fill="#2b4258" opacity="0.7" />
            {/* funnel + smoke */}
            <rect x="368" y="326" width="20" height="32" rx="2.5" fill="#33404f" />
            <rect x="368" y="334" width="20" height="7" fill="#e35d4a" />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx="378" cy="322" r={5 + i} fill="#9fb2c4" opacity="0">
                <animate attributeName="cy" values="322;286" dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.4;0" dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" />
                <animate attributeName="r" values={`${4 + i};${9 + i}`} dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" />
              </circle>
            ))}

            {/* hull */}
            <path d="M62,432 L418,432 L404,480 Q240,500 96,480 Z" fill="url(#hullGrad)" />
            <path d="M62,432 L418,432 L416,444 L64,444 Z" fill="#e35d4a" opacity="0.92" />
            {[104, 140, 176, 212, 248, 284, 320, 356].map((cx) => (
              <circle key={cx} cx={cx} cy="460" r="3.4" fill="#0b1a24" opacity="0.5" />
            ))}

            {/* bob */}
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0; 0 4; 0 0" dur="6.5s" repeatCount="indefinite" />
          </g>
          {/* gentle horizontal drift of the whole ship */}
          <animateTransform attributeName="transform" type="translate" values="0 0; 22 0; 0 0; -18 0; 0 0" dur="22s" repeatCount="indefinite" additive="sum" />
        </g>

        {/* Foam wake at the bow */}
        {[0, 1, 2].map((i) => (
          <ellipse key={i} cx={94 - i * 16} cy={484} rx={9 - i} ry={2.6} fill="#dff4fb" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin={`${-i}s`} repeatCount="indefinite" />
          </ellipse>
        ))}

        {/* Water surface waves overlapping the hull */}
        <g>
          <path
            d="M-120,470 C-40,460 40,482 120,470 C200,458 280,482 360,470 C440,458 520,482 600,470 L600,540 L-120,540 Z"
            fill="#0e3550"
            opacity="0.55"
          >
            <animateTransform attributeName="transform" type="translate" values="0 0; -80 0; 0 0" dur="10s" repeatCount="indefinite" />
          </path>
          <path
            d="M-120,486 C-40,478 40,498 120,486 C200,474 280,496 360,486 C440,478 520,496 600,486 L600,560 L-120,560 Z"
            fill="#123f5e"
            opacity="0.6"
          >
            <animateTransform attributeName="transform" type="translate" values="0 0; 60 0; 0 0" dur="8s" repeatCount="indefinite" />
          </path>
        </g>

        {/* A few subtle drifting fish (kept minimal — ship stays dominant) */}
        <Fish path="M-40,624 C120,606 260,648 400,626 C480,614 540,642 540,628" dur="19s" begin="0s" color={CONTAINER_COLORS.orange} scale={0.7} opacity={0.55} />
        <Fish path="M540,712 C400,694 260,730 120,710 C40,700 -20,726 -40,714" dur="24s" begin="-6s" color={CONTAINER_COLORS.cyan} scale={0.6} opacity={0.45} />

        {/* Rising bubbles */}
        {[
          { x: 120, r: 3, dur: "10s", begin: "0s" },
          { x: 190, r: 2, dur: "8s", begin: "-2s" },
          { x: 300, r: 3.5, dur: "12s", begin: "-4s" },
          { x: 366, r: 2.4, dur: "9s", begin: "-1s" },
          { x: 244, r: 3, dur: "11s", begin: "-5s" },
          { x: 410, r: 2, dur: "8.5s", begin: "-3s" },
        ].map((b, i) => (
          <circle key={i} cx={b.x} cy="0" r={b.r} fill="#bfe9f7" opacity="0">
            <animate attributeName="cy" values="940;500" dur={b.dur} begin={b.begin} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" dur={b.dur} begin={b.begin} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Seabed + swaying seaweed + coral */}
        <path d="M0,960 L0,922 C90,908 150,928 240,918 C330,908 400,924 480,914 L480,960 Z" fill="#05202f" />
        {[
          { x: 48, h: 46, dur: "5.5s" },
          { x: 68, h: 32, dur: "6.5s" },
          { x: 414, h: 38, dur: "6s" },
          { x: 436, h: 52, dur: "7.5s" },
        ].map((w, i) => (
          <g key={i}>
            <path
              d={`M${w.x},922 C${w.x - 9},${922 - w.h * 0.5} ${w.x + 9},${922 - w.h * 0.7} ${w.x},${922 - w.h}`}
              fill="none"
              stroke="#0f7a63"
              strokeWidth="4.5"
              strokeLinecap="round"
              opacity="0.7"
            >
              <animateTransform attributeName="transform" type="rotate" values={`-6 ${w.x} 922; 6 ${w.x} 922; -6 ${w.x} 922`} dur={w.dur} repeatCount="indefinite" />
            </path>
          </g>
        ))}
        <path d="M235,922 C228,912 232,906 240,906 C248,906 252,912 245,922 Z" fill="#e35d7a" opacity="0.7" />
      </svg>
    </div>
  );
}
