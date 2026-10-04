/** @type {import('next').NextConfig} */
// 16 machine-written articles were removed (owner rule: hand-written only).
// Most were runs of near-identical titles ("Digital Asset Liability
// Management" ×9); none was ever rewritten by hand. Each old url goes to the
// hand-written guide on the subject, or to its desk.
const REMOVED_MACHINE_ARTICLES = {
  'digital-asset-allocation': '/articles/asset-allocation-basics-india',
  'investing-in-index-funds': '/articles/index-fund-vs-active-fund',
  'saral-vikaas-yojana': '/articles/compounding-start-early-hindi',
  'digital-asset-valuation': '/category/digital',
  'digital-asset-classification': '/category/digital',
  'digital-asset-liability-mitigation': '/category/digital',
  'digital-asset-liability-mitigation-ufv5': '/category/digital',
  'digital-asset-liability-mitigation-mzkt': '/category/digital',
  'digital-asset-liability-management': '/category/digital',
  'digital-asset-liability-management-htbu': '/category/digital',
  'digital-asset-liability-management-od0p': '/category/digital',
  'digital-asset-liability-management-2v0c': '/category/digital',
  'digital-asset-liability-management-if6c': '/category/digital',
  'digital-asset-liability-management-z2gl': '/category/digital',
  'digital-asset-liability-management-dwhn': '/category/digital',
  'digital-asset-liability-management-d3jp': '/category/digital',
};
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return Object.entries(REMOVED_MACHINE_ARTICLES).map(([from, to]) => ({
      source: `/articles/${from}`,
      destination: to,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;

const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
initOpenNextCloudflareForDev();
