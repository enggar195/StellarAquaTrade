import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DashboardContentLayout } from "@/components/templates/dashboard-content-layout";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";
import type { Role } from "@/features/dashboard-shell/navigation";
import { DashboardLayout } from "./dashboard-layout";

interface Args {
  locale: Locale;
  role: Role;
}

function Framed({ locale, role }: Args) {
  const dict = getDictionary(locale);
  return (
    <I18nProvider locale={locale} dict={dict}>
      <DashboardLayout
        role={role}
        breadcrumbs={[
          { label: dict.dashboard.breadcrumbHome, href: `/${locale}/dashboard` },
          { label: dict.dashboard.pageTitle, current: true },
        ]}
      >
        <DashboardContentLayout title={dict.dashboard.pageTitle} description={dict.dashboard.bannerTitle}>
          <p style={{ color: "var(--muted)" }}>{dict.dashboard.bannerBody}</p>
        </DashboardContentLayout>
      </DashboardLayout>
    </I18nProvider>
  );
}

const meta: Meta<typeof Framed> = {
  title: "Dashboard/Templates/DashboardLayout",
  component: Framed,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/en/dashboard" } } },
  args: { locale: "en", role: "buyer" },
};

export default meta;
type Story = StoryObj<typeof Framed>;

export const Default: Story = {};
export const Exporter: Story = { args: { role: "exporter" } };
export const Admin: Story = { args: { role: "admin" } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const BahasaIndonesia: Story = {
  args: { locale: "id" },
  parameters: { nextjs: { navigation: { pathname: "/id/dashboard" } } },
};
export const ChineseLabels: Story = {
  args: { locale: "zh-CN" },
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/dashboard" } } },
};
