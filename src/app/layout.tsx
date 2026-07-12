import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, SITE_URL, toAbsoluteUrl } from '../lib/seo';
import './globals.css';

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
    'digital marketing agency',
    'social media management',
    'real estate social media marketing',
    'car dealership lead generation',
    'small business marketing agency',
    'brand and content systems'
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
        url: toAbsoluteUrl('/logo-dark.svg'),
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
    images: [toAbsoluteUrl('/logo-dark.svg')]
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
    icon: '/favico.png',
    shortcut: '/favico.png',
    apple: '/favico.png'
  },
  manifest: '/manifest.webmanifest'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
