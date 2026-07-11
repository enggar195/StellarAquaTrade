export interface NavigationSectionLabelProps {
  label: string;
  collapsed?: boolean;
}

/** Section group heading in the sidebar. Collapses to a subtle rule. */
export function NavigationSectionLabel({ label, collapsed = false }: NavigationSectionLabelProps) {
  if (collapsed) {
    return <div className="nav-section-label collapsed" aria-hidden="true" />;
  }
  return <div className="nav-section-label">{label}</div>;
}
