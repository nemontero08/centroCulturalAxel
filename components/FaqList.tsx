"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Icon from "./Icon";

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="flex flex-col gap-1 px-[clamp(16px,4.5vw,30px)] pt-[30px]">
      <h2 className="m-0 mb-2 text-[19px] font-bold text-text-strong">{site.sections.faqTitle}</h2>
      {site.faqs.map((faq, i) => (
        <div key={faq.q} className="border-b border-border-subtle">
          <button
            type="button"
            onClick={() => setOpen((prev) => (prev === i ? null : i))}
            aria-expanded={open === i}
            className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-[15px] text-left font-core text-base font-semibold text-text-strong"
          >
            <span>{faq.q}</span>
            <span
              className="inline-flex text-aqua-600 transition-transform duration-[180ms] ease-standard"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <Icon name="expand_more" size={22} />
            </span>
          </button>
          {open === i && (
            <p className="m-0 animate-rise pb-4 text-[15px] leading-[1.55] text-ink-400 [text-wrap:pretty]">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
