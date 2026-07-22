import { ARTICLES_BATCH2 } from './articles-batch2';
/**
 * Profity.in — original bilingual personal-finance library for India.
 * Hindi (Devanagari) is the native language of the site; every article also
 * carries its full English translation, switched instantly on the client.
 *
 * Editorial rules (what keeps this AdSense-healthy):
 *  - 100% original writing — no scraping, no spinning, no copied text.
 *  - Educational only: no "guaranteed returns", no stock tips, no schemes.
 *  - Every money article ends under the site-wide disclaimer (see layout).
 *  - Quality core first, then steady growth — never a mass dump.
 */

export type CatSlug = 'nivesh' | 'bachat' | 'tax' | 'bima' | 'credit' | 'digital';

export const CATEGORIES: Array<{ slug: CatSlug; nameHi: string; nameEn: string; taglineHi: string; taglineEn: string; icon: string }> = [
  { slug: 'nivesh', nameHi: 'निवेश', nameEn: 'Investing', taglineHi: 'म्यूचुअल फंड, SIP, गोल्ड और लंबी अवधि की संपत्ति', taglineEn: 'Mutual funds, SIPs, gold and long-term wealth', icon: '📈' },
  { slug: 'bachat', nameHi: 'बचत और बैंकिंग', nameEn: 'Saving & Banking', taglineHi: 'PPF, FD, इमरजेंसी फंड और स्मार्ट बचत', taglineEn: 'PPF, FDs, emergency funds and smart saving', icon: '🏦' },
  { slug: 'tax', nameHi: 'टैक्स', nameEn: 'Tax', taglineHi: 'इनकम टैक्स, रिजीम की तुलना और वैध बचत', taglineEn: 'Income tax, regime comparisons and legal savings', icon: '🧾' },
  { slug: 'bima', nameHi: 'बीमा', nameEn: 'Insurance', taglineHi: 'टर्म, हेल्थ और परिवार की सुरक्षा', taglineEn: 'Term, health and protecting your family', icon: '🛡️' },
  { slug: 'credit', nameHi: 'क्रेडिट और लोन', nameEn: 'Credit & Loans', taglineHi: 'क्रेडिट स्कोर, कार्ड और समझदारी से कर्ज', taglineEn: 'Credit scores, cards and borrowing wisely', icon: '💳' },
  { slug: 'digital', nameHi: 'डिजिटल पैसा', nameEn: 'Digital Money', taglineHi: 'UPI, ऑनलाइन सुरक्षा और नए जमाने का पैसा', taglineEn: 'UPI, online safety and new-age money', icon: '📱' },
];

export interface Section {
  hHi: string;
  hEn: string;
  pHi: string[];
  pEn: string[];
}

export interface Article {
  slug: string;
  category: CatSlug;
  titleHi: string;
  titleEn: string;
  excerptHi: string;
  excerptEn: string;
  date: string;
  minutes: number;
  sections: Section[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'sip-mutual-fund-guide',
    category: 'nivesh',
    titleHi: 'SIP से म्यूचुअल फंड निवेश: शुरुआत से समझें, ग़लतियों से बचें',
    titleEn: 'Investing in Mutual Funds Through SIPs: A Beginner-to-Confident Guide',
    excerptHi: 'हर महीने ₹500 से भी शुरू हो सकने वाला SIP भारत में संपत्ति बनाने का सबसे लोकप्रिय रास्ता क्यों बन गया है — और इसमें की जाने वाली पाँच आम ग़लतियाँ कौन-सी हैं।',
    excerptEn: 'Why the humble SIP — starting from as little as ₹500 a month — became India’s favourite wealth-building route, and the five mistakes that quietly ruin it.',
    date: '2026-07-01',
    minutes: 9,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'हर महीने एक तय तारीख़ को, आपके बैंक खाते से एक तय रक़म निकलकर एक म्यूचुअल फंड में लग जाती है — बस इतना ही है SIP यानी सिस्टमैटिक इन्वेस्टमेंट प्लान। न बाज़ार का समय देखना, न रोज़ भाव देखना, न किसी टिप का इंतज़ार। यही सादगी इसे भारत का सबसे लोकप्रिय निवेश तरीक़ा बना चुकी है — AMFI के आँकड़ों के अनुसार देश में हर महीने करोड़ों SIP किस्तें जमा होती हैं।',
          'लेकिन लोकप्रियता और समझ दो अलग चीज़ें हैं। बहुत से लोग SIP शुरू तो कर देते हैं, पर पहली बड़ी गिरावट में घबराकर बंद कर देते हैं — और यहीं इस तरीक़े का पूरा फ़ायदा हाथ से निकल जाता है। इस लेख में हम SIP का गणित, सही फंड चुनने का तरीक़ा और वे ग़लतियाँ समझेंगे जो अच्छे-भले निवेश को बर्बाद कर देती हैं।',
        ],
        pEn: [
          'On a fixed date every month, a fixed amount leaves your bank account and goes into a mutual fund — that is all a SIP, or Systematic Investment Plan, is. No timing the market, no watching prices daily, no waiting for tips. That simplicity has made it India’s most popular way to invest: crores of SIP instalments are deposited every month across the country.',
          'But popularity and understanding are different things. Many people start a SIP and then panic-stop it during the first big market fall — which is precisely where the method’s entire advantage is lost. In this article we will walk through the mathematics of SIPs, how to choose a fund, and the mistakes that quietly ruin a perfectly good investment.',
        ],
      },
      {
        hHi: 'SIP काम कैसे करता है: रुपये की औसत लागत',
        hEn: 'How a SIP works: rupee-cost averaging',
        pHi: [
          'SIP का असली जादू “रुपी-कॉस्ट एवरेजिंग” में है। जब बाज़ार महँगा होता है, आपकी तय रक़म से कम यूनिटें ख़रीदी जाती हैं; जब बाज़ार सस्ता होता है, उसी रक़म से ज़्यादा यूनिटें मिल जाती हैं। नतीजा — आपकी औसत ख़रीद लागत अपने आप संतुलित होती रहती है, बिना यह अनुमान लगाए कि बाज़ार कल ऊपर जाएगा या नीचे।',
          'इसीलिए गिरता बाज़ार SIP निवेशक का दुश्मन नहीं, दोस्त है: वही महीने सबसे सस्ती यूनिटें दिलाते हैं। जो निवेशक 2008, 2013 या 2020 की गिरावटों में भी किस्तें जारी रखे रहे, उन्हीं की दीर्घकालिक वापसी सबसे अच्छी रही। SIP रोकने का सबसे बुरा समय ठीक वही होता है जब उसे रोकने का मन सबसे ज़्यादा करता है।',
        ],
        pEn: [
          'The real magic of a SIP is “rupee-cost averaging”. When the market is expensive, your fixed amount buys fewer units; when the market is cheap, the same amount buys more. The result: your average purchase cost balances itself automatically, without you ever guessing whether the market will rise or fall tomorrow.',
          'This is why a falling market is a SIP investor’s friend, not enemy: those are the months that buy the cheapest units. Investors who kept their instalments running through the crashes of 2008, 2013 and 2020 are the ones with the best long-term results. The worst time to stop a SIP is exactly when you most feel like stopping it.',
        ],
      },
      {
        hHi: 'फंड कैसे चुनें: तीन सवाल',
        hEn: 'Choosing a fund: three questions',
        pHi: [
          'पहला सवाल — पैसा कितने साल के लिए है? पाँच साल से कम के लक्ष्य के लिए इक्विटी फंड उपयुक्त नहीं; वहाँ डेट या हाइब्रिड विकल्प देखें। दूसरा — क्या आप श्रेणी समझते हैं? शुरुआत के लिए ब्रॉड-मार्केट इंडेक्स फंड (जैसे निफ्टी 50 या सेंसेक्स पर आधारित) सबसे सरल और कम लागत वाले होते हैं। तीसरा — ख़र्च कितना है? एक्सपेंस रेशियो जितना कम, उतना ही ज़्यादा हिस्सा आपकी जेब में।',
          'पिछले एक-दो साल का “टॉप परफ़ॉर्मर” चुनना सबसे आम ग़लती है — श्रेणियाँ चक्र में चलती हैं और कल का विजेता अक्सर परसों का पिछड़ा होता है। फंड का दस साल का व्यवहार, फंड हाउस की साख और लागत देखना, पिछले साल की रैंकिंग देखने से कहीं बेहतर है।',
        ],
        pEn: [
          'First question — how many years is this money for? Equity funds are unsuitable for goals under five years; look at debt or hybrid options there. Second — do you understand the category? For beginners, broad-market index funds (based on the Nifty 50 or Sensex) are the simplest and cheapest. Third — what does it cost? The lower the expense ratio, the more of the return stays in your pocket.',
          'Picking last year’s “top performer” is the single most common mistake — categories move in cycles, and yesterday’s winner is often tomorrow’s laggard. A fund’s ten-year behaviour, the fund house’s reputation and the cost matter far more than last year’s ranking.',
        ],
      },
      {
        hHi: 'पाँच ग़लतियाँ जो SIP को बर्बाद करती हैं',
        hEn: 'Five mistakes that ruin SIPs',
        pHi: [
          'एक: गिरावट में SIP रोक देना — यही औसत लागत का पूरा फ़ायदा मिटा देता है। दो: हर तेज़ी में नया फंड जोड़ते जाना, जब तक पोर्टफोलियो में पंद्रह ओवरलैपिंग फंड न हो जाएँ। तीन: लक्ष्य के बिना निवेश — रक़म और अवधि लक्ष्य से तय होती है, पड़ोसी की सलाह से नहीं। चार: डिविडेंड (IDCW) विकल्प चुन लेना जबकि संपत्ति बनानी है — ग्रोथ विकल्प ही चक्रवृद्धि का पूरा लाभ देता है। पाँच: नॉमिनी और KYC अधूरा छोड़ना — परिवार के लिए बाद में यह सबसे बड़ा सिरदर्द बनता है।',
          'इन पाँचों का इलाज एक ही है: शुरू करने से पहले दस मिनट की लिखित योजना — कितना, कितने साल, किस लक्ष्य के लिए, और गिरावट आने पर क्या करना है (जवाब: कुछ नहीं, जारी रखना है)। योजना बोरिंग होती है, इसीलिए काम करती है।',
        ],
        pEn: [
          'One: stopping the SIP in a downturn — this erases the whole benefit of averaging. Two: adding a new fund in every rally until the portfolio holds fifteen overlapping schemes. Three: investing without a goal — the amount and duration should come from a goal, not a neighbour’s advice. Four: choosing the dividend (IDCW) option while trying to build wealth — the growth option is what delivers full compounding. Five: leaving nominee details and KYC incomplete — the single biggest headache for a family later.',
          'The cure for all five is the same: a ten-minute written plan before you start — how much, for how many years, for which goal, and what to do when a crash comes (answer: nothing, keep going). A plan is boring. That is exactly why it works.',
        ],
      },
      {
        hHi: 'शुरुआत आज, रक़म छोटी ही सही',
        hEn: 'Start today, however small',
        pHi: [
          'चक्रवृद्धि का सबसे बड़ा घटक रक़म नहीं, समय है। पच्चीस की उम्र में शुरू किया गया ₹2,000 का SIP, पैंतीस की उम्र के ₹5,000 के SIP से अक्सर आगे निकल जाता है — सिर्फ़ दस अतिरिक्त वर्षों के कारण। इसलिए “जब सैलरी बढ़ेगी तब शुरू करूँगा” सबसे महँगा वाक्य है।',
          'छोटी शुरुआत कीजिए, हर साल वेतन-वृद्धि के साथ SIP बढ़ाइए (इसे स्टेप-अप SIP कहते हैं), और फिर बाज़ार को अपना काम करने दीजिए। निवेश में रोमांच जितना कम, नतीजा उतना अच्छा।',
        ],
        pEn: [
          'The biggest ingredient of compounding is not the amount — it is time. A ₹2,000 SIP started at twenty-five often ends up ahead of a ₹5,000 SIP started at thirty-five, purely because of ten extra years. “I’ll start when my salary grows” is the most expensive sentence in personal finance.',
          'Start small, raise the SIP with every yearly increment (a step-up SIP), and let the market do its work. The less exciting your investing feels, the better it usually performs.',
        ],
      },
    ],
  },
  {
    slug: 'ppf-account-complete-guide',
    category: 'bachat',
    titleHi: 'PPF खाता: 15 साल की सबसे भरोसेमंद टैक्स-फ्री बचत, पूरी गाइड',
    titleEn: 'The PPF Account: India’s Most Trusted Tax-Free Savings, Explained Fully',
    excerptHi: 'सरकारी गारंटी, टैक्स-फ्री ब्याज और अनुशासन — पब्लिक प्रोविडेंट फंड आज भी हर भारतीय पोर्टफोलियो की नींव क्यों है, नियम-दर-नियम समझिए।',
    excerptEn: 'Sovereign guarantee, tax-free interest and enforced discipline — why the Public Provident Fund still anchors Indian portfolios, rule by rule.',
    date: '2026-07-03',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में शायद ही कोई बचत साधन हो जिस पर तीन पीढ़ियों का इतना भरोसा हो जितना पब्लिक प्रोविडेंट फंड यानी PPF पर। कारण सीधा है: पैसा भारत सरकार की गारंटी में रहता है, ब्याज पूरी तरह टैक्स-फ्री है, और 15 साल का लॉक-इन जबरदस्ती वह अनुशासन सिखा देता है जो हममें से अधिकांश में अपने-आप नहीं आता।',
          'यह लेख PPF के हर व्यावहारिक पहलू को समेटता है — खाता कहाँ और कैसे खोलें, कितना जमा करें, ब्याज की गणना की बारीकी, बीच में पैसा निकालने के नियम, और 15 साल पूरे होने पर आपके पास कौन-कौन से विकल्प होते हैं।',
        ],
        pEn: [
          'Few savings instruments in India carry three generations of trust the way the Public Provident Fund does. The reasons are simple: the money sits under a sovereign guarantee of the Government of India, the interest is entirely tax-free, and the 15-year lock-in forcibly teaches the discipline most of us never develop on our own.',
          'This article covers every practical aspect of the PPF — where and how to open an account, how much to deposit, the fine print of interest calculation, the rules for taking money out early, and the options you have when the 15 years are up.',
        ],
      },
      {
        hHi: 'मूल नियम: जमा, ब्याज और EEE',
        hEn: 'The basics: deposits, interest and EEE',
        pHi: [
          'PPF खाता कोई भी निवासी भारतीय — नौकरीपेशा, स्व-रोज़गार या गृहिणी — बैंक या डाकघर में खोल सकता है। न्यूनतम जमा ₹500 प्रति वर्ष है और अधिकतम ₹1.5 लाख; इससे ऊपर की रक़म पर न ब्याज मिलता है न टैक्स लाभ। ब्याज दर सरकार हर तिमाही घोषित करती है और यह हमेशा बाज़ार की तुलना में सम्मानजनक रही है।',
          'PPF की असली ताक़त उसका “EEE” दर्जा है — जमा पर धारा 80C की छूट (पुरानी टैक्स रिजीम में), ब्याज टैक्स-फ्री, और परिपक्वता की पूरी रक़म भी टैक्स-फ्री। भारत में यह तिहरा लाभ बहुत कम साधनों को मिला है। एक बारीकी याद रखिए: ब्याज हर महीने की 5 तारीख़ से महीने के अंत तक के न्यूनतम शेष पर गिना जाता है — इसलिए किस्त 5 तारीख़ से पहले जमा करने पर पूरा महीना ब्याज में जुड़ता है।',
        ],
        pEn: [
          'Any resident Indian — salaried, self-employed or homemaker — can open a PPF account at a bank or post office. The minimum deposit is ₹500 a year and the maximum ₹1.5 lakh; amounts above that earn neither interest nor tax benefit. The interest rate is declared by the government every quarter and has always stayed respectable relative to the market.',
          'The PPF’s real strength is its “EEE” status — deduction on deposit under Section 80C (in the old tax regime), tax-free interest, and a fully tax-free maturity amount. Very few Indian instruments enjoy this triple benefit. One detail worth remembering: interest is calculated on the lowest balance between the 5th and the end of each month — deposit before the 5th and the whole month counts.',
        ],
      },
      {
        hHi: 'बीच में पैसा चाहिए तो?',
        hEn: 'What if you need money midway?',
        pHi: [
          '15 साल लंबे ज़रूर हैं, पर PPF पूरी तरह बंद तिजोरी नहीं है। सातवें वित्त वर्ष से आंशिक निकासी की अनुमति है (सीमा नियमानुसार), तीसरे से छठे वर्ष के बीच खाते पर सस्ता लोन लिया जा सकता है, और गंभीर बीमारी या बच्चों की उच्च शिक्षा जैसी स्थितियों में पाँच साल बाद समय-पूर्व बंदी के नियम भी हैं (कुछ ब्याज कटौती के साथ)।',
          'व्यावहारिक सलाह: PPF को इमरजेंसी फंड मत बनाइए — उसके लिए अलग तरल बचत रखिए। PPF का काम है वह पैसा सँभालना जिसे आपको दस-पंद्रह साल छूना ही नहीं है: बच्चों की शिक्षा, रिटायरमेंट की नींव, बेटी की शादी। लॉक-इन बाधा नहीं, सुविधा है।',
        ],
        pEn: [
          'Fifteen years is long, but the PPF is not a sealed vault. Partial withdrawals are allowed from the seventh financial year (within limits), a cheap loan against the balance is available between the third and sixth years, and premature closure rules exist after five years for serious illness or children’s higher education (with a small interest penalty).',
          'Practical advice: do not treat the PPF as your emergency fund — keep separate liquid savings for that. The PPF’s job is to hold the money you must not touch for ten to fifteen years: children’s education, the foundation of retirement, a daughter’s wedding. The lock-in is a feature, not a flaw.',
        ],
      },
      {
        hHi: '15 साल बाद के तीन रास्ते',
        hEn: 'Three roads after year fifteen',
        pHi: [
          'परिपक्वता पर आपके पास तीन विकल्प होते हैं। पहला — पूरी रक़म टैक्स-फ्री निकाल लें। दूसरा — बिना नई जमा के खाता 5-5 साल बढ़ाते रहें; शेष राशि पर टैक्स-फ्री ब्याज मिलता रहता है और साल में एक निकासी की सुविधा रहती है। तीसरा — नई जमा के साथ विस्तार चुनें (परिपक्वता से एक वर्ष के भीतर फॉर्म देना ज़रूरी) और 80C का लाभ भी जारी रखें।',
          'कई समझदार निवेशक PPF को 25-30 साल तक बढ़ाते हैं और इसे अपने पोर्टफोलियो का “सरकारी-गारंटी वाला डेट हिस्सा” मानते हैं — इक्विटी की उठा-पटक के सामने यह चट्टान की तरह खड़ा रहता है।',
        ],
        pEn: [
          'At maturity you have three options. One — withdraw the entire amount, tax-free. Two — extend the account in five-year blocks without fresh deposits; the balance keeps earning tax-free interest and one withdrawal a year is allowed. Three — extend with fresh deposits (a form must be filed within one year of maturity), keeping the 80C benefit alive too.',
          'Many thoughtful investors run their PPF for 25–30 years and treat it as the “sovereign-guaranteed debt portion” of their portfolio — a rock that stands firm against equity’s turbulence.',
        ],
      },
    ],
  },
  {
    slug: 'emergency-fund-kaise-banaye',
    category: 'bachat',
    titleHi: 'इमरजेंसी फंड: छह महीने की ढाल जो हर योजना से पहले बननी चाहिए',
    titleEn: 'The Emergency Fund: The Six-Month Shield That Comes Before Every Other Plan',
    excerptHi: 'नौकरी छूटना, अस्पताल का बिल, अचानक की मरम्मत — इमरजेंसी फंड वह अंतर है जो संकट को असुविधा बनाकर रख देता है। कितना, कहाँ और कैसे बनाएं, पूरा तरीक़ा।',
    excerptEn: 'A lost job, a hospital bill, a sudden repair — an emergency fund is the difference between a crisis and an inconvenience. How much, where, and how to build it.',
    date: '2026-07-05',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'निवेश की दुनिया की सबसे कम रोमांचक और सबसे ज़्यादा ज़रूरी चीज़ का नाम है इमरजेंसी फंड। यह वह पैसा है जो न शेयर में लगता है, न प्रॉपर्टी में — बस चुपचाप खड़ा रहता है, इस एक काम के लिए कि जब ज़िंदगी बिना बताए बिल भेजे, तो आपको कर्ज़ या निवेश तोड़ने की नौबत न आए।',
          'भारत में यह ढाल और भी ज़रूरी है: नौकरी की अनिश्चितता, परिवार की ज़िम्मेदारियाँ और मेडिकल ख़र्च — तीनों एक साथ चलते हैं। बिना इमरजेंसी फंड के हर वित्तीय योजना ताश के महल जैसी है: एक झोंका, और SIP बंद, PPF अधूरा, क्रेडिट कार्ड का कर्ज़ चालू।',
        ],
        pEn: [
          'The least exciting and most essential thing in finance is the emergency fund. It is money that goes into no stock and no property — it simply stands guard, for the single purpose of making sure that when life sends a bill without warning, you are not forced into debt or into breaking your investments.',
          'In India this shield matters even more: job uncertainty, family responsibilities and medical costs all run together. Without an emergency fund, every financial plan is a house of cards — one gust, and the SIP stops, the PPF sits incomplete, and the credit-card debt begins.',
        ],
      },
      {
        hHi: 'कितना बड़ा हो फंड?',
        hEn: 'How big should it be?',
        pHi: [
          'सामान्य नियम: छह महीने का अनिवार्य ख़र्च — किराया/EMI, राशन, स्कूल फीस, बीमा प्रीमियम, बिजली-पानी — सब जोड़कर। स्थिर सरकारी नौकरी हो तो तीन-चार महीने चल सकते हैं; फ्रीलांसर, व्यवसायी या एकमात्र कमाने वाले हों तो नौ से बारह महीने तक रखना समझदारी है।',
          'ध्यान दें — गिनती “ख़र्च” की है, “आमदनी” की नहीं। मान लीजिए महीने का अनिवार्य ख़र्च ₹40,000 है, तो लक्ष्य हुआ ₹2.4 लाख। बड़ी रक़म लगे तो घबराइए नहीं: यह एक दिन में नहीं, किस्तों में बनता है — और आधा बना फंड भी शून्य से हज़ार गुना बेहतर है।',
        ],
        pEn: [
          'The standard rule: six months of essential expenses — rent/EMI, groceries, school fees, insurance premiums, utilities — added up. With a stable government job, three to four months can suffice; freelancers, business owners and sole earners are wiser at nine to twelve months.',
          'Note that we count expenses, not income. If your essential monthly spend is ₹40,000, the target is ₹2.4 lakh. If that sounds large, do not be discouraged: it is built in instalments, not in a day — and a half-built fund is a thousand times better than none.',
        ],
      },
      {
        hHi: 'कहाँ रखें: पहुँच बनाम लालच',
        hEn: 'Where to keep it: access versus temptation',
        pHi: [
          'इमरजेंसी फंड की तीन शर्तें हैं — सुरक्षित रहे, तुरंत मिले, और आपकी नज़रों से थोड़ा दूर रहे ताकि “सेल में फोन सस्ता है” जैसी इमरजेंसी में ख़र्च न हो जाए। सबसे व्यावहारिक ढाँचा: एक महीने का ख़र्च बचत खाते में, बाक़ी स्वीप-इन FD या लिक्विड फंड में, जहाँ से पैसा एक दिन में लौट आता है।',
          'जो जगहें इमरजेंसी फंड के लिए ग़लत हैं: शेयर और इक्विटी फंड (संकट के दिन ही गिरे मिलेंगे), PPF/NPS जैसे लॉक-इन साधन, सोने के गहने (बेचना भावनात्मक और महँगा), और नक़दी की मोटी गड्डी (न ब्याज, न सुरक्षा)। इमरजेंसी फंड से “रिटर्न” माँगना ही ग़लत सवाल है — इसका रिटर्न वह क़र्ज़ है जो आपको कभी लेना नहीं पड़ा।',
        ],
        pEn: [
          'An emergency fund has three requirements — it must be safe, instantly accessible, and slightly out of sight so it does not get spent on “emergencies” like a phone on sale. The most practical structure: one month’s expenses in the savings account, the rest in a sweep-in FD or liquid fund, from which money returns within a day.',
          'The wrong places for an emergency fund: stocks and equity funds (they will be down on exactly the day you need them), lock-in instruments like PPF/NPS, gold jewellery (selling is emotional and costly), and thick wads of cash (no interest, no safety). Asking an emergency fund for “returns” is the wrong question — its return is the loan you never had to take.',
        ],
      },
      {
        hHi: 'बनाने का तरीक़ा और इस्तेमाल के नियम',
        hEn: 'How to build it, and the rules of use',
        pHi: [
          'तरीक़ा वही जो हर बड़ी बचत का है: ऑटोमेशन। वेतन आते ही एक तय रक़म अपने-आप अलग खाते में चली जाए — पहले फंड, फिर ख़र्च। तेज़ी लानी हो तो बोनस, टैक्स रिफंड और वेतन-वृद्धि का पहला महीना सीधे इसी में डालिए। छह से बारह महीनों में ढाल तैयार हो जाती है।',
          'इस्तेमाल के दो नियम: पहला, सिर्फ़ असली आपात स्थिति में हाथ लगाइए — नौकरी जाना, मेडिकल ख़र्च, अनिवार्य मरम्मत; छुट्टियाँ और त्योहार की ख़रीदारी नहीं। दूसरा, जितना निकाला, संकट टलते ही सबसे पहली प्राथमिकता पर वापस भरिए। ढाल में छेद रह जाए तो अगला तीर सीधा लगता है।',
        ],
        pEn: [
          'The method is the same as for all serious saving: automation. The moment salary arrives, a fixed amount should move to a separate account by itself — fund first, spending after. To speed it up, route bonuses, tax refunds and the first month of every increment straight into it. The shield is ready within six to twelve months.',
          'Two rules of use: first, touch it only for true emergencies — job loss, medical costs, unavoidable repairs; not holidays or festival shopping. Second, whatever you withdraw, refill it as the first priority once the crisis passes. A shield with a hole lets the next arrow straight through.',
        ],
      },
    ],
  },
  {
    slug: 'credit-score-improve-guide',
    category: 'credit',
    titleHi: 'क्रेडिट स्कोर 750 पार कैसे ले जाएँ: वह संख्या जो आपके लोन की क़ीमत तय करती है',
    titleEn: 'Taking Your Credit Score Past 750: The Number That Prices Every Loan You’ll Take',
    excerptHi: 'CIBIL स्कोर सिर्फ़ लोन मिलने-न-मिलने का सवाल नहीं — यह तय करता है कि वही लोन आपको कितना महँगा पड़ेगा। स्कोर की गणित और उसे सुधारने के सिद्ध तरीक़े।',
    excerptEn: 'Your CIBIL score doesn’t just decide whether you get a loan — it decides how expensive that loan will be. The mathematics of the score, and the proven ways to raise it.',
    date: '2026-07-08',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में 300 से 900 के बीच की एक संख्या चुपचाप तय करती है कि बैंक आपसे कैसा व्यवहार करेगा — यही है क्रेडिट स्कोर, जिसे आम बोलचाल में CIBIL स्कोर कहा जाता है। 750 से ऊपर का स्कोर दरवाज़े खोलता है: होम लोन पर बेहतर ब्याज दर, तुरंत मंज़ूरी, ऊँची कार्ड लिमिट। 650 से नीचे का स्कोर या तो “ना” सुनवाता है या वही लोन महँगा कर देता है।',
          'अच्छी ख़बर यह है कि क्रेडिट स्कोर कोई जन्मपत्री नहीं — यह पूरी तरह आपके व्यवहार का हिसाब है, और व्यवहार बदलते ही छह से बारह महीनों में स्कोर बदलने लगता है। समझते हैं कि यह बनता कैसे है और सुधरता कैसे है।',
        ],
        pEn: [
          'A number between 300 and 900 quietly decides how banks treat you in India — the credit score, colloquially the CIBIL score. Above 750, doors open: better home-loan rates, quick approvals, higher card limits. Below 650, you either hear “no” or pay noticeably more for the same loan.',
          'The good news: a credit score is not a horoscope — it is purely an account of your behaviour, and when the behaviour changes, the score starts moving within six to twelve months. Let us see how it is built and how it is repaired.',
        ],
      },
      {
        hHi: 'स्कोर किस चीज़ से बनता है',
        hEn: 'What the score is made of',
        pHi: [
          'सबसे बड़ा हिस्सा — लगभग एक-तिहाई से ज़्यादा — भुगतान इतिहास का है: EMI और कार्ड बिल समय पर गए या नहीं। एक भी 30+ दिन की चूक रिपोर्ट में वर्षों दिखती रहती है। दूसरा बड़ा हिस्सा “क्रेडिट यूटिलाइज़ेशन” है — कार्ड लिमिट का कितना प्रतिशत आप औसतन इस्तेमाल करते हैं; 30% से नीचे रहना आदर्श माना जाता है।',
          'बाक़ी हिस्सा बनता है क्रेडिट इतिहास की लंबाई (पुराना कार्ड बंद करने से यह घटती है), क्रेडिट मिश्रण (सिर्फ़ अनसिक्योर्ड लोन का ढेर अच्छा संकेत नहीं) और नई पूछताछ की संख्या से — थोड़े समय में कई लोन आवेदन “क्रेडिट की भूख” जैसे दिखते हैं और स्कोर को दबाते हैं।',
        ],
        pEn: [
          'The largest share — over a third — is payment history: whether EMIs and card bills went on time. A single 30-plus-day default stays visible on the report for years. The second big component is credit utilisation — what percentage of your card limit you use on average; staying under 30% is considered ideal.',
          'The rest comes from the length of your credit history (closing an old card shortens it), your credit mix (a pile of only unsecured loans is not a good signal), and the number of recent enquiries — several loan applications in a short window look like “credit hunger” and depress the score.',
        ],
      },
      {
        hHi: 'स्कोर सुधारने के छह सिद्ध क़दम',
        hEn: 'Six proven steps to raise it',
        pHi: [
          'एक: हर EMI और कार्ड बिल का ऑटो-डेबिट लगाइए — देर से भुगतान ही स्कोर का सबसे बड़ा हत्यारा है। दो: कार्ड का इस्तेमाल लिमिट के 30% से नीचे रखिए; बिल जनरेट होने से पहले आंशिक भुगतान भी यूटिलाइज़ेशन घटा देता है। तीन: सबसे पुराना कार्ड बंद मत कीजिए, भले इस्तेमाल कम हो। चार: साल में एक बार अपनी क्रेडिट रिपोर्ट मुफ़्त निकालकर ग़लतियाँ जाँचिए — बंद हो चुका लोन “चालू” दिखना आम त्रुटि है, और विवाद (dispute) दर्ज करना आपका अधिकार।',
          'पाँच: कम समय में कई लोन आवेदनों से बचिए; ज़रूरत हो तो पहले एक जगह पात्रता जाँचिए। छह: अगर इतिहास बहुत बिगड़ा है, तो FD पर सिक्योर्ड क्रेडिट कार्ड लेकर छोटा ख़र्च और पूरा भुगतान दोहराइए — यह टूटे स्कोर को फिर से खड़ा करने का सबसे भरोसेमंद रास्ता है। धैर्य रखिए: स्कोर लिफ़्ट नहीं, सीढ़ी है।',
        ],
        pEn: [
          'One: put every EMI and card bill on auto-debit — late payment is the score’s biggest killer. Two: keep card usage under 30% of the limit; even a part-payment before the bill generates lowers utilisation. Three: never close your oldest card, however little you use it. Four: pull your free credit report once a year and hunt for errors — a closed loan still showing “active” is a common one, and filing a dispute is your right.',
          'Five: avoid multiple loan applications in a short window; check eligibility in one place first if needed. Six: if your history is badly damaged, take a secured credit card against an FD and repeat small spends with full payments — the most reliable road back for a broken score. Be patient: a score is a staircase, not a lift.',
        ],
      },
      {
        hHi: 'जो बातें स्कोर पर असर नहीं डालतीं',
        hEn: 'What does not affect the score',
        pHi: [
          'कुछ मिथक साफ़ कर दें: अपना स्कोर ख़ुद जाँचना “सॉफ्ट एंक्वायरी” है — इससे स्कोर नहीं गिरता, चाहे रोज़ देखें। आपकी सैलरी, बैंक बैलेंस, निवेश या UPI लेन-देन सीधे स्कोर में नहीं गिने जाते। डेबिट कार्ड का इस्तेमाल क्रेडिट इतिहास नहीं बनाता।',
          'और आख़िरी बात — स्कोर का मक़सद कर्ज़ के लायक़ दिखना नहीं, कर्ज़ को सस्ता करना है। सबसे अच्छा रिश्ता वही है जिसमें क्रेडिट आपके अनुशासन का सबूत हो, ज़रूरत का नहीं।',
        ],
        pEn: [
          'Let us clear some myths: checking your own score is a “soft enquiry” — it does not lower the score even if you look daily. Your salary, bank balance, investments and UPI transactions are not directly counted in the score. Debit-card usage builds no credit history.',
          'And finally — the purpose of a score is not to look creditworthy, but to make credit cheap. The best relationship with credit is the one where it is evidence of your discipline, not of your need.',
        ],
      },
    ],
  },
  {
    slug: 'term-insurance-guide',
    category: 'bima',
    titleHi: 'टर्म इंश्योरेंस: सबसे सस्ता वादा जो आपके परिवार की पूरी दुनिया सँभाल सकता है',
    titleEn: 'Term Insurance: The Cheapest Promise That Can Hold Up Your Family’s Whole World',
    excerptHi: 'न निवेश, न रिटर्न, न मैच्योरिटी — सिर्फ़ शुद्ध सुरक्षा। इसीलिए टर्म प्लान हर कमाने वाले की पहली पॉलिसी होनी चाहिए। कितना कवर, कब तक, और किन बातों का ध्यान रखें।',
    excerptEn: 'No investment, no returns, no maturity — pure protection only. That is exactly why a term plan should be every earner’s first policy. How much cover, till when, and what to watch.',
    date: '2026-07-10',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बीमा की दुनिया में एक ही उत्पाद है जो अपने नाम के साथ पूरा न्याय करता है — टर्म इंश्योरेंस। आप एक छोटा-सा वार्षिक प्रीमियम देते हैं; बदले में कंपनी वादा करती है कि पॉलिसी अवधि में आपके न रहने पर परिवार को एक बड़ी तयशुदा रक़म मिलेगी। अवधि पूरी होने पर कुछ वापस नहीं मिलता — और यही इसकी ख़ूबी है, कमी नहीं।',
          'क्योंकि कंपनी को “रिटर्न” नहीं देना, इसलिए ३०-३५ साल के स्वस्थ व्यक्ति को ₹1 करोड़ का कवर अक्सर रोज़ की एक चाय से कम क़ीमत में मिल जाता है। समस्या सिर्फ़ एक है: यह उत्पाद बिकता कम है, क्योंकि इसमें एजेंट का कमीशन और ग्राहक का लालच — दोनों को कुछ ख़ास नहीं मिलता। इसीलिए इसे ख़ुद समझकर ख़रीदना पड़ता है।',
        ],
        pEn: [
          'One product in the insurance world does full justice to its name — term insurance. You pay a small annual premium; in return, the company promises that if you are not there during the policy term, your family receives a large fixed sum. If you outlive the term, nothing comes back — and that is its virtue, not its flaw.',
          'Because the company owes no “returns”, a healthy 30–35-year-old often gets ₹1 crore of cover for less than the price of a daily cup of tea. There is only one problem: the product is under-sold, because neither the agent’s commission nor the customer’s greed finds much in it. Which is why it must be understood and bought by you, deliberately.',
        ],
      },
      {
        hHi: 'कितना कवर: आय का 15-20 गुना',
        hEn: 'How much cover: 15–20 times income',
        pHi: [
          'अँगूठे का नियम: वार्षिक आय का 15 से 20 गुना, जिसमें बक़ाया लोन (होम लोन विशेषकर) और बच्चों की शिक्षा जैसे बड़े भविष्य के ख़र्च जोड़ लें। ₹12 लाख सालाना कमाने वाले के लिए ₹1.5–2 करोड़ का कवर अटपटा नहीं, गणितीय रूप से सही है — यही रक़म निवेश होकर परिवार की मासिक आमदनी की जगह ले सकती है।',
          'अवधि उतनी रखें जितने साल परिवार आप पर आर्थिक रूप से निर्भर रहेगा — आमतौर पर रिटायरमेंट की उम्र यानी 60-65 तक। 85 साल तक का महँगा कवर अक्सर बेकार है: तब तक ज़िम्मेदारियाँ ख़त्म और संपत्ति तैयार होनी चाहिए। बीमा ज़िम्मेदारियों का पुल है, अमरता की योजना नहीं।',
        ],
        pEn: [
          'The rule of thumb: 15 to 20 times annual income, plus outstanding loans (especially the home loan) and large future costs like children’s education. For someone earning ₹12 lakh a year, ₹1.5–2 crore of cover is not excessive — it is the amount that, invested, can replace the family’s monthly income.',
          'Set the term for as long as the family will depend on your income — usually up to retirement at 60–65. Expensive cover running to age 85 is mostly wasted: by then responsibilities should be over and assets built. Insurance is a bridge across your responsibilities, not a plan for immortality.',
        ],
      },
      {
        hHi: 'ख़रीदते समय पाँच बातें',
        hEn: 'Five things at purchase time',
        pHi: [
          'पहली और सबसे बड़ी: प्रस्ताव फ़ॉर्म में हर सवाल का सच जवाब — धूम्रपान, बीमारी, पुरानी पॉलिसियाँ, ख़तरनाक शौक़ सब कुछ। दावे ख़ारिज होने का सबसे बड़ा कारण छिपाई गई जानकारी है, प्रीमियम बचाने की यह सबसे महँगी तरकीब है। दूसरी: कंपनी का क्लेम सेटलमेंट रिकॉर्ड देखिए — IRDAI हर साल यह आँकड़ा प्रकाशित करता है।',
          'तीसरी: राइडर सोच-समझकर — एक्सीडेंटल डिसेबिलिटी और क्रिटिकल इलनेस राइडर उपयोगी हो सकते हैं, पर “प्रीमियम वापसी” (TROP) वाला विकल्प लगभग हमेशा घाटे का सौदा है; वही अतिरिक्त प्रीमियम SIP में ज़्यादा बनाता है। चौथी: पॉलिसी की जानकारी परिवार को दीजिए — जिस काग़ज़ के बारे में परिवार जानता ही नहीं, वह किसी काम का नहीं। पाँचवीं: नॉमिनी अपडेट रखिए, और शादी/बच्चों जैसे मोड़ों पर कवर की समीक्षा कीजिए।',
        ],
        pEn: [
          'First and biggest: answer every question on the proposal form truthfully — smoking, illnesses, existing policies, risky hobbies, all of it. Concealed information is the top reason claims get rejected; hiding facts to save premium is the most expensive trick in insurance. Second: check the insurer’s claim-settlement record — IRDAI publishes it every year.',
          'Third: choose riders thoughtfully — accidental disability and critical illness riders can be useful, but the “return of premium” (TROP) option is almost always a poor deal; the same extra premium builds more in a SIP. Fourth: tell your family the policy exists — a paper the family doesn’t know about protects no one. Fifth: keep the nominee updated, and review the cover at life’s turns — marriage, children, a big loan.',
        ],
      },
    ],
  },
  {
    slug: 'old-vs-new-tax-regime',
    category: 'tax',
    titleHi: 'पुरानी बनाम नई टैक्स रिजीम: आपके लिए कौन-सी सही है, गणित के साथ',
    titleEn: 'Old vs New Tax Regime: Which One Is Right for You, With the Arithmetic',
    excerptHi: 'नई रिजीम की कम दरें बनाम पुरानी रिजीम की कटौतियाँ — फ़ैसला नारे से नहीं, आपके अपने आँकड़ों से होना चाहिए। तुलना का तरीक़ा, उदाहरण सहित।',
    excerptEn: 'The new regime’s lower rates versus the old regime’s deductions — the decision should come from your own numbers, not slogans. A method for the comparison, with examples.',
    date: '2026-07-12',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'हर वित्त वर्ष की शुरुआत में लाखों वेतनभोगी एक ही सवाल से जूझते हैं: पुरानी टैक्स रिजीम चुनें या नई? दोनों के पैरोकार नारों से लड़ते हैं, जबकि सच्चाई सीधी है — यह व्यक्तिगत गणित का सवाल है। जिनकी कटौतियाँ बड़ी हैं, उन्हें पुरानी रिजीम अब भी बचत दे सकती है; जिनकी कटौतियाँ कम हैं, उनके लिए नई रिजीम की घटी दरें और सरलता प्रायः बेहतर हैं।',
          'यह लेख नियमों का ढाँचा और तुलना करने की विधि देता है। दरें और सीमाएँ बजट के साथ बदलती रहती हैं, इसलिए अंतिम निर्णय से पहले चालू वर्ष के आधिकारिक स्लैब अवश्य देख लें — तरीक़ा वही रहता है, संख्याएँ बदलती हैं।',
        ],
        pEn: [
          'At the start of every financial year, lakhs of salaried Indians wrestle with one question: old tax regime or new? Partisans of each fight with slogans, while the truth is plain — it is a question of personal arithmetic. Those with large deductions may still save under the old regime; those with few deductions are usually better off with the new regime’s lower rates and simplicity.',
          'This article gives you the structure of the rules and a method for the comparison. Rates and limits change with budgets, so always check the current year’s official slabs before the final call — the method stays the same, the numbers move.',
        ],
      },
      {
        hHi: 'दो रिजीम, दो दर्शन',
        hEn: 'Two regimes, two philosophies',
        pHi: [
          'पुरानी रिजीम का दर्शन है: “सरकार जिन कामों को प्रोत्साहित करती है, उन पर ख़र्च/निवेश करो और टैक्स घटाओ” — 80C (PPF, ELSS, जीवन बीमा, बच्चों की ट्यूशन फीस), 80D (स्वास्थ्य बीमा), HRA, होम लोन का ब्याज, NPS आदि मिलाकर अच्छी-ख़ासी आय कर-मुक्त हो सकती है। क़ीमत: काग़ज़ी अनुशासन और साल भर की योजना।',
          'नई रिजीम का दर्शन है: “कटौतियों का जंगल हटाओ, दरें घटाओ” — गिनी-चुनी छूटों (जैसे वेतनभोगियों की स्टैंडर्ड डिडक्शन और नियोक्ता का NPS अंशदान) के अलावा कुछ नहीं, बदले में हर स्लैब पर हल्की दरें और ऊँची कर-मुक्त सीमा। अब यही डिफ़ॉल्ट रिजीम भी है — यानी कुछ न चुनने पर यही लागू होती है।',
        ],
        pEn: [
          'The old regime’s philosophy: “spend/invest in what the state encourages, and reduce your tax” — 80C (PPF, ELSS, life insurance, children’s tuition), 80D (health insurance), HRA, home-loan interest, NPS and more can shelter a sizeable slice of income. The price: paperwork discipline and year-round planning.',
          'The new regime’s philosophy: “clear the jungle of deductions, lower the rates” — almost nothing survives beyond a few items (like the salaried standard deduction and the employer’s NPS contribution), in exchange for lighter rates on every slab and a higher tax-free threshold. It is now also the default — choose nothing, and this is what applies.',
        ],
      },
      {
        hHi: 'तुलना कैसे करें: तीस मिनट की विधि',
        hEn: 'How to compare: the thirty-minute method',
        pHi: [
          'क़दम एक: अपनी कुल कर-योग्य आय लिखिए। क़दम दो: अपनी वास्तविक कटौतियाँ जोड़िए — वही जो आप सचमुच करते/कर सकते हैं: 80C में कितना जाता है, स्वास्थ्य बीमा प्रीमियम, HRA मिलता है या नहीं, होम लोन का ब्याज। क़दम तीन: आयकर विभाग का आधिकारिक कैलकुलेटर खोलिए और दोनों रिजीम में टैक्स निकालिए। जो कम, वही आपकी रिजीम — इस साल के लिए।',
          'मोटा पैटर्न (हर साल सत्यापित करें): कुल कटौतियाँ जितनी बड़ी — ख़ासकर HRA + 80C + होम लोन ब्याज का मेल — पुरानी रिजीम उतनी आकर्षक। कटौतियाँ सीमित हों (किराया नहीं, लोन नहीं, निवेश PPF/ELSS से बाहर), तो नई रिजीम प्रायः जीतती है। वेतनभोगी हर साल रिजीम बदल सकते हैं; व्यवसाय-आय वालों के लिए अदला-बदली के नियम सख़्त हैं, इसलिए वे सोच-समझकर चुनें।',
        ],
        pEn: [
          'Step one: write down your total taxable income. Step two: add up your real deductions — the ones you actually make or can make: what goes into 80C, health-insurance premium, whether you receive HRA, home-loan interest. Step three: open the Income Tax Department’s official calculator and compute tax under both regimes. Whichever is lower is your regime — for this year.',
          'The rough pattern (verify each year): the larger your total deductions — especially the combination of HRA + 80C + home-loan interest — the more attractive the old regime. With limited deductions (no rent, no loan, investments outside PPF/ELSS), the new regime usually wins. Salaried taxpayers may switch every year; the rules are stricter for business income, so choose carefully there.',
        ],
      },
      {
        hHi: 'एक चेतावनी: पूँछ से कुत्ता मत हिलाइए',
        hEn: 'One warning: don’t let the tail wag the dog',
        pHi: [
          'सबसे आम ग़लती टैक्स बचाने के लिए ख़राब उत्पाद ख़रीदना है — मार्च के आख़िरी हफ़्ते में जल्दबाज़ी में लिया गया महँगा एंडाउमेंट प्लान इसका क्लासिक उदाहरण है। कर-बचत निवेश भी पहले “अच्छा निवेश” होना चाहिए: PPF, ELSS, NPS, टर्म बीमा — ये अपने दम पर खड़े उत्पाद हैं, टैक्स लाभ इन पर ऊपर से मिलता है।',
          'रिजीम कोई भी चुनें, सिद्धांत एक ही है: टैक्स योजना वित्तीय योजना का हिस्सा है, उसका विकल्प नहीं। पहले लक्ष्य, फिर उत्पाद, और उसके बाद यह देखना कि कौन-सी रिजीम उस तस्वीर पर कम टैक्स लगाती है।',
        ],
        pEn: [
          'The commonest mistake is buying bad products to save tax — the expensive endowment plan bought in a rush in the last week of March is the classic example. A tax-saving investment must first be a good investment: PPF, ELSS, NPS, term insurance — these stand on their own, with the tax benefit as a bonus on top.',
          'Whichever regime you choose, the principle is the same: tax planning is a part of financial planning, not a substitute for it. Goals first, products second — and only then check which regime taxes that picture more lightly.',
        ],
      },
    ],
  },
  {
    slug: 'upi-fraud-se-bachav',
    category: 'digital',
    titleHi: 'UPI धोखाधड़ी से बचाव: नौ चालें जो हर भारतीय को पहचाननी चाहिए',
    titleEn: 'Staying Safe from UPI Fraud: Nine Tricks Every Indian Should Recognise',
    excerptHi: 'पैसा “पाने” के लिए PIN कभी नहीं डलता — यह एक वाक्य आधे फ्रॉड रोक देता है। बाक़ी आधे रोकने के लिए ठगों की नौ सबसे चालू तरकीबें और हर एक का तोड़।',
    excerptEn: 'You never enter a PIN to RECEIVE money — that one sentence stops half of all UPI fraud. Here are the nine most common tricks for the other half, and the counter to each.',
    date: '2026-07-15',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'UPI ने भारत में पैसा भेजना जितना आसान बनाया, ठगों ने उसे उतनी ही तेज़ी से अपना कार्यक्षेत्र बना लिया। तकनीक शायद ही कभी टूटती है — टूटता है भरोसा। लगभग हर UPI फ्रॉड की जड़ में एक ही चीज़ है: जल्दबाज़ी या लालच की हालत में इंसान से करवाया गया एक ग़लत क्लिक।',
          'इसलिए बचाव का पहला नियम तकनीकी नहीं, मानसिक है: जो भी संदेश आपको “अभी, तुरंत” कुछ करने को कहे — भुगतान, PIN, OTP, ऐप इंस्टॉल — वहीं रुक जाइए। असली बैंक, असली कंपनी, असली सरकारी विभाग कभी भी इतनी हड़बड़ी नहीं मचाते।',
        ],
        pEn: [
          'UPI made sending money in India effortless — and fraudsters just as quickly made it their workplace. The technology itself is rarely broken; what breaks is trust. At the root of nearly every UPI fraud is the same thing: one wrong tap, extracted from a person in a state of hurry or greed.',
          'So the first rule of safety is mental, not technical: whenever a message demands you do something “right now, immediately” — a payment, a PIN, an OTP, an app install — stop right there. Real banks, real companies and real government departments never manufacture that kind of panic.',
        ],
      },
      {
        hHi: 'चाल 1–3: PIN, “ग़लती से पैसा” और QR',
        hEn: 'Tricks 1–3: the PIN, the “accidental transfer”, and QR codes',
        pHi: [
          'पहली और सबसे बड़ी चाल: “आपको पैसा भेजा है, स्वीकारने के लिए PIN डालें।” याद रखिए — पैसा पाने के लिए PIN कभी नहीं लगता; PIN केवल भेजने के लिए है। “कलेक्ट रिक्वेस्ट” पर PIN डालते ही पैसा आपके खाते से जाता है, आता नहीं। दूसरी चाल: “ग़लती से आपके खाते में पैसा चला गया, लौटा दीजिए” — पहले अपने बैंक स्टेटमेंट में देखिए कि पैसा सच में आया भी है या सिर्फ़ नक़ली SMS आया है; लौटाना हो तो बैंक के माध्यम से लौटाइए।',
          'तीसरी: QR कोड सिर्फ़ भुगतान करने के लिए स्कैन होता है, पाने के लिए नहीं। “इनाम पाने के लिए यह QR स्कैन करें” सुनते ही समझ जाइए कि सामने ठग है। OLX-प्रकार की साइटों पर सामान बेचते समय यह चाल सबसे ज़्यादा चलती है।',
        ],
        pEn: [
          'The first and biggest trick: “Money has been sent to you — enter your PIN to accept it.” Remember — receiving money never requires a PIN; the PIN exists only for sending. Enter your PIN on a collect request and money leaves your account, it does not arrive. Second trick: “money was transferred to your account by mistake, please return it” — first check your actual bank statement to see whether anything arrived at all, or only a fake SMS did; if a genuine return is needed, do it through the bank.',
          'Third: a QR code is scanned to PAY, never to receive. The moment you hear “scan this QR to claim your prize”, you are talking to a fraudster. This trick runs hardest against people selling items on classifieds platforms.',
        ],
      },
      {
        hHi: 'चाल 4–6: स्क्रीन-शेयर, नक़ली हेल्पलाइन, KYC नाटक',
        hEn: 'Tricks 4–6: screen-sharing, fake helplines, the KYC drama',
        pHi: [
          'चौथी चाल: “समस्या ठीक करने के लिए यह ऐप डाउनलोड करें” — स्क्रीन-शेयरिंग ऐप (AnyDesk/TeamViewer जैसे) इंस्टॉल करते ही ठग आपकी स्क्रीन, OTP और UPI ऐप सब देख सकता है। बैंक कभी ऐसा ऐप नहीं डलवाते। पाँचवीं: गूगल पर मिला “कस्टमर केयर नंबर” — ठग नक़ली नंबर सर्च में ऊपर चढ़ा देते हैं; नंबर हमेशा आधिकारिक ऐप या कार्ड के पीछे से लीजिए।',
          'छठी: “आपका KYC/सिम/खाता आज रात बंद हो जाएगा” — डर बेचने वाला यह नाटक बुज़ुर्गों पर सबसे ज़्यादा आज़माया जाता है। कोई बैंक SMS-लिंक से KYC नहीं करवाता। ऐसे संदेश का एक ही जवाब है: डिलीट, और शक हो तो शाखा में जाकर पूछ लेना।',
        ],
        pEn: [
          'Fourth trick: “download this app so we can fix your problem” — install a screen-sharing app (AnyDesk/TeamViewer types) and the fraudster sees your screen, OTPs and UPI app in real time. Banks never ask for such apps. Fifth: the “customer-care number” found on Google — fraudsters push fake numbers up the search results; always take the number from the official app or the back of your card.',
          'Sixth: “your KYC/SIM/account will be blocked tonight” — this fear-selling drama is tried most on the elderly. No bank does KYC over an SMS link. The only response to such messages: delete, and if in doubt, walk into the branch and ask.',
        ],
      },
      {
        hHi: 'चाल 7–9 और ठगे जाने पर पहला घंटा',
        hEn: 'Tricks 7–9, and the first hour after being defrauded',
        pHi: [
          'सातवीं: नौकरी/टास्क फ्रॉड — पहले छोटे “कमीशन” देकर भरोसा जीतते हैं, फिर बड़ी रक़म जमा करवाकर ग़ायब। आठवीं: सोशल मीडिया पर दोस्त/रिश्तेदार बनकर “इमरजेंसी में पैसे भेजो” — कॉल करके आवाज़ से पुष्टि किए बिना कभी न भेजें। नौवीं: निवेश ग्रुप जो रोज़ “गारंटीड रिटर्न” के स्क्रीनशॉट दिखाते हैं — जहाँ गारंटी शब्द है, वहीं धोखा है।',
          'अगर ठगी हो जाए तो पहला घंटा सोने जैसा है: तुरंत 1930 (राष्ट्रीय साइबर क्राइम हेल्पलाइन) पर कॉल कीजिए और cybercrime.gov.in पर शिकायत दर्ज कीजिए; साथ ही अपने बैंक/UPI ऐप को सूचित कर लेन-देन विवाद में डालिए। जितनी जल्दी रिपोर्ट, पैसा रुकने-लौटने की संभावना उतनी ज़्यादा। शर्म से चुप रहना ठग की सबसे बड़ी ताक़त है — रिपोर्ट कीजिए, हर बार।',
        ],
        pEn: [
          'Seventh: job/task fraud — small “commissions” are paid first to win trust, then a large deposit is taken and the operation vanishes. Eighth: impersonation of a friend or relative on social media asking for “emergency money” — never send without confirming by voice on a call. Ninth: investment groups posting daily screenshots of “guaranteed returns” — wherever the word guarantee appears, the fraud is already present.',
          'If you are defrauded, the first hour is golden: call 1930 (the national cybercrime helpline) immediately and file a complaint at cybercrime.gov.in; inform your bank/UPI app and dispute the transaction in parallel. The faster the report, the higher the chance the money is frozen or recovered. Staying silent out of embarrassment is the fraudster’s greatest asset — report it, every time.',
        ],
      },
    ],
  },
  {
    slug: 'gold-investment-options-india',
    category: 'nivesh',
    titleHi: 'सोने में निवेश: गहना, सिक्का, गोल्ड ETF या SGB — सही तरीक़ा कौन-सा है?',
    titleEn: 'Investing in Gold: Jewellery, Coins, Gold ETFs or SGBs — Which Way Is Right?',
    excerptHi: 'भारतीयों का सोने से रिश्ता पुराना है, पर निवेश की नज़र से हर पीला विकल्प बराबर नहीं। मेकिंग चार्ज से लेकर टैक्स तक — चारों रास्तों की ईमानदार तुलना।',
    excerptEn: 'India’s bond with gold is ancient, but not every yellow option is equal as an investment. From making charges to tax — an honest comparison of all four routes.',
    date: '2026-07-17',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'शादी के गहनों से लेकर धनतेरस के सिक्के तक, सोना भारतीय घरों में सदियों से बचत का पर्याय रहा है। भावना अपनी जगह है, पर निवेश की मेज़ पर बैठें तो सवाल बदल जाता है: यदि मक़सद संपत्ति बढ़ाना है, तो सोना किस रूप में ख़रीदना चाहिए — और कितना?',
          'आधुनिक निवेशक के पास चार मुख्य रास्ते हैं: भौतिक सोना (गहने/सिक्के), गोल्ड ETF, गोल्ड म्यूचुअल फंड, और (जब सरकार जारी करे) सॉवरेन गोल्ड बॉन्ड। चारों की लागत, सुरक्षा, तरलता और टैक्स-व्यवहार अलग-अलग हैं — और यही अंतर लंबी अवधि में लाखों का फ़र्क़ पैदा करता है।',
        ],
        pEn: [
          'From wedding jewellery to Dhanteras coins, gold has been a synonym for saving in Indian homes for centuries. Sentiment has its place, but at the investment table the question changes: if the goal is growing wealth, in what form should gold be bought — and how much of it?',
          'The modern investor has four main routes: physical gold (jewellery/coins), gold ETFs, gold mutual funds, and — whenever the government issues them — Sovereign Gold Bonds. Their costs, safety, liquidity and tax treatment differ, and over the long term those differences add up to lakhs.',
        ],
      },
      {
        hHi: 'भौतिक सोना: भावना महँगी पड़ती है',
        hEn: 'Physical gold: sentiment is expensive',
        pHi: [
          'गहनों की पहली सच्चाई मेकिंग चार्ज है — 8% से 25% तक, जो बेचते समय लगभग कभी वापस नहीं मिलता; साथ में 3% GST अलग। यानी ख़रीदते ही निवेश दो अंकों के घाटे से शुरू होता है। ऊपर से लॉकर का किराया, चोरी का जोखिम और शुद्धता की चिंता (हॉलमार्क अनिवार्य रूप से देखें — अब छह अंकों का HUID आधार है)।',
          'इसका मतलब यह नहीं कि गहने मत ख़रीदिए — पहनने की चीज़ का अपना आनंद है। मतलब सिर्फ़ इतना है कि गहनों को “निवेश” के खाते में मत लिखिए। निवेश वाला सोना काग़ज़ी/डिजिटल रूप में सस्ता, सुरक्षित और शुद्ध मिलता है।',
        ],
        pEn: [
          'The first truth about jewellery is the making charge — 8% to 25%, almost never recovered at resale — plus 3% GST on top. Your investment starts with a double-digit loss on day one. Add locker rent, theft risk and purity worries (always insist on hallmarking — the six-digit HUID is now the standard).',
          'This does not mean don’t buy jewellery — a thing worn has its own joy. It only means don’t write jewellery into the “investment” column. Investment gold is cheaper, safer and purer in paper or digital form.',
        ],
      },
      {
        hHi: 'ETF, गोल्ड फंड और SGB',
        hEn: 'ETFs, gold funds and SGBs',
        pHi: [
          'गोल्ड ETF शेयर की तरह एक्सचेंज पर ख़रीदा-बेचा जाता है, हर यूनिट के पीछे शुद्ध सोना, न मेकिंग चार्ज न शुद्धता की चिंता; चाहिए बस डीमैट खाता। गोल्ड म्यूचुअल फंड वही काम बिना डीमैट के SIP-सुविधा के साथ करते हैं, थोड़ी अतिरिक्त लागत पर। छोटे-छोटे मासिक निवेश के लिए यह सबसे व्यावहारिक रास्ता है।',
          'सॉवरेन गोल्ड बॉन्ड (SGB) — जब उपलब्ध हों — निवेश-सोने का सबसे समृद्ध रूप रहे हैं: सोने के भाव के साथ-साथ सालाना ब्याज, और परिपक्वता तक रखने पर पूँजीगत लाभ की छूट। सीमा यह कि इनकी उपलब्धता सरकारी निर्गम पर निर्भर है और बीच में बेचना ETF जितना आसान नहीं। जो निर्गम खुले, उसकी शर्तें उसी समय पढ़कर तय करें।',
        ],
        pEn: [
          'A gold ETF trades on the exchange like a share, with pure gold behind every unit — no making charge, no purity doubt; all you need is a demat account. Gold mutual funds do the same job without demat and with SIP convenience, at slightly higher cost. For small monthly amounts they are the most practical route.',
          'Sovereign Gold Bonds — whenever issues are open — have been the richest form of investment gold: the gold price plus annual interest, and capital-gains exemption if held to maturity. The limits: availability depends on government issuance, and mid-way exits are less liquid than ETFs. Read the terms of whichever tranche opens at the time.',
        ],
      },
      {
        hHi: 'पोर्टफोलियो में कितना सोना?',
        hEn: 'How much gold in a portfolio?',
        pHi: [
          'सोना आमदनी नहीं देता — न ब्याज, न लाभांश (SGB के ब्याज को छोड़कर); इसका काम पोर्टफोलियो का “बीमा” होना है, इंजन नहीं। संकट और मुद्रास्फीति के दौर में यह चमकता है, इसलिए ज़्यादातर सलाहकार कुल निवेश का 5–10% सोने में रखने की बात करते हैं — इतना कि गिरते बाज़ार में सहारा दे, इतना नहीं कि बढ़ते बाज़ार की कमाई खा जाए।',
          'सार यह: पहनने के लिए गहना, निवेश के लिए ETF/गोल्ड फंड (और SGB जब मिलें), मात्रा सीमित, और ख़रीद नियमित। पीली धातु को पोर्टफोलियो का मसाला रहने दीजिए — पूरी थाली मत बनाइए।',
        ],
        pEn: [
          'Gold produces no income — no interest, no dividend (barring SGB coupons); its job is to be the portfolio’s insurance, not its engine. It shines in crises and inflationary spells, which is why most advisers suggest 5–10% of total investments — enough to cushion a falling market, not so much that it eats the gains of a rising one.',
          'The summary: jewellery for wearing, ETFs/gold funds for investing (and SGBs when available), the quantity modest, the buying regular. Let the yellow metal be the seasoning of the portfolio — not the whole plate.',
        ],
      },
    ],
  },
  {
    slug: 'health-insurance-family-guide',
    category: 'bima',
    titleHi: 'हेल्थ इंश्योरेंस: एक अस्पताल-बिल से पूरी बचत बह जाने से पहले पढ़िए',
    titleEn: 'Health Insurance: Read This Before One Hospital Bill Washes Away Your Savings',
    excerptHi: 'भारत में मध्यम वर्ग के कर्ज़ में डूबने का सबसे बड़ा अकेला कारण मेडिकल ख़र्च है। कितना कवर लें, फ़ैमिली फ्लोटर कैसे चुनें, और क्लेम के समय कौन-सी शर्तें काटती हैं।',
    excerptEn: 'Medical bills are the single biggest reason middle-class Indian families fall into debt. How much cover to take, how to choose a family floater, and the clauses that bite at claim time.',
    date: '2026-07-19',
    minutes: 9,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारतीय परिवारों की बचत का सबसे बड़ा दुश्मन बाज़ार की गिरावट नहीं, अस्पताल का बिल है। एक बड़ी बीमारी या दुर्घटना — और बरसों की जमा-पूँजी, कभी-कभी क़र्ज़ समेत, कुछ हफ़्तों में निकल जाती है। हेल्थ इंश्योरेंस इसी एक झटके के विरुद्ध ढाल है, और टर्म प्लान के बाद यह हर परिवार की दूसरी अनिवार्य पॉलिसी है।',
          'फिर भी करोड़ों परिवार या तो बिना कवर के हैं, या इतने छोटे कवर के साथ कि वह आज के मेडिकल ख़र्च के सामने काग़ज़ी साबित होता है। इस लेख में हम कवर की सही रक़म, पॉलिसी चुनने की कसौटियाँ और क्लेम के समय काम आने वाली बारीकियाँ समझेंगे।',
        ],
        pEn: [
          'The greatest enemy of an Indian family’s savings is not a market crash but a hospital bill. One serious illness or accident — and years of accumulation, sometimes with fresh debt on top, drain away in weeks. Health insurance is the shield against exactly this blow, and after a term plan it is every family’s second non-negotiable policy.',
          'Yet crores of families are either uncovered or carry covers so small they turn out to be paper against today’s medical costs. In this article we work out the right cover amount, the tests for choosing a policy, and the fine print that matters when a claim actually happens.',
        ],
      },
      {
        hHi: 'कितना कवर, किस ढाँचे में',
        hEn: 'How much cover, in what structure',
        pHi: [
          'महानगर के निजी अस्पतालों के भाव देखते हुए चार सदस्यों के परिवार के लिए ₹10–15 लाख का फ़ैमिली फ्लोटर आज एक व्यावहारिक न्यूनतम है; छोटे शहरों में ₹5–10 लाख से शुरुआत हो सकती है। फ्लोटर का गणित समझ लीजिए: पूरी रक़म परिवार में साझा रहती है — एक सदस्य की बड़ी बीमारी बाक़ियों का कवर भी खा सकती है।',
          'लागत घटाने और कवर बढ़ाने की सबसे कारगर तरकीब है बेस + सुपर टॉप-अप का जोड़: मध्यम बेस पॉलिसी के ऊपर ऊँची डिडक्टिबल वाला सुपर टॉप-अप बहुत कम प्रीमियम में कुल कवर को ₹50 लाख–1 करोड़ तक ले जाता है। नौकरी वाला ग्रुप-कवर अच्छा बोनस है, पर उस पर अकेले टिकना ग़लती है — नौकरी छूटते ही वह भी छूट जाता है।',
        ],
        pEn: [
          'At metro private-hospital rates, a ₹10–15 lakh family floater is today’s practical minimum for a family of four; in smaller towns ₹5–10 lakh can be a start. Understand the floater’s arithmetic: the sum is shared across the family — one member’s major illness can consume everyone’s cover.',
          'The most effective trick for more cover at less cost is the base + super top-up pairing: over a moderate base policy, a high-deductible super top-up lifts total cover to ₹50 lakh–1 crore for a surprisingly small premium. The employer’s group cover is a fine bonus, but relying on it alone is a mistake — it ends the day the job does.',
        ],
      },
      {
        hHi: 'पॉलिसी परखने की छह कसौटियाँ',
        hEn: 'Six tests of a good policy',
        pHi: [
          'एक: रूम-रेंट की सीमा — “₹5,000 प्रतिदिन” जैसी सीमा वाले प्लान में महँगा कमरा लेते ही पूरा बिल आनुपातिक कटौती से कटता है; “नो रूम-रेंट कैप” वाले प्लान को प्राथमिकता दीजिए। दो: को-पेमेंट — हर क्लेम का 10–20% अपनी जेब से देने की शर्त सस्ते प्रीमियम का छिपा दाम है। तीन: पहले से मौजूद बीमारियों की प्रतीक्षा-अवधि — जितनी छोटी, उतना अच्छा।',
          'चार: डे-केयर और आधुनिक इलाज (कीमो, डायलिसिस, रोबोटिक सर्जरी) साफ़ शब्दों में शामिल हों। पाँच: रीस्टोरेशन — कवर ख़त्म होने पर उसी साल दोबारा भरने की सुविधा फ्लोटर में बड़ी राहत है। छह: बीमा कंपनी का क्लेम-रिकॉर्ड और कैशलेस अस्पताल-नेटवर्क आपके शहर में — काग़ज़ पर सबसे सस्ता प्लान क्लेम के दिन सबसे महँगा साबित हो सकता है।',
        ],
        pEn: [
          'One: the room-rent limit — with a “₹5,000 per day” cap, choosing a costlier room triggers proportionate deduction across the whole bill; prefer plans with no room-rent cap. Two: co-payment — paying 10–20% of every claim yourself is the hidden price of a cheap premium. Three: the waiting period for pre-existing diseases — the shorter, the better.',
          'Four: day-care and modern treatments (chemo, dialysis, robotic surgery) explicitly covered. Five: restoration — refilling of the cover within the same year is a real relief on floaters. Six: the insurer’s claim record and its cashless hospital network in your city — the cheapest plan on paper can prove the costliest on claim day.',
        ],
      },
      {
        hHi: 'क्लेम के दिन काम आने वाली आदतें',
        hEn: 'Habits that pay off on claim day',
        pHi: [
          'प्रस्ताव फ़ॉर्म में स्वास्थ्य-इतिहास पूरी ईमानदारी से लिखिए — छिपाई गई बीमारी क्लेम-अस्वीकृति का सबसे बड़ा कारण है। पॉलिसी हर साल बिना चूक नवीनीकृत कीजिए; टूटी पॉलिसी प्रतीक्षा-अवधि फिर से शुरू कर देती है। परिवार को बताइए कि पॉलिसी कहाँ है और कैशलेस के लिए किस नंबर पर बात करनी है।',
          'नियोजित भर्ती से पहले बीमा कंपनी से पूर्व-अनुमोदन लीजिए और अस्पताल के बीमा-डेस्क पर पॉलिसी की प्रति साथ रखिए। हर दस्तावेज़ — जाँच रिपोर्ट, बिल, डिस्चार्ज समरी — की प्रति सँभालिए। बीमा एक वादा है, और वादे उन्हीं के पूरे मिलते हैं जो काग़ज़ पूरे रखते हैं।',
        ],
        pEn: [
          'Fill the proposal form’s health history with complete honesty — concealed illness is the biggest cause of rejected claims. Renew every year without a gap; a lapsed policy restarts the waiting periods. Tell the family where the policy lives and which number to call for cashless approval.',
          'Before a planned admission, obtain pre-authorisation and carry the policy copy to the hospital’s insurance desk. Preserve every document — test reports, bills, discharge summary. Insurance is a promise, and promises are honoured for those whose paperwork is whole.',
        ],
      },
    ],
  },
  {
    slug: 'fd-vs-debt-funds',
    category: 'bachat',
    titleHi: 'FD बनाम डेट फंड: सुरक्षित पैसे की दो सवारियाँ, फ़र्क़ समझकर चुनिए',
    titleEn: 'Fixed Deposits vs Debt Funds: Two Vehicles for Safe Money, Chosen with Understanding',
    excerptHi: 'दोनों “सुरक्षित” कहलाते हैं, पर गारंटी, टैक्स, तरलता और जोखिम में ज़मीन-आसमान का अंतर है। किस पैसे के लिए FD सही है और किसके लिए डेट फंड — साफ़-साफ़।',
    excerptEn: 'Both are called “safe”, yet they differ sharply in guarantees, tax, liquidity and risk. Which money belongs in an FD and which in a debt fund — plainly told.',
    date: '2026-07-21',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारतीय बचतकर्ता का पहला प्यार फिक्स्ड डिपॉज़िट है — दर पहले से तय, बैंक की दीवार जितना भरोसा, और ₹5 लाख तक DICGC बीमा। डेट म्यूचुअल फंड उसी “सुरक्षित पैसे” की दूसरी सवारी हैं: वे सरकारी प्रतिभूतियों, कॉरपोरेट बॉन्ड और मनी-मार्केट साधनों में लगाते हैं, और सही श्रेणी में जोखिम काफ़ी कम रहता है।',
          'ग़लती तब होती है जब दोनों को एक ही चीज़ समझ लिया जाता है। FD में रिटर्न की गारंटी है पर लचीलापन कम; डेट फंड में गारंटी नहीं पर तरलता, विविधीकरण और कुछ स्थितियों में बेहतर कर-कुशलता है। चुनाव उत्पाद से नहीं, पैसे के मक़सद से शुरू होना चाहिए।',
        ],
        pEn: [
          'The Indian saver’s first love is the fixed deposit — a rate known in advance, trust as solid as the bank’s wall, and DICGC insurance up to ₹5 lakh. Debt mutual funds are the second vehicle for the same “safe money”: they invest in government securities, corporate bonds and money-market instruments, and in the right category the risk stays modest.',
          'The mistake is treating the two as the same thing. An FD guarantees its return but bends little; a debt fund guarantees nothing but offers liquidity, diversification and, in some situations, better tax efficiency. The choice should start from the money’s purpose, not the product.',
        ],
      },
      {
        hHi: 'गारंटी, जोखिम और तरलता का असली नक़्शा',
        hEn: 'The real map of guarantee, risk and liquidity',
        pHi: [
          'FD का जोखिम-नक़्शा सीधा है: बैंक डूबे बिना पैसा नहीं डूबता, और ₹5 लाख तक बीमा भी है; क़ीमत यह कि समय-पूर्व तोड़ने पर ब्याज-दंड लगता है और तय अवधि में दरें बढ़ जाएँ तो आप पुरानी दर में बंद रहते हैं। डेट फंड का जोखिम दो धाराओं में बहता है — ब्याज-दर जोखिम (दरें बढ़ें तो लंबी अवधि के बॉन्ड की क़ीमत गिरती है) और क्रेडिट जोखिम (कर्ज़दार कंपनी चूक जाए)।',
          'इसीलिए श्रेणी ही सब कुछ है: ओवरनाइट और लिक्विड फंड सबसे शांत हैं; मनी-मार्केट/अल्ट्रा-शॉर्ट थोड़ा आगे; लंबी अवधि और क्रेडिट-रिस्क श्रेणियाँ “सुरक्षित पैसे” के लिए नहीं हैं। डेट फंड में पैसा प्रायः एक कार्यदिवस में लौट आता है — बिना दंड के — यही तरलता उन्हें इमरजेंसी-परत के लिए आकर्षक बनाती है।',
        ],
        pEn: [
          'The FD’s risk map is simple: the money fails only if the bank does, with insurance up to ₹5 lakh; the price is an interest penalty for early exit, and being locked at the old rate if rates rise mid-term. A debt fund’s risk flows in two streams — interest-rate risk (long bonds fall in price when rates rise) and credit risk (a borrower defaults).',
          'Category is therefore everything: overnight and liquid funds are the calmest; money-market and ultra-short sit a step further; long-duration and credit-risk categories are not for “safe money” at all. Debt-fund money typically returns within one working day — without penalty — and that liquidity is what makes them attractive as the emergency layer.',
        ],
      },
      {
        hHi: 'टैक्स का हिसाब और व्यावहारिक बँटवारा',
        hEn: 'The tax arithmetic, and a practical split',
        pHi: [
          'FD का ब्याज हर साल आपकी स्लैब-दर से कटता है — ऊँची स्लैब वालों के लिए यही सबसे बड़ा घाव है, और स्रोत पर TDS भी लगता है। डेट फंड के मौजूदा नियमों में भी लाभ स्लैब-दर से ही कटता है, पर एक व्यावहारिक अंतर बचता है: कर तभी लगता है जब आप बेचें — यानी चक्रवृद्धि बिना सालाना कटौती के चलती रहती है, और निकासी के साल को आप चुन सकते हैं। नियम बदलते रहते हैं, इसलिए बड़े फ़ैसले से पहले चालू वर्ष के प्रावधान देख लें।',
          'व्यावहारिक बँटवारा ऐसा हो सकता है: इमरजेंसी फंड की पहली परत बचत-खाते/स्वीप-FD में, बाक़ी लिक्विड फंड में; एक-दो साल के लक्ष्यों का पैसा FD या शॉर्ट-ड्यूरेशन फंड में; और वरिष्ठ नागरिकों की नियमित-आय ज़रूरतें FD की तिमाही-ब्याज सुविधा में। सुरक्षित पैसे की दौड़ रिटर्न की नहीं, ठीक समय पर ठीक जगह मौजूद रहने की है।',
        ],
        pEn: [
          'FD interest is taxed every year at your slab rate — the deepest cut for higher slabs, with TDS at source too. Under current rules debt-fund gains are also taxed at slab rate, but one practical difference remains: tax falls only when you sell — compounding runs without an annual haircut, and you choose the year of exit. Rules keep changing, so check the current year’s provisions before large decisions.',
          'A practical split: the first layer of the emergency fund in the savings account or sweep-FD, the rest in a liquid fund; money for one-to-two-year goals in FDs or short-duration funds; and a senior citizen’s regular-income needs in the FD’s quarterly-interest facility. The race for safe money is not about returns — it is about being in the right place at the right time.',
        ],
      },
    ],
  },
  {
    slug: 'nps-retirement-guide',
    category: 'nivesh',
    titleHi: 'NPS: सबसे सस्ती रिटायरमेंट मशीन — ख़ूबियाँ, शर्तें और सही उपयोग',
    titleEn: 'The NPS: India’s Cheapest Retirement Machine — Strengths, Strings and Right Use',
    excerptHi: 'दुनिया के सबसे कम लागत वाले पेंशन ढाँचों में गिना जाने वाला NPS टैक्स-लाभ भी देता है और अनुशासन भी। पर लॉक-इन और एन्युइटी की शर्तें समझे बिना उतरना ग़लती है।',
    excerptEn: 'Counted among the world’s lowest-cost pension structures, the NPS offers tax breaks and discipline alike. But entering without understanding the lock-in and annuity strings is a mistake.',
    date: '2026-07-23',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'रिटायरमेंट के लिए बने भारतीय उत्पादों में नेशनल पेंशन सिस्टम (NPS) की बनावट सबसे ईमानदार है: फंड-प्रबंधन शुल्क नाममात्र, ढाँचा PFRDA के नियमन में पारदर्शी, और इक्विटी-डेट का मिश्रण आपकी पसंद या उम्र के साथ अपने-आप बदलने वाला। दशकों की अवधि में कम लागत का यह अंतर ही लाखों का फ़र्क़ बना देता है।',
          'साथ में कर-लाभ: नियोक्ता के माध्यम से किया अंशदान एक सीमा तक दोनों टैक्स-रिजीम में कर-मुक्त है, और पुरानी रिजीम में 80CCD(1B) की अतिरिक्त ₹50,000 की कटौती अलग से। पर NPS को समझे बिना अपनाने वाले अक्सर इसकी सबसे बड़ी शर्त से टकराते हैं — यह पैसा सच में रिटायरमेंट तक बंद है।',
        ],
        pEn: [
          'Among Indian retirement products, the National Pension System has the most honest construction: fund-management fees are minimal, the structure is transparent under PFRDA regulation, and the equity-debt mix shifts by your choice or automatically with age. Over decades, that cost gap alone compounds into lakhs.',
          'Add the tax breaks: employer-routed contributions are exempt within limits under both regimes, and the old regime adds a separate ₹50,000 deduction under 80CCD(1B). But those who adopt the NPS without understanding it collide with its biggest string — this money truly stays locked until retirement.',
        ],
      },
      {
        hHi: 'ढाँचा: टियर, विकल्प और ऑटो-चॉइस',
        hEn: 'The structure: tiers, choices and auto-choice',
        pHi: [
          'टियर-1 असली पेंशन खाता है — कर-लाभ इसी पर, लॉक-इन भी इसी पर; टियर-2 एक खुला निवेश-खाता भर है। भीतर चार परिसंपत्ति वर्ग हैं: इक्विटी (E), कॉरपोरेट बॉन्ड (C), सरकारी प्रतिभूतियाँ (G) और वैकल्पिक (A)। आप “एक्टिव चॉइस” में अनुपात ख़ुद तय कर सकते हैं (इक्विटी की ऊपरी सीमा नियमानुसार) या “ऑटो चॉइस” चुन सकते हैं, जिसमें उम्र बढ़ने के साथ इक्विटी अपने-आप घटती जाती है।',
          'ज़्यादातर लोगों के लिए ऑटो-चॉइस का आक्रामक ढाँचा “सेट करो और भूल जाओ” का व्यावहारिक रास्ता है। फंड-मैनेजर का चुनाव भी सरल रखिए — लंबे रिकॉर्ड वाले बड़े प्रबंधकों में अंतर मामूली रहा है, और NPS में मैनेजर बदलना आसान है।',
        ],
        pEn: [
          'Tier 1 is the real pension account — the tax benefits and the lock-in both live here; Tier 2 is merely an open investment account. Inside sit four asset classes: equity (E), corporate bonds (C), government securities (G) and alternatives (A). Under Active Choice you set the mix yourself (equity capped by the rules), or Auto Choice tapers equity automatically as you age.',
          'For most people the aggressive auto-choice ladder is the practical set-and-forget road. Keep the fund-manager decision simple too — differences among the large, long-tenured managers have been modest, and switching managers inside the NPS is easy.',
        ],
      },
      {
        hHi: 'शर्तें: निकासी और एन्युइटी का सच',
        hEn: 'The strings: exit rules and the annuity truth',
        pHi: [
          'साठ की उम्र पर संचित राशि का 60% तक एकमुश्त कर-मुक्त निकाला जा सकता है; कम से कम 40% से एन्युइटी (आजीवन पेंशन) ख़रीदना अनिवार्य है, और वह पेंशन आपकी स्लैब-दर से कर-योग्य होती है। बीच में निकासी केवल सीमित कारणों से, सीमित मात्रा में संभव है। यही कठोरता NPS की आत्मा है — यह पैसा बच्चों की शादी या घर की मरम्मत के लिए नहीं है।',
          'सही उपयोग का सूत्र: NPS को रिटायरमेंट-स्तंभ का हिस्सा बनाइए, पूरा स्तंभ नहीं — साथ में EPF/PPF की स्थिरता और इक्विटी फंड की तरल बढ़त रखिए। नियोक्ता-अंशदान की सुविधा हो तो उसे ज़रूर लीजिए — वही इसका सबसे मीठा हिस्सा है। और शर्तें समय-समय पर बदलती हैं, इसलिए बड़े निर्णय से पहले PFRDA के ताज़ा नियम देखना समझदारी है।',
        ],
        pEn: [
          'At sixty, up to 60% of the corpus can be withdrawn lump-sum tax-free; at least 40% must buy an annuity (a lifelong pension), and that pension is taxed at your slab rate. Mid-way exits are possible only for limited reasons in limited amounts. This sternness is the NPS’s soul — this money is not for a wedding or a house repair.',
          'The formula for right use: make the NPS a pillar of retirement, not the whole roof — pair it with the steadiness of EPF/PPF and the liquid growth of equity funds. If employer contribution is available, take it — that is the sweetest part. And since the strings change from time to time, check PFRDA’s current rules before big decisions.',
        ],
      },
    ],
  },
  {
    slug: 'elss-tax-saving-funds',
    category: 'nivesh',
    titleHi: 'ELSS: तीन साल के लॉक-इन वाला टैक्स-सेवर जो इक्विटी की रफ़्तार से बढ़ता है',
    titleEn: 'ELSS: The Three-Year Tax Saver That Grows at Equity’s Pace',
    excerptHi: '80C के सारे विकल्पों में सबसे छोटा लॉक-इन और सबसे ऊँची बढ़त की संभावना — पर बाज़ार के जोखिम के साथ। ELSS किसके लिए है, कैसे चुनें, और कब नहीं चुनना चाहिए।',
    excerptEn: 'Of all Section 80C options, the shortest lock-in and the highest growth potential — with market risk attached. Who ELSS is for, how to choose one, and when not to.',
    date: '2026-07-25',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'पुरानी टैक्स-रिजीम की 80C सूची में ज़्यादातर नाम धीमे और लंबे हैं — PPF पंद्रह साल, NSC पाँच, टैक्स-सेवर FD पाँच। इसी सूची का सबसे फुर्तीला नाम है ELSS — इक्विटी लिंक्ड सेविंग्स स्कीम: एक इक्विटी म्यूचुअल फंड जिसमें ₹1.5 लाख तक की जमा 80C में गिनी जाती है और लॉक-इन केवल तीन साल का है।',
          'सिक्के का दूसरा पहलू भी उतना ही साफ़ है: यह बाज़ार से जुड़ा उत्पाद है — न रिटर्न की गारंटी, न पूँजी की। ELSS उनके लिए है जो टैक्स-बचत के बहाने इक्विटी की लंबी सवारी शुरू करना चाहते हैं; उनके लिए नहीं जिन्हें तीन साल बाद वही पैसा किसी तय ख़र्च के लिए चाहिए।',
        ],
        pEn: [
          'Most names on the old regime’s 80C list are slow and long — PPF at fifteen years, NSC at five, tax-saver FDs at five. The nimblest name on that list is the ELSS — Equity Linked Savings Scheme: an equity mutual fund whose deposits count toward the ₹1.5 lakh 80C limit, with a lock-in of only three years.',
          'The other side of the coin is equally plain: this is a market-linked product — neither returns nor capital are guaranteed. ELSS is for those who want the tax break to be their doorway into a long equity journey; not for those who will need that exact money for a fixed expense in year three.',
        ],
      },
      {
        hHi: 'लॉक-इन को सही नज़र से देखिए',
        hEn: 'Seeing the lock-in rightly',
        pHi: [
          'तीन साल क़ानूनी न्यूनतम है, निवेश-क्षितिज नहीं। इक्विटी में तीन साल छोटी अवधि है — गिरावट से उबरने के लिए अक्सर नाकाफ़ी। ELSS में पैसा पाँच-सात साल या ज़्यादा की नीयत से लगाइए; लॉक-इन को “बेचने की तारीख़” नहीं, घबराहट में बेचने से रोकने वाली बेड़ी समझिए — यही बेड़ी कई निवेशकों का असली मुनाफ़ा बचाती आई है।',
          'SIP करने वालों के लिए एक बारीकी: हर किस्त का अपना तीन-साल लॉक-इन होता है। जनवरी की किस्त जनवरी में तीन साल बाद खुलती है, फ़रवरी की फ़रवरी में — पूरी रक़म एक साथ नहीं। योजना बनाते समय यह “सीढ़ीदार” खुलना ध्यान में रखिए।',
        ],
        pEn: [
          'Three years is the legal minimum, not the investment horizon. In equity, three years is short — often not enough to recover from a fall. Commit ELSS money with a five-to-seven-year intent or longer; treat the lock-in not as a sell date but as the shackle that prevents panic selling — a shackle that has saved many an investor’s real profit.',
          'A detail for SIP investors: every instalment carries its own three-year lock. January’s instalment unlocks three Januaries later, February’s in February — never the whole amount at once. Keep that staircase in mind when planning.',
        ],
      },
      {
        hHi: 'कैसे चुनें, और कब न चुनें',
        hEn: 'How to choose — and when not to',
        pHi: [
          'चुनाव की कसौटियाँ वही हैं जो किसी भी इक्विटी फंड की: लंबा और स्थिर रिकॉर्ड, वाजिब एक्सपेंस रेशियो, भरोसेमंद फंड-हाउस — और हमेशा ग्रोथ विकल्प। पिछले साल का चार्ट-टॉपर चुनने की जगह दस साल की निरंतरता देखिए। एक या दो ELSS पर्याप्त हैं; हर साल नया फंड जोड़ना पोर्टफोलियो को कबाड़ बनाता है।',
          'और कब न चुनें: यदि आप नई टैक्स-रिजीम में हैं तो 80C की कटौती ही नहीं मिलती — तब ELSS का कर-लाभ शून्य है, और सामान्य इंडेक्स/फ्लेक्सी-कैप फंड बिना लॉक-इन के वही काम करते हैं। यानी ELSS का निर्णय हर साल आपकी रिजीम के निर्णय के साथ जुड़ा है — यह छोटा-सा जोड़ बहुतों की नज़र से छूट जाता है।',
        ],
        pEn: [
          'The selection tests are those of any equity fund: a long and steady record, a fair expense ratio, a trustworthy fund house — and always the growth option. Look at ten-year consistency rather than last year’s chart-topper. One or two ELSS funds are enough; adding a new one every year turns a portfolio into a junk drawer.',
          'And when not to choose it: under the new tax regime there is no 80C deduction at all — the ELSS tax benefit is zero, and ordinary index or flexi-cap funds do the same job without a lock-in. The ELSS decision is therefore chained to your yearly regime decision — a small link that escapes many eyes.',
        ],
      },
    ],
  },
  {
    slug: 'home-loan-prepay-or-invest',
    category: 'credit',
    titleHi: 'होम लोन जल्दी चुकाएँ या निवेश करें? भावना नहीं, गणित से फ़ैसला',
    titleEn: 'Prepay the Home Loan or Invest? Decide by Arithmetic, Not Emotion',
    excerptHi: 'हर EMI-दाता के मन का सवाल: बोनस आया है — लोन घटाऊँ या SIP बढ़ाऊँ? ब्याज-दर बनाम अपेक्षित रिटर्न, टैक्स का कोण, और वह मनोवैज्ञानिक पहलू जिसे गणित नहीं पकड़ता।',
    excerptEn: 'Every EMI-payer’s question: the bonus has arrived — shrink the loan or grow the SIP? Interest rate versus expected return, the tax angle, and the psychology arithmetic cannot capture.',
    date: '2026-07-27',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'होम लोन भारतीय मध्यवर्ग की सबसे बड़ी देनदारी है, और “जल्दी छूट जाए” की चाह सबसे गहरी भावनाओं में से एक। दूसरी ओर हर वित्तीय सलाह कहती है कि जवानी के साल चक्रवृद्धि के सबसे क़ीमती साल हैं। जब हाथ में अतिरिक्त पैसा आता है — बोनस, इंक्रीमेंट, कोई पुरानी FD — तो यही दुविधा खड़ी होती है: कर्ज़ घटाएँ या निवेश बढ़ाएँ?',
          'अच्छी ख़बर यह है कि इस सवाल का एक ईमानदार ढाँचा है। बुनियादी तुलना सीधी है: लोन की ब्याज-दर बनाम निवेश का यथार्थवादी अपेक्षित रिटर्न — पर उस पर टैक्स, जोखिम और नींद की गुणवत्ता की परतें चढ़ती हैं। तीनों को क्रम से देखते हैं।',
        ],
        pEn: [
          'The home loan is the Indian middle class’s largest liability, and the longing to be free of it early runs deep. On the other side, every financial text says the young years are compounding’s most precious. When extra money lands — a bonus, an increment, an old FD maturing — the dilemma stands up: shrink the debt or grow the investments?',
          'The good news: the question has an honest framework. The base comparison is simple — the loan’s interest rate versus a realistic expected investment return — with layers of tax, risk and sleep quality on top. Let us take the three in order.',
        ],
      },
      {
        hHi: 'बुनियादी गणित और टैक्स का कोण',
        hEn: 'The base arithmetic and the tax angle',
        pHi: [
          'हर प्री-पेमेंट का “रिटर्न” निश्चित होता है — ठीक आपकी लोन-दर जितना, बिना किसी जोखिम के। 9% के लोन का प्री-पेमेंट 9% का गारंटीड, कर-मुक्त रिटर्न है। उससे जीतने के लिए निवेश को कर-पश्चात 9% से ऊपर देना होगा — इक्विटी से दीर्घावधि में संभव, पर गारंटीड कभी नहीं। इसीलिए नियम का पहला हिस्सा: FD जैसे किसी विकल्प से तुलना ही बेमानी है — प्री-पेमेंट लगभग हमेशा FD को हराता है।',
          'टैक्स की परत: पुरानी रिजीम में होम-लोन ब्याज पर 24(b) की कटौती (स्व-अधिकृत घर पर ₹2 लाख तक) लोन की प्रभावी दर घटा देती है — 30% स्लैब में 9% का लोन क़रीब 6.3% का पड़ता है, और तब दीर्घकालीन इक्विटी का पलड़ा भारी होता है। नई रिजीम में यह कटौती नहीं है (किराए पर दिए घर के नियम अलग हैं) — वहाँ लोन अपनी पूरी दर पर खड़ा है और प्री-पेमेंट का तर्क मज़बूत। अपनी रिजीम के हिसाब से प्रभावी दर निकालिए — यही तुलना की असली संख्या है।',
        ],
        pEn: [
          'Every prepayment carries a certain “return” — exactly your loan rate, with zero risk. Prepaying a 9% loan is a guaranteed, tax-free 9%. To beat it, an investment must deliver more than 9% post-tax — possible for equity over long horizons, but never guaranteed. Hence rule one: comparisons with FD-like options are pointless — prepayment nearly always beats an FD.',
          'The tax layer: in the old regime, the 24(b) deduction on home-loan interest (up to ₹2 lakh for a self-occupied house) lowers the loan’s effective rate — at the 30% slab, a 9% loan costs about 6.3%, and long-horizon equity gains the upper hand. The new regime offers no such deduction for self-occupied homes (let-out rules differ) — the loan stands at its full rate and the case for prepayment strengthens. Compute your effective rate by your regime — that is the real number in the comparison.',
        ],
      },
      {
        hHi: 'तीन नियम और एक मनोवैज्ञानिक सच',
        hEn: 'Three rules and one psychological truth',
        pHi: [
          'नियम एक: प्री-पेमेंट से पहले इमरजेंसी फंड और बीमा (टर्म + हेल्थ) पूरे हों — कर्ज़ चुकाने के जोश में तरलता ख़त्म कर देना अगली इमरजेंसी में महँगे कर्ज़ का न्योता है। नियम दो: प्री-पेमेंट करें तो EMI घटाने के बजाय अवधि घटवाइए — ब्याज की असली बचत वहीं है। नियम तीन: फ्लोटिंग-रेट होम लोन पर बैंक प्री-पेमेंट दंड नहीं ले सकते, इसलिए छोटे-छोटे नियमित प्री-पेमेंट भी वर्षों की EMI काट देते हैं।',
          'और वह सच जो गणित नहीं पकड़ता: कर्ज़-मुक्त घर की नींद। यदि EMI का बोझ आपके फ़ैसलों को डराता है — नौकरी बदलने से, जोखिम लेने से — तो 50-50 का बीच का रास्ता अपनाइए: आधा प्री-पेमेंट, आधा निवेश। संतुलित रास्ता स्प्रेडशीट में कभी “सर्वश्रेष्ठ” नहीं दिखता, पर ज़िंदगी स्प्रेडशीट में नहीं चलती।',
        ],
        pEn: [
          'Rule one: before any prepayment, complete the emergency fund and insurance (term + health) — burning liquidity in the zeal to repay invites costlier debt at the next emergency. Rule two: when prepaying, reduce the tenure rather than the EMI — that is where the real interest saving lives. Rule three: banks cannot charge prepayment penalties on floating-rate home loans, so even small regular prepayments cut years off the schedule.',
          'And the truth arithmetic cannot hold: the sleep of a debt-free home. If the EMI’s weight is shaping your decisions — keeping you from changing jobs, from taking risks — take the 50-50 middle road: half prepayment, half investment. The balanced road never looks “optimal” in a spreadsheet, but life is not lived in one.',
        ],
      },
    ],
  },
  {
    slug: 'budget-50-30-20-rule',
    category: 'digital',
    titleHi: '50-30-20 का बजट: सैलरी आते ही कहाँ जाए, इसका सबसे सरल नक़्शा',
    titleEn: 'The 50-30-20 Budget: The Simplest Map for Where Salary Should Go',
    excerptHi: 'न ऐप की ज़रूरत, न हिसाब-किताब की डायरी — तीन डिब्बों वाला यह नियम आधी सदी से दुनिया भर में काम कर रहा है। भारतीय आमदनी और ख़र्च के हिसाब से इसे कैसे ढालें।',
    excerptEn: 'No app needed, no ledger diary — this three-bucket rule has worked worldwide for half a century. How to mould it to Indian incomes and expenses.',
    date: '2026-07-29',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बजट के नाम से ज़्यादातर लोगों को हिसाब की डायरी और कटौती की तपस्या याद आती है — इसीलिए ज़्यादातर बजट दूसरे महीने दम तोड़ देते हैं। 50-30-20 नियम इस समस्या का सबसे टिकाऊ इलाज है, क्योंकि यह ख़र्च गिनने से नहीं, बाँटने से शुरू होता है: कर-पश्चात आमदनी के तीन डिब्बे — 50% ज़रूरतें, 30% इच्छाएँ, 20% बचत-निवेश।',
          'ज़रूरतों में वह सब है जिनके बिना जीवन नहीं चलता: किराया/EMI, राशन, बिजली-गैस, स्कूल फीस, बीमा प्रीमियम, आने-जाने का ख़र्च। इच्छाओं में वह सब जो जीवन को रंग देता है: बाहर खाना, OTT, यात्रा, नया फ़ोन। और 20% वाला डिब्बा आपके भविष्य का वेतन है — इमरजेंसी फंड, SIP, PPF, NPS।',
        ],
        pEn: [
          'For most people the word “budget” conjures ledger diaries and the penance of cutting back — which is why most budgets die in the second month. The 50-30-20 rule is the most durable cure because it begins not with counting expenses but with dividing income: three buckets of post-tax pay — 50% needs, 30% wants, 20% saving and investing.',
          'Needs are what life cannot run without: rent or EMI, groceries, power and gas, school fees, insurance premiums, commuting. Wants are what gives life its colour: eating out, OTT, travel, the new phone. And the 20% bucket is your future self’s salary — emergency fund, SIPs, PPF, NPS.',
        ],
      },
      {
        hHi: 'भारतीय हालात में ढालना',
        hEn: 'Moulding it to Indian realities',
        pHi: [
          'महानगर के किराए और EMI अक्सर 50% के डिब्बे को छलका देते हैं — तब ईमानदार समायोजन कीजिए: कुछ समय 60-25-15 चलाइए, पर बचत का डिब्बा कभी शून्य न हो। उल्टी स्थिति भी उतनी ही सच है: घर का अपना हो और ज़रूरतें 35% में निपटती हों, तो बचत को 20 पर रोकना आलस है — 30-35% तक ले जाइए; भारत में जल्दी रिटायरमेंट का यही एकमात्र वैध शॉर्टकट है।',
          'संयुक्त परिवार, माता-पिता को भेजा जाने वाला पैसा और त्योहार-शादियों के मौसमी ख़र्च — इन्हें “इच्छा” कहना ग़लत होगा; इन्हें ज़रूरतों में गिनकर प्रतिशत ठीक कीजिए। नियम की ख़ूबी उसकी पवित्रता नहीं, उसका ढाँचा है: तीन डिब्बे साफ़ हों तो घर की आर्थिक बहस “तूने कितना उड़ाया” से हटकर “डिब्बों का अनुपात क्या हो” पर आ जाती है — और यह कहीं स्वस्थ बहस है।',
        ],
        pEn: [
          'Metro rents and EMIs often overflow the 50% bucket — then adjust honestly: run 60-25-15 for a season, but never let the savings bucket touch zero. The reverse is equally true: if the house is your own and needs fit in 35%, stopping savings at 20 is laziness — push to 30-35%; in India that is the only legitimate shortcut to early retirement.',
          'Joint families, money sent to parents, and the seasonal spikes of festivals and weddings — calling these “wants” would be wrong; count them as needs and rebalance the percentages. The rule’s virtue is not its sanctity but its structure: with three clear buckets, the household money argument shifts from “how much did you blow” to “what should the ratios be” — a far healthier debate.',
        ],
      },
      {
        hHi: 'चलाने की तरकीब: तनख़्वाह के दिन तीन रास्ते',
        hEn: 'Making it run: three routes on payday',
        pHi: [
          'नियम को इच्छाशक्ति पर मत छोड़िए — ऑटोमेशन पर छोड़िए। वेतन आने के अगले दिन के लिए तीन स्थायी निर्देश लगाइए: 20% सीधे SIP/RD/PPF की ओर, ज़रूरतों का हिस्सा उसी खाते में जहाँ से बिल कटते हैं, और इच्छाओं का हिस्सा अलग खाते या UPI-वॉलेट में। महीने के आख़िर में इच्छा-खाता ख़ाली हो जाए तो रुक जाइए — यही पूरा अनुशासन है।',
          'हर छह महीने में दस मिनट की समीक्षा कीजिए: इंक्रीमेंट आया हो तो उसका आधा सीधे 20% वाले डिब्बे में बढ़ाइए — जीवन-स्तर धीरे बढ़ेगा, संपत्ति तेज़। बजट का मक़सद ख़र्च का हिसाब रखना नहीं, ख़र्च की चिंता से आज़ादी है — तीन डिब्बे सही भरे हों, तो इच्छा-डिब्बे का हर रुपया बिना अपराध-बोध के ख़र्च करने के लिए ही है।',
        ],
        pEn: [
          'Do not leave the rule to willpower — leave it to automation. Set three standing instructions for the day after payday: 20% straight to SIPs/RD/PPF, the needs share to the account the bills draw from, and the wants share to a separate account or UPI wallet. When the wants account runs dry before month-end, stop — that is the entire discipline.',
          'Review for ten minutes every six months: when the increment arrives, move half of it straight into the 20% bucket — lifestyle rises slowly, wealth rises fast. A budget’s purpose is not to account for spending but to free you from worrying about it — with three buckets rightly filled, every rupee in the wants bucket exists precisely to be spent without guilt.',
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: CatSlug): Article[] {
  return ARTICLES.filter((a) => a.category === cat).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Batch 2 merges into the same library; all lists sort by date.
ARTICLES.push(...ARTICLES_BATCH2);
