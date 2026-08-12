import { site, type SocialLink } from "@/data/site";
import Icon from "./Icon";

function BrandIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "instagram") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (icon === "facebook") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.2 21v-7.6h2.6l.4-3h-3V8.5c0-.87.25-1.46 1.5-1.46H17.3V4.35A20 20 0 0 0 15 4.23c-2.3 0-3.87 1.4-3.87 3.97v2.2H8.5v3h2.63V21z" />
      </svg>
    );
  }
  return <Icon name={icon} size={22} />;
}

/**
 * Hidden while site.footer.enabled is false — flip it in data/site.ts
 * once the links are final.
 */
export default function SiteFooter() {
  const { footer } = site;
  if (!footer.enabled) return null;

  return (
    <footer className="flex flex-col items-center gap-[18px] px-[clamp(16px,4.5vw,30px)] pb-2.5 pt-[34px] text-center">
      <div className="grid w-full grid-cols-4 gap-2.5">
        {footer.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex flex-col items-center gap-[7px] rounded-lg border border-border-subtle bg-aqua-50 px-1 py-[14px] text-aqua-700 transition duration-[120ms] ease-standard hover:-translate-y-0.5 hover:bg-aqua-100"
          >
            <BrandIcon icon={link.icon} />
            <span className="text-xs font-semibold text-ink-600">{link.label}</span>
          </a>
        ))}
      </div>
      <p className="m-0 text-sm leading-[1.5] text-text-muted">{footer.note}</p>
      <p className="m-0 text-xs uppercase tracking-[0.08em] text-n-400">{footer.legal}</p>
    </footer>
  );
}
