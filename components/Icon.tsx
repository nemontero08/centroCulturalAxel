/** Material Symbols Rounded glyph, same defaults as the design system's Icon. */
export default function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-rounded ${className}`}
      style={{ fontSize: size, width: size, height: size, fontVariationSettings: `'opsz' ${size}` }}
    >
      {name}
    </span>
  );
}
