import { LandingPage } from '../features/landing/LandingPage';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, toAbsoluteUrl } from '../lib/seo';

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: toAbsoluteUrl('/logo.svg'),
        email: 'hello@livinginpixel.com'
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: 'en-US',
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME
        }
      },
      {
        '@type': 'ProfessionalService',
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        serviceType: ['Software Engineering', 'Brand Systems', 'Digital Strategy']
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}
