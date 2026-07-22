// Adsterra direct-tag ad configuration for profity.in.
// highperformanceformat.com = iframe display banners (isolated per slot);
// effectivecpmnetwork.com = native banner, social bar and smart link.
// Rendered by src/components/Ads.tsx.
export type BannerSlot = 'leaderboard' | 'rectangle' | 'banner468' | 'halfpage' | 'skyscraper' | 'mobile';
type Banner = { key: string; width: number; height: number };
interface AdsConfig {
  banners: Partial<Record<BannerSlot, Banner>>;
  native: { container: string; src: string } | null;
  socialBar: string | null;
  smartLink: string | null;
}

export const ADS: AdsConfig = {
  banners: {
    leaderboard: { key: 'f0f9eed6a38a1767dac7d76676f3eda5', width: 728, height: 90 },
    rectangle: { key: '92812dc338b45190b55107773e7f9ceb', width: 300, height: 250 },
    banner468: { key: 'de07ad355264fdad81f1196281baa0cd', width: 468, height: 60 },
    halfpage: { key: 'a1ba88199bda177e3e7560b2648e3c53', width: 160, height: 600 },
    skyscraper: { key: '3e9a17f89b1481edde4ebfd1ab14179f', width: 160, height: 300 },
    mobile: { key: 'def2d5aa617d485c21217b9ec3fec61e', width: 320, height: 50 },
  },
  native: {
    container: 'a43dca050f9a5e966eb79b72bc53805a',
    src: 'https://pl30477876.effectivecpmnetwork.com/a43dca050f9a5e966eb79b72bc53805a/invoke.js',
  },
  socialBar: 'https://pl30477883.effectivecpmnetwork.com/1e/4e/1d/1e4e1d1484eb4cb8d69afccfaa752da0.js',
  smartLink: 'https://www.effectivecpmnetwork.com/nt8cd2gprt?key=8237bc1279efaef3f011d91ba22f3798',
};
