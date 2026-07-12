export const SITE_NAME = "Living in Pixel";
export const SITE_SHORT_NAME = "LiP";
export const SITE_DESCRIPTION =
  "Living in Pixel is a digital growth studio. We build social media systems, lead generation, and brand content that bring customers through the door for real estate, automotive, fitness, and hospitality businesses.";

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
