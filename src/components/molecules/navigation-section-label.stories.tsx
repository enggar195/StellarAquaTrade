import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NavigationSectionLabel } from "./navigation-section-label";

const meta: Meta<typeof NavigationSectionLabel> = {
  title: "Dashboard/Molecules/NavigationSectionLabel",
  component: NavigationSectionLabel,
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
  args: { label: "Operations" },
};

export default meta;
type Story = StoryObj<typeof NavigationSectionLabel>;

export const English: Story = {};
export const Collapsed: Story = { args: { collapsed: true } };
export const BahasaIndonesia: Story = { args: { label: "Operasi" } };
export const ChineseLabels: Story = { args: { label: "运营" } };
export const LongIndonesianText: Story = { args: { label: "Inspeksi Kedatangan & Operasi" } };
