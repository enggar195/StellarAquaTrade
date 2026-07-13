import type { FishBatchGrade } from "@/features/fish-batches/data/fish-batches.mock";

export interface GradeBadgeProps {
  grade: FishBatchGrade;
  label: string;
}

/** Grade indicator with a grade-specific tone (label text always carries meaning). */
export function GradeBadge({ grade, label }: GradeBadgeProps) {
  return <span className={`grade-badge grade-${grade}`}>{label}</span>;
}
