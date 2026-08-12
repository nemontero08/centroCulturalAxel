"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Icon from "./Icon";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = () => {
    const url = window.location.href;
    const data = { title: site.share.title, text: site.share.text, url };
    if (navigator.share) {
      navigator.share(data).catch(() => {});
      return;
    }
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={share}
      className="mb-1.5 inline-flex h-[38px] cursor-pointer items-center gap-2 rounded-pill border-2 border-border-brand bg-surface-card px-4 font-core text-sm font-semibold text-aqua-600 transition-colors duration-[120ms] ease-standard hover:bg-aqua-50"
    >
      <Icon name="share" size={18} />
      <span>{copied ? site.share.copiedLabel : site.share.label}</span>
    </button>
  );
}
