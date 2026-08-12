"use client";

import { useEffect, useState } from "react";
import { carousel } from "@/data/site";

/**
 * Replicates the original design's breakpoints: 3 cards ≥1040px,
 * 2 cards ≥700px, 1 card below. Renders the 1-card layout on the
 * server so the first client paint matches, then measures.
 */
export function useBreakpoint() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bp =
    carousel.breakpoints.find((b) => (width ?? 420) >= b.minWidth) ??
    carousel.breakpoints[carousel.breakpoints.length - 1];

  return { perView: bp.perView, shellWidth: bp.shellWidth, measured: width !== null };
}
