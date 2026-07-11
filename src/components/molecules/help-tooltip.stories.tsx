import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { HelpTooltip } from "./help-tooltip";

const meta: Meta<typeof HelpTooltip> = {
  title: "Molecules/HelpTooltip",
  component: HelpTooltip,
  args: {
    title: "Sign in",
    content:
      "This form is AquaTrade account authentication UI and is separate from Stellar wallet signing.",
  },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof HelpTooltip>;

export const English: Story = {};

export const BahasaIndonesia: Story = {
  args: {
    title: "Masuk",
    content:
      "Formulir ini adalah antarmuka autentikasi akun AquaTrade dan terpisah dari penandatanganan dompet Stellar.",
  },
  decorators: [withI18n("id")],
};

export const ChineseTooltip: Story = {
  args: {
    title: "登录",
    content: "此表单是 AquaTrade 账户身份验证界面，与 Stellar 钱包签名相互独立。",
  },
  decorators: [withI18n("zh-CN")],
};
