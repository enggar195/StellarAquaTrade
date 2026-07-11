"use client";

import { GradientHeading } from "@/components/atoms/gradient-heading";
import { AnimatedPortHero } from "@/components/organisms/animated-port-hero";
import { ProductBrandBlock } from "@/components/organisms/product-brand-block";
import { FeatureChipRow } from "@/components/molecules/feature-chip-row";
import { useI18n } from "@/i18n/i18n-context";

/**
 * Full-bleed left showcase: brand block on top, animated night-port
 * illustration behind, value block (tagline, description, feature chips) below.
 * Top and bottom scrims keep the copy readable without hiding the scene.
 */
export function ShowcasePanel() {
  const { dict } = useI18n();
  const { brand, showcase } = dict.auth;

  return (
    <aside className="showcase-panel">
      <AnimatedPortHero />
      <div className="showcase-scrim" aria-hidden="true" />

      <ProductBrandBlock name={brand.name} subtitle={brand.subtitle} />

      <div className="showcase-copy">
        <GradientHeading as="h2" className="showcase-tagline">
          {showcase.tagline}
        </GradientHeading>
        <p className="showcase-desc">{showcase.description}</p>
        <FeatureChipRow items={showcase.chips} />
      </div>
    </aside>
  );
}
