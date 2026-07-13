"use client";

import { useEffect, useRef } from "react";

import { GradeBadge } from "@/components/atoms/grade-badge";
import { IconButton } from "@/components/atoms/icon-button";
import { SpeciesScientificName } from "@/components/atoms/species-scientific-name";
import { BatchMedia } from "@/components/atoms/batch-media";
import { BatchAvailabilityStatus } from "@/components/molecules/batch-availability-status";
import { BatchQcStatus } from "@/components/molecules/batch-qc-status";
import { BatchQuantity } from "@/components/molecules/batch-quantity";
import { BatchVisibilityNote } from "@/components/molecules/batch-visibility-note";
import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import {
  SPECIES_SCIENTIFIC,
  type FishBatchListItem,
} from "@/features/fish-batches/data/fish-batches.mock";
import { reservedQty } from "@/features/fish-batches/fish-batch-logic";
import { formatTemplate } from "@/i18n/get-dictionary";
import { useI18n } from "@/i18n/i18n-context";

export interface FishBatchPreviewDrawerProps {
  batch: FishBatchListItem | null;
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Read-only quick preview of a batch. Modal dialog: traps focus while open,
 * closes on Escape or backdrop click, restores focus to the trigger, and is
 * kept inert while closed. Never navigates — future actions are disabled.
 */
export function FishBatchPreviewDrawer({ batch, open, onClose }: FishBatchPreviewDrawerProps) {
  const { dict } = useI18n();
  const f = dict.fishBatches;
  const d = f.drawer;
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const list = () => (panel ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)) : []);
    list()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = list();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreRef.current?.focus?.();
    };
  }, [open, onClose]);

  const reserved = batch ? reservedQty(batch) : 0;
  const reservationText = !batch
    ? ""
    : reserved === 0
      ? d.reservation.none
      : batch.availableQty === 0
        ? d.reservation.full
        : formatTemplate(d.reservation.partial, { reserved: String(reserved), initial: String(batch.initialQty) });

  return (
    <div className={`batch-drawer-root${open ? " open" : ""}`}>
      <div className="batch-drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        className="batch-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={batch ? `${d.title}: ${batch.batchId}` : d.title}
        inert={!open}
      >
        {batch && (
          <>
            <div className="batch-drawer-head">
              <div className="batch-drawer-title">
                <span className="batch-id">{batch.batchId}</span>
                <SpeciesScientificName name={SPECIES_SCIENTIFIC[batch.species]} />
              </div>
              <IconButton label={d.close} onClick={onClose}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </IconButton>
            </div>

            <div className="batch-drawer-scroll">
              <BatchMedia species={batch.species} alt={d.mediaAlt} size="drawer" />

              <dl className="drawer-facts">
                <div>
                  <dt>{d.labels.variety}</dt>
                  <dd>{batch.variety}</dd>
                </div>
                <div>
                  <dt>{d.labels.grade}</dt>
                  <dd>
                    <GradeBadge grade={batch.grade} label={f.gradeLabels[batch.grade]} />
                  </dd>
                </div>
                <div>
                  <dt>{d.labels.size}</dt>
                  <dd>{batch.size}</dd>
                </div>
                <div>
                  <dt>{d.labels.quantity}</dt>
                  <dd>
                    <BatchQuantity available={batch.availableQty} initial={batch.initialQty} unit={f.units.fish} />
                  </dd>
                </div>
                <div>
                  <dt>{d.labels.origin}</dt>
                  <dd>{batch.origin}</dd>
                </div>
                <div>
                  <dt>{d.labels.source}</dt>
                  <dd>{batch.source}</dd>
                </div>
                <div>
                  <dt>{d.labels.qc}</dt>
                  <dd>
                    <BatchQcStatus qc={batch.qc} label={f.qcLabels[batch.qc]} />
                  </dd>
                </div>
                <div>
                  <dt>{d.labels.availability}</dt>
                  <dd>
                    <BatchAvailabilityStatus availability={batch.availability} label={f.statusLabels[batch.availability]} />
                  </dd>
                </div>
                <div>
                  <dt>{d.labels.updated}</dt>
                  <dd>{batch.updated}</dd>
                </div>
              </dl>

              <section className="drawer-section">
                <h3>{d.visibilityTitle}</h3>
                <BatchVisibilityNote qc={batch.qc} note={d.visibility[batch.qc]} />
              </section>

              <section className="drawer-section">
                <h3>{d.reservationTitle}</h3>
                <p className="drawer-reservation">{reservationText}</p>
              </section>

              <section className="drawer-section">
                <h3>{d.actionsTitle}</h3>
                <div className="drawer-actions">
                  <ComingSoonAction label={d.actions.openFullDetail} title={dict.dashboard.comingSoon} block />
                  <ComingSoonAction label={d.actions.editBatch} title={dict.dashboard.comingSoon} block />
                  <ComingSoonAction label={d.actions.archive} title={dict.dashboard.comingSoon} block />
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
