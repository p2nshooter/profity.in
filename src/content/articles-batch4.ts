import type { Article } from './articles';

/**
 * Batch 4 (13 Oct 2026) — five new hand-written bilingual guides, each
 * 1,500+ words in both Hindi and English: Sukanya Samriddhi Yojana, the
 * Senior Citizens’ Savings Scheme, reading a mutual fund factsheet, the RBI
 * Ombudsman route for bank complaints, and real (after-inflation, after-tax)
 * returns. Rates that the government resets every quarter are deliberately
 * not quoted; readers are pointed to the official notification instead.
 */
export const ARTICLES_BATCH4: Article[] = [
  {
    slug: 'sukanya-samriddhi-yojana-guide',
    category: 'bachat',
    titleHi: 'सुकन्या समृद्धि योजना: बेटी के भविष्य के लिए पूरी गाइड, नियम और समझदारी भरा इस्तेमाल',
    titleEn: 'Sukanya Samriddhi Yojana: A Complete Guide to the Daughter’s Savings Scheme, Its Rules and Its Sensible Use',
    excerptHi: 'बेटी के नाम पर खुलने वाला यह सरकारी खाता कर-मुक्त, सुरक्षित और अनुशासित बचत का रास्ता है। कौन खोल सकता है, कितना जमा होता है, पैसा कब निकलता है, और इसे पूरी योजना में कहाँ रखें।',
    excerptEn: 'This government-backed account in a daughter’s name is a safe, tax-free and disciplined way to save. Who can open it, how much goes in, when the money comes out, and where it fits in a family’s overall plan.',
    date: '2026-10-13',
    minutes: 12,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बेटी के जन्म के साथ ही ज़्यादातर माता-पिता के मन में दो सवाल आते हैं: उसकी पढ़ाई का ख़र्च कैसे जुटेगा, और आगे चलकर उसके जीवन की बड़ी ज़रूरतों के लिए क्या तैयारी हो। भारत सरकार की सुकन्या समृद्धि योजना (SSY) इन्हीं सवालों को ध्यान में रखकर 2015 में “बेटी बचाओ, बेटी पढ़ाओ” अभियान के साथ शुरू की गई।',
          'यह एक छोटी बचत योजना है, जिसमें पैसा सरकार की गारंटी के साथ सुरक्षित रहता है, ब्याज पर कोई कर नहीं लगता, और खाते के नियम इस तरह बने हैं कि पैसा सही समय से पहले ख़र्च न हो। इस लेख में हम योजना के हर नियम को सरल भाषा में समझेंगे, उसकी ताक़त और सीमाएँ देखेंगे, और यह भी कि इसे परिवार की बाक़ी वित्तीय योजना के साथ कैसे जोड़ें। ब्याज दर सरकार हर तिमाही तय करती है, इसलिए हम यहाँ कोई दर नहीं लिख रहे; खाता खोलने से पहले डाकघर या बैंक से उस तिमाही की आधिकारिक दर ज़रूर पूछ लें।',
        ],
        pEn: [
          'When a daughter is born, most parents soon face two questions: how will her education be paid for, and how can they prepare for the big needs of her later life? The Government of India’s Sukanya Samriddhi Yojana (SSY) was launched in 2015, alongside the “Beti Bachao, Beti Padhao” campaign, with exactly these questions in mind.',
          'It is a small savings scheme in which the money is safe under a government guarantee, the interest is not taxed, and the rules of the account are built so that the money is not spent before its time. This article explains every rule in plain language, looks at the scheme’s strengths and limits, and shows how to fit it into a family’s wider financial plan. The government sets the interest rate every quarter, so we do not quote one here; before opening the account, ask the post office or bank for the official rate for that quarter.',
        ],
      },
      {
        hHi: 'कौन खाता खोल सकता है',
        hEn: 'Who can open the account',
        pHi: [
          'खाता बेटी के नाम पर उसके माता-पिता या क़ानूनी अभिभावक खोलते हैं, और बेटी की उम्र दस साल से कम होनी चाहिए। एक बेटी के नाम पर केवल एक खाता खुल सकता है, और एक परिवार सामान्य रूप से दो बेटियों के लिए खाते खोल सकता है। जुड़वाँ या एक साथ तीन बेटियों के जन्म जैसी स्थिति में नियमों के तहत तीसरे खाते की अनुमति है।',
          'खाता डाकघर में या उन बैंकों में खुलता है जिन्हें सरकार ने इसके लिए अधिकृत किया है। बेटी का जन्म प्रमाणपत्र, अभिभावक के पहचान और पते के दस्तावेज़, और तस्वीरें आम तौर पर माँगी जाती हैं। खाता भारत में कहीं भी एक शाखा से दूसरी शाखा या डाकघर से बैंक में स्थानांतरित किया जा सकता है, जिससे नौकरी बदलने या शहर बदलने पर परेशानी नहीं होती।',
        ],
        pEn: [
          'The account is opened in the daughter’s name by her parent or legal guardian, and she must be under ten years of age. Only one account can be opened for each daughter, and a family can normally open accounts for two daughters. Where twins or triplets are born, the rules allow a third account.',
          'Accounts are opened at post offices or at banks the government has authorised for the scheme. A birth certificate for the girl, identity and address documents for the guardian, and photographs are usually required. The account can be transferred anywhere in India, from one branch to another or from a post office to a bank, so a change of job or city causes no trouble.',
        ],
      },
      {
        hHi: 'कितना जमा होता है, और कब तक',
        hEn: 'How much goes in, and for how long',
        pHi: [
          'हर वित्त वर्ष में कम से कम ₹250 और अधिकतम ₹1.5 लाख जमा किए जा सकते हैं। पैसा एक बार में या कई किस्तों में जमा हो सकता है; कोई तय मासिक राशि ज़रूरी नहीं। जमा करने की अवधि खाता खुलने से पंद्रह साल तक है, जबकि खाता इक्कीस साल पर परिपक्व होता है। यानी आख़िरी छह साल आप कुछ जमा नहीं करते, पर जमा राशि पर ब्याज मिलता रहता है।',
          'अगर किसी साल न्यूनतम राशि जमा न हो, तो खाता “डिफ़ॉल्ट” में चला जाता है। उसे बाद में हर चूके हुए साल की न्यूनतम राशि और एक छोटा जुर्माना देकर फिर से चालू किया जा सकता है। इसलिए सबसे आसान तरीक़ा है बैंक खाते से एक स्थायी निर्देश (स्टैंडिंग इंस्ट्रक्शन) या हर साल अप्रैल में एक तय तारीख़ पर जमा करने की आदत, ताकि खाता कभी डिफ़ॉल्ट न हो और ब्याज पूरे साल मिले।',
        ],
        pEn: [
          'A minimum of ₹250 and a maximum of ₹1.5 lakh can be deposited in each financial year. The money can go in at once or in several instalments; no fixed monthly amount is required. Deposits are made for fifteen years from opening, while the account matures at twenty-one years. So for the last six years you deposit nothing, but the balance keeps earning interest.',
          'If the minimum is not deposited in a given year, the account falls into “default”. It can be revived later by paying the minimum for each missed year plus a small penalty. The easiest approach is a standing instruction from your bank account, or the habit of depositing on a fixed date each April, so that the account never defaults and earns interest for the whole year.',
        ],
      },
      {
        hHi: 'अप्रैल में जमा करना क्यों फ़ायदेमंद है',
        hEn: 'Why depositing in April pays',
        pHi: [
          'इस योजना में ब्याज की गणना हर महीने की पाँच तारीख़ से महीने के अंत तक के सबसे कम शेष पर होती है, और ब्याज साल के अंत में खाते में जुड़ता है। इसका व्यावहारिक अर्थ यह है कि किसी महीने पाँच तारीख़ के बाद जमा किया पैसा उस महीने का ब्याज नहीं कमाता।',
          'इसलिए अगर संभव हो, तो पूरे साल की रक़म वित्त वर्ष की शुरुआत में, यानी 1 से 5 अप्रैल के बीच, जमा कीजिए। इससे पूरी रक़म बारह महीने ब्याज कमाती है। जो परिवार एक साथ बड़ी रक़म नहीं डाल सकते, वे हर महीने पाँच तारीख़ से पहले जमा करने की आदत डालें। यह छोटा-सा अनुशासन पंद्रह साल में अच्छा-ख़ासा फ़र्क़ पैदा करता है।',
        ],
        pEn: [
          'In this scheme interest is calculated on the lowest balance between the fifth day and the end of each month, and it is credited at the end of the year. In practice this means money deposited after the fifth of a month earns no interest for that month.',
          'So, where possible, deposit the whole year’s amount at the start of the financial year, between 1 and 5 April. The full sum then earns interest for twelve months. Families who cannot put in a lump sum should get into the habit of depositing before the fifth of each month. That small discipline makes a noticeable difference over fifteen years.',
        ],
      },
      {
        hHi: 'कर का फ़ायदा',
        hEn: 'The tax advantage',
        pHi: [
          'सुकन्या समृद्धि योजना को अक्सर “EEE” कहा जाता है: पुरानी कर व्यवस्था में जमा राशि पर धारा 80C के तहत कटौती मिलती है, ब्याज कर-मुक्त है, और परिपक्वता पर मिलने वाली पूरी राशि भी कर-मुक्त है। सुरक्षित बचत योजनाओं में यह संयोजन बहुत कम मिलता है।',
          'एक ज़रूरी बात ध्यान रखिए: धारा 80C की कटौती केवल पुरानी कर व्यवस्था चुनने वालों को मिलती है। नई कर व्यवस्था में जमा पर कटौती नहीं मिलती, लेकिन ब्याज और परिपक्वता राशि का कर-मुक्त होना फिर भी इस योजना को आकर्षक बनाता है। अपनी कर व्यवस्था के हिसाब से इसका पूरा लाभ आँकिए, और ज़रूरत हो तो किसी कर-सलाहकार से बात कीजिए।',
        ],
        pEn: [
          'Sukanya Samriddhi Yojana is often described as “EEE”: under the old tax regime the deposit qualifies for a deduction under Section 80C, the interest is tax-free, and the entire maturity amount is tax-free too. Among safe savings schemes that combination is rare.',
          'Keep one point in mind: the Section 80C deduction is available only to those who choose the old tax regime. Under the new regime there is no deduction for the deposit, but tax-free interest and a tax-free maturity amount still make the scheme attractive. Assess its full benefit according to your own regime, and talk to a tax adviser if needed.',
        ],
      },
      {
        hHi: 'पैसा कब और कैसे निकलता है',
        hEn: 'When and how the money comes out',
        pHi: [
          'योजना का पूरा ढाँचा इस बात पर टिका है कि पैसा बेटी की असली ज़रूरतों के समय काम आए। बेटी के अठारह साल की होने या दसवीं कक्षा पास करने के बाद, उसकी उच्च शिक्षा के लिए, पिछले वित्त वर्ष के अंत के शेष का अधिकतम पचास प्रतिशत निकाला जा सकता है। इसके लिए प्रवेश या फ़ीस से जुड़े दस्तावेज़ देने होते हैं।',
          'अठारह साल के बाद बेटी के विवाह के समय खाता समय से पहले बंद किया जा सकता है, और गंभीर बीमारी जैसे करुणा-आधारित कारणों में भी नियमों के तहत समय से पहले बंद करने की अनुमति है। अठारह साल की होने के बाद खाते का संचालन बेटी स्वयं करती है। सामान्य स्थिति में खाता इक्कीस साल पर परिपक्व होता है और पूरी राशि बेटी को मिलती है।',
        ],
        pEn: [
          'The whole structure of the scheme rests on the money being available when the daughter genuinely needs it. Once she turns eighteen or passes Class 10, up to fifty per cent of the balance at the end of the previous financial year can be withdrawn for her higher education, on producing admission or fee documents.',
          'After eighteen, the account can be closed early at the time of her marriage, and the rules also allow early closure on compassionate grounds such as serious illness. Once she turns eighteen, the daughter operates the account herself. In the normal course the account matures at twenty-one years and the full amount goes to her.',
        ],
      },
      {
        hHi: 'ताक़त: सुरक्षा, अनुशासन और कर-मुक्ति',
        hEn: 'Strengths: safety, discipline and tax freedom',
        pHi: [
          'इस योजना की सबसे बड़ी ताक़त उसकी सुरक्षा है: पैसा भारत सरकार की छोटी बचत योजनाओं के ढाँचे में है, और बाज़ार के उतार-चढ़ाव का उस पर कोई असर नहीं। दूसरी ताक़त अनुशासन है: लंबी लॉक-इन अवधि और सीमित निकासी के नियम उस पैसे को रोज़मर्रा की ज़रूरतों में ख़र्च होने से बचाते हैं, जो अक्सर बचत का सबसे बड़ा दुश्मन है।',
          'तीसरी ताक़त कर-मुक्ति है, जो लंबे समय में चक्रवृद्धि ब्याज का पूरा लाभ परिवार तक पहुँचाती है। और चौथी, इसकी सरलता: न कोई फ़ंड चुनना, न बाज़ार पर नज़र रखना, बस हर साल समय पर जमा करना।',
        ],
        pEn: [
          'The scheme’s greatest strength is safety: the money sits within the framework of the Government of India’s small savings schemes, untouched by market swings. Its second strength is discipline: the long lock-in and limited withdrawals keep the money from being spent on everyday needs, which is often the biggest enemy of saving.',
          'The third strength is tax freedom, which delivers the full benefit of compounding to the family over the long run. And the fourth is simplicity: no fund to choose, no market to watch, only a deposit made on time each year.',
        ],
      },
      {
        hHi: 'सीमाएँ: तरलता और महँगाई',
        hEn: 'Limits: liquidity and inflation',
        pHi: [
          'हर योजना की तरह इसकी भी सीमाएँ हैं। पहली, पैसा लंबे समय के लिए बँध जाता है; किसी आपात स्थिति में इसे आसानी से नहीं निकाला जा सकता। इसलिए सुकन्या खाते को कभी आपात कोष की जगह मत रखिए; आपात कोष अलग और आसानी से निकलने वाली जगह पर होना चाहिए।',
          'दूसरी, ब्याज दर तय नहीं है; सरकार उसे हर तिमाही बदल सकती है। तीसरी, ब्याज सुरक्षित है पर बहुत ऊँचा नहीं, और लंबे समय में उच्च शिक्षा का ख़र्च महँगाई से तेज़ बढ़ता है। पंद्रह-बीस साल की अवधि वाले लक्ष्य के लिए केवल एक सुरक्षित योजना पर निर्भर रहना कई बार पर्याप्त नहीं होता, और यहीं संतुलन की ज़रूरत आती है।',
        ],
        pEn: [
          'Like every scheme, this one has limits. First, the money is locked away for a long time; in an emergency it cannot be withdrawn easily. So never use a Sukanya account in place of an emergency fund; that fund belongs somewhere separate and easy to access.',
          'Second, the rate is not fixed; the government can change it every quarter. Third, the interest is safe but not very high, and over long periods the cost of higher education tends to rise faster than general inflation. For a goal fifteen or twenty years away, relying on a single safe scheme is often not enough, and that is where balance comes in.',
        ],
      },
      {
        hHi: 'परिवार की योजना में इसकी जगह',
        hEn: 'Its place in the family plan',
        pHi: [
          'एक समझदार तरीक़ा है बेटी के लक्ष्यों के लिए “दो टोकरी” सोचना। सुकन्या खाता सुरक्षित टोकरी है, जो एक भरोसेमंद न्यूनतम राशि की गारंटी देती है। दूसरी टोकरी लंबी अवधि के विकास के लिए हो सकती है, जैसे इक्विटी म्यूचुअल फ़ंड में नियमित SIP, जो महँगाई को पीछे छोड़ने की संभावना रखती है, पर उतार-चढ़ाव के साथ।',
          'दोनों के बीच अनुपात परिवार की आय, जोखिम सहने की क्षमता और लक्ष्य तक के समय पर निर्भर है। और इन सबसे पहले दो चीज़ें ज़रूरी हैं: कमाने वाले सदस्य के लिए पर्याप्त टर्म बीमा, ताकि उनकी अनुपस्थिति में भी योजना चलती रहे, और परिवार के लिए स्वास्थ्य बीमा। सुरक्षा पहले, बचत उसके बाद।',
        ],
        pEn: [
          'A sensible approach is to think of “two baskets” for a daughter’s goals. The Sukanya account is the safe basket, guaranteeing a dependable minimum. The second basket can be for long-term growth, such as a regular SIP in an equity mutual fund, which has the potential to outpace inflation, but with ups and downs.',
          'The split between the two depends on the family’s income, its tolerance for risk and the time until the goal. And before all of this, two things come first: adequate term insurance for the earning member, so that the plan continues even in their absence, and health insurance for the family. Protection first, saving after.',
        ],
      },
      {
        hHi: 'आम ग़लतियाँ',
        hEn: 'Common mistakes',
        pHi: [
          'पहली ग़लती: खाता खोलकर भूल जाना और न्यूनतम राशि भी जमा न करना, जिससे खाता डिफ़ॉल्ट हो जाता है। दूसरी: महीने के बीच में जमा करना और ब्याज का एक महीना गँवाना। तीसरी: इस खाते को आपात कोष मान लेना। चौथी: यह मानना कि अकेला यह खाता उच्च शिक्षा का पूरा ख़र्च उठा लेगा, बिना यह हिसाब लगाए कि पंद्रह साल बाद वह ख़र्च कितना होगा।',
          'पाँचवीं ग़लती दस्तावेज़ों से जुड़ी है: पासबुक और खाते की जानकारी परिवार में केवल एक व्यक्ति को पता होना। खाते का विवरण, पासबुक की जगह और शाखा का पता घर के दूसरे वयस्क को भी बताकर रखिए, ताकि किसी भी स्थिति में खाता अनदेखा न रह जाए।',
        ],
        pEn: [
          'The first mistake: opening the account and forgetting it, not even depositing the minimum, so that it falls into default. The second: depositing in the middle of the month and losing a month’s interest. The third: treating the account as an emergency fund. The fourth: assuming this account alone will cover higher education, without working out what that will cost fifteen years from now.',
          'The fifth mistake concerns paperwork: only one person in the family knowing about the passbook and the account details. Tell another adult at home the account details, where the passbook is kept and the branch address, so that the account is never overlooked whatever happens.',
        ],
      },
      {
        hHi: 'खाता खोलने की एक छोटी सूची',
        hEn: 'A short checklist for opening the account',
        pHi: [
          'बेटी का जन्म प्रमाणपत्र, अभिभावक का आधार और पैन, पते का प्रमाण और तस्वीरें तैयार रखिए। डाकघर या अधिकृत बैंक में फ़ॉर्म भरिए और पहली जमा राशि दीजिए। उस तिमाही की ब्याज दर लिखित में पूछिए। खाते में नामांकन और संपर्क विवरण सही दर्ज कराइए। और अपने बैंक खाते से हर साल अप्रैल की शुरुआत में स्वचालित जमा का निर्देश सेट कर दीजिए।',
        ],
        pEn: [
          'Have the girl’s birth certificate, the guardian’s Aadhaar and PAN, proof of address and photographs ready. Fill in the form at the post office or an authorised bank and make the first deposit. Ask for the rate for that quarter in writing. Make sure contact details are recorded correctly. And set up an automatic deposit from your bank account at the start of each April.',
        ],
      },
      {
        hHi: 'बेटी को भी इस खाते के बारे में बताइए',
        hEn: 'Tell your daughter about the account too',
        pHi: [
          'यह खाता केवल बचत नहीं, सीखने का एक मौक़ा भी है। जब बेटी दस-बारह साल की हो, तो उसे पासबुक दिखाइए और समझाइए कि हर साल की जमा और ब्याज से राशि कैसे बढ़ती है। अठारह साल की होने पर खाते का संचालन वही करेगी, इसलिए उससे पहले उसे बैंक या डाकघर की प्रक्रिया, ब्याज की गणना और निकासी के नियम समझा देना उसे आत्मविश्वास देता है।',
          'कई परिवार हर साल अप्रैल में जमा करते समय बेटी को साथ ले जाते हैं। यह छोटी-सी रस्म उसे सिखाती है कि बड़े लक्ष्य धीरे-धीरे, नियमित कदमों से पूरे होते हैं, और यही सीख उसकी अपनी कमाई के दिनों में सबसे ज़्यादा काम आएगी।',
        ],
        pEn: [
          'The account is not only savings but a chance to learn. When your daughter is ten or twelve, show her the passbook and explain how each year’s deposit and interest make the balance grow. She will operate the account herself at eighteen, so explaining the bank or post office procedure, how interest is calculated and the withdrawal rules before then gives her confidence.',
          'Many families take their daughter along when they make the April deposit each year. That small ritual teaches her that big goals are reached slowly, through regular steps, and it is the lesson that will serve her best once she is earning herself.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'सुकन्या समृद्धि योजना दस साल से कम उम्र की बेटी के नाम पर खुलती है; हर साल ₹250 से ₹1.5 लाख तक, पंद्रह साल जमा, इक्कीस साल पर परिपक्वता। पुरानी कर व्यवस्था में 80C की कटौती, और ब्याज व परिपक्वता राशि कर-मुक्त। अठारह के बाद पढ़ाई के लिए आधी राशि निकल सकती है।',
          'यह सुरक्षित और अनुशासित टोकरी है, पर आपात कोष नहीं और अकेला पूरा समाधान भी नहीं। समय पर, बेहतर हो तो अप्रैल की शुरुआत में जमा कीजिए, बीमा पहले रखिए, और लंबे लक्ष्य के लिए विकास वाली टोकरी भी सोचिए। यह लेख सामान्य जानकारी है, निवेश या कर सलाह नहीं; नियम और दरें बदल सकती हैं, इसलिए खाता खोलने से पहले डाकघर, बैंक या सरकार की आधिकारिक अधिसूचना से ताज़ा जानकारी लें।',
        ],
        pEn: [
          'Sukanya Samriddhi Yojana is opened in the name of a daughter under ten; ₹250 to ₹1.5 lakh a year, deposits for fifteen years, maturity at twenty-one. Under the old tax regime there is a Section 80C deduction, and the interest and maturity amount are tax-free. After eighteen, half the balance can be withdrawn for education.',
          'It is a safe and disciplined basket, but not an emergency fund and not a complete solution on its own. Deposit on time, ideally at the start of April, keep insurance in place first, and consider a growth basket for long goals. This article is general information, not investment or tax advice; rules and rates can change, so check the latest details with the post office, bank or the government’s official notification before opening an account.',
        ],
      },
    ],
  },
  {
    slug: 'senior-citizens-savings-scheme-guide',
    category: 'bachat',
    titleHi: 'वरिष्ठ नागरिक बचत योजना (SCSS): सेवानिवृत्ति के बाद नियमित आय का सुरक्षित रास्ता',
    titleEn: 'The Senior Citizens’ Savings Scheme (SCSS): A Safe Route to Regular Income After Retirement',
    excerptHi: 'सेवानिवृत्ति के बाद हर तिमाही नियमित ब्याज, सरकार की गारंटी और खाता खुलते समय तय दर — SCSS कई परिवारों की पहली पसंद क्यों है, कौन खोल सकता है, कर कैसे लगता है, और इसे अकेला सहारा क्यों न बनाएँ।',
    excerptEn: 'Regular quarterly interest after retirement, a government guarantee and a rate fixed at opening — why SCSS is many families’ first choice, who can open it, how it is taxed, and why it should not be the only support.',
    date: '2026-10-13',
    minutes: 12,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'सेवानिवृत्ति के दिन वेतन बंद हो जाता है, पर ख़र्च नहीं। बिजली का बिल, दवाइयाँ, घर का राशन और परिवार की ज़रूरतें हर महीने आती रहती हैं। इसलिए सेवानिवृत्ति के बाद की योजना का पहला सवाल यही होता है: हर महीने या हर तिमाही भरोसेमंद आय कहाँ से आएगी, और जमा पूँजी सुरक्षित कैसे रहेगी?',
          'भारत सरकार की वरिष्ठ नागरिक बचत योजना (Senior Citizens’ Savings Scheme, SCSS) इसी ज़रूरत के लिए बनी है। यह डाकघर और अधिकृत बैंकों में उपलब्ध एक छोटी बचत योजना है, जिसमें हर तिमाही ब्याज खाते में आता है, और खाता खोलते समय जो दर लागू होती है वही पूरी अवधि तक रहती है। इस लेख में हम योजना के नियम, कर, सीमाएँ और समझदारी भरा इस्तेमाल सरल भाषा में समझेंगे। ब्याज दर सरकार हर तिमाही घोषित करती है, इसलिए खाता खोलने से पहले उस तिमाही की आधिकारिक दर ज़रूर देखें।',
        ],
        pEn: [
          'On the day of retirement the salary stops, but the expenses do not. Electricity bills, medicines, groceries and the family’s needs keep arriving every month. So the first question in any retirement plan is this: where will dependable monthly or quarterly income come from, and how will the savings stay safe?',
          'The Government of India’s Senior Citizens’ Savings Scheme (SCSS) is built for exactly that need. It is a small savings scheme available at post offices and authorised banks, in which interest is credited every quarter and the rate applicable when the account is opened stays for the whole term. This article explains the scheme’s rules, tax treatment, limits and sensible use in plain language. The government announces the rate every quarter, so check the official rate for that quarter before opening an account.',
        ],
      },
      {
        hHi: 'कौन खाता खोल सकता है',
        hEn: 'Who can open an account',
        pHi: [
          'साठ साल या उससे अधिक उम्र का कोई भी निवासी भारतीय SCSS खाता खोल सकता है। इसके अलावा, पचपन से साठ साल के बीच के वे लोग भी खाता खोल सकते हैं जिन्होंने स्वैच्छिक सेवानिवृत्ति या अधिवर्षिता पर सेवानिवृत्ति ली है, बशर्ते वे सेवानिवृत्ति लाभ मिलने के एक महीने के भीतर निवेश करें। सेवानिवृत्त रक्षा कर्मियों के लिए उम्र की सीमा और भी कम है, कुछ शर्तों के साथ।',
          'खाता अकेले या केवल पति या पत्नी के साथ संयुक्त रूप से खोला जा सकता है। संयुक्त खाते में पूरी राशि पहले खाताधारक की मानी जाती है। अनिवासी भारतीय (NRI) इस योजना में खाता नहीं खोल सकते। खाते में नामांकन ज़रूर दर्ज कराइए, ताकि किसी अनहोनी में परिवार को पैसा पाने में परेशानी न हो।',
        ],
        pEn: [
          'Any resident Indian aged sixty or over can open an SCSS account. In addition, people between fifty-five and sixty who have retired on superannuation or voluntary retirement can open one, provided they invest within one month of receiving their retirement benefits. For retired defence personnel the age limit is lower still, subject to conditions.',
          'The account can be held singly, or jointly with one’s spouse only. In a joint account the entire amount is treated as belonging to the first holder. Non-resident Indians (NRIs) cannot open an account in this scheme. Always register a nomination, so that the family faces no difficulty in claiming the money if something happens.',
        ],
      },
      {
        hHi: 'कितना जमा कर सकते हैं',
        hEn: 'How much can be deposited',
        pHi: [
          'न्यूनतम जमा ₹1,000 है, और राशि ₹1,000 के गुणकों में जमा होती है। सभी SCSS खातों को मिलाकर एक व्यक्ति अधिकतम ₹30 लाख तक जमा कर सकता है; यह सीमा 2023 में ₹15 लाख से बढ़ाई गई थी। पति-पत्नी दोनों पात्र हों, तो दोनों अपनी-अपनी सीमा तक अलग खाते खोल सकते हैं, जिससे परिवार की कुल सुरक्षित नियमित आय बढ़ जाती है।',
          'राशि एक बार में जमा होती है; यह आवर्ती जमा नहीं है। इसलिए सेवानिवृत्ति पर मिली ग्रेच्युटी, भविष्य निधि या दूसरी एकमुश्त राशि का एक हिस्सा इसमें लगाना आम तरीक़ा है। ध्यान रहे, पूरी जमा पूँजी इसी एक जगह डाल देना समझदारी नहीं, इसके कारण आगे समझाए गए हैं।',
        ],
        pEn: [
          'The minimum deposit is ₹1,000, in multiples of ₹1,000. Across all SCSS accounts a person can deposit a maximum of ₹30 lakh; the limit was raised from ₹15 lakh in 2023. Where husband and wife are both eligible, each can open a separate account up to their own limit, which raises the family’s total safe regular income.',
          'The money is deposited once; this is not a recurring deposit. A common approach is to place part of the gratuity, provident fund or other lump sum received at retirement into it. Bear in mind that putting all one’s savings in this single place is not wise, for reasons explained below.',
        ],
      },
      {
        hHi: 'अवधि, ब्याज और भुगतान',
        hEn: 'Term, interest and payouts',
        pHi: [
          'खाता पाँच साल के लिए खुलता है, और नियमों के तहत इसे आगे तीन साल के लिए बढ़ाया जा सकता है। ब्याज हर तिमाही, यानी अप्रैल, जुलाई, अक्टूबर और जनवरी की पहली तारीख़ को देय होता है, और सीधे बचत खाते में भेजा जा सकता है। खाता खोलते समय जो दर लागू होती है, वही पूरे पाँच साल रहती है, भले ही बाद में सरकार दरें घटाए या बढ़ाए।',
          'यह “दर का ताला” इस योजना की एक बड़ी ख़ूबी है। सेवानिवृत्त व्यक्ति के लिए यह जानना कि अगले पाँच साल हर तिमाही ठीक कितनी रक़म आएगी, घर का बजट बनाना बहुत आसान कर देता है। तिमाही ब्याज को हर महीने के ख़र्च में बाँटने के लिए एक अलग बचत खाता रखिए, जिसमें से हर महीने एक तय रक़म निकाली जाए।',
        ],
        pEn: [
          'The account runs for five years and, under the rules, can be extended for a further three years. Interest is payable every quarter, on the first day of April, July, October and January, and can be sent straight to a savings account. The rate applicable when the account is opened stays for the full five years, even if the government later raises or lowers rates.',
          'That “rate lock” is one of the scheme’s great virtues. For a retired person, knowing exactly how much will arrive each quarter for the next five years makes the household budget far easier to plan. Keep a separate savings account to spread the quarterly interest across monthly expenses, withdrawing a fixed amount from it each month.',
        ],
      },
      {
        hHi: 'कर कैसे लगता है',
        hEn: 'How it is taxed',
        pHi: [
          'पुरानी कर व्यवस्था में SCSS में जमा राशि धारा 80C के तहत कटौती के योग्य है, कुल ₹1.5 लाख की सीमा के भीतर। लेकिन ब्याज पूरी तरह कर-योग्य है और व्यक्ति की आय में जुड़ता है। अगर एक वित्त वर्ष में ब्याज तय सीमा से ज़्यादा हो, तो बैंक या डाकघर स्रोत पर कर (TDS) काटते हैं।',
          'जिनकी कुल आय कर-योग्य सीमा से नीचे है, वे पात्रता होने पर फ़ॉर्म 15H जमा करके TDS से बच सकते हैं। वरिष्ठ नागरिकों के लिए ब्याज आय पर कुछ अलग कटौतियाँ भी कर क़ानून में हैं, जिनका लाभ कर व्यवस्था पर निर्भर है। सीमाएँ और नियम बजट के साथ बदलते रहते हैं, इसलिए हर साल रिटर्न भरने से पहले ताज़ा नियम देखिए या किसी कर-सलाहकार से पूछिए।',
        ],
        pEn: [
          'Under the old tax regime, the amount deposited in SCSS qualifies for a deduction under Section 80C, within the overall ₹1.5 lakh limit. But the interest is fully taxable and is added to the person’s income. If the interest in a financial year exceeds the set threshold, the bank or post office deducts tax at source (TDS).',
          'Those whose total income is below the taxable limit can, where eligible, submit Form 15H to avoid TDS. Tax law also contains some separate deductions on interest income for senior citizens, whose benefit depends on the regime chosen. Limits and rules change with budgets, so check the current rules before filing each year’s return, or ask a tax adviser.',
        ],
      },
      {
        hHi: 'समय से पहले बंद करना',
        hEn: 'Closing early',
        pHi: [
          'ज़रूरत पड़ने पर खाता पाँच साल से पहले भी बंद किया जा सकता है, लेकिन नियमों के तहत इस पर कटौती लगती है, और बहुत जल्दी बंद करने पर ब्याज का कुछ हिस्सा वापस लिया जाता है। इसलिए SCSS में वही पैसा रखिए जिसकी अगले पाँच साल ज़रूरत न पड़े।',
          'खाताधारक की मृत्यु होने पर खाता बंद हो जाता है और राशि नामांकित व्यक्ति या क़ानूनी वारिस को मिलती है। अगर जीवनसाथी संयुक्त धारक है या एकमात्र नामांकित है और स्वयं पात्र है, तो नियमों के तहत कुछ स्थितियों में खाता जारी रखा जा सकता है। ऐसे मामलों में शाखा से लिखित जानकारी लीजिए।',
        ],
        pEn: [
          'If needed, the account can be closed before five years, but the rules impose a deduction, and closing very early means part of the interest is recovered. So keep in SCSS only money you will not need for the next five years.',
          'On the death of the account holder the account is closed and the amount goes to the nominee or legal heir. Where the spouse is the joint holder or sole nominee and is eligible in their own right, the rules allow the account to continue in certain cases. In such matters, get the details in writing from the branch.',
        ],
      },
      {
        hHi: 'ताक़त: सुरक्षा और भरोसेमंद आय',
        hEn: 'Strengths: safety and dependable income',
        pHi: [
          'SCSS की सबसे बड़ी ताक़त यह है कि पूँजी सरकार की छोटी बचत योजनाओं के ढाँचे में सुरक्षित है, और बाज़ार गिरे तो भी जमा राशि नहीं घटती। दूसरी ताक़त तय तिमाही आय है, जो सेवानिवृत्त व्यक्ति को मानसिक शांति देती है। तीसरी, इसकी सरलता: एक बार जमा, और फिर हर तिमाही ब्याज, बिना किसी फ़ंड को चुनने या बाज़ार पर नज़र रखने के।',
          'यही कारण है कि बहुत से वित्तीय योजनाकार सेवानिवृत्ति की आय की “नींव” के रूप में SCSS जैसी सुरक्षित योजनाओं को रखते हैं, जिनसे घर का बुनियादी ख़र्च चलता रहे।',
        ],
        pEn: [
          'The greatest strength of SCSS is that the capital is safe within the framework of the government’s small savings schemes, and the deposit does not shrink when the market falls. The second is a fixed quarterly income, which gives a retired person peace of mind. The third is simplicity: one deposit, then interest every quarter, with no fund to choose and no market to watch.',
          'That is why many financial planners use safe schemes such as SCSS as the “foundation” of retirement income, covering the household’s basic expenses.',
        ],
      },
      {
        hHi: 'सीमाएँ: महँगाई और कर',
        hEn: 'Limits: inflation and tax',
        pHi: [
          'SCSS की आय तय है, पर ख़र्च तय नहीं रहते। दवाइयों और स्वास्थ्य सेवाओं का ख़र्च अक्सर सामान्य महँगाई से तेज़ बढ़ता है। जो रक़म आज घर का ख़र्च आराम से चला देती है, वह दस साल बाद कम पड़ सकती है। और क्योंकि ब्याज पर कर लगता है, ऊँची कर-श्रेणी वालों के लिए कर के बाद की असली आय कम हो जाती है।',
          'इसका अर्थ यह नहीं कि योजना कमज़ोर है; अर्थ यह है कि वह अकेली पर्याप्त नहीं। सेवानिवृत्ति बीस-पच्चीस साल या उससे लंबी हो सकती है, और इतनी लंबी अवधि में महँगाई से लड़ने के लिए पूँजी के एक हिस्से का बढ़ते रहना ज़रूरी है।',
        ],
        pEn: [
          'SCSS income is fixed, but expenses are not. The cost of medicines and healthcare often rises faster than general inflation. An amount that comfortably runs the household today may fall short ten years from now. And since the interest is taxed, the real after-tax income is lower for those in higher tax brackets.',
          'This does not mean the scheme is weak; it means it is not enough on its own. Retirement can last twenty or twenty-five years or longer, and over so long a period part of the capital needs to keep growing to keep pace with inflation.',
        ],
      },
      {
        hHi: 'सेवानिवृत्ति की योजना में संतुलन',
        hEn: 'Balance in a retirement plan',
        pHi: [
          'एक सरल ढाँचा इस तरह सोचा जा सकता है: पहला, एक आपात कोष, जो बचत खाते या लिक्विड फ़ंड में हो और कुछ महीनों का ख़र्च चला सके। दूसरा, स्वास्थ्य बीमा, जो सेवानिवृत्ति में सबसे बड़ा वित्तीय ख़तरा, यानी अस्पताल का बड़ा बिल, उठा सके। तीसरा, SCSS जैसी सुरक्षित योजनाएँ, जो नियमित आय की नींव बनें। और चौथा, पूँजी का एक छोटा, सोच-समझकर तय हिस्सा, जो लंबी अवधि में बढ़ने की संभावना रखे।',
          'हर परिवार के लिए अनुपात अलग होगा, जो उम्र, पेंशन, स्वास्थ्य और जोखिम सहने की क्षमता पर निर्भर है। बड़ी राशि का फ़ैसला करने से पहले किसी पंजीकृत, शुल्क-आधारित वित्तीय सलाहकार से बात करना समझदारी है, जो किसी उत्पाद की बिक्री पर कमीशन न लेता हो।',
        ],
        pEn: [
          'A simple framework can be pictured like this: first, an emergency fund in a savings account or liquid fund covering a few months’ expenses. Second, health insurance, to absorb the biggest financial threat in retirement, a large hospital bill. Third, safe schemes such as SCSS forming the foundation of regular income. And fourth, a small, carefully chosen share of capital with the potential to grow over the long term.',
          'The proportions will differ for each family, depending on age, pension, health and tolerance for risk. Before deciding on a large sum, it is wise to speak to a registered, fee-only financial adviser who does not earn commission on selling products.',
        ],
      },
      {
        hHi: 'बुज़ुर्गों को निशाना बनाने वाली बिक्री से सावधान',
        hEn: 'Beware of sales pitches aimed at the elderly',
        pHi: [
          'सेवानिवृत्ति पर एकमुश्त राशि मिलते ही बहुत-से “सलाहकार” और फ़ोन कॉल आने लगते हैं: ऊँचे रिटर्न की गारंटी वाली योजनाएँ, जटिल बीमा उत्पाद, या “सिर्फ़ आज” वाले प्रस्ताव। कई बार बैंक शाखा में भी FD की जगह कोई दूसरा उत्पाद बेचने की कोशिश होती है। याद रखिए, गारंटीड ऊँचा रिटर्न और कोई जोखिम नहीं, ये दोनों बातें एक साथ लगभग कभी सच नहीं होतीं।',
          'किसी भी काग़ज़ पर हस्ताक्षर करने से पहले उसे घर लाइए, परिवार के किसी सदस्य के साथ पढ़िए, और समझिए कि पैसा कहाँ जा रहा है, कब निकलेगा और शुल्क क्या हैं। जल्दबाज़ी का दबाव अपने आप में चेतावनी है।',
        ],
        pEn: [
          'As soon as a retirement lump sum arrives, a stream of “advisers” and phone calls begins: schemes promising guaranteed high returns, complex insurance products, or “today only” offers. Sometimes even a bank branch tries to sell another product in place of an FD. Remember: a guaranteed high return and no risk are almost never true together.',
          'Before signing any paper, take it home, read it with a family member, and understand where the money is going, when it can come out and what the charges are. Pressure to hurry is a warning in itself.',
        ],
      },
      {
        hHi: 'खाता खोलने की छोटी सूची',
        hEn: 'A short checklist for opening',
        pHi: [
          'उम्र का प्रमाण, आधार, पैन, पते का प्रमाण और तस्वीरें तैयार रखिए; पचपन से साठ वाले आवेदक सेवानिवृत्ति लाभ मिलने का प्रमाण भी रखें। उस तिमाही की दर लिखित में पूछिए, नामांकन भरिए, ब्याज के लिए बचत खाता जोड़िए, और अगर आय कर-योग्य सीमा से कम है और आप पात्र हैं, तो फ़ॉर्म 15H के बारे में पूछिए। खाते की रसीद और विवरण परिवार के किसी दूसरे सदस्य को भी बताकर रखिए।',
        ],
        pEn: [
          'Have proof of age, Aadhaar, PAN, proof of address and photographs ready; applicants between fifty-five and sixty should also keep proof of receiving retirement benefits. Ask for the quarter’s rate in writing, complete the nomination, link a savings account for the interest, and, if your income is below the taxable limit and you are eligible, ask about Form 15H. Share the receipt and account details with another family member too.',
        ],
      },
      {
        hHi: 'SCSS और वरिष्ठ नागरिक FD की तुलना',
        hEn: 'SCSS compared with senior citizen FDs',
        pHi: [
          'बैंक वरिष्ठ नागरिकों को सावधि जमा (FD) पर आम तौर पर कुछ अतिरिक्त ब्याज देते हैं, इसलिए दोनों की तुलना स्वाभाविक है। SCSS में पैसा सरकार की योजना में है, जबकि बैंक FD पर जमा बीमा और ऋण गारंटी निगम (DICGC) के तहत प्रति व्यक्ति, प्रति बैंक ₹5 लाख तक का बीमा होता है। इसलिए बड़ी राशि को एक ही बैंक की FD में रखने के बजाय कई बैंकों में बाँटना सुरक्षित माना जाता है।',
          'FD की अवधि लचीली होती है, एक साल से दस साल तक, और कई बैंक मासिक ब्याज का विकल्प भी देते हैं; SCSS की अवधि तय है और ब्याज तिमाही में आता है। दोनों पर ब्याज कर-योग्य है। व्यवहार में बहुत से परिवार दोनों का इस्तेमाल करते हैं: SCSS को नींव की तरह, और FD को लचीलेपन के लिए।',
        ],
        pEn: [
          'Banks usually pay senior citizens some extra interest on fixed deposits (FDs), so comparing the two is natural. In SCSS the money sits in a government scheme, while bank FDs are insured by the Deposit Insurance and Credit Guarantee Corporation (DICGC) up to ₹5 lakh per depositor per bank. So instead of keeping a large sum in one bank’s FDs, spreading it across several banks is considered safer.',
          'FD terms are flexible, from one year to ten, and many banks offer a monthly interest option; SCSS has a fixed term and pays quarterly. Interest on both is taxable. In practice many families use both: SCSS as the foundation, and FDs for flexibility.',
        ],
      },
      {
        hHi: 'सारी राशि एक साथ नहीं: सीढ़ी का तरीक़ा',
        hEn: 'Not everything at once: the ladder approach',
        pHi: [
          'पाँच साल बाद जब SCSS परिपक्व होगा, तब ब्याज दरें आज से कम भी हो सकती हैं। इस जोखिम को कम करने का एक तरीक़ा है “सीढ़ी”: पूरी सुरक्षित राशि को एक ही दिन एक ही योजना में डालने के बजाय, उसे अलग-अलग समय पर परिपक्व होने वाले हिस्सों में बाँटना, जैसे SCSS का एक हिस्सा और अलग-अलग अवधि की कुछ FD। इससे हर साल या दो साल में कुछ राशि परिपक्व होती है, और पूरी पूँजी कभी एक ही समय की दर पर निर्भर नहीं रहती।',
        ],
        pEn: [
          'When SCSS matures after five years, interest rates may be lower than today. One way to reduce that risk is a “ladder”: instead of putting the whole safe sum into one scheme on one day, divide it into parts that mature at different times, such as one portion in SCSS and a few FDs of different terms. Some money then matures every year or two, and the whole capital never depends on the rates of a single moment.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'SCSS साठ साल से अधिक उम्र वालों (और कुछ शर्तों के साथ पचपन से साठ वाले सेवानिवृत्तों) के लिए है; ₹1,000 से ₹30 लाख तक, पाँच साल की अवधि, विस्तार की सुविधा, और हर तिमाही ब्याज, खाता खुलते समय की दर पर। पुरानी कर व्यवस्था में जमा पर 80C कटौती, पर ब्याज कर-योग्य है।',
          'यह सेवानिवृत्ति की आय की मज़बूत नींव है, पर अकेला सहारा नहीं: आपात कोष, स्वास्थ्य बीमा और महँगाई से लड़ने वाला एक हिस्सा भी ज़रूरी हैं। यह लेख सामान्य जानकारी है, निवेश या कर सलाह नहीं; दरें और नियम बदलते हैं, इसलिए खाता खोलने से पहले डाकघर, बैंक या सरकार की आधिकारिक अधिसूचना से ताज़ा जानकारी लें।',
        ],
        pEn: [
          'SCSS is for those over sixty (and, with conditions, retirees between fifty-five and sixty); ₹1,000 to ₹30 lakh, a five-year term with an extension option, and interest every quarter at the rate applicable at opening. Under the old regime the deposit earns an 80C deduction, but the interest is taxable.',
          'It is a strong foundation for retirement income, but not the only support: an emergency fund, health insurance and a portion that fights inflation are needed too. This article is general information, not investment or tax advice; rates and rules change, so check the latest details with the post office, bank or the government’s official notification before opening an account.',
        ],
      },
    ],
  },
  {
    slug: 'mutual-fund-factsheet-kaise-padhein',
    category: 'nivesh',
    titleHi: 'म्यूचुअल फ़ंड फ़ैक्टशीट कैसे पढ़ें: हर पन्ने का मतलब, सरल भाषा में',
    titleEn: 'How to Read a Mutual Fund Factsheet: What Every Section Means, in Plain Language',
    excerptHi: 'खर्च अनुपात, बेंचमार्क, पोर्टफ़ोलियो, जोखिम-मीटर, YTM और ड्यूरेशन — फ़ंड कंपनियाँ हर महीने जो फ़ैक्टशीट छापती हैं, उसमें निवेशक के काम की लगभग हर बात होती है। उसे पढ़ने का आसान, क्रमवार तरीक़ा।',
    excerptEn: 'Expense ratio, benchmark, portfolio, riskometer, YTM and duration — the factsheet fund houses publish every month holds almost everything an investor needs. A simple, step-by-step way to read it.',
    date: '2026-10-13',
    minutes: 13,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'ज़्यादातर लोग म्यूचुअल फ़ंड पिछले साल के रिटर्न देखकर चुनते हैं: किस फ़ंड ने सबसे ज़्यादा कमाया, वही ले लो। यह तरीक़ा आसान है, पर अक्सर ग़लत नतीजे देता है, क्योंकि पिछले साल का विजेता अगले साल का विजेता हो, यह ज़रूरी नहीं। किसी फ़ंड को समझने का बेहतर रास्ता उसकी “फ़ैक्टशीट” है, जिसे हर फ़ंड कंपनी हर महीने अपनी वेबसाइट पर प्रकाशित करती है।',
          'फ़ैक्टशीट पहली नज़र में संख्याओं और शब्दों का जंगल लगती है। लेकिन उसके हिस्से तय होते हैं, और एक बार उनका अर्थ समझ लें, तो दस मिनट में किसी भी फ़ंड की असली तस्वीर दिख जाती है। यह लेख उसी पढ़ने का क्रम बताता है। ध्यान रहे, यह लेख किसी फ़ंड की सिफ़ारिश नहीं करता; उद्देश्य केवल यह समझाना है कि आप ख़ुद कैसे परखें।',
        ],
        pEn: [
          'Most people choose mutual funds by last year’s returns: whichever fund earned the most, buy that. It is easy, but it often leads to poor results, because last year’s winner is not necessarily next year’s. A better way to understand a fund is its “factsheet”, which every fund house publishes on its website every month.',
          'At first glance a factsheet looks like a jungle of numbers and terms. But its sections are standard, and once you understand what they mean, ten minutes shows you the true picture of any fund. This article sets out the order in which to read it. Note that it recommends no fund; the aim is only to explain how to judge for yourself.',
        ],
      },
      {
        hHi: 'पहले उद्देश्य और श्रेणी',
        hEn: 'First, the objective and the category',
        pHi: [
          'फ़ैक्टशीट का पहला हिस्सा फ़ंड का निवेश उद्देश्य और उसकी श्रेणी बताता है। भारत में बाज़ार नियामक SEBI ने 2017 में फ़ंडों की श्रेणियाँ तय कीं, ताकि एक ही नाम के फ़ंड एक जैसे काम करें। उदाहरण के लिए, लार्ज-कैप फ़ंड को अपने पैसे का बड़ा हिस्सा बाज़ार पूँजीकरण के हिसाब से सबसे बड़ी सौ कंपनियों में लगाना होता है, मिड-कैप को उसके बाद की डेढ़ सौ में, और स्मॉल-कैप को उससे छोटी कंपनियों में।',
          'यह हिस्सा सबसे पहले इसलिए पढ़िए, क्योंकि यही बताता है कि आप किस चीज़ में पैसा लगा रहे हैं। अगर आपका लक्ष्य तीन साल बाद घर की डाउन-पेमेंट है, तो स्मॉल-कैप फ़ंड का उद्देश्य आपके लक्ष्य से मेल नहीं खाता, चाहे उसका पिछले साल का रिटर्न कितना भी चमकदार हो।',
        ],
        pEn: [
          'The first part of a factsheet states the fund’s investment objective and its category. In 2017 SEBI, India’s market regulator, defined fund categories so that funds with the same label behave alike. A large-cap fund, for example, must put most of its money into the hundred largest companies by market capitalisation, a mid-cap fund into the next hundred and fifty, and a small-cap fund into companies smaller still.',
          'Read this part first because it tells you what you are actually investing in. If your goal is a home down-payment in three years, a small-cap fund’s objective does not match it, however dazzling last year’s return.',
        ],
      },
      {
        hHi: 'बेंचमार्क: तुलना की कसौटी',
        hEn: 'The benchmark: the yardstick for comparison',
        pHi: [
          'हर फ़ंड एक बेंचमार्क चुनता है, यानी बाज़ार का एक सूचकांक जिससे उसका प्रदर्शन तुलना किया जाए। SEBI के नियमों के अनुसार यह तुलना “टोटल रिटर्न इंडेक्स” (TRI) से होती है, जिसमें कंपनियों से मिलने वाला लाभांश भी जुड़ा होता है। इससे तुलना ज़्यादा ईमानदार होती है।',
          'एक सक्रिय फ़ंड का पूरा औचित्य यही है कि वह लंबे समय में अपने बेंचमार्क से बेहतर करे, ख़र्च काटने के बाद। अगर कोई फ़ंड पाँच-सात साल से लगातार अपने बेंचमार्क से पीछे है, तो यह सवाल पूछना बनता है कि उसके लिए ज़्यादा ख़र्च क्यों दिया जाए, जबकि उसी बेंचमार्क पर आधारित सस्ता इंडेक्स फ़ंड उपलब्ध है।',
        ],
        pEn: [
          'Every fund chooses a benchmark, a market index against which its performance is compared. Under SEBI’s rules the comparison is made with the “Total Return Index” (TRI), which includes the dividends paid by companies. That makes the comparison more honest.',
          'The whole justification for an actively managed fund is that it beats its benchmark over the long run, after costs. If a fund has trailed its benchmark consistently for five to seven years, it is fair to ask why you should pay more for it when a cheaper index fund tracking the same benchmark is available.',
        ],
      },
      {
        hHi: 'ख़र्च अनुपात: छोटी संख्या, बड़ा असर',
        hEn: 'The expense ratio: a small number, a large effect',
        pHi: [
          'ख़र्च अनुपात वह वार्षिक प्रतिशत है जो फ़ंड अपने प्रबंधन और संचालन के लिए आपकी राशि से लेता है। यह सीधे NAV में से कटता है, इसलिए आपको अलग से बिल नहीं दिखता, पर हर साल आपके रिटर्न से घटता है। फ़ैक्टशीट में आम तौर पर दो ख़र्च अनुपात दिखते हैं: “रेगुलर” प्लान का और “डायरेक्ट” प्लान का।',
          'डायरेक्ट प्लान 2013 से उपलब्ध हैं; उनमें वितरक का कमीशन नहीं होता, इसलिए ख़र्च कम होता है। रेगुलर प्लान में वितरक या सलाहकार का कमीशन शामिल होता है। एक प्रतिशत का अंतर छोटा लगता है, पर बीस साल में चक्रवृद्धि के कारण यह अंतिम राशि में बहुत बड़ा फ़र्क़ बन जाता है। अगर आप फ़ंड ख़ुद चुन सकते हैं, तो डायरेक्ट प्लान पर विचार कीजिए; अगर आपको सलाह चाहिए, तो जानिए कि आप उसके लिए कितना चुका रहे हैं।',
        ],
        pEn: [
          'The expense ratio is the annual percentage a fund takes from your money for its management and running costs. It is deducted directly from the NAV, so you never see a separate bill, but it reduces your return every year. A factsheet usually shows two expense ratios: one for the “regular” plan and one for the “direct” plan.',
          'Direct plans have been available since 2013; they carry no distributor commission, so their costs are lower. Regular plans include the commission paid to a distributor or adviser. A one per cent difference looks small, but over twenty years compounding turns it into a very large difference in the final amount. If you can choose funds yourself, consider the direct plan; if you want advice, know what you are paying for it.',
        ],
      },
      {
        hHi: 'पोर्टफ़ोलियो: पैसा असल में कहाँ है',
        hEn: 'The portfolio: where the money actually is',
        pHi: [
          'फ़ैक्टशीट में फ़ंड की सबसे बड़ी होल्डिंग्स, यानी जिन कंपनियों में उसने सबसे ज़्यादा पैसा लगाया है, और क्षेत्रवार बँटवारा, जैसे बैंकिंग, सूचना प्रौद्योगिकी या दवा उद्योग, दिए होते हैं। इक्विटी फ़ंडों में बड़ी, मध्यम और छोटी कंपनियों का अनुपात भी दिखता है।',
          'यह हिस्सा दो बातें बताता है। पहली, एकाग्रता: अगर शीर्ष दस होल्डिंग्स में पोर्टफ़ोलियो का बहुत बड़ा हिस्सा है, तो फ़ंड कुछ कंपनियों पर ज़्यादा निर्भर है। दूसरी, दोहराव: अगर आपके पास तीन फ़ंड हैं और तीनों की शीर्ष होल्डिंग्स लगभग वही हैं, तो आपने विविधता नहीं, एक ही चीज़ तीन बार ख़रीदी है।',
        ],
        pEn: [
          'A factsheet lists the fund’s largest holdings, the companies in which it has put the most money, and its split across sectors such as banking, information technology or pharmaceuticals. Equity funds also show their proportions in large, mid-sized and small companies.',
          'This section tells you two things. First, concentration: if the top ten holdings make up a very large share of the portfolio, the fund depends heavily on a few companies. Second, overlap: if you own three funds and all three share almost the same top holdings, you have not diversified; you have bought the same thing three times.',
        ],
      },
      {
        hHi: 'जोखिम-मीटर',
        hEn: 'The riskometer',
        pHi: [
          'हर फ़ंड के साथ एक “रिस्कोमीटर” छपता है, जो SEBI के नियमों के अनुसार फ़ंड के जोखिम को छह स्तरों में दिखाता है: कम, कम से मध्यम, मध्यम, मध्यम रूप से ऊँचा, ऊँचा और बहुत ऊँचा। ज़्यादातर इक्विटी फ़ंड “बहुत ऊँचा” पर होते हैं, और यह कोई चेतावनी का अपवाद नहीं, बल्कि शेयर बाज़ार की प्रकृति है।',
          'रिस्कोमीटर को अपने लक्ष्य की अवधि से मिलाइए। जो पैसा एक-दो साल में चाहिए, उसे “बहुत ऊँचे” जोखिम वाले फ़ंड में रखना समझदारी नहीं; जो पैसा पंद्रह साल बाद चाहिए, उसके लिए छोटी अवधि का उतार-चढ़ाव सहा जा सकता है। फ़ंड बदलते रहते हैं, और उनका रिस्कोमीटर भी हर महीने अपडेट होता है।',
        ],
        pEn: [
          'Each fund carries a “riskometer” which, under SEBI’s rules, shows its risk on six levels: low, low to moderate, moderate, moderately high, high and very high. Most equity funds sit at “very high”, and that is not an exceptional warning but the nature of the stock market.',
          'Match the riskometer to the time horizon of your goal. Money needed in a year or two does not belong in a “very high” risk fund; money needed in fifteen years can tolerate short-term swings. Funds change, and their riskometer is updated every month too.',
        ],
      },
      {
        hHi: 'जोखिम के अनुपात: उतार-चढ़ाव को मापना',
        hEn: 'Risk ratios: measuring the swings',
        pHi: [
          'इक्विटी फ़ंडों की फ़ैक्टशीट में अक्सर कुछ आँकड़े होते हैं: “स्टैंडर्ड डेविएशन”, जो बताता है कि फ़ंड के रिटर्न औसत से कितना ऊपर-नीचे होते रहे; “बीटा”, जो बताता है कि फ़ंड बाज़ार की तुलना में कितना ज़्यादा या कम हिलता है, एक से ज़्यादा बीटा मतलब बाज़ार से ज़्यादा उतार-चढ़ाव; और “शार्प रेशियो”, जो बताता है कि उठाए गए जोखिम के बदले कितना अतिरिक्त रिटर्न मिला।',
          'इन संख्याओं को अकेले मत पढ़िए; उन्हें उसी श्रेणी के दूसरे फ़ंडों से तुलना कीजिए। दो लार्ज-कैप फ़ंडों का रिटर्न एक जैसा हो, पर एक का उतार-चढ़ाव काफ़ी कम हो, तो वह अक्सर बेहतर विकल्प है, क्योंकि कम झटकों वाला सफ़र निवेशक को बीच में घबराकर निकलने से बचाता है।',
        ],
        pEn: [
          'Equity factsheets often include a few statistics: “standard deviation”, showing how far the fund’s returns have swung around their average; “beta”, showing how much more or less the fund moves than the market, with a beta above one meaning bigger swings than the market; and the “Sharpe ratio”, showing how much extra return was earned for the risk taken.',
          'Do not read these numbers in isolation; compare them with other funds in the same category. If two large-cap funds have similar returns but one swings noticeably less, it is often the better choice, because a smoother ride keeps the investor from panicking and leaving midway.',
        ],
      },
      {
        hHi: 'डेट फ़ंड: YTM, ड्यूरेशन और क्रेडिट गुणवत्ता',
        hEn: 'Debt funds: YTM, duration and credit quality',
        pHi: [
          'डेट फ़ंडों की फ़ैक्टशीट में तीन संख्याएँ सबसे ज़रूरी हैं। “यील्ड टू मैच्योरिटी” (YTM) बताती है कि फ़ंड के बॉन्ड अगर परिपक्वता तक रखे जाएँ, तो आज के भाव पर उनसे लगभग कितनी कमाई होगी, ख़र्च काटने से पहले। “मॉडिफ़ाइड ड्यूरेशन” बताती है कि ब्याज दरें एक प्रतिशत बदलें, तो फ़ंड का मूल्य लगभग कितना बदलेगा; ज़्यादा ड्यूरेशन मतलब ज़्यादा संवेदनशीलता।',
          'तीसरी है क्रेडिट गुणवत्ता: फ़ंड का कितना पैसा सरकारी प्रतिभूतियों और ऊँची रेटिंग वाले बॉन्ड में है, और कितना कम रेटिंग वाले बॉन्ड में। ऊँचा YTM अक्सर कम रेटिंग वाले बॉन्ड से आता है, यानी ज़्यादा जोखिम से। SEBI ने डेट फ़ंडों के लिए एक “संभावित जोखिम वर्ग” तालिका भी अनिवार्य की है, जो ब्याज दर जोखिम और क्रेडिट जोखिम दोनों को एक नज़र में दिखाती है।',
        ],
        pEn: [
          'In a debt fund factsheet three numbers matter most. “Yield to maturity” (YTM) shows roughly what the fund’s bonds would earn at today’s prices if held to maturity, before costs. “Modified duration” shows roughly how much the fund’s value would change if interest rates moved by one per cent; higher duration means greater sensitivity.',
          'The third is credit quality: how much of the fund is in government securities and highly rated bonds, and how much in lower-rated bonds. A high YTM often comes from lower-rated bonds, which means more risk. SEBI has also made a “potential risk class” table compulsory for debt funds, showing interest rate risk and credit risk together at a glance.',
        ],
      },
      {
        hHi: 'रिटर्न को सही ढंग से पढ़ना',
        hEn: 'Reading returns properly',
        pHi: [
          'फ़ैक्टशीट में अलग-अलग अवधियों के रिटर्न होते हैं: एक, तीन, पाँच और दस साल, और शुरुआत से। एक साल का रिटर्न सबसे ज़्यादा ध्यान खींचता है, पर सबसे कम बताता है, क्योंकि वह किसी एक अच्छे या बुरे साल से बहुत प्रभावित होता है। लंबी अवधि के रिटर्न और बेंचमार्क से उनकी तुलना ज़्यादा भरोसेमंद हैं।',
          'और भी बेहतर है “रोलिंग रिटर्न”, यानी कई अलग-अलग शुरुआती तारीख़ों से गिने गए तीन या पाँच साल के रिटर्न, जो दिखाते हैं कि फ़ंड ने अलग-अलग बाज़ार परिस्थितियों में कितनी लगातारता दिखाई। हर फ़ैक्टशीट में लिखा होता है कि पिछला प्रदर्शन भविष्य की गारंटी नहीं, और यह वाक्य औपचारिकता नहीं, सच्चाई है।',
        ],
        pEn: [
          'A factsheet gives returns over several periods: one, three, five and ten years, and since inception. The one-year return draws the most attention but tells the least, because a single good or bad year affects it heavily. Longer-period returns, and how they compare with the benchmark, are more reliable.',
          'Better still are “rolling returns”, three- or five-year returns calculated from many different starting dates, which show how consistent the fund has been across different market conditions. Every factsheet states that past performance is no guarantee of future results, and that sentence is not a formality but the truth.',
        ],
      },
      {
        hHi: 'फ़ंड प्रबंधक, एग्ज़िट लोड और पोर्टफ़ोलियो टर्नओवर',
        hEn: 'Fund manager, exit load and portfolio turnover',
        pHi: [
          'फ़ैक्टशीट बताती है कि फ़ंड कौन चला रहा है और कब से। अगर किसी फ़ंड का शानदार पिछला रिकॉर्ड किसी ऐसे प्रबंधक के समय का है जो अब नहीं है, तो वह रिकॉर्ड आज के फ़ंड के बारे में कम बताता है। “एग्ज़िट लोड” बताता है कि तय समय से पहले पैसा निकालने पर कितना शुल्क कटेगा।',
          '“पोर्टफ़ोलियो टर्नओवर” बताता है कि फ़ंड कितनी बार अपनी होल्डिंग्स बदलता है। बहुत ऊँचा टर्नओवर ज़्यादा ख़रीद-फ़रोख़्त और उससे जुड़े छिपे ख़र्चों का संकेत हो सकता है। अकेले यह कोई बुरी बात नहीं, पर इसे फ़ंड की शैली समझने के लिए ज़रूर देखिए।',
        ],
        pEn: [
          'The factsheet tells you who manages the fund and since when. If a fund’s splendid past record belongs to a manager who has since left, that record says less about today’s fund. The “exit load” tells you what charge applies if you withdraw before a set period.',
          '“Portfolio turnover” shows how often the fund changes its holdings. Very high turnover can signal frequent trading and the hidden costs that come with it. On its own it is not a bad thing, but look at it to understand the fund’s style.',
        ],
      },
      {
        hHi: 'दस मिनट का क्रम',
        hEn: 'A ten-minute routine',
        pHi: [
          'पहला मिनट: उद्देश्य और श्रेणी, क्या यह मेरे लक्ष्य से मेल खाता है? दूसरा और तीसरा: बेंचमार्क से तुलना, तीन, पाँच और दस साल पर। चौथा: डायरेक्ट और रेगुलर प्लान का ख़र्च अनुपात। पाँचवाँ और छठा: पोर्टफ़ोलियो की एकाग्रता और मेरे दूसरे फ़ंडों से दोहराव। सातवाँ: रिस्कोमीटर और जोखिम के अनुपात। आठवाँ: प्रबंधक और उसका कार्यकाल। नौवाँ: एग्ज़िट लोड। दसवाँ: अपने आप से पूछिए कि क्या मैं इस फ़ंड में तब भी बना रहूँगा जब यह एक साल में बीस-तीस प्रतिशत गिर जाए।',
          'आख़िरी सवाल सबसे ज़रूरी है। कोई भी फ़ैक्टशीट आपकी भावनाओं को नहीं माप सकती, और ज़्यादातर नुक़सान ग़लत फ़ंड से नहीं, ग़लत समय पर घबराकर निकलने से होता है।',
        ],
        pEn: [
          'Minute one: the objective and category; does it match my goal? Minutes two and three: comparison with the benchmark over three, five and ten years. Minute four: the expense ratio of the direct and regular plans. Minutes five and six: portfolio concentration and overlap with my other funds. Minute seven: the riskometer and risk ratios. Minute eight: the manager and their tenure. Minute nine: the exit load. Minute ten: ask yourself whether you would stay in this fund if it fell twenty or thirty per cent in a year.',
          'That last question matters most. No factsheet can measure your emotions, and most losses come not from the wrong fund but from panicking out at the wrong time.',
        ],
      },
      {
        hHi: '“स्टाइल ड्रिफ़्ट” पर नज़र',
        hEn: 'Watching for “style drift”',
        pHi: [
          'कभी-कभी फ़ंड धीरे-धीरे अपनी घोषित शैली से हटने लगता है, नियमों के भीतर रहते हुए भी। उदाहरण के लिए, कोई फ़्लेक्सी-कैप फ़ंड, जो पहले मुख्य रूप से बड़ी कंपनियों में था, धीरे-धीरे छोटी कंपनियों का हिस्सा बढ़ा सकता है, जिससे उसका जोखिम बदल जाता है। इसे “स्टाइल ड्रिफ़्ट” कहते हैं।',
          'इसे पकड़ने का तरीक़ा सरल है: साल में दो बार उसी फ़ंड की छह महीने पुरानी और नई फ़ैक्टशीट साथ रखकर बड़ी, मध्यम और छोटी कंपनियों का अनुपात और शीर्ष होल्डिंग्स मिलाइए। बड़ा बदलाव दिखे, तो सोचिए कि क्या फ़ंड अब भी आपके लक्ष्य के लिए सही है।',
        ],
        pEn: [
          'Sometimes a fund gradually drifts from its stated style, even while staying within the rules. A flexi-cap fund that once sat mainly in large companies, for example, may slowly raise its share of smaller companies, which changes its risk. This is called “style drift”.',
          'The way to catch it is simple: twice a year, place the fund’s factsheet from six months ago beside the latest one and compare the split between large, mid-sized and small companies and the top holdings. If you see a large change, consider whether the fund still suits your goal.',
        ],
      },
      {
        hHi: 'फ़ैक्टशीट कहाँ मिलती है',
        hEn: 'Where to find the factsheet',
        pHi: [
          'हर फ़ंड कंपनी अपनी वेबसाइट पर हर महीने फ़ैक्टशीट और पूरा पोर्टफ़ोलियो प्रकाशित करती है, और म्यूचुअल फ़ंड उद्योग की संस्था AMFI की वेबसाइट पर रोज़ का NAV मिलता है। किसी ऐप या वेबसाइट के सारांश पर निर्भर रहने के बजाय कम से कम एक बार मूल फ़ैक्टशीट ख़ुद खोलकर पढ़िए; कई बार सारांश में वही बातें छूट जाती हैं जो सबसे ज़रूरी होती हैं।',
        ],
        pEn: [
          'Every fund house publishes its factsheet and full portfolio on its website each month, and the daily NAV is available on the website of AMFI, the mutual fund industry body. Rather than relying on an app’s or website’s summary, open and read the original factsheet yourself at least once; summaries often leave out exactly the points that matter most.',
        ],
      },
      {
        hHi: 'अपने नोट्स रखिए',
        hEn: 'Keep your own notes',
        pHi: [
          'हर फ़ंड के लिए एक पन्ना रखिए, जिसमें आपने उसे क्यों चुना, किस लक्ष्य के लिए, और ख़र्च अनुपात व बेंचमार्क से तुलना क्या थी, यह लिखा हो। साल में एक बार उसी पन्ने से मिलाकर देखिए कि वे कारण अब भी सच हैं या नहीं।',
        ],
        pEn: [
          'Keep one page for each fund, noting why you chose it, for which goal, and what its expense ratio and benchmark comparison were at the time. Once a year, check against that page whether those reasons still hold.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'फ़ैक्टशीट हर महीने फ़ंड कंपनी की वेबसाइट पर मिलती है। उद्देश्य और श्रेणी से शुरू कीजिए, बेंचमार्क से लंबी अवधि की तुलना कीजिए, ख़र्च अनुपात देखिए, पोर्टफ़ोलियो की एकाग्रता और दोहराव जाँचिए, और रिस्कोमीटर को अपने लक्ष्य की अवधि से मिलाइए। डेट फ़ंडों में YTM, ड्यूरेशन और क्रेडिट गुणवत्ता को साथ पढ़िए।',
          'पिछले एक साल का रिटर्न सबसे कम भरोसेमंद संकेत है, और पिछला प्रदर्शन भविष्य की गारंटी नहीं। यह लेख शिक्षा के लिए है, किसी फ़ंड की सिफ़ारिश या निवेश सलाह नहीं; म्यूचुअल फ़ंड निवेश बाज़ार जोखिमों के अधीन हैं, और बड़ा फ़ैसला करने से पहले किसी पंजीकृत निवेश सलाहकार से बात करना समझदारी है।',
        ],
        pEn: [
          'Factsheets are published monthly on fund houses’ websites. Start with the objective and category, compare long-term returns with the benchmark, look at the expense ratio, check the portfolio for concentration and overlap, and match the riskometer to your goal’s horizon. For debt funds, read YTM, duration and credit quality together.',
          'Last year’s return is the least reliable signal, and past performance is no guarantee of the future. This article is for education, not a fund recommendation or investment advice; mutual fund investments are subject to market risks, and before a big decision it is wise to speak to a registered investment adviser.',
        ],
      },
    ],
  },
  {
    slug: 'rbi-ombudsman-bank-complaint',
    category: 'bachat',
    titleHi: 'बैंक से शिकायत का हल नहीं हुआ? RBI लोकपाल तक पहुँचने का पूरा तरीक़ा',
    titleEn: 'Bank Complaint Not Resolved? The Complete Route to the RBI Ombudsman',
    excerptHi: 'ग़लत कटौती, अनधिकृत लेन-देन, लोन या कार्ड से जुड़ी परेशानी — पहले बैंक से शिकायत, फिर 30 दिन बाद रिज़र्व बैंक की एकीकृत लोकपाल योजना। शुल्क-मुक्त यह रास्ता कैसे काम करता है, कब और कैसे शिकायत करें।',
    excerptEn: 'A wrong deduction, an unauthorised transaction, a loan or card problem — first complain to the bank, then, after 30 days, to the Reserve Bank’s Integrated Ombudsman Scheme. How this free route works, and when and how to use it.',
    date: '2026-10-13',
    minutes: 12,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'बैंकिंग में कभी न कभी हर किसी को कोई न कोई परेशानी होती है: खाते से बिना वजह शुल्क कटना, ATM से पैसा न निकलना पर खाते से कट जाना, किसी लोन की शर्तों में मनमाना बदलाव, क्रेडिट कार्ड पर ऐसा बिल जो आपने ख़र्च ही न किया हो, या किसी शिकायत का हफ़्तों तक जवाब न मिलना। ज़्यादातर लोग थककर हार मान लेते हैं, क्योंकि उन्हें लगता है कि बैंक के ख़िलाफ़ आगे जाना महँगा और कठिन है।',
          'सच यह है कि भारत में ग्राहकों के लिए एक मुफ़्त, सरल और प्रभावी रास्ता मौजूद है: भारतीय रिज़र्व बैंक की “एकीकृत लोकपाल योजना”। इस लेख में हम क़दम-दर-क़दम समझेंगे कि बैंक से शिकायत कैसे करें, कब लोकपाल के पास जाएँ, क्या दस्तावेज़ रखें, और किन बातों से शिकायत मज़बूत बनती है। यह क़ानूनी सलाह नहीं, सामान्य जानकारी है; नियमों के ताज़ा विवरण के लिए रिज़र्व बैंक की आधिकारिक वेबसाइट देखें।',
        ],
        pEn: [
          'Sooner or later almost everyone has a banking problem: a charge deducted from the account for no reason, an ATM that dispensed no cash but debited the account, an arbitrary change to a loan’s terms, a credit card bill for spending you never made, or a complaint that goes unanswered for weeks. Most people give up in exhaustion, believing that taking on a bank is expensive and difficult.',
          'The truth is that India offers customers a free, simple and effective route: the Reserve Bank of India’s Integrated Ombudsman Scheme. This article explains step by step how to complain to the bank, when to go to the Ombudsman, which documents to keep, and what makes a complaint strong. It is general information, not legal advice; for the latest details of the rules, see the Reserve Bank’s official website.',
        ],
      },
      {
        hHi: 'एकीकृत लोकपाल योजना क्या है',
        hEn: 'What the Integrated Ombudsman Scheme is',
        pHi: [
          'रिज़र्व बैंक ने नवंबर 2021 में “रिज़र्व बैंक – एकीकृत लोकपाल योजना, 2021” शुरू की। इसने बैंकों, ग़ैर-बैंकिंग वित्तीय कंपनियों और डिजिटल लेन-देन के लिए पहले से चल रही तीन अलग-अलग लोकपाल योजनाओं को एक कर दिया, और इसे “एक राष्ट्र, एक लोकपाल” का नाम दिया गया।',
          'इस योजना के तहत बैंक, ज़्यादातर बड़ी ग़ैर-बैंकिंग वित्तीय कंपनियाँ, भुगतान प्रणाली चलाने वाली कंपनियाँ, जैसे कई वॉलेट और कार्ड नेटवर्क, और क्रेडिट सूचना कंपनियाँ आती हैं। शिकायत का आधार व्यापक है: “सेवा में कमी”, यानी कोई भी ऐसा काम या चूक जिससे ग्राहक को नुक़सान या परेशानी हुई। शिकायत करने का कोई शुल्क नहीं है, और वकील की ज़रूरत भी नहीं।',
        ],
        pEn: [
          'In November 2021 the Reserve Bank launched the “Reserve Bank – Integrated Ombudsman Scheme, 2021”. It merged three separate ombudsman schemes that had covered banks, non-banking financial companies and digital transactions, under the banner “One Nation, One Ombudsman”.',
          'The scheme covers banks, most larger non-banking financial companies, payment system operators such as many wallets and card networks, and credit information companies. The ground for complaint is broad: “deficiency in service”, meaning any act or omission that caused the customer loss or inconvenience. There is no fee for complaining, and no lawyer is needed.',
        ],
      },
      {
        hHi: 'पहला क़दम: बैंक से लिखित शिकायत',
        hEn: 'Step one: a written complaint to the bank',
        pHi: [
          'लोकपाल तक जाने से पहले शिकायत संबंधित बैंक या संस्था से करना ज़रूरी है। यह शिकायत लिखित में हो: ईमेल, बैंक की वेबसाइट या ऐप पर शिकायत फ़ॉर्म, या शाखा में लिखित आवेदन जिसकी पावती ली जाए। फ़ोन पर की गई शिकायत के साथ भी उसका संदर्भ क्रमांक लिखकर रखिए और बाद में ईमेल से उसकी पुष्टि भेजिए।',
          'शिकायत में साफ़ लिखिए: खाता संख्या या कार्ड के आख़िरी चार अंक, लेन-देन की तारीख़ और राशि, क्या ग़लत हुआ, और आप क्या समाधान चाहते हैं। भावनाओं की जगह तथ्य लिखिए। हर बड़े बैंक में शिकायत निवारण के लिए नोडल अधिकारी होते हैं, जिनका विवरण बैंक की वेबसाइट पर होता है; पहली शिकायत का जवाब संतोषजनक न हो, तो उन तक भी जाइए।',
        ],
        pEn: [
          'Before going to the Ombudsman, the complaint must first be made to the bank or institution concerned. It should be in writing: an email, the complaint form on the bank’s website or app, or a written application at the branch with an acknowledgement. Even for a complaint made by phone, note its reference number and confirm it by email afterwards.',
          'State plainly in the complaint: the account number or the last four digits of the card, the date and amount of the transaction, what went wrong, and what resolution you want. Write facts rather than feelings. Every large bank has nodal officers for grievance redressal, whose details are on the bank’s website; if the first reply is unsatisfactory, go to them as well.',
        ],
      },
      {
        hHi: 'कब लोकपाल के पास जाएँ',
        hEn: 'When to go to the Ombudsman',
        pHi: [
          'तीन स्थितियों में आप लोकपाल के पास शिकायत कर सकते हैं: बैंक ने आपकी शिकायत पूरी या आंशिक रूप से ख़ारिज कर दी; आप बैंक के जवाब से संतुष्ट नहीं हैं; या शिकायत के तीस दिन तक कोई जवाब नहीं आया। लोकपाल के पास शिकायत बैंक के जवाब के एक साल के भीतर करनी होती है, और जवाब न आने पर, बैंक में शिकायत की तारीख़ से एक साल और तीस दिन के भीतर।',
          'कुछ मामलों में लोकपाल शिकायत नहीं लेता: अगर वही मामला पहले से किसी अदालत, उपभोक्ता आयोग या मध्यस्थ के पास लंबित है या उसका फ़ैसला हो चुका है, या अगर शिकायत सीधे बैंक से किए बिना लोकपाल के पास भेजी गई है। इसलिए पहले क़दम को कभी मत छोड़िए, और हर तारीख़ लिखकर रखिए।',
        ],
        pEn: [
          'You can complain to the Ombudsman in three situations: the bank rejected your complaint wholly or partly; you are not satisfied with the bank’s reply; or there has been no reply within thirty days of your complaint. The complaint to the Ombudsman must be made within one year of the bank’s reply or, where there was no reply, within one year and thirty days of the date of your complaint to the bank.',
          'In some cases the Ombudsman does not take up a complaint: if the same matter is already pending before, or has been decided by, a court, consumer commission or arbitrator, or if the complaint is sent to the Ombudsman without first being made to the bank. So never skip the first step, and keep a note of every date.',
        ],
      },
      {
        hHi: 'शिकायत कैसे दर्ज करें',
        hEn: 'How to file the complaint',
        pHi: [
          'सबसे आसान तरीक़ा रिज़र्व बैंक का शिकायत प्रबंधन पोर्टल है, cms.rbi.org.in, जहाँ फ़ॉर्म भरकर दस्तावेज़ अपलोड किए जा सकते हैं और शिकायत की स्थिति ऑनलाइन देखी जा सकती है। शिकायत ईमेल से या डाक द्वारा रिज़र्व बैंक के केंद्रीकृत शिकायत प्राप्ति केंद्र को भी भेजी जा सकती है। मदद के लिए रिज़र्व बैंक का संपर्क केंद्र टोल-फ़्री नंबर 14448 पर कई भाषाओं में जानकारी देता है।',
          'फ़ॉर्म में बैंक के साथ हुई शिकायत का विवरण, उसकी तारीख़, बैंक का जवाब (अगर आया), और आप क्या राहत चाहते हैं, यह लिखना होता है। साथ में लेन-देन का विवरण, खाता विवरण, बैंक से हुई बातचीत और कोई भी सबूत जोड़िए। शिकायत दर्ज होते ही एक संदर्भ संख्या मिलती है; उसे सँभालकर रखिए।',
        ],
        pEn: [
          'The easiest way is the Reserve Bank’s Complaint Management System portal, cms.rbi.org.in, where you fill in a form, upload documents and track the complaint online. Complaints can also be sent by email or by post to the Reserve Bank’s centralised receipt and processing centre. For help, the Reserve Bank’s contact centre on the toll-free number 14448 provides information in several languages.',
          'The form asks for details of the complaint made to the bank, its date, the bank’s reply (if any), and the relief you seek. Attach the transaction details, account statement, correspondence with the bank and any other evidence. Once the complaint is filed you receive a reference number; keep it safe.',
        ],
      },
      {
        hHi: 'आगे क्या होता है',
        hEn: 'What happens next',
        pHi: [
          'लोकपाल का कार्यालय शिकायत को बैंक के पास भेजकर उसका पक्ष माँगता है। बहुत-से मामले इसी चरण पर सुलझ जाते हैं, क्योंकि बैंक लोकपाल के सामने जवाबदेह होते हैं और कई बार बातचीत या मध्यस्थता से ही समाधान निकल आता है। अगर समझौता न हो, तो लोकपाल दोनों पक्षों के दस्तावेज़ देखकर फ़ैसला देता है, जिसे “अवार्ड” कहते हैं।',
          'नियमों के तहत लोकपाल ग्राहक को हुए वास्तविक नुक़सान की भरपाई का आदेश दे सकता है, और इसके अलावा समय, ख़र्च और मानसिक परेशानी के लिए एक सीमित मुआवज़ा भी। बैंक को अवार्ड मानना होता है, जब तक वह अपील न करे। अगर ग्राहक फ़ैसले से संतुष्ट न हो, तो वह तय समय के भीतर रिज़र्व बैंक के अपीलीय प्राधिकारी के पास अपील कर सकता है।',
        ],
        pEn: [
          'The Ombudsman’s office forwards the complaint to the bank and asks for its side. Many cases are resolved at this stage, because banks are answerable to the Ombudsman and a solution is often found through conciliation or mediation. If no settlement is reached, the Ombudsman examines both parties’ documents and issues a decision, called an “award”.',
          'Under the rules the Ombudsman can order compensation for the customer’s actual loss, and in addition a limited sum for lost time, expenses and harassment. The bank must comply with the award unless it appeals. If the customer is not satisfied with the decision, they can appeal to the Reserve Bank’s Appellate Authority within the set time.',
        ],
      },
      {
        hHi: 'अनधिकृत डिजिटल लेन-देन: तीन दिन का नियम',
        hEn: 'Unauthorised digital transactions: the three-day rule',
        pHi: [
          'अगर आपके खाते या कार्ड से कोई ऐसा इलेक्ट्रॉनिक लेन-देन हुआ है जो आपने नहीं किया, तो सबसे ज़रूरी चीज़ समय है। रिज़र्व बैंक के 2017 के निर्देशों के अनुसार, अगर धोखाधड़ी बैंक की प्रणाली में कमी से हुई, या किसी तीसरे पक्ष की वजह से जिसमें न बैंक की ग़लती है न ग्राहक की, और ग्राहक ने संदेश मिलने के तीन कार्य-दिवसों के भीतर बैंक को सूचना दी, तो ग्राहक की देनदारी शून्य होती है।',
          'सूचना देने में देर होने पर ग्राहक की देनदारी सीमित राशि तक बढ़ सकती है, और लंबी देर के मामलों में बैंक की नीति के अनुसार तय होती है। अगर नुक़सान ग्राहक की लापरवाही से हुआ, जैसे OTP या PIN किसी को बताना, तो बैंक को सूचना मिलने तक का पूरा नुक़सान आम तौर पर ग्राहक पर पड़ता है। इसलिए किसी भी संदिग्ध लेन-देन का संदेश दिखते ही बैंक को तुरंत सूचना दीजिए, कार्ड ब्लॉक कीजिए, और राष्ट्रीय साइबर अपराध हेल्पलाइन 1930 पर भी शिकायत कीजिए।',
        ],
        pEn: [
          'If an electronic transaction you did not make has gone through your account or card, time matters most. Under the Reserve Bank’s 2017 directions, if the fraud arose from a deficiency in the bank’s systems, or from a third-party breach where neither the bank nor the customer was at fault, and the customer informed the bank within three working days of receiving the alert, the customer’s liability is zero.',
          'If reporting is delayed, the customer’s liability can rise to a limited amount, and for longer delays it is set by the bank’s policy. Where the loss arose from the customer’s negligence, such as sharing an OTP or PIN, the customer generally bears the whole loss until the bank is informed. So the moment you see an alert for a suspicious transaction, inform the bank, block the card, and complain on the national cybercrime helpline 1930 as well.',
        ],
      },
      {
        hHi: 'मज़बूत शिकायत की पहचान',
        hEn: 'What makes a complaint strong',
        pHi: [
          'मज़बूत शिकायत तथ्यों पर टिकी होती है। तारीख़ों का एक साफ़ क्रम लिखिए: क्या हुआ, कब बैंक को बताया, बैंक ने क्या कहा। हर दावे के साथ सबूत जोड़िए: खाता विवरण में संबंधित पंक्ति, संदेशों और ईमेल के स्क्रीनशॉट, शाखा की पावती। एक शिकायत में एक ही मुद्दा रखिए; कई अलग शिकायतों को मिलाने से मामला उलझ जाता है।',
          'माँगी गई राहत भी साफ़ और उचित हो: ग़लत कटा शुल्क वापस, अनधिकृत लेन-देन की राशि वापस, ग़लत क्रेडिट रिपोर्ट में सुधार। भाषा विनम्र और सीधी रखिए। लोकपाल का काम निष्पक्ष रूप से तथ्यों को देखना है, और व्यवस्थित, शांत शिकायत उस काम को आसान बनाती है।',
        ],
        pEn: [
          'A strong complaint rests on facts. Write a clear sequence of dates: what happened, when you told the bank, what the bank said. Attach evidence for every claim: the relevant line of the account statement, screenshots of messages and emails, the branch acknowledgement. Keep one issue per complaint; mixing several separate grievances muddles the case.',
          'The relief sought should also be clear and reasonable: refund of a wrongly charged fee, refund of an unauthorised transaction, correction of a wrong credit report. Keep the language polite and direct. The Ombudsman’s task is to examine the facts impartially, and an orderly, calm complaint makes that task easier.',
        ],
      },
      {
        hHi: 'किन मामलों में दूसरे रास्ते बेहतर हैं',
        hEn: 'When other routes are better',
        pHi: [
          'लोकपाल बैंकिंग सेवाओं की शिकायतों के लिए है। बीमा से जुड़ी शिकायतों के लिए बीमा लोकपाल अलग है, शेयर बाज़ार और म्यूचुअल फ़ंड की शिकायतों के लिए SEBI का SCORES पोर्टल है, और पेंशन से जुड़े मामलों के लिए अलग व्यवस्थाएँ हैं। अगर मामला किसी आपराधिक धोखाधड़ी का है, तो पुलिस और साइबर अपराध पोर्टल पर शिकायत ज़रूरी है, लोकपाल उसकी जगह नहीं लेता।',
          'बहुत बड़े या जटिल विवादों में उपभोक्ता आयोग या अदालत का रास्ता भी खुला है। लेकिन याद रखिए, एक ही मामला एक साथ कई जगह नहीं चलाया जा सकता; रास्ता सोच-समझकर चुनिए, और ज़रूरत हो तो किसी जानकार से सलाह लीजिए।',
        ],
        pEn: [
          'The Ombudsman deals with complaints about banking services. Insurance complaints go to the separate Insurance Ombudsman, securities and mutual fund complaints to SEBI’s SCORES portal, and pension matters have their own arrangements. Where the matter is a criminal fraud, a complaint to the police and the cybercrime portal is essential; the Ombudsman does not replace it.',
          'For very large or complex disputes, the consumer commission or the courts remain open. But remember that the same matter cannot be pursued in several places at once; choose the route with care, and take advice from someone knowledgeable if needed.',
        ],
      },
      {
        hHi: 'एक छोटी सूची, जो हमेशा पास रहे',
        hEn: 'A short list to keep handy',
        pHi: [
          'बैंक की शिकायत ईमेल और ग्राहक सेवा नंबर, नोडल अधिकारी का विवरण, रिज़र्व बैंक का पोर्टल cms.rbi.org.in, रिज़र्व बैंक संपर्क केंद्र 14448, और साइबर अपराध हेल्पलाइन 1930। इन्हें फ़ोन में एक जगह सहेज लीजिए और घर के बुज़ुर्गों को भी दे दीजिए। परेशानी के समय सही नंबर ढूँढने में खोया हर घंटा नुक़सान बढ़ा सकता है।',
        ],
        pEn: [
          'Your bank’s complaint email and customer-care number, the nodal officer’s details, the Reserve Bank portal cms.rbi.org.in, the Reserve Bank contact centre 14448, and the cybercrime helpline 1930. Save them in one place on your phone and share them with older family members too. Every hour lost hunting for the right number in a crisis can add to the loss.',
        ],
      },
      {
        hHi: 'असफल लेन-देन: समय-सीमा और मुआवज़ा',
        hEn: 'Failed transactions: time limits and compensation',
        pHi: [
          'एक आम शिकायत यह है कि ATM से पैसा नहीं निकला, या UPI भुगतान असफल हुआ, फिर भी खाते से पैसा कट गया। रिज़र्व बैंक ने 2019 में ऐसे असफल लेन-देन के लिए समय-सीमाएँ तय कीं, जिनके भीतर पैसा अपने आप वापस आना चाहिए। उदाहरण के लिए, ATM के असफल लेन-देन में राशि तय कुछ कार्य-दिवसों में लौटनी चाहिए, और UPI जैसे कई डिजिटल भुगतानों में इससे भी जल्दी।',
          'अगर बैंक तय समय-सीमा में पैसा नहीं लौटाता, तो इन्हीं निर्देशों के तहत उसे देरी के हर दिन के लिए ग्राहक को एक तय मुआवज़ा देना होता है, बिना ग्राहक के माँगे। व्यवहार में यह हमेशा अपने आप नहीं होता, इसलिए शिकायत में इस नियम का ज़िक्र कीजिए और लेन-देन की तारीख़ व संदर्भ संख्या ज़रूर लिखिए।',
        ],
        pEn: [
          'A common complaint is that an ATM dispensed no cash, or a UPI payment failed, yet the account was debited. In 2019 the Reserve Bank set turnaround times within which such failed transactions must be reversed automatically. A failed ATM withdrawal, for example, must be reversed within a set number of working days, and many digital payments such as UPI faster still.',
          'If the bank does not return the money within the set time, the same directions require it to pay the customer a fixed compensation for each day of delay, without the customer having to ask. In practice this does not always happen automatically, so mention the rule in your complaint and always include the transaction date and reference number.',
        ],
      },
      {
        hHi: 'शिकायत पत्र का एक सरल ढाँचा',
        hEn: 'A simple structure for a complaint letter',
        pHi: [
          'विषय-पंक्ति में एक वाक्य: “खाता संख्या … से … तारीख़ को ₹… की अनधिकृत कटौती के बारे में शिकायत”। पहले अनुच्छेद में तथ्य: क्या हुआ, कब, कितनी राशि, संदर्भ संख्या। दूसरे में अब तक की बातचीत: कब और किस माध्यम से बैंक को बताया, और क्या जवाब मिला। तीसरे में आपकी माँग: राशि की वापसी, शुल्क की वापसी या किसी रिकॉर्ड में सुधार, और जवाब की उचित समय-सीमा।',
          'अंत में संलग्न दस्तावेज़ों की सूची और आपका संपर्क विवरण। यही पत्र बाद में लोकपाल के पोर्टल पर भी काम आता है, इसलिए पहली बार ही इसे साफ़ और पूरा लिखिए।',
        ],
        pEn: [
          'A one-line subject: “Complaint regarding an unauthorised debit of ₹… from account number … on …”. First paragraph, the facts: what happened, when, the amount, the reference number. Second, the history so far: when and through which channel you told the bank, and what reply you received. Third, your request: refund of the amount, reversal of the charge or correction of a record, with a reasonable deadline for a reply.',
          'Close with a list of attached documents and your contact details. The same letter later serves on the Ombudsman’s portal, so write it clearly and completely the first time.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'पहले बैंक से लिखित शिकायत कीजिए और संदर्भ संख्या रखिए। जवाब न आए, शिकायत ख़ारिज हो या जवाब असंतोषजनक हो, तो तीस दिन बाद रिज़र्व बैंक की एकीकृत लोकपाल योजना के तहत cms.rbi.org.in पर शिकायत कीजिए; कोई शुल्क नहीं, वकील की ज़रूरत नहीं। अनधिकृत डिजिटल लेन-देन की सूचना तीन कार्य-दिवसों के भीतर देना बहुत अहम है।',
          'तथ्यों, तारीख़ों और सबूतों के साथ एक मुद्दे वाली साफ़ शिकायत सबसे असरदार होती है। बीमा, शेयर बाज़ार और आपराधिक धोखाधड़ी के लिए अलग रास्ते हैं। यह लेख सामान्य जानकारी है, क़ानूनी सलाह नहीं; योजना के ताज़ा नियम रिज़र्व बैंक की वेबसाइट पर देखें।',
        ],
        pEn: [
          'First complain to the bank in writing and keep the reference number. If there is no reply, the complaint is rejected or the reply is unsatisfactory, after thirty days complain under the Reserve Bank’s Integrated Ombudsman Scheme at cms.rbi.org.in; there is no fee and no need for a lawyer. Reporting an unauthorised digital transaction within three working days matters enormously.',
          'A clear, single-issue complaint backed by facts, dates and evidence is the most effective. Insurance, securities and criminal fraud have routes of their own. This article is general information, not legal advice; see the Reserve Bank’s website for the scheme’s latest rules.',
        ],
      },
    ],
  },
  {
    slug: 'real-return-mehngai-aur-tax-ke-baad',
    category: 'nivesh',
    titleHi: 'असली रिटर्न: महँगाई और टैक्स के बाद आपका पैसा सच में कितना बढ़ता है',
    titleEn: 'Real Return: How Much Your Money Truly Grows After Inflation and Tax',
    excerptHi: 'खाते में बढ़ती संख्या और जेब की बढ़ती ताक़त, दोनों एक बात नहीं। नाममात्र और असली रिटर्न का फ़र्क़, कर का असर, “अपनी महँगाई” का हिसाब, और 72 का नियम — हर लक्ष्य के लिए सही उम्मीद तय करने का तरीक़ा।',
    excerptEn: 'A growing number in the account and growing buying power are not the same thing. The difference between nominal and real return, the effect of tax, working out your “own inflation”, and the rule of 72 — how to set the right expectation for every goal.',
    date: '2026-10-13',
    minutes: 12,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'मान लीजिए आपने एक लाख रुपये एक साल के लिए जमा किए और साल के अंत में एक लाख सात हज़ार हो गए। खाते के हिसाब से आप सात प्रतिशत आगे हैं। लेकिन अगर उसी साल राशन, बिजली, स्कूल की फ़ीस और दवाइयाँ औसतन छह प्रतिशत महँगी हो गईं, तो आप असल में कितने आगे हैं? और अगर उस सात हज़ार पर कर भी कटा, तो?',
          'यही सवाल “असली रिटर्न” का है: महँगाई और कर के बाद आपकी क्रय-शक्ति, यानी पैसे से ख़रीदी जा सकने वाली चीज़ें, कितनी बढ़ीं। यह लेख इस अवधारणा को सरल उदाहरणों से समझाता है, ताकि आप हर लक्ष्य के लिए सही उम्मीद रख सकें और सही जगह पैसा लगा सकें। लेख में दिए सभी अंक केवल समझाने के लिए काल्पनिक उदाहरण हैं, किसी निवेश के रिटर्न का वादा नहीं।',
        ],
        pEn: [
          'Suppose you deposit one lakh rupees for a year and by the end of the year it has become one lakh seven thousand. By the account’s reckoning you are seven per cent ahead. But if in that same year groceries, electricity, school fees and medicines became six per cent dearer on average, how far ahead are you really? And what if tax was deducted on that seven thousand?',
          'That is the question of “real return”: after inflation and tax, how much has your purchasing power, the things your money can buy, actually grown? This article explains the idea with simple examples, so that you can set the right expectation for each goal and put money in the right place. All the figures here are hypothetical examples for illustration, not a promise of any investment’s return.',
        ],
      },
      {
        hHi: 'नाममात्र रिटर्न और असली रिटर्न',
        hEn: 'Nominal return and real return',
        pHi: [
          '“नाममात्र” रिटर्न वह है जो बैंक की पासबुक या फ़ंड के विवरण में दिखता है: सात प्रतिशत ब्याज, दस प्रतिशत की बढ़त। “असली” रिटर्न वह है जो महँगाई घटाने के बाद बचता है। मोटा हिसाब सरल है: असली रिटर्न लगभग नाममात्र रिटर्न घटा महँगाई। सात प्रतिशत रिटर्न और छह प्रतिशत महँगाई का अर्थ है लगभग एक प्रतिशत का असली रिटर्न।',
          'सटीक हिसाब थोड़ा अलग है: (1 + नाममात्र रिटर्न) को (1 + महँगाई) से भाग देकर उसमें से एक घटाइए। कम दरों पर दोनों तरीक़ों का अंतर छोटा होता है, इसलिए रोज़मर्रा के फ़ैसलों के लिए मोटा हिसाब काफ़ी है। ज़रूरी बात यह है कि हर रिटर्न को देखते ही आपके मन में यह सवाल आए: “महँगाई के बाद कितना?”',
        ],
        pEn: [
          'The “nominal” return is what appears in a bank passbook or a fund statement: seven per cent interest, a ten per cent gain. The “real” return is what is left after inflation is taken away. The rough arithmetic is simple: real return is roughly the nominal return minus inflation. A seven per cent return with six per cent inflation means a real return of about one per cent.',
          'The exact calculation is a little different: divide (1 + nominal return) by (1 + inflation) and subtract one. At low rates the difference between the two methods is small, so the rough version is enough for everyday decisions. What matters is that every time you see a return, the question comes to mind: “how much after inflation?”',
        ],
      },
      {
        hHi: 'कर का हिस्सा भी घटाइए',
        hEn: 'Take away the tax as well',
        pHi: [
          'असली तस्वीर के लिए कर भी घटाना ज़रूरी है। सावधि जमा का ब्याज आपकी आय में जुड़ता है और आपकी कर-श्रेणी के अनुसार कर लगता है। एक काल्पनिक उदाहरण लीजिए: FD पर सात प्रतिशत ब्याज, और आप तीस प्रतिशत की कर-श्रेणी में हैं। कर के बाद रिटर्न लगभग 4.9 प्रतिशत बचता है। अगर महँगाई पाँच प्रतिशत है, तो असली रिटर्न लगभग शून्य या थोड़ा नकारात्मक है।',
          'यानी खाते में संख्या बढ़ी, कर भी चुकाया, पर साल के अंत में उस पैसे से लगभग उतनी ही चीज़ें ख़रीदी जा सकती हैं जितनी साल की शुरुआत में। यह FD के ख़िलाफ़ कोई तर्क नहीं; सुरक्षा और तरलता की अपनी क़ीमत है। लेकिन यह समझना ज़रूरी है कि लंबे लक्ष्यों के लिए केवल ऐसे साधनों पर निर्भर रहने से पैसा “सुरक्षित” तो रहता है, पर बढ़ता नहीं।',
        ],
        pEn: [
          'For the true picture, tax must be deducted too. Fixed deposit interest is added to your income and taxed at your slab rate. Take a hypothetical example: seven per cent interest on an FD, and you are in the thirty per cent slab. After tax the return is about 4.9 per cent. If inflation is five per cent, the real return is roughly nil or slightly negative.',
          'In other words, the number in the account grew, you paid tax too, yet at the end of the year that money buys about as much as it did at the start. This is not an argument against FDs; safety and liquidity have a price of their own. But it is important to understand that relying only on such instruments for long goals keeps money “safe” without making it grow.',
        ],
      },
      {
        hHi: 'महँगाई कौन मापता है',
        hEn: 'Who measures inflation',
        pHi: [
          'भारत में आम महँगाई का सबसे प्रचलित पैमाना उपभोक्ता मूल्य सूचकांक (CPI) है, जिसे राष्ट्रीय सांख्यिकी कार्यालय हर महीने जारी करता है। यह एक औसत परिवार की ख़रीद की टोकरी, जैसे भोजन, कपड़े, आवास, ईंधन, शिक्षा और स्वास्थ्य, की क़ीमतों में बदलाव मापता है। रिज़र्व बैंक की मौद्रिक नीति का लक्ष्य CPI महँगाई को चार प्रतिशत के आसपास रखना है, दो से छह प्रतिशत के दायरे में।',
          'यह आँकड़ा देश का औसत है, आपके परिवार का नहीं। फिर भी, लंबे लक्ष्यों की योजना बनाते समय यह एक अच्छा शुरुआती बिंदु है, बशर्ते आप अपने ख़र्च की प्रकृति के हिसाब से उसमें समायोजन करें।',
        ],
        pEn: [
          'In India the most widely used measure of general inflation is the Consumer Price Index (CPI), released monthly by the National Statistical Office. It measures changes in the prices of an average household’s basket of purchases, such as food, clothing, housing, fuel, education and health. The Reserve Bank’s monetary policy aims to keep CPI inflation around four per cent, within a band of two to six per cent.',
          'That figure is the national average, not your family’s. Still, when planning long goals it is a good starting point, provided you adjust it for the nature of your own spending.',
        ],
      },
      {
        hHi: '“आपकी अपनी महँगाई”',
        hEn: '“Your own inflation”',
        pHi: [
          'हर परिवार की महँगाई अलग होती है। जिस परिवार में बच्चे उच्च शिक्षा की ओर बढ़ रहे हैं, उसके लिए स्कूल-कॉलेज की फ़ीस का बढ़ना सबसे बड़ा ख़र्च है, और यह ख़र्च अक्सर औसत महँगाई से तेज़ बढ़ता है। जिस घर में बुज़ुर्ग हैं, वहाँ दवाइयाँ और अस्पताल के ख़र्च सबसे अहम हैं, और ये भी कई बार औसत से तेज़ बढ़ते हैं।',
          'अपनी महँगाई का अंदाज़ा लगाने का एक सरल तरीक़ा है: पिछले तीन-चार साल के अपने बड़े ख़र्चों, जैसे फ़ीस, किराया, बीमा प्रीमियम और राशन, के बिल निकालिए और देखिए कि हर साल वे कितने प्रतिशत बढ़े। जिस लक्ष्य की योजना बना रहे हैं, उसके लिए उसी ख़र्च की महँगाई का इस्तेमाल कीजिए। बच्चे की पढ़ाई की योजना सामान्य CPI से बनाना अक्सर कम आँकना होता है।',
        ],
        pEn: [
          'Every family’s inflation is different. For a family whose children are heading towards higher education, rising school and college fees are the biggest cost, and they often rise faster than average inflation. In a household with older members, medicines and hospital costs matter most, and these too often rise faster than average.',
          'A simple way to estimate your own inflation: take out the bills for your major expenses over the last three or four years, such as fees, rent, insurance premiums and groceries, and see by what percentage they rose each year. For the goal you are planning, use the inflation of that particular expense. Planning for a child’s education with ordinary CPI often underestimates the cost.',
        ],
      },
      {
        hHi: '72 का नियम: दोगुना और आधा',
        hEn: 'The rule of 72: doubling and halving',
        pHi: [
          'एक आसान मानसिक औज़ार है “72 का नियम”: 72 को सालाना दर से भाग दीजिए, तो लगभग इतने साल आते हैं जितने में कोई राशि दोगुनी होती है। आठ प्रतिशत पर लगभग नौ साल, छह प्रतिशत पर लगभग बारह साल।',
          'यही नियम उल्टी दिशा में भी काम करता है। अगर महँगाई छह प्रतिशत है, तो लगभग बारह साल में आपके पैसे की क्रय-शक्ति आधी रह जाती है। आज जो ख़र्च पचास हज़ार रुपये महीने में चलता है, उसके लिए बारह साल बाद लगभग एक लाख रुपये चाहिए होंगे। यह एक वाक्य सेवानिवृत्ति और बच्चों की पढ़ाई जैसे लंबे लक्ष्यों की गंभीरता को सबसे साफ़ ढंग से समझाता है।',
        ],
        pEn: [
          'An easy mental tool is the “rule of 72”: divide 72 by the annual rate and you get roughly the number of years in which an amount doubles. At eight per cent, about nine years; at six per cent, about twelve.',
          'The same rule works in reverse. If inflation is six per cent, your money’s purchasing power halves in about twelve years. Spending that runs on fifty thousand rupees a month today will need about one lakh a month twelve years from now. That one sentence explains the seriousness of long goals such as retirement and children’s education more clearly than anything else.',
        ],
      },
      {
        hHi: 'हर पैसे का अलग काम',
        hEn: 'Different money, different jobs',
        pHi: [
          'असली रिटर्न की समझ का अर्थ यह नहीं कि हर रुपया ऊँचे जोखिम में लगा दिया जाए। हर पैसे का अपना काम है। आपात कोष का काम सुरक्षा और तुरंत उपलब्धता है; उसका असली रिटर्न शून्य के आसपास रहे, तो भी ठीक है। अगले एक-दो साल के लक्ष्यों का पैसा भी सुरक्षित साधनों में होना चाहिए, क्योंकि छोटी अवधि में बाज़ार का उतार-चढ़ाव नुक़सान कर सकता है।',
          'लेकिन दस, पंद्रह या बीस साल दूर के लक्ष्यों के लिए असली रिटर्न ही सबसे बड़ा सवाल है। वहाँ ऐसे साधनों की ज़रूरत है जिनमें लंबी अवधि में महँगाई से आगे निकलने की संभावना हो, जैसे विविधीकृत इक्विटी, बशर्ते आप बीच के उतार-चढ़ाव को सह सकें। सही संतुलन आपकी उम्र, आय, ज़िम्मेदारियों और जोखिम सहने की क्षमता पर निर्भर है।',
        ],
        pEn: [
          'Understanding real return does not mean putting every rupee at high risk. Each pot of money has its own job. An emergency fund’s job is safety and immediate access; it is fine if its real return hovers around zero. Money for goals in the next year or two also belongs in safe instruments, because market swings can do damage over short periods.',
          'But for goals ten, fifteen or twenty years away, real return is the biggest question of all. There you need instruments with the potential to outpace inflation over the long run, such as diversified equity, provided you can bear the swings along the way. The right balance depends on your age, income, responsibilities and tolerance for risk.',
        ],
      },
      {
        hHi: 'लक्ष्य की राशि को आज के रुपये में न सोचें',
        hEn: 'Do not think of goal amounts in today’s rupees',
        pHi: [
          'योजना की सबसे आम ग़लती यह है कि लक्ष्य की राशि आज के दाम पर तय की जाए। “बेटी की पढ़ाई के लिए दस लाख चाहिए” कहते समय यह सोचना ज़रूरी है कि यह आज का ख़र्च है या पंद्रह साल बाद का। अगर आज का ख़र्च दस लाख है और उस ख़र्च की महँगाई आठ प्रतिशत मानें, तो 72 के नियम से वह लगभग नौ साल में बीस लाख और लगभग अठारह साल में चालीस लाख के आसपास पहुँच सकता है।',
          'इसलिए हर लक्ष्य के लिए पहले आज का ख़र्च लिखिए, फिर उस ख़र्च की संभावित महँगाई, फिर लक्ष्य तक के साल, और उसके बाद भविष्य की राशि का अनुमान लगाइए। ऑनलाइन कैलकुलेटर यह काम आसानी से करते हैं, पर उनमें डाली जाने वाली महँगाई की दर आपको सोच-समझकर चुननी है।',
        ],
        pEn: [
          'The most common planning mistake is to set a goal amount at today’s prices. When saying “ten lakh is needed for my daughter’s education”, ask whether that is today’s cost or the cost fifteen years from now. If the cost today is ten lakh and inflation for that expense is taken at eight per cent, by the rule of 72 it could reach about twenty lakh in roughly nine years and around forty lakh in roughly eighteen.',
          'So for every goal, first write down today’s cost, then the likely inflation for that cost, then the years to the goal, and only then estimate the future amount. Online calculators do this easily, but the inflation rate you feed into them is yours to choose with care.',
        ],
      },
      {
        hHi: 'कर-कुशलता: छोटा अंतर, लंबा असर',
        hEn: 'Tax efficiency: a small difference, a long effect',
        pHi: [
          'अलग-अलग निवेशों पर कर अलग ढंग से लगता है: कुछ का ब्याज हर साल कर-योग्य है, कुछ में कर केवल बेचने पर लगता है, और कुछ योजनाएँ कर-मुक्त हैं। लंबी अवधि में यह अंतर असली रिटर्न पर बड़ा असर डालता है, क्योंकि जिस पैसे पर हर साल कर नहीं कटता, वह पूरा का पूरा चक्रवृद्धि में लगा रहता है।',
          'कर के नियम लगभग हर बजट के साथ बदलते हैं, इसलिए यहाँ कोई विशेष दर लिखना ठीक नहीं। सिद्धांत यह है: किसी निवेश की तुलना करते समय उसके कर के बाद के रिटर्न की तुलना कीजिए, कर से पहले की नहीं। ज़रूरत हो तो किसी कर-सलाहकार से अपनी स्थिति के हिसाब से समझिए।',
        ],
        pEn: [
          'Different investments are taxed differently: the interest on some is taxable every year, others are taxed only on sale, and some schemes are tax-free. Over the long run that difference has a large effect on real return, because money that is not taxed every year stays fully at work compounding.',
          'Tax rules change with almost every budget, so quoting particular rates here would not be right. The principle is this: when comparing investments, compare their after-tax returns, not their pre-tax ones. If needed, have a tax adviser explain it for your own situation.',
        ],
      },
      {
        hHi: 'तीन सवाल, हर निवेश से पहले',
        hEn: 'Three questions before every investment',
        pHi: [
          'पहला: कर के बाद इसका रिटर्न कितना होगा? दूसरा: मेरे इस लक्ष्य से जुड़े ख़र्च की महँगाई कितनी है, और क्या यह रिटर्न उससे आगे निकल सकता है? तीसरा: इसमें जोखिम कितना है, और क्या मेरे लक्ष्य की अवधि उस जोखिम को सहने लायक़ है?',
          'इन तीन सवालों के जवाब किसी भी विज्ञापन, “गारंटीड रिटर्न” के दावे या दोस्त की सलाह से ज़्यादा भरोसेमंद दिशा देते हैं। और अगर कोई योजना महँगाई से बहुत ऊपर, बिना किसी जोखिम के, गारंटीड रिटर्न का वादा करे, तो उसे संदेह की नज़र से देखिए।',
        ],
        pEn: [
          'First: what will the return be after tax? Second: what is the inflation of the expense linked to this goal, and can this return outpace it? Third: how much risk does it carry, and is my goal’s horizon long enough to bear that risk?',
          'The answers to these three questions give more dependable direction than any advertisement, “guaranteed return” claim or friend’s tip. And if a scheme promises a guaranteed return far above inflation with no risk at all, look at it with suspicion.',
        ],
      },
      {
        hHi: 'वेतन बढ़ा, पर असल में कितना?',
        hEn: 'Your salary rose, but by how much really?',
        pHi: [
          'यही हिसाब वेतन पर भी लागू होता है। अगर इस साल वेतन आठ प्रतिशत बढ़ा और आपके परिवार की महँगाई छह प्रतिशत रही, तो असल में आपकी कमाई की ताक़त केवल लगभग दो प्रतिशत बढ़ी। अगर वेतन वृद्धि महँगाई से कम रही, तो हाथ में ज़्यादा रुपये आने के बावजूद आप पिछले साल से पीछे हैं।',
          'इस समझ का एक व्यावहारिक उपयोग है: वेतन बढ़ने पर जीवनशैली को उसी अनुपात में मत बढ़ाइए। बढ़ोतरी का एक तय हिस्सा, जैसे आधा, सीधे बचत और निवेश में भेजने का नियम बना लीजिए। तब हर वेतन वृद्धि आपके भविष्य की असली ताक़त भी बढ़ाती है, सिर्फ़ आज के ख़र्च नहीं।',
        ],
        pEn: [
          'The same arithmetic applies to salary. If your pay rose eight per cent this year and your family’s inflation was six per cent, your earning power really grew by only about two per cent. If the raise was smaller than inflation, you are behind last year despite more rupees in hand.',
          'This understanding has a practical use: when your salary rises, do not raise your lifestyle in the same proportion. Make it a rule to send a fixed share of every raise, say half, straight into saving and investment. Then each raise strengthens your future’s real purchasing power too, not only today’s spending.',
        ],
      },
      {
        hHi: 'क़र्ज़ और महँगाई: दूसरा पहलू',
        hEn: 'Debt and inflation: the other side',
        pHi: [
          'महँगाई क़र्ज़ लेने वाले के लिए एक तरह से हल्की राहत भी है: तय ब्याज दर वाले लोन की EMI वही रहती है, जबकि आय समय के साथ बढ़ सकती है, इसलिए वर्षों में EMI का बोझ असल में हल्का महसूस होता है। लेकिन इसे क़र्ज़ लेने का कारण मत बनाइए। ज़्यादातर पर्सनल लोन और क्रेडिट कार्ड की ब्याज दरें महँगाई से कहीं ऊँची होती हैं, और उनका असली बोझ भारी ही रहता है।',
        ],
        pEn: [
          'Inflation offers borrowers a kind of mild relief: the EMI on a fixed-rate loan stays the same while income may rise over time, so the burden feels lighter in real terms over the years. But do not treat this as a reason to borrow. The interest on most personal loans and credit cards is far above inflation, and their real burden stays heavy.',
        ],
      },
      {
        hHi: 'साल में एक बार हिसाब',
        hEn: 'An annual check',
        pHi: [
          'हर साल अप्रैल में अपने हर बड़े निवेश के लिए तीन संख्याएँ लिखिए: पिछले साल का रिटर्न, उस पर लगा कर, और आपके परिवार की उस साल की महँगाई। यह पाँच मिनट का अभ्यास बताता है कि आपका पैसा सच में आगे बढ़ रहा है या केवल अपनी जगह पर खड़ा है।',
        ],
        pEn: [
          'Each April, write three numbers for every major investment: last year’s return, the tax paid on it, and your family’s inflation that year. That five-minute exercise shows whether your money is genuinely moving forward or merely standing still.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'असली रिटर्न लगभग नाममात्र रिटर्न घटा महँगाई है, और उससे पहले कर भी घटाना चाहिए। उच्च कर-श्रेणी में सुरक्षित ब्याज का असली रिटर्न कई बार लगभग शून्य होता है। आपकी अपनी महँगाई, ख़ासकर पढ़ाई और स्वास्थ्य की, औसत से तेज़ हो सकती है, और 72 का नियम बताता है कि छह प्रतिशत महँगाई में लगभग बारह साल में क्रय-शक्ति आधी हो जाती है।',
          'हर पैसे का काम अलग है: आपात कोष सुरक्षा के लिए, लंबे लक्ष्य महँगाई से आगे निकलने के लिए। लक्ष्य की राशि भविष्य के दाम पर सोचिए, और हर निवेश की तुलना कर के बाद के रिटर्न पर कीजिए। यह लेख शिक्षा के लिए है, निवेश या कर सलाह नहीं; सभी अंक केवल उदाहरण हैं, और बाज़ार से जुड़े निवेश जोखिमों के अधीन हैं।',
        ],
        pEn: [
          'Real return is roughly the nominal return minus inflation, and tax should be taken off first. In a high tax bracket the real return on safe interest is often close to zero. Your own inflation, especially for education and health, can run ahead of the average, and the rule of 72 shows that at six per cent inflation purchasing power halves in about twelve years.',
          'Each pot of money has a different job: the emergency fund for safety, long goals for outpacing inflation. Think of goal amounts at future prices, and compare every investment on its after-tax return. This article is for education, not investment or tax advice; all figures are examples only, and market-linked investments are subject to risk.',
        ],
      },
    ],
  },
];
