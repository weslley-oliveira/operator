import { twMerge } from 'tailwind-merge';

const SIZE = 180;
const STROKE = 2;

// Single conic-gradient: colored arc up to score%, then gray for the rest.
// from -90deg = starts at 12 o'clock, goes clockwise.
function buildGradient(score: number): string {
  const pct = score * 10; // 0–100%
  if (pct <= 0) {
    return 'conic-gradient(from -90deg, #2A2A2A 0%, #2A2A2A 100%)';
  }
  return `conic-gradient(from -90deg, #10B981 0%, #F59E0B ${pct}%, #2A2A2A ${pct}%, #2A2A2A 100%)`;
}

// Mask: transparent inside the ring, visible only in the outer STROKE-px band.
// Uses explicit px so the cutoff is always exact (percentage would use farthest-corner ≠ radius).
const INNER_RADIUS = SIZE / 2 - STROKE; // 90 - 2 = 88px
const RING_MASK = `radial-gradient(circle at center, transparent ${INNER_RADIUS}px, black ${INNER_RADIUS}px)`;

type ScoreRingProps = {
  score: number; // 0–10
  className?: string;
};

export function ScoreRing({ score, className }: ScoreRingProps) {
  const clamped = Math.max(0, Math.min(10, score));

  return (
    <div
      className={twMerge('relative inline-flex items-center justify-center', className)}
      style={{ width: SIZE, height: SIZE }}
    >
      {/* Single ring: gradient arc + gray background — no layering artifacts */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: buildGradient(clamped),
          WebkitMask: RING_MASK,
          mask: RING_MASK,
        }}
      />

      {/* Center score text — horizontal: "3.5" + "/10" side by side */}
      <div className="relative flex items-center gap-0.5">
        <span
          className="font-mono font-bold leading-none text-zinc-50"
          style={{ fontSize: 48 }}
        >
          {clamped.toFixed(1)}
        </span>
        <span className="font-mono text-base leading-none text-zinc-600">/10</span>
      </div>
    </div>
  );
}
