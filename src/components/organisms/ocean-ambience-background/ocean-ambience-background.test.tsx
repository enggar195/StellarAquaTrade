// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";

import "@/test/dom";
import { INTENSITY_BUBBLES, createBubbles } from "./bubbles";
import { OceanAmbienceBackground } from "./ocean-ambience-background";

afterEach(() => cleanup());

describe("createBubbles (deterministic)", () => {
  it("returns exactly the requested count", () => {
    expect(createBubbles(24)).toHaveLength(24);
    expect(createBubbles(10)).toHaveLength(10);
  });

  it("produces identical output across calls (no randomness)", () => {
    expect(createBubbles(24)).toEqual(createBubbles(24));
  });

  it("keeps bubbles within the visible opacity range", () => {
    for (const bubble of createBubbles(24)) {
      expect(bubble.opacity).toBeGreaterThanOrEqual(0.18);
      expect(bubble.opacity).toBeLessThanOrEqual(0.5);
      expect(bubble.left).toBeGreaterThanOrEqual(0);
      expect(bubble.left).toBeLessThan(100);
    }
  });
});

describe("OceanAmbienceBackground", () => {
  it("is decorative (aria-hidden) and non-interactive", () => {
    const { container } = render(<OceanAmbienceBackground />);
    const root = container.querySelector(".ocean-ambience");
    expect(root).not.toBeNull();
    expect(root).toHaveAttribute("aria-hidden", "true");
  });

  it("renders one bubble per requested count", () => {
    const { container } = render(<OceanAmbienceBackground bubbleCount={24} />);
    expect(container.querySelectorAll(".ocean-bubble")).toHaveLength(24);
  });

  it("uses the intensity default bubble count when not overridden", () => {
    const { container } = render(<OceanAmbienceBackground intensity="subtle" />);
    expect(container.querySelectorAll(".ocean-bubble")).toHaveLength(INTENSITY_BUBBLES.subtle);
  });

  it("renders all ambience layers, with caustics/mist toggleable", () => {
    const { container, rerender } = render(<OceanAmbienceBackground showCaustics showMist />);
    expect(container.querySelector(".ocean-base")).not.toBeNull();
    expect(container.querySelector(".ocean-glow-cyan")).not.toBeNull();
    expect(container.querySelector(".ocean-caustics")).not.toBeNull();
    expect(container.querySelector(".ocean-mist")).not.toBeNull();
    expect(container.querySelector(".ocean-grid")).not.toBeNull();

    rerender(<OceanAmbienceBackground showCaustics={false} showMist={false} />);
    expect(container.querySelector(".ocean-caustics")).toBeNull();
    expect(container.querySelector(".ocean-mist")).toBeNull();
  });
});
