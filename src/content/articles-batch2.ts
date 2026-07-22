import type { Article } from './articles';

/**
 * Profity.in — batch 2. Ten original bilingual (Hindi + English) personal-
 * finance guides and money stories, including a children's money-education
 * strand. Same editorial rules as batch 1: 100% original, educational only,
 * no tips, no schemes, everything under the site-wide disclaimer.
 */
export const ARTICLES_BATCH2: Article[] = [
  {
    slug: 'emergency-fund-kitna-chahiye',
    category: 'bachat',
    titleHi: 'इमरजेंसी फंड कितना होना चाहिए? तीन-छह महीने वाले नियम की असली गणित',
    titleEn: 'How Big Should Your Emergency Fund Be? The Real Math Behind the 3–6 Month Rule',
    excerptHi: 'हर किताब कहती है "तीन से छह महीने के खर्च" — पर किसके लिए तीन और किसके लिए छह? अपनी नौकरी, आमदनी और ज़िम्मेदारियों से अपना सही आँकड़ा निकालने का तरीक़ा।',
    excerptEn: 'Every book says "three to six months of expenses" — but who needs three, and who needs six? How to derive your own number from your job, income pattern and responsibilities.',
    date: '2026-07-14',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'पैसे की दुनिया में सबसे ज़्यादा दोहराई जाने वाली सलाह शायद यही है: "तीन से छह महीने के खर्च के बराबर इमरजेंसी फंड रखिए।" सलाह अच्छी है, पर अधूरी — तीन किसके लिए, छह किसके लिए, और खर्च का मतलब तनख्वाह है या कुछ और? असल में सही आँकड़ा हर परिवार का अपना होता है, और वह आपकी आमदनी के स्वभाव पर निर्भर करता है, किसी सार्वभौमिक नियम पर नहीं।',
          'इमरजेंसी फंड का काम एक ही है: संकट को कर्ज़ बनने से रोकना। नौकरी छूटना, अस्पताल का बिल, गाड़ी की बड़ी मरम्मत — ये घटनाएँ या तो आपकी बचत से निपटती हैं, या क्रेडिट कार्ड और पर्सनल लोन से। फंड का आकार उन्हीं संकटों से तय होना चाहिए जो आपकी ज़िंदगी में सचमुच आ सकते हैं।',
        ],
        pEn: [
          'The most repeated advice in personal finance is probably this: "keep an emergency fund worth three to six months of expenses." Good advice — but incomplete. Three for whom, six for whom, and does "expenses" mean your salary or something else? In truth the right number is personal, and it depends on the nature of your income, not on a universal rule.',
          'An emergency fund has exactly one job: to stop a crisis from turning into debt. A lost job, a hospital bill, a major car repair — these events are settled either by your savings or by credit cards and personal loans. The fund should be sized against the crises your life can actually produce.',
        ],
      },
      {
        hHi: 'खर्च गिनिए, तनख्वाह नहीं', hEn: 'Count expenses, not salary',
        pHi: [
          'पहला सुधार: महीने के ज़रूरी खर्च गिनिए, तनख्वाह नहीं। किराया या EMI, राशन, बिजली-पानी, स्कूल फीस, बीमा प्रीमियम, आने-जाने का खर्च — घर चलाने की न्यूनतम रक़म आम तौर पर आमदनी से काफ़ी कम होती है। जो परिवार अच्छी तनख्वाह पर भी उसका साठ प्रतिशत ही खर्च करता है, उसे "महीनों" के हिसाब से छोटा फंड चाहिए।',
          'यह आँकड़ा काग़ज़ पर लिखिए, अंदाज़े से नहीं — बैंक स्टेटमेंट से। ज़्यादातर लोग पहली बार यह हिसाब करके सुखद आश्चर्य में पड़ते हैं: ज़रूरी खर्च सोच से कम निकलता है, और लक्ष्य अचानक पहुँच के भीतर दिखने लगता है।',
        ],
        pEn: [
          'The first refinement: count essential monthly expenses, not salary. Rent or EMI, groceries, utilities, school fees, insurance premiums, transport — the minimum cost of running your household is usually well below your income. A family that earns comfortably but lives on sixty percent of it needs a much smaller fund in "months" terms.',
          'Write that number down from your bank statement, not from a guess. Most people doing this exercise for the first time are pleasantly surprised: essential spending turns out lower than imagined, and the target suddenly looks reachable.',
        ],
      },
      {
        hHi: 'फिर आमदनी की नाज़ुकता से गुणा कीजिए', hEn: 'Then multiply by how fragile your income is',
        pHi: [
          'अब गुणक चुनिए। दो कमाने वाले, पक्की सरकारी या स्थिर नौकरी, माँग वाला हुनर — तीन महीने काफ़ी हैं, क्योंकि दोनों आमदनियाँ एक साथ बंद होने की संभावना कम है। फ्रीलांसर, कमीशन पर काम करने वाले, अकेले कमाने वाले जिन पर माता-पिता और बच्चे निर्भर हैं, या ऐसे उद्योग में काम करने वाले जहाँ नई नौकरी में महीनों लगते हैं — उनके लिए छह महीने या उससे ज़्यादा समझदारी है।',
          'हर नाज़ुक कड़ी पर एक-दो महीने जोड़िए: अनियमित आमदनी, एक ही स्रोत, निर्भर परिजन, पुरानी गाड़ी या पुराना मकान, सेहत की चिंताएँ। हर मज़बूत कड़ी पर भरोसा घटाइए: कमाता जीवनसाथी, नोटिस-पीरियड और सेवरेंस के अधिकार, अच्छा हेल्थ इंश्योरेंस। इस ईमानदार ऑडिट का नतीजा ही आपका आँकड़ा है — और वह पड़ोसी के आँकड़े से मेल नहीं खाएगा।',
        ],
        pEn: [
          'Now pick the multiplier. Two earners, a stable or government job, in-demand skills — three months is genuinely enough, because both incomes rarely stop at once. Freelancers, commission earners, single earners with parents and children depending on them, or anyone in an industry where the next job takes months — six months or more is the wise zone.',
          'Add a month or two for every fragile link: irregular income, a single source, dependants, an old car or old house, health worries. Subtract confidence for every strong link: an earning spouse, notice-period and severance rights, good health insurance. The output of this honest audit is your number — and it will not match your neighbour’s.',
        ],
      },
      {
        hHi: 'फंड कहाँ रखें और कैसे बनाएँ', hEn: 'Where to keep it, how to build it',
        pHi: [
          'इमरजेंसी फंड निवेश नहीं, बीमा है। उसकी जगह है अलग बचत खाता या तुरंत तोड़ी जा सकने वाली FD — तुरंत उपलब्ध, खर्च वाले खाते से अलग, ताकि रोज़ की नज़र में न रहे। उसे शेयर या इक्विटी फंड में मत रखिए: जो मंदी आपकी नौकरी लेती है, वही आपके निवेश का दाम भी गिराती है — ठीक उसी महीने जब पैसा चाहिए।',
          'और अगर लक्ष्य दूर लगे, तो पहला पड़ाव रखिए: एक महीने का ज़रूरी खर्च, हर तनख्वाह के अगले दिन अपने-आप ट्रांसफर होने वाली रक़म से। एक महीना भी ज़्यादातर आपात स्थितियों को कर्ज़ से नक़द की घटना में बदल देता है। फंड इस्तेमाल हो जाए तो वह असफलता नहीं — वही तो उसका काम था; बस अगली तनख्वाह से पहले उसे दोबारा भरना शुरू कीजिए।',
        ],
        pEn: [
          'An emergency fund is insurance, not an investment. Its home is a separate savings account or an instantly breakable FD — immediately available, away from your spending account so it stays out of daily sight. Do not park it in shares or equity funds: the same downturn that takes your job also marks down your investments, in exactly the month you need the money.',
          'If the target feels far, set the first milestone: one month of essentials, built by an automatic transfer the day after every salary. Even one month converts most emergencies from debt events into cash events. And if you ever spend from the fund, that is not failure — that was its job; simply start refilling it before anything else.',
        ],
      },
    ],
  },
  {
    slug: 'sip-band-karne-ki-galti',
    category: 'nivesh',
    titleHi: 'बाज़ार गिरते ही SIP बंद करना: सबसे महँगी ग़लती की कहानी',
    titleEn: 'Stopping Your SIP When Markets Fall: The Costliest Mistake, Explained',
    excerptHi: 'हर गिरावट में लाखों SIP रुक जाती हैं — ठीक उस महीने, जब वही SIP सबसे सस्ते दाम पर यूनिट ख़रीद रही होती है। गिरावट का असली गणित, बिना किसी भविष्यवाणी के।',
    excerptEn: 'Every market fall stops lakhs of SIPs — in exactly the months those SIPs are buying units at their cheapest. The real arithmetic of downturns, with no predictions attached.',
    date: '2026-07-15',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'हर बड़ी गिरावट के आँकड़ों में एक ही पैटर्न दोहराता है: बाज़ार जितना गिरता है, उतनी ही SIP बंद होती हैं। भावना समझ में आती है — हर महीने पैसा डालो और अगले महीने उसकी क़ीमत कम दिखे, तो लगता है नल बंद कर देना ही समझदारी है। पर SIP का पूरा तर्क ही इसी घड़ी के लिए बना है, और नल बंद करना उस तर्क को ठीक उलटी जगह काटता है।',
          'यह लेख कोई भविष्यवाणी नहीं करता — बाज़ार कब गिरेगा, कब उठेगा, कोई नहीं जानता। यह सिर्फ़ वह गणित दिखाता है जो गिरावट के महीनों में चुपचाप काम करता है, और जिसे रोकने की क़ीमत निवेशक बरसों बाद चुकाता है।',
        ],
        pEn: [
          'Every major fall repeats the same pattern in the data: the deeper the market drops, the more SIPs get cancelled. The emotion is understandable — put money in every month and watch it show a smaller value the next, and shutting the tap feels like wisdom. But the entire logic of a SIP was built for precisely this moment, and shutting the tap cuts that logic in exactly the wrong place.',
          'This article makes no predictions — nobody knows when markets fall or recover. It only shows the arithmetic that works silently through the down months, and the price of interrupting it that investors pay years later.',
        ],
      },
      {
        hHi: 'गिरावट में SIP सस्ता ख़रीदती है', hEn: 'In a fall, your SIP buys cheap',
        pHi: [
          'SIP की एक किस्त हर महीने उतने ही रुपये की यूनिट ख़रीदती है — दाम ऊँचा हो तो कम यूनिट, दाम गिरा हो तो ज़्यादा। यानी गिरावट के महीने वे इकलौते महीने हैं जब वही किस्त ज़्यादा यूनिट घर लाती है। इसे ही "रुपी कॉस्ट एवरेजिंग" कहते हैं: आपकी औसत ख़रीद-क़ीमत अपने-आप घटती है, बिना किसी भविष्यवाणी के।',
          'अब उलटा सोचिए: जो निवेशक गिरावट में SIP रोकता है, वह सिर्फ़ महँगे महीनों में ख़रीदता है और सस्ते महीनों में बाहर बैठता है। और जो गिरावट के बाद "माहौल ठीक होने" का इंतज़ार करता है, वह अक्सर उछाल के शुरुआती, सबसे तेज़ दिन चूक जाता है — बाज़ार के इतिहास में रिकवरी के सबसे बड़े दिन प्रायः सबसे बुरे दिनों के आसपास ही छिपे होते हैं।',
        ],
        pEn: [
          'One SIP instalment buys units worth the same rupees every month — fewer units when prices are high, more when prices have fallen. Which means the down months are the only months when that same instalment brings home more units. This is rupee-cost averaging: your average purchase price falls automatically, with no forecasting required.',
          'Now reverse it: the investor who pauses a SIP in a fall buys only in the expensive months and sits out the cheap ones. And the one who waits for "things to feel better" after a crash usually misses the earliest, fastest days of the rebound — market history keeps hiding its biggest recovery days right next to its worst ones.',
        ],
      },
      {
        hHi: 'डर के महीनों के लिए तीन इंतज़ाम', hEn: 'Three arrangements for the scary months',
        pHi: [
          'पहला: SIP सिर्फ़ उसी पैसे से कीजिए जिसकी ज़रूरत कम-से-कम पाँच-सात साल नहीं है, और इमरजेंसी फंड अलग रखिए — तब गिरावट में बेचने की मजबूरी ही नहीं बनती। दूसरा: पोर्टफोलियो देखने की आदत तय कीजिए — रोज़ नहीं, हफ़्ते में नहीं; तिमाही में एक बार काफ़ी है। लाल आँकड़े रोज़ देखने से निर्णय भावना करने लगती है, गणित नहीं।',
          'तीसरा: गिरावट से पहले ही अपने-आप से लिखित वादा कीजिए — "बाज़ार जितना भी गिरे, मेरी SIP चलती रहेगी; रोकने का फ़ैसला मैं गिरावट के महीने में कभी नहीं लूँगा।" शांति के समय लिया गया निर्णय तूफ़ान के समय लिए गए निर्णय से लगभग हमेशा बेहतर होता है। म्यूचुअल फंड बाज़ार-जोखिम के अधीन हैं — पर उस जोखिम की सबसे बड़ी क़ीमत प्रायः वही चुकाता है, जो बीच रास्ते में उतर जाता है।',
        ],
        pEn: [
          'First: run SIPs only with money you will not need for at least five to seven years, and keep the emergency fund separate — then a fall never forces you to sell. Second: fix a portfolio-checking habit — not daily, not weekly; once a quarter is plenty. Watching red numbers daily hands the decision to emotion instead of arithmetic.',
          'Third: make yourself a written promise before the next fall — "however far the market drops, my SIP continues; I will never make the stopping decision during a down month." Decisions made in calm weather almost always beat decisions made in the storm. Mutual funds are subject to market risk — but the biggest price of that risk is usually paid by the passenger who gets off mid-journey.',
        ],
      },
    ],
  },
  {
    slug: 'bacchon-ko-paise-ki-samajh',
    category: 'bachat',
    titleHi: 'बच्चों को पैसे की समझ कैसे दें: तीन गुल्लक वाला तरीक़ा',
    titleEn: 'Teaching Children About Money: The Three-Piggy-Bank Method',
    excerptHi: 'पैसे की आदतें पहली तनख्वाह से नहीं, बचपन की रसोई-मेज़ से बनती हैं। जेब-ख़र्च, इंतज़ार की ताक़त और छोटी ग़लतियों की सस्ती पाठशाला — माता-पिता के लिए व्यावहारिक गाइड।',
    excerptEn: 'Money habits are formed at the childhood dinner table, not at the first salary. Pocket money, the power of waiting, and the cheap school of small mistakes — a practical guide for parents.',
    date: '2026-07-16',
    minutes: 8,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'जब तक पहली तनख्वाह आती है, पैसे का स्वभाव लगभग बन चुका होता है। शोध बार-बार यही कहता है: खर्च, बचत और इंतज़ार की बुनियादी आदतें बचपन में पड़ती हैं — स्कूल के किसी विषय से नहीं, घर की रोज़मर्रा की बातों से। यानी ज़्यादातर लोगों की ज़िंदगी का सबसे असरदार "फाइनेंस टीचर" कोई प्रोफ़ेसर नहीं, उनके माता-पिता होते हैं — अक्सर बिना जाने।',
          'अच्छी ख़बर यह है कि बच्चों को पैसे की शिक्षा देने के लिए न स्प्रेडशीट चाहिए, न लेक्चर। चाहिए तीन चीज़ें: पैसा दिखता रहे, छोटी रक़म सचमुच बच्चे की अपनी हो, और छोटी ग़लतियाँ तब हों जब उनकी क़ीमत टॉफ़ी में चुकती है, तनख्वाह में नहीं।',
        ],
        pEn: [
          'By the time the first salary arrives, a person’s money nature is largely set. Research keeps saying the same thing: the core habits of spending, saving and waiting are formed in childhood — not by any school subject, but by everyday conversations at home. Which means most people’s most influential finance teacher is not a professor but their parents — usually without knowing it.',
          'The good news: teaching children about money needs neither spreadsheets nor lectures. It needs three things: money must stay visible, small amounts must genuinely belong to the child, and small mistakes must happen while their price is paid in sweets, not salaries.',
        ],
      },
      {
        hHi: 'पैसे को फिर दिखने लायक़ बनाइए', hEn: 'Make money visible again',
        pHi: [
          'एक पीढ़ी पहले बच्चे हर ख़रीद पर नोट और सिक्के हाथ बदलते देखते थे। आज वे सिर्फ़ फ़ोन की "बीप" सुनते हैं — पैसा ठीक तब अदृश्य हो गया जब छोटी आँखें सबसे ग़ौर से देख रही थीं। इसका सबसे सरल इलाज है बोलकर दिखाना: "यह दुकान वही चावल महँगा दे रही है, इसलिए हम दूसरी से लेंगे", "इस महीने हम बाहर खाना कम करेंगे, क्योंकि हम यात्रा के लिए बचा रहे हैं।" ये वाक्य मुफ़्त हैं, और चुपचाप सिखाते हैं कि पैसा सीमित है, उसकी तुलना होती है, और वह चुना जाता है।',
          'रक़म से ज़्यादा असर चुनाव दिखाने का होता है। जो बच्चा माँ-बाप को दो चीज़ों में से एक चुनते देखता है, वह ज़िंदगी का सबसे बुनियादी आर्थिक सच सीख लेता है: बड़े भी सब कुछ नहीं ले सकते — प्राथमिकता तय करनी पड़ती है।',
        ],
        pEn: [
          'A generation ago children watched notes and coins change hands at every purchase. Today they only hear the phone beep — money became invisible exactly when young eyes were watching hardest. The simplest cure is narrating the invisible: "this shop wants more for the same rice, so we’re buying from the other one," "we’re eating out less this month because we’re saving for the trip." Those sentences cost nothing, and they quietly teach that money is finite, compared, and chosen.',
          'Showing the choice matters more than the amount. A child who watches parents pick one of two options learns the most basic economic truth of life: even adults cannot have everything — priorities must be set.',
        ],
      },
      {
        hHi: 'तीन गुल्लक: ख़र्च, बचत, नेकी', hEn: 'Three piggy banks: spend, save, share',
        pHi: [
          'नियमित जेब-ख़र्च — चाहे कितना भी छोटा — कभी-कभार मिलने वाली बड़ी रक़मों से बेहतर काम करता है, क्योंकि नियमितता ही योजना सिखाती है। सबसे कारगर ढाँचा तीन गुल्लक का है: "ख़र्च" वाली गुल्लक आज की छोटी ख़ुशियाँ ख़रीदती है; "बचत" वाली सिखाती है कि बड़ी चीज़ इंतज़ार से मिलती है; "नेकी" वाली सिखाती है कि देना भी पैसे का एक सामान्य काम है — सदक़ा, मंदिर-मस्जिद-गुरुद्वारे की पेटी, किसी ज़रूरतमंद की मदद।',
          'असली अनुशासन बच्चे के लिए नहीं, माता-पिता के लिए है: जब ख़र्च वाली गुल्लक ख़ाली हो और खिलौना पुकार रहा हो, तो जवाब "नहीं" ही रहे। ख़ाली गुल्लक से बच्चे को बचा लेना ठीक एक ही सबक़ देता है — कि बजट नाटक है, ऊपर से कोई न कोई भर ही देगा। आठ साल की उम्र में ख़ाली गुल्लक की हल्की चुभन, ज़िंदगी की सबसे सस्ती वित्तीय शिक्षा है।',
        ],
        pEn: [
          'Regular pocket money — however small — works better than occasional large gifts, because regularity is what teaches planning. The most effective structure is three piggy banks: the "spend" bank buys today’s small joys; the "save" bank teaches that bigger things come by waiting; the "share" bank plants giving as a normal use of money — charity, the donation box, helping someone in need.',
          'The real discipline is for the parents, not the child: when the spend bank is empty and the toy is calling, the answer stays no. Rescuing a child from an empty piggy bank teaches exactly one lesson — that budgets are theatre, someone will always top you up. The mild sting of an empty bank at age eight is the cheapest financial education life will ever offer.',
        ],
      },
      {
        hHi: 'इंतज़ार को खेल बनाइए, और किशोरों से सच बोलिए', hEn: 'Turn waiting into a game, and be honest with teenagers',
        pHi: [
          'इंतज़ार करने की ताक़त — बड़े इनाम के लिए छोटे लालच को टालना — बचपन की उन गिनी-चुनी चीज़ों में है जो आगे की ज़िंदगी की भविष्यवाणी करती हैं; और यह ताक़त अभ्यास से बढ़ती है। बच्चे का अपना चुना लक्ष्य (साइकिल, क्रिकेट किट), गुल्लक पर चिपकी उसकी तस्वीर, और दीवार पर बढ़ती लकीर — इंतज़ार को वंचना नहीं, फिनिश-लाइन वाला खेल बना देते हैं। चाहें तो "मैचिंग" जोड़िए: "तुम जितना जोड़ोगे, हम उसका आधा और मिलाएँगे" — जिसने अपने सब्र को अपनी हथेली में बढ़ता देख लिया, उसने चक्रवृद्धि का पहला पाठ बिना फ़ॉर्मूले के पढ़ लिया।',
          'किशोर होते-होते पाठ्यक्रम बदलता है: अपना बैंक खाता, महीने का अपना बजट, पहली कमाई। हर सौंपी हुई ज़िम्मेदारी में ग़लतियाँ होंगी — वही तो उद्देश्य है। और सबसे ताक़तवर चीज़ है घर के पैसों के बारे में उम्र-अनुसार ईमानदारी: चीज़ों की क़ीमत क्या है, किस चीज़ के लिए बचत चल रही है, माँ-पिता ने अपनी उम्र में कौन-सी ग़लती की थी। पैसे पर चुप्पी बच्चों को सिखाती है कि पैसा या तो शर्म की चीज़ है या जादू की; पैसे पर बातचीत सिखाती है कि वह एक औज़ार है — जिसे वे डर से नहीं, भरोसे से उठाएँगे।',
        ],
        pEn: [
          'The capacity to wait — postponing a small temptation for a bigger reward — is one of the few childhood traits that predicts later life outcomes, and it grows with practice. A goal the child chose personally (a bicycle, a cricket kit), its picture stuck on the piggy bank, a progress line rising on the wall — these turn waiting from deprivation into a game with a finish line. Add matching if you like: "for every rupee you save, we add half" — a child who has watched their patience being multiplied has learned the first lesson of compounding without a single formula.',
          'By the teenage years the syllabus upgrades: their own bank account, a monthly budget handed over wholesale, first earnings. Every transferred responsibility will produce mistakes — that is the point. And the most powerful tool of all is age-appropriate honesty about the family’s own money: what things cost, what is being saved for, what mistakes the parents made at their age. Money silence teaches children that money is shameful or magical; money conversation teaches them it is a tool — one they will pick up with confidence, not fear.',
        ],
      },
    ],
  },
  {
    slug: 'chaiwale-ki-kahani-compounding',
    category: 'nivesh',
    titleHi: 'चायवाले की कहानी: तीस साल, एक ठेला, और चक्रवृद्धि का चुपचाप जादू',
    titleEn: 'The Chaiwala’s Story: Thirty Years, One Stall, and the Quiet Magic of Compounding',
    excerptHi: 'न लॉटरी, न विरासत, न कोई टिप। एक साधारण चाय ठेले वाले ने साधारण आमदनी से आज़ादी कैसे ख़रीदी — धीरे-धीरे अमीर होने की बे-रौनक़ मशीन की सच्ची-सी कहानी।',
    excerptEn: 'No lottery, no inheritance, no stock tip. How an ordinary tea-stall owner bought his freedom on an ordinary income — a true-to-life story about the unglamorous machine of getting wealthy slowly.',
    date: '2026-07-17',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'हर मोहल्ले में इस आदमी का कोई-न-कोई रूप होता है, पर लोग वक़्त रहते उस पर ध्यान नहीं देते। हमारे मोहल्ले वाला चाय बेचता था। अट्ठाईस साल एक ही नुक्कड़, वही केतली, वही काँच के गिलास, दाम हमेशा बड़े कैफ़े से कम। जब वह पचपन की उम्र में ठेला भतीजे को सौंपकर "रिटायर" हुआ, तो गली का अंदाज़ा था — कोई ज़मीन बिकी होगी, कोई लॉटरी लगी होगी। सच इससे कहीं अजीब था: गणित, तीस साल तक दोहराया गया।',
          'यह कहानी कई सच्चे, साधारण लोगों का मिला-जुला चित्र है — नाम बदले हुए, ढाँचा वही। इसे सुनाने लायक़ इसलिए है कि अमीरी के बारे में लोकप्रिय संस्कृति जो कुछ कहती है, वह प्रतिभा और क़िस्मत की कहानियाँ हैं; जबकि जो सचमुच काम करता है, वह लगभग पूरा-का-पूरा इस कहानी में है। यह निवेश-सलाह नहीं — एक मशीन का विवरण है।',
        ],
        pEn: [
          'Every neighbourhood has a version of this man, though people rarely notice him in time. Ours sold tea. Twenty-eight years on the same corner, the same kettle, the same glass tumblers, prices always below the fancy cafés. When he handed the stall to his nephew at fifty-five and "retired", the lane’s guess was a land sale or a lottery. The truth was stranger: arithmetic, repeated for thirty years.',
          'This story is a composite of real, ordinary people — names changed, structure intact. It is worth telling because what popular culture says about wealth is stories of brilliance and luck, while what actually works is almost entirely inside this story. It is not investment advice — it is the description of a machine.',
        ],
      },
      {
        hHi: 'मशीन: फ़ासला, अपने-आप', hEn: 'The machine: a gap, automated',
        pHi: [
          'उसके तरीक़े में दो पुर्ज़े थे। पहला: वह अपनी हैसियत से जान-बूझकर नीचे जीता था — कंजूसी से नहीं, फ़ैसले से। छोटा पक्का घर जो धीरे-धीरे अपना हो गया, साइकिल से स्कूटर तक का सफ़र दस साल में, त्योहार असली पर सादे। ठेले की कमाई का लगभग आधा हर महीने बच जाता था। दूसरा पुर्ज़ा — और यही वह हिस्सा है जो लोग छोड़ देते हैं: बचत कभी उसकी जेब या अलमारी में नहीं रुकती थी। महीने का हिसाब होते ही तय रक़म अपने-आप वहाँ चली जाती थी जहाँ उसने एक बार तय कर दिया था — RD और PPF से शुरुआत, फिर बरसों बाद बैंक वाले बाबू की समझाई इंडेक्स-जैसी सीधी-सादी SIP। उसने कभी कोई शेयर नहीं चुना। कहता था, शेयर चुनना उनका काम है जिनके पास ग़लत होने का वक़्त है।',
          'जब बाज़ार गिरते थे — और तीस साल में कई बार गिरे — वह वही करता था जो पैसे की दुनिया में सबसे कठिन है: कुछ नहीं। उसकी किस्त सबसे बुरे महीनों में भी वैसे ही जाती रही जैसे सबसे अच्छे महीनों में। बाद में वह उन महीनों को "सेल के दाम" कहता था। कहता — कमाल मेरी समझ में नहीं, इंतज़ाम में था: हर महीने कोई फ़ैसला ही नहीं लेना था, तो हर महीने ग़लत फ़ैसले का मौक़ा भी नहीं था।',
        ],
        pEn: [
          'His method had two moving parts. First: he deliberately lived below his means — not out of miserliness, but decision. A small house that slowly became his own, a bicycle upgraded to a scooter across a decade, festivals real but simple. Roughly half the stall’s earnings survived each month. The second part — the one people skip: the savings never rested in his pocket or cupboard. The moment the month’s accounts were done, a fixed amount moved automatically to where he had decided once — an RD and PPF at first, then, years later, a plain index-style SIP a bank clerk explained. He never picked a stock. Picking stocks, he said, was for people with time to be wrong.',
          'When markets fell — and they fell several times in thirty years — he did the hardest thing in finance: nothing. His instalment went through in the worst months exactly as in the best. Later he called those months "sale prices". The trick, he insisted, was never his intelligence but his arrangement: no decision was required monthly, so no decision could be wrong monthly.',
        ],
      },
      {
        hHi: 'क़ीमत क्या चुकाई, और क्या नहीं', hEn: 'What it cost him — and what it didn’t',
        pHi: [
          'ईमानदारी का तक़ाज़ा है कि क़ीमत भी मेज़ पर रखी जाए। दशकों तक वह चमकती मोटरसाइकिलों के पास से साइकिल पर गुज़रा, और कभी-कभी यह चुभता था। रिश्तेदार बड़े जश्न करते रहे, वह चुपचाप हिसाब लिखता रहा। बाहर से देखने पर वह बरसों तक बस "कम कामयाब" आदमी था। पर खाते की दूसरी तरफ़ चुपचाप जुड़ता रहा: कोई कर्ज़ नहीं, तो ब्याज की शक्ल में उसकी ज़िंदगी से कुछ बहता नहीं था; कोई आपात-घबराहट नहीं, क्योंकि अलग रखा फंड झटके सोख लेता था।',
          'और लगभग बीसवें साल के आसपास वह मोड़ आया जिसके लिए चक्रवृद्धि बदनाम है: निवेश की सालाना बढ़त ठेले की सालाना कमाई के बराबर पहुँचने लगी। उसने इसे अपने अंदाज़ में कहा — "अब चाय मैं अकेला नहीं बनाता; पैसा भी केतली चढ़ाने लगा है।"',
        ],
        pEn: [
          'Honesty demands the costs go on the table too. For decades he cycled past gleaming motorcycles, and sometimes it stung. Relatives threw grand celebrations while he quietly wrote his accounts. From outside, for years, he was simply the less successful man. But the ledger’s other side kept adding up silently: no debt, so nothing flowed out of his life as interest; no panic in emergencies, because the separate fund absorbed the shocks.',
          'And somewhere around year twenty came the turn compounding is notorious for: the investments’ annual growth began matching the stall’s annual earnings. He put it his own way — "I no longer make the tea alone; the money has started boiling its own kettle."',
        ],
      },
      {
        hHi: 'कहानी का असली सबक़', hEn: 'The real lesson of the story',
        pHi: [
          'पचपन पर वह किसी महल में नहीं गया। वही घर, आँगन की तुलसी, पोते-पोतियाँ, और हफ़्ते में दो सुबह नुक्कड़ पर नए लड़कों को मुफ़्त में चाय बनाना सिखाना। दौलत कभी मक़सद थी ही नहीं। मक़सद था वह आज़ादी कि अब कोई उससे कुछ भी ज़बरदस्ती नहीं करा सकता — हिसाब की कॉपी जब काफ़ी मोटी हो जाए, तो असल में वही ख़रीदी जाती है।',
          'कहानी का बेचैन करने वाला, और आज़ाद करने वाला सबक़: उसका रास्ता उतनी ही आमदनी वाले बहुत सारे लोगों के लिए खुला था, जो आख़िर में सिर्फ़ पुरानी EMI और नई इच्छाएँ लेकर बैठे रहे। तरीक़ा एक वाक्य में समा जाता है — कमाई से कम ख़र्च करो, फ़र्क़ को अपने-आप सादा-सीधा निवेश होने दो, बीच में कभी मत रोको, दशकों रुको। रुकावट कभी समझ की नहीं थी। रुकावट इतनी देर तक "साधारण" दिखने की हिम्मत की थी, जितनी देर में आदमी आज़ाद हो जाता है।',
        ],
        pEn: [
          'At fifty-five he moved into no mansion. The same house, the tulsi in the courtyard, the grandchildren, and two mornings a week teaching the new boys at the corner to make tea for nothing. Wealth was never the point. The point was the freedom that nobody could make him do anything, ever again — which is what the account book actually purchases once it grows thick enough.',
          'The story’s uncomfortable, liberating lesson: his path was open to a great many people who earned what he earned and ended up holding only old EMIs and new wishes. The method fits in one sentence — spend less than you earn, let the difference become plain automated investing, never interrupt it, wait decades. The barrier was never comprehension. It was the courage to look ordinary for as long as it takes a man to become free.',
        ],
      },
    ],
  },
  {
    slug: 'upi-fraud-se-bachav',
    category: 'digital',
    titleHi: 'UPI ठगी के पाँच नए तरीक़े — और तीन सवाल जो हर ठग को हरा देते हैं',
    titleEn: 'Five Modern UPI Scams — and the Three Questions That Defeat Every Fraudster',
    excerptHi: '"पैसा पाने के लिए PIN डालिए" से लेकर नक़ली कस्टमर-केयर और स्क्रीन-शेयर ऐप तक — ठगी के ताज़ा पैटर्न, उनके पीछे की मनोविज्ञान, और बचाव की सीधी ढाल।',
    excerptEn: 'From "enter your PIN to receive money" to fake customer care and screen-share apps — the current fraud patterns, the psychology behind them, and a simple shield.',
    date: '2026-07-18',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'UPI ने पैसे भेजना जितना आसान बनाया, ठगों ने उतनी ही मेहनत उसे समझने में की है। आँकड़े हर साल यही कहते हैं: डिजिटल-भुगतान की ठगी के ज़्यादातर मामले किसी "हैकिंग" से नहीं, बातचीत से होते हैं — ठग तकनीक नहीं तोड़ता, भरोसा तोड़ता है। इसलिए बचाव का पहला औज़ार ऐप की कोई सेटिंग नहीं, कुछ वाक्य हैं जिन्हें पहचानना आना चाहिए।',
          'नीचे पाँच पैटर्न हैं जो बार-बार दोहराते हैं। नाम और कहानियाँ बदलती रहती हैं; ढाँचा वही रहता है।',
        ],
        pEn: [
          'UPI made sending money easy, and fraudsters have worked just as hard at understanding it. The statistics say the same thing every year: most digital-payment fraud happens not through "hacking" but through conversation — the scammer breaks trust, not technology. So the first defence is not an app setting but a handful of sentences you must learn to recognise.',
          'Below are five patterns that repeat endlessly. Names and stories change; the skeleton never does.',
        ],
      },
      {
        hHi: 'पाँच पैटर्न', hEn: 'The five patterns',
        pHi: [
          'पहला — "पैसा पाने के लिए PIN": UPI का सबसे बुनियादी सच याद रखिए — पैसा *पाने* के लिए न PIN चाहिए, न QR स्कैन, न किसी "रिक्वेस्ट" को स्वीकारना। PIN सिर्फ़ भेजने के लिए है; जो भी "पाने" के लिए PIN माँगे, वह भेजवा रहा है। दूसरा — नक़ली कस्टमर-केयर: गूगल पर मिला नंबर, ट्विटर पर आगे आया "अधिकारी" — असली बैंक कभी PIN, OTP या पूरा कार्ड नंबर नहीं माँगता, और शिकायत हमेशा ऐप के भीतर या कार्ड के पीछे छपे नंबर से होती है। तीसरा — स्क्रीन-शेयर ऐप: "जाँच के लिए यह ऐप डालिए" कहकर ठग आपकी स्क्रीन — यानी आपके OTP — लाइव देखता है; बैंक-काम के फ़ोन पर ऐसा कोई ऐप कभी नहीं।',
          'चौथा — ग़लती से आया पैसा: खाते में रक़म आती है, फिर रोता हुआ फ़ोन — "ग़लती से चला गया, लौटा दीजिए।" रक़म अक्सर चोरी के खाते से आई होती है; लौटाइए बैंक के ज़रिए, सीधे किसी अनजान QR पर कभी नहीं। पाँचवाँ — डर और वर्दी: "पार्सल में ड्रग्स निकला", "बिजली कटने वाली है", "डिजिटल अरेस्ट" — मनगढ़ंत आपात-स्थिति और तुरंत ट्रांसफ़र की माँग। असली पुलिस और असली विभाग UPI पर जुर्माना नहीं वसूलते।',
        ],
        pEn: [
          'One — "PIN to receive money": remember UPI’s most basic truth — receiving money needs no PIN, no QR scan, no accepting a "request". The PIN exists only for sending; whoever asks for a PIN "to receive" is making you send. Two — fake customer care: a number found on Google, a helpful "officer" sliding into replies — a real bank never asks for your PIN, OTP or full card number, and complaints always go through the app itself or the number printed on your card. Three — screen-share apps: "install this app for verification" lets the fraudster watch your screen — your OTPs — live; no such app ever belongs on a phone that does banking.',
          'Four — money sent "by mistake": an amount lands, then a tearful call — "it went by accident, please return it." The money often came from a stolen account; return it through the bank, never straight to a stranger’s QR. Five — fear in uniform: "drugs found in your parcel," "your electricity is being cut," "digital arrest" — a fabricated emergency plus a demand for immediate transfer. Real police and real utilities do not collect fines over UPI.',
        ],
      },
      {
        hHi: 'तीन सवालों की ढाल', hEn: 'The three-question shield',
        pHi: [
          'सवाल एक: संपर्क किसने शुरू किया? ठगी लगभग हमेशा "इनबाउंड" आती है — अनचाहा फ़ोन, SMS, WhatsApp। असली संस्था इस बात से नहीं मरती कि आपने फ़ोन काटकर आधिकारिक नंबर पर ख़ुद कॉल किया; ठगी उसी अंतराल में मर जाती है। सवाल दो: क्या मुझे जल्दी कराई जा रही है, या चुप रहने को कहा जा रहा है? "अभी नहीं तो कभी नहीं" और "किसी को मत बताइए" — ये दोनों ठगी के लगभग शुद्ध हस्ताक्षर हैं। सवाल तीन: क्या मुझसे PIN/OTP/स्क्रीन माँगी जा रही है, या "पाने" के लिए कुछ करने को कहा जा रहा है? जवाब हाँ है, तो बातचीत वहीं समाप्त।',
          'और अगर ठगी हो जाए — शर्म नहीं, रफ़्तार: तुरंत 1930 (राष्ट्रीय साइबर-क्राइम हेल्पलाइन) पर कॉल, cybercrime.gov.in पर शिकायत, बैंक की आधिकारिक फ्रॉड-लाइन पर सूचना — पहले घंटे में रुकवाई गई रक़म के लौटने की संभावना सबसे ज़्यादा होती है। और फिर अपनी कहानी घर में सुनाइए: ठगों की सबसे बड़ी ताक़त शर्मिंदा पीड़ितों की चुप्पी है, और हर सुनाई गई कहानी अगले सुनने वाले का टीका है।',
        ],
        pEn: [
          'Question one: who started this contact? Fraud almost always arrives inbound — the unsolicited call, SMS, WhatsApp. A genuine institution survives you hanging up and calling the official number yourself; the scam dies in that gap. Question two: am I being rushed, or told to stay silent? "Now or never" and "tell no one" are near-pure fraud signatures. Question three: am I being asked for a PIN/OTP/screen, or to do something in order to "receive"? If yes, the conversation ends there.',
          'And if it happens anyway — speed, not shame: call 1930 (the national cybercrime helpline) immediately, file at cybercrime.gov.in, alert your bank’s official fraud line — money flagged within the first hour has the best odds of coming back. Then tell the story at home: the fraud industry’s greatest asset is the silence of embarrassed victims, and every story told vaccinates the next listener.',
        ],
      },
    ],
  },
  {
    slug: 'credit-score-samjhiye',
    category: 'credit',
    titleHi: 'क्रेडिट स्कोर की पूरी समझ: 750 के पार कैसे पहुँचते हैं, बिना किसी शॉर्टकट के',
    titleEn: 'Understanding Your Credit Score: How People Cross 750 Without Any Shortcut',
    excerptHi: 'स्कोर कौन बनाता है, किन पाँच चीज़ों से बनता है, कौन-सी अफ़वाहें झूठी हैं, और कौन-सी पाँच आदतें उसे धीरे-धीरे, पक्के तौर पर ऊपर ले जाती हैं।',
    excerptEn: 'Who makes the score, the five ingredients inside it, which rumours are false, and the five habits that raise it slowly and surely.',
    date: '2026-07-19',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'क्रेडिट स्कोर वह तीन अंकों की संख्या है जो आपके नाम के पीछे चुपचाप चलती है और होम लोन की ब्याज दर से लेकर क्रेडिट कार्ड की मंज़ूरी तक तय करती है। भारत में यह मुख्यतः CIBIL समेत चार ब्यूरो बनाते हैं, 300 से 900 के पैमाने पर; मोटे तौर पर 750 के ऊपर का स्कोर "अच्छे" की श्रेणी में गिना जाता है और सबसे बेहतर शर्तों के दरवाज़े खोलता है।',
          'अच्छी ख़बर: स्कोर कोई रहस्य नहीं है। वह गिनी-चुनी चीज़ों से बनता है, और हर चीज़ पर आपका सीधा — धीमा ही सही — नियंत्रण है।',
        ],
        pEn: [
          'Your credit score is the three-digit number that quietly walks behind your name, deciding everything from your home-loan interest rate to whether a card gets approved. In India it is produced mainly by four bureaus including CIBIL, on a 300–900 scale; broadly, anything above 750 counts as "good" and opens the best terms.',
          'The good news: the score is no mystery. It is built from a handful of ingredients, and every one of them is under your direct — if slow — control.',
        ],
      },
      {
        hHi: 'स्कोर के पाँच अवयव', hEn: 'The five ingredients',
        pHi: [
          'सबसे भारी अवयव है भुगतान का इतिहास: EMI और कार्ड-बिल समय पर गए या नहीं — एक भी चूका हुआ भुगतान बरसों तक रिपोर्ट में दिखता है। दूसरा है "यूटिलाइज़ेशन": कार्ड की सीमा का कितना हिस्सा आप छूते हैं — सीमा का तीस प्रतिशत से कम इस्तेमाल स्वस्थ माना जाता है, लगातार फुल-लिमिट छूना दबाव का संकेत। तीसरा, क्रेडिट की उम्र: पुराने, अच्छे से निभाए खाते स्कोर के दोस्त हैं — इसीलिए सबसे पुराना कार्ड बिना वजह बंद करना अक्सर उलटा पड़ता है।',
          'चौथा, नई पूछताछ: थोड़े समय में कई लोन-कार्ड आवेदन "हार्ड इंक्वायरी" बनकर स्कोर को थोड़ा दबाते हैं और बेचैनी का संकेत देते हैं। पाँचवाँ, मिश्रण: सुरक्षित (होम/ऑटो) और असुरक्षित (कार्ड/पर्सनल) कर्ज़ का संतुलित इतिहास हल्का-सा लाभ देता है। ध्यान रहे — अपना स्कोर ख़ुद देखना "सॉफ्ट" पूछताछ है, उससे स्कोर नहीं गिरता; यह अफ़वाह झूठी है।',
        ],
        pEn: [
          'The heaviest ingredient is payment history: whether EMIs and card bills went on time — a single missed payment shows on the report for years. Second is utilisation: how much of your card limit you touch — staying under roughly thirty percent reads as healthy, while repeatedly brushing the full limit signals strain. Third, the age of your credit: old, well-run accounts are the score’s friends — which is why closing your oldest card without reason often backfires.',
          'Fourth, fresh enquiries: several loan or card applications in a short window become "hard enquiries" that dent the score slightly and signal restlessness. Fifth, the mix: a balanced history of secured (home/auto) and unsecured (card/personal) borrowing helps mildly. Note — checking your own score is a "soft" enquiry and does not lower it; that rumour is false.',
        ],
      },
      {
        hHi: 'पाँच आदतें, और धैर्य', hEn: 'Five habits, and patience',
        pHi: [
          'आदत एक: हर EMI और कार्ड-बिल का ऑटो-डेबिट — समय पर भुगतान स्कोर का इंजन है, और ऑटो-डेबिट भूलने की बीमारी का इलाज। आदत दो: कार्ड-बिल हमेशा पूरा भरिए, "मिनिमम ड्यू" के जाल में नहीं — मिनिमम भरने से लेट-मार्क तो नहीं लगता, पर बाक़ी रक़म पर बेरहम ब्याज चलता रहता है। आदत तीन: यूटिलाइज़ेशन नीचे रखिए — ज़रूरत हो तो सीमा बढ़वाना भी वैध तरीक़ा है, बशर्ते ख़र्च न बढ़े। आदत चार: लोन-कार्ड के आवेदन सोच-समझकर, फैला कर कीजिए। आदत पाँच: साल में एक बार अपनी क्रेडिट रिपोर्ट मुफ़्त निकालकर पढ़िए — ग़लत एंट्री (चुकाया हुआ लोन "एक्टिव" दिखना, अनजान खाता) आम है, और ब्यूरो के पोर्टल पर उसका सुधार-आवेदन आपका अधिकार है।',
          'और आख़िर में वह बात जो कोई विज्ञापन नहीं कहेगा: स्कोर रातोंरात नहीं सुधरता, और "स्कोर ठीक कराने" की गारंटी बेचने वाली हर सेवा से दूर रहिए। समय पर भुगतान के छह-बारह महीने चुपचाप वह कर देते हैं जो कोई शॉर्टकट नहीं कर सकता। स्कोर दरअसल आपकी आदतों की परछाईं है — आदतें सुधरती हैं, तो परछाईं अपने-आप सीधी हो जाती है।',
        ],
        pEn: [
          'Habit one: auto-debit every EMI and card bill — on-time payment is the score’s engine, and auto-debit cures forgetfulness. Habit two: always pay the card bill in full, never the "minimum due" trap — the minimum avoids a late mark but keeps brutal interest running on the rest. Habit three: keep utilisation low — asking for a higher limit is a legitimate lever, provided spending doesn’t rise with it. Habit four: apply for credit deliberately and spaced out. Habit five: pull your free credit report once a year and actually read it — wrong entries (a closed loan showing "active", an unknown account) are common, and filing a correction on the bureau’s portal is your right.',
          'And finally, the sentence no advertisement will say: scores do not improve overnight, and every service selling a "guaranteed score fix" deserves distance. Six to twelve months of on-time payments quietly do what no shortcut can. The score is ultimately the shadow of your habits — straighten the habits, and the shadow straightens itself.',
        ],
      },
    ],
  },
  {
    slug: 'term-insurance-kyon-kaafi-hai',
    category: 'bima',
    titleHi: 'टर्म इंश्योरेंस बनाम "पैसा वापस" पॉलिसी: परिवार की सुरक्षा का साफ़ गणित',
    titleEn: 'Term Insurance vs Money-Back Policies: The Clear Math of Protecting a Family',
    excerptHi: 'सबसे सस्ता बीमा सबसे बड़ा सुरक्षा-कवच क्यों देता है, "प्रीमियम डूब गया" वाली भावना का जवाब क्या है, और बीमा को निवेश से अलग रखने की समझ।',
    excerptEn: 'Why the cheapest insurance buys the largest protection, the honest answer to the "wasted premium" feeling, and the case for keeping insurance and investment apart.',
    date: '2026-07-20',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'बीमा भारत में अक्सर उलटे तरीक़े से बिकता है: सुरक्षा की बात से नहीं, "मैच्योरिटी पर इतना वापस मिलेगा" की चमक से। नतीजा एक जाना-पहचाना घर-घर का दृश्य है — मोटे प्रीमियम वाली कई पॉलिसियाँ, और फिर भी परिवार की असली सुरक्षा इतनी छोटी कि एक बड़ी अनहोनी में कुछ ही साल चल पाए। इस लेख का काम किसी कंपनी की तारीफ़ या बुराई नहीं — सिर्फ़ दो अलग सवालों को अलग करना है, जिन्हें बाज़ार जान-बूझकर मिला देता है।',
          'सवाल पहला: मेरे न रहने पर परिवार का क्या होगा? यह सुरक्षा का सवाल है। सवाल दूसरा: मेरा पैसा कैसे बढ़े? यह निवेश का सवाल है। दोनों के सबसे अच्छे जवाब अलग-अलग औज़ारों में मिलते हैं।',
        ],
        pEn: [
          'Insurance in India is often sold backwards: not on protection, but on the glitter of "look how much you get back at maturity." The result is a familiar household scene — several fat-premium policies, yet actual family protection so small it would last a few years at best after a real tragedy. This article’s job is not to praise or blame any company — only to separate two different questions the market deliberately blends.',
          'Question one: what happens to my family if I am gone? That is a protection question. Question two: how should my money grow? That is an investment question. The best answers to the two live in different instruments.',
        ],
      },
      {
        hHi: 'टर्म का गणित: छोटा प्रीमियम, बड़ा कवच', hEn: 'The term math: small premium, large shield',
        pHi: [
          'टर्म इंश्योरेंस बीमे का सबसे शुद्ध रूप है: तय अवधि तक हर साल छोटा प्रीमियम; अवधि में अनहोनी हो तो परिवार को पूरी बीमित रक़म; अवधि बीत जाए तो कुछ वापस नहीं। "कुछ वापस नहीं" सुनकर ही ज़्यादातर लोग ठिठकते हैं — पर यही उसकी ताक़त है। चूँकि कंपनी को हर हाल में कुछ लौटाने का वादा नहीं निभाना, वही प्रीमियम कई गुना बड़ी सुरक्षा ख़रीद लेता है। मोटा नियम कहता है कि परिवार की सुरक्षा सालाना आमदनी के दस से पंद्रह गुना और बक़ाया कर्ज़ों के बराबर होनी चाहिए — यह आँकड़ा आम घरों की पहुँच में सिर्फ़ टर्म से आता है।',
          'तुलना में "पैसा-वापस" और एंडाउमेंट क़िस्म की पॉलिसियाँ एक ही प्रीमियम से दो काम कराने की कोशिश हैं — थोड़ा बीमा, थोड़ी बचत। नतीजा प्रायः दोनों तरफ़ समझौता: सुरक्षा ज़रूरत से बहुत छोटी, और बचत वाला हिस्सा ऐसे रिटर्न पर जो महँगाई से बमुश्किल आगे निकलता है। लंबी अवधि के आँकड़ों में "सस्ता टर्म + बाक़ी रक़म का अलग, पारदर्शी निवेश" वाला रास्ता ज़्यादातर परिवारों के लिए दोनों सवालों के बेहतर जवाब देता आया है।',
        ],
        pEn: [
          'Term insurance is insurance in its purest form: a small annual premium for a fixed period; the full sum assured to the family if the worst happens within it; nothing back if the period passes safely. "Nothing back" is exactly where most people flinch — and exactly where the power lies. Because the company promises no guaranteed payback, the same premium buys several times more protection. The rough rule of thumb puts a family’s cover at ten to fifteen times annual income plus outstanding loans — a figure ordinary households can reach only through term.',
          'By comparison, money-back and endowment-style policies try to make one premium do two jobs — a little insurance, a little saving. The usual result is compromise on both: protection far below the need, and a savings component whose returns barely outrun inflation. Over long horizons, the "cheap term + invest the difference separately and transparently" route has answered both questions better for most families.',
        ],
      },
      {
        hHi: '"प्रीमियम डूब गया" की भावna का जवाब', hEn: 'Answering the "wasted premium" feeling',
        pHi: [
          'टर्म के ख़िलाफ़ सबसे बड़ा तर्क भावनात्मक है: "बीस साल भरता रहा और कुछ मिला नहीं।" इसका ईमानदार जवाब है — मिला, और सबसे क़ीमती चीज़ मिली: वे बीस साल, जिनमें आपके परिवार के सिर पर छत की गारंटी थी। हम गाड़ी के बीमे से साल के अंत में "पैसा वापस" नहीं माँगते, और दुआ करते हैं कि दावा कभी करना ही न पड़े। जीवन के बीमे को भी उसी नज़र से देखना, पैसे की समझ की एक बुनियादी सीढ़ी है।',
          'व्यावहारिक क़दम सीधे हैं: कमाने वाले हर सदस्य के लिए आमदनी के दस-पंद्रह गुना का टर्म कवर; प्रस्ताव-फ़ॉर्म में सेहत और आदतों का सौ फ़ीसदी सच (दावे के समय यही सच परिवार की ढाल बनता है); नॉमिनी अपडेट; और पॉलिसी की जानकारी परिवार को। बाक़ी जो प्रीमियम "बचा", वह अपने नाम के निवेश-सवाल के हवाले कीजिए — PPF से इंडेक्स फंड तक, जहाँ आपकी योजना कहे। बीमा परिवार के लिए है, निवेश भविष्य के लिए — दोनों को अलग रखिए, दोनों बेहतर काम करेंगे।',
        ],
        pEn: [
          'The biggest argument against term is emotional: "I paid for twenty years and got nothing." The honest answer: you got the most valuable thing on sale — twenty years in which your family’s roof was guaranteed. We never demand our car insurance "give the money back" at year-end, and we pray never to claim on it. Learning to see life cover the same way is a basic rung on the money-wisdom ladder.',
          'The practical steps are plain: term cover of ten to fifteen times income for every earning member; one hundred percent truth about health and habits on the proposal form (that truth is the family’s shield at claim time); nominees updated; the family told where the policy lives. Whatever premium you "saved", hand it to the investment question under its own name — PPF to index funds, wherever your plan points. Insurance is for the family, investment is for the future — keep them apart and both work better.',
        ],
      },
    ],
  },
  {
    slug: 'lifestyle-inflation-hindi',
    category: 'nivesh',
    titleHi: 'तनख्वाह बढ़ती है, बचत क्यों नहीं? लाइफस्टाइल इन्फ्लेशन की चुपचाप लीक',
    titleEn: 'Salary Rises, Savings Don’t: The Silent Leak of Lifestyle Inflation',
    excerptHi: 'पाँच साल पहले से आज आमदनी कहीं ज़्यादा है — फिर महीने के आख़िर में हाथ उतना ही ख़ाली क्यों? बढ़ोतरी को निगल जाने वाली आदत की शारीरिक रचना, और उससे आधा-आधा जीतने का नियम।',
    excerptEn: 'You earn far more than five years ago — so why is month-end just as empty? The anatomy of the habit that swallows every raise, and the fifty-fifty rule that beats it.',
    date: '2026-07-21',
    minutes: 6,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'यह पहेली लगभग हर कमाने वाले की है: आज की आमदनी पाँच साल पहले से साफ़ ज़्यादा है, पर महीने के आख़िर में बचा हुआ पैसा वहीं का वहीं। कोई हादसा नहीं हुआ, कोई बड़ी फ़िज़ूलख़र्ची याद नहीं — पैसा बस... जज़्ब हो गया। इस जज़्ब होने का नाम है लाइफस्टाइल इन्फ्लेशन: हर बढ़ोतरी के साथ "सामान्य" का स्तर चुपके से ऊपर खिसक जाना।',
          'यह चरित्र की कमज़ोरी नहीं, बिना फ़ैसले के हुए ख़र्च का स्वाभाविक व्यवहार है। चाय अच्छी चाय बन जाती है, किराये का घर बड़ा हो जाता है, छुट्टी में एक शहर और जुड़ जाता है। हर क़दम छोटा, वाजिब, समझाने लायक़ — और सबका जोड़ वह ज़िंदगी, जिसकी क़ीमत ठीक उतनी है जितनी आमदनी। हर स्तर पर। हमेशा।',
        ],
        pEn: [
          'The puzzle belongs to almost every earner: today’s income is clearly higher than five years ago, yet the amount left at month-end is exactly where it was. No disaster happened, no big splurge comes to mind — the money simply... got absorbed. That absorption is lifestyle inflation: the level of "normal" sliding quietly upward with every raise.',
          'It is not a character flaw; it is the natural behaviour of spending in the absence of a decision. The tea becomes better tea, the rented flat grows a room, the holiday gains a second city. Each step small, reasonable, defensible — and their sum is a life that costs precisely what you earn. At every level. Forever.',
        ],
      },
      {
        hHi: 'फ़ासला ही असली खेल है', hEn: 'The gap is the whole game',
        pHi: [
          'संपत्ति आमदनी से नहीं बनती; आमदनी और ख़र्च के फ़ासले से बनती है — और लाइफस्टाइल इन्फ्लेशन वही ताक़त है जो हर बढ़ोतरी के बाद इस फ़ासले को वापस सिकोड़ देती है। इसीलिए दोगुनी कमाई वाले भी अक्सर उतने ही "तंग" महसूस करते हैं: उनकी स्थायी क़िस्तें उनके साथ ऊपर चढ़ गईं। मनोविज्ञान इसे "हेडोनिक ट्रेडमिल" कहता है — संतोष कुछ महीनों में पुराने स्तर पर लौट आता है, ख़र्च नई ऊँचाई पर टिका रह जाता है।',
          'गणित बेरहम है: बीस साल तक एक जैसी बढ़ोतरी पाने वाले दो सहकर्मियों में से जो हर बढ़ोतरी का आधा निवेश की ओर मोड़ता रहा, वह अंत में बरसों की आज़ादी ज़्यादा लेकर बैठा होता है — जबकि उसकी ज़िंदगी भी हर साल थोड़ी बेहतर होती गई, क्योंकि आधी बढ़ोतरी तो उसने ख़र्ची ही।',
        ],
        pEn: [
          'Wealth is not built from income; it is built from the gap between income and spending — and lifestyle inflation is the force that shrinks that gap back to zero after every raise. That is why people earning double often feel just as squeezed: their fixed commitments climbed with them. Psychology calls it the hedonic treadmill — satisfaction returns to its old level within months, while costs stay at the new altitude.',
          'The arithmetic is merciless: of two colleagues receiving identical raises for twenty years, the one who routed half of each raise into investing ends up holding years of extra freedom — while living a little better every year too, because the other half of every raise was gladly spent.',
        ],
      },
      {
        hHi: 'आधा-आधा नियम', hEn: 'The fifty-fifty rule',
        pHi: [
          'इलाज पहले से तय एक वाक्य है: "हर बढ़ोतरी, बोनस या नई आमदनी का आधा हिस्सा, आते ही, अपने-आप बचत-निवेश की ओर; बाक़ी आधा बेझिझक ज़िंदगी की ओर।" फ़ैसला पैसा आने से पहले होना ज़रूरी है — नई रक़म एक बार "सामान्य" बन गई, तो वही फ़ैसला दस गुना कठिन हो जाता है। SIP की रक़म बढ़ोतरी वाले महीने में ही बढ़ा देना इस नियम का सबसे आसान अमल है।',
          'साल में दो बार "डिफ़ॉल्ट-ऑडिट" जोड़ लीजिए: सब्सक्रिप्शन, अपने-आप नवीनीकृत होते ख़र्च, बिना देखे चलती क़िस्तें — जो अब काम का नहीं, काटिए, और बची रक़म भी उसी स्वचालित रास्ते पर चढ़ाइए। मक़सद कम ख़र्च करना नहीं; जान-बूझकर ख़र्च करना है। बढ़ोतरी असली तरक़्क़ी है — लीक होना उसकी क़िस्मत नहीं, सिर्फ़ डिफ़ॉल्ट है। और डिफ़ॉल्ट बदले जा सकते हैं।',
        ],
        pEn: [
          'The cure is one sentence decided in advance: "half of every raise, bonus or new income moves automatically to saving and investing the moment it arrives; the other half belongs, guilt-free, to life." The decision must predate the money — once the new amount feels normal, the same choice becomes ten times harder. Raising your SIP in the same month as the raise is the easiest possible implementation.',
          'Add a twice-yearly default audit: subscriptions, auto-renewing costs, standing instructions nobody reviews — cancel what no longer earns its place, and route the recovered money onto the same automatic track. The goal is not to spend little; it is to spend on purpose. A raise is real progress — leaking away is not its destiny, only its default. And defaults can be changed.',
        ],
      },
    ],
  },
  {
    slug: 'tax-regime-kaise-chunein',
    category: 'tax',
    titleHi: 'नई या पुरानी टैक्स रिजीम? भावना नहीं, तीस मिनट का यह हिसाब तय करे',
    titleEn: 'New or Old Tax Regime? Let Thirty Minutes of Arithmetic Decide, Not Emotion',
    excerptHi: 'हर साल लाखों लोग अफ़वाह या आदत से रिजीम चुनते हैं। चुनाव का सही ढाँचा: अपनी असल कटौतियाँ गिनिए, दोनों तरफ़ का टैक्स निकालिए, बड़ा नंबर नहीं — छोटा टैक्स चुनिए।',
    excerptEn: 'Every year lakhs choose their regime by rumour or habit. The correct framework: count your real deductions, compute the tax both ways, and pick the smaller tax — not the louder opinion.',
    date: '2026-07-13',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'हर वित्त-वर्ष की शुरुआत में दफ़्तरों का एक ही दृश्य है: HR का ईमेल — "रिजीम चुनिए" — और उसके बाद अफ़वाहों का बाज़ार। "नई में कोई बचत नहीं दिखा सकते, मत लेना", "पुरानी अब बेकार है" — दोनों वाक्य आधे-अधूरे हैं। सच सरल और व्यक्तिगत है: सही रिजीम वह है जिसमें *आपका* टैक्स कम बनता है, और यह सिर्फ़ आपकी असल कटौतियों के आँकड़े से तय होता है — पड़ोसी की राय से नहीं।',
          'ज़रूरी चेतावनी पहले: दरें, स्लैब और नियम बजट-दर-बजट बदलते हैं — यह लेख कोई दर नहीं बताता, चुनाव का *ढाँचा* बताता है, जो हर साल के ताज़ा नियमों पर वैसा ही लागू होता है। अंतिम गणना हमेशा आयकर विभाग के आधिकारिक कैलकुलेटर या किसी योग्य सलाहकार से मिलाइए।',
        ],
        pEn: [
          'Every financial year opens with the same office scene: the HR email — "choose your regime" — followed by a rumour bazaar. "You can’t show any savings in the new one, avoid it"; "the old one is useless now" — both sentences are half-truths. The truth is simple and personal: the right regime is the one in which your tax comes out smaller, and only the arithmetic of your actual deductions decides that — not a neighbour’s opinion.',
          'A necessary warning first: rates, slabs and rules change budget by budget — this article quotes no rates; it gives the framework of the choice, which applies unchanged to each year’s fresh rules. Always confirm the final numbers on the Income Tax Department’s official calculator or with a qualified adviser.',
        ],
      },
      {
        hHi: 'दो दर्शन, एक तराज़ू', hEn: 'Two philosophies, one weighing scale',
        pHi: [
          'दोनों रिजीम दो दर्शन हैं। पुरानी कहती है: दरें ऊँची, पर सरकार जिन कामों को बढ़ावा देना चाहती है — जीवन बीमा, PPF/ELSS जैसी बचतें (80C), स्वास्थ्य बीमा (80D), होम-लोन ब्याज, HRA — उन पर आमदनी घटाकर टैक्स लगाएँगे। नई कहती है: दरें नीची और सीधी, पर कटौतियों की सूची छोटी। यानी तराज़ू का एक पलड़ा आपकी "कटौतियों का कुल जोड़" है, दूसरा "नई रिजीम की सीधी राहत"।',
          'इसीलिए मोटा पैटर्न यह बनता है: जिसकी ज़िंदगी में कटौतियाँ बड़ी और सचमुच चल रही हैं — होम-लोन का ब्याज, भरा-पूरा 80C, किराये पर HRA — उसका पलड़ा प्रायः पुरानी की ओर झुकता है; जिसकी कटौतियाँ छोटी हैं या जो काग़ज़ी झंझट से मुक्त रहना चाहता है, उसे नई प्रायः बराबर या बेहतर बैठती है। "प्रायः" पर ध्यान दीजिए — सीमा-रेखा हर परिवार की अलग जगह कटती है, और उसे सिर्फ़ गणना ही खोज सकती है।',
        ],
        pEn: [
          'The two regimes are two philosophies. The old one says: higher rates, but income is reduced for the behaviours the state wants to encourage — life insurance, PPF/ELSS-type savings (80C), health insurance (80D), home-loan interest, HRA. The new one says: lower, simpler rates, but a short list of deductions. So one pan of the scale holds your total real deductions; the other holds the new regime’s straightforward relief.',
          'Hence the broad pattern: someone whose life genuinely runs large deductions — home-loan interest, a full 80C, HRA against rent — usually tilts old; someone with small deductions, or who values freedom from paperwork, usually finds the new regime equal or better. Note the word "usually" — the crossover line cuts in a different place for every family, and only the computation can find it.',
        ],
      },
      {
        hHi: 'तीस मिनट की विधि', hEn: 'The thirty-minute method',
        pHi: [
          'क़दम एक: बीते साल की असल कटौतियाँ सूचीबद्ध कीजिए — अनुमान नहीं, रसीद वाली असल रक़में: 80C में क्या-क्या गया, स्वास्थ्य बीमा प्रीमियम, होम-लोन ब्याज, HRA की पात्र रक़म। क़दम दो: आयकर विभाग के आधिकारिक ई-कैलकुलेटर में अपनी अनुमानित आमदनी दोनों रिजीम में डालिए — एक बार कटौतियों समेत पुरानी में, एक बार नई में। क़दम तीन: दोनों अंतिम टैक्स आमने-सामने रखिए और छोटा चुनिए। बस — यही पूरी विधि है; तीस मिनट में भावना का काम गणित कर देता है।',
          'दो व्यावहारिक बातें और: वेतनभोगी आम तौर पर हर साल रिजीम बदल सकते हैं, इसलिए यह हिसाब सालाना रस्म बनाइए — शादी, होम-लोन, किराये का बदलना जैसी घटनाएँ सीमा-रेखा खिसका देती हैं। और चुनाव जो भी हो, बचत-निवेश बंद मत कीजिए: PPF, बीमा या SIP का मूल्य टैक्स-छूट से नहीं, आपके भविष्य से तय होता है। टैक्स-बचत निवेश की मिठाई है, थाली नहीं।',
        ],
        pEn: [
          'Step one: list last year’s actual deductions — receipt-backed amounts, not estimates: what filled 80C, health-insurance premiums, home-loan interest, the eligible HRA figure. Step two: put your projected income through the Income Tax Department’s official e-calculator both ways — once under the old regime with deductions, once under the new. Step three: place the two final tax figures side by side and pick the smaller. That is the entire method; thirty minutes of arithmetic does the work of a year of opinions.',
          'Two practical notes: salaried taxpayers can generally switch regimes each year, so make this an annual ritual — a marriage, a home loan, a change of rent all move the crossover line. And whatever you choose, do not stop saving and investing: the worth of PPF, insurance or a SIP comes from your future, not from a tax break. Tax saving is the dessert of investing, never the meal.',
        ],
      },
    ],
  },
  {
    slug: 'gullak-se-demat-tak-teen-padav',
    category: 'digital',
    titleHi: 'गुल्लक से UPI तक: बच्चों-किशोरों के लिए डिजिटल पैसों की तीन सीढ़ियाँ',
    titleEn: 'From Piggy Bank to UPI: Three Steps into Digital Money for Kids and Teens',
    excerptHi: 'जिन बच्चों ने कभी नोट गिनते नहीं देखा, वे "बीप" को पैसा कैसे समझें? नक़द से कार्ड और UPI तक ले जाने की उम्र-वार सीढ़ियाँ — सुरक्षा की आदतों समेत।',
    excerptEn: 'How do children who never watched notes being counted learn that the "beep" is money? Age-wise steps from cash to cards and UPI — safety habits included.',
    date: '2026-07-12',
    minutes: 7,
    sections: [
      {
        hHi: '', hEn: '',
        pHi: [
          'पिछली पीढ़ी के बच्चों ने पैसा हाथों में बनते-बिगड़ते देखा: दूध वाले को गिनकर दिए गए नोट, बनिये की उधारी की कॉपी, गुल्लक का वज़न। आज के बच्चे के सामने पैसा एक ध्वनि है — "बीप" — और एक स्क्रीन पर घटती-बढ़ती संख्या। सुविधा शानदार है; सीखने के लिहाज़ से यह समस्या है, क्योंकि जो दिखता नहीं, वह सीमित भी नहीं लगता।',
          'इसलिए डिजिटल दौर में पैसे की परवरिश की पहली सीढ़ी उलटी लगती है: पहले नक़द। उसके बाद, उम्र के साथ, निगरानी वाले डिजिटल औज़ार। और हर सीढ़ी पर सुरक्षा की एक आदत — क्योंकि जिस उम्र में बच्चे UPI सीखते हैं, ठग उसी उम्र के उपयोगकर्ताओं का इंतज़ार कर रहे होते हैं।',
        ],
        pEn: [
          'The last generation’s children watched money being made and unmade by hand: notes counted out to the milkman, the grocer’s credit notebook, the weight of a piggy bank. Today’s child experiences money as a sound — the beep — and a number changing on a screen. As convenience it is wonderful; as education it is a problem, because what cannot be seen never feels finite.',
          'So the first step of raising money-wise kids in a digital age looks backwards: cash first. Then, with age, supervised digital tools. And at every step, one safety habit — because at the exact age children learn UPI, fraudsters are waiting for users of exactly that age.',
        ],
      },
      {
        hHi: 'सीढ़ी एक और दो: नक़द की गिनती, फिर साथ में डिजिटल', hEn: 'Steps one and two: cash first, then digital together',
        pHi: [
          'छह से दस साल: जेब-ख़र्च नक़द में दीजिए, चाहे घर बाक़ी सब UPI से चलता हो। सिक्कों की गिनती, ख़र्च के बाद हथेली का ख़ालीपन, गुल्लक का धीरे-धीरे भारी होना — यही "सीमित संसाधन" का पहला, शारीरिक पाठ है, जिसे कोई ऐप नहीं पढ़ा सकता। इसी उम्र में दुकानों पर बोलकर तुलना कीजिए — "यह वाला महँगा है, हम वह लेंगे" — ताकि चुनाव की भाषा घर की भाषा बने।',
          'ग्यारह से चौदह: अब डिजिटल को साथ-साथ दिखाइए। अपनी UPI-भुगतान की स्क्रीन बच्चे के सामने रखिए और अनुवाद कीजिए: "यह बीप सौ रुपये थे — वही सौ, जो तुम्हारी गुल्लक में होते तो दिखते।" महीने का जेब-ख़र्च अब चाहें तो आधा नक़द, आधा किसी निगरानी-वाले माध्यम में दीजिए। इसी पड़ाव पर पहला सुरक्षा-मंत्र रटवाइए: PIN और OTP घर के ताले की चाबी हैं — किसी को नहीं बताते, "पाने" के लिए कभी नहीं लगते।',
        ],
        pEn: [
          'Ages six to ten: give pocket money in cash, even if the rest of the household runs on UPI. Counting coins, the emptiness of the palm after spending, the piggy bank slowly gaining weight — that is the first, physical lesson in limited resources, and no app can teach it. At the same age, compare aloud in shops — "this one is dearer, we’ll take that one" — so the language of choice becomes the language of home.',
          'Eleven to fourteen: now show digital alongside. Hold your UPI payment screen where the child can see and translate it: "that beep was a hundred rupees — the same hundred that would be visible in your piggy bank." Pocket money can now go half cash, half through a supervised channel. This is also the stage for the first safety mantra, learned by heart: PIN and OTP are the keys to the house — never shared, and never, ever needed to receive money.',
        ],
      },
      {
        hHi: 'सीढ़ी तीन: किशोर का अपना खाता, और घर की खुली बातचीत', hEn: 'Step three: the teenager’s own account, and open conversation',
        pHi: [
          'पंद्रह से अठारह: बैंक में नाबालिग़ खाता खुलवाइए और महीने का बजट सचमुच सौंप दीजिए — मोबाइल रिचार्ज, बाहर का खाना, दोस्तों के तोहफ़े उसी में से। ग़लतियाँ होंगी; वही पाठ्यक्रम है। महीने के बीच में ख़त्म हुआ बजट अगले महीने की सबसे अच्छी क्लास है — बशर्ते ऊपर से चुपचाप "टॉप-अप" न आ जाए। साथ ही ठगी के ताज़ा तरीक़ों पर घर में वैसे ही बात कीजिए जैसे सड़क-सुरक्षा पर होती है: गेमिंग टॉप-अप के नक़ली ऑफ़र, "स्क्रीनशॉट भेजो" वाले जाल, अनजान लिंक — किशोरों की ठगी के अपने फ़ैशन हैं।',
          'और अंत में वह नियम, जो सारी सीढ़ियों को जोड़ता है: पैसे पर घर में चुप्पी नहीं। जिस मेज़ पर महीने की योजना, ग़लतियों के क़िस्से और "इस बार यह नहीं हो पाएगा" खुलकर बोले जाते हैं, उस मेज़ से उठा बच्चा डिजिटल दुनिया में भी पैसे को औज़ार की तरह पकड़ता है — जादू या शर्म की तरह नहीं। बीप तब सिर्फ़ आवाज़ रह जाती है; समझ बच्चे के भीतर होती है।',
        ],
        pEn: [
          'Fifteen to eighteen: open a minor’s bank account and genuinely hand over a monthly budget — phone recharge, eating out, friends’ gifts all from it. Mistakes will happen; mistakes are the syllabus. A budget that dies mid-month is next month’s best classroom — provided no silent top-up arrives from above. Alongside, discuss current scams at home the way road safety is discussed: fake gaming top-up offers, "send a screenshot" traps, unknown links — teenage fraud has its own fashions.',
          'And finally the rule that joins all three steps: no money silence at home. A child raised at a table where the month’s plan, the stories of past mistakes and the occasional "we can’t this time" are spoken openly will hold money like a tool in the digital world too — not like magic, and not like shame. The beep is then just a sound; the understanding lives inside the child.',
        ],
      },
    ],
  },
];
