export type UtmFields = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

const DEFAULT_PRODUCT_CTA_URL =
  "https://apps.apple.com/us/app/workplace-ai-coach/id000000000";

export function getProductCtaBase(): string {
  return process.env.NEXT_PUBLIC_APP_STORE_URL || DEFAULT_PRODUCT_CTA_URL;
}

export function pickUtmFromSearchParams(
  searchParams: Record<string, string | string[] | undefined> | undefined,
): UtmFields {
  if (!searchParams) return {};
  const out: UtmFields = {};
  for (const key of UTM_KEYS) {
    const raw = searchParams[key];
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (typeof value === "string" && value.length > 0) {
      out[key] = value;
    }
  }
  return out;
}

export function buildCtaUrl(base: string, utm: UtmFields): string {
  const entries = Object.entries(utm).filter(
    ([, v]) => typeof v === "string" && v.length > 0,
  ) as [keyof UtmFields, string][];
  if (entries.length === 0) return base;
  let url: URL;
  try {
    url = new URL(base);
  } catch {
    return base;
  }
  for (const [k, v] of entries) {
    url.searchParams.set(k, v);
  }
  return url.toString();
}
