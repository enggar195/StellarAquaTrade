import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import {
  DEFAULT_FISH_BATCH_FILTERS,
  FISH_BATCHES,
  type FishBatchFilterState,
} from "@/features/fish-batches/data/fish-batches.mock";
import { filterFishBatches } from "@/features/fish-batches/fish-batch-logic";
import { withI18n } from "@/stories/with-i18n";
import { FishBatchFilterToolbar, type FishBatchView } from "./fish-batch-filter-toolbar";

function ToolbarDemo({ initial }: { initial?: Partial<FishBatchFilterState> }) {
  const [filters, setFilters] = useState<FishBatchFilterState>({ ...DEFAULT_FISH_BATCH_FILTERS, ...initial });
  const [view, setView] = useState<FishBatchView>("table");
  const resultCount = filterFishBatches(FISH_BATCHES, filters).length;
  return (
    <FishBatchFilterToolbar
      filters={filters}
      onChange={(patch) => setFilters((current) => ({ ...current, ...patch }))}
      onReset={() => setFilters(DEFAULT_FISH_BATCH_FILTERS)}
      view={view}
      onViewChange={setView}
      resultCount={resultCount}
      total={FISH_BATCHES.length}
    />
  );
}

const meta: Meta<typeof ToolbarDemo> = {
  title: "FishBatches/Organisms/FishBatchFilterToolbar",
  component: ToolbarDemo,
  parameters: { layout: "fullscreen" },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof ToolbarDemo>;

export const Default: Story = {};
export const Filtered: Story = { args: { initial: { qc: "pending", availability: "available" } } };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
