import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CompanyIdentity } from "./company-identity";

const meta: Meta<typeof CompanyIdentity> = {
  title: "Dashboard/Molecules/CompanyIdentity",
  component: CompanyIdentity,
  args: { name: "AquaTrade Workspace", sublabel: "Prototype Workspace" },
};

export default meta;
type Story = StoryObj<typeof CompanyIdentity>;

export const English: Story = {};
export const Compact: Story = { args: { compact: true } };
export const BahasaIndonesia: Story = { args: { name: "Ruang Kerja AquaTrade", sublabel: "Ruang Kerja Prototipe" } };
export const ChineseLabels: Story = { args: { name: "AquaTrade 工作区", sublabel: "原型工作区" } };
