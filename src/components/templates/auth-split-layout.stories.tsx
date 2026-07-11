import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AuthRightColumn } from "@/components/organisms/auth-right-column";
import { ShowcasePanel } from "@/components/organisms/showcase-panel";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";
import { AuthSplitLayout } from "./auth-split-layout";

function Composed({ locale }: { locale: Locale }) {
  return (
    <I18nProvider locale={locale} dict={getDictionary(locale)}>
      <AuthSplitLayout showcase={<ShowcasePanel />} panel={<AuthRightColumn />} />
    </I18nProvider>
  );
}

const meta: Meta<typeof Composed> = {
  title: "Templates/AuthSplitLayout",
  component: Composed,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/en/login" } } },
  args: { locale: "en" },
};

export default meta;
type Story = StoryObj<typeof Composed>;

export const English: Story = {};
export const BahasaIndonesia: Story = {
  args: { locale: "id" },
  parameters: { nextjs: { navigation: { pathname: "/id/login" } } },
};
export const SimplifiedChinese: Story = {
  args: { locale: "zh-CN" },
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/login" } } },
};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
