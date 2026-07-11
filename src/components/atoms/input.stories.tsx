import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  args: { placeholder: "name@company.com" },
  decorators: [
    (Story) => (
      <div style={{ width: 340 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Focused: Story = { args: { autoFocus: true } };
export const Error: Story = { args: { invalid: true, defaultValue: "not-an-email" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "name@company.com" } };
export const SimplifiedChinese: Story = { args: { placeholder: "请输入邮箱" } };
