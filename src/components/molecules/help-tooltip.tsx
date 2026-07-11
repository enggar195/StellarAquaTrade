"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { TooltipTrigger } from "@/components/atoms/tooltip-trigger";
import { useI18n } from "@/i18n/i18n-context";

export interface HelpTooltipProps {
  /** Card title — used to build the "Explain {title}" accessible name. */
  title: string;
  content: string;
}

const OPEN_DELAY = 180;

/**
 * Accessible "?" help tooltip for card headers. Supports hover, keyboard focus,
 * mobile tap and Escape. Rendered in a portal so glass-card overflow can't clip
 * it. The tooltip is supplementary — it never holds information available
 * nowhere else.
 */
export function HelpTooltip({ title, content }: HelpTooltipProps) {
  const { dict, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  function position() {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({ top: rect.bottom + 10, left: rect.right });
  }

  function show() {
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => {
      position();
      setOpen(true);
    }, OPEN_DELAY);
  }
  function hide() {
    if (openTimer.current) clearTimeout(openTimer.current);
    setOpen(false);
  }
  function toggle() {
    if (open) {
      hide();
    } else {
      position();
      setOpen(true);
    }
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function onScrollResize() {
      position();
    }
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScrollResize, true);
    window.addEventListener("resize", onScrollResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScrollResize, true);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [open]);

  const explainLabel = t(dict.common.explain, { title });

  return (
    <span
      className="help-tooltip"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <TooltipTrigger
        ref={triggerRef}
        label={explainLabel}
        open={open}
        aria-describedby={open ? tooltipId : undefined}
        onClick={toggle}
      />
      {open && coords
        ? createPortal(
            <div
              id={tooltipId}
              role="tooltip"
              className="help-tooltip-pop"
              style={{ top: coords.top, left: coords.left }}
            >
              <strong>{title}</strong>
              <p>{content}</p>
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}
