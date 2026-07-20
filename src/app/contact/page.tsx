import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'संपर्क · Contact',
  description: 'Profity.in से संपर्क करें — सुझाव, सुधार या सहयोग के लिए।',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">संपर्क करें</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          किसी लेख में सुधार सुझाना हो, कोई विषय पढ़ना चाहते हों, या विज्ञापन/सहयोग की बात करनी हो — हमें
          लिखिए। हम हर संदेश पढ़ते हैं और आमतौर पर कुछ ही दिनों में जवाब देते हैं।
        </p>
        <p>
          <strong>ईमेल / Email:</strong>{' '}
          <a href="mailto:hello@profity.in" className="text-gold-600 underline">
            hello@profity.in
          </a>
        </p>
        <p>
          For corrections, topic requests or partnership queries, write to us at the address above — we read
          everything and usually reply within a few days.
        </p>
      </div>
    </div>
  );
}
