"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/site";

/**
 * Selector de monto: pills con las 7 membresías. Al elegir una se muestra
 * su imagen y el botón Colaborar con el link de Mercado Pago correspondiente.
 * Las 7 imágenes se montan juntas y se alterna la visible, así el cambio
 * es instantáneo y no parpadea.
 */
export default function MembershipSelector() {
  const plans = site.memberships;
  const [sel, setSel] = useState(0);
  const plan = plans[sel];
  const { cards } = site.layout;
  const objectPosition = `${cards.focusX}% ${cards.focusY}%`;

  return (
    <section className="flex flex-col gap-3 pt-2.5">
      <div className="flex flex-col gap-1 px-[clamp(16px,4.5vw,30px)]">
        <h2 className="m-0 text-[19px] font-bold text-text-strong">
          {site.sections.membershipsTitle}
        </h2>
        <p className="m-0 text-sm leading-[1.55] text-text-muted [text-wrap:pretty]">
          {site.sections.membershipsNote}
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Montos por mes"
        className="flex flex-wrap gap-2 px-[clamp(16px,4.5vw,30px)]"
      >
        {plans.map((p, i) => {
          const on = i === sel;
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setSel(i)}
              className={`inline-flex min-h-[44px] items-center justify-center rounded-pill border px-[15px] font-core text-sm font-semibold transition-colors duration-[120ms] ease-standard ${
                on
                  ? "border-aqua-600 bg-aqua-600 text-white"
                  : "border-border-subtle bg-n-0 text-ink-600 hover:bg-aqua-50"
              }`}
            >
              {p.amount}
            </button>
          );
        })}
      </div>

      <div className="px-[clamp(16px,4.5vw,30px)] pt-0.5">
        <div className="flex flex-col overflow-hidden rounded-lg border border-border-subtle bg-surface-card shadow-card tablet:min-h-[208px] tablet:flex-row">
          <div className="relative h-[clamp(132px,30vw,176px)] shrink-0 grow-0 overflow-hidden bg-aqua-100 tablet:h-auto tablet:basis-[38%]">
            {plans.map((p, i) =>
              p.image ? (
                <Image
                  key={p.id}
                  src={p.image}
                  alt={p.imageAlt ?? ""}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 700px) 100vw, 400px"
                  style={{
                    objectFit: "cover",
                    objectPosition,
                    display: i === sel ? "block" : "none",
                  }}
                />
              ) : null,
            )}
          </div>

          <div className="flex flex-1 flex-col items-stretch justify-center gap-4 p-5 tablet:items-start">
            <p className="m-0 max-w-[44ch] text-[15px] leading-[1.55] text-ink-600 [text-wrap:pretty]">
              {site.sections.membershipsFinePrint}
            </p>
            <a
              href={plan.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[42px] w-full items-center justify-center rounded-md bg-aqua-600 px-7 font-core text-base font-semibold !text-white transition-colors duration-[120ms] ease-standard hover:bg-aqua-700 active:scale-[.97] tablet:w-auto tablet:min-w-[210px]"
            >
              {`${plan.cta ?? "Colaborar con"} ${plan.amount}`}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
