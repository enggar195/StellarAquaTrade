import { Chip } from "@/components/atoms/chip";

export interface FeatureChipRowProps {
  items: string[];
}

/** Row of feature chips (fed from translation keys). */
export function FeatureChipRow({ items }: FeatureChipRowProps) {
  return (
    <ul className="aq-chip-row">
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </ul>
  );
}
