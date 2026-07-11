import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";

import { withI18n } from "@/stories/with-i18n";
import { LoginFormCard } from "./login-form-card";

const meta: Meta<typeof LoginFormCard> = {
  title: "Organisms/LoginFormCard",
  component: LoginFormCard,
  parameters: { nextjs: { navigation: { pathname: "/en/login" } } },
  decorators: [
    withI18n("en"),
    (Story) => (
      <div style={{ width: 440 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginFormCard>;

export const English: Story = {};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Sign in" }));
  },
};

export const BahasaIndonesia: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
