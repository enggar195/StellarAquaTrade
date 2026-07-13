import type { FishBatchSpecies } from "@/features/fish-batches/data/fish-batches.mock";

export interface BatchMediaProps {
  species: FishBatchSpecies;
  alt: string;
  size?: "card" | "drawer";
}

/**
 * Deterministic, self-contained media placeholder (CSS + inline fish glyph). No
 * external image URLs — the tint is derived from the species so batches read as
 * distinct at a glance. Exposed to AT as an image with a localized label.
 */
export function BatchMedia({ species, alt, size = "card" }: BatchMediaProps) {
  return (
    <div className={`batch-media media-${species} media-${size}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 64 40" width="72" height="45" fill="currentColor" aria-hidden="true">
        <path d="M40 20c0-7-6-12-14-12-9 0-16 6-19 12 3 6 10 12 19 12 8 0 14-5 14-12z" opacity="0.9" />
        <path d="M40 20l14-9v18z" opacity="0.75" />
        <circle cx="18" cy="17" r="1.8" fill="#04121a" />
      </svg>
    </div>
  );
}
