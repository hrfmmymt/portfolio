import './global.css';
import type { Metadata } from 'next';

import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '# hirofumi miyamoto',
    template: '%s | # hirofumi miyamoto',
  },
  description: "hi everyone! i am hrfmmymt. i'm always goofing off on the internet.",
  openGraph: {
    title: '# hirofumi miyamoto',
    description: "hi everyone! i am hrfmmymt. i'm always goofing off on the internet.",
    url: baseUrl,
    siteName: '# hirofumi miyamoto',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
