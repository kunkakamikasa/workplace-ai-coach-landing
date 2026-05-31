"use client";

import { useEffect } from "react";
import type { UtmFields } from "./buildCtaUrl";

type Params = Record<
  string,
  string | number | boolean | undefined | null | UtmFields
>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  }
}

export function trackCtaClick(args: {
  placement: string;
  target: string;
  ctaUrl: string;
  utm: UtmFields;
}) {
  trackEvent("cta_click", {
    placement: args.placement,
    target: args.target,
    ctaUrl: args.ctaUrl,
    utm: args.utm,
  });
}

export function useImpression(id: string, label: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            trackEvent("section_impression", { section_id: id, label });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [id, label]);
}
