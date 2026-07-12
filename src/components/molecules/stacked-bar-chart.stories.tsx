import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import {
  PREPARATION_TOTAL,
  PREPARATION_WORKLOAD,
  type StageKey,
} from "@/features/exporter-dashboard/data/exporter-dashboard.mock";
import { StackedBarChart } from "./stacked-bar-chart";

const e = en.exporterDashboard;
const STAGE_COLORS: Record<StageKey, string> = {
  allocation: "#60a5fa",
  healthDocuments: "#fbbf24",
  packing: "#34d3ee",
  ready: "#2dd4bf",
};
const segments = PREPARATION_WORKLOAD.map((w) => ({
  label: e.stages[w.stage],
  value: w.value,
  color: STAGE_COLORS[w.stage],
}));

const meta: Meta<typeof StackedBarChart> = {
  title: "ExporterDashboard/Molecules/StackedBarChart",
  component: StackedBarChart,
  decorators: [
    (Story) => (
      <div style={{ width: 380 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StackedBarChart>;

export const Default: Story = { args: { segments, total: PREPARATION_TOTAL } };
export const SingleStage: Story = { args: { segments: segments.slice(3), total: 1 } };
export const Empty: Story = { args: { segments: [], total: 0 } };
