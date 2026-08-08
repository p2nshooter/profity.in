import type { Article, Section } from './articles';

/**
 * Additive expansions for the Profity.in bilingual library.
 *
 * Every entry here APPENDS sections to an existing article. Nothing is
 * removed, nothing is rewritten, and two articles are never merged into one
 * URL. Multiple entries may target the same slug — they apply in order, which
 * is how later top-off passes work.
 *
 * Both languages are written by hand. Hindi is the native language of the
 * site; the English is a genuine translation rather than a summary, so both
 * columns carry the same argument at the same depth.
 *
 * The editorial rules of articles.ts apply here unchanged: educational only,
 * no guaranteed returns, no stock tips, no schemes.
 */
export interface Expansion {
  slug: string;
  sections: Section[];
}

export const EXPANSIONS: Expansion[] = [
  {
    slug: 'sip-mutual-fund-guide',
    sections: [
      {
        hHi: 'SIP की राशि कैसे तय करें',
        hEn: 'How to decide the SIP amount',
        pHi: [
          'सबसे आम सवाल यह है कि हर महीने कितना डालना चाहिए, और सबसे आम ग़लती यह है कि लोग इसका उत्तर किसी सूत्र से निकालने की कोशिश करते हैं। असल में सही राशि वह है जो आप बुरे महीनों में भी बिना रोके चला सकें।',
          'इसे तय करने का एक व्यावहारिक तरीक़ा है। पिछले बारह महीनों में जो आपका सबसे तंग महीना रहा, उसमें आपके पास महीने के अंत में कितना बचा था — SIP की राशि उससे कुछ कम रखिए, ऊपर नहीं।',
          'लोग उल्टा करते हैं: सबसे अच्छे महीने को देखकर राशि तय करते हैं, फिर तीन महीने बाद उसे रोकना पड़ता है। रुकी हुई SIP का नुक़सान केवल छूटी हुई किश्तों का नहीं होता; वह आदत को भी तोड़ देती है, और आदत ही इस पूरी व्यवस्था की असली पूँजी है।',
          'यदि बाद में आय बढ़े, तो राशि बढ़ाई जा सकती है — और यह बढ़ाना रोकने से कहीं आसान है। इसलिए कम से शुरू करना कमज़ोरी नहीं, रणनीति है।',
        ],
        pEn: [
          'The most common question is how much to put in each month, and the most common mistake is trying to answer it with a formula. The right amount is really the one you can keep running through your worst months without stopping.',
          'There is a practical way to arrive at it. Look at your tightest month over the past year and see what was actually left at the end of it — set the SIP a little below that figure rather than above it.',
          'People tend to do the opposite: they size the instalment against their best month and then have to stop it three months later. A stopped SIP costs more than the missed instalments; it breaks the habit, and the habit is the real capital in this whole arrangement.',
          'If income rises later, the amount can be raised — and raising is far easier than restarting. So beginning small is a strategy rather than a weakness, whatever the round numbers in an advertisement suggest.',
        ],
      },
      {
        hHi: 'तारीख़ का चुनाव: वेतन के तुरंत बाद',
        hEn: 'Choosing the date: right after payday',
        pHi: [
          'यह छोटा-सा विवरण नतीजे पर बड़ा असर डालता है, और अधिकांश लोग इसे बिना सोचे छोड़ देते हैं। SIP की तारीख़ महीने के अंत में नहीं, वेतन आने के अगले या उससे अगले दिन होनी चाहिए।',
          'कारण मनोवैज्ञानिक है, गणितीय नहीं। महीने के अंत तक खाते में जो बचता है वह अनिश्चित होता है, और अनिश्चितता ही वह चीज़ है जिससे किश्तें फ़ेल होती हैं। वेतन के तुरंत बाद कटने वाली राशि पर कोई प्रतिस्पर्धा नहीं होती।',
          'लोग अक्सर पूछते हैं कि क्या किसी ख़ास तारीख़ पर बाज़ार सस्ता मिलता है। लंबी अवधि में इसका कोई भरोसेमंद पैटर्न नहीं है — जो अंतर आता है वह इतना छोटा है कि उसकी तुलना में किश्त का न चूकना कहीं अधिक मायने रखता है।',
        ],
        pEn: [
          'This is a small detail with a large effect on outcomes, and most people leave it to chance. The SIP date should not sit at the end of the month; it should sit on the day after payday, or the day after that.',
          'The reason is psychological rather than mathematical. Whatever is left in the account at month-end is uncertain, and uncertainty is exactly what makes instalments fail. Money that leaves immediately after salary arrives faces no competition from anything else.',
          'People often ask whether some particular date buys the market cheaper. Over long periods there is no reliable pattern in this — the difference it makes is small enough that simply never missing an instalment matters considerably more.',
        ],
      },
      {
        hHi: 'बाज़ार गिरने पर क्या करें',
        hEn: 'What to do when the market falls',
        pHi: [
          'यह वह क्षण है जिस पर पूरी SIP की सफलता टिकी होती है, और यही वह क्षण है जब सबसे अधिक लोग ग़लत क़दम उठाते हैं। जब बाज़ार गिरता है, तो किश्त रोकना सबसे स्वाभाविक प्रतिक्रिया लगती है — और वह सबसे महँगी भी है।',
          'गिरावट में आपकी वही राशि अधिक यूनिट ख़रीदती है। यही रुपया-लागत औसत का पूरा तंत्र है, और वह केवल तभी काम करता है जब आप गिरावट के दौरान ख़रीदते रहें। जो व्यक्ति गिरावट में रुक जाता है, उसने इस व्यवस्था का सबसे उपयोगी हिस्सा छोड़ दिया।',
          'यह कहना आसान है और करना कठिन, इसलिए एक व्यावहारिक सहारा उपयोगी है: गिरावट के दिनों में अपना खाता मत देखिए। किश्त स्वचालित है, उसे आपकी उपस्थिति की ज़रूरत नहीं। जो चीज़ नुक़सान करती है वह गिरावट नहीं, गिरावट देखकर लिया गया निर्णय है।',
          'और यह भी याद रखिए कि यह लेख किसी विशेष फंड की सिफ़ारिश नहीं करता और न ही किसी प्रतिफल का वादा। बाज़ार जोखिम वास्तविक है; यहाँ केवल व्यवहार की बात हो रही है।',
        ],
        pEn: [
          'This is the moment the whole SIP depends on, and it is also the moment at which most people take the wrong step. When the market falls, stopping the instalment feels like the natural response — and it is the most expensive one available.',
          'In a fall, the same amount of money buys more units. That is the entire mechanism of rupee-cost averaging, and it only works if you keep buying while prices are down. Somebody who stops during a decline has abandoned the most useful part of the arrangement.',
          'That is easy to say and hard to do, so a practical crutch helps: do not look at the account on falling days. The instalment is automatic and does not need you present. What causes damage is not the fall itself but the decision taken while watching it.',
          'And remember that none of this recommends any particular fund or promises any return. Market risk is real; what is being discussed here is only behaviour, which is the part actually within your control.',
        ],
      },
      {
        hHi: 'SIP से पैसा निकालना: एकमुश्त नहीं',
        hEn: 'Taking money out: not all at once',
        pHi: [
          'निवेश की बात बहुत होती है और निकासी की बहुत कम, जबकि नतीजा अक्सर निकासी के तरीक़े से तय होता है। जिस अनुशासन से पैसा डाला जाता है, उसी अनुशासन से निकालना भी चाहिए।',
          'यदि किसी लक्ष्य के लिए पैसा चाहिए — मान लीजिए तीन साल बाद — तो लक्ष्य से कुछ साल पहले ही धीरे-धीरे उसे कम जोखिम वाले विकल्प में ले जाना समझदारी है। लक्ष्य की तारीख़ पर बाज़ार कहाँ होगा, यह किसी को नहीं पता।',
          'इसका उल्टा भी उतना ही सच है: यदि पैसे की कोई तय ज़रूरत नहीं है, तो केवल इसलिए निकाल लेना कि "अच्छा फ़ायदा हो गया" प्रायः महँगा पड़ता है, क्योंकि उसके बाद दोबारा प्रवेश का सही समय ढूँढ़ना लगभग असंभव होता है।',
        ],
        pEn: [
          'A great deal is said about investing and very little about withdrawing, even though the outcome is often decided by how the exit is handled. The discipline that puts money in should apply equally to taking it out.',
          'If the money is meant for a goal — say three years away — it is sensible to begin shifting it gradually into lower-risk options some years before that date arrives. Nobody knows where the market will be on the particular day you need the money.',
          'The reverse is just as true: if there is no defined need for the money, withdrawing merely because "it has done well" usually turns out expensive, because finding the right moment to re-enter afterwards is very nearly impossible.',
        ],
      },
      {
        hHi: 'कर का पक्ष, संक्षेप में',
        hEn: 'The tax side, briefly',
        pHi: [
          'SIP के हर किश्त को कर की दृष्टि से एक अलग ख़रीद माना जाता है, और यही वह बात है जो अधिकांश लोगों को चौंकाती है। इसका अर्थ यह है कि हर किश्त की धारण-अवधि अलग-अलग गिनी जाती है।',
          'व्यावहारिक असर यह होता है कि यदि आप निवेश के तुरंत बाद पूरा पैसा निकालें, तो शुरुआती किश्तें लंबी अवधि में आ सकती हैं जबकि हाल की किश्तें छोटी अवधि में — और दोनों पर कर का व्यवहार अलग होता है।',
          'यहाँ दरें और सीमाएँ जानबूझकर नहीं लिखी जा रही हैं, क्योंकि ये बजट के साथ बदलती रहती हैं और पुरानी संख्या नई ग़लती बन जाती है। निकासी से पहले उस वर्ष के नियम देख लेना या किसी कर सलाहकार से पूछ लेना ही सही तरीक़ा है।',
        ],
        pEn: [
          'For tax purposes each SIP instalment is treated as a separate purchase, and this is the point that surprises most people when they first meet it. It means the holding period is counted separately for every instalment.',
          'The practical effect is that if you redeem everything shortly after investing, the earliest instalments may qualify as long-term while the most recent ones do not — and the two are treated differently.',
          'Rates and thresholds are deliberately not quoted here, because they change with each budget and an outdated number simply becomes a new mistake. Checking the rules for the relevant year, or asking a tax adviser before redeeming, is the correct approach.',
        ],
      },
    ],
  },

  {
    slug: 'chaiwale-ki-kahani-compounding',
    sections: [
      {
        hHi: 'पहले दस साल सबसे धीमे क्यों लगते हैं',
        hEn: 'Why the first ten years feel the slowest',
        pHi: [
          'इस कहानी का सबसे कठिन हिस्सा शुरुआत नहीं, बीच का दशक है। पहले कुछ वर्षों में जो रक़म जमा होती है वह लगभग पूरी तरह आपकी अपनी डाली हुई होती है — बढ़त का हिस्सा इतना छोटा रहता है कि दिखता ही नहीं।',
          'यही वह जगह है जहाँ अधिकांश लोग हार मान लेते हैं। पाँच साल बाद खाता देखकर लगता है कि इतनी मेहनत का नतीजा बहुत मामूली है, और उसी क्षण मन कहता है कि यह तरीक़ा काम नहीं कर रहा।',
          'पर गणित की बनावट ही ऐसी है। वृद्धि पहले धीमी होती है क्योंकि वह जिस राशि पर लगती है वह अभी छोटी है। जैसे-जैसे मूल राशि बड़ी होती है, वही प्रतिशत बड़ी संख्या बनाने लगता है — और यही मोड़ बीस साल के आसपास आता है।',
          'चायवाले की कहानी का असली सबक़ यही है: वह इसलिए सफल नहीं हुआ कि उसने कुछ चतुर किया, बल्कि इसलिए कि उसने उस दशक में कुछ नहीं किया जब कुछ न करना सबसे कठिन था।',
        ],
        pEn: [
          'The hardest part of this story is not the beginning but the middle decade. In the first few years almost everything in the account is money you put there yourself — the growth component stays so small that it is barely visible.',
          'This is where most people give up. Looking at the balance after five years, the result of all that effort seems trivial, and at exactly that moment the mind says the method is not working.',
          'But the mathematics is built this way. Growth is slow at first because the amount it acts on is still small. As the base grows larger, the same percentage begins to produce large numbers — and that turn usually arrives somewhere around the twenty-year mark.',
          'That is the real lesson of the chaiwala\'s story: he did not succeed because he did something clever, but because he did nothing during the decade when doing nothing was hardest.',
        ],
      },
      {
        hHi: 'वह अंतर जो आय से नहीं, आदत से बनता है',
        hEn: 'The gap that comes from habit rather than income',
        pHi: [
          'लोग यह मान लेते हैं कि ऐसी कहानियाँ केवल तभी संभव हैं जब आय अच्छी हो। असल में जो चीज़ काम करती है वह आय और ख़र्च के बीच का अंतर है, और वह अंतर किसी भी आय-स्तर पर बनाया जा सकता है।',
          'दो लोगों की तुलना कीजिए। एक की आय दूसरे से दोगुनी है पर वह जो कमाता है लगभग सब ख़र्च कर देता है। दूसरा कम कमाता है पर हर महीने एक तय हिस्सा अलग रख देता है। बीस साल बाद दूसरे के पास कुछ होता है और पहले के पास कुछ नहीं।',
          'यह कोई नैतिक शिक्षा नहीं है; यह केवल अंकगणित है। संपत्ति आय से नहीं बनती, बचे हुए हिस्से से बनती है — और बचा हुआ हिस्सा एक निर्णय है, कोई परिस्थिति नहीं।',
          'यही कारण है कि आय बढ़ने पर भी बहुत से लोगों की स्थिति नहीं बदलती। जब ख़र्च आय के साथ-साथ बढ़ता है, तो अंतर वहीं का वहीं रहता है, और अंतर ही वह इकलौती चीज़ है जो काम करती है।',
        ],
        pEn: [
          'People assume that stories like this are only possible on a good income. What actually does the work is the gap between income and spending, and that gap can be created at any level of income at all.',
          'Compare two people. One earns twice as much as the other and spends very nearly all of it. The other earns less but sets a fixed share aside every month. Twenty years later the second has something and the first has nothing.',
          'This is not a moral lesson; it is only arithmetic. Wealth is not built out of income but out of what remains — and what remains is a decision rather than a circumstance handed to you.',
          'That is why many people\'s position does not change even as their income rises. When spending grows alongside earnings, the gap stays exactly where it was, and the gap is the only thing that does any work.',
        ],
      },
      {
        hHi: 'जिन तीन चीज़ों ने इस कहानी को बचाया',
        hEn: 'The three things that protected this story',
        pHi: [
          'तीस साल लंबे किसी भी प्रयास में कुछ न कुछ ग़लत होता ही है, और यह कहानी भी अपवाद नहीं थी। जो चीज़ इसे बचाए रखी, वह तीन साधारण सुरक्षा-उपाय थे।',
          'पहला आपातकालीन कोष था। जब दुकान कुछ महीने बंद रही, तो उस कोष ने काम चलाया और निवेश को छूने की नौबत नहीं आई। यही वह बिंदु है जहाँ अधिकांश लंबी योजनाएँ टूटती हैं।',
          'दूसरा स्वास्थ्य बीमा था। एक बड़ा अस्पताल-ख़र्च वर्षों की बचत को कुछ हफ़्तों में समाप्त कर सकता है, और भारत में यही सबसे आम कारण है जिससे परिवार अपनी जमा-पूँजी खो देते हैं।',
          'तीसरा और सबसे कम चर्चित उपाय था — कोई क़र्ज़ न लेना जो आय से बड़ा हो। ऊँची ब्याज दर पर लिया गया क़र्ज़ चक्रवृद्धि को उल्टी दिशा में चलाता है, और उस दिशा में वह और भी तेज़ है।',
        ],
        pEn: [
          'Over any effort lasting thirty years something is bound to go wrong, and this story was no exception. What kept it intact were three ordinary protections rather than anything clever.',
          'The first was an emergency fund. When the stall stayed shut for a few months, that fund carried the household and the investments were never touched. This is precisely the point at which most long plans break.',
          'The second was health insurance. A single large hospital bill can erase years of saving within weeks, and in India that is the most common single reason families lose their accumulated money.',
          'The third and least discussed protection was taking on no debt larger than the income could carry. Borrowing at a high rate runs compounding in reverse, and in that direction it moves considerably faster.',
        ],
      },
      {
        hHi: 'यदि आपने देर से शुरू किया है',
        hEn: 'If you are starting late',
        pHi: [
          'ऐसी कहानियाँ पढ़कर सबसे आम प्रतिक्रिया यह होती है कि "मेरे पास तीस साल नहीं हैं"। यह सच हो सकता है, और फिर भी निष्कर्ष वह नहीं है जो लगता है।',
          'देर से शुरू करने पर तीन चीज़ें बदलती हैं। पहली, राशि बड़ी रखनी पड़ती है, क्योंकि समय कम है। दूसरी, लक्ष्य अधिक स्पष्ट होने चाहिए, क्योंकि सुधार का मौक़ा कम है। तीसरी, जोखिम का स्तर अधिक सावधानी से चुनना पड़ता है।',
          'जो नहीं बदलता वह यह है कि शुरू करना ही एकमात्र क़दम है जो काम करता है। पैंतालीस की उम्र में शुरू किया गया निवेश बीस साल में भी सार्थक हो जाता है, और साठ की उम्र में शुरू किया गया दस साल में भी कुछ न होने से बेहतर है।',
          'सबसे बुरा विकल्प यह मान लेना है कि अब देर हो चुकी है। यह मान्यता अपने आप को सच कर लेती है, और यही इस कहानी से सीखने लायक़ आख़िरी बात है।',
        ],
        pEn: [
          'The most common reaction to a story like this is "I don\'t have thirty years." That may well be true, and the conclusion that follows is not the one it appears to be.',
          'Starting late changes three things. The amount has to be larger, because there is less time. The goals need to be more specific, because there is less room to correct course. And the level of risk has to be chosen more carefully.',
          'What does not change is that starting is the only step that does anything. Money invested at forty-five still becomes meaningful across twenty years, and money invested at sixty across ten years is better than nothing at all.',
          'The worst available option is to decide that it is now too late. That belief makes itself true, and it is the last thing worth taking away from this story.',
        ],
      },
      {
        hHi: 'कहानी का वह हिस्सा जो कोई नहीं दोहराता',
        hEn: 'The part of the story nobody repeats',
        pHi: [
          'ऐसी कहानियाँ सुनाते समय अंत पर ध्यान रहता है — आज़ादी, आराम, सुरक्षा। पर जिन तीस वर्षों में यह बना, वे साधारण थे, और यही बात दोहराने लायक़ है।',
          'उन तीस वर्षों में कोई नाटकीय क्षण नहीं था। कोई सही समय पर लिया गया चतुर निर्णय नहीं, कोई ऐसा साल नहीं जिसने सब बदल दिया। केवल हर महीने वही छोटी-सी क्रिया, दोहराई हुई।',
          'यही कारण है कि यह तरीक़ा किसी को उत्साहित नहीं करता और यही कारण है कि यह काम करता है। जो चीज़ रोमांचक होती है, वह प्रायः जोखिम भरी होती है; जो उबाऊ होती है, वह प्रायः टिकाऊ।',
          'इसलिए यदि इस पूरे लेख से केवल एक वाक्य याद रखना हो, तो वह यह है: संपत्ति किसी एक अच्छे निर्णय से नहीं बनती, बल्कि एक साधारण निर्णय को बहुत बार दोहराने से बनती है।',
        ],
        pEn: [
          'When stories like this are told, attention settles on the ending — the freedom, the ease, the security. But the thirty years that built it were ordinary, and that is the part worth repeating.',
          'Across those thirty years there was no dramatic moment. No clever decision taken at exactly the right time, no single year that changed everything. Only the same small action every month, repeated.',
          'This is why the method excites nobody, and it is also why it works. What is thrilling is usually risky; what is boring is usually durable, and over three decades durability is the only quality that matters.',
          'So if only one sentence from all of this is worth keeping, it is this: wealth is not built from one good decision but from repeating an ordinary decision a very large number of times.',
        ],
      },
    ],
  },

  {
    slug: 'bacchon-ko-paise-ki-samajh',
    sections: [
      {
        hHi: 'उम्र के हिसाब से क्या सिखाया जाए',
        hEn: 'What to teach at which age',
        pHi: [
          'बच्चों को पैसे की समझ देने में सबसे आम ग़लती यह है कि सब कुछ एक साथ समझाने की कोशिश की जाती है। उम्र के हिसाब से बाँट देने पर यह काम कहीं आसान हो जाता है।',
          'पाँच से सात साल की उम्र में केवल एक चीज़ सिखाई जा सकती है और वही पर्याप्त है: चीज़ों की क़ीमत होती है, और पैसा सीमित है। इस उम्र में गुल्लक और दुकान पर ख़ुद पैसे देने का अनुभव ही पूरा पाठ है।',
          'आठ से बारह की उम्र में इंतज़ार जोड़ा जा सकता है। इस उम्र में बच्चा यह समझ सकता है कि आज की छोटी चीज़ छोड़कर कुछ हफ़्तों बाद बड़ी चीज़ ली जा सकती है — और यही वह क्षमता है जिस पर बाद का पूरा वित्तीय जीवन टिकता है।',
          'तेरह से अठारह में तीसरी परत आती है: आय, कर, और उधार का विचार। यही वह उम्र है जब बच्चे को घर के असली बजट का कुछ हिस्सा दिखाया जा सकता है, और उस पारदर्शिता का असर किसी उपदेश से कहीं अधिक होता है।',
        ],
        pEn: [
          'The most common mistake in teaching children about money is trying to explain everything at once. Splitting it by age makes the task far easier and considerably more effective.',
          'Between five and seven only one thing can be taught, and it is enough: things cost money, and money runs out. At this age a piggy bank and handing over the coins in a shop themselves is the entire lesson.',
          'Between eight and twelve, waiting can be added. A child of this age can understand that giving up something small today buys something larger in a few weeks — and that capacity is what the whole of later financial life rests on.',
          'From thirteen to eighteen a third layer arrives: income, tax, and the idea of borrowing. This is the age at which some part of the real household budget can be shown, and that transparency does more than any amount of advice.',
        ],
      },
      {
        hHi: 'जेब ख़र्च की राशि और नियम',
        hEn: 'The pocket money amount, and the rules around it',
        pHi: [
          'जेब ख़र्च देने का उद्देश्य बच्चे को ख़ुश करना नहीं, उसे अभ्यास देना है। इसलिए राशि से अधिक महत्वपूर्ण यह है कि नियम स्पष्ट और स्थिर हों।',
          'तीन नियम पर्याप्त हैं। पहला, राशि तय हो और तय दिन आए — अनियमित पैसा कोई अभ्यास नहीं देता। दूसरा, उसका उपयोग बच्चे का अपना निर्णय हो, चाहे वह निर्णय आपको बेवक़ूफ़ी लगे। तीसरा, ख़त्म हो जाने पर अगली तारीख़ से पहले और न मिले।',
          'तीसरा नियम सबसे कठिन है और सबसे ज़रूरी। जब बच्चा तीन दिन में सब ख़र्च कर देता है और बाक़ी महीना ख़ाली रहता है, तो वह वह सबक़ सीखता है जो कोई व्याख्यान नहीं दे सकता — और वह सबक़ इस उम्र में बहुत सस्ता पड़ता है।',
          'यह भी ध्यान रखिए कि जेब ख़र्च को घर के कामों से जोड़ना ठीक है या नहीं, इस पर राय बँटी हुई है। एक व्यावहारिक बीच का रास्ता यह है कि रोज़मर्रा के काम बिना पैसे के हों, और कोई अतिरिक्त, वैकल्पिक काम कमाई का अवसर बने।',
        ],
        pEn: [
          'The purpose of pocket money is not to please a child but to give them practice. So the rules around it matter more than the amount, and clarity matters more than generosity.',
          'Three rules are enough. First, the amount is fixed and arrives on a fixed day — irregular money gives no practice at all. Second, how it is used is the child\'s own decision, even when that decision looks foolish to you. Third, when it runs out, no more arrives before the next date.',
          'The third rule is the hardest and the most important. When a child spends everything in three days and faces an empty rest of the month, they learn something no lecture can deliver — and at that age the lesson is very cheap.',
          'Opinion is divided on whether pocket money should be tied to chores. A workable middle path is that ordinary daily chores carry no payment, while some additional, optional task becomes an opportunity to earn.',
        ],
      },
      {
        hHi: 'पहला बैंक खाता और डिजिटल पैसा',
        hEn: 'The first bank account and digital money',
        pHi: [
          'गुल्लक की एक बड़ी ताक़त यह है कि पैसा दिखता है। डिजिटल पैसे में यही ताक़त ग़ायब हो जाती है, और यही आज के बच्चों के लिए सबसे बड़ी नई चुनौती है।',
          'इसलिए बैंक खाते की ओर बढ़ते समय एक क़दम बीच में रखना उपयोगी है: पासबुक। जब बच्चा ख़ुद जाकर प्रविष्टि करवाता है और संख्या बढ़ती हुई देखता है, तो अदृश्य पैसा फिर से दिखने लगता है।',
          'UPI के साथ नियम और सख़्त होने चाहिए, और यहाँ बात सुरक्षा की भी है। पहले कुछ महीनों में लेन-देन की सीमा कम रखिए, हर लेन-देन साथ बैठकर कीजिए, और यह स्पष्ट कर दीजिए कि PIN किसी को भी नहीं बताया जाता — किसी को भी नहीं, चाहे वह कोई भी हो।',
          'सबसे उपयोगी अभ्यास यह है कि महीने के अंत में बच्चे के साथ बैठकर उसका अपना विवरण देखा जाए। कहाँ गया पैसा, यह सवाल बचपन में पूछना सीख लेने पर जीवन भर काम आता है।',
        ],
        pEn: [
          'One of the great strengths of a piggy bank is that the money is visible. Digital money removes that strength entirely, and it is the largest new difficulty facing children today.',
          'So when moving towards a bank account it helps to keep one step in between: the passbook. When a child goes and gets an entry made and watches the number rise, invisible money becomes visible again.',
          'With UPI the rules should be stricter, and here safety matters as well. Keep transaction limits low for the first few months, do every transaction sitting together, and make it absolutely clear that the PIN is never told to anybody — anybody at all, whoever they claim to be.',
          'The most useful habit is to sit with the child at month-end and look through their own statement. Learning to ask where the money went is a question that keeps paying for the rest of a life.',
        ],
      },
      {
        hHi: 'माता-पिता जो कहते हैं और जो करते हैं',
        hEn: 'What parents say against what they do',
        pHi: [
          'बच्चे पैसे के बारे में जो सीखते हैं, उसका अधिकांश हिस्सा बताया नहीं जाता — वह देखा जाता है। यही कारण है कि सबसे अच्छी शिक्षा भी तब बेअसर हो जाती है जब व्यवहार उसके उलट हो।',
          'यदि घर में हर तनाव के बाद ख़रीदारी होती है, तो बच्चा यही सीखता है कि पैसा भावना का इलाज है। यदि क़ीमत के बारे में कभी बात नहीं होती, तो वह सीखता है कि यह विषय गुप्त है।',
          'इसका उल्टा भी उतना ही सच है। जब बच्चा देखता है कि माता-पिता किसी बड़ी ख़रीद से पहले तुलना करते हैं, कुछ महीने रुकते हैं, और फिर निर्णय लेते हैं — तो वह पूरा तरीक़ा बिना किसी उपदेश के सीख जाता है।',
          'एक और चीज़ जो असामान्य रूप से असरदार है: बच्चों के सामने अपनी वित्तीय ग़लती स्वीकार करना। यह उन्हें बताता है कि ग़लतियाँ सामान्य हैं और सुधारी जा सकती हैं, जो शायद इस पूरे विषय का सबसे उपयोगी संदेश है।',
        ],
        pEn: [
          'Most of what children learn about money is never told to them — it is watched. That is why even the best instruction stops working when behaviour runs the other way.',
          'If every tense evening at home ends in a purchase, the child learns that money is a treatment for feelings. If prices are never discussed, they learn that the subject is a secret one.',
          'The reverse holds just as strongly. When a child sees parents compare options before a large purchase, wait a few months, and then decide — the whole method transfers without a word of advice being given.',
          'One other thing is unusually effective: admitting a financial mistake of your own in front of them. It tells them that mistakes are ordinary and can be corrected, which may be the single most useful message in this entire subject.',
        ],
      },
      {
        hHi: 'देने वाला डिब्बा: वह हिस्सा जिसे लोग छोड़ देते हैं',
        hEn: 'The giving jar: the part people leave out',
        pHi: [
          'तीन डिब्बों में से जिसे सबसे पहले छोड़ दिया जाता है वह देने वाला डिब्बा है, और यही शायद सबसे अधिक काम करने वाला है।',
          'इसका कारण यह है कि देना पैसे को उसके सही स्थान पर रख देता है — एक साधन के रूप में, लक्ष्य के रूप में नहीं। जो बच्चा हर महीने कुछ हिस्सा किसी और के लिए अलग रखता है, वह पैसे को अपनी पहचान से जोड़ना नहीं सीखता।',
          'व्यावहारिक तरीक़ा यह है कि बच्चे को ख़ुद चुनने दिया जाए कि वह हिस्सा कहाँ जाए। पड़ोस का कोई काम, कोई संस्था, या कोई एक बार की मदद — चुनाव उसका हो, राशि छोटी हो, और वह ख़ुद देने जाए।',
          'इस अभ्यास का असर तुरंत नहीं दिखता, और शायद यही इसकी सबसे बड़ी ख़ूबी है। यह उन कुछ चीज़ों में है जो बचपन में सिखाई जाती हैं और जिनका असर तीस साल बाद दिखता है।',
        ],
        pEn: [
          'Of the three jars, the one dropped first is almost always the giving jar — and it may well be the one that does the most work over a lifetime.',
          'The reason is that giving puts money in its correct place, as a tool rather than as a goal. A child who sets aside a share for somebody else every month does not learn to attach money to their own identity.',
          'The practical method is to let the child choose where that share goes. Something in the neighbourhood, an organisation, or a single act of help — the choice is theirs, the amount is small, and they hand it over themselves.',
          'The effect of this habit is not visible immediately, and that is perhaps its greatest quality. It belongs to the small set of things taught in childhood whose results show up thirty years later.',
        ],
      },
    ],
  },

  {
    slug: 'emergency-fund-kitna-chahiye',
    sections: [
      {
        hHi: 'नौकरी की क़िस्म से संख्या कैसे बदलती है',
        hEn: 'How the number changes with the kind of work you do',
        pHi: [
          'तीन से छह महीने का नियम एक औसत है, और औसत किसी पर भी ठीक नहीं बैठता। असली संख्या इस बात से निकलती है कि आपकी आय कितनी स्थिर है और नई आय मिलने में कितना समय लगेगा।',
          'सरकारी नौकरी या लंबे अनुबंध वाली स्थिर नौकरी में तीन महीने पर्याप्त हो सकते हैं, क्योंकि आय अचानक रुकने की संभावना कम है और अगर रुके तो सूचना पहले मिल जाती है।',
          'निजी क्षेत्र की सामान्य नौकरी में चार से छह महीने अधिक उपयुक्त हैं। यहाँ नोटिस अवधि छोटी हो सकती है और नई नौकरी खोजने में कई महीने लग सकते हैं, ख़ासकर वरिष्ठ पदों पर जहाँ अवसर कम होते हैं।',
          'स्वरोज़गार, दुकान, फ्रीलांस या कमीशन पर चलने वाली आय में नौ से बारह महीने भी अधिक नहीं हैं। यहाँ आय हर महीने बदलती है, और मंदी का असर एक साथ पूरे क्षेत्र पर पड़ता है।',
        ],
        pEn: [
          'The three-to-six-month rule is an average, and an average fits nobody exactly. Your real number comes from how stable your income is and how long replacing it would take.',
          'In a government job or a stable long-contract position, three months may well be enough, because income is unlikely to stop suddenly and when it does there is usually warning beforehand.',
          'In an ordinary private-sector job, four to six months fits better. Notice periods can be short and finding the next role can take several months, particularly at senior levels where fewer positions exist.',
          'For self-employment, a shop, freelance work or commission-based income, nine to twelve months is not excessive. Income varies every month here, and a downturn tends to hit an entire sector at the same time.',
        ],
      },
      {
        hHi: 'घर में कितने लोग उस आय पर निर्भर हैं',
        hEn: 'How many people depend on that income',
        pHi: [
          'दूसरा गुणक ज़िम्मेदारी का है, और यह पहले से भी अधिक असर डालता है। अकेले रहने वाले व्यक्ति और चार लोगों के परिवार के इकलौते कमाने वाले के लिए एक ही संख्या नहीं हो सकती।',
          'यदि घर में दो लोग कमाते हैं और दोनों की नौकरियाँ अलग-अलग क्षेत्रों में हैं, तो जोखिम बँट जाता है और कोष थोड़ा छोटा रखा जा सकता है। पर यदि दोनों एक ही उद्योग में हैं, तो यह बँटवारा भ्रम है — मंदी दोनों को एक साथ छूती है।',
          'तीसरा विचार आश्रितों का है, ख़ासकर बुज़ुर्ग माता-पिता या पढ़ाई कर रहे बच्चे। ये ख़र्च आय रुकने पर भी नहीं रुकते, और यही वह श्रेणी है जिसे लोग गणना करते समय सबसे अधिक कम आँकते हैं।',
          'एक सरल तरीक़ा यह है: उन सभी ख़र्चों को गिनिए जो आपकी आय बंद होने पर भी अगले महीने आएँगे। उसी संख्या को महीनों से गुणा कीजिए, वेतन को नहीं।',
        ],
        pEn: [
          'The second multiplier is responsibility, and it moves the number even more than the first one does. A person living alone and the sole earner of a family of four cannot use the same figure.',
          'If two people in the household earn and their jobs sit in different sectors, the risk is genuinely spread and the fund can be a little smaller. But if both work in the same industry, that spreading is an illusion — a downturn reaches both at once.',
          'The third consideration is dependants, particularly elderly parents or children in education. Those costs do not stop when income does, and this is the category people most consistently underestimate when doing the calculation.',
          'A simple approach: count every expense that will still arrive next month if your income stops today. Multiply that figure by the months, not your salary.',
        ],
      },
      {
        hHi: 'कोष का इस्तेमाल कब करना है और कब नहीं',
        hEn: 'When to use the fund and when not to',
        pHi: [
          'आपातकालीन कोष बनाना आधा काम है; उसे बचाए रखना दूसरा आधा है। और इसके लिए यह तय होना चाहिए कि "आपात" का अर्थ क्या है।',
          'तीन प्रश्नों की जाँच उपयोगी है। क्या यह अप्रत्याशित है? क्या यह ज़रूरी है? क्या यह अभी है? यदि तीनों का उत्तर हाँ है, तो कोष का उपयोग सही है।',
          'नौकरी जाना, अचानक चिकित्सा ख़र्च, घर की कोई ऐसी मरम्मत जिसके बिना रहना संभव न हो — ये तीनों जाँच पार करते हैं। छुट्टी, त्योहार, कोई अच्छा सौदा, या किसी निवेश का "मौक़ा" — इनमें से कोई नहीं।',
          'सबसे कठिन श्रेणी बीच की है: वह ख़र्च जो ज़रूरी तो है पर अप्रत्याशित नहीं। बच्चे की फ़ीस, बीमा का प्रीमियम, वाहन की सर्विस — इनके लिए अलग "सिंकिंग फंड" बनाना चाहिए, आपातकालीन कोष नहीं छूना चाहिए।',
        ],
        pEn: [
          'Building an emergency fund is half the work; keeping it intact is the other half. For that, it has to be settled in advance what "emergency" actually means.',
          'A three-question test helps. Is it unexpected? Is it necessary? Is it now? If all three answers are yes, using the fund is correct.',
          'Losing a job, a sudden medical cost, a home repair you cannot live without — all three clear the test. A holiday, a festival, a good deal, or an investment "opportunity" — none of them do.',
          'The hardest category is the middle one: expenses that are necessary but not unexpected. School fees, an insurance premium, a vehicle service — those deserve a separate sinking fund, and the emergency fund should be left alone.',
        ],
      },
      {
        hHi: 'ख़र्च करने के बाद उसे दोबारा भरना',
        hEn: 'Refilling it after it has been used',
        pHi: [
          'जिस दिन कोष का उपयोग होता है, उसी दिन एक दूसरी योजना शुरू होनी चाहिए — उसे दोबारा भरने की। यह क़दम लगभग हमेशा छूट जाता है, और इसी चूक से लोग दूसरी बार असुरक्षित पकड़े जाते हैं।',
          'व्यावहारिक तरीक़ा यह है कि कोष का उपयोग करते ही उसी दिन एक स्वचालित मासिक हस्तांतरण फिर से शुरू कर दिया जाए, भले वह पहले से छोटा हो। छोटी राशि से दोबारा शुरू करना बड़ी राशि की प्रतीक्षा करने से हमेशा बेहतर है।',
          'दूसरा उपयोगी नियम यह है कि जब तक कोष अपने स्तर पर वापस न आ जाए, तब तक कोई नया बड़ा ख़र्च न लिया जाए। यह असुविधाजनक लगता है, और यही असुविधा कोष को दोबारा बनने देती है।',
          'और यदि कोष का उपयोग करना पड़ा, तो उसे विफलता मत समझिए। कोष का पूरा उद्देश्य यही था। जो व्यक्ति उसे इस्तेमाल करके फिर भर लेता है, उसकी व्यवस्था काम कर रही है — यही सफलता की परिभाषा है।',
        ],
        pEn: [
          'On the day the fund is used, a second plan should begin — refilling it. This step is almost always skipped, and skipping it is how people get caught unprotected a second time.',
          'The practical method is to restart an automatic monthly transfer the same day the fund is drawn on, even at a smaller amount than before. Restarting small always beats waiting until a large amount is available.',
          'A second useful rule is to take on no new large expense until the fund is back at its level. That feels inconvenient, and the inconvenience is exactly what allows the fund to rebuild.',
          'And if the fund had to be used, do not treat that as a failure. Using it was its entire purpose. Somebody who draws on it and then refills it has a system that is working — that is what success looks like here.',
        ],
      },
      {
        hHi: 'यह कोष निवेश नहीं है',
        hEn: 'This fund is not an investment',
        pHi: [
          'यह बात बार-बार कहनी पड़ती है क्योंकि प्रलोभन लगातार बना रहता है। आपातकालीन कोष का काम बढ़ना नहीं, उपलब्ध रहना है, और ये दोनों उद्देश्य एक साथ नहीं सधते।',
          'जो पैसा ऐसी जगह रखा है जहाँ से निकालने में तीन दिन लगते हैं या जिसका मूल्य निकालते समय गिरा हुआ हो सकता है, वह आपात के लिए नहीं है — चाहे उस पर प्रतिफल कितना भी अच्छा दिखे।',
          'इस कोष पर मिलने वाला ब्याज मुद्रास्फीति से कम होगा, और यह स्वीकार करने लायक़ है। आप उस अंतर को प्रतिफल के रूप में नहीं, बीमा के प्रीमियम के रूप में देखिए — क्योंकि व्यावहारिक रूप से वह यही है।',
          'जब कोष अपने लक्ष्य तक पहुँच जाए, तब उससे ऊपर की हर राशि निवेश में जानी चाहिए। यही सही क्रम है: पहले सुरक्षा, फिर वृद्धि — और इस क्रम को उलटने से ही अधिकांश योजनाएँ बीच में टूटती हैं।',
        ],
        pEn: [
          'This has to be repeated because the temptation is constant. The job of an emergency fund is not to grow but to be available, and those two objectives cannot be served at the same time.',
          'Money kept somewhere that takes three days to reach, or whose value may be down on the day you need it, is not emergency money — however good the return on it looks in a comparison table.',
          'The interest this fund earns will be below inflation, and that is worth accepting. Treat the difference not as a lost return but as an insurance premium, because in practical terms that is exactly what it is.',
          'Once the fund reaches its target, everything above that level should go into investments. That is the correct order: protection first, then growth — and reversing the order is how most plans break down halfway through.',
        ],
      },
      {
        hHi: 'हर साल संख्या दोबारा देखिए',
        hEn: 'Revisit the number every year',
        pHi: [
          'एक बार तय की गई संख्या हमेशा के लिए सही नहीं रहती, क्योंकि जिन चीज़ों से वह निकली थी वे बदलती रहती हैं।',
          'तीन घटनाएँ ऐसी हैं जिनके बाद गणना दोबारा करनी चाहिए: घर में कोई नया आश्रित आना, किराया या EMI बदलना, और नौकरी या व्यवसाय की प्रकृति बदलना। इनमें से कोई भी संख्या को काफ़ी हिला देता है।',
          'यदि ऐसी कोई घटना न भी हो, तो साल में एक बार दस मिनट का पुनरावलोकन पर्याप्त है। पिछले बारह महीनों का औसत मासिक ख़र्च निकालिए और उसी से नई संख्या बना लीजिए।',
          'यह छोटा-सा अभ्यास इस पूरे विषय का सबसे कम मेहनत वाला और सबसे अधिक असर वाला हिस्सा है — और इसीलिए यह सबसे अधिक छोड़ा जाता है।',
        ],
        pEn: [
          'A number decided once does not stay correct forever, because the things it was derived from keep changing underneath it.',
          'Three events should trigger a recalculation: a new dependant in the household, a change in rent or EMI, and a change in the nature of the job or business. Any one of them moves the figure substantially.',
          'Even if none of those happens, a ten-minute review once a year is enough. Work out the average monthly expense across the past twelve months and build the new number from that.',
          'This small exercise is the lowest-effort and highest-impact part of the whole subject — which is precisely why it is the part most often skipped.',
        ],
      },
    ],
  },

  {
    slug: 'upi-fraud-se-bachav',
    sections: [
      {
        hHi: 'ठगी की बुनियादी बनावट: जल्दबाज़ी और डर',
        hEn: 'The basic architecture of a scam: hurry and fear',
        pHi: [
          'नौ अलग तरकीबें याद रखना कठिन है, पर उनके पीछे की बनावट एक ही है, और उसे पहचान लेना नौ तरकीबों से अधिक काम आता है।',
          'हर UPI ठगी दो में से एक भावना पर चलती है। पहली जल्दबाज़ी है — "अभी करना होगा, वरना मौक़ा चला जाएगा"। दूसरी डर है — "आपका खाता बंद हो जाएगा", "आपके नाम पर मामला दर्ज है"।',
          'दोनों का उद्देश्य एक ही है: आपको सोचने का समय न देना। कोई भी असली बैंक, कोई भी असली सरकारी विभाग, और कोई भी असली कंपनी आपको तीन मिनट में निर्णय लेने के लिए मजबूर नहीं करती।',
          'इसलिए सबसे मज़बूत बचाव कोई तकनीकी सेटिंग नहीं बल्कि एक वाक्य है जिसे आप हर बार दोहरा सकें: "मैं दस मिनट बाद वापस कॉल करूँगा।" लगभग हर ठगी इसी वाक्य पर टूट जाती है।',
        ],
        pEn: [
          'Remembering nine separate tricks is hard, but the structure behind all of them is the same, and recognising that structure serves better than memorising the list.',
          'Every UPI scam runs on one of two emotions. The first is hurry — "it has to be done now or the chance is gone". The second is fear — "your account will be frozen", "a case has been registered in your name".',
          'Both exist for the same purpose: to deny you time to think. No genuine bank, no genuine government department and no genuine company forces a decision within three minutes.',
          'So the strongest defence is not a technical setting but a sentence you can repeat every time: "I will call you back in ten minutes." Very nearly every scam collapses against that one line.',
        ],
      },
      {
        hHi: 'परिवार के बुज़ुर्गों की रक्षा कैसे करें',
        hEn: 'Protecting the older people in the family',
        pHi: [
          'ठगी का सबसे बड़ा हिस्सा उन लोगों तक पहुँचता है जिन्होंने UPI हाल ही में सीखा है, और भारत में इसका अर्थ प्रायः घर के बुज़ुर्ग होते हैं।',
          'यहाँ सबसे उपयोगी क़दम सीमा तय करना है। दैनिक लेन-देन की सीमा कम रखिए — जितनी उनकी वास्तविक ज़रूरत है, उससे थोड़ी ऊपर। इससे किसी भी एक ठगी में जाने वाली अधिकतम राशि सीमित हो जाती है।',
          'दूसरा क़दम एक अलग खाता है। मुख्य बचत खाते को UPI से मत जोड़िए; एक छोटे खाते में महीने भर का ख़र्च रखिए और UPI उसी से चले। यह एक ही व्यवस्था अधिकांश बड़े नुक़सान रोक देती है।',
          'तीसरा क़दम बातचीत का है, और वह सबसे महत्वपूर्ण है। उन्हें बताइए कि यदि कभी कुछ ग़लत हो जाए तो डाँट नहीं पड़ेगी। जो लोग शर्म के डर से बताने में देर करते हैं, उन्हीं का नुक़सान सबसे बड़ा होता है, क्योंकि पहला घंटा ही सबसे क़ीमती होता है।',
        ],
        pEn: [
          'The largest share of fraud reaches people who learned UPI recently, and in India that usually means the older members of a household.',
          'The most useful step here is limits. Keep the daily transaction limit low — a little above what they actually need. That caps the maximum any single scam can take, regardless of how convincing it was.',
          'The second step is a separate account. Do not link the main savings account to UPI; keep a month\'s spending in a small account and let UPI run from that one. This single arrangement prevents most large losses.',
          'The third step is a conversation, and it matters most of all. Tell them that if something goes wrong there will be no scolding. People who delay reporting out of embarrassment suffer the biggest losses, because the first hour is the most valuable one.',
        ],
      },
      {
        hHi: 'फ़ोन पर वे सेटिंग जो अभी बदल देनी चाहिए',
        hEn: 'The phone settings worth changing today',
        pHi: [
          'कुछ सेटिंग ऐसी हैं जिन्हें एक बार ठीक कर देने पर वे लगातार सुरक्षा देती रहती हैं, और उनमें कुल दस मिनट लगते हैं।',
          'पहली, स्क्रीन-शेयरिंग और रिमोट-कंट्रोल वाले ऐप हटा दीजिए, जब तक कि किसी काम के लिए वे सचमुच ज़रूरी न हों। भारत में बड़ी संख्या में ठगी इन्हीं ऐप के माध्यम से हुई है।',
          'दूसरी, अनजान स्रोत से ऐप इंस्टॉल करने की अनुमति बंद रखिए। कोई भी असली बैंक आपसे कभी किसी लिंक से APK डाउनलोड करने को नहीं कहेगा।',
          'तीसरी, बैंक और UPI ऐप पर स्क्रीन लॉक अलग रखिए, और सूचनाएँ लॉक स्क्रीन पर न दिखें ऐसा कर दीजिए। OTP का लॉक स्क्रीन पर दिखना उसे लगभग बेकार बना देता है।',
          'चौथी, हर UPI ऐप में लेन-देन की सीमा ख़ुद तय कर दीजिए। डिफ़ॉल्ट सीमा प्रायः आपकी ज़रूरत से बहुत ऊँची होती है, और उसे घटाने में कोई नुक़सान नहीं है।',
        ],
        pEn: [
          'A few settings, fixed once, keep protecting you continuously afterwards, and together they take about ten minutes to change.',
          'First, remove screen-sharing and remote-control apps unless some job genuinely requires them. A very large number of frauds in India have run through exactly these applications.',
          'Second, keep installation from unknown sources switched off. No genuine bank will ever ask you to download an APK from a link sent to you.',
          'Third, set a separate screen lock on banking and UPI apps, and stop notifications from appearing on the lock screen. An OTP visible on a locked phone is close to useless as a protection.',
          'Fourth, set your own transaction limits inside every UPI app. The default limits are usually far above what you need, and there is no cost at all to lowering them.',
        ],
      },
      {
        hHi: 'ठगी के बाद का पहला घंटा',
        hEn: 'The first hour after being defrauded',
        pHi: [
          'यदि पैसा चला गया है, तो अगला घंटा बाक़ी सब कुछ से अधिक मायने रखता है, क्योंकि उसी दौरान रक़म को रोका जा सकता है।',
          'पहला क़दम: बैंक के आधिकारिक नंबर पर तुरंत कॉल कीजिए और लेन-देन की सूचना दीजिए। नंबर बैंक की वेबसाइट या पासबुक से लीजिए — किसी खोज परिणाम से नहीं, क्योंकि नक़ली हेल्पलाइन नंबर इसी जगह डाले जाते हैं।',
          'दूसरा क़दम: राष्ट्रीय साइबर अपराध हेल्पलाइन पर शिकायत दर्ज कीजिए। जितनी जल्दी शिकायत दर्ज होती है, उतनी अधिक संभावना होती है कि प्राप्तकर्ता खाते को रोका जा सके।',
          'तीसरा क़दम: सब कुछ सुरक्षित रखिए — संदेश, कॉल का समय, लेन-देन आईडी, और वह नंबर या UPI पता जिस पर पैसा गया। यह विवरण बाद में माँगा जाता है और स्मृति से नहीं दिया जा सकता।',
          'और चौथा: उसी नंबर पर वापस बात मत कीजिए। ठगी के बाद अक्सर दूसरा कॉल आता है, जिसमें कोई "मदद" करने की पेशकश करता है — वह उसी गिरोह का दूसरा चरण होता है।',
        ],
        pEn: [
          'If money has gone, the next hour matters more than everything else, because that is the window in which the amount can still be stopped.',
          'First: call your bank\'s official number immediately and report the transaction. Take the number from the bank\'s website or your passbook — never from a search result, because fake helpline numbers are planted in exactly that place.',
          'Second: file a complaint on the national cybercrime helpline. The sooner a complaint is registered, the better the chance that the receiving account can be frozen before the money moves on.',
          'Third: preserve everything — the messages, the times of calls, the transaction ID, and the number or UPI address the money went to. These details are asked for later and cannot be supplied from memory.',
          'And fourth: do not talk to that number again. A second call often follows a fraud, offering to "help" recover the money — that call is the same group running its second stage.',
        ],
      },
      {
        hHi: 'वे तीन बातें जो कभी नहीं बदलतीं',
        hEn: 'The three things that never change',
        pHi: [
          'तरकीबें हर साल नई आती हैं, इसलिए सूची याद रखना दीर्घकालिक बचाव नहीं है। तीन नियम ऐसे हैं जो हर नई तरकीब पर भी लागू रहते हैं।',
          'पहला: पैसा प्राप्त करने के लिए PIN कभी नहीं लगता। यदि कोई आपसे पैसा भेजने की बात कहकर PIN डलवा रहा है, तो वह पैसा आपसे निकल रहा है, आ नहीं रहा।',
          'दूसरा: कोई भी संस्था कभी OTP, PIN या पासवर्ड नहीं माँगती — बैंक नहीं, पुलिस नहीं, कंपनी नहीं, कोई नहीं। यह नियम अपवाद-रहित है, और इसी वजह से यह इतना उपयोगी है।',
          'तीसरा: जो कोई आपको सोचने का समय नहीं दे रहा, वही सबसे संदिग्ध है। सच्ची बात इंतज़ार कर सकती है; झूठी बात नहीं कर सकती, क्योंकि इंतज़ार उसे उजागर कर देता है।',
          'इन तीन वाक्यों को घर में किसी दिखने वाली जगह पर लिख देना — फ़्रिज पर, या फ़ोन के पीछे — किसी भी तकनीकी उपाय से अधिक असरदार साबित होता है।',
        ],
        pEn: [
          'New tricks appear every year, so memorising a list is not a long-term defence. Three rules hold against every new variation as well as every old one.',
          'First: a PIN is never required to receive money. If somebody is having you enter a PIN while talking about sending you money, that money is leaving your account rather than arriving in it.',
          'Second: no institution ever asks for an OTP, PIN or password — not a bank, not the police, not a company, nobody. The rule has no exceptions, and that is exactly what makes it so useful.',
          'Third: whoever is denying you time to think is the most suspicious person in the conversation. A true statement can wait; a false one cannot, because waiting is what exposes it.',
          'Writing those three sentences somewhere visible at home — on the fridge, or on the back of a phone — turns out to be more effective than any technical measure.',
        ],
      },
    ],
  },
];

export function applyExpansions(all: Article[]): void {
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  for (const exp of EXPANSIONS) {
    const article = bySlug.get(exp.slug);
    if (!article) continue;
    article.sections.push(...exp.sections);
  }
}
