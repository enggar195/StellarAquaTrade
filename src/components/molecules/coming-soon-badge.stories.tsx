import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ComingSoonBadge } from "./coming-soon-badge";

const meta: Meta<typeof ComingSoonBadge> = {
  title: "Dashboard/Molecules/ComingSoonBadge",
  component: ComingSoonBadge,
  args: { label: "Coming soon" },
};

export default meta;
type Story = StoryObj<typeof ComingSoonBadge>;

export const English: Story = {};
export const BahasaIndonesia: Story = { args: { label: "Segera hadir" } };
export const SimplifiedChinese: Story = { args: { label: "即将推出" } };
