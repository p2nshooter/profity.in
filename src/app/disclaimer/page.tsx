import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "अस्वीकरण · Disclaimer",
  description: "The limits of the information published on Profity.in about personal finance for India, and when to consult a professional.",
  alternates: { canonical: '/disclaimer' }
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">अस्वीकरण</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Profity.in SEBI-पंजीकृत निवेश सलाहकार या रिसर्च एनालिस्ट नहीं है। म्यूचुअल फ़ंड और प्रतिभूतियों में निवेश बाज़ार जोखिमों के अधीन है; योजना से जुड़े सभी दस्तावेज़ ध्यान से पढ़ें। पिछला प्रदर्शन भविष्य के रिटर्न की गारंटी नहीं है। टैक्स नियम बजट और अधिसूचनाओं के साथ बदलते हैं।</p>
        <h2>Disclaimer (English)</h2>
        <p>Profity.in publishes general educational information about personal finance for India. Please read it with the following limits in mind.</p>
        <h2>Not investment advice</h2>
        <p>Profity.in is not a SEBI-registered investment adviser or research analyst. Everything on the site is general educational information and is not a recommendation to buy or sell any security, mutual fund, insurance policy or other product.</p>
        <h2>Market risk</h2>
        <p>Investments in securities and mutual funds are subject to market risks. Read all scheme-related documents carefully, and remember that past performance does not guarantee future returns.</p>
        <h2>Tax rules change</h2>
        <p>Tax slabs, deductions and rules change with budgets and notifications. Verify current rules with the Income Tax Department or a chartered accountant before filing or planning.</p>
        <h2>No products, no commissions</h2>
        <p>Profity.in does not sell financial products and receives no commission from banks, fund houses or insurers.</p>
        <h2>Accuracy</h2>
        <p>We research carefully and review articles regularly, but information can become outdated. If you spot an error, please <a href="/contact" className="text-gold-600 underline">tell us</a>.</p>
        <h2>Advertising</h2>
        <p>Ads on the site are served by Google AdSense. We do not choose individual advertisers and are not responsible for their offers.</p>
      </div>
    </div>
  );
}
