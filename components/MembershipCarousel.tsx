"use client";

import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { carousel, site } from "@/data/site";
import Icon from "./Icon";
import MembershipCard from "./MembershipCard";

const GAP = carousel.gap;

export default function MembershipCarousel({ perView }: { perView: number }) {
  const plans = site.memberships;
  const [page, setPage] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);

  /** Page start indices, clamped so the last page is never a lone card. */
  const offsets = useMemo(() => {
    const max = Math.max(0, plans.length - perView);
    const out: number[] = [];
    for (let i = 0; i < plans.length; i += perView) out.push(Math.min(i, max));
    return out.filter((v, i, a) => a.indexOf(v) === i);
  }, [perView, plans.length]);

  const maxPage = offsets.length - 1;
  const current = Math.min(page, maxPage);
  const go = (i: number) => setPage(Math.max(0, Math.min(maxPage, i)));

  const basis = perView === 1 ? "100%" : `calc((100% - ${(perView - 1) * GAP}px) / ${perView})`;
  const step = `((100% - ${(perView - 1) * GAP}px) / ${perView} + ${GAP}px)`;

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button, a, input")) return;
    if (e.pointerType === "mouse") e.preventDefault();
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setDragX(0);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    let dx = e.clientX - startX.current;
    if ((current === 0 && dx > 0) || (current === maxPage && dx < 0)) dx *= carousel.edgeResistance;
    setDragX(dx);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    setDragging(false);
    setDragX(0);
    if (Math.abs(dx) > carousel.dragThreshold) go(dx < 0 ? current + 1 : current - 1);
  };

  return (
    <section className="flex flex-col gap-[14px] pt-1">
      <div className="flex items-baseline justify-between px-[clamp(16px,4.5vw,30px)]">
        <h2 className="m-0 text-[19px] font-bold text-text-strong">
          {site.sections.membershipsTitle}
        </h2>
        {maxPage > 0 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(current - 1)}
              aria-label="Anterior"
              className="inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border-2 border-border-subtle bg-surface-card text-aqua-700 transition-colors duration-[120ms] ease-standard hover:bg-aqua-50"
            >
              <Icon name="chevron_left" size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(current + 1)}
              aria-label="Siguiente"
              className="inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border-2 border-border-subtle bg-surface-card text-aqua-700 transition-colors duration-[120ms] ease-standard hover:bg-aqua-50"
            >
              <Icon name="chevron_right" size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="px-[clamp(16px,4.5vw,30px)]">
        <div
          className="overflow-hidden pb-1.5 pt-0.5 [touch-action:pan-y] select-none"
          style={{ cursor: dragging ? "grabbing" : "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transition: dragging ? "none" : "transform 280ms cubic-bezier(.2,.6,.3,1)",
              transform: `translateX(calc(${-offsets[current]} * ${step} + ${dragX}px))`,
            }}
          >
            {plans.map((plan) => (
              <MembershipCard key={plan.id} plan={plan} basis={basis} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-[7px] justify-center gap-[7px] px-[clamp(16px,4.5vw,30px)] pt-0.5">
        {offsets.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Planes ${i + 1}`}
            className="h-[7px] cursor-pointer rounded-pill border-none p-0 transition-all duration-[180ms] ease-standard"
            style={{
              width: i === current ? "20px" : "7px",
              background: i === current ? "var(--aqua-600)" : "var(--aqua-200)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
