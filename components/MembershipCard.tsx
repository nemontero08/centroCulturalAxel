import Image from "next/image";
import { site, type Membership } from "@/data/site";
import Icon from "./Icon";

/**
 * Todas las tarjetas tienen exactamente el mismo tamaño.
 * `featured` sólo cambia el borde y el color del botón.
 */
export default function MembershipCard({
  plan,
  basis,
}: {
  plan: Membership;
  basis: string;
}) {
  const { cards } = site.layout;
  const height = cards.height ? `${cards.height}px` : "clamp(104px,20vw,150px)";

  return (
    <article
      id={`plan-${plan.id}`}
      style={{ scrollMarginTop: 14 }}
      className={`relative flex shrink-0 grow-0 basis-full flex-col overflow-hidden rounded-lg bg-surface-card shadow-card tablet:basis-[calc((100%-14px)/2)] desktop:basis-[calc((100%-28px)/3)] ${
        plan.featured ? "border-2 border-aqua-400" : "border border-border-subtle"
      }`}
    >
      <div className="relative bg-aqua-100" style={{ height }}>
        {plan.image ? (
          <Image
            src={plan.image}
            alt={plan.imageAlt ?? ""}
            fill
            sizes="(max-width: 700px) 100vw, 340px"
            style={{
              objectFit: "cover",
              objectPosition: `${cards.focusX}% ${cards.focusY}%`,
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-aqua-400">
            <Icon name="image" size={28} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-[18px] pb-[18px] pt-4">
        <div className="flex items-baseline gap-[3px] whitespace-nowrap">
          <span className="text-[30px] font-extrabold tracking-[-0.02em] text-text-strong">
            {plan.amount}
          </span>
          <span className="text-sm text-text-muted">{plan.period}</span>
        </div>

        <a
          href={plan.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto flex h-[42px] w-full items-center justify-center rounded-md border-2 font-core text-base font-semibold transition-colors duration-[120ms] ease-standard active:scale-[.97] ${
            plan.featured
              ? "border-transparent bg-aqua-600 !text-white hover:bg-aqua-700"
              : "border-border-brand bg-surface-card !text-aqua-600 hover:bg-aqua-50"
          }`}
        >
          {plan.cta ?? "Colaborar"}
        </a>
      </div>
    </article>
  );
}
