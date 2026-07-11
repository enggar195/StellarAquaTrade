import { LogoMark } from "@/components/atoms/logo-mark";

export interface ProductBrandBlockProps {
  name: string;
  subtitle: string;
}

/** AquaTrade brand lockup: logo mark + product name + subtitle. */
export function ProductBrandBlock({ name, subtitle }: ProductBrandBlockProps) {
  return (
    <div className="showcase-brand">
      <LogoMark />
      <div>
        <p className="brand-name">{name}</p>
        <p className="brand-sub">{subtitle}</p>
      </div>
    </div>
  );
}
