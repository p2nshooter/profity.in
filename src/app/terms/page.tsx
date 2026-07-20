import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'नियम व शर्तें · Terms',
  description: 'Profity.in के उपयोग के नियम और सामग्री-अस्वीकरण।',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">नियम व शर्तें · Terms of Use</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          Profity.in की समस्त सामग्री केवल सामान्य शैक्षिक जानकारी है। यह निवेश, कर, बीमा या क़ानूनी विषयों
          पर व्यक्तिगत सलाह नहीं है, और न ही किसी प्रतिभूति को ख़रीदने-बेचने का प्रस्ताव है। नियम, दरें और
          सीमाएँ समय-समय पर बदलती हैं — कोई भी निर्णय लेने से पहले आधिकारिक स्रोत और पंजीकृत सलाहकार से
          पुष्टि करें। म्यूचुअल फंड और बाज़ार-आधारित निवेश जोखिम के अधीन हैं।
        </p>
        <p>
          साइट की सामग्री का कॉपीराइट Profity.in के पास है; बिना लिखित अनुमति के पुनर्प्रकाशन न करें।
          उचित उद्धरण (लिंक सहित) का स्वागत है।
        </p>
        <h2>English summary</h2>
        <p>
          All content on Profity.in is general educational information — not personalised investment, tax,
          insurance or legal advice, and not an offer to buy or sell any security. Rules and rates change;
          verify with official sources and a registered adviser before acting. Content is copyright
          Profity.in; quotation with attribution and a link is welcome, wholesale republication is not.
        </p>
      </div>
    </div>
  );
}
