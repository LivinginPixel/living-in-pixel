export const SITE_NAME = "Living in Pixel";
export const SITE_SHORT_NAME = "LiP";
export const SITE_DESCRIPTION =
  "Living in Pixel builds high-performance digital products, brand systems, and growth-focused web experiences for startups and founders.";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://livinginpixel.com";

export const SITE_URL = rawSiteUrl.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl;

export function toAbsoluteUrl(path: string): string {
  if (!path.startsWith("/")) {
    return `${SITE_URL}/${path}`;
  }

  return `${SITE_URL}${path}`;
}
