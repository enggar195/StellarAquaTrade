import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within } from "storybook/test";

import { LanguageSwitcher } from "./language-switcher";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "Molecules/LanguageSwitcher",
  component: LanguageSwitcher,
  parameters: {
    nextjs: { navigation: { pathname: "/en/login" } },
  },
  args: { locale: "en", label: "Language", ariaChange: "Change language" },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const English: Story = {};
export const BahasaIndonesia: Story = {
  args: { locale: "id", label: "Bahasa", ariaChange: "Ubah bahasa" },
  parameters: { nextjs: { navigation: { pathname: "/id/login" } } },
};
export const SimplifiedChinese: Story = {
  args: { locale: "zh-CN", label: "语言", ariaChange: "切换语言" },
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/login" } } },
};
export const Open: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Change language" }));
  },
};
export const KeyboardFocus: Story = {
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
  },
};
