/**
 * Layered oceanic backdrop for the dashboard shell. Fixed behind all content,
 * decorative only (aria-hidden), deterministic (no random) so server and client
 * markup match. Deliberately restrained — deep ocean gradient, soft cyan/indigo
 * glows, a faint grid + mist, and slow low-opacity rising bubbles — so tables,
 * charts, KPI cards and the topbar stay fully readable.
 */

const BUBBLES = [
  { left: 8, size: 10, delay: 0, duration: 30 },
  { left: 17, size: 6, delay: 9, duration: 26 },
  { left: 26, size: 14, delay: 4, duration: 36 },
  { left: 38, size: 8, delay: 14, duration: 28 },
  { left: 47, size: 11, delay: 2, duration: 34 },
  { left: 56, size: 7, delay: 18, duration: 24 },
  { left: 64, size: 16, delay: 7, duration: 40 },
  { left: 73, size: 9, delay: 12, duration: 30 },
  { left: 82, size: 6, delay: 21, duration: 26 },
  { left: 90, size: 12, delay: 5, duration: 38 },
];

export function DashboardAtmosphere() {
  return (
    <div className="dash-atmosphere" aria-hidden="true">
      <span className="dash-glow dash-glow-cyan" />
      <span className="dash-glow dash-glow-indigo" />
      <div className="dash-mist" />
      <div className="dash-grid" />
      <div className="dash-bubbles">
        {BUBBLES.map((bubble, index) => (
          <span
            key={index}
            className="dash-bubble"
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
