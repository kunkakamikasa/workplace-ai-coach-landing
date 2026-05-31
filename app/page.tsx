import Landing from "./Landing";
import {
  buildCtaUrl,
  getProductCtaBase,
  pickUtmFromSearchParams,
} from "@/lib/buildCtaUrl";

export default function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const utm = pickUtmFromSearchParams(searchParams);
  const ctaUrl = buildCtaUrl(getProductCtaBase(), utm);
  return <Landing ctaUrl={ctaUrl} utm={utm} />;
}
