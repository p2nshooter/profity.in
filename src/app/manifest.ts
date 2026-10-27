import type { MetadataRoute } from 'next';

// The web app manifest (owner, 27 Oct 2026: SEO "file2 lain yg d butuhkan"): the icons Android, Chrome
// and search show for the site. A plain "browser" display — this is a reading site, not an app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Profity.in',
    short_name: 'Profity.in',
    description: 'Honest personal-finance guides for India — investing, saving, tax, insurance and digital money — in Hindi and English. पैसे की समझ, आपकी भाषा में।',
    lang: 'hi',
    start_url: '/',
    scope: '/',
    display: 'browser',
    background_color: '#faf7ef',
    theme_color: '#0c1f17',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
