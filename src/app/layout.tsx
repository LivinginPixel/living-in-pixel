import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, SITE_URL, toAbsoluteUrl } from '../lib/seo';
import './globals.css';
import { GlobalCursor } from '../components/navigation/GlobalCursor';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_SHORT_NAME} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: 'Technology',
  alternates: {
    canonical: '/'
  },
  keywords: [
    'software engineering agency',
    'startup web development',
    'brand identity design',
    'social media architecture',
    'product development'
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_SHORT_NAME} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: toAbsoluteUrl('/logo.svg'),
        width: 163,
        height: 109,
        alt: `${SITE_NAME} logo`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_SHORT_NAME} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: [toAbsoluteUrl('/logo.svg')]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  },
  manifest: '/manifest.webmanifest'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06060b'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700;900&family=Cabinet+Grotesk:wght@300;400;500;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalCursor />
        {children}
      </body>
    </html>
  );
}
