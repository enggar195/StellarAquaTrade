import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { GradeBadge } from "./grade-badge";

const g = en.fishBatches.gradeLabels;

const meta: Meta<typeof GradeBadge> = {
  title: "FishBatches/Atoms/GradeBadge",
  component: GradeBadge,
};

export default meta;
type Story = StoryObj<typeof GradeBadge>;

export const GradeA: Story = { args: { grade: "gradeA", label: g.gradeA } };
export const GradeB: Story = { args: { grade: "gradeB", label: g.gradeB } };
export const Premium: Story = { args: { grade: "premium", label: g.premium } };
export const ShowGrade: Story = { args: { grade: "showGrade", label: g.showGrade } };
