import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'हमारे बारे में · About',
  description: 'Profity.in क्या है, कौन लिखता है, और हम किन उसूलों पर चलते हैं।',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">हमारे बारे में</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          Profity.in एक स्वतंत्र शैक्षिक प्रकाशन है जिसका एक ही मक़सद है: भारत में पैसे की समझ को आसान,
          ईमानदार और सबकी भाषा में उपलब्ध कराना। हम निवेश, बचत, टैक्स, बीमा और डिजिटल पैसे पर गहरे लेख
          लिखते हैं — हर लेख हिन्दी और अंग्रेज़ी दोनों में, मुफ़्त, बिना किसी रजिस्ट्रेशन के।
        </p>
        <h2>हमारे उसूल</h2>
        <p>
          हम कोई निवेश उत्पाद नहीं बेचते, किसी शेयर या फंड की सिफ़ारिश नहीं करते, और “गारंटीड रिटर्न” जैसे
          वादों से दूर रहते हैं। हर लेख मूल रूप से हमारी टीम द्वारा लिखा जाता है — कहीं से कॉपी नहीं। जहाँ
          नियम या दरें बदलती रहती हैं, वहाँ हम पाठकों को आधिकारिक स्रोत जाँचने की याद दिलाते हैं।
        </p>
        <h2>About Profity.in (English)</h2>
        <p>
          Profity.in is an independent educational publication with one goal: making financial literacy in
          India simple, honest and available in the reader’s own language. Every article is written
          originally by our editorial team, published free, in both Hindi and English, with no registration
          required. We sell no investment products and make no return promises — we explain, you decide.
        </p>
      </div>
    </div>
  );
}
