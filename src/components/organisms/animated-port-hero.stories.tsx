import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AnimatedPortHero } from "./animated-port-hero";

const meta: Meta<typeof AnimatedPortHero> = {
  title: "Organisms/AnimatedPortHero",
  component: AnimatedPortHero,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: 460, height: 760, overflow: "hidden", borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AnimatedPortHero>;

export const Default: Story = {};

/**
 * Motion follows the visitor's prefers-reduced-motion setting. Enable
 * "Reduce motion" in the OS/browser (or the Storybook a11y tools) to see the
 * static, visually-complete composition.
 */
export const ReducedMotion: Story = {};
