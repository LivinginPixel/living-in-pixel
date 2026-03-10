export const LEGAL_SLUGS = ['privacy', 'terms'] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];
export type LegalHref = `/${LegalSlug}`;

export type NonEmptyArray<T> = readonly [T, ...T[]];

type RouteInput<S extends LegalSlug> = Readonly<{
  slug: S;
  title: string;
  label: string;
}>;

export type LegalRoute = Readonly<RouteInput<LegalSlug> & { href: LegalHref }>;

const createRoute = <S extends LegalSlug>(input: RouteInput<S>): LegalRoute => ({
  ...input,
  href: `/${input.slug}` as const
});

export const LEGAL_ROUTES = [
  createRoute({ slug: 'privacy', title: 'Privacy Policy', label: 'Privacy' }),
  createRoute({ slug: 'terms', title: 'Terms and Conditions', label: 'Terms' })
] as const satisfies readonly LegalRoute[];

export type NavRel = 'prev' | 'next';
export type Maybe<T> = T | null;
export type LegalNavLink = Readonly<{ rel: NavRel; route: LegalRoute }>;
export type LegalNav = Readonly<{ prev: Maybe<LegalNavLink>; next: Maybe<LegalNavLink> }>;

const routeIndex = Object.fromEntries(
  LEGAL_ROUTES.map((route, index) => [route.slug, index] as const)
) as Record<LegalSlug, number>;

const getRouteAt = (index: number): LegalRoute | null => LEGAL_ROUTES[index] ?? null;

export const getLegalNav = <S extends LegalSlug>(slug: S): LegalNav => {
  const index = routeIndex[slug];
  const prevRoute = getRouteAt(index - 1);
  const nextRoute = getRouteAt(index + 1);

  return {
    prev: prevRoute ? { rel: 'prev', route: prevRoute } : null,
    next: nextRoute ? { rel: 'next', route: nextRoute } : null
  };
};

export type LegalTextSection = Readonly<{
  type: 'text';
  heading: string;
  body: NonEmptyArray<string>;
}>;

export type LegalListSection = Readonly<{
  type: 'list';
  heading: string;
  items: NonEmptyArray<string>;
  body?: readonly string[];
}>;

export type LegalSection = LegalTextSection | LegalListSection;

export type LegalPageContent = Readonly<{
  slug: LegalSlug;
  title: string;
  lastUpdated: string;
  intro: NonEmptyArray<string>;
  sections: readonly LegalSection[];
}>;
