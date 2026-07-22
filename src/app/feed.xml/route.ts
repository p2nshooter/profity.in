import { ARTICLES } from '@/content/articles';

const BASE = 'https://profity.in';
const NAME = 'Profity.in';
const DESC = 'Personal finance for India, in Hindi and English — investing, saving, tax, insurance and credit.';
export const dynamic = 'force-static';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = [...ARTICLES]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 50)
    .map((a) => {
      const link = `${BASE}/articles/${a.slug}`;
      return `    <item>
      <title>${esc(a.titleEn)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <category>${esc(a.category)}</category>
      <description>${esc(a.excerptEn)}</description>
    </item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(NAME)}</title>
    <link>${BASE}</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(DESC)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
