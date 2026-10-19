import type { Metadata } from 'next';

/**
 * Our own promotion (owner, 18 Oct 2026): AXTO and XAA, written for
 * Profity.in's readers in Hindi and English — labelled openly, no financial
 * advice, no ad slot.
 */
export const metadata: Metadata = {
  title: 'डिजिटल टूल · Digital tools — AXTO & XAA',
  description:
    'हमारा अपना प्रचार: AXTO — अपनी कुंजी से चलने वाला निजी AI, और XAA — CA फ़र्म व छोटे कारोबार की वेबसाइट. Our own promotion, clearly labelled.',
  alternates: { canonical: '/digital-tools' }
};

const link = (base: string) => `${base}/?utm_source=profity.in&utm_medium=referral&utm_campaign=ecosystem`;

export default function DigitalToolsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">✦ हमारा अपना प्रचार · Our own promotion</p>
      <h1 className="mt-2 font-serif text-3xl font-black">डिजिटल टूल जो ख़र्च कम और काग़ज़ात निजी रखें</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 19 October 2026</p>
      <div className="article-body mt-6">
        <p>
          Profity.in पर हम बजट, बचत, निवेश और धोखाधड़ी से बचाव के बारे में लिखते हैं। इस पेज पर हम दो ऐसी परियोजनाओं के बारे में बता रहे हैं जो Profity.in
          के ही प्रकाशक की हैं। इसलिए साफ़ शब्दों में: यह हमारा अपना विज्ञापन है।
        </p>

        <h2>AXTO — आपकी अपनी कुंजी, आपका अपना ख़र्च</h2>
        <ul>
          <li>
            <a href={link('https://axto.io')} className="text-gold-600 underline" rel="noopener">AXTO</a> में AI आपकी अपनी API कुंजी से चलता है; AXTO सिर्फ़
            अनुरोध आगे भेजता है। Google Gemini और Groq जैसे कुछ प्रदाताओं के पास हल्के उपयोग के लिए मुफ़्त कोटा भी है।
          </li>
          <li>
            <strong>Privacy Vault</strong> आपके बैंक स्टेटमेंट, अनुबंध या स्प्रेडशीट से नाम, खाता संख्या और पहचान संख्याएँ आपके अपने डिवाइस पर ही छिपा देता है,
            ताकि AI को सिर्फ़ ज़रूरी जानकारी दिखे।
          </li>
          <li>
            <strong>AI Studio</strong> किसी फ़ंड के फ़ैक्टशीट या बीमा पॉलिसी की शर्तों को आसान भाषा में समझा सकता है। AXTO का इंटरफ़ेस हिंदी में भी उपलब्ध है।
          </li>
        </ul>
        <p>
          ध्यान रखें: AI समझने में मदद करता है, फ़ैसला नहीं करता। निवेश, बीमा या टैक्स के निर्णय के लिए SEBI-पंजीकृत सलाहकार या चार्टर्ड अकाउंटेंट से बात करें।
        </p>

        <h2>XAA — CA फ़र्म, सलाहकार और छोटे कारोबार के लिए वेबसाइट</h2>
        <p>
          <a href={link('https://xaa.es')} className="text-gold-600 underline" rel="noopener">XAA</a> यूरोप का एक वेब डेवलपमेंट स्टूडियो है जो ज़रूरत के हिसाब से
          वेबसाइट, ऑनलाइन दुकान, क्लाइंट पोर्टल और SaaS प्लेटफ़ॉर्म बनाता है। काम चरणों (milestones) में होता है — हर चरण तय होता है, पूरा दिखाया जाता है और फिर
          PayPal, बैंक ट्रांसफ़र या USDT से अलग-अलग भुगतान होता है। कम बजट के लिए तैयार टेम्पलेट भी हैं। XAA की वेबसाइट अंग्रेज़ी, स्पेनिश और इंडोनेशियाई में है।
        </p>

        <h2>Digital tools, explained in English</h2>
        <p>
          The same note for English readers: <a href={link('https://axto.io')} className="text-gold-600 underline" rel="noopener">AXTO</a> is an AI workspace that runs on
          your own provider key, so you pay only for what you use, and its Privacy Vault strips account numbers and ID numbers from documents on your own
          device before an AI reads them. Its interface is available in Hindi and English. <a href={link('https://xaa.es')} className="text-gold-600 underline" rel="noopener">XAA</a>{' '}
          builds websites, shops, client portals and SaaS products for firms of every size, priced and paid milestone by milestone. AI can explain a policy or
          a statement; it should never replace a registered adviser.
        </p>

        <h2>हमारी स्वतंत्रता · Our independence</h2>
        <p>
          Profity.in का कोई भी लेख AXTO या XAA की सिफ़ारिश नहीं करता और न ही उनके कारण लिखा या बदला गया है। None of our guides recommends AXTO or XAA, and none
          was written or changed because of them.
        </p>
      </div>
    </div>
  );
}
