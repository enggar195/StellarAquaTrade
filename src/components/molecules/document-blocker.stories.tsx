import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DocumentBlocker } from "./document-blocker";

const meta: Meta<typeof DocumentBlocker> = {
  title: "ExporterDashboard/Molecules/DocumentBlocker",
  component: DocumentBlocker,
};

export default meta;
type Story = StoryObj<typeof DocumentBlocker>;

export const Blocking: Story = { args: { text: "2 documents", blocking: true } };
export const PackingQc: Story = { args: { text: "Packing QC", blocking: true } };
export const Clear: Story = { args: { text: "None", blocking: false } };
