import type { Article } from './articles';

/**
 * Profity.in editorial library — batch 3. Thirty original bilingual
 * (Hindi + English) personal-finance guides for Indian readers, across
 * investing, saving, tax, insurance, credit and digital money. Educational
 * and general — not financial advice; every word original, under the
 * site-wide disclaimer. Rules and figures change, so verify with official
 * sources and a qualified professional before acting.
 */
export const ARTICLES_BATCH3: Article[] = [
  {
    slug: 'index-fund-vs-active-fund',
    category: 'nivesh',
    titleHi: 'इंडेक्स फंड बनाम एक्टिव फंड: भारत में कौन-सा बेहतर?',
    titleEn: 'Index Fund vs Active Fund: Which Suits an Indian Investor?',
    excerptHi: 'सस्ता, सीधा इंडेक्स फंड या महँगा, “विशेषज्ञ” एक्टिव फंड? दोनों के तर्क और आम निवेशक के लिए समझदारी की राह।',
    excerptEn: 'A cheap, simple index fund or a costly, “expert-run” active fund? The case for each, and the sensible path for an ordinary investor.',
    date: '2026-07-18',
    minutes: 6,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'म्यूचुअल फंड चुनते समय एक बुनियादी सवाल आता है: इंडेक्स फंड लें या एक्टिव फंड? इंडेक्स फंड सिर्फ़ किसी बाज़ार सूचकांक (जैसे निफ्टी) की नक़ल करता है, जबकि एक्टिव फंड में फंड मैनेजर “बाज़ार को हराने” की कोशिश करता है।',
          'दोनों के अपने तर्क हैं, और सही चुनाव समझ से होता है, प्रचार से नहीं।',
        ],
        pEn: [
          'When choosing a mutual fund, one basic question arises: an index fund or an active fund? An index fund simply mirrors a market index (like the Nifty), while in an active fund a manager tries to “beat the market”.',
          'Both have their logic, and the right choice comes from understanding, not from marketing.',
        ],
      },
      {
        hHi: 'लागत का बड़ा फ़र्क़',
        hEn: 'The big difference: cost',
        pHi: [
          'इंडेक्स फंड की लागत (एक्सपेंस रेशियो) आमतौर पर बहुत कम होती है, क्योंकि इसमें किसी विशेषज्ञ की भारी फ़ीस नहीं लगती। एक्टिव फंड की फ़ीस ज़्यादा होती है, और यह फ़ीस हर साल आपके रिटर्न से कटती है।',
          'लंबी अवधि में यह छोटा-सा अंतर कंपाउंडिंग के कारण बड़ी रक़म बन जाता है।',
        ],
        pEn: [
          'An index fund’s cost (expense ratio) is usually very low, because it does not pay a heavy expert fee. An active fund charges more, and that fee is deducted from your returns every year.',
          'Over the long run, this small difference becomes a large sum because of compounding.',
        ],
      },
      {
        hHi: 'क्या एक्टिव फंड सचमुच जीतते हैं?',
        hEn: 'Do active funds really win?',
        pHi: [
          'सच यह है कि लंबी अवधि में बहुत-से एक्टिव फंड अपने सूचकांक को लगातार नहीं हरा पाते, और पहले से यह पहचानना कठिन है कि कौन-सा हराएगा। इसलिए कई समझदार निवेशक कम लागत वाले इंडेक्स फंड को एक भरोसेमंद आधार मानते हैं।',
          'इसका अर्थ यह नहीं कि हर एक्टिव फंड ख़राब है; कुछ अच्छे भी हैं, पर उन्हें चुनना और उन पर टिके रहना कठिन है।',
        ],
        pEn: [
          'The reality is that over the long term many active funds do not consistently beat their index, and it is hard to know in advance which one will. So many sensible investors treat a low-cost index fund as a dependable core.',
          'This does not mean every active fund is bad; some are good, but picking them and staying with them is difficult.',
        ],
      },
      {
        hHi: 'समझदारी की राह',
        hEn: 'The sensible path',
        pHi: [
          'नए और व्यस्त निवेशक के लिए एक कम लागत वाला, व्यापक इंडेक्स फंड एक सरल, टिकाऊ शुरुआत है। जो अधिक समझते और मानते हैं कि कोई विशेष एक्टिव फंड मूल्य देगा, वे उसे जोड़ सकते हैं — पर लागत और निरंतरता पर नज़र रखें।',
          'यह लेख सामान्य जानकारी है; निवेश से पहले अपनी स्थिति और ज़रूरत के अनुसार सोच-समझकर, और ज़रूरत हो तो सलाहकार से बात करके निर्णय लें।',
        ],
        pEn: [
          'For a new or busy investor, a low-cost, broad index fund is a simple, durable starting point. Those who understand more and believe a particular active fund adds value can add it — but watch cost and consistency.',
          'This article is general information; before investing, decide thoughtfully according to your situation and needs, and speak to an adviser if required.',
        ],
      },
    ],
  },
  {
    slug: 'asset-allocation-basics-india',
    category: 'nivesh',
    titleHi: 'एसेट एलोकेशन: पैसे को सही टोकरियों में बाँटना',
    titleEn: 'Asset Allocation: Dividing Money Into the Right Baskets',
    excerptHi: 'कौन-सा फंड चुनें, इससे बड़ा सवाल है — पैसा इक्विटी, डेट और सोने में कैसे बाँटें। यही आपके रिटर्न और जोखिम को सबसे ज़्यादा तय करता है।',
    excerptEn: 'Bigger than which fund to pick is how you split money across equity, debt and gold. That, more than anything, decides your risk and return.',
    date: '2026-07-18',
    minutes: 6,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'निवेशक अक्सर “कौन-सा फंड सबसे अच्छा है” पर घंटों बहस करते हैं, पर असल में उससे बड़ा सवाल है एसेट एलोकेशन — यानी पैसा इक्विटी, डेट (जैसे FD/बॉन्ड) और सोने जैसी अलग-अलग श्रेणियों में कैसे बाँटा जाए।',
          'यही बँटवारा आपके पोर्टफोलियो के जोखिम और रिटर्न को सबसे ज़्यादा तय करता है।',
        ],
        pEn: [
          'Investors often argue for hours over “which fund is best”, but the bigger question is asset allocation — how money is divided across categories like equity, debt (FDs/bonds) and gold.',
          'This split, more than fund selection, decides your portfolio’s risk and return.',
        ],
      },
      {
        hHi: 'हर श्रेणी का काम',
        hEn: 'The job of each category',
        pHi: [
          'इक्विटी लंबी अवधि में महँगाई से आगे बढ़ने का इंजन है, पर उतार-चढ़ाव वाला। डेट स्थिरता और सुरक्षा देता है, ख़ासकर नज़दीकी ज़रूरतों के लिए। सोना कई बार संकट में सहारा बनता है और विविधता देता है।',
          'हर एक का अलग काम है, इसलिए संतुलित पोर्टफोलियो में तीनों की भूमिका हो सकती है।',
        ],
        pEn: [
          'Equity is the engine for growing ahead of inflation over the long term, but volatile. Debt gives stability and safety, especially for near-term needs. Gold sometimes acts as a cushion in crises and adds diversification.',
          'Each has a distinct role, so a balanced portfolio can hold all three.',
        ],
      },
      {
        hHi: 'बँटवारा किस पर निर्भर',
        hEn: 'What the split depends on',
        pHi: [
          'सही एलोकेशन आपकी उम्र, लक्ष्य की दूरी और जोखिम सहने की क्षमता पर निर्भर करता है। लंबी अवधि के लक्ष्य के लिए इक्विटी अधिक रखी जा सकती है; नज़दीकी ज़रूरत के लिए डेट को प्राथमिकता। जैसे-जैसे लक्ष्य पास आता है, जोखिम घटाना समझदारी है।',
          'कोई एक “सही” फ़ॉर्मूला सबके लिए नहीं; यह व्यक्तिगत होता है।',
        ],
        pEn: [
          'The right allocation depends on your age, the distance to your goal, and your risk tolerance. For long-term goals more equity can be held; for near-term needs, prefer debt. As a goal nears, reducing risk is wise.',
          'There is no single “correct” formula for everyone; it is personal.',
        ],
      },
      {
        hHi: 'बनाओ और सँभालो',
        hEn: 'Set it and maintain it',
        pHi: [
          'एक बार सोच-समझकर एलोकेशन तय करें, फिर समय-समय पर उसे संतुलित (रीबैलेंस) करें, ताकि बाज़ार की चाल से आपका जोखिम अपने-आप न बदल जाए। यही अनुशासन घबराहट में लिए ग़लत फ़ैसलों से बचाता है।',
          'यह लेख सामान्य जानकारी है, कोई निवेश सलाह नहीं।',
        ],
        pEn: [
          'Decide the allocation thoughtfully once, then rebalance it periodically so market moves do not silently change your risk. This discipline guards against panic-driven mistakes.',
          'This article is general information, not investment advice.',
        ],
      },
    ],
  },
  {
    slug: 'sovereign-gold-bonds-guide',
    category: 'nivesh',
    titleHi: 'सॉवरेन गोल्ड बॉन्ड: सोने में निवेश का समझदार तरीक़ा',
    titleEn: 'Sovereign Gold Bonds: A Smarter Way to Own Gold',
    excerptHi: 'भारत में सोना ख़रीदने के कई तरीक़े हैं। सॉवरेन गोल्ड बॉन्ड में भंडारण का झंझट नहीं और ब्याज भी — पर इसकी शर्तें समझना ज़रूरी है।',
    excerptEn: 'India offers many ways to own gold. Sovereign Gold Bonds skip storage worries and even pay interest — but understand their terms.',
    date: '2026-07-19',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारतीयों का सोने से गहरा लगाव है, पर आभूषण या सिक्के के रूप में सोना रखने में भंडारण, शुद्धता और सुरक्षा की चिंता रहती है। सॉवरेन गोल्ड बॉन्ड (SGB) इन समस्याओं का एक विकल्प है।',
          'यह सरकार द्वारा जारी बॉन्ड है जिसका मूल्य सोने की क़ीमत से जुड़ा होता है।',
        ],
        pEn: [
          'Indians have a deep attachment to gold, but holding it as jewellery or coins brings worries of storage, purity and safety. Sovereign Gold Bonds (SGBs) are one alternative to these problems.',
          'They are government-issued bonds whose value is linked to the price of gold.',
        ],
      },
      {
        hHi: 'फ़ायदे क्या हैं',
        hEn: 'What the benefits are',
        pHi: [
          'SGB में असली सोना संभालने की ज़रूरत नहीं, इसलिए चोरी या मिलावट का डर नहीं। इसकी क़ीमत सोने के भाव से चलती है, और इस पर आमतौर पर एक तय ब्याज भी मिलता है — जो भौतिक सोने से नहीं मिलता।',
          'यह उन लोगों के लिए उपयुक्त है जो सोना निवेश के रूप में रखना चाहते हैं, न कि पहनने के लिए।',
        ],
        pEn: [
          'With SGBs there is no need to keep physical gold, so no fear of theft or impurity. Its value tracks the gold price, and it usually pays a fixed interest as well — which physical gold does not.',
          'It suits those who want to hold gold as an investment rather than to wear.',
        ],
      },
      {
        hHi: 'ध्यान रखने की बातें',
        hEn: 'Points to keep in mind',
        pHi: [
          'SGB की एक तय अवधि होती है और इसे बीच में भुनाने के अपने नियम हैं, इसलिए यह वहाँ अधिक उपयुक्त है जहाँ पैसा कुछ वर्षों के लिए न चाहिए। कर (टैक्स) से जुड़े नियम भी होते हैं, जो समय के साथ बदल सकते हैं।',
          'ख़रीदने से पहले मौजूदा शर्तें और उपलब्धता आधिकारिक स्रोत से जाँच लें।',
        ],
        pEn: [
          'SGBs have a set tenure and their own rules for early exit, so they suit money not needed for some years. There are also tax-related rules, which can change over time.',
          'Before buying, check the current terms and availability from an official source.',
        ],
      },
      {
        hHi: 'एक संतुलित हिस्सा',
        hEn: 'A balanced portion',
        pHi: [
          'सोना पूरे पोर्टफोलियो का एक छोटा, संतुलित हिस्सा हो सकता है — सब कुछ नहीं। SGB इसे रखने का एक सुविधाजनक और अक्सर समझदार रूप है।',
          'यह लेख सामान्य जानकारी है; निर्णय से पहले नवीनतम नियमों की पुष्टि करें।',
        ],
        pEn: [
          'Gold can be a small, balanced portion of a whole portfolio — not everything. SGBs are a convenient and often sensible form in which to hold it.',
          'This article is general information; confirm the latest rules before deciding.',
        ],
      },
    ],
  },
  {
    slug: 'reit-investment-india',
    category: 'nivesh',
    titleHi: 'REIT: छोटी रक़म से रियल एस्टेट में निवेश',
    titleEn: 'REITs: Investing in Real Estate With Small Amounts',
    excerptHi: 'पूरा फ़्लैट ख़रीदे बिना भी किराया-कमाने वाली संपत्ति का हिस्सा बनना संभव है। REIT क्या है और किसके लिए है।',
    excerptEn: 'You can own a slice of rent-earning property without buying a whole flat. What a REIT is, and who it’s for.',
    date: '2026-07-19',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में संपत्ति (रियल एस्टेट) में निवेश का सपना आम है, पर पूरा फ़्लैट या दुकान ख़रीदना बड़ी रक़म, कर्ज़ और झंझट माँगता है। REIT (रियल एस्टेट इन्वेस्टमेंट ट्रस्ट) एक ऐसा तरीक़ा है जिससे छोटी रक़म से भी किराया-कमाने वाली बड़ी संपत्तियों का हिस्सा बना जा सकता है।',
          'यह शेयर की तरह ख़रीदा-बेचा जा सकता है।',
        ],
        pEn: [
          'The dream of investing in real estate is common in India, but buying a whole flat or shop demands a large sum, a loan and hassle. A REIT (Real Estate Investment Trust) is a way to own a slice of large, rent-earning properties with even a small amount.',
          'It can be bought and sold much like a share.',
        ],
      },
      {
        hHi: 'यह कैसे काम करता है',
        hEn: 'How it works',
        pHi: [
          'REIT कई बड़ी, किराया देने वाली संपत्तियों (जैसे ऑफ़िस भवन) में निवेश करता है और उससे मिलने वाली आय का बड़ा हिस्सा निवेशकों में बाँटता है। इस तरह आप बिना किसी संपत्ति को सीधे संभाले, उसकी आय और मूल्य-वृद्धि में हिस्सेदार बनते हैं।',
          'इसमें भौतिक संपत्ति के मुक़ाबले तरलता (आसानी से बेचना) भी अधिक होती है।',
        ],
        pEn: [
          'A REIT invests in several large, rent-paying properties (such as office buildings) and distributes a large share of the income to investors. So you share in the income and value growth without directly managing any property.',
          'It also offers more liquidity (ease of selling) than physical property.',
        ],
      },
      {
        hHi: 'जोखिम और सीमाएँ',
        hEn: 'Risks and limits',
        pHi: [
          'REIT का मूल्य भी बाज़ार और संपत्ति क्षेत्र की स्थिति के साथ ऊपर-नीचे होता है, इसलिए यह “गारंटीड आय” नहीं है। आय और मूल्य बदल सकते हैं, और कर-नियम भी लागू होते हैं।',
          'निवेश से पहले इसकी संरचना और जोखिम समझना ज़रूरी है।',
        ],
        pEn: [
          'A REIT’s value also rises and falls with the market and the property sector, so it is not “guaranteed income”. Income and value can change, and tax rules apply.',
          'Understand its structure and risks before investing.',
        ],
      },
      {
        hHi: 'किसके लिए उपयुक्त',
        hEn: 'Who it suits',
        pHi: [
          'REIT उन निवेशकों के लिए एक विकल्प है जो अपने पोर्टफोलियो में रियल एस्टेट का एक तरल, छोटा हिस्सा जोड़ना चाहते हैं, बिना पूरी संपत्ति ख़रीदे। इसे कुल निवेश का एक हिस्सा मानें, आधार नहीं।',
          'यह लेख सामान्य जानकारी है, कोई निवेश सलाह नहीं।',
        ],
        pEn: [
          'A REIT is an option for investors who want to add a liquid, small slice of real estate to their portfolio without buying a whole property. Treat it as a portion of total investments, not the foundation.',
          'This article is general information, not investment advice.',
        ],
      },
    ],
  },
  {
    slug: 'rupee-cost-averaging-explained',
    category: 'nivesh',
    titleHi: 'रुपये की औसत लागत: उतार-चढ़ाव को दोस्त बनाना',
    titleEn: 'Rupee-Cost Averaging: Turning Volatility Into a Friend',
    excerptHi: 'बाज़ार कब ऊपर-नीचे होगा, कोई नहीं जानता। हर महीने तय रक़म लगाना इस अनिश्चितता को अपने पक्ष में मोड़ देता है।',
    excerptEn: 'No one knows when the market will rise or fall. Investing a fixed sum every month turns that uncertainty in your favour.',
    date: '2026-07-20',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'नए निवेशक अक्सर सोचते हैं कि “सही समय” का इंतज़ार करें — बाज़ार गिरे तो ख़रीदें। समस्या यह है कि सही समय पहले से कोई नहीं जानता। रुपये की औसत लागत (रुपी कॉस्ट एवरेजिंग) इस समस्या का सरल हल है।',
          'इसमें आप हर महीने एक तय रक़म लगाते हैं, चाहे बाज़ार ऊपर हो या नीचे।',
        ],
        pEn: [
          'New investors often think they should wait for the “right time” — buy when the market falls. The trouble is that no one knows the right time in advance. Rupee-cost averaging is a simple answer to this.',
          'You invest a fixed amount every month, whether the market is up or down.',
        ],
      },
      {
        hHi: 'यह कैसे मदद करता है',
        hEn: 'How it helps',
        pHi: [
          'जब आप हर महीने एक तय रक़म लगाते हैं, तो क़ीमत कम होने पर अपने-आप ज़्यादा यूनिट ख़रीदते हैं और क़ीमत ज़्यादा होने पर कम। समय के साथ यह आपकी औसत लागत को संतुलित कर देता है।',
          'सबसे बड़ी बात — आपको यह अंदाज़ा लगाने की ज़रूरत नहीं कि आज ख़रीदना सही है या नहीं। SIP इसी सिद्धांत पर चलती है।',
        ],
        pEn: [
          'When you invest a fixed sum each month, you automatically buy more units when prices are low and fewer when they are high. Over time this balances your average cost.',
          'Best of all, you never have to guess whether today is a good day to buy. SIPs run on exactly this principle.',
        ],
      },
      {
        hHi: 'अनुशासन ही असली ताक़त',
        hEn: 'Discipline is the real power',
        pHi: [
          'इसका सबसे बड़ा लाभ भावनात्मक है: यह घबराहट और लालच में लिए फ़ैसलों को हटा देता है। तय तारीख़ पर तय रक़म — चाहे बाज़ार डरावना हो या उत्साही — यही निरंतरता लंबी अवधि में फल देती है।',
          'गिरते बाज़ार में भी जारी रखना असल में सस्ते में ख़रीदना है, भले ही तब यह कठिन लगे।',
        ],
        pEn: [
          'Its biggest benefit is emotional: it removes decisions made in panic or greed. A fixed sum on a fixed date — whether the market is frightening or euphoric — and that consistency pays off over the long run.',
          'Continuing even in a falling market is really buying cheap, however hard it feels then.',
        ],
      },
      {
        hHi: 'याद रखें',
        hEn: 'Remember',
        pHi: [
          'यह जादू नहीं है और नुक़सान से पूरी सुरक्षा नहीं देता; यह अनुमान लगाने की ज़रूरत और भावनात्मक ग़लतियों को घटाता है। लंबी अवधि के लक्ष्यों के लिए यह एक भरोसेमंद आदत है।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'It is not magic and does not fully protect from losses; it reduces the need to guess and the risk of emotional mistakes. For long-term goals it is a dependable habit.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'recurring-deposit-guide',
    category: 'bachat',
    titleHi: 'रिकरिंग डिपॉज़िट (RD): छोटी बचत की मज़बूत आदत',
    titleEn: 'Recurring Deposits (RDs): A Strong Habit for Small Savers',
    excerptHi: 'हर महीने थोड़ा-थोड़ा जमा करके एक तय रक़म बनाना — RD अनुशासित बचत का सरल, सुरक्षित औज़ार है। किसके लिए सही?',
    excerptEn: 'Save a little every month toward a fixed sum — the RD is a simple, safe tool for disciplined saving. Who is it right for?',
    date: '2026-07-20',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'हर किसी के पास एकमुश्त बड़ी रक़म नहीं होती, पर हर महीने थोड़ा-थोड़ा बचाना संभव है। रिकरिंग डिपॉज़िट (RD) इसी के लिए बना है — इसमें आप हर महीने एक तय रक़म बैंक में जमा करते हैं और अवधि के अंत में ब्याज के साथ एकमुश्त पाते हैं।',
          'यह अनुशासित बचत की एक सरल और सुरक्षित आदत है।',
        ],
        pEn: [
          'Not everyone has a large lump sum, but almost anyone can save a little each month. The Recurring Deposit (RD) is built for this — you deposit a fixed amount with the bank every month and receive a lump sum with interest at the end.',
          'It is a simple, safe habit of disciplined saving.',
        ],
      },
      {
        hHi: 'RD के फ़ायदे',
        hEn: 'The benefits of an RD',
        pHi: [
          'RD सुरक्षित है और इसका रिटर्न पहले से तय होता है, इसलिए बाज़ार के उतार-चढ़ाव की चिंता नहीं। यह छोटी रक़म से भी शुरू हो सकता है, जिससे नए बचतकर्ता के लिए यह आसान है।',
          'यह उन नज़दीकी लक्ष्यों के लिए अच्छा है जिनके लिए पैसा कुछ महीनों या वर्ष-दो-वर्ष में चाहिए।',
        ],
        pEn: [
          'An RD is safe and its return is fixed in advance, so there is no worry about market swings. It can start with a small amount, making it easy for a new saver.',
          'It is good for near-term goals where the money is needed in a few months or a year or two.',
        ],
      },
      {
        hHi: 'सीमाएँ',
        hEn: 'The limits',
        pHi: [
          'सुरक्षा की क़ीमत यह है कि RD का रिटर्न आमतौर पर इक्विटी जैसे विकल्पों से कम होता है, और लंबी अवधि में महँगाई को हराने के लिए यह अकेला काफ़ी नहीं। इसलिए इसे लंबी अवधि की संपत्ति-निर्माण का मुख्य साधन न बनाएँ।',
          'ब्याज पर कर के नियम भी लागू होते हैं।',
        ],
        pEn: [
          'The price of safety is that an RD’s return is usually lower than options like equity, and on its own it is not enough to beat inflation over the long term. So do not make it your main tool for long-term wealth-building.',
          'Tax rules on the interest also apply.',
        ],
      },
      {
        hHi: 'सही जगह पर उपयोग',
        hEn: 'Using it in the right place',
        pHi: [
          'RD का सही उपयोग है — अनुशासित, सुरक्षित, छोटी बचत की आदत डालना और नज़दीकी लक्ष्य के लिए पैसा जमा करना। लंबी अवधि के लिए इसे इक्विटी जैसे विकास वाले विकल्पों के साथ संतुलित करें।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'The right use of an RD is to build a disciplined, safe, small-saving habit and gather money for a near-term goal. For the long term, balance it with growth options like equity.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'automate-your-savings-india',
    category: 'bachat',
    titleHi: 'बचत को अपने-आप होने दें: विलपावर से बेहतर तरीक़ा',
    titleEn: 'Let Your Savings Happen Automatically: Better Than Willpower',
    excerptHi: 'महीने के अंत में जो बचता है वह अक्सर कुछ नहीं होता। सैलरी आते ही बचत अलग कर देना पूरी कहानी बदल देता है।',
    excerptEn: 'What’s left at month-end is usually nothing. Moving savings aside the moment salary arrives changes the whole story.',
    date: '2026-07-21',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'हम अक्सर सोचते हैं कि महीने के अंत में जो बचेगा, वह बचा लेंगे। समस्या यह है कि अंत में आमतौर पर कुछ बचता ही नहीं। इसका हल विलपावर नहीं, बल्कि व्यवस्था है — बचत को अपने-आप होने देना।',
          'जो लोग लगातार बचत करते हैं, वे अक्सर ज़्यादा अनुशासित नहीं होते; उन्होंने बस बचत को स्वचालित कर दिया होता है।',
        ],
        pEn: [
          'We often think we will save whatever is left at month-end. The trouble is that at the end there is usually nothing left. The answer is not willpower but a system — letting savings happen automatically.',
          'People who save consistently are often not more disciplined; they have simply automated their saving.',
        ],
      },
      {
        hHi: 'मूल तरकीब',
        hEn: 'The core trick',
        pHi: [
          'सैलरी आते ही एक तय रक़म अपने-आप बचत या निवेश (जैसे SIP या RD) में चली जाए, इससे पहले कि आप उसे ख़र्च कर सकें। इस तरह “पहले ख़ुद को चुकाओ” का सिद्धांत बिना हर महीने सोचे लागू हो जाता है।',
          'बचत एक मासिक निर्णय के बजाय एक पृष्ठभूमि की सच्चाई बन जाती है।',
        ],
        pEn: [
          'The moment salary arrives, a fixed amount should move automatically into savings or investment (like a SIP or RD), before you can spend it. This applies the “pay yourself first” principle without thinking every month.',
          'Saving becomes a background fact instead of a monthly decision.',
        ],
      },
      {
        hHi: 'बिलों को भी स्वचालित करें',
        hEn: 'Automate bills too',
        pHi: [
          'यही तर्क बिलों पर भी लागू करें — तय बिल अपने-आप कट जाएँ ताकि देरी की पेनल्टी और याद रखने का बोझ न रहे। लक्ष्य एक ऐसी व्यवस्था है जहाँ ज़रूरी काम आपके बिना हो जाएँ।',
          'बस समय-समय पर पूरी व्यवस्था की जाँच करें ताकि कोई भूली हुई सदस्यता (सब्सक्रिप्शन) चुपचाप न चलती रहे।',
        ],
        pEn: [
          'Apply the same logic to bills — let fixed bills auto-pay so there are no late penalties or the burden of remembering. The goal is a system where the essential things happen without you.',
          'Just review the whole setup periodically so a forgotten subscription is not quietly running.',
        ],
      },
      {
        hHi: 'क्यों यह असरदार है',
        hEn: 'Why it works',
        pHi: [
          'स्वचालन की ताक़त निरंतरता है — यह हर महीने, हर मूड में, यहाँ तक कि गिरते बाज़ार में भी बचत जारी रखता है। यही स्थिर, भावनाहीन आदत लंबी अवधि में सबसे बड़ा अंतर बनाती है।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'Automation’s power is consistency — it keeps saving every month, in every mood, even in a falling market. This steady, unemotional habit makes the biggest difference over the long run.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'sinking-fund-for-big-expenses',
    category: 'bachat',
    titleHi: 'सिंकिंग फंड: बड़े ख़र्च को “सरप्राइज़” बनने से रोकें',
    titleEn: 'Sinking Funds: Stop Big Expenses From Being “Surprises”',
    excerptHi: 'त्योहार, बीमा नवीनीकरण, स्कूल फ़ीस — ये हर बार बजट बिगाड़ते हैं, जबकि इनका आना तय था। इसका सरल हल है सिंकिंग फंड।',
    excerptEn: 'Festivals, insurance renewals, school fees — these wreck the budget every time, though they were entirely predictable. The simple fix is a sinking fund.',
    date: '2026-07-21',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'हर साल कुछ बड़े ख़र्च “अचानक” आकर बजट बिगाड़ते हैं — त्योहार, बीमा का नवीनीकरण, स्कूल की फ़ीस, गाड़ी की सर्विसिंग। पर सच यह है कि इनमें से लगभग कोई भी सरप्राइज़ नहीं होता; हम बस इनके लिए पहले से पैसे अलग नहीं रखते।',
          'सिंकिंग फंड इसका सरल इलाज है।',
        ],
        pEn: [
          'Every year some big expenses arrive “suddenly” and wreck the budget — festivals, insurance renewals, school fees, vehicle servicing. But the truth is almost none of these are surprises; we just don’t set money aside for them in advance.',
          'A sinking fund is the simple cure.',
        ],
      },
      {
        hHi: 'यह कैसे काम करता है',
        hEn: 'How it works',
        pHi: [
          'किसी तय सालाना ख़र्च को बारह से भाग दें और हर महीने उतनी रक़म एक अलग “फंड” में डालें। साल में आने वाला बड़ा बिल अब एक झटके के बजाय बारह छोटी, आसान किश्तों में बदल जाता है।',
          'जब बिल आता है, पैसा पहले से तैयार होता है — और आपका इमरजेंसी फंड इससे अछूता रहता है।',
        ],
        pEn: [
          'Take a fixed annual expense, divide it by twelve, and put that much into a separate “fund” each month. The big yearly bill now becomes twelve small, easy instalments instead of one shock.',
          'When the bill arrives, the money is already ready — and your emergency fund stays untouched.',
        ],
      },
      {
        hHi: 'किन ख़र्चों के लिए',
        hEn: 'For which expenses',
        pHi: [
          'अच्छे उदाहरण हैं — त्योहार और उपहार, बीमा प्रीमियम, वार्षिक फ़ीस, गाड़ी का रख-रखाव, बड़ी मरम्मत। जो भी बड़ा, अनियमित पर तय ख़र्च आपको एक झटके में चुभता है, वह सिंकिंग फंड का उम्मीदवार है।',
          'हर एक के लिए अलग खाता ज़रूरी नहीं; एक सूची या कुछ अलग “जेबें” काफ़ी हैं।',
        ],
        pEn: [
          'Good examples are festivals and gifts, insurance premiums, annual fees, vehicle upkeep, and big repairs. Any large, irregular but predictable cost that stings as one payment is a sinking-fund candidate.',
          'A separate account for each is not needed; a list or a few labelled “pockets” is enough.',
        ],
      },
      {
        hHi: 'शांति की आदत',
        hEn: 'A habit of calm',
        pHi: [
          'सिंकिंग फंड एक छोटी आदत है जिसका बड़ा असर है: यह पैसे के तनाव का बड़ा हिस्सा हटा देती है, क्योंकि “अनपेक्षित” ज़्यादातर ग़ायब हो जाता है। जो तय है, उसकी तैयारी करें।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'A sinking fund is a small habit with a big effect: it removes much of money stress, because the “unexpected” mostly disappears. Prepare for the predictable.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'savings-account-smart-use',
    category: 'bachat',
    titleHi: 'बचत खाते का समझदारी से उपयोग: पैसा बेकार न पड़ा रहे',
    titleEn: 'Using Your Savings Account Wisely: Don’t Let Cash Sit Idle',
    excerptHi: 'बचत खाता ज़रूरी है, पर उसमें बहुत ज़्यादा पैसा रखना महँगाई के कारण चुपचाप नुक़सान है। सही संतुलन क्या है?',
    excerptEn: 'A savings account is essential, but keeping too much in it is a quiet loss to inflation. What’s the right balance?',
    date: '2026-07-22',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बचत खाता हर किसी के पैसे के जीवन का आधार है — रोज़मर्रा के लेन-देन और तुरंत पहुँच के लिए ज़रूरी। पर एक आम ग़लती है इसमें ज़रूरत से बहुत ज़्यादा पैसा महीनों तक पड़ा रहने देना।',
          'बचत खाते का ब्याज आमतौर पर कम होता है, इसलिए वहाँ रखा अतिरिक्त पैसा महँगाई से चुपचाप घटता रहता है।',
        ],
        pEn: [
          'A savings account is the foundation of everyone’s money life — needed for daily transactions and instant access. But a common mistake is letting far more money than needed sit in it for months.',
          'A savings account’s interest is usually low, so extra money left there quietly shrinks against inflation.',
        ],
      },
      {
        hHi: 'खाते में कितना रखें',
        hEn: 'How much to keep in it',
        pHi: [
          'बचत खाते में उतना ही रखें जितना रोज़मर्रा के ख़र्च और तुरंत की सुविधा के लिए चाहिए, और साथ में अपना इमरजेंसी फंड (अगर आप उसे यहीं रखते हैं)। इससे ज़्यादा पैसा बेहतर विकल्पों में लगाया जा सकता है।',
          'लक्ष्य है — पैसा “काम पर” रहे, बेकार न पड़ा रहे।',
        ],
        pEn: [
          'Keep in the savings account only what you need for daily spending and instant convenience, plus your emergency fund (if you keep it here). Money beyond that can be put to better use.',
          'The goal is to keep money “at work”, not lying idle.',
        ],
      },
      {
        hHi: 'अतिरिक्त पैसा कहाँ जाए',
        hEn: 'Where extra money should go',
        pHi: [
          'नज़दीकी ज़रूरतों के लिए सुरक्षित विकल्प (जैसे FD या लिक्विड विकल्प) और लंबी अवधि के लिए विकास वाले विकल्प (जैसे विविध इक्विटी फंड) उपयुक्त हो सकते हैं। मक़सद है पैसे को उसकी ज़रूरत की समयसीमा के अनुसार सही जगह रखना।',
          'यह चुनाव आपके लक्ष्य और जोखिम-क्षमता पर निर्भर करता है।',
        ],
        pEn: [
          'For near-term needs, safe options (like FDs or liquid options); for the long term, growth options (like diversified equity funds) may suit. The point is to place money in the right home according to when it’s needed.',
          'This choice depends on your goals and risk capacity.',
        ],
      },
      {
        hHi: 'सुविधा और वृद्धि का संतुलन',
        hEn: 'Balancing access and growth',
        pHi: [
          'बचत खाता सुविधा देता है, पर वृद्धि नहीं; निवेश वृद्धि देता है, पर तुरंत की सुविधा कम। समझदारी दोनों के बीच संतुलन में है — पहुँच के लिए पर्याप्त नक़दी, बाक़ी काम पर लगा हुआ।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'A savings account gives access but not growth; investing gives growth but less instant access. Wisdom is in balancing the two — enough cash for access, the rest put to work.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'tax-saving-80c-options',
    category: 'tax',
    titleHi: 'सेक्शन 80C: कर बचत के विकल्प, सही ढंग से चुनें',
    titleEn: 'Section 80C: Tax-Saving Options, Chosen Wisely',
    excerptHi: 'कर बचाने के चक्कर में लोग अक्सर ग़लत उत्पाद ख़रीद लेते हैं। 80C के विकल्पों को कर और अपने लक्ष्य — दोनों नज़रिए से देखें।',
    excerptEn: 'Chasing tax savings, people often buy the wrong product. View 80C options through both tax and your own goals.',
    date: '2026-07-22',
    minutes: 6,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'पुरानी कर व्यवस्था में सेक्शन 80C कर बचाने का एक लोकप्रिय रास्ता है, जिसके तहत कुछ निवेश और ख़र्च पर एक सीमा तक कर-छूट मिलती है। समस्या तब होती है जब लोग सिर्फ़ कर बचाने के लिए, बिना सोचे, कोई भी उत्पाद ख़रीद लेते हैं।',
          'सही तरीक़ा है — ऐसा विकल्प चुनना जो कर भी बचाए और आपके लक्ष्य के भी अनुकूल हो।',
        ],
        pEn: [
          'In the old tax regime, Section 80C is a popular route to save tax, giving a deduction up to a limit on certain investments and expenses. The problem arises when people buy any product, thoughtlessly, just to save tax.',
          'The right approach is to choose an option that both saves tax and suits your goals.',
        ],
      },
      {
        hHi: 'विकल्पों की विविधता',
        hEn: 'The variety of options',
        pHi: [
          '80C के दायरे में कई अलग-अलग चीज़ें आती हैं — जैसे कुछ बचत योजनाएँ, कुछ बीमा प्रीमियम, कुछ इक्विटी-आधारित कर-बचत फंड, और कुछ ज़रूरी ख़र्च। इनका जोखिम, रिटर्न और तरलता बहुत अलग-अलग है।',
          'इसलिए “80C” एक चीज़ नहीं, बल्कि बहुत भिन्न विकल्पों का समूह है।',
        ],
        pEn: [
          'Section 80C covers many different things — certain savings schemes, some insurance premiums, some equity-based tax-saving funds, and certain essential expenses. Their risk, return and liquidity vary greatly.',
          'So “80C” is not one thing but a group of very different options.',
        ],
      },
      {
        hHi: 'लक्ष्य के अनुसार चुनें',
        hEn: 'Choose according to your goal',
        pHi: [
          'सवाल यह न हो कि “कौन-सा 80C उत्पाद है”, बल्कि “मेरे लक्ष्य के लिए क्या सही है, जो साथ में कर भी बचाए।” लंबी अवधि की वृद्धि चाहिए तो इक्विटी-आधारित विकल्प; सुरक्षा चाहिए तो तय-रिटर्न वाले। बीमा को निवेश के रूप में मिलाने से अक्सर दोनों काम अधूरे रहते हैं।',
          'लॉक-इन अवधि और तरलता पर भी ध्यान दें।',
        ],
        pEn: [
          'The question should not be “which 80C product”, but “what suits my goal, and also saves tax”. For long-term growth, equity-based options; for safety, fixed-return ones. Mixing insurance as an investment often does both jobs poorly.',
          'Also mind the lock-in period and liquidity.',
        ],
      },
      {
        hHi: 'नियम बदलते हैं',
        hEn: 'The rules change',
        pHi: [
          'कर के नियम, सीमाएँ और व्यवस्थाएँ (जैसे पुरानी बनाम नई) समय के साथ बदलती हैं, और हर व्यक्ति की स्थिति अलग होती है। इसलिए बड़े निर्णय से पहले नवीनतम नियम जाँचें और ज़रूरत हो तो कर-विशेषज्ञ से सलाह लें।',
          'यह लेख सामान्य शैक्षिक जानकारी है, कर सलाह नहीं।',
        ],
        pEn: [
          'Tax rules, limits and regimes (like old vs new) change over time, and every person’s situation differs. So before a big decision, check the latest rules and, if needed, consult a tax professional.',
          'This article is general educational information, not tax advice.',
        ],
      },
    ],
  },
  {
    slug: 'hra-exemption-guide',
    category: 'tax',
    titleHi: 'HRA छूट: किराया देने वालों के लिए कर बचत समझें',
    titleEn: 'HRA Exemption: Understanding Tax Relief for Those Who Pay Rent',
    excerptHi: 'अगर आप वेतनभोगी हैं और किराया देते हैं, तो HRA छूट आपका कर घटा सकती है। इसकी बुनियादी बातें, सरल भाषा में।',
    excerptEn: 'If you are salaried and pay rent, the HRA exemption can lower your tax. The basics, in plain language.',
    date: '2026-07-23',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बहुत-से वेतनभोगी लोग किराए के घर में रहते हैं और उनके वेतन में हाउस रेंट अलाउंस (HRA) शामिल होता है। पुरानी कर व्यवस्था में इस HRA पर एक सीमा तक कर-छूट मिल सकती है, जो कर का बोझ घटाती है।',
          'फिर भी बहुत लोग इसका सही लाभ नहीं लेते, क्योंकि नियम समझ में नहीं आते।',
        ],
        pEn: [
          'Many salaried people live in rented homes and their salary includes a House Rent Allowance (HRA). In the old tax regime, this HRA can get a tax exemption up to a limit, reducing the tax burden.',
          'Yet many do not use it well, because the rules feel confusing.',
        ],
      },
      {
        hHi: 'छूट किस पर निर्भर',
        hEn: 'What the exemption depends on',
        pHi: [
          'HRA छूट कई बातों के मेल से तय होती है — जैसे आपको मिलने वाला HRA, आपका वेतन, आपका वास्तविक किराया, और आप किस शहर में रहते हैं। छूट इन सबमें से एक तय गणना के अनुसार सबसे कम रक़म तक मिलती है।',
          'इसलिए सिर्फ़ “HRA मिलता है” का मतलब पूरी रक़म कर-मुक्त नहीं।',
        ],
        pEn: [
          'The HRA exemption is decided by a combination of factors — the HRA you receive, your salary, your actual rent, and which city you live in. The exemption is limited to the least of a set calculation of these.',
          'So merely “receiving HRA” does not mean the whole amount is tax-free.',
        ],
      },
      {
        hHi: 'सबूत रखना ज़रूरी',
        hEn: 'Keeping proof matters',
        pHi: [
          'छूट का दावा करने के लिए आमतौर पर किराए के भुगतान का सबूत (जैसे रसीदें/समझौता) रखना ज़रूरी होता है, और कुछ स्थितियों में मकान मालिक की जानकारी भी। सही रिकॉर्ड रखना बाद की परेशानी से बचाता है।',
          'फ़र्ज़ी किराए के दावे से बचें — यह जोखिम भरा और ग़लत है।',
        ],
        pEn: [
          'To claim the exemption you usually need proof of rent payment (like receipts/agreement), and in some cases the landlord’s details. Keeping proper records avoids trouble later.',
          'Avoid fake rent claims — they are risky and wrong.',
        ],
      },
      {
        hHi: 'नियम जाँचते रहें',
        hEn: 'Keep checking the rules',
        pHi: [
          'HRA से जुड़े नियम और कर व्यवस्थाएँ बदल सकती हैं, और नई कर व्यवस्था में इसका व्यवहार अलग हो सकता है। इसलिए दावा करने से पहले नवीनतम नियम जाँचें और ज़रूरत हो तो विशेषज्ञ से पूछें।',
          'यह लेख सामान्य जानकारी है, कर सलाह नहीं।',
        ],
        pEn: [
          'Rules around HRA and tax regimes can change, and its treatment may differ under the new regime. So before claiming, check the latest rules and ask an expert if needed.',
          'This article is general information, not tax advice.',
        ],
      },
    ],
  },
  {
    slug: 'capital-gains-basics-india',
    category: 'tax',
    titleHi: 'कैपिटल गेन टैक्स: निवेश बेचने पर कर की बुनियादी समझ',
    titleEn: 'Capital Gains Tax: The Basics of Tax When You Sell Investments',
    excerptHi: 'शेयर, म्यूचुअल फंड या संपत्ति बेचने पर होने वाले मुनाफ़े पर कर लगता है। “लॉन्ग टर्म” और “शॉर्ट टर्म” का फ़र्क़ समझें।',
    excerptEn: 'Profit from selling shares, mutual funds or property is taxed. Understand the difference between “long-term” and “short-term”.',
    date: '2026-07-23',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'जब आप कोई निवेश — जैसे शेयर, म्यूचुअल फंड या संपत्ति — मुनाफ़े में बेचते हैं, तो उस मुनाफ़े को कैपिटल गेन कहते हैं, और उस पर कर लग सकता है। बहुत-से निवेशक बेचने के बाद इस कर से हैरान होते हैं।',
          'इसकी बुनियादी समझ आपको सुखद-अप्रिय आश्चर्य से बचाती है।',
        ],
        pEn: [
          'When you sell an investment — such as shares, mutual funds or property — at a profit, that profit is called a capital gain, and it may be taxed. Many investors are surprised by this tax after selling.',
          'A basic understanding saves you from an unpleasant surprise.',
        ],
      },
      {
        hHi: 'लॉन्ग टर्म बनाम शॉर्ट टर्म',
        hEn: 'Long-term versus short-term',
        pHi: [
          'कर की गणना में एक बड़ा फ़र्क़ यह है कि आपने निवेश कितने समय रखा। एक निश्चित अवधि से ज़्यादा रखने पर वह “लॉन्ग टर्म” माना जाता है और आमतौर पर कर अलग (अक्सर कम) होता है; कम समय रखने पर “शॉर्ट टर्म”।',
          'यह अवधि और दरें अलग-अलग तरह के निवेश (इक्विटी, डेट, संपत्ति) के लिए भिन्न होती हैं।',
        ],
        pEn: [
          'A big factor in the tax is how long you held the investment. Holding beyond a set period makes it “long-term”, usually taxed differently (often lower); holding for a shorter time is “short-term”.',
          'This period and the rates differ across asset types (equity, debt, property).',
        ],
      },
      {
        hHi: 'योजना बनाकर बेचें',
        hEn: 'Sell with a plan',
        pHi: [
          'कर को समझकर बेचने का समय चुनना समझदारी है — पर कर बचाने के लिए किसी अच्छे निर्णय को टालना भी सही नहीं। मक़सद है कर को ध्यान में रखना, उसे अपना मालिक न बनने देना।',
          'रिकॉर्ड (ख़रीद-बिक्री की तारीख़ और मूल्य) रखना गणना को आसान बनाता है।',
        ],
        pEn: [
          'Understanding the tax and timing a sale is wise — but delaying a good decision just to save tax is not. The aim is to keep tax in mind, not let it become your master.',
          'Keeping records (dates and prices of purchase and sale) makes the calculation easier.',
        ],
      },
      {
        hHi: 'नियम बदलते रहते हैं',
        hEn: 'The rules keep changing',
        pHi: [
          'कैपिटल गेन की अवधि, दरें और छूट समय के साथ बदलती रहती हैं और निवेश के प्रकार पर निर्भर करती हैं। इसलिए बड़े लेन-देन से पहले नवीनतम नियम जाँचें और ज़रूरत हो तो कर-विशेषज्ञ से सलाह लें।',
          'यह लेख सामान्य शैक्षिक जानकारी है, कर सलाह नहीं।',
        ],
        pEn: [
          'The holding periods, rates and exemptions for capital gains change over time and depend on the type of investment. So before a big transaction, check the latest rules and consult a tax professional if needed.',
          'This article is general educational information, not tax advice.',
        ],
      },
    ],
  },
  {
    slug: 'form-26as-and-ais',
    category: 'tax',
    titleHi: 'Form 26AS और AIS: कर रिटर्न भरने से पहले ज़रूर देखें',
    titleEn: 'Form 26AS and AIS: Check Them Before Filing Your Return',
    excerptHi: 'ये दो दस्तावेज़ बताते हैं कि आयकर विभाग के पास आपकी आय और कर की क्या जानकारी है। इन्हें मिलाना ग़लतियों से बचाता है।',
    excerptEn: 'These two documents show what the tax department already knows about your income and tax. Matching them prevents mistakes.',
    date: '2026-07-24',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'कर रिटर्न भरते समय बहुत-से लोग सीधे आय भर देते हैं, यह जाने बिना कि आयकर विभाग के पास पहले से उनकी आय और कटे हुए कर (TDS) की जानकारी होती है। Form 26AS और AIS (एन्युअल इन्फ़ॉर्मेशन स्टेटमेंट) इसी जानकारी को दर्शाते हैं।',
          'रिटर्न भरने से पहले इन्हें देखना बड़ी ग़लतियों से बचाता है।',
        ],
        pEn: [
          'When filing a return, many people enter income directly, unaware that the tax department already holds information about their income and deducted tax (TDS). Form 26AS and the AIS (Annual Information Statement) reflect this information.',
          'Looking at them before filing prevents big mistakes.',
        ],
      },
      {
        hHi: 'ये क्या दिखाते हैं',
        hEn: 'What they show',
        pHi: [
          'मोटे तौर पर, ये दस्तावेज़ आपके नाम पर काटे या जमा किए गए कर, और विभाग को रिपोर्ट किए गए कुछ बड़े लेन-देन की झलक देते हैं। इससे आप देख सकते हैं कि विभाग की जानकारी और आपकी अपनी जानकारी मेल खाती है या नहीं।',
          'बेमेल होने पर उसे सुलझाना ज़रूरी है, ताकि बाद में नोटिस न आए।',
        ],
        pEn: [
          'Broadly, these documents give a picture of tax deducted or deposited in your name, and certain large transactions reported to the department. From this you can see whether the department’s information matches your own.',
          'If there is a mismatch, it is important to resolve it, so a notice does not come later.',
        ],
      },
      {
        hHi: 'मिलान की आदत',
        hEn: 'The habit of matching',
        pHi: [
          'रिटर्न भरने से पहले अपनी आय और कटे कर को इन दस्तावेज़ों से मिलाना एक अच्छी आदत है। इससे भूल-चूक, छूटी हुई आय, या ग़लत TDS जैसी समस्याएँ पहले ही पकड़ में आ जाती हैं।',
          'यह छोटा-सा क़दम बाद की बड़ी परेशानी से बचाता है।',
        ],
        pEn: [
          'Matching your income and deducted tax against these documents before filing is a good habit. It catches problems like omissions, missed income, or wrong TDS early.',
          'This small step avoids bigger trouble later.',
        ],
      },
      {
        hHi: 'संदेह हो तो पूछें',
        hEn: 'Ask if in doubt',
        pHi: [
          'ये दस्तावेज़ और उनके नियम समय के साथ बदल सकते हैं, और जटिल मामलों में विशेषज्ञ की मदद उपयोगी है। मक़सद है सही, पारदर्शी रिटर्न भरना।',
          'यह लेख सामान्य जानकारी है, कर सलाह नहीं।',
        ],
        pEn: [
          'These documents and their rules can change over time, and in complex cases an expert’s help is useful. The aim is to file an accurate, transparent return.',
          'This article is general information, not tax advice.',
        ],
      },
    ],
  },
  {
    slug: 'insurance-vs-investment',
    category: 'bima',
    titleHi: 'बीमा और निवेश को मिलाएँ नहीं: दोनों अलग रखें',
    titleEn: 'Don’t Mix Insurance and Investment: Keep the Two Separate',
    excerptHi: 'एक ही उत्पाद में “बीमा + निवेश” का वादा आकर्षक लगता है, पर अक्सर दोनों काम अधूरे रह जाते हैं। क्यों अलग रखना बेहतर है।',
    excerptEn: 'A single product promising “insurance + investment” sounds attractive, but often does both jobs poorly. Why keeping them separate is better.',
    date: '2026-07-24',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में बहुत-से लोग ऐसे उत्पाद ख़रीदते हैं जो एक साथ “बीमा और निवेश” का वादा करते हैं। सुनने में यह सुविधाजनक लगता है — एक ही चीज़ में सुरक्षा और बचत। पर व्यवहार में ऐसे मिश्रित उत्पाद अक्सर दोनों काम ठीक से नहीं कर पाते।',
          'एक बुनियादी सिद्धांत है — बीमा और निवेश को अलग रखें।',
        ],
        pEn: [
          'In India many people buy products that promise “insurance and investment” together. It sounds convenient — protection and saving in one thing. But in practice such mixed products often do both jobs poorly.',
          'A basic principle: keep insurance and investment separate.',
        ],
      },
      {
        hHi: 'मिश्रित उत्पाद की समस्या',
        hEn: 'The problem with mixed products',
        pHi: [
          'ऐसे उत्पादों में अक्सर बीमा कवर कम होता है और निवेश का रिटर्न भी साधारण, जबकि लागत ऊँची। यानी न पूरी सुरक्षा, न अच्छी वृद्धि — और पैसा लंबी अवधि के लिए फँस जाता है।',
          'सुविधा की क़ीमत अक्सर कमज़ोर सुरक्षा और कमज़ोर रिटर्न, दोनों होती है।',
        ],
        pEn: [
          'Such products often provide low insurance cover and only ordinary investment returns, while costs are high. That is neither full protection nor good growth — and the money is locked in for a long time.',
          'The price of convenience is often both weaker protection and weaker returns.',
        ],
      },
      {
        hHi: 'बेहतर तरीक़ा',
        hEn: 'The better approach',
        pHi: [
          'सुरक्षा के लिए एक सादा, पर्याप्त कवर वाला बीमा (जैसे टर्म इंश्योरेंस) लें, जो कम प्रीमियम में बड़ा कवर देता है। और निवेश अलग से उन विकल्पों में करें जो आपके लक्ष्य के अनुसार हों। इस तरह दोनों काम अच्छे से होते हैं।',
          'सुरक्षा और वृद्धि — दोनों को उनका अपना, सही औज़ार दें।',
        ],
        pEn: [
          'For protection, take a plain insurance with adequate cover (like term insurance), which gives large cover for a small premium. And invest separately in options suited to your goals. This way both jobs are done well.',
          'Give protection and growth each their own, correct tool.',
        ],
      },
      {
        hHi: 'सरलता की ताक़त',
        hEn: 'The power of simplicity',
        pHi: [
          'अलग-अलग रखने से आप हर हिस्से को साफ़-साफ़ समझते हैं, तुलना कर पाते हैं, और ज़रूरत पड़ने पर बदल भी सकते हैं। यह सरलता लंबी अवधि में बड़ा फ़र्क़ बनाती है।',
          'यह लेख सामान्य जानकारी है, कोई उत्पाद-विशेष सलाह नहीं।',
        ],
        pEn: [
          'Keeping them separate lets you understand each part clearly, compare it, and change it when needed. This simplicity makes a big difference over the long run.',
          'This article is general information, not product-specific advice.',
        ],
      },
    ],
  },
  {
    slug: 'motor-insurance-basics',
    category: 'bima',
    titleHi: 'गाड़ी का बीमा: सिर्फ़ क़ानूनी ज़रूरत नहीं',
    titleEn: 'Motor Insurance: Not Just a Legal Requirement',
    excerptHi: 'गाड़ी का बीमा भारत में अनिवार्य है, पर सिर्फ़ सस्ता “थर्ड पार्टी” कवर काफ़ी नहीं हो सकता। बुनियादी अंतर समझें।',
    excerptEn: 'Motor insurance is mandatory in India, but the cheap “third-party” cover alone may not be enough. Understand the basic difference.',
    date: '2026-07-25',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में गाड़ी चलाने के लिए एक बुनियादी बीमा क़ानूनन अनिवार्य है। पर बहुत-से लोग सिर्फ़ सबसे सस्ता विकल्प लेकर मान लेते हैं कि काम हो गया, यह समझे बिना कि वह कवर वास्तव में क्या-क्या नहीं देता।',
          'बीमा के प्रकार को समझना ज़रूरी है।',
        ],
        pEn: [
          'In India, a basic insurance is legally mandatory to drive a vehicle. But many people just take the cheapest option and assume it’s handled, without understanding what that cover does — and does not — provide.',
          'Understanding the types of insurance matters.',
        ],
      },
      {
        hHi: 'थर्ड पार्टी बनाम कॉम्प्रिहेंसिव',
        hEn: 'Third-party versus comprehensive',
        pHi: [
          'बुनियादी “थर्ड पार्टी” बीमा मुख्य रूप से दूसरों को हुए नुक़सान को कवर करता है, आपकी अपनी गाड़ी को नहीं। “कॉम्प्रिहेंसिव” बीमा इससे आगे जाकर आपकी अपनी गाड़ी के नुक़सान (दुर्घटना, चोरी आदि) को भी कवर कर सकता है।',
          'इसलिए सिर्फ़ थर्ड पार्टी होने पर आपकी अपनी गाड़ी का ख़र्च आप पर आ सकता है।',
        ],
        pEn: [
          'Basic “third-party” insurance mainly covers damage to others, not to your own vehicle. “Comprehensive” insurance goes further and can also cover damage to your own vehicle (accident, theft, etc.).',
          'So with only third-party cover, the cost of your own vehicle’s damage can fall on you.',
        ],
      },
      {
        hHi: 'सही चुनाव',
        hEn: 'The right choice',
        pHi: [
          'सही बीमा आपकी गाड़ी की क़ीमत, उपयोग और आपकी ज़रूरत पर निर्भर करता है। नई या क़ीमती गाड़ी के लिए अक्सर कॉम्प्रिहेंसिव कवर समझदारी है, भले प्रीमियम अधिक हो। बहुत पुरानी गाड़ी के लिए हिसाब अलग हो सकता है।',
          'सबसे सस्ता हमेशा सबसे सही नहीं होता।',
        ],
        pEn: [
          'The right insurance depends on your vehicle’s value, use and your needs. For a new or valuable vehicle, comprehensive cover is often wise, even if the premium is higher. For a very old vehicle the calculation may differ.',
          'The cheapest is not always the most suitable.',
        ],
      },
      {
        hHi: 'शर्तें पढ़ें',
        hEn: 'Read the terms',
        pHi: [
          'किसी भी बीमा में यह जानना ज़रूरी है कि वह क्या कवर करता है और क्या नहीं (एक्सक्लूज़न)। नवीनीकरण समय पर करें, और नियम व दरें बदल सकती हैं, इसलिए मौजूदा शर्तें जाँच लें।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'With any insurance it is important to know what it covers and what it does not (exclusions). Renew on time, and since rules and rates can change, check the current terms.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'insurance-claim-process-tips',
    category: 'bima',
    titleHi: 'बीमा क्लेम: दावा आसानी से पास कराने की समझ',
    titleEn: 'Insurance Claims: Understanding How to Get a Claim Approved Smoothly',
    excerptHi: 'बीमा तभी काम का है जब ज़रूरत पर क्लेम पास हो। दावा नामंज़ूर होने के आम कारण और उनसे बचाव।',
    excerptEn: 'Insurance is only useful if the claim is paid when needed. Common reasons claims get rejected, and how to avoid them.',
    date: '2026-07-25',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बीमा लेने का पूरा मक़सद यही है कि ज़रूरत के समय क्लेम (दावा) पास हो और पैसा मिले। पर कई बार लोग शिकायत करते हैं कि उनका दावा नामंज़ूर हो गया। ज़्यादातर मामलों में इसके पीछे कुछ आम, टाले जा सकने वाले कारण होते हैं।',
          'इन्हें समझना क्लेम को आसान बनाता है।',
        ],
        pEn: [
          'The whole point of buying insurance is that the claim is approved and paid when needed. Yet people often complain that their claim was rejected. In most cases there are common, avoidable reasons behind this.',
          'Understanding them makes claims easier.',
        ],
      },
      {
        hHi: 'सच्ची जानकारी सबसे ज़रूरी',
        hEn: 'Honest information matters most',
        pHi: [
          'दावा नामंज़ूर होने का एक बड़ा कारण है ख़रीदते समय ग़लत या अधूरी जानकारी देना — जैसे किसी बीमारी या तथ्य को छिपाना। बीमा एक भरोसे का अनुबंध है; सही जानकारी देना ही आपके क्लेम की सबसे बड़ी सुरक्षा है।',
          'शुरुआत में ईमानदारी बाद में दावे को मज़बूत बनाती है।',
        ],
        pEn: [
          'A big reason claims get rejected is giving wrong or incomplete information while buying — like hiding an illness or a fact. Insurance is a contract of trust; honest disclosure is the strongest protection for your claim.',
          'Honesty at the start makes the claim strong later.',
        ],
      },
      {
        hHi: 'शर्तें और दस्तावेज़',
        hEn: 'Terms and documents',
        pHi: [
          'हर पॉलिसी की अपनी शर्तें, कवर और एक्सक्लूज़न होते हैं — क्या कवर है, क्या नहीं। क्लेम के समय सही दस्तावेज़ समय पर देना ज़रूरी है। पॉलिसी को पहले ही पढ़ लेना, बजाय संकट के समय, बहुत मदद करता है।',
          'प्रीमियम समय पर भरना भी ज़रूरी है, वरना कवर रुक सकता है।',
        ],
        pEn: [
          'Every policy has its own terms, cover and exclusions — what is covered and what is not. At claim time, providing the right documents on time is essential. Reading the policy in advance, rather than during a crisis, helps a lot.',
          'Paying the premium on time is also essential, or cover can lapse.',
        ],
      },
      {
        hHi: 'तैयारी ही बचाव',
        hEn: 'Preparation is protection',
        pHi: [
          'सारांश यह है — सही जानकारी दें, शर्तें समझें, दस्तावेज़ सँभालें, और प्रीमियम समय पर भरें। यही आदतें क्लेम को सहज बनाती हैं। संदेह हो तो बीमा कंपनी या सलाहकार से पूछें।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'In short — disclose honestly, understand the terms, keep documents, and pay premiums on time. These habits make a claim smooth. When in doubt, ask the insurer or an adviser.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'credit-card-smart-use',
    category: 'credit',
    titleHi: 'क्रेडिट कार्ड: औज़ार बनाएँ, जाल नहीं',
    titleEn: 'Credit Cards: Make Them a Tool, Not a Trap',
    excerptHi: 'सही इस्तेमाल पर क्रेडिट कार्ड सुविधा और इनाम देता है; ग़लत इस्तेमाल पर महँगा कर्ज़। फ़र्क़ कुछ आदतों में है।',
    excerptEn: 'Used right, a credit card gives convenience and rewards; used wrong, costly debt. The difference lies in a few habits.',
    date: '2026-07-26',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'क्रेडिट कार्ड अपने-आप में न अच्छा है, न बुरा — यह एक औज़ार है। सही आदतों के साथ यह सुविधा, सुरक्षा और इनाम देता है; ग़लत आदतों के साथ यह सबसे महँगे कर्ज़ों में से एक बन जाता है।',
          'फ़र्क़ कार्ड में नहीं, इस्तेमाल में है।',
        ],
        pEn: [
          'A credit card is in itself neither good nor bad — it is a tool. With the right habits it gives convenience, safety and rewards; with the wrong habits it becomes one of the most expensive kinds of debt.',
          'The difference is not in the card but in how it’s used.',
        ],
      },
      {
        hHi: 'सुनहरा नियम: पूरा बिल भरें',
        hEn: 'The golden rule: pay the full bill',
        pHi: [
          'सबसे ज़रूरी आदत है — हर महीने पूरा बिल समय पर भरना, सिर्फ़ “मिनिमम ड्यू” नहीं। पूरा भरने पर आपको ब्याज नहीं लगता और कार्ड के सारे फ़ायदे मुफ़्त में मिलते हैं। मिनिमम भरने पर बचा हुआ पैसा बहुत ऊँची ब्याज दर पर बढ़ने लगता है।',
          'यही एक आदत क्रेडिट कार्ड को औज़ार या जाल बनाती है।',
        ],
        pEn: [
          'The most important habit is to pay the full bill on time every month, not just the “minimum due”. Pay in full and you owe no interest and get all the card’s benefits for free. Pay only the minimum and the remaining amount grows at a very high interest rate.',
          'This single habit decides whether a credit card is a tool or a trap.',
        ],
      },
      {
        hHi: 'और अच्छी आदतें',
        hEn: 'More good habits',
        pHi: [
          'कार्ड को अपनी क्षमता से ज़्यादा ख़र्च का बहाना न बनने दें — इसे उतना ही इस्तेमाल करें जितना आप वैसे भी भर सकते। अपनी क्रेडिट लिमिट का बहुत बड़ा हिस्सा हर समय इस्तेमाल करने से बचें, और कार्ड की जानकारी सुरक्षित रखें।',
          'नक़दी निकालने (कैश एडवांस) जैसी महँगी सुविधाओं से बचें।',
        ],
        pEn: [
          'Do not let the card become an excuse to spend beyond your means — use it only as much as you could pay anyway. Avoid using a very large share of your credit limit all the time, and keep your card details secure.',
          'Avoid expensive features like cash withdrawal (cash advance).',
        ],
      },
      {
        hHi: 'औज़ार के रूप में',
        hEn: 'As a tool',
        pHi: [
          'अनुशासन के साथ, क्रेडिट कार्ड आपका क्रेडिट स्कोर बनाने, सुरक्षित भुगतान करने और इनाम पाने में मदद करता है। बिना अनुशासन के, यह चुपचाप कर्ज़ के जाल में खींच लेता है। चुनाव आपकी आदतों का है।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'With discipline, a credit card helps build your credit score, make secure payments and earn rewards. Without discipline, it quietly pulls you into a debt trap. The choice is in your habits.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'minimum-due-trap',
    category: 'credit',
    titleHi: '“मिनिमम ड्यू” का जाल: छोटा शब्द, बड़ा नुक़सान',
    titleEn: 'The “Minimum Due” Trap: Small Words, Big Damage',
    excerptHi: 'क्रेडिट कार्ड बिल पर लिखा “मिनिमम अमाउंट ड्यू” राहत जैसा लगता है, पर सिर्फ़ इतना भरना कर्ज़ को तेज़ी से बढ़ाता है।',
    excerptEn: 'The “minimum amount due” on a card bill feels like relief, but paying only that grows the debt fast.',
    date: '2026-07-26',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'क्रेडिट कार्ड के बिल पर एक छोटा-सा शब्द होता है — “मिनिमम अमाउंट ड्यू”। यह देखकर लगता है कि बस इतना भर देने से काम चल जाएगा। यही ग़लतफ़हमी बहुत-से लोगों को धीरे-धीरे कर्ज़ के जाल में खींच लेती है।',
          'इस जाल को समझना बहुत ज़रूरी है।',
        ],
        pEn: [
          'On a credit card bill there is a small phrase — “minimum amount due”. Seeing it, one feels that paying just that will do. This very misunderstanding slowly pulls many people into a debt trap.',
          'Understanding this trap is very important.',
        ],
      },
      {
        hHi: 'सिर्फ़ मिनिमम भरने पर क्या होता है',
        hEn: 'What happens when you pay only the minimum',
        pHi: [
          'जब आप सिर्फ़ मिनिमम भरते हैं, तो बचा हुआ बड़ा हिस्सा बहुत ऊँची ब्याज दर पर बढ़ने लगता है, और नई ख़रीद पर भी अक्सर ब्याज-मुक्त अवधि ख़त्म हो जाती है। हर महीने मिनिमम भरते रहने पर कर्ज़ घटने के बजाय बढ़ सकता है।',
          'बिल का “राहत भरा” छोटा हिस्सा असल में सबसे महँगा रास्ता है।',
        ],
        pEn: [
          'When you pay only the minimum, the large remaining balance starts growing at a very high interest rate, and the interest-free period on new purchases often ends too. Paying just the minimum every month can make the debt grow instead of shrink.',
          'That “relieving” small part of the bill is actually the most expensive road.',
        ],
      },
      {
        hHi: 'सही आदत',
        hEn: 'The right habit',
        pHi: [
          'सुरक्षित रहने का नियम सरल है — हर महीने पूरा बिल भरें। अगर किसी महीने पूरा भरना संभव न हो, तो मिनिमम को हल नहीं, बल्कि चेतावनी मानें, और जितना अधिक हो सके भरें व ख़र्च रोकें।',
          'लगातार सिर्फ़ मिनिमम भरना एक संकेत है कि ख़र्च आपकी क्षमता से ज़्यादा है।',
        ],
        pEn: [
          'The rule for staying safe is simple — pay the full bill each month. If in some month paying in full is impossible, treat the minimum as a warning, not a solution, and pay as much as you can while stopping spending.',
          'Continually paying only the minimum is a sign that spending exceeds your means.',
        ],
      },
      {
        hHi: 'जाल से दूर रहें',
        hEn: 'Stay out of the trap',
        pHi: [
          '“मिनिमम ड्यू” को कभी सामान्य आदत न बनने दें। यह सुविधा जैसा दिखता है, पर व्यवहार में यह महँगे कर्ज़ का दरवाज़ा है। पूरा भरें, और कार्ड आपका औज़ार बना रहेगा।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'Never let the “minimum due” become a normal habit. It looks like convenience, but in practice it is the doorway to expensive debt. Pay in full, and the card stays your tool.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'personal-loan-emi-basics',
    category: 'credit',
    titleHi: 'लोन और EMI: कर्ज़ लेने से पहले समझें असली लागत',
    titleEn: 'Loans and EMIs: Understand the Real Cost Before Borrowing',
    excerptHi: 'EMI छोटी लगती है, पर उसके पीछे ब्याज, अवधि और कुल लागत की पूरी कहानी होती है। कर्ज़ लेने से पहले क्या देखें।',
    excerptEn: 'An EMI looks small, but behind it lies the full story of interest, tenure and total cost. What to check before borrowing.',
    date: '2026-07-27',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'लोन लेते समय ज़्यादातर लोग सिर्फ़ एक चीज़ देखते हैं — “EMI कितनी है?” छोटी EMI राहत जैसी लगती है, पर यह पूरी तस्वीर नहीं है। EMI के पीछे ब्याज दर, अवधि और आपके द्वारा चुकाई जाने वाली कुल रक़म की कहानी छिपी होती है।',
          'कर्ज़ लेने से पहले असली लागत समझना ज़रूरी है।',
        ],
        pEn: [
          'When taking a loan, most people look at just one thing — “how much is the EMI?” A small EMI feels like relief, but it is not the full picture. Behind the EMI lies the story of the interest rate, tenure, and the total amount you will repay.',
          'Understanding the real cost before borrowing is essential.',
        ],
      },
      {
        hHi: 'लंबी अवधि का धोखा',
        hEn: 'The long-tenure illusion',
        pHi: [
          'अवधि लंबी करने पर EMI घट जाती है, जिससे लोन “सस्ता” लगता है। पर लंबी अवधि का मतलब है ज़्यादा महीनों तक ब्याज देना, यानी कुल मिलाकर कहीं अधिक रक़म चुकाना। छोटी EMI अक्सर बड़ी कुल लागत छिपाती है।',
          'इसलिए सिर्फ़ EMI नहीं, कुल चुकाई जाने वाली रक़म देखें।',
        ],
        pEn: [
          'Stretching the tenure lowers the EMI, making the loan seem “cheaper”. But a longer tenure means paying interest for more months — that is, repaying a far larger total. A small EMI often hides a big total cost.',
          'So look not just at the EMI, but at the total amount to be repaid.',
        ],
      },
      {
        hHi: 'देखने लायक़ बातें',
        hEn: 'Things worth checking',
        pHi: [
          'ब्याज दर (और वह घटती-बढ़ती है या तय), प्रोसेसिंग फ़ीस और अन्य शुल्क, समय से पहले चुकाने (प्रीपेमेंट) के नियम, और कुल चुकाई जाने वाली रक़म — इन सबको देखें। और सबसे ज़रूरी: क्या EMI आपके बजट में आराम से आती है, तब भी जब कोई अनपेक्षित ख़र्च आए।',
          'ऊँची ब्याज दर वाले कर्ज़ से ख़ास सावधान रहें।',
        ],
        pEn: [
          'Check the interest rate (and whether it is fixed or floating), processing fees and other charges, prepayment rules, and the total amount to be repaid. And most important: does the EMI fit comfortably in your budget, even when an unexpected expense arrives?',
          'Be especially wary of high-interest loans.',
        ],
      },
      {
        hHi: 'कर्ज़ सोच-समझकर',
        hEn: 'Borrow thoughtfully',
        pHi: [
          'कर्ज़ एक उपयोगी औज़ार हो सकता है जब वह किफ़ायती हो, किसी टिकाऊ चीज़ के लिए हो, और उसकी किश्तें आराम से चुकाई जा सकें। इन कसौटियों पर परखें, फिर निर्णय लें।',
          'यह लेख सामान्य जानकारी है, कोई ऋण सलाह नहीं।',
        ],
        pEn: [
          'A loan can be a useful tool when it is affordable, for something durable, and its instalments can be paid comfortably. Test it against these criteria, then decide.',
          'This article is general information, not lending advice.',
        ],
      },
    ],
  },
  {
    slug: 'cibil-score-myths',
    category: 'credit',
    titleHi: 'क्रेडिट स्कोर के बारे में आम ग़लतफ़हमियाँ',
    titleEn: 'Common Myths About Your Credit Score',
    excerptHi: 'क्रेडिट स्कोर को लेकर कई मिथक फैले हैं — स्कोर देखने से घटता है, कार्ड न रखने से स्कोर अच्छा रहता है, आदि। सच क्या है?',
    excerptEn: 'Many myths surround the credit score — checking it lowers it, avoiding cards keeps it good, and so on. What’s the truth?',
    date: '2026-07-27',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'क्रेडिट स्कोर आज कई कर्ज़ और कार्ड के फ़ैसलों में मायने रखता है, फिर भी इसके बारे में कई ग़लतफ़हमियाँ फैली हैं। इन मिथकों पर भरोसा करके लोग अनजाने में ग़लत क़दम उठा लेते हैं।',
          'कुछ आम मिथकों को साफ़ करना उपयोगी है।',
        ],
        pEn: [
          'A credit score matters today in many loan and card decisions, yet many myths surround it. Believing these myths, people unknowingly take wrong steps.',
          'Clearing up some common myths is useful.',
        ],
      },
      {
        hHi: 'मिथक: अपना स्कोर देखने से वह घटता है',
        hEn: 'Myth: checking your own score lowers it',
        pHi: [
          'यह एक आम डर है, पर आमतौर पर अपना ख़ुद का स्कोर देखना उसे नहीं घटाता। नियमित रूप से अपना स्कोर और रिपोर्ट देखना अच्छी आदत है, ताकि कोई ग़लती या धोखाधड़ी जल्दी पकड़ में आए।',
          'जो चीज़ें स्कोर पर असर डालती हैं वे हैं — भुगतान का इतिहास और कर्ज़ का व्यवहार, न कि ख़ुद देखना।',
        ],
        pEn: [
          'This is a common fear, but generally checking your own score does not lower it. Regularly reviewing your own score and report is a good habit, so any error or fraud is caught early.',
          'What affects the score are things like payment history and borrowing behaviour, not checking it yourself.',
        ],
      },
      {
        hHi: 'मिथक: कार्ड-कर्ज़ से दूर रहने पर स्कोर अच्छा',
        hEn: 'Myth: staying away from cards/loans gives a good score',
        pHi: [
          'हक़ीक़त में, क्रेडिट स्कोर आपके कर्ज़ को ज़िम्मेदारी से संभालने के इतिहास पर बनता है। कभी कोई कार्ड या कर्ज़ न लेने पर आपके पास कोई क्रेडिट इतिहास ही नहीं होता, जिससे स्कोर बनने में दिक़्क़त हो सकती है।',
          'मुद्दा कर्ज़ लेना नहीं, बल्कि उसे समय पर और समझदारी से चुकाना है।',
        ],
        pEn: [
          'In reality, a credit score is built on a history of handling credit responsibly. Never taking a card or loan means you have no credit history at all, which can make it hard for a score to form.',
          'The point is not avoiding credit, but repaying it on time and wisely.',
        ],
      },
      {
        hHi: 'असली बातें जो मायने रखती हैं',
        hEn: 'The real things that matter',
        pHi: [
          'स्कोर पर सबसे अधिक असर आमतौर पर पड़ता है — समय पर भुगतान, अपनी क्रेडिट लिमिट का बहुत बड़ा हिस्सा हर समय इस्तेमाल न करना, और एक स्थिर, ज़िम्मेदार इतिहास। मिथकों के बजाय इन पर ध्यान दें।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'What usually affects the score most are on-time payments, not using a very large share of your credit limit all the time, and a steady, responsible history. Focus on these rather than on myths.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'getting-out-of-debt-trap',
    category: 'credit',
    titleHi: 'कर्ज़ के जाल से बाहर निकलने की राह',
    titleEn: 'Finding a Way Out of the Debt Trap',
    excerptHi: 'कई कर्ज़ों और ऊँचे ब्याज के बोझ में फँसना डरावना है, पर एक क्रम से इससे बाहर निकला जा सकता है। पहला क़दम क्या हो।',
    excerptEn: 'Being trapped under many loans and high interest is frightening, but a step-by-step path can lead out. What the first step should be.',
    date: '2026-07-28',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'कई कर्ज़ों, ऊँची EMI और महँगे ब्याज के बोझ में फँस जाना बहुत तनावपूर्ण होता है, और अक्सर लगता है कि कोई रास्ता नहीं। पर एक स्पष्ट, धैर्यपूर्ण क्रम से कर्ज़ के जाल से बाहर निकला जा सकता है।',
          'पहला क़दम है — घबराने के बजाय पूरी तस्वीर देखना।',
        ],
        pEn: [
          'Being trapped under many loans, high EMIs and expensive interest is very stressful, and it often feels like there is no way out. But with a clear, patient sequence, one can find a way out of the debt trap.',
          'The first step is to see the whole picture instead of panicking.',
        ],
      },
      {
        hHi: 'सारे कर्ज़ की सूची बनाएँ',
        hEn: 'List all the debts',
        pHi: [
          'सबसे पहले अपने सारे कर्ज़ एक जगह लिखें — कितनी रक़म, किस ब्याज दर पर, और मासिक किश्त कितनी। यह सूची डरावनी लग सकती है, पर यही स्पष्टता योजना बनाने की पहली शर्त है।',
          'ख़ास ध्यान दें कि सबसे ऊँचे ब्याज वाला कर्ज़ कौन-सा है — वही सबसे तेज़ी से बढ़ता है।',
        ],
        pEn: [
          'First, write all your debts in one place — how much, at what interest rate, and the monthly instalment. This list may look frightening, but that very clarity is the first condition for making a plan.',
          'Pay special attention to which debt has the highest interest — that is the one that grows fastest.',
        ],
      },
      {
        hHi: 'महँगे कर्ज़ को पहले हटाएँ',
        hEn: 'Clear the expensive debt first',
        pHi: [
          'सभी की न्यूनतम किश्तें भरते हुए, अतिरिक्त पैसा सबसे ऊँची ब्याज दर वाले कर्ज़ पर लगाएँ, ताकि वह जल्दी ख़त्म हो। एक कर्ज़ ख़त्म होने पर उसका पैसा अगले पर लगाएँ। साथ ही, नया अनावश्यक कर्ज़ लेना रोकें और ख़र्च घटाएँ।',
          'यह धीमी लग सकती है, पर यही स्थिर तरीक़ा जाल से बाहर निकालता है।',
        ],
        pEn: [
          'While paying the minimums on all, put extra money on the highest-interest debt so it clears fastest. When one debt is gone, put its money on the next. Also, stop taking new unnecessary debt and cut spending.',
          'It may feel slow, but this steady method is what leads out of the trap.',
        ],
      },
      {
        hHi: 'मदद माँगना कमज़ोरी नहीं',
        hEn: 'Asking for help is not weakness',
        pHi: [
          'अगर बोझ बहुत बड़ा है, तो भरोसेमंद जानकारी या किसी योग्य सलाहकार से मदद लेना समझदारी है, न कि शर्म की बात। सबसे ज़रूरी है शुरुआत करना और डटे रहना।',
          'यह लेख सामान्य जानकारी है, कोई वित्तीय सलाह नहीं।',
        ],
        pEn: [
          'If the burden is very large, seeking help from reliable information or a qualified adviser is wise, not shameful. The most important thing is to start and stay the course.',
          'This article is general information, not financial advice.',
        ],
      },
    ],
  },
  {
    slug: 'upi-safe-habits',
    category: 'digital',
    titleHi: 'UPI सुरक्षित आदतें: तेज़ भुगतान, पर सतर्क रहें',
    titleEn: 'Safe UPI Habits: Fast Payments, but Stay Alert',
    excerptHi: 'UPI ने भुगतान को बहुत आसान बना दिया है, पर यही आसानी ठगों के लिए भी रास्ता है। कुछ आदतें आपको सुरक्षित रखती हैं।',
    excerptEn: 'UPI has made payments very easy, but that same ease is a doorway for fraudsters. A few habits keep you safe.',
    date: '2026-07-28',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'UPI ने भारत में भुगतान को बेहद तेज़ और आसान बना दिया है — कुछ ही सेकंड में पैसा भेजा या पाया जा सकता है। पर यही तेज़ी और आसानी ठगों के लिए भी अवसर बन जाती है, इसलिए कुछ बुनियादी सुरक्षित आदतें ज़रूरी हैं।',
          'सावधानी से UPI एक सुरक्षित, शक्तिशाली औज़ार है।',
        ],
        pEn: [
          'UPI has made payments in India extremely fast and easy — money can be sent or received in seconds. But that same speed and ease also becomes an opportunity for fraudsters, so a few basic safe habits are essential.',
          'With care, UPI is a safe, powerful tool.',
        ],
      },
      {
        hHi: 'PIN सिर्फ़ भेजने के लिए',
        hEn: 'The PIN is only for sending',
        pHi: [
          'सबसे ज़रूरी बात — UPI PIN केवल पैसे भेजने के लिए डाला जाता है, पाने के लिए कभी नहीं। अगर कोई कहे कि “पैसा पाने के लिए PIN डालें”, तो वह पक्का ठग है। पैसा पाने के लिए कोई PIN, OTP या कोड की ज़रूरत नहीं होती।',
          'अपना PIN किसी को न बताएँ, किसी भी बहाने से नहीं।',
        ],
        pEn: [
          'The most important point — a UPI PIN is entered only to send money, never to receive it. If someone says “enter your PIN to receive money”, they are certainly a fraudster. Receiving money needs no PIN, OTP or code.',
          'Never tell anyone your PIN, under any pretext.',
        ],
      },
      {
        hHi: 'जल्दबाज़ी और दबाव से बचें',
        hEn: 'Avoid haste and pressure',
        pHi: [
          'ठग अक्सर डर या लालच से जल्दबाज़ी कराते हैं — “तुरंत भुगतान करो वरना…”, या “यह लिंक/QR स्कैन करो और इनाम पाओ”। किसी भी अनजान लिंक, QR या कॉल पर बिना सोचे कार्रवाई न करें।',
          'भुगतान से पहले हमेशा रुककर सोचें — क्या मैं सचमुच पैसा भेज रहा हूँ, और किसे?',
        ],
        pEn: [
          'Fraudsters often create haste through fear or greed — “pay immediately or else…”, or “scan this link/QR and get a reward”. Do not act on any unknown link, QR or call without thinking.',
          'Before paying, always pause and think — am I really sending money, and to whom?',
        ],
      },
      {
        hHi: 'बुनियादी सुरक्षा',
        hEn: 'Basic security',
        pHi: [
          'फ़ोन और UPI ऐप को लॉक रखें, ऐप आधिकारिक स्रोत से ही रखें, और किसी अनजान के कहने पर स्क्रीन-शेयरिंग ऐप कभी इंस्टॉल न करें। संदेह हो तो लेन-देन रोकें और आधिकारिक चैनल से जाँचें।',
          'यह लेख सामान्य जागरूकता के लिए है।',
        ],
        pEn: [
          'Keep your phone and UPI app locked, keep apps only from official sources, and never install a screen-sharing app on an unknown person’s instruction. When in doubt, stop the transaction and verify through an official channel.',
          'This article is for general awareness.',
        ],
      },
    ],
  },
  {
    slug: 'digital-payment-fraud-types',
    category: 'digital',
    titleHi: 'डिजिटल ठगी के आम तरीक़े: पहचानें और बचें',
    titleEn: 'Common Types of Digital Fraud: Recognise and Avoid',
    excerptHi: 'ठग लगातार नए तरीक़े ढूँढते हैं, पर उनके पीछे की चालें अक्सर एक जैसी होती हैं। आम पैटर्न जानना सबसे बड़ी सुरक्षा है।',
    excerptEn: 'Fraudsters keep finding new methods, but the tricks behind them are often the same. Knowing the common patterns is the best protection.',
    date: '2026-07-29',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'डिजिटल भुगतान बढ़ने के साथ ऑनलाइन ठगी भी बढ़ी है। ठग लगातार नए बहाने और तरीक़े गढ़ते हैं, पर ग़ौर करें तो उनके पीछे की चालें अक्सर कुछ ही जानी-पहचानी होती हैं।',
          'इन पैटर्न को पहचानना ही सबसे बड़ी सुरक्षा है।',
        ],
        pEn: [
          'As digital payments grow, online fraud has grown too. Fraudsters keep inventing new pretexts and methods, but look closely and the tricks behind them are often just a few familiar ones.',
          'Recognising these patterns is the greatest protection.',
        ],
      },
      {
        hHi: 'नक़ली मदद और नक़ली नंबर',
        hEn: 'Fake help and fake numbers',
        pHi: [
          'एक आम चाल है ख़ुद को बैंक, कंपनी या “कस्टमर केयर” बताना, और किसी समस्या को “ठीक करने” के बहाने आपसे OTP, PIN या स्क्रीन-शेयरिंग माँगना। याद रखें — असली बैंक कभी OTP/PIN नहीं माँगता। कस्टमर केयर नंबर हमेशा आधिकारिक ऐप या कार्ड के पीछे से लें, गूगल सर्च से नहीं।',
          'नक़ली नंबर अक्सर सर्च में ऊपर दिखते हैं।',
        ],
        pEn: [
          'A common trick is posing as your bank, a company or “customer care”, and, on the pretext of “fixing” a problem, asking for your OTP, PIN or screen-sharing. Remember — a real bank never asks for an OTP/PIN. Always take a customer-care number from the official app or the back of the card, not a Google search.',
          'Fake numbers often appear at the top of search results.',
        ],
      },
      {
        hHi: 'लालच और डर के जाल',
        hEn: 'Greed and fear traps',
        pHi: [
          'दूसरा आम पैटर्न है लालच — इनाम, लॉटरी, बड़ा रिटर्न, या सस्ती डील का लालच देकर लिंक पर क्लिक या भुगतान कराना। तीसरा है डर — “आपका खाता बंद हो जाएगा”, “KYC अपडेट करें वरना…”। दोनों का मक़सद है आपको सोचने का समय न देना।',
          'जो पेशकश बहुत अच्छी लगे, वह अक्सर झूठी होती है।',
        ],
        pEn: [
          'A second common pattern is greed — luring with a reward, lottery, big return or cheap deal to get you to click a link or pay. A third is fear — “your account will be closed”, “update KYC or else…”. Both aim to deny you time to think.',
          'An offer that looks too good is usually false.',
        ],
      },
      {
        hHi: 'सामान्य बचाव',
        hEn: 'General defence',
        pHi: [
          'किसी भी अनचाहे कॉल, संदेश या लिंक पर तुरंत भरोसा न करें; OTP/PIN कभी साझा न करें; और संदेह हो तो रुककर आधिकारिक चैनल से जाँचें। जल्दबाज़ी ठग का सबसे बड़ा हथियार है — इसलिए ठहरना ही आपका सबसे अच्छा बचाव है।',
          'यह लेख सामान्य जागरूकता के लिए है।',
        ],
        pEn: [
          'Do not instantly trust any unsolicited call, message or link; never share an OTP/PIN; and when in doubt, pause and verify through an official channel. Haste is a fraudster’s biggest weapon — so pausing is your best defence.',
          'This article is for general awareness.',
        ],
      },
    ],
  },
  {
    slug: 'online-shopping-safety',
    category: 'digital',
    titleHi: 'ऑनलाइन ख़रीदारी सुरक्षित कैसे करें',
    titleEn: 'How to Shop Online Safely',
    excerptHi: 'ऑनलाइन ख़रीदारी सुविधाजनक है, पर नक़ली वेबसाइट, नक़ली डील और असुरक्षित भुगतान से बचना ज़रूरी है। कुछ आसान आदतें।',
    excerptEn: 'Online shopping is convenient, but avoiding fake sites, fake deals and unsafe payments matters. A few easy habits.',
    date: '2026-07-29',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'ऑनलाइन ख़रीदारी ने ज़िंदगी आसान बना दी है, पर इसके साथ नक़ली वेबसाइट, धोखेबाज़ विक्रेता और असुरक्षित भुगतान जैसे जोखिम भी आते हैं। कुछ सरल आदतें आपको सुरक्षित रखती हैं।',
          'सतर्क रहकर ऑनलाइन ख़रीदारी का पूरा लाभ लिया जा सकता है।',
        ],
        pEn: [
          'Online shopping has made life easier, but it brings risks like fake websites, dishonest sellers and unsafe payments. A few simple habits keep you safe.',
          'With alertness, you can enjoy the full benefit of online shopping.',
        ],
      },
      {
        hHi: 'भरोसेमंद जगह से ख़रीदें',
        hEn: 'Buy from trustworthy places',
        pHi: [
          'जानी-मानी, प्रतिष्ठित वेबसाइट और ऐप से ही ख़रीदें। किसी अनजान लिंक, ख़ासकर सोशल मीडिया या संदेश में आए “भारी छूट” वाले लिंक, से सावधान रहें — नक़ली साइटें असली जैसी दिख सकती हैं।',
          'जो डील सच होने के लिए बहुत अच्छी लगे, वह अक्सर जाल होती है।',
        ],
        pEn: [
          'Buy only from well-known, reputable websites and apps. Be wary of unknown links, especially “huge discount” links arriving via social media or messages — fake sites can look just like the real ones.',
          'A deal that looks too good to be true is often a trap.',
        ],
      },
      {
        hHi: 'सुरक्षित भुगतान',
        hEn: 'Safe payment',
        pHi: [
          'भुगतान करते समय सुरक्षित, प्रतिष्ठित तरीक़ों का उपयोग करें, और अपने कार्ड या UPI की गोपनीय जानकारी किसी असुरक्षित जगह न डालें। जहाँ संभव हो, अनजान विक्रेताओं के लिए सुरक्षित विकल्प चुनें।',
          'भुगतान से पहले वेबसाइट का पता (URL) और असलियत जाँच लें।',
        ],
        pEn: [
          'When paying, use safe, reputable methods, and do not enter your card or UPI confidential details on any unsafe place. Where possible, choose safer options for unknown sellers.',
          'Before paying, check the website address (URL) and its authenticity.',
        ],
      },
      {
        hHi: 'रिकॉर्ड रखें',
        hEn: 'Keep records',
        pHi: [
          'ख़रीद के ऑर्डर, रसीद और पुष्टि के संदेश सँभालकर रखें, ताकि कोई गड़बड़ी हो तो सबूत हो। किसी भी समस्या पर आधिकारिक कस्टमर सपोर्ट से संपर्क करें, सर्च में मिले संदिग्ध नंबरों से नहीं।',
          'यह लेख सामान्य जागरूकता के लिए है।',
        ],
        pEn: [
          'Keep your order records, receipts and confirmation messages, so there is proof if something goes wrong. For any problem, contact official customer support, not suspicious numbers found in a search.',
          'This article is for general awareness.',
        ],
      },
    ],
  },
  {
    slug: 'mobile-banking-security',
    category: 'digital',
    titleHi: 'मोबाइल बैंकिंग सुरक्षा: फ़ोन में बैंक, ज़िम्मेदारी भी',
    titleEn: 'Mobile Banking Security: A Bank in Your Phone, and the Responsibility Too',
    excerptHi: 'अब बैंक जेब में है, जो बहुत सुविधाजनक है — पर इसका मतलब फ़ोन की सुरक्षा भी उतनी ही ज़रूरी। बुनियादी आदतें।',
    excerptEn: 'The bank is now in your pocket, which is very convenient — but it means your phone’s security matters just as much. The basic habits.',
    date: '2026-07-30',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'मोबाइल बैंकिंग ने बैंक को हमारी जेब में ला दिया है — भुगतान, बैलेंस, निवेश, सब कुछ चंद टैप में। यह बहुत सुविधाजनक है, पर इसका अर्थ यह भी है कि आपके फ़ोन की सुरक्षा अब आपके पैसे की सुरक्षा है।',
          'कुछ बुनियादी आदतें इसे सुरक्षित रखती हैं।',
        ],
        pEn: [
          'Mobile banking has brought the bank into our pocket — payments, balance, investments, all in a few taps. This is very convenient, but it also means your phone’s security is now your money’s security.',
          'A few basic habits keep it safe.',
        ],
      },
      {
        hHi: 'फ़ोन और ऐप को सुरक्षित रखें',
        hEn: 'Keep the phone and apps secure',
        pHi: [
          'फ़ोन पर एक मज़बूत लॉक (पिन/बायोमेट्रिक) रखें, और बैंकिंग व भुगतान ऐप पर भी अतिरिक्त सुरक्षा। ऐप हमेशा आधिकारिक स्टोर से ही डाउनलोड करें, और फ़ोन व ऐप को समय-समय पर अपडेट रखें।',
          'सार्वजनिक/असुरक्षित वाई-फ़ाई पर बैंकिंग करने से बचें।',
        ],
        pEn: [
          'Keep a strong lock (PIN/biometric) on the phone, and extra security on banking and payment apps too. Always download apps only from the official store, and keep the phone and apps updated.',
          'Avoid banking on public/unsecured Wi-Fi.',
        ],
      },
      {
        hHi: 'जानकारी साझा न करें',
        hEn: 'Do not share your details',
        pHi: [
          'अपने पासवर्ड, PIN और OTP किसी को न बताएँ — बैंक कभी इन्हें फ़ोन या संदेश पर नहीं माँगता। किसी अनजान के कहने पर कोई ऐप (ख़ासकर स्क्रीन-शेयरिंग वाली) इंस्टॉल न करें, क्योंकि इससे ठग आपकी स्क्रीन देख सकते हैं।',
          'संदिग्ध लिंक पर क्लिक करने से बचें।',
        ],
        pEn: [
          'Never tell anyone your passwords, PINs and OTPs — a bank never asks for these over a call or message. Do not install any app (especially screen-sharing ones) on an unknown person’s instruction, as it can let a fraudster see your screen.',
          'Avoid clicking suspicious links.',
        ],
      },
      {
        hHi: 'सतर्क नज़र',
        hEn: 'A watchful eye',
        pHi: [
          'अपने खातों और लेन-देन पर नियमित नज़र रखें, ताकि कोई अनजान गतिविधि जल्दी पकड़ में आए। कुछ भी संदिग्ध लगे तो तुरंत आधिकारिक चैनल से बैंक को सूचित करें और ज़रूरत हो तो सेवा रोकें।',
          'यह लेख सामान्य जागरूकता के लिए है।',
        ],
        pEn: [
          'Keep a regular eye on your accounts and transactions, so any unknown activity is caught early. If anything looks suspicious, inform the bank immediately through an official channel and, if needed, stop the service.',
          'This article is for general awareness.',
        ],
      },
    ],
  },
  {
    slug: 'compounding-start-early-hindi',
    category: 'nivesh',
    titleHi: 'जल्दी शुरू करने की अनुचित बढ़त: समय बनाम रक़म',
    titleEn: 'The Unfair Advantage of Starting Early: Time Beats Amount',
    excerptHi: 'निवेश में सबसे बड़ी ताक़त पैसे की रक़म नहीं, समय है। जल्दी शुरू करना एक ऐसी बढ़त है जो बाद में ख़रीदी नहीं जा सकती।',
    excerptEn: 'The greatest power in investing is not the amount but time. Starting early is an edge that cannot be bought back later.',
    date: '2026-07-30',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'युवावस्था में रिटायरमेंट या लंबी अवधि के लक्ष्य बहुत दूर लगते हैं, इसलिए निवेश टालना आसान होता है। पर निवेश की सबसे बड़ी ताक़त — समय — केवल युवाओं के पास होती है, और बाद में इसे ख़रीदा नहीं जा सकता।',
          'जल्दी शुरू करना ज़्यादा बचाने से भी बड़ी बढ़त है।',
        ],
        pEn: [
          'In youth, retirement or long-term goals seem far away, so postponing investment is easy. But investing’s greatest power — time — belongs only to the young, and cannot be bought back later.',
          'Starting early is a bigger edge than saving a lot.',
        ],
      },
      {
        hHi: 'समय क्यों रक़म से बड़ा',
        hEn: 'Why time beats amount',
        pHi: [
          'कंपाउंडिंग में पैसा, पैसे पर बढ़ता है, और इसकी असली ताक़त वर्षों की संख्या से आती है। बीस की उम्र में लगाई गई छोटी रक़म, दशकों तक बढ़ते-बढ़ते, चालीस की उम्र में लगाई बड़ी रक़म से आगे निकल सकती है।',
          'जल्दी शुरू करने वाला थोड़ा बचाकर भी, देर से शुरू करने वाले से आगे रह सकता है।',
        ],
        pEn: [
          'In compounding, money grows on money, and its real power comes from the number of years. A small amount invested in your twenties, snowballing for decades, can overtake a large amount invested in your forties.',
          'One who starts early, saving even a little, can stay ahead of one who starts late.',
        ],
      },
      {
        hHi: 'देर की क़ीमत',
        hEn: 'The cost of delay',
        pHi: [
          'हर साल की देरी सिर्फ़ शुरुआत नहीं टालती — वह सबसे क़ीमती शुरुआती वर्षों में से एक छीन लेती है, जब कंपाउंडिंग को बढ़ने का सबसे लंबा समय मिलता। इसलिए देर की क़ीमत अभी नहीं, बल्कि अंत में एक बड़ी छूटी हुई रक़म के रूप में चुकानी पड़ती है।',
          'यही कारण है कि “कल से शुरू करेंगे” सबसे महँगा वाक्य है।',
        ],
        pEn: [
          'Each year of delay does not just postpone the start — it takes away one of the most precious early years, when compounding has the longest runway. So the cost of delay is paid not now, but at the end, as a large amount of missing money.',
          'This is why “I’ll start tomorrow” is the most expensive sentence.',
        ],
      },
      {
        hHi: 'आश्वस्त करने वाला पहलू',
        hEn: 'The reassuring side',
        pHi: [
          'अच्छी ख़बर यह है कि चूँकि समय इतना काम करता है, शुरुआत के लिए बड़ी रक़म की ज़रूरत नहीं। जल्दी शुरू की गई छोटी, नियमित SIP भी दशकों में बड़ी बन सकती है। अगर आप युवा हैं, तो सबसे अच्छा क़दम है — अभी शुरू करें, भले छोटा।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'The good news is that because time does so much work, you do not need a large amount to begin. Even a small, regular SIP started early can grow big over decades. If you are young, the best move is to start now, even small.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'riders-in-insurance',
    category: 'bima',
    titleHi: 'बीमा राइडर: पॉलिसी में अतिरिक्त सुरक्षा के छोटे जोड़',
    titleEn: 'Insurance Riders: Small Add-Ons for Extra Protection',
    excerptHi: 'राइडर आपकी बीमा पॉलिसी में थोड़े ख़र्च पर अतिरिक्त सुरक्षा जोड़ते हैं। ये क्या हैं, और कौन-से उपयोगी हैं?',
    excerptEn: 'Riders add extra protection to your insurance policy for a small cost. What are they, and which are useful?',
    date: '2026-07-31',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बीमा ख़रीदते समय आपने “राइडर” शब्द सुना होगा। राइडर मूल पॉलिसी में जोड़े जाने वाले अतिरिक्त सुरक्षा-विकल्प हैं, जो आमतौर पर थोड़े अतिरिक्त प्रीमियम पर मिलते हैं।',
          'सही राइडर आपकी सुरक्षा को मज़बूत कर सकते हैं, पर हर राइडर सबके लिए ज़रूरी नहीं।',
        ],
        pEn: [
          'While buying insurance you may have heard the word “rider”. Riders are extra protection options added to a base policy, usually for a small additional premium.',
          'The right riders can strengthen your protection, but not every rider is necessary for everyone.',
        ],
      },
      {
        hHi: 'राइडर कैसे मदद करते हैं',
        hEn: 'How riders help',
        pHi: [
          'राइडर किसी ख़ास स्थिति के लिए अतिरिक्त कवर जोड़ते हैं, जिससे आपको उस स्थिति के लिए अलग पॉलिसी नहीं लेनी पड़ती। थोड़े प्रीमियम में बड़ी, केंद्रित सुरक्षा जोड़ना ही इनका फ़ायदा है।',
          'ये मूल पॉलिसी को आपकी ज़रूरत के अनुसार ढालने का एक तरीक़ा हैं।',
        ],
        pEn: [
          'Riders add extra cover for a specific situation, so you need not take a separate policy for it. Their benefit is adding large, focused protection for a small premium.',
          'They are a way to shape the base policy to your needs.',
        ],
      },
      {
        hHi: 'सोच-समझकर चुनें',
        hEn: 'Choose thoughtfully',
        pHi: [
          'राइडर तभी लें जब वे आपकी असली ज़रूरत से मेल खाएँ — सिर्फ़ इसलिए नहीं कि वे उपलब्ध हैं। हर राइडर की अपनी शर्तें, कवर और सीमाएँ होती हैं, जिन्हें ख़रीदने से पहले पढ़ना ज़रूरी है।',
          'बहुत सारे अनावश्यक राइडर जोड़ना प्रीमियम बढ़ाता है, बिना उतना लाभ दिए।',
        ],
        pEn: [
          'Take a rider only when it matches a real need of yours — not merely because it is available. Each rider has its own terms, cover and limits, which should be read before buying.',
          'Adding many unnecessary riders raises the premium without a matching benefit.',
        ],
      },
      {
        hHi: 'बुनियाद पहले',
        hEn: 'Foundation first',
        pHi: [
          'राइडर से पहले यह पक्का करें कि आपकी मूल पॉलिसी का कवर पर्याप्त है। राइडर एक उपयोगी जोड़ है, पर वह मज़बूत बुनियादी बीमा की जगह नहीं ले सकते। नवीनतम शर्तें और उपयुक्तता ख़रीदने से पहले जाँचें।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'Before riders, ensure your base policy’s cover is adequate. Riders are a useful add-on, but they cannot replace strong basic insurance. Check the latest terms and suitability before buying.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'emergency-fund-where-to-keep',
    category: 'bachat',
    titleHi: 'इमरजेंसी फंड कहाँ रखें: सुरक्षा और पहुँच सबसे ज़रूरी',
    titleEn: 'Where to Keep Your Emergency Fund: Safety and Access Come First',
    excerptHi: 'इमरजेंसी फंड का एक ही काम है — ज़रूरत के समय पूरा और तुरंत उपलब्ध होना। यही तय करता है कि इसे कहाँ रखें।',
    excerptEn: 'An emergency fund has one job — to be fully and instantly available when needed. That decides where to keep it.',
    date: '2026-07-31',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बहुत-से लोग इमरजेंसी फंड को लेकर उलझ जाते हैं कि इसे कहाँ रखें, क्योंकि वे इससे दो काम एक साथ चाहते हैं — सुरक्षा और अच्छा रिटर्न। पर इमरजेंसी फंड एक बीमा है, निवेश नहीं। इसका एक ही काम है: संकट के समय पूरा और तुरंत उपलब्ध होना।',
          'यह समझते ही जगह का चुनाव आसान हो जाता है।',
        ],
        pEn: [
          'Many people get confused about where to keep their emergency fund, because they want two things from it at once — safety and good return. But an emergency fund is insurance, not an investment. Its one job is to be fully and instantly available in a crisis.',
          'Once this is clear, choosing where to keep it becomes easy.',
        ],
      },
      {
        hHi: 'तीन बुनियादी शर्तें',
        hEn: 'Three basic requirements',
        pHi: [
          'पहली — सुरक्षा: जब ज़रूरत हो तब रक़म घटी हुई न हो, इसलिए इक्विटी जैसे उतार-चढ़ाव वाले विकल्प उपयुक्त नहीं। दूसरी — तरलता: पैसा एक-दो दिन में, बिना पेनल्टी, मिल जाए। तीसरी — थोड़ा ब्याज मिल जाए तो अच्छा, पर यह प्राथमिकता नहीं।',
          'एक साधारण बचत खाता या सुरक्षित, तरल विकल्प ये शर्तें पूरी करता है।',
        ],
        pEn: [
          'First — safety: the amount should not be reduced when you need it, so volatile options like equity do not suit. Second — liquidity: the money should be available in a day or two, without penalty. Third — a little interest is nice, but not the priority.',
          'A simple savings account or a safe, liquid option meets these requirements.',
        ],
      },
      {
        hHi: '“ज़्यादा रिटर्न” का लालच न करें',
        hEn: 'Don’t chase “higher returns”',
        pHi: [
          'इमरजेंसी फंड को ज़्यादा रिटर्न के लालच में जोखिम या लॉक-इन वाली जगह न रखें। जिस फंड को संकट के समय आपको घाटे में बेचना पड़े या जिसे निकालने में देर हो, वह ठीक उसी पल फ़ेल हो जाता है जिसके लिए वह बना था।',
          'थोड़ा-सा अतिरिक्त रिटर्न इस जोखिम के लायक़ नहीं।',
        ],
        pEn: [
          'Do not keep the emergency fund in a risky or lock-in place chasing higher returns. A fund you must sell at a loss in a crisis, or that is slow to withdraw, fails at the exact moment it existed for.',
          'The small extra return is not worth this risk.',
        ],
      },
      {
        hHi: 'अलग और सुरक्षित',
        hEn: 'Separate and safe',
        pHi: [
          'इमरजेंसी फंड को रोज़मर्रा के पैसे से अलग रखें, ताकि वह चुपचाप ख़र्च न हो जाए। इसे बनाएँ, नाम दें, और उम्मीद करें कि इसे छूना न पड़े। सबसे अच्छा इमरजेंसी फंड वही है जिसे आप लगभग भूल जाते हैं।',
          'यह लेख सामान्य जानकारी है।',
        ],
        pEn: [
          'Keep the emergency fund separate from everyday money, so it is not quietly spent. Build it, name it, and hope you never have to touch it. The best emergency fund is the one you almost forget you have.',
          'This article is general information.',
        ],
      },
    ],
  },
  {
    slug: 'advance-tax-basics',
    category: 'tax',
    titleHi: 'एडवांस टैक्स: कर को किश्तों में चुकाने की समझ',
    titleEn: 'Advance Tax: Understanding Paying Tax in Instalments',
    excerptHi: 'अगर आपकी कर देनदारी एक सीमा से ऊपर है, तो कर साल के अंत में नहीं, बल्कि किश्तों में देना होता है। किसे और क्यों?',
    excerptEn: 'If your tax liability crosses a limit, tax must be paid in instalments through the year, not at year-end. For whom, and why?',
    date: '2026-08-01',
    minutes: 4,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बहुत-से लोग सोचते हैं कि कर साल के अंत में, रिटर्न भरते समय ही देना होता है। पर अगर आपकी कुल कर देनदारी एक तय सीमा से ऊपर है, तो नियम के अनुसार कर को साल भर में किश्तों में चुकाना होता है — इसे एडवांस टैक्स कहते हैं।',
          'यह ख़ासकर उन लोगों के लिए मायने रखता है जिनकी आय पर पहले से पूरा कर नहीं कटता।',
        ],
        pEn: [
          'Many people think tax is paid only at year-end, while filing the return. But if your total tax liability crosses a set limit, the rules require paying tax in instalments through the year — this is called advance tax.',
          'It especially matters for those whose income does not already have full tax deducted.',
        ],
      },
      {
        hHi: 'किसे देना पड़ता है',
        hEn: 'Who has to pay it',
        pHi: [
          'यह आमतौर पर उन लोगों पर लागू होता है जिनकी कर देनदारी एक सीमा से अधिक है और जिनकी आय पर स्रोत पर पूरा कर (TDS) नहीं कटता — जैसे फ्रीलांसर, व्यवसायी, या जिनकी बड़ी आय ब्याज/पूँजीगत लाभ से हो। सिर्फ़ वेतन पाने वालों का कर अक्सर पहले ही कट जाता है, पर अतिरिक्त आय होने पर उन पर भी लागू हो सकता है।',
          'अपनी स्थिति समझना ज़रूरी है।',
        ],
        pEn: [
          'It usually applies to those whose tax liability crosses a limit and whose income does not have full tax deducted at source (TDS) — like freelancers, business owners, or those with large income from interest/capital gains. Salaried people often have tax already deducted, but with extra income it may apply to them too.',
          'Understanding your own situation is important.',
        ],
      },
      {
        hHi: 'समय पर देना ज़रूरी क्यों',
        hEn: 'Why paying on time matters',
        pHi: [
          'एडवांस टैक्स की किश्तें तय समय पर चुकानी होती हैं; देर या चूक होने पर अतिरिक्त ब्याज/शुल्क लग सकता है। इसलिए अपनी अनुमानित आय और कर का हिसाब पहले से रखना और समय पर भुगतान करना समझदारी है।',
          'रिकॉर्ड रखना गणना और रिटर्न, दोनों को आसान बनाता है।',
        ],
        pEn: [
          'Advance tax instalments must be paid by set dates; delay or default can attract extra interest/charges. So it is wise to estimate your income and tax in advance and pay on time.',
          'Keeping records makes both the calculation and the return easier.',
        ],
      },
      {
        hHi: 'संदेह हो तो सलाह लें',
        hEn: 'Seek advice if in doubt',
        pHi: [
          'एडवांस टैक्स के नियम, सीमाएँ और तारीख़ें बदल सकती हैं, और हर की स्थिति अलग होती है। इसलिए अगर आप पर यह लागू होता है, तो नवीनतम नियम जाँचें और ज़रूरत हो तो कर-विशेषज्ञ से सलाह लें।',
          'यह लेख सामान्य शैक्षिक जानकारी है, कर सलाह नहीं।',
        ],
        pEn: [
          'The rules, limits and dates for advance tax can change, and everyone’s situation differs. So if it applies to you, check the latest rules and consult a tax professional if needed.',
          'This article is general educational information, not tax advice.',
        ],
      },
    ],
  },
  {
    slug: 'why-not-endowment-plans',
    category: 'bima',
    titleHi: 'एंडोमेंट और मनी-बैक प्लान: सावधानी से समझें',
    titleEn: 'Endowment and Money-Back Plans: Understand Them Carefully',
    excerptHi: 'ये पारंपरिक बीमा प्लान “बीमा + बचत” का वादा करते हैं और भारत में बहुत बिकते हैं। इनके पीछे की सच्चाई क्या है।',
    excerptEn: 'These traditional plans promise “insurance + savings” and sell widely in India. What is the reality behind them.',
    date: '2026-08-01',
    minutes: 5,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में एंडोमेंट और मनी-बैक जैसे पारंपरिक बीमा प्लान बहुत बिकते हैं, क्योंकि वे “बीमा के साथ बचत/गारंटीड रिटर्न” का आकर्षक वादा करते हैं। इन्हें ख़रीदने से पहले इनकी असली प्रकृति समझना ज़रूरी है।',
          'ये मिश्रित उत्पाद हैं, और मिश्रण की अपनी क़ीमत होती है।',
        ],
        pEn: [
          'In India, traditional plans like endowment and money-back sell widely, because they make the attractive promise of “savings/guaranteed return along with insurance”. Before buying, it is important to understand their true nature.',
          'These are mixed products, and the mix has its own cost.',
        ],
      },
      {
        hHi: 'कवर और रिटर्न, दोनों साधारण',
        hEn: 'Both cover and return tend to be modest',
        pHi: [
          'ऐसे प्लान में अक्सर बीमा कवर आपकी असली ज़रूरत से कम होता है, और बचत हिस्से का रिटर्न भी आमतौर पर साधारण। यानी एक ही उत्पाद में न पर्याप्त सुरक्षा, न अच्छी वृद्धि — जबकि प्रीमियम बड़ा और अवधि लंबी।',
          'यही कारण है कि कई जानकार लोग “सुरक्षा” और “निवेश” को अलग रखने की सलाह देते हैं।',
        ],
        pEn: [
          'In such plans the insurance cover is often less than your real need, and the return on the savings part is usually modest too. That is, one product with neither adequate protection nor good growth — while the premium is large and the tenure long.',
          'This is why many knowledgeable people advise keeping “protection” and “investment” separate.',
        ],
      },
      {
        hHi: 'फिर भी कब उपयुक्त',
        hEn: 'When they may still suit',
        pHi: [
          'इसका मतलब यह नहीं कि ऐसे प्लान हर किसी के लिए ग़लत हैं। जिन्हें एक बहुत सुरक्षित, अनुशासित, गारंटीड-सा साधन चाहिए और जो कम रिटर्न स्वीकार कर सकते हैं, उनके लिए इनकी एक भूमिका हो सकती है। पर यह समझकर लें, बिकवाकर नहीं।',
          'लॉक-इन और बीच में बंद करने की शर्तें ज़रूर देखें।',
        ],
        pEn: [
          'This does not mean such plans are wrong for everyone. For those who want a very safe, disciplined, near-guaranteed vehicle and can accept a lower return, they can have a role. But take one by understanding it, not by being sold it.',
          'Do check the lock-in and the terms for stopping midway.',
        ],
      },
      {
        hHi: 'फ़ैसले से पहले तुलना करें',
        hEn: 'Compare before deciding',
        pHi: [
          'ख़रीदने से पहले सोचें — क्या एक सादा टर्म प्लान (सुरक्षा के लिए) और अलग निवेश (वृद्धि के लिए) आपके लक्ष्य को बेहतर पूरा करेगा? कवर, रिटर्न, लागत और अवधि की तुलना करें, फिर तय करें।',
          'यह लेख सामान्य जानकारी है, कोई उत्पाद-विशेष सलाह नहीं।',
        ],
        pEn: [
          'Before buying, ask — would a plain term plan (for protection) plus a separate investment (for growth) meet your goal better? Compare cover, return, cost and tenure, then decide.',
          'This article is general information, not product-specific advice.',
        ],
      },
    ],
  },
];
