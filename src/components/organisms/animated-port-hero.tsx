"use client";

/**
 * Premium animated night-port illustration for the Login showcase. A large
 * container ship is the focal point at a Stellar-blue terminal: quay container
 * cranes (CC) load it, an RTG straddles the yard stacks, terminal lights glow,
 * and a cargo aircraft crosses the sky. Pure inline SVG. Decorative only
 * (aria-hidden). Motion is disabled when the visitor prefers reduced motion —
 * the composition stays visually complete either way.
 */

import { useReducedMotion } from "@/lib/use-reduced-motion";

const CONTAINER_COLORS = ["#22d3ee", "#fb923c", "#2dd4bf", "#60a5fa", "#fbbf24", "#fb7185"];

function Container({ x, y, w = 40, h = 24, color }: { x: number; y: number; w?: number; h?: number; color: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height={h} rx="2" fill={color} />
      <rect width={w} height={h} rx="2" fill="#000" opacity="0.16" />
      <rect width={w} height={h} rx="2" fill={color} opacity="0.8" />
      <line x1={w * 0.34} y1="2" x2={w * 0.34} y2={h - 2} stroke="#0b1a24" strokeWidth="0.6" opacity="0.35" />
      <line x1={w * 0.66} y1="2" x2={w * 0.66} y2={h - 2} stroke="#0b1a24" strokeWidth="0.6" opacity="0.35" />
    </g>
  );
}

function QuayCrane({ x, boom, animated }: { x: number; boom: number; animated: boolean }) {
  // Vertical portal at `x`, boom reaching left toward the ship.
  const top = 250;
  const base = 470;
  const boomLeft = x - boom;
  return (
    <g stroke="#48596d" strokeWidth="3.5" fill="none" opacity="0.9">
      {/* legs */}
      <line x1={x} y1={base} x2={x} y2={top} />
      <line x1={x + 34} y1={base} x2={x + 34} y2={top} />
      <line x1={x} y1={base - 60} x2={x + 34} y2={base - 60} stroke="#3a4859" strokeWidth="2.5" />
      {/* apex pylon */}
      <path d={`M${x + 8},${top} L${x + 17},${top - 34} L${x + 26},${top}`} stroke="#54677d" />
      {/* boom over the water + back-stay */}
      <line x1={boomLeft} y1={top + 8} x2={x + 34} y2={top + 8} stroke="#54677d" strokeWidth="4" />
      <line x1={x + 17} y1={top - 34} x2={boomLeft + 6} y2={top + 8} stroke="#3f4f61" strokeWidth="2" />
      <line x1={x + 17} y1={top - 34} x2={x + 60} y2={top + 8} stroke="#3f4f61" strokeWidth="2" />
      {/* trolley + hoist + spreader */}
      <g>
        <rect x={boomLeft} y={top + 2} width="14" height="10" rx="1.5" fill="#6b7f96" stroke="none" />
        <line x1={boomLeft + 7} y1={top + 12} x2={boomLeft + 7} y2={top + 44} stroke="#6b7f96" strokeWidth="1.4" />
        <rect x={boomLeft - 6} y={top + 44} width="26" height="12" rx="1.5" fill="#fb923c" stroke="none" opacity="0.9" />
        {animated && (
          <animateTransform attributeName="transform" type="translate" values="0 0; 150 0; 0 0" dur="16s" repeatCount="indefinite" />
        )}
      </g>
      {/* warning light on top */}
      <circle cx={x + 17} cy={top - 36} r="2.4" fill="#ff6174" stroke="none">
        {animated && <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />}
      </circle>
    </g>
  );
}

function Rtg({ x, animated }: { x: number; animated: boolean }) {
  const top = 402;
  const base = 470;
  return (
    <g fill="none">
      <g stroke="#46566a" strokeWidth="3" opacity="0.85">
        <line x1={x} y1={base} x2={x} y2={top} />
        <line x1={x + 64} y1={base} x2={x + 64} y2={top} />
        <line x1={x - 4} y1={top} x2={x + 68} y2={top} strokeWidth="3.5" />
        <rect x={x + 26} y={top - 2} width="14" height="9" rx="1.5" fill="#6b7f96" stroke="none" />
      </g>
      {/* stacks under the RTG */}
      <g stroke="none">
        <Container x={x + 6} y={base - 24} w={22} h={13} color={CONTAINER_COLORS[3]} />
        <Container x={x + 30} y={base - 24} w={22} h={13} color={CONTAINER_COLORS[2]} />
        <Container x={x + 18} y={base - 38} w={22} h={13} color={CONTAINER_COLORS[1]} />
      </g>
      <circle cx={x + 33} cy={top - 4} r="1.8" fill="#f6b84a" stroke="none">
        {animated && <animate attributeName="opacity" values="1;0.3;1" dur="2.4s" repeatCount="indefinite" />}
      </circle>
    </g>
  );
}

function LightPole({ x, base, height, blink, animated }: { x: number; base: number; height: number; blink?: number; animated: boolean }) {
  const topY = base - height;
  return (
    <g>
      <line x1={x} y1={base} x2={x} y2={topY} stroke="#3a4859" strokeWidth="2" />
      <circle cx={x} cy={topY} r="8" fill="url(#portLampGlow)" />
      <circle cx={x} cy={topY} r="2.4" fill="#ffe7b0">
        {animated && blink ? <animate attributeName="opacity" values="1;0.55;1" dur={`${blink}s`} repeatCount="indefinite" /> : null}
      </circle>
    </g>
  );
}

export interface AnimatedPortHeroProps {
  className?: string;
}

export function AnimatedPortHero({ className }: AnimatedPortHeroProps) {
  const reduced = useReducedMotion();
  const animated = !reduced;

  return (
    <div className={`port-hero${className ? ` ${className}` : ""}`} aria-hidden="true">
      <svg viewBox="0 0 520 980" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="portSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b1e34" />
            <stop offset="55%" stopColor="#0f2b46" />
            <stop offset="100%" stopColor="#13405f" />
          </linearGradient>
          <linearGradient id="portSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#103a56" />
            <stop offset="32%" stopColor="#0a2740" />
            <stop offset="100%" stopColor="#03101b" />
          </linearGradient>
          <linearGradient id="portHull" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#46586f" />
            <stop offset="100%" stopColor="#232c3a" />
          </linearGradient>
          <linearGradient id="portBridge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbe6f2" />
            <stop offset="100%" stopColor="#a7b6c9" />
          </linearGradient>
          <linearGradient id="portWhale" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a5a80" />
            <stop offset="100%" stopColor="#102a41" />
          </linearGradient>
          <radialGradient id="portMoonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cdeefb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cdeefb" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="portLampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffdf9e" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffdf9e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="portGodRay" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#8fdcf0" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#8fdcf0" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="portReflect" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b2536" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0b2536" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sky + sea */}
        <rect x="0" y="0" width="520" height="472" fill="url(#portSky)" />
        <rect x="0" y="472" width="520" height="508" fill="url(#portSea)" />

        {/* Stars */}
        {[
          [40, 44, 1.1], [110, 90, 0.8], [170, 34, 1], [250, 66, 0.7], [320, 28, 0.9],
          [400, 70, 0.8], [150, 150, 0.7], [60, 120, 0.9], [300, 140, 0.8], [220, 210, 0.7],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#dff4fb">
            {animated && <animate attributeName="opacity" values="0.25;1;0.25" dur={`${3 + (i % 5)}s`} repeatCount="indefinite" />}
          </circle>
        ))}

        {/* Moon */}
        <circle cx="120" cy="96" r="82" fill="url(#portMoonGlow)" />
        <circle cx="120" cy="96" r="22" fill="#e8f7fd" opacity="0.9" />
        <circle cx="128" cy="90" r="22" fill="url(#portSky)" opacity="0.5" />

        {/* Cargo aircraft crossing the sky */}
        <g opacity="0.85">
          <g transform="translate(0,0)">
            <g transform="translate(-30,150) scale(0.9)">
              <path d="M0,0 L34,3 L44,0 L34,-3 Z" fill="#9fb2c4" />
              <path d="M14,0 L2,-11 L10,-1 Z" fill="#7c8ea3" />
              <path d="M14,0 L2,11 L10,1 Z" fill="#7c8ea3" />
              <path d="M32,-2 L28,-8 L33,-2 Z" fill="#7c8ea3" />
              <circle cx="2" cy="0" r="1.6" fill="#ff6174">
                {animated && <animate attributeName="opacity" values="1;0.1;1" dur="1.4s" repeatCount="indefinite" />}
              </circle>
            </g>
            {animated && (
              <animateTransform attributeName="transform" type="translate" values="-60 0; 620 -46" dur="26s" repeatCount="indefinite" />
            )}
          </g>
        </g>

        {/* Under-surface light rays */}
        <g>
          <polygon points="150,472 120,980 240,980 220,472" fill="url(#portGodRay)">
            {animated && <animate attributeName="opacity" values="0.35;0.75;0.35" dur="8s" repeatCount="indefinite" />}
          </polygon>
          <polygon points="330,472 350,980 440,980 388,472" fill="url(#portGodRay)">
            {animated && <animate attributeName="opacity" values="0.7;0.3;0.7" dur="10s" repeatCount="indefinite" />}
          </polygon>
        </g>

        {/* ===== Port terminal (right background) ===== */}
        {/* quay platform */}
        <rect x="356" y="456" width="164" height="18" fill="#0c2436" />
        <rect x="356" y="456" width="164" height="4" fill="#16405c" opacity="0.7" />
        {/* distant terminal glow */}
        <rect x="360" y="430" width="160" height="30" fill="#0f3a56" opacity="0.25" />
        {/* yard container stacks on land */}
        <g>
          {[0, 1, 2, 3].map((r) => (
            <Container key={`y0-${r}`} x={430 + r * 22} y={444} w={20} h={12} color={CONTAINER_COLORS[(r + 1) % CONTAINER_COLORS.length]} />
          ))}
          {[0, 1, 2].map((r) => (
            <Container key={`y1-${r}`} x={441 + r * 22} y={432} w={20} h={12} color={CONTAINER_COLORS[(r + 3) % CONTAINER_COLORS.length]} />
          ))}
        </g>
        <Rtg x={452} animated={animated} />
        {/* quay cranes loading the ship */}
        <QuayCrane x={392} boom={150} animated={animated} />
        <QuayCrane x={456} boom={196} animated={animated} />
        {/* terminal light poles */}
        <LightPole x={372} base={456} height={70} blink={0} animated={animated} />
        <LightPole x={506} base={456} height={84} blink={5} animated={animated} />
        <LightPole x={344} base={472} height={54} blink={7} animated={animated} />

        {/* Deep whale */}
        <g opacity="0.22">
          <g transform="translate(0,0)">
            <g transform="scale(1.1)">
              <path d="M-64,0 C-42,-28 34,-26 66,-8 C78,-2 78,4 62,10 C26,26 -42,26 -64,6 Z" fill="url(#portWhale)" />
              <path d="M-64,4 L-92,-16 L-78,3 L-92,22 Z" fill="url(#portWhale)" />
              <circle cx="50" cy="-3" r="2.2" fill="#0b1a24" />
            </g>
            {animated && (
              <animateMotion dur="64s" begin="-12s" repeatCount="indefinite" rotate="auto"
                path="M600,800 C440,778 300,822 160,800 C40,782 -80,818 -160,798" />
            )}
          </g>
        </g>

        {/* ===== Grand container ship (focus) ===== */}
        <g>
          <g>
            <path d="M60,472 L400,472 L384,512 Q232,530 84,512 Z" fill="url(#portReflect)" transform="translate(0,4)" />
            {/* bow mast + flag */}
            <line x1="80" y1="472" x2="80" y2="388" stroke="#8493a6" strokeWidth="2.4" />
            <path d="M80,390 L54,396 L80,405 Z" fill="#22d3ee">
              {animated && <animateTransform attributeName="transform" type="rotate" values="0 80 396; 7 80 396; 0 80 396" dur="3.2s" repeatCount="indefinite" />}
            </path>
            {/* main mast + radar */}
            <line x1="224" y1="392" x2="224" y2="334" stroke="#8493a6" strokeWidth="2.4" />
            <line x1="210" y1="348" x2="238" y2="348" stroke="#8493a6" strokeWidth="2" />
            <circle cx="224" cy="332" r="3" fill="#e35d4a">
              {animated && <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />}
            </circle>
            {/* deck cargo */}
            {[
              { y: 446, xs: [84, 126, 168, 210, 252, 294] },
              { y: 420, xs: [106, 148, 190, 232, 274] },
              { y: 394, xs: [128, 170, 212, 254] },
            ].map((row) =>
              row.xs.map((cx, i) => (
                <Container key={`${row.y}-${cx}`} x={cx} y={row.y} color={CONTAINER_COLORS[(i + row.y) % CONTAINER_COLORS.length]} />
              )),
            )}
            {/* bridge + funnel + smoke */}
            <rect x="330" y="398" width="50" height="74" rx="4" fill="url(#portBridge)" />
            <rect x="336" y="406" width="38" height="9" rx="1.5" fill="#1f3448" />
            <rect x="336" y="420" width="38" height="7" rx="1.5" fill="#2b4258" opacity="0.85" />
            <rect x="336" y="432" width="38" height="7" rx="1.5" fill="#2b4258" opacity="0.7" />
            <rect x="346" y="368" width="19" height="31" rx="2.5" fill="#33404f" />
            <rect x="346" y="376" width="19" height="7" fill="#e35d4a" />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx="356" cy="364" r={5 + i} fill="#9fb2c4" opacity="0">
                {animated && (
                  <>
                    <animate attributeName="cy" values="364;326" dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;0.4;0" dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" />
                    <animate attributeName="r" values={`${4 + i};${9 + i}`} dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" />
                  </>
                )}
              </circle>
            ))}
            {/* hull */}
            <path d="M60,472 L400,472 L386,518 Q232,538 88,518 Z" fill="url(#portHull)" />
            <path d="M60,472 L400,472 L398,484 L62,484 Z" fill="#e35d4a" opacity="0.92" />
            {[100, 136, 172, 208, 244, 280, 316].map((cx) => (
              <circle key={cx} cx={cx} cy="498" r="3.2" fill="#0b1a24" opacity="0.5" />
            ))}
            {animated && (
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0; 0 4; 0 0" dur="6.5s" repeatCount="indefinite" />
            )}
          </g>
          {animated && (
            <animateTransform attributeName="transform" type="translate" values="0 0; 18 0; 0 0; -14 0; 0 0" dur="22s" repeatCount="indefinite" additive="sum" />
          )}
        </g>

        {/* Foam wake */}
        {[0, 1, 2].map((i) => (
          <ellipse key={i} cx={92 - i * 15} cy={516} rx={8 - i} ry={2.4} fill="#dff4fb" opacity="0">
            {animated && <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin={`${-i}s`} repeatCount="indefinite" />}
          </ellipse>
        ))}

        {/* Water surface waves */}
        <g>
          <path d="M-120,502 C-40,492 40,514 120,502 C200,490 280,514 360,502 C440,490 520,514 600,502 L600,572 L-120,572 Z" fill="#0e3550" opacity="0.55">
            {animated && <animateTransform attributeName="transform" type="translate" values="0 0; -80 0; 0 0" dur="10s" repeatCount="indefinite" />}
          </path>
          <path d="M-120,518 C-40,510 40,530 120,518 C200,506 280,528 360,518 C440,510 520,528 600,518 L600,596 L-120,596 Z" fill="#123f5e" opacity="0.6">
            {animated && <animateTransform attributeName="transform" type="translate" values="0 0; 60 0; 0 0" dur="8s" repeatCount="indefinite" />}
          </path>
        </g>

        {/* Terminal light reflections shimmering on the water */}
        {[372, 452, 506].map((x, i) => (
          <rect key={x} x={x - 2} y={476} width="4" height="70" fill="#ffdf9e" opacity="0.14">
            {animated && <animate attributeName="opacity" values="0.05;0.2;0.05" dur={`${4 + i}s`} repeatCount="indefinite" />}
          </rect>
        ))}

        {/* Subtle drifting fish */}
        <g opacity="0.5">
          <g transform="scale(0.7)">
            <path d="M-10,0 Q-2,-7 9,-4 Q14,-2 16,0 Q14,2 9,4 Q-2,7 -10,0 Z" fill="#fb923c" />
            <path d="M-10,0 L-19,-6 L-15,0 L-19,6 Z" fill="#fb923c" />
          </g>
          {animated && (
            <animateMotion dur="20s" repeatCount="indefinite" rotate="auto"
              path="M-40,660 C120,642 260,684 420,662 C520,650 580,678 580,664" />
          )}
        </g>

        {/* Bubbles */}
        {[
          { x: 130, r: 3, dur: "10s", begin: "0s" },
          { x: 210, r: 2, dur: "8s", begin: "-2s" },
          { x: 320, r: 3.5, dur: "12s", begin: "-4s" },
          { x: 250, r: 3, dur: "11s", begin: "-5s" },
          { x: 420, r: 2.2, dur: "9s", begin: "-1s" },
        ].map((b, i) => (
          <circle key={i} cx={b.x} cy="0" r={b.r} fill="#bfe9f7" opacity="0">
            {animated && (
              <>
                <animate attributeName="cy" values="960;520" dur={b.dur} begin={b.begin} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.6;0.6;0" dur={b.dur} begin={b.begin} repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}

        {/* Seabed + seaweed */}
        <path d="M0,980 L0,940 C90,926 150,946 240,936 C330,926 400,942 520,932 L520,980 Z" fill="#05202f" />
        {[
          { x: 54, h: 46, dur: "5.5s" },
          { x: 74, h: 32, dur: "6.5s" },
          { x: 470, h: 40, dur: "6s" },
        ].map((wsea, i) => (
          <path key={i}
            d={`M${wsea.x},940 C${wsea.x - 9},${940 - wsea.h * 0.5} ${wsea.x + 9},${940 - wsea.h * 0.7} ${wsea.x},${940 - wsea.h}`}
            fill="none" stroke="#0f7a63" strokeWidth="4.5" strokeLinecap="round" opacity="0.7">
            {animated && <animateTransform attributeName="transform" type="rotate" values={`-6 ${wsea.x} 940; 6 ${wsea.x} 940; -6 ${wsea.x} 940`} dur={wsea.dur} repeatCount="indefinite" />}
          </path>
        ))}
      </svg>
    </div>
  );
}
