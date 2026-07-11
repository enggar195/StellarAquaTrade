import type { ReactNode } from "react";

import { PageHeader } from "@/components/organisms/page-header";

export interface DashboardContentLayoutProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

/** Content region layout: constrained width, page header, then page body. */
export function DashboardContentLayout({ title, description, actions, children }: DashboardContentLayoutProps) {
  return (
    <div className="content-layout">
      <PageHeader title={title} description={description} actions={actions} />
      <div className="content-body">{children}</div>
    </div>
  );
}
