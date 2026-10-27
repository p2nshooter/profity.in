import { ARTICLES, CATEGORIES } from '@/content/articles';

// /llms.txt (llmstxt.org) — what Profity.in is and where its articles are, for AI search engines and
// assistants: the same pages as the sitemap, with their summaries, in Hindi and English.
export const dynamic = 'force-static';

const BASE = 'https://profity.in';

export function GET() {
  const text = [
    '# Profity.in',
    '',
    `> Honest personal-finance guides for India — investing, saving, tax, insurance and digital money — in Hindi and English. पैसे की समझ, आपकी भाषा में।`,
    '',
    ...CATEGORIES.flatMap((c) => [
      `## ${c.nameEn} · ${c.nameHi}`,
      '',
      ...ARTICLES.filter((a) => a.category === c.slug).map((a) => `- [${a.titleEn}](${BASE}/articles/${a.slug}): ${a.excerptEn}`),
      '',
    ]),
    '## Optional',
    '',
    ...['about', 'contact', 'editorial-policy', 'privacy', 'terms', 'disclaimer'].map((p) => `- [${p}](${BASE}/${p})`),
    '',
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
