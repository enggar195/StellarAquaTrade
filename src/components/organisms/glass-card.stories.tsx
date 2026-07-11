import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GlassCard } from "./glass-card";

const meta: Meta<typeof GlassCard> = {
  title: "Organisms/GlassCard",
  component: GlassCard,
  decorators: [
    (Story) => (
      <div style={{ width: 380 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <>
        <h3 className="aq-card-title">Glass surface</h3>
        <p className="aq-card-subtitle">Dark translucent, blurred, thin border.</p>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof GlassCard>;

export const Default: Story = {};
