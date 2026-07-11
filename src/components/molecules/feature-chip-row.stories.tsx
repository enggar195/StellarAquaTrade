import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { id } from "@/i18n/dictionaries/id";
import { zhCN } from "@/i18n/dictionaries/zh-CN";
import { FeatureChipRow } from "./feature-chip-row";

const meta: Meta<typeof FeatureChipRow> = {
  title: "Molecules/FeatureChipRow",
  component: FeatureChipRow,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 460 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeatureChipRow>;

export const English: Story = { args: { items: en.auth.showcase.chips } };
export const BahasaIndonesia: Story = { args: { items: id.auth.showcase.chips } };
export const SimplifiedChinese: Story = { args: { items: zhCN.auth.showcase.chips } };
