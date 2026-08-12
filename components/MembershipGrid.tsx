import { site } from "@/data/site";
import MembershipCard from "./MembershipCard";

/**
 * Sin carrusel y sin jerarquía de tamaños: todas las membresías visibles,
 * todas del mismo tamaño.
 *  · mobile  → 1 columna
 *  · tablet  → 2 columnas
 *  · desktop → 3 columnas
 * Las que sobran en la última fila quedan centradas.
 */
export default function MembershipGrid() {
  return (
    <section className="flex flex-col gap-[14px] pt-1">
      <div className="px-[clamp(16px,4.5vw,30px)]">
        <h2 className="m-0 text-[19px] font-bold text-text-strong">
          {site.sections.membershipsTitle}
        </h2>
      </div>

      <div className="flex flex-wrap items-stretch justify-center gap-[14px] px-[clamp(16px,4.5vw,30px)] pt-0.5">
        {site.memberships.map((plan) => (
          <MembershipCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
