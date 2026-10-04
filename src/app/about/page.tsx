import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "हमारे बारे में · About Profity.in",
  description: "Who we are, what Profity.in covers, how we research every guide on personal finance for India and why we stay independent.",
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">हमारे बारे में</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Profity.in भारतीय परिवारों के लिए निजी वित्त पर एक स्वतंत्र शैक्षिक प्रकाशन है — बजट, बचत, निवेश, बीमा, टैक्स और वित्तीय धोखाधड़ी से बचाव। सब कुछ हिंदी और अंग्रेज़ी में, मुफ़्त और बिना कोई वित्तीय उत्पाद बेचे।</p>
        <h2>हम क्या लिखते हैं</h2>
        <ul>
          <li>बचत और बजट: आपातकालीन फ़ंड, मासिक योजना और पैसे की अच्छी आदतें।</li>
          <li>निवेश की बुनियादी बातें: म्यूचुअल फ़ंड, SIP, FD, PPF और जोखिम।</li>
          <li>बीमा: टर्म लाइफ़, हेल्थ इंश्योरेंस और पॉलिसी में क्या देखें।</li>
          <li>टैक्स: आम कटौतियाँ और टैक्स व्यवस्थाएँ, सामान्य रूप में।</li>
          <li>धोखाधड़ी से बचाव: UPI ठगी, फ़र्ज़ी निवेश योजनाएँ और सुरक्षित रहने के तरीके।</li>
        </ul>
        <h2>हमारी स्वतंत्रता</h2>
        <p>हम कोई वित्तीय उत्पाद नहीं बेचते और बैंकों, फ़ंड हाउस या बीमा कंपनियों से कोई कमीशन नहीं लेते। साइट का ख़र्च Google AdSense के विज्ञापनों से चलता है।</p>
        <h2>About Profity.in (English)</h2>
        <p>Profity.in is an independent educational publication about personal finance for Indian households: budgeting, saving, investing, insurance, taxes and avoiding financial fraud. We write in Hindi and English, free of charge and without selling any financial product.</p>
        <h2>What we cover</h2>
        <ul>
          <li>Saving and budgeting: emergency funds, monthly plans and good money habits.</li>
          <li>Investing basics: mutual funds, SIPs, fixed deposits, PPF and risk.</li>
          <li>Insurance: term life, health insurance and what to look for in a policy.</li>
          <li>Taxes: how common deductions and the tax regimes work, in general terms.</li>
          <li>Fraud prevention: UPI scams, fake investment schemes and how to stay safe.</li>
        </ul>
        <h2>How we work</h2>
        <p>Every article is researched and written by our editorial team and checked against reliable sources before it is published. We explain technical terms in plain language, say clearly when evidence is limited or mixed, and update articles when the facts change. Our full standards are set out in our <a href="/editorial-policy" className="text-gold-600 underline">editorial policy</a>.</p>
        <h2>Independence</h2>
        <p>Profity.in is free to read and supported by advertising served by Google AdSense, which is kept clearly separate from our articles. We do not accept payment for coverage, and advertisers have no say in what we publish.</p>
        <h2>What we are not</h2>
        <p>Our articles are general information, not personalized investment, tax or insurance advice. For decisions about your own situation, speak with a SEBI-registered investment adviser, a chartered accountant or an IRDAI-licensed insurance professional.</p>
        <h2>Contact</h2>
        <p>Corrections, questions and topic ideas are welcome. See our <a href="/contact" className="text-gold-600 underline">contact page</a> or email <a href="mailto:hello@profity.in" className="text-gold-600 underline">hello@profity.in</a>.</p>
      </div>
    </div>
  );
}
