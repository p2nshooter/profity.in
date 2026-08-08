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

  // ---------------------------------------------------------------------
  // Batch two.
  // ---------------------------------------------------------------------

  {
    slug: 'ppf-account-complete-guide',
    sections: [
      {
        hHi: 'जमा की तारीख़ का असर',
        hEn: 'Why the deposit date matters',
        pHi: [
          'PPF का एक विवरण ऐसा है जो नियमों में लिखा है पर बहुत कम लोग उसका उपयोग करते हैं: ब्याज की गणना महीने की पाँचवीं तारीख़ और महीने के अंत के बीच की सबसे कम शेष राशि पर होती है।',
          'इसका सीधा अर्थ यह है कि पाँच तारीख़ के बाद जमा किया गया पैसा उस पूरे महीने का ब्याज नहीं कमाता। बारह किश्तों में जमा करने वाले के लिए यह हर साल कुछ महीनों का ब्याज छोड़ देने जैसा है।',
          'इसलिए यदि आप मासिक जमा करते हैं, तो तारीख़ पाँच से पहले रखिए। और यदि आप साल में एक बार जमा करते हैं, तो अप्रैल की शुरुआत सबसे अच्छी है, क्योंकि तब वह राशि पूरे वर्ष ब्याज कमाती है।',
          'यह कोई चतुराई नहीं है, केवल नियम का सही उपयोग है — और पंद्रह साल में इसका असर अपने आप बड़ा हो जाता है।',
        ],
        pEn: [
          'One detail of PPF is written into the rules and used by very few people: interest is calculated on the lowest balance between the fifth of the month and the end of that month.',
          'The direct consequence is that money deposited after the fifth earns no interest for that whole month. For somebody depositing in twelve instalments, that amounts to giving away several months of interest every single year.',
          'So if you deposit monthly, keep the date before the fifth. And if you deposit once a year, early April is the best choice, because the amount then earns interest across the full year rather than part of it.',
          'This is not a clever trick, only correct use of the rule as written — and across fifteen years its effect grows large on its own.',
        ],
      },
      {
        hHi: 'यह खाता किसके लिए सबसे उपयुक्त है',
        hEn: 'Who this account suits best',
        pHi: [
          'PPF हर किसी के लिए एक जैसा उपयोगी नहीं है, और यह तय कर लेना कि आप किस श्रेणी में हैं, बाद की उलझन बचा देता है।',
          'यह उन लोगों के लिए सबसे उपयुक्त है जिनकी आय पर कर लगता है और जो लंबी अवधि के लिए एक ऐसा हिस्सा चाहते हैं जिसमें बाज़ार का उतार-चढ़ाव न हो। ऐसे व्यक्ति के लिए यह पोर्टफ़ोलियो का स्थिर सिरा बन जाता है।',
          'यह उन लोगों के लिए कम उपयुक्त है जिनकी आय कर के दायरे में नहीं आती, क्योंकि तब इसका सबसे बड़ा लाभ — कर से छूट — लागू ही नहीं होता, और तरलता की कमी बिना किसी बदले के रह जाती है।',
          'और यह उन लोगों के लिए अनुपयुक्त है जिन्हें अगले कुछ वर्षों में पैसे की ज़रूरत पड़ सकती है। पंद्रह साल की अवधि कोई औपचारिकता नहीं है; इसे हल्के में लेने पर बाद में असुविधा होती है।',
        ],
        pEn: [
          'PPF is not equally useful to everybody, and deciding which category you fall into saves a good deal of confusion later on.',
          'It suits people whose income is taxed and who want a long-term portion that carries no market movement. For such a person it becomes the stable end of a portfolio, and it plays that role well.',
          'It suits people below the tax threshold much less, because its largest benefit — the tax treatment — does not apply to them, and the lack of liquidity remains without anything given in exchange for it.',
          'And it is unsuitable for anybody who may need the money within the next few years. The fifteen-year term is not a formality, and treating it lightly leads to inconvenience later.',
        ],
      },
      {
        hHi: 'बच्चों और जीवनसाथी के नाम खाते',
        hEn: 'Accounts in the name of children and a spouse',
        pHi: [
          'एक सवाल जो बार-बार आता है वह यह है कि परिवार के हर सदस्य के नाम PPF खाता खोलकर अधिक जमा किया जा सकता है या नहीं।',
          'नाबालिग बच्चे के नाम खाता खोला जा सकता है और अभिभावक उसका संचालन करते हैं। पर ध्यान रखने की बात यह है कि एक वयस्क द्वारा अपने और अपने नाबालिग बच्चों के खातों में मिलाकर जमा की जाने वाली राशि पर संयुक्त सीमा लागू होती है।',
          'जीवनसाथी का खाता अलग होता है और उसकी अपनी सीमा होती है, बशर्ते जमा उसकी अपनी आय से हो। यदि जमा आपकी आय से हो रहा है, तो आय-क्लबिंग के नियम विचारणीय हो जाते हैं।',
          'ये नियम विस्तार में जाते हैं और समय-समय पर स्पष्टीकरण भी आते रहते हैं, इसलिए बड़ी राशि की योजना बनाने से पहले वर्तमान नियम देख लेना या किसी कर सलाहकार से पूछ लेना ही सही तरीक़ा है।',
        ],
        pEn: [
          'A question that keeps recurring is whether more can be deposited by opening a PPF account in the name of every family member.',
          'An account can be opened for a minor child with a guardian operating it. What has to be kept in mind is that a combined limit applies across an adult\'s own account and those of their minor children taken together.',
          'A spouse\'s account is separate and carries its own limit, provided the deposits come from their own income. If the deposits come from yours, the income-clubbing provisions become relevant and need to be considered.',
          'These rules run into detail and clarifications appear from time to time, so before planning around large amounts the correct approach is to check the current position or ask a tax adviser.',
        ],
      },
      {
        hHi: 'PPF की तुलना किससे की जानी चाहिए',
        hEn: 'What PPF should actually be compared with',
        pHi: [
          'सबसे आम ग़लत तुलना PPF और इक्विटी के बीच की जाती है, और उसका निष्कर्ष हमेशा एक जैसा और हमेशा भ्रामक होता है।',
          'ये दोनों एक ही काम नहीं करते। इक्विटी वृद्धि के लिए है और उसमें अनिश्चितता है; PPF निश्चितता के लिए है और उसमें वृद्धि सीमित है। इन्हें एक-दूसरे का विकल्प मानना दोनों को ग़लत समझना है।',
          'सही तुलना PPF की उन्हीं साधनों से है जो वही काम करते हैं — निश्चित प्रतिफल, लंबी अवधि, कम जोखिम। इस पंक्ति में रखकर देखने पर PPF की स्थिति स्पष्ट दिखती है, ख़ासकर कर-व्यवहार के कारण।',
          'एक संतुलित पोर्टफ़ोलियो में दोनों की जगह होती है, और अनुपात उम्र, लक्ष्य और आराम के स्तर से तय होता है। यह लेख किसी अनुपात की सिफ़ारिश नहीं करता; यह केवल यह कह रहा है कि प्रश्न "कौन बेहतर" नहीं बल्कि "कितना-कितना" है।',
        ],
        pEn: [
          'The most common bad comparison sets PPF against equity, and the conclusion drawn from it is always the same and always misleading.',
          'The two do not do the same job. Equity is for growth and carries uncertainty; PPF is for certainty and carries limited growth. Treating them as alternatives to one another misunderstands both of them.',
          'The correct comparison is against instruments doing the same job — fixed return, long horizon, low risk. Placed in that row, PPF\'s position becomes clear, particularly because of how it is treated for tax.',
          'A balanced portfolio has room for both, and the proportion depends on age, goals and how much movement you can live with. This article recommends no particular proportion; it only points out that the question is not "which is better" but "how much of each".',
        ],
      },
      {
        hHi: 'खाता खुला रखने की छोटी-सी शर्त',
        hEn: 'The small condition for keeping the account alive',
        pHi: [
          'PPF खाते के साथ एक ऐसी शर्त जुड़ी है जिसे भूल जाना आसान है और जिसका परिणाम असुविधाजनक होता है: हर वित्तीय वर्ष में एक न्यूनतम राशि जमा करनी होती है।',
          'यदि किसी वर्ष यह न्यूनतम जमा नहीं होता, तो खाता निष्क्रिय हो जाता है। निष्क्रिय खाते से ऋण या आंशिक निकासी की सुविधा नहीं मिलती, और उसे दोबारा चालू कराने के लिए छूटे हुए वर्षों का भुगतान और एक छोटा शुल्क देना पड़ता है।',
          'यह समस्या प्रायः उन लोगों के साथ होती है जो किसी वर्ष अधिक जमा कर देते हैं और अगले वर्ष यह मानकर छोड़ देते हैं कि पर्याप्त हो चुका है। सीमा वार्षिक है, और पिछले वर्ष का अतिरिक्त अगले वर्ष नहीं गिना जाता।',
          'इससे बचने का सबसे आसान तरीक़ा एक स्वचालित मासिक निर्देश है, चाहे राशि छोटी हो। छोटी राशि नियमित रूप से जाना, बड़ी राशि कभी-कभी जाने से बेहतर व्यवस्था है।',
        ],
        pEn: [
          'One condition attached to a PPF account is easy to forget and inconvenient when it is: a minimum amount has to be deposited in every financial year.',
          'If that minimum is missed in any year, the account becomes dormant. A dormant account cannot be used for loans or partial withdrawals, and reviving it requires paying for the missed years along with a small penalty.',
          'This usually happens to people who deposit a large amount in one year and then skip the next, assuming they have already put in enough. The limit is annual, and an excess in one year does not carry forward into the next.',
          'The easiest way to avoid it is a standing monthly instruction, however small the amount. A small sum going in regularly is a better arrangement than a large sum going in occasionally.',
        ],
      },
      {
        hHi: 'पंद्रह साल बाद का सबसे कम चर्चित विकल्प',
        hEn: 'The least discussed option after fifteen years',
        pHi: [
          'परिपक्वता के बाद तीन रास्तों की चर्चा होती है, पर उनमें से एक पर सबसे कम ध्यान जाता है: बिना नई जमा किए खाता चलाते रहना।',
          'इस विकल्प में आपको आगे कुछ भी डालना नहीं पड़ता, और शेष राशि पर ब्याज मिलता रहता है। साथ ही हर वर्ष एक निकासी की सुविधा भी बनी रहती है।',
          'यह उन लोगों के लिए असामान्य रूप से उपयोगी है जो सेवानिवृत्ति के आसपास हैं और जिन्हें एक ऐसे साधन की ज़रूरत है जो सुरक्षित हो, कर के लिहाज़ से अनुकूल हो, और जिसमें से ज़रूरत पड़ने पर हर साल कुछ निकाला जा सके।',
          'बहुत से लोग परिपक्वता पर पूरी राशि निकाल लेते हैं और फिर उसे कहीं और लगाने में महीनों लगाते हैं। इस विकल्प को जानना उस जल्दबाज़ी को टाल देता है, और अक्सर यही सबसे शांत निर्णय होता है।',
        ],
        pEn: [
          'Three routes are discussed after maturity, and one of them gets the least attention of all: keeping the account running without any fresh deposits.',
          'Under this option nothing further has to be paid in, and the balance continues to earn interest. Alongside that, one withdrawal a year remains available whenever it is needed.',
          'It is unusually useful for people near retirement who want something safe, favourably treated for tax, and from which a portion can be drawn each year if required.',
          'A great many people withdraw the entire amount at maturity and then spend months deciding where to put it. Knowing this option removes that hurry, and it is very often the calmest decision available.',
        ],
      },
    ],
  },

  {
    slug: 'health-insurance-family-guide',
    sections: [
      {
        hHi: 'प्रतीक्षा अवधि: वह घड़ी जो पहले दिन से चलती है',
        hEn: 'Waiting periods: the clock that starts on day one',
        pHi: [
          'स्वास्थ्य बीमा में सबसे अधिक निराशा प्रतीक्षा अवधि से आती है, और इसका कारण यह है कि लोग पॉलिसी लेते समय इसे पढ़ते नहीं और दावे के समय पहली बार सामना करते हैं।',
          'तीन अलग घड़ियाँ एक साथ चलती हैं। पहली आरंभिक प्रतीक्षा है — पॉलिसी शुरू होने के कुछ दिनों तक दुर्घटना के अलावा कुछ भी कवर नहीं होता।',
          'दूसरी विशिष्ट बीमारियों की प्रतीक्षा है। कुछ सामान्य स्थितियाँ — जैसे कुछ प्रकार की सर्जरी — पॉलिसी शुरू होने के एक या दो वर्ष बाद ही कवर होती हैं, भले ही वे पहले से मौजूद न रही हों।',
          'तीसरी और सबसे लंबी पूर्व-मौजूद बीमारियों की प्रतीक्षा है। यही वह श्रेणी है जिस पर सबसे अधिक विवाद होते हैं, और यही वह कारण है जिससे स्वास्थ्य बीमा जल्दी लेना — यानी स्वस्थ रहते हुए लेना — इतना महत्वपूर्ण है। घड़ी अभी शुरू होगी, बीमारी के बाद नहीं।',
        ],
        pEn: [
          'Most of the disappointment in health insurance comes from waiting periods, and the reason is that people do not read them while buying and meet them for the first time at claim.',
          'Three separate clocks run at once. The first is the initial waiting period — for some days after the policy begins, nothing except accidents is covered at all.',
          'The second is the waiting period for specified illnesses. Certain common conditions, including some kinds of surgery, are covered only after a year or two of the policy, even where they did not exist beforehand.',
          'The third and longest is the waiting period for pre-existing conditions. This is the category that generates the most disputes, and it is exactly why buying health cover early — that is, while healthy — matters so much. The clock starts now, not after a diagnosis.',
        ],
      },
      {
        hHi: 'रूम रेंट की सीमा और उसका छिपा हुआ गणित',
        hEn: 'The room rent limit and its hidden arithmetic',
        pHi: [
          'यह पॉलिसी का सबसे कम समझा जाने वाला खंड है और दावे के समय सबसे महँगा। कई पॉलिसियों में कमरे का किराया बीमा राशि के किसी प्रतिशत तक सीमित होता है।',
          'लोग मान लेते हैं कि यदि वे महँगे कमरे में रहें तो केवल किराए का अंतर देना होगा। असल में कई पॉलिसियों में ऐसा नहीं होता — अनुपातिक कटौती लागू होती है, और तब पूरे बिल का एक हिस्सा अस्वीकृत हो जाता है, केवल किराए का नहीं।',
          'यानी यदि आपने अनुमत सीमा से दोगुने किराए वाला कमरा लिया, तो सर्जन की फ़ीस, जाँच और दवाइयों तक में अनुपातिक कटौती लग सकती है। यही वह जगह है जहाँ "पूरा कवर था फिर भी आधा बिल देना पड़ा" जैसी शिकायतें जन्म लेती हैं।',
          'इसलिए पॉलिसी चुनते समय यह देखिए कि रूम रेंट पर कोई सीमा है या नहीं। बिना सीमा वाली पॉलिसी का प्रीमियम थोड़ा अधिक होता है, और वह अंतर प्रायः एक ही अस्पताल-भर्ती में वसूल हो जाता है।',
        ],
        pEn: [
          'This is the least understood clause in a policy and the most expensive one at claim time. Many policies cap the room rent at some percentage of the sum insured.',
          'People assume that taking a costlier room means paying only the difference in rent. In many policies that is not what happens — a proportionate deduction applies, and then a share of the entire bill is disallowed rather than just the rent.',
          'So if you took a room at twice the permitted rent, proportionate cuts can reach the surgeon\'s fee, the investigations and even the medicines. This is where complaints of the "I had full cover and still paid half the bill" kind come from.',
          'So when choosing a policy, check whether any room rent limit exists. A policy without one costs a little more in premium, and that difference is often recovered in a single hospital admission.',
        ],
      },
      {
        hHi: 'नियोक्ता की पॉलिसी काफ़ी क्यों नहीं है',
        hEn: 'Why the employer policy is not enough',
        pHi: [
          'बहुत से लोग यह मानकर अपनी पॉलिसी नहीं लेते कि दफ़्तर से कवर मिला हुआ है। यह भरोसा तीन कारणों से जोखिम भरा है।',
          'पहला, वह कवर नौकरी से जुड़ा है। जिस दिन नौकरी छूटेगी — इस्तीफ़ा, छँटनी या सेवानिवृत्ति — उसी दिन कवर भी चला जाएगा, और वह प्रायः वही समय होता है जब आय भी नहीं होती।',
          'दूसरा, राशि आमतौर पर छोटी होती है। नियोक्ता की पॉलिसियाँ प्रायः एक बुनियादी स्तर पर होती हैं, जो एक बड़ी बीमारी के लिए पर्याप्त नहीं है।',
          'तीसरा और सबसे महत्वपूर्ण: प्रतीक्षा अवधि की घड़ी आपकी अपनी पॉलिसी में ही चलती है। यदि आप पैंतालीस की उम्र में अपनी पहली पॉलिसी लेंगे, तो उसकी घड़ी तभी शुरू होगी — और तब तक जो स्थितियाँ बन चुकी होंगी वे पूर्व-मौजूद मानी जाएँगी।',
          'इसलिए व्यावहारिक सलाह यह है कि नियोक्ता के कवर को अतिरिक्त परत मानिए, बुनियाद नहीं। एक छोटी-सी अपनी पॉलिसी साथ चलती रहे, ताकि घड़ी चलती रहे।',
        ],
        pEn: [
          'Many people skip buying their own policy on the strength of cover provided at work. That reliance is risky for three reasons.',
          'First, the cover is tied to the job. On the day the job ends — resignation, redundancy or retirement — the cover ends with it, and that is very often the same period in which there is no income either.',
          'Second, the sum is usually small. Employer policies typically sit at a basic level, which is not enough for a serious illness.',
          'Third and most important: the waiting-period clock runs inside your own policy. If you buy your first policy at forty-five, the clock starts then — and whatever conditions have developed by that point will count as pre-existing.',
          'The practical advice is therefore to treat employer cover as an additional layer rather than a foundation. Keep a small policy of your own running alongside it, so the clock keeps running too.',
        ],
      },
      {
        hHi: 'नकदी-रहित और प्रतिपूर्ति — दोनों के लिए तैयारी',
        hEn: 'Cashless and reimbursement — preparing for both',
        pHi: [
          'नकदी-रहित सुविधा तभी काम करती है जब अस्पताल बीमा कंपनी के नेटवर्क में हो। आपात स्थिति में आप हमेशा अस्पताल नहीं चुन सकते, इसलिए दोनों रास्तों के लिए तैयार रहना ज़रूरी है।',
          'नकदी-रहित के लिए दो चीज़ें साथ रखिए: पॉलिसी नंबर और बीमा कंपनी का हेल्पलाइन नंबर, फ़ोन में भी और घर पर काग़ज़ पर भी। भर्ती के समय यही सबसे पहले माँगा जाता है।',
          'प्रतिपूर्ति के लिए काग़ज़ात का अनुशासन चाहिए। हर बिल मूल रूप में, डिस्चार्ज सारांश, सभी जाँच रिपोर्ट, और डॉक्टर का पर्चा — इनमें से कोई एक भी छूटने पर दावा अटक जाता है।',
          'एक व्यावहारिक आदत यह है कि अस्पताल में रहते हुए ही हर काग़ज़ की फ़ोटो ले ली जाए। डिस्चार्ज के बाद मूल काग़ज़ जमा करने पड़ते हैं, और तब आपके पास अपनी प्रति होना बहुत काम आता है।',
        ],
        pEn: [
          'Cashless treatment works only when the hospital is inside the insurer\'s network. In an emergency you cannot always choose the hospital, so being ready for both routes matters.',
          'For cashless, keep two things together: the policy number and the insurer\'s helpline number, both on the phone and on paper at home. Those are the first things asked for at admission.',
          'For reimbursement, what is needed is discipline about paperwork. Every bill in original, the discharge summary, all investigation reports, and the doctor\'s prescription — a claim stalls if any one of them is missing.',
          'A practical habit is to photograph every document while still in the hospital. Originals have to be submitted after discharge, and having your own copy at that point turns out to be very useful.',
        ],
      },
      {
        hHi: 'हर साल नवीनीकरण के समय क्या देखें',
        hEn: 'What to check at renewal each year',
        pHi: [
          'स्वास्थ्य बीमा एक बार का निर्णय नहीं है; उसका सबसे महत्वपूर्ण हिस्सा हर साल का नवीनीकरण है, और वहीं सबसे बड़ी ग़लती भी होती है — तारीख़ चूक जाना।',
          'नवीनीकरण चूकने का परिणाम केवल कुछ दिनों का अंतराल नहीं है। कई मामलों में पूरी प्रतीक्षा अवधि दोबारा शुरू हो सकती है, यानी वर्षों की निरंतरता एक भूली हुई तारीख़ से समाप्त हो जाती है।',
          'दूसरा काम राशि की समीक्षा है। चिकित्सा ख़र्च सामान्य मुद्रास्फीति से तेज़ी से बढ़ते हैं, इसलिए जो राशि पाँच साल पहले पर्याप्त थी वह आज नहीं है। हर कुछ वर्षों में कवर बढ़ाना इस योजना का हिस्सा होना चाहिए।',
          'तीसरा, संचित बोनस देखिए। कई पॉलिसियों में दावा-मुक्त वर्ष के बाद कवर अपने आप बढ़ता है, और यह बढ़ोतरी बिना अतिरिक्त प्रीमियम के मिलती है — इसे जानना और इसका हिसाब रखना उपयोगी है।',
        ],
        pEn: [
          'Health insurance is not a one-time decision; its most important part is the renewal each year, and that is also where the biggest mistake happens — missing the date.',
          'Missing a renewal does not merely create a gap of a few days. In many cases the whole waiting period can restart, meaning years of continuity end because of one forgotten date.',
          'The second task is reviewing the sum insured. Medical costs rise faster than general inflation, so an amount that was adequate five years ago is not adequate now. Raising cover every few years should be part of the plan.',
          'Third, look at the accumulated bonus. Many policies increase the cover automatically after a claim-free year, and that increase comes without extra premium — it is worth knowing about and keeping track of.',
        ],
      },
      {
        hHi: 'पहले से मौजूद बीमारी छिपाने का परिणाम',
        hEn: 'What happens when a pre-existing condition is hidden',
        pHi: [
          'यह सबसे महँगी ग़लती है जो कोई स्वास्थ्य बीमा में कर सकता है, और यह प्रायः डर से की जाती है, बेईमानी से नहीं — लोगों को लगता है कि बताने पर पॉलिसी नहीं मिलेगी।',
          'वास्तविकता इसके उलट है। अधिकांश स्थितियों में पॉलिसी मिल जाती है; कभी प्रीमियम थोड़ा अधिक होता है, कभी उस विशेष स्थिति के लिए प्रतीक्षा अवधि लंबी होती है। यह असुविधा है, अस्वीकृति नहीं।',
          'जबकि छिपाने का परिणाम यह होता है कि जिस दिन दावा आता है, उसी दिन पूरी पॉलिसी रद्द हो सकती है और दावा अस्वीकार हो सकता है। वर्षों का प्रीमियम भी गया और सुरक्षा भी।',
          'इसलिए प्रस्ताव-पत्र भरते समय हर स्थिति लिख देना ही एकमात्र सुरक्षित रास्ता है — और यदि कोई एजेंट कहे कि "यह लिखने की ज़रूरत नहीं", तो वही वाक्य उस एजेंट को बदल देने का पर्याप्त कारण है।',
        ],
        pEn: [
          'This is the most expensive mistake available in health insurance, and it is usually made out of fear rather than dishonesty — people believe that disclosing will mean being refused.',
          'The reality runs the other way. In most situations a policy is still issued; sometimes the premium is a little higher, sometimes the waiting period for that particular condition is longer. That is inconvenience, not rejection.',
          'Whereas the consequence of hiding it is that on the day a claim arrives, the entire policy can be cancelled and the claim declined. Years of premium are lost and so is the protection.',
          'So writing down every condition on the proposal form is the only safe route — and if an agent says "there is no need to mention that", the sentence itself is sufficient reason to change agents.',
        ],
      },
    ],
  },

  {
    slug: 'old-vs-new-tax-regime',
    sections: [
      {
        hHi: 'चुनाव कब और कितनी बार किया जा सकता है',
        hEn: 'When the choice can be made, and how often',
        pHi: [
          'तुलना का गणित समझ लेने के बाद अगला व्यावहारिक प्रश्न यह है कि यह चुनाव कब करना होता है और क्या उसे बदला जा सकता है।',
          'वेतनभोगी व्यक्ति के लिए यह चुनाव आमतौर पर वर्ष की शुरुआत में नियोक्ता को बताना होता है, ताकि TDS सही कटे। पर यह घोषणा अंतिम नहीं होती — रिटर्न भरते समय स्थिति दोबारा चुनी जा सकती है।',
          'इसका व्यावहारिक अर्थ यह है कि यदि वर्ष के बीच आपकी परिस्थिति बदल जाए — नया गृह ऋण, नया बीमा, या कोई बड़ा निवेश — तो रिटर्न के समय आप वह विकल्प चुन सकते हैं जो अंततः बेहतर बैठता है।',
          'व्यवसाय या पेशे से आय वाले लोगों के लिए नियम अलग और अधिक कड़े हैं, और वहाँ बार-बार बदलने की स्वतंत्रता सीमित होती है। यह वह बिंदु है जहाँ किसी कर सलाहकार से पूछ लेना सबसे अधिक उपयोगी होता है।',
        ],
        pEn: [
          'Once the comparison arithmetic is understood, the next practical question is when this choice has to be made and whether it can be changed.',
          'For a salaried person the choice is usually declared to the employer at the start of the year so that TDS is deducted correctly. But that declaration is not final — the position can be chosen again while filing the return.',
          'The practical effect is that if circumstances change mid-year — a new home loan, new insurance, or a large investment — you can pick whichever option finally works out better at the time of filing.',
          'For people with business or professional income the rules are different and considerably tighter, and the freedom to switch back and forth is limited. This is the point at which asking a tax adviser is most useful.',
        ],
      },
      {
        hHi: 'वे कटौतियाँ जिन्हें लोग गिनना भूल जाते हैं',
        hEn: 'The deductions people forget to count',
        pHi: [
          'तुलना करते समय सबसे आम ग़लती यह है कि केवल बड़ी और परिचित कटौतियाँ गिनी जाती हैं, और छोटी छूट जाती हैं। मिलकर वे छोटी कटौतियाँ नतीजा पलट सकती हैं।',
          'सबसे अधिक भूली जाने वाली श्रेणी वह है जो अपने आप हो रही होती है — भविष्य निधि में नियोक्ता के माध्यम से जाने वाला योगदान, बच्चों की स्कूल फ़ीस का ट्यूशन हिस्सा, और गृह ऋण की मूल राशि की अदायगी।',
          'दूसरी भूली जाने वाली श्रेणी स्वास्थ्य से जुड़ी है — अपने और माता-पिता के स्वास्थ्य बीमा का प्रीमियम, और कुछ स्थितियों में निवारक जाँच का ख़र्च।',
          'तीसरी वह है जो केवल कुछ लोगों पर लागू होती है — शिक्षा ऋण का ब्याज, दान, और किराए से जुड़ी छूट। ये सार्वभौमिक नहीं हैं, पर जिन पर लागू होती हैं उनके लिए बड़ी होती हैं।',
          'इसलिए तुलना से पहले एक पूरी सूची बना लीजिए। जो कटौतियाँ सूची में नहीं आतीं, वे गणना में भी नहीं आतीं — और तब निष्कर्ष ग़लत निकलता है।',
        ],
        pEn: [
          'The most common error while comparing is counting only the large, familiar deductions and letting the small ones slip. Taken together, those small ones can reverse the result.',
          'The most frequently forgotten category is the one happening automatically — the provident fund contribution routed through the employer, the tuition component of children\'s school fees, and the principal repayment on a home loan.',
          'The second forgotten category relates to health — premiums for your own and your parents\' health insurance, and in some situations the cost of preventive check-ups.',
          'The third applies only to some people — interest on an education loan, donations, and rent-related relief. These are not universal, but for those they do apply to they are substantial.',
          'So build a complete list before comparing. Deductions that do not make it onto the list do not make it into the calculation either — and then the conclusion comes out wrong.',
        ],
      },
      {
        hHi: 'तीस मिनट की तुलना को दस मिनट कैसे बनाएँ',
        hEn: 'Turning the thirty-minute comparison into ten',
        pHi: [
          'यदि आप यह तुलना हर साल करते हैं, तो एक बार एक सरल ढाँचा बना लेने से हर बार का काम बहुत छोटा हो जाता है।',
          'एक स्प्रेडशीट में तीन स्तंभ बनाइए: मद, पुरानी व्यवस्था में मान्य राशि, नई व्यवस्था में मान्य राशि। पंक्तियों में अपनी सारी आय और सारी कटौतियाँ लिख दीजिए, एक बार।',
          'हर वर्ष केवल संख्याएँ बदलनी होती हैं, ढाँचा नहीं। और चूँकि ढाँचा आपका अपना है, इसलिए उसमें वही मदें होती हैं जो आप पर सचमुच लागू होती हैं — किसी सामान्य कैलकुलेटर की तुलना में यह कहीं अधिक भरोसेमंद है।',
          'एक और उपयोगी अभ्यास यह है कि पिछले वर्ष की गणना सुरक्षित रखी जाए। दो वर्षों की तुलना अगल-बग़ल देखने पर यह भी दिख जाता है कि आपकी स्थिति किस दिशा में जा रही है।',
        ],
        pEn: [
          'If you do this comparison every year, building a simple structure once makes the work far smaller on every subsequent occasion.',
          'Set up three columns in a spreadsheet: the item, the amount allowed under the old regime, and the amount allowed under the new one. Write all your income and all your deductions into the rows, once.',
          'Each year only the numbers change, not the structure. And because the structure is your own, it contains exactly the items that actually apply to you — which makes it considerably more reliable than a generic calculator.',
          'Another useful habit is to keep last year\'s calculation. Seeing two years side by side also shows which direction your own position is moving in.',
        ],
      },
      {
        hHi: 'गृह ऋण वाले लोगों के लिए विशेष स्थिति',
        hEn: 'The particular position of people with a home loan',
        pHi: [
          'गृह ऋण इस तुलना को सबसे अधिक हिलाने वाला अकेला कारक है, इसलिए यह अलग विचार का हक़दार है।',
          'ऋण के शुरुआती वर्षों में EMI का बड़ा हिस्सा ब्याज होता है, और यही वह हिस्सा है जिस पर पुरानी व्यवस्था में सबसे बड़ी राहत मिलती है। इसलिए ऋण के पहले वर्षों में तुलना अक्सर एक ओर झुकती है।',
          'जैसे-जैसे वर्ष बीतते हैं, ब्याज का हिस्सा घटता है और मूल का बढ़ता है। इसका अर्थ यह है कि वही व्यक्ति जिसके लिए आज एक व्यवस्था बेहतर है, कुछ वर्षों बाद दूसरी व्यवस्था में बेहतर हो सकता है।',
          'इसीलिए यह तुलना एक बार करके भूल जाने वाली चीज़ नहीं है। गृह ऋण वाले व्यक्ति के लिए हर वर्ष दोबारा देखना सबसे अधिक मायने रखता है, क्योंकि उसकी स्थिति हर वर्ष अपने आप बदल रही होती है।',
        ],
        pEn: [
          'A home loan is the single factor that moves this comparison the most, which is why it deserves separate consideration.',
          'In the early years of a loan the larger part of each EMI is interest, and interest is where the biggest relief sits under the old regime. So during those first years the comparison often leans one way.',
          'As the years pass the interest component shrinks and the principal component grows. This means the same person for whom one regime is better today may be better off under the other a few years from now.',
          'That is why this is not a comparison to do once and forget. For somebody with a home loan, redoing it every year matters most, because their position is changing on its own each year.',
        ],
      },
      {
        hHi: 'कर बचाने के लिए ग़लत निवेश करना',
        hEn: 'Making the wrong investment in order to save tax',
        pHi: [
          'यह चेतावनी लेख में पहले भी है, पर इसे दोहराना ज़रूरी है क्योंकि यह हर वर्ष मार्च में सबसे अधिक होने वाली ग़लती है।',
          'जब कर बचाने की समय-सीमा पास आती है, तो लोग जल्दबाज़ी में ऐसे उत्पाद ख़रीद लेते हैं जो कर तो बचा देते हैं पर बाक़ी सभी दृष्टियों से अनुपयुक्त होते हैं — लंबी अवधि तक फँसा देने वाले, कम प्रतिफल वाले, या ऐसे जिनमें बीमा और निवेश मिला दिया गया हो।',
          'सही क्रम यह है: पहले तय कीजिए कि आपके लक्ष्यों के लिए कौन-सा साधन उपयुक्त है, फिर देखिए कि उनमें से कौन-सा कर लाभ भी देता है। कर लाभ चुनाव का कारण नहीं, उसका बोनस होना चाहिए।',
          'और यदि किसी वर्ष कोई उपयुक्त विकल्प न मिले, तो कर देना बुरा नहीं है। एक ग़लत उत्पाद पंद्रह साल तक साथ रहता है; एक वर्ष का अतिरिक्त कर एक बार में समाप्त हो जाता है।',
        ],
        pEn: [
          'This warning already appears earlier in the article, and it deserves repeating because it is the mistake made most often every March.',
          'As the deadline for tax-saving approaches, people hurry into products that do save tax but are unsuitable in every other respect — locking money up for long periods, returning little, or mixing insurance and investment into one thing.',
          'The correct order is: first decide which instrument suits your goals, then see which of those also carries a tax benefit. The tax benefit should be a bonus on the choice, not the reason for it.',
          'And if no suitable option presents itself in a particular year, paying the tax is not a disaster. A wrong product stays with you for fifteen years; one year of extra tax is over in a single payment.',
        ],
      },
      {
        hHi: 'दोनों व्यवस्थाओं में जो एक जैसा रहता है',
        hEn: 'What stays the same under both regimes',
        pHi: [
          'इस बहस में इतना ध्यान अंतरों पर जाता है कि समानताएँ छूट जाती हैं, जबकि व्यावहारिक जीवन में वही समानताएँ अधिक काम आती हैं।',
          'दोनों व्यवस्थाओं में रिटर्न भरना उतना ही ज़रूरी है, समय-सीमा वही है, और देर से भरने पर परिणाम वही हैं। व्यवस्था का चुनाव इस दायित्व को नहीं बदलता।',
          'दोनों में ही आपका फ़ॉर्म 26AS और वार्षिक सूचना विवरण वही जानकारी दिखाते हैं, और दोनों में ही उस जानकारी का आपके रिटर्न से मेल खाना ज़रूरी है।',
          'और सबसे महत्वपूर्ण: दोनों में ही रिकॉर्ड रखना उतना ही आवश्यक है। किस व्यवस्था में आप हैं, इससे यह नहीं बदलता कि प्रमाण माँगे जाने पर आपके पास होने चाहिए।',
        ],
        pEn: [
          'So much attention goes to the differences in this debate that the similarities get missed, even though in daily practice the similarities matter more.',
          'Filing a return is equally necessary under both, the deadline is the same, and the consequences of filing late are the same. Choosing a regime does not change that obligation at all.',
          'Under both, your Form 26AS and Annual Information Statement show the same information, and under both that information has to match what your return says.',
          'And most importantly: keeping records is equally necessary under either. Which regime you are in does not change the fact that if proof is asked for, you need to have it.',
        ],
      },
    ],
  },

  {
    slug: 'credit-score-improve-guide',
    sections: [
      {
        hHi: 'स्कोर बनने में कितना समय लगता है',
        hEn: 'How long the score actually takes to build',
        pHi: [
          'सबसे आम अपेक्षा यह होती है कि सुधार कुछ हफ़्तों में दिखेगा, और यही अपेक्षा सबसे अधिक निराशा पैदा करती है। स्कोर एक धीमी व्यवस्था है, और उसका धीमापन जानबूझकर है।',
          'सामान्य तौर पर किसी भी बदलाव का असर दिखने में एक से तीन महीने लगते हैं, क्योंकि ऋणदाता अपनी रिपोर्ट मासिक भेजते हैं। इसलिए आज किया गया भुगतान अगले महीने से पहले रिपोर्ट में नहीं आएगा।',
          'बड़े सुधार — जैसे बहुत कम स्कोर से 750 के ऊपर जाना — में छह महीने से दो साल तक लग सकते हैं। यहाँ कोई शॉर्टकट नहीं है, और जो कोई शॉर्टकट बेच रहा है वह कुछ और बेच रहा है।',
          'इसका उपयोगी पक्ष यह है कि धीमापन दोनों दिशाओं में काम करता है। जिस तरह सुधार धीरे आता है, उसी तरह एक चूक से पूरा स्कोर तुरंत नष्ट नहीं होता — यदि उसके बाद व्यवहार सुधर जाए।',
        ],
        pEn: [
          'The most common expectation is that improvement will show within a few weeks, and that expectation causes most of the disappointment. The score is a slow system, and its slowness is deliberate.',
          'In general any change takes one to three months to appear, because lenders send their reports monthly. So a payment made today will not show in the report before next month at the earliest.',
          'Large improvements — moving from a very low score to above 750 — can take anywhere from six months to two years. There is no shortcut here, and anybody selling one is selling something else.',
          'The useful side of this is that the slowness works in both directions. Just as improvement arrives gradually, one slip does not destroy the whole score instantly, provided behaviour improves afterwards.',
        ],
      },
      {
        hHi: 'क्रेडिट उपयोग अनुपात का सही प्रबंधन',
        hEn: 'Managing the credit utilisation ratio properly',
        pHi: [
          'यह स्कोर का दूसरा सबसे बड़ा घटक है और शायद वह जिस पर सबसे तेज़ी से काम किया जा सकता है, क्योंकि इसमें पुराना इतिहास बदलने की ज़रूरत नहीं।',
          'अनुपात का अर्थ है: आपने अपनी उपलब्ध सीमा का कितना हिस्सा इस्तेमाल किया। यदि सीमा एक लाख है और बकाया साठ हज़ार है, तो उपयोग साठ प्रतिशत है — और यह ऊँचा माना जाता है, भले ही आप पूरा भुगतान समय पर करते हों।',
          'यहाँ एक विवरण महत्वपूर्ण है जो अधिकांश लोग नहीं जानते: रिपोर्ट में वह राशि जाती है जो विवरण-तिथि पर बकाया थी, न कि वह जो आपने अंततः चुकाई। इसलिए यदि आप हर महीने पूरा भुगतान करते हैं पर विवरण-तिथि पर बकाया ऊँचा रहता है, तो रिपोर्ट में ऊँचा उपयोग ही जाएगा।',
          'इसका सरल समाधान यह है कि विवरण-तिथि से कुछ दिन पहले आंशिक भुगतान कर दिया जाए। यह छोटा-सा समय-प्रबंधन बिना कुछ और बदले उपयोग अनुपात को नीचे ले आता है।',
          'दूसरा समाधान सीमा बढ़वाना है, बशर्ते ख़र्च न बढ़े। वही ख़र्च बड़ी सीमा पर कम प्रतिशत बनता है — पर यह तभी काम करता है जब बढ़ी हुई सीमा एक प्रलोभन न बन जाए।',
        ],
        pEn: [
          'This is the second largest component of the score and probably the one that can be improved fastest, because it does not require changing any past history.',
          'The ratio means how much of your available limit you have used. If the limit is one lakh and the outstanding is sixty thousand, utilisation is sixty percent — and that counts as high even if you pay in full and on time.',
          'One detail matters here that most people do not know: what goes into the report is the amount outstanding on the statement date, not what you eventually paid. So if you clear the bill in full every month but the balance is high on the statement date, the report still shows high utilisation.',
          'The simple fix is to make a part payment a few days before the statement date. That small piece of timing brings the ratio down without changing anything else about your spending.',
          'The second fix is asking for a higher limit, provided spending does not rise with it. The same spend becomes a smaller percentage of a larger limit — but this only works if the higher limit does not turn into a temptation.',
        ],
      },
      {
        hHi: 'रिपोर्ट में ग़लती मिलने पर क्या करें',
        hEn: 'What to do when the report contains an error',
        pHi: [
          'क्रेडिट रिपोर्ट में ग़लतियाँ असामान्य नहीं हैं, और वे प्रायः तभी पकड़ में आती हैं जब कोई ऋण अस्वीकार हो जाता है। इसलिए साल में एक बार अपनी रिपोर्ट देख लेना सबसे सस्ता निवारक उपाय है।',
          'सबसे आम ग़लतियाँ चार प्रकार की होती हैं: कोई ऐसा खाता जो आपका है ही नहीं, बंद किया हुआ खाता जो अब भी खुला दिख रहा है, चुकाया हुआ ऋण जो बकाया दिख रहा है, और व्यक्तिगत विवरण की गड़बड़ी जिससे किसी और का रिकॉर्ड आपके साथ जुड़ गया हो।',
          'सुधार की प्रक्रिया सीधी है। संबंधित क्रेडिट सूचना कंपनी के विवाद-पोर्टल पर आपत्ति दर्ज कीजिए, प्रमाण संलग्न कीजिए, और शिकायत संख्या सुरक्षित रखिए। कंपनी को एक निर्धारित अवधि में जाँच करनी होती है।',
          'यदि ग़लती किसी बैंक की रिपोर्टिंग से आई है, तो समानांतर रूप से उस बैंक को भी लिखिए। दोनों ओर से एक साथ चलने पर सुधार तेज़ होता है, और लिखित रिकॉर्ड बाद में काम आता है।',
        ],
        pEn: [
          'Errors in a credit report are not unusual, and they are usually discovered only when a loan is refused. Checking your own report once a year is therefore the cheapest preventive step available.',
          'The four most common errors are: an account that is not yours at all, a closed account still showing as open, a repaid loan still showing as outstanding, and a mix-up in personal details that has attached somebody else\'s record to yours.',
          'The correction process is straightforward. Raise a dispute on the credit information company\'s portal, attach evidence, and keep the complaint number. The company has to investigate within a set period.',
          'If the error originates in a bank\'s reporting, write to that bank in parallel. Working both sides at once speeds things up, and the written record is useful afterwards.',
        ],
      },
      {
        hHi: 'पुराने कार्ड बंद करने का उल्टा असर',
        hEn: 'Why closing old cards can work against you',
        pHi: [
          'सफ़ाई की भावना से लोग पुराने और अनुपयोगी क्रेडिट कार्ड बंद कर देते हैं, और यह सहज लगने वाला क़दम अक्सर स्कोर को नुक़सान पहुँचाता है।',
          'दो कारण हैं। पहला, आपके खातों की औसत आयु स्कोर का एक घटक है, और सबसे पुराना कार्ड बंद करने से वह औसत गिर जाती है। दूसरा, उस कार्ड की सीमा भी हट जाती है, जिससे कुल उपलब्ध सीमा घटती है और उपयोग अनुपात बढ़ जाता है।',
          'यानी एक ही क़दम से दो घटक बिगड़ते हैं। यदि कार्ड पर कोई वार्षिक शुल्क नहीं है, तो उसे खुला रखना और साल में एक-दो छोटे लेन-देन कर देना बेहतर है, ताकि वह निष्क्रिय होकर बंद न हो जाए।',
          'यदि वार्षिक शुल्क लग रहा है और कार्ड बेकार है, तो बंद करना ठीक है — पर उसे तब कीजिए जब आप निकट भविष्य में कोई ऋण नहीं लेने वाले हों, ताकि अस्थायी गिरावट किसी आवेदन के समय न पड़े।',
        ],
        pEn: [
          'Out of a sense of tidiness people close old and unused credit cards, and that intuitive step frequently damages the score instead of helping it.',
          'There are two reasons. First, the average age of your accounts is a component of the score, and closing the oldest card pulls that average down. Second, the limit on that card disappears too, which reduces the total available limit and pushes utilisation up.',
          'So a single action worsens two components at once. If the card carries no annual fee, keeping it open and putting one or two small transactions through it a year is better, so that it is not closed for inactivity.',
          'If an annual fee is being charged and the card is genuinely useless, closing it is fine — but do it when you are not about to apply for a loan, so the temporary dip does not land on an application.',
        ],
      },
      {
        hHi: 'सह-आवेदक और गारंटर बनने का जोखिम',
        hEn: 'The risk of being a co-applicant or guarantor',
        pHi: [
          'यह वह श्रेणी है जिसमें लोग अपने स्कोर को बिना कुछ उधार लिए नुक़सान पहुँचा बैठते हैं, और प्रायः किसी की मदद करने की नीयत से।',
          'जब आप किसी ऋण में सह-आवेदक या गारंटर बनते हैं, तो वह ऋण आपकी क्रेडिट रिपोर्ट में भी दर्ज होता है। यदि मुख्य उधारकर्ता चूकता है, तो वह चूक आपके रिकॉर्ड में भी जाती है।',
          'इसका एक दूसरा असर भी है जो कम दिखता है: वह ऋण आपके कुल दायित्व में गिना जाता है, इसलिए आपकी अपनी ऋण-क्षमता उतनी ही घट जाती है। कई लोगों को यह तब पता चलता है जब उनका अपना गृह ऋण अस्वीकार हो जाता है।',
          'इसका अर्थ यह नहीं कि किसी की मदद न कीजिए। इसका अर्थ केवल यह है कि यह निर्णय उतनी ही गंभीरता से लीजिए जितनी गंभीरता से आप अपने लिए वही ऋण लेते — क्योंकि रिकॉर्ड की दृष्टि से वह लगभग वही है।',
        ],
        pEn: [
          'This is the category in which people damage their own score without borrowing anything themselves, and usually while intending to help somebody.',
          'When you become a co-applicant or guarantor on a loan, that loan appears in your credit report as well. If the main borrower defaults, the default is recorded against you too.',
          'There is a second, less visible effect: the loan counts towards your total obligations, so your own borrowing capacity falls by that much. Many people discover this only when their own home loan application is refused.',
          'None of this means you should not help somebody. It only means treating the decision as seriously as you would treat taking that same loan for yourself — because in record terms it is very nearly the same thing.',
        ],
      },
      {
        hHi: 'शून्य इतिहास वाले व्यक्ति के लिए पहला क़दम',
        hEn: 'The first step for somebody with no history at all',
        pHi: [
          'एक स्थिति ऐसी है जिसकी चर्चा कम होती है: वह व्यक्ति जिसका स्कोर ख़राब नहीं बल्कि है ही नहीं, क्योंकि उसने कभी कुछ उधार नहीं लिया।',
          'यह विरोधाभासी लगता है पर ऋणदाता की दृष्टि से समझ में आता है — उसके पास आपके व्यवहार का कोई प्रमाण नहीं है, और प्रमाण न होना अच्छे प्रमाण जैसा नहीं होता।',
          'शुरुआत के दो सामान्य रास्ते हैं। पहला, किसी सावधि जमा के विरुद्ध जारी किया गया सुरक्षित क्रेडिट कार्ड, जिसमें ऋणदाता का जोखिम कम होता है और इसलिए स्वीकृति आसान होती है। दूसरा, कोई छोटा उपभोक्ता ऋण जिसे नियमित रूप से चुकाया जाए।',
          'दोनों में असली काम वही है जो हमेशा होता है: हर किश्त समय पर, हर बार। छह से बारह महीने का साफ़ रिकॉर्ड बन जाने पर स्कोर अपने आप अस्तित्व में आ जाता है और आगे के दरवाज़े खुलने लगते हैं।',
        ],
        pEn: [
          'One situation gets less discussion than it deserves: the person whose score is not bad but simply absent, because they have never borrowed anything.',
          'It sounds contradictory and it makes sense from a lender\'s side — they have no evidence of your behaviour, and no evidence is not the same as good evidence.',
          'There are two usual ways in. The first is a secured credit card issued against a fixed deposit, where the lender\'s risk is low and approval is therefore easy. The second is a small consumer loan repaid regularly.',
          'In both cases the real work is the same as always: every instalment on time, every time. Once six to twelve months of clean record exists, the score comes into being on its own and the further doors begin to open.',
        ],
      },
    ],
  },

  {
    slug: 'gullak-se-demat-tak-teen-padav',
    sections: [
      {
        hHi: 'किशोर की पहली कमाई',
        hEn: 'A teenager\'s first earnings',
        pHi: [
          'डिजिटल पैसे की समझ में सबसे बड़ा मोड़ तब आता है जब पैसा माता-पिता से नहीं, बाहर से आने लगता है। ट्यूशन, किसी छोटे काम, या किसी ऑनलाइन काम से मिली पहली कमाई एक अलग तरह का पाठ होती है।',
          'यहाँ पहली बात यह समझाने की है कि कमाई और ख़र्च के बीच का अंतर ही असली आय है। जो किशोर पाँच हज़ार कमाकर पाँच हज़ार ख़र्च कर देता है, उसने कमाया कुछ नहीं — यह वाक्य इस उम्र में सुनना बाद के बीस साल बचा सकता है।',
          'दूसरी बात कर की है, भले ही अभी लागू न हो। यह बता देना कि कमाई पर कर लगता है और उसका हिसाब रखना पड़ता है, बाद में उस झटके को कम कर देता है जो पहली नौकरी की पहली सैलरी स्लिप पर लगता है।',
          'तीसरी और सबसे उपयोगी बात यह है कि पहली कमाई का कुछ हिस्सा तुरंत अलग रख दिया जाए — किसी भी अनुपात में, पर हर बार। यह आदत राशि से कहीं अधिक महत्वपूर्ण है।',
        ],
        pEn: [
          'The largest turn in understanding digital money comes when money starts arriving from outside rather than from parents. First earnings from tutoring, a small job, or some online work are a different kind of lesson entirely.',
          'The first thing to explain here is that real income is the gap between earning and spending. A teenager who earns five thousand and spends five thousand has earned nothing — hearing that sentence at this age can save the next twenty years.',
          'The second is tax, even if none is payable yet. Explaining that earnings are taxed and have to be accounted for softens the shock that otherwise lands on the first salary slip of a first job.',
          'The third and most useful is setting aside part of the first earnings immediately — in any proportion at all, but every time. That habit matters far more than the amount involved.',
        ],
      },
      {
        hHi: 'किशोरों को निशाना बनाने वाली ठगी',
        hEn: 'The scams that target teenagers specifically',
        pHi: [
          'किशोर UPI और ऑनलाइन भुगतान में तकनीकी रूप से माता-पिता से अधिक सहज होते हैं, और यही सहजता एक अलग तरह का जोखिम बनाती है — वे झिझकते नहीं, इसलिए रुकते भी नहीं।',
          'उन तक पहुँचने वाली ठगी अलग शक्ल की होती है। गेम में मुफ़्त सामग्री का लालच, किसी प्रसिद्ध व्यक्ति के नाम पर बना नक़ली खाता, "आपका अकाउंट जीत गया है" जैसे संदेश, और सस्ते दाम पर कोई डिजिटल वस्तु बेचने का प्रस्ताव।',
          'इनमें सबसे आम वह है जिसमें भुगतान पहले माँगा जाता है और सामान बाद में देने का वादा होता है। किशोर अक्सर छोटी राशि होने के कारण जोखिम उठा लेते हैं, और ठग की पूरी अर्थव्यवस्था इसी छोटी राशि पर चलती है।',
          'बचाव का सबसे अच्छा तरीक़ा नियम नहीं बल्कि बातचीत है। यदि घर में यह तय हो कि किसी भी ऑनलाइन भुगतान से पहले एक बार किसी को बता देना है, तो अधिकांश ठगी उसी क्षण रुक जाती है — क्योंकि उन्हें बोलकर बताने से ही वे बेतुकी लगने लगती हैं।',
        ],
        pEn: [
          'Teenagers are technically more comfortable with UPI and online payments than their parents, and that ease creates a different kind of risk — they do not hesitate, so they do not pause either.',
          'The scams that reach them have a different shape. Free items inside a game, a fake account in a well-known person\'s name, messages saying "your account has won", and offers of some digital item at an unusually cheap price.',
          'The most common of these asks for payment first and promises delivery afterwards. Teenagers often take the risk because the amount is small, and the entire economics of that scam runs on exactly those small amounts.',
          'The best protection is a conversation rather than a rule. If the household agrees that any online payment gets mentioned to somebody first, most scams stop right there — because saying them out loud is usually enough to make them sound absurd.',
        ],
      },
      {
        hHi: 'किशोर का अपना बजट',
        hEn: 'A teenager\'s own budget',
        pHi: [
          'इस उम्र में बजट सिखाने का सबसे अच्छा तरीक़ा एक जटिल व्यवस्था नहीं बल्कि एक सरल, वास्तविक ज़िम्मेदारी है।',
          'एक कारगर तरीक़ा यह है कि महीने भर की किसी एक श्रेणी का पूरा ज़िम्मा किशोर को दे दिया जाए — मान लीजिए आने-जाने का ख़र्च, या फ़ोन का रिचार्ज, या कपड़ों का बजट। पूरी राशि एक बार दी जाए और महीने भर उसी से चलाना हो।',
          'इससे दो चीज़ें एक साथ होती हैं। पहली, योजना बनानी पड़ती है, क्योंकि पैसा महीने के बीच में ख़त्म हो सकता है। दूसरी, बचाने का लाभ सीधे उसी को मिलता है, जो प्रेरणा का सबसे मज़बूत रूप है।',
          'यहाँ माता-पिता के लिए सबसे कठिन हिस्सा हस्तक्षेप न करना है। यदि पैसा बीस तारीख़ को ख़त्म हो जाए, तो बाक़ी दस दिन कठिन होने चाहिए — यही पूरे अभ्यास का मूल्य है, और यह जितनी जल्दी सीखा जाए उतना सस्ता पड़ता है।',
        ],
        pEn: [
          'The best way to teach budgeting at this age is not an elaborate system but one simple, real responsibility.',
          'An effective method is to hand a teenager complete charge of a single category for the month — travel costs, say, or the phone recharge, or a clothing budget. The full amount is given once and has to last the month.',
          'Two things happen together. Planning becomes necessary, because the money can run out mid-month. And the benefit of saving goes directly to them, which is the strongest form of motivation there is.',
          'The hardest part here is for the parent: not intervening. If the money runs out on the twentieth, the remaining ten days should be difficult — that is the entire value of the exercise, and the earlier it is learned the cheaper it is.',
        ],
      },
      {
        hHi: 'साथियों का दबाव और दिखावे का ख़र्च',
        hEn: 'Peer pressure and spending to be seen',
        pHi: [
          'यह वह ख़र्च है जो किसी बजट में नहीं दिखता और फिर भी सबसे अधिक असर डालता है, और यह किशोरावस्था में सबसे तीव्र होता है।',
          'इस पर उपदेश काम नहीं करता, क्योंकि दबाव वास्तविक है और उसे नकारने से बातचीत ही बंद हो जाती है। जो काम करता है वह है इसे नाम देना — यह बता देना कि हाँ, यह दबाव मौजूद है, और सबको महसूस होता है।',
          'उसके बाद एक व्यावहारिक सवाल दिया जा सकता है जो जीवन भर काम आता है: "यदि कोई देखने वाला न होता, तो क्या मैं फिर भी यह ख़रीदता?" यह सवाल मना नहीं करता, केवल एक क्षण रुकवाता है — और अक्सर एक क्षण पर्याप्त होता है।',
          'तीसरी बात यह बताने की है कि दिखावे का ख़र्च वयस्कों में ख़त्म नहीं होता, केवल महँगा हो जाता है — गाड़ी, शादी, घर। इस उम्र में यह समझ लेना बाद के बड़े निर्णयों को कहीं शांत बना देता है।',
        ],
        pEn: [
          'This is the spending that appears in no budget and still does the most damage, and it is at its most intense during the teenage years.',
          'Lecturing does not work here, because the pressure is real and denying it simply ends the conversation. What works is naming it — saying plainly that yes, this pressure exists and everybody feels it.',
          'After that a practical question can be offered which keeps working for a lifetime: "if nobody were going to see it, would I still buy this?" The question forbids nothing; it only creates a pause — and a pause is very often enough.',
          'The third thing worth saying is that spending to be seen does not end in adulthood, it only gets more expensive — cars, weddings, houses. Understanding that at this age makes the larger decisions later considerably calmer.',
        ],
      },
      {
        hHi: 'कब पूरा नियंत्रण सौंप देना चाहिए',
        hEn: 'When to hand over full control',
        pHi: [
          'तीनों पड़ावों का अंतिम लक्ष्य निगरानी नहीं, स्वतंत्रता है — और यह तय करना ज़रूरी है कि वह स्वतंत्रता कब पूरी तरह सौंपी जाए।',
          'एक व्यावहारिक संकेत यह है: जब किशोर लगातार तीन-चार महीने तक अपने बजट में रह जाए, बिना याद दिलाए, तो अगला स्तर देने का समय आ गया है। नियंत्रण उम्र से नहीं, प्रदर्शन से सौंपा जाना चाहिए।',
          'सौंपने का अर्थ यह नहीं कि दरवाज़ा बंद हो जाए। एक अच्छा ढाँचा यह है: निर्णय पूरी तरह उनके, पर हर कुछ महीनों में एक बार साथ बैठकर देखना — सलाहकार की तरह, निरीक्षक की तरह नहीं।',
          'और सबसे महत्वपूर्ण: जब वे कोई ग़लत निर्णय लें, तो "मैंने कहा था" मत कहिए। जो बच्चा जानता है कि ग़लती के बाद भी बात की जा सकती है, वह अगली बार पहले पूछेगा — और यही इस पूरी प्रक्रिया का असली उद्देश्य है।',
        ],
        pEn: [
          'The goal of all three stages is not supervision but independence — and it is worth deciding when that independence is handed over completely.',
          'A practical signal: when a teenager stays inside their budget for three or four consecutive months without being reminded, it is time for the next level. Control should be handed over on the basis of performance rather than age.',
          'Handing over does not mean closing the door. A good arrangement is that the decisions are entirely theirs, with a joint review every few months — as an adviser rather than an inspector.',
          'And most importantly: when they make a bad decision, do not say "I told you so". A child who knows that a mistake can still be talked about will ask first next time — and that is the real purpose of the whole process.',
        ],
      },
      {
        hHi: 'तीनों पड़ावों में जो एक जैसा रहता है',
        hEn: 'What stays constant across all three stages',
        pHi: [
          'गुल्लक से UPI तक जो कुछ बदलता है वह माध्यम है; जो नहीं बदलता वह तीन बुनियादी विचार हैं, और उन्हें हर पड़ाव पर दोहराया जाना चाहिए।',
          'पहला: पैसा सीमित है, और हर हाँ किसी और चीज़ के लिए ना है। यह विचार पाँच साल की उम्र में गुल्लक से समझ आता है और पैंतीस की उम्र में गृह ऋण के समय भी वही रहता है।',
          'दूसरा: इंतज़ार का मूल्य होता है। जो आज छोड़ा गया वह कल बड़ा होकर लौटता है — पहले टॉफ़ी के रूप में, बाद में चक्रवृद्धि के रूप में, पर तर्क वही है।',
          'तीसरा: पैसा एक साधन है, माप नहीं। जो बच्चा यह मानकर बड़ा होता है कि उसकी क़ीमत उसके पास मौजूद चीज़ों से तय होती है, वह जीवन भर एक ऐसी दौड़ में रहता है जिसका कोई अंत नहीं।',
          'यदि ये तीन विचार पहुँच जाएँ, तो बाक़ी सब — खाता, ऐप, निवेश — केवल विवरण हैं, और वे अपने समय पर अपने आप सीख लिए जाते हैं।',
        ],
        pEn: [
          'What changes from piggy bank to UPI is the medium; what does not change are three basic ideas, and they deserve repeating at every stage.',
          'First: money is finite, and every yes is a no to something else. That idea is learned at five from a piggy bank and it is the same idea at thirty-five in front of a home loan.',
          'Second: waiting has value. What is given up today comes back larger tomorrow — first as a sweet, later as compounding, but the logic is identical.',
          'Third: money is a tool, not a measure. A child who grows up believing their worth is set by what they own spends a lifetime in a race that has no finishing line.',
          'If those three ideas land, everything else — the account, the app, the investing — is only detail, and detail gets picked up on its own at the right time.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Batch three.
  // ---------------------------------------------------------------------

  {
    slug: 'emergency-fund-kaise-banaye',
    sections: [
      {
        hHi: 'जब बचाने को कुछ बचता ही नहीं',
        hEn: 'When there is nothing left over to save',
        pHi: [
          'सबसे ईमानदार आपत्ति यही है, और अधिकांश लेख इसे टाल जाते हैं। यदि महीने के अंत में कुछ बचता ही नहीं, तो कोष कैसे बने?',
          'पहला उत्तर क्रम बदलने का है। जो लोग "बचने के बाद बचाते हैं" वे कभी नहीं बचा पाते, क्योंकि ख़र्च हमेशा उपलब्ध राशि तक फैल जाता है। जो लोग वेतन आते ही एक छोटी राशि हटा देते हैं, वे बाक़ी में गुज़ारा कर लेते हैं — यही एकमात्र अंतर है।',
          'दूसरा उत्तर राशि छोटी करने का है। पाँच सौ रुपये महीने भी काम करते हैं। यह सुनने में बेकार लगता है, पर उद्देश्य पहले साल में कोष पूरा करना नहीं, यह साबित करना है कि यह संभव है।',
          'तीसरा उत्तर सबसे कठिन है: एक श्रेणी चुनकर उसे तीन महीने के लिए घटाना। कोई एक — बाहर का खाना, कोई सदस्यता, कोई आदत। तीन महीने बाद वह राशि अपने आप उपलब्ध लगने लगती है, और तब उसे स्थायी कर दीजिए।',
        ],
        pEn: [
          'This is the most honest objection to the whole idea, and most articles skirt around it. If nothing is left at the end of the month, how is a fund supposed to appear?',
          'The first answer is to reverse the order. People who save what is left never manage to save, because spending expands to fill whatever is available. People who move a small amount out the moment salary arrives manage on the rest — that is the entire difference.',
          'The second answer is to make the amount small. Five hundred rupees a month works. It sounds pointless, but the purpose in the first year is not to complete the fund; it is to prove to yourself that this is possible at all.',
          'The third answer is the hardest: pick one category and cut it for three months. Just one — eating out, a subscription, a habit. After three months that amount starts to feel available on its own, and at that point make it permanent.',
        ],
      },
      {
        hHi: 'अनपेक्षित पैसे का सही उपयोग',
        hEn: 'What to do with money you did not expect',
        pHi: [
          'कोष बनाने का सबसे तेज़ रास्ता मासिक बचत नहीं, बल्कि वह पैसा है जो अनपेक्षित रूप से आता है — बोनस, कर वापसी, कोई पुराना बकाया, कोई उपहार।',
          'ऐसा पैसा एक ख़ास मनोवैज्ञानिक श्रेणी में आता है। चूँकि वह बजट में था ही नहीं, इसलिए उसे ख़र्च करने पर कोई कमी महसूस नहीं होती — और इसी कारण वह लगभग हमेशा ख़र्च हो जाता है।',
          'एक सरल नियम इसे बदल देता है: कोई भी अनपेक्षित राशि आते ही उसका आधा सीधे कोष में। आधा इसलिए, क्योंकि पूरा रखने का नियम कोई निभा नहीं पाता, और आधा निभाया जा सकता है।',
          'इस एक नियम से कोष का वह हिस्सा बनता है जो मासिक बचत से बनने में वर्षों लेता। और इसका सबसे अच्छा पक्ष यह है कि इसमें जीवन-स्तर में कोई कटौती नहीं करनी पड़ती — बचा हुआ आधा अब भी आपका है।',
        ],
        pEn: [
          'The fastest route to building the fund is not monthly saving but money that arrives unexpectedly — a bonus, a tax refund, an old due finally paid, a gift.',
          'Money like this falls into a particular psychological category. Because it was never in the budget, spending it produces no feeling of loss — and that is precisely why it almost always gets spent.',
          'One simple rule changes this: half of any unexpected amount goes straight into the fund the day it arrives. Half rather than all, because nobody keeps a rule that demands all of it, and a rule about half can actually be kept.',
          'That single rule builds the portion of the fund that monthly saving would take years to reach. And the best part is that it requires no cut in your standard of living at all — the other half is still yours.',
        ],
      },
      {
        hHi: 'कोष को दो हिस्सों में बाँटना',
        hEn: 'Splitting the fund into two parts',
        pHi: [
          'एक व्यावहारिक ढाँचा जो कम चर्चा में आता है वह यह है कि पूरा कोष एक ही जगह न रखा जाए, बल्कि दो परतों में बाँटा जाए।',
          'पहली परत तत्काल पहुँच की है — लगभग एक महीने का ख़र्च, बचत खाते में, जिसे किसी भी क्षण निकाला जा सके। यह वह हिस्सा है जो आधी रात को काम आता है।',
          'दूसरी परत बाक़ी राशि है, जो ऐसी जगह रखी जा सकती है जहाँ से एक-दो दिन में पैसा आ जाए और जो थोड़ा बेहतर ब्याज दे। यह हिस्सा तत्काल नहीं चाहिए, क्योंकि पहली परत उतना समय ख़रीद देती है।',
          'इस बँटवारे के दो लाभ हैं। पहला, पूरे कोष पर बचत खाते जैसा कम ब्याज नहीं मिलता। दूसरा, और शायद अधिक महत्वपूर्ण, दूसरी परत तक पहुँचने में जो एक-दो दिन लगते हैं वे एक स्वाभाविक बाधा बन जाते हैं — और वह बाधा उसे अनावश्यक ख़र्च से बचा लेती है।',
        ],
        pEn: [
          'A practical structure that gets little discussion is not keeping the whole fund in one place but splitting it into two layers.',
          'The first layer is immediate access — roughly one month of expenses, in a savings account, reachable at any moment. This is the part that matters at midnight.',
          'The second layer is the remainder, which can sit somewhere that takes a day or two to reach and pays slightly better interest. This part does not need to be instant, because the first layer has already bought that much time.',
          'The split has two benefits. The first is that the whole fund is not earning savings-account interest. The second, and perhaps more important, is that the day or two needed to reach the second layer becomes a natural friction — and that friction protects it from unnecessary spending.',
        ],
      },
      {
        hHi: 'यदि क़र्ज़ भी है तो पहले क्या',
        hEn: 'If there is debt as well, what comes first',
        pHi: [
          'यह सबसे आम असली दुविधा है: कोष बनाना है या पहले क़र्ज़ चुकाना है? दोनों तर्क सही लगते हैं और दोनों को एक साथ करना संभव नहीं लगता।',
          'व्यावहारिक उत्तर बीच का है। पहले एक छोटा कोष बनाइए — एक महीने के ख़र्च जितना, पूरा छह महीने नहीं। फिर पूरी शक्ति ऊँचे ब्याज वाले क़र्ज़ पर लगाइए। क़र्ज़ ख़त्म होने के बाद कोष को उसके पूरे आकार तक ले जाइए।',
          'इस क्रम का कारण गणित नहीं, व्यवहार है। यदि कोष बिल्कुल न हो और कोई छोटी आपात स्थिति आए, तो आप फिर से क़र्ज़ लेंगे — और तब चुकाने की सारी मेहनत बेकार हो जाएगी। एक महीने का कोष उसी चक्र को तोड़ता है।',
          'यहाँ "ऊँचे ब्याज" का अर्थ स्पष्ट होना चाहिए: क्रेडिट कार्ड का बकाया और व्यक्तिगत ऋण इस श्रेणी में आते हैं। गृह ऋण जैसे कम ब्याज वाले दीर्घकालिक ऋण के लिए यह तर्क उतना मज़बूत नहीं है, और वहाँ कोष बनाना साथ-साथ चल सकता है।',
        ],
        pEn: [
          'This is the most common real dilemma: build the fund or clear the debt first? Both arguments sound correct and doing both at once feels impossible.',
          'The practical answer sits in the middle. Build a small fund first — about one month of expenses, not the full six. Then put everything into the high-interest debt. Once that is cleared, take the fund up to its full size.',
          'The reason for this order is behavioural rather than mathematical. With no fund at all, a small emergency means borrowing again — and then all the repayment effort is undone. A one-month fund is what breaks that cycle.',
          'What "high interest" means should be stated plainly here: credit card balances and personal loans belong in that category. For low-rate long-term borrowing such as a home loan the argument is much weaker, and there the fund can be built alongside.',
        ],
      },
      {
        hHi: 'क्रेडिट कार्ड आपातकालीन कोष नहीं है',
        hEn: 'A credit card is not an emergency fund',
        pHi: [
          'यह तर्क बार-बार सुनाई देता है: "मेरे पास कार्ड की सीमा है, वही मेरा कोष है।" यह तर्क तीन जगह टूटता है, और तीनों ठीक उसी समय टूटते हैं जब ज़रूरत होती है।',
          'पहला, कार्ड पैसा नहीं देता, उधार देता है। आपात के बाद आपके सामने वही समस्या रहती है और उसके ऊपर ब्याज भी जुड़ जाता है — और वह ब्याज दर सबसे ऊँची होती है जो आमतौर पर मिलती है।',
          'दूसरा, कई आपात स्थितियों में कार्ड चलता ही नहीं। नक़द की ज़रूरत, किसी छोटे शहर का अस्पताल, कोई ऐसा भुगतान जो कार्ड स्वीकार न करे — ये सब सामान्य स्थितियाँ हैं।',
          'तीसरा और सबसे गंभीर: जिस आपात में आय रुकती है, उसी में कार्ड चुकाने की क्षमता भी रुकती है। नौकरी जाने पर कार्ड का बकाया समस्या का समाधान नहीं, समस्या का दूसरा हिस्सा बन जाता है।',
          'कार्ड की सीमा को कोष का पूरक मानिए — पहले दिन का पुल, जब तक कोष तक पहुँचा न जाए। उसे कोष का विकल्प मानना ही वह ग़लती है जो सबसे महँगी पड़ती है।',
        ],
        pEn: [
          'This argument comes up constantly: "I have a card limit, that is my emergency fund." It breaks in three places, and all three break at exactly the moment the money is needed.',
          'First, a card does not give you money; it lends it. After the emergency the same problem remains with interest added on top — and that interest rate is the highest ordinarily available anywhere.',
          'Second, in many emergencies a card simply does not work. A need for cash, a hospital in a smaller town, a payment that does not accept cards — all of these are ordinary situations rather than unusual ones.',
          'Third and most serious: the emergency in which income stops is the same one in which the ability to repay the card stops. When a job goes, a card balance is not a solution to the problem but a second part of it.',
          'Treat a card limit as a supplement to the fund — a bridge for the first day, until the fund can be reached. Treating it as a replacement is the mistake that costs the most.',
        ],
      },
      {
        hHi: 'रास्ते के पड़ाव और यथार्थवादी समय',
        hEn: 'Milestones along the way, and a realistic timeline',
        pHi: [
          'छह महीने का लक्ष्य दूर से देखने पर हतोत्साहित करने वाला लगता है, और यही कारण है कि बहुत से लोग शुरू ही नहीं करते। इसे छोटे पड़ावों में बाँट देने से यह पूरी तरह अलग काम लगने लगता है।',
          'पहला पड़ाव: दस हज़ार रुपये। यह किसी भी बड़े ख़र्च के लिए पर्याप्त नहीं है, पर यह अधिकांश छोटी परेशानियों को सँभाल लेता है और सबसे महत्वपूर्ण बात — यह साबित कर देता है कि व्यवस्था चल रही है।',
          'दूसरा पड़ाव: एक महीने का ख़र्च। यहाँ पहुँचने पर मन का बोझ स्पष्ट रूप से हल्का होता है, और अधिकांश लोग यही बताते हैं कि असली बदलाव इसी बिंदु पर महसूस हुआ।',
          'तीसरा पड़ाव: तीन महीने। चौथा: आपकी अपनी गणना से निकली पूरी संख्या। हर पड़ाव पर रुककर उसे दर्ज कीजिए — प्रगति दिखना ही वह चीज़ है जो अगले पड़ाव तक ले जाती है।',
          'और समय के बारे में ईमानदारी: सामान्य आय पर पूरा कोष बनने में दो से तीन साल लग सकते हैं। यह लंबा लगता है, और फिर भी वह अवधि किसी भी हाल में बीतेगी — सवाल केवल यह है कि उसके अंत में कोष होगा या नहीं।',
        ],
        pEn: [
          'A six-month target looks discouraging from a distance, and that is exactly why many people never start. Broken into smaller milestones it becomes an entirely different task.',
          'First milestone: ten thousand rupees. It is not enough for any large expense, but it handles most small trouble, and more importantly it proves that the system is running.',
          'Second milestone: one month of expenses. Reaching this point lightens the mental load noticeably, and most people report that the real change in how they felt happened here.',
          'Third milestone: three months. Fourth: the full number your own calculation produced. Stop and record each one — seeing progress is the thing that carries you to the next stage.',
          'And an honest word about time: on an ordinary income the full fund can take two to three years. That sounds long, and those years will pass regardless — the only question is whether there is a fund at the end of them.',
        ],
      },
    ],
  },

  {
    slug: 'gold-investment-options-india',
    sections: [
      {
        hHi: 'गहनों की छिपी हुई लागत',
        hEn: 'The hidden costs inside jewellery',
        pHi: [
          'भारत में सोना ख़रीदने का सबसे आम रूप गहने हैं, और यही वह रूप है जिसमें निवेश के लिहाज़ से सबसे अधिक रिसाव होता है। यह बात गहनों के विरुद्ध नहीं है — यह केवल यह स्पष्ट करने के लिए है कि उन्हें निवेश मानने पर हिसाब कहाँ बिगड़ता है।',
          'पहली लागत मज़दूरी है। डिज़ाइन के अनुसार यह सोने की क़ीमत का एक ठीक-ठाक हिस्सा हो सकती है, और बेचते समय यह पूरी तरह चली जाती है — ख़रीदार केवल धातु का दाम देता है।',
          'दूसरी लागत शुद्धता की है। गहनों में शुद्ध सोना नहीं होता, क्योंकि उसे मज़बूत बनाने के लिए मिश्रण ज़रूरी है। बाईस कैरेट का अर्थ है कि वज़न का एक हिस्सा सोना नहीं है, और बेचते समय यही हिस्सा घटाया जाता है।',
          'तीसरी लागत बेचते समय की कटौती है, जो दुकान से दुकान अलग होती है। इन तीनों को जोड़ने पर जो अंतर बनता है, वह वर्षों की क़ीमत-वृद्धि खा सकता है।',
          'इसलिए एक साफ़ रेखा खींच लेना उपयोगी है: गहने पहनने और परंपरा के लिए ख़रीदिए, और निवेश के लिए अलग रूप चुनिए। दोनों उद्देश्य एक ही ख़रीद से पूरे करने की कोशिश ही वह जगह है जहाँ नुक़सान होता है।',
        ],
        pEn: [
          'The most common form in which gold is bought in India is jewellery, and it is also the form that leaks the most when treated as an investment. This is not an argument against jewellery — it is only about where the arithmetic breaks if it is counted as investing.',
          'The first cost is making charges. Depending on the design these can be a substantial share of the gold price, and they disappear completely at the time of sale — a buyer pays for the metal only.',
          'The second cost is purity. Jewellery is not pure gold, because an alloy is needed for strength. Twenty-two carat means part of the weight is not gold, and that part is deducted when selling.',
          'The third is the deduction applied at the point of sale, which varies from shop to shop. Added together, the resulting gap can consume years of price appreciation.',
          'So drawing a clear line helps: buy jewellery for wearing and for tradition, and choose a different form for investing. Trying to serve both purposes with one purchase is exactly where the loss occurs.',
        ],
      },
      {
        hHi: 'डिजिटल सोना, ETF और फंड — अंतर क्या है',
        hEn: 'Digital gold, ETFs and funds — what the differences are',
        pHi: [
          'सोने में निवेश के काग़ज़ी और डिजिटल रूपों को अक्सर एक साथ रख दिया जाता है, जबकि उनकी बनावट अलग है और यह अंतर मायने रखता है।',
          'गोल्ड ETF शेयर बाज़ार में सूचीबद्ध होता है और उसे ख़रीदने के लिए डीमैट खाता चाहिए। उसकी क़ीमत बाज़ार में तय होती है और उसमें एक प्रबंधन ख़र्च लगता है, जो आमतौर पर छोटा होता है।',
          'गोल्ड म्यूचुअल फंड इन्हीं ETF में निवेश करता है, इसलिए इसमें डीमैट खाते की ज़रूरत नहीं और SIP भी संभव है। बदले में इसमें एक अतिरिक्त परत का ख़र्च जुड़ जाता है।',
          '"डिजिटल गोल्ड" नाम से बिकने वाले उत्पाद इन दोनों से अलग हैं। वे किसी विनिमय पर सूचीबद्ध नहीं होते और उनका नियमन ढाँचा भी वही नहीं है, इसलिए ख़रीदने से पहले यह देखना ज़रूरी है कि पीछे कौन है और शर्तें क्या हैं।',
          'यह लेख इनमें से किसी की सिफ़ारिश नहीं करता। यहाँ केवल यह कहा जा रहा है कि "सोना ख़रीदना" एक काम नहीं बल्कि कई अलग-अलग काम हैं, और उनकी लागत, तरलता और नियमन अलग-अलग हैं।',
        ],
        pEn: [
          'The paper and digital forms of gold investment often get lumped together, even though their structures differ and the differences matter.',
          'A gold ETF is listed on the stock exchange and needs a demat account to buy. Its price is set in the market and it carries a management cost, which is usually small.',
          'A gold mutual fund invests in those same ETFs, so no demat account is needed and a SIP is possible. In exchange it carries the cost of an additional layer.',
          'Products sold under the name "digital gold" are different from both. They are not listed on an exchange and the regulatory framework around them is not the same, so it is worth checking who stands behind the product and what the terms are before buying.',
          'This article recommends none of them. The point being made is only that "buying gold" is not one activity but several different ones, with different costs, different liquidity and different regulation.',
        ],
      },
      {
        hHi: 'पोर्टफ़ोलियो में सोने की भूमिका',
        hEn: 'The role gold plays in a portfolio',
        pHi: [
          'सोने के बारे में सबसे उपयोगी बात यह समझना है कि वह किस काम के लिए रखा जाता है, क्योंकि उससे यह अपने आप तय हो जाता है कि कितना रखा जाए।',
          'सोना आय नहीं देता। न ब्याज, न लाभांश, न किराया। इसका पूरा प्रतिफल क़ीमत बदलने से आता है, और इसी कारण उसे किसी पोर्टफ़ोलियो का मुख्य इंजन नहीं बनाया जाता।',
          'जो काम वह करता है वह अलग है: वह प्रायः तब मज़बूत होता है जब बाक़ी चीज़ें कमज़ोर होती हैं — मुद्रा पर दबाव, अनिश्चितता, या भरोसे का संकट। इसी गुण के कारण उसे संतुलन के लिए रखा जाता है, वृद्धि के लिए नहीं।',
          'इसका व्यावहारिक अर्थ यह है कि सोने का हिस्सा सीमित रहना चाहिए। कितना — यह उम्र, लक्ष्य और बाक़ी पोर्टफ़ोलियो पर निर्भर करता है, और इस लेख में कोई प्रतिशत सुझाया नहीं जा रहा।',
          'एक बात ज़रूर कही जा सकती है: सोना इसलिए ख़रीदना कि उसकी क़ीमत हाल में तेज़ी से बढ़ी है, वही ग़लती है जो किसी भी परिसंपत्ति के साथ की जाती है, और वह किसी एक धातु से बँधी हुई नहीं है।',
        ],
        pEn: [
          'The most useful thing to understand about gold is what it is held for, because that settles by itself the question of how much to hold.',
          'Gold produces no income. No interest, no dividend, no rent. Its entire return comes from price movement, and that is why it is not made the main engine of a portfolio.',
          'What it does do is different: it tends to be strong when other things are weak — pressure on a currency, uncertainty, a crisis of confidence. That property is why it is held for balance rather than for growth.',
          'The practical consequence is that the gold share should stay limited. How much depends on age, goals and the rest of the portfolio, and no percentage is being suggested here.',
          'One thing can be said with confidence: buying gold because its price has risen sharply recently is the same mistake made with every asset, and it is not particular to this one metal.',
        ],
      },
      {
        hHi: 'भंडारण और शुद्धता की व्यावहारिक बातें',
        hEn: 'Practical matters of storage and purity',
        pHi: [
          'यदि आप भौतिक सोना रखते हैं, तो दो व्यावहारिक प्रश्न बचते हैं जिनका उत्तर ख़रीद के दिन ही तय हो जाना चाहिए।',
          'पहला शुद्धता का है। हॉलमार्क का उद्देश्य ठीक यही है — यह स्वतंत्र प्रमाण है कि धातु वह है जो बताई गई है। बिना हॉलमार्क के ख़रीदा गया सोना बेचते समय अतिरिक्त जाँच और अतिरिक्त कटौती दोनों माँगता है।',
          'दूसरा भंडारण का है। घर में रखे सोने का जोखिम स्पष्ट है, और बैंक लॉकर की अपनी लागत और अपनी सीमाएँ हैं। यह भी ध्यान रखिए कि लॉकर में रखी वस्तुओं पर बैंक की ज़िम्मेदारी सीमित होती है, और यह विवरण अनुबंध में लिखा होता है।',
          'तीसरा, और सबसे अधिक भुला दिया जाने वाला: रसीदें। बेचते समय और कर के समय ख़रीद का प्रमाण माँगा जाता है, और वर्षों बाद वह रसीद खोजना लगभग असंभव होता है यदि उसे शुरू में ही सँभालकर न रखा गया हो।',
        ],
        pEn: [
          'If you hold physical gold, two practical questions remain and both should be settled on the day of purchase rather than later.',
          'The first is purity. That is precisely what hallmarking exists for — independent evidence that the metal is what it is said to be. Gold bought without it demands both extra testing and an extra deduction at the time of sale.',
          'The second is storage. The risk of keeping gold at home is obvious, and a bank locker carries its own cost and its own limits. It is also worth knowing that a bank\'s liability for the contents of a locker is limited, and that detail is written into the agreement.',
          'The third, and the most consistently forgotten: receipts. Proof of purchase is asked for when selling and at tax time, and finding a receipt years later is very nearly impossible if it was not filed carefully at the start.',
        ],
      },
      {
        hHi: 'सोना और परिवार: एक संवेदनशील पहलू',
        hEn: 'Gold and the family: a sensitive dimension',
        pHi: [
          'भारत में सोने की चर्चा पूरी तरह वित्तीय नहीं हो सकती, क्योंकि उसका एक बड़ा हिस्सा परिवार, परंपरा और सुरक्षा की भावना से जुड़ा है।',
          'यह जुड़ाव अवैज्ञानिक नहीं है। पीढ़ियों तक सोना ही वह संपत्ति थी जो किसी महिला के अपने नाम रहती थी, जिसे कहीं भी बेचा जा सकता था, और जिसके लिए किसी दस्तावेज़ की ज़रूरत नहीं थी। यह इतिहास आज भी व्यवहार को आकार देता है।',
          'इसलिए किसी परिवार से यह कहना कि "गहनों में निवेश ग़लत है" न तो उपयोगी है और न ही पूरी तरह सही। अधिक उपयोगी बात यह है कि दोनों उद्देश्य अलग-अलग गिने जाएँ।',
          'व्यावहारिक सुझाव यह है: घर में जो सोना परंपरा और उपयोग के लिए है, उसे संपत्ति की सूची में उसकी वर्तमान बिक्री-योग्य क़ीमत पर गिनिए, ख़रीद क़ीमत पर नहीं। और भविष्य के लिए जो सोना निवेश के रूप में रखना हो, उसके लिए कोई और रूप चुनिए।',
        ],
        pEn: [
          'A discussion of gold in India cannot be purely financial, because a large part of it is tied to family, tradition and a sense of security.',
          'That attachment is not irrational. For generations gold was the one asset that stayed in a woman\'s own name, could be sold anywhere, and required no documentation. That history still shapes behaviour today.',
          'So telling a family that "investing in jewellery is wrong" is neither useful nor entirely correct. What is more useful is counting the two purposes separately.',
          'The practical suggestion: count the gold at home that exists for tradition and use at its current realisable value in your asset list, not at what was paid for it. And for gold held as an investment going forward, choose a different form.',
        ],
      },
      {
        hHi: 'ख़रीदने का समय: वह प्रश्न जिसका उत्तर नहीं है',
        hEn: 'Timing the purchase: the question with no answer',
        pHi: [
          'सबसे अधिक पूछा जाने वाला प्रश्न यही है — अभी ख़रीदें या रुकें? और सबसे ईमानदार उत्तर यह है कि यह किसी को नहीं पता।',
          'सोने की क़ीमत कई चीज़ों से चलती है जिनका पूर्वानुमान लगाना कठिन है: अंतरराष्ट्रीय दरें, रुपये की चाल, आयात शुल्क, और वैश्विक अनिश्चितता। इनमें से कोई भी भरोसेमंद रूप से पहले से नहीं जाना जा सकता।',
          'इसलिए जो तरीक़ा बचता है वह वही है जो हर अनिश्चित परिसंपत्ति के लिए काम करता है: एक बार में बड़ी राशि लगाने के बजाय समय पर फैलाकर ख़रीदना। इससे किसी एक दिन की क़ीमत का महत्व अपने आप घट जाता है।',
          'और एक चेतावनी जो हर साल दोहराने लायक़ है: त्योहारों के आसपास मिलने वाली "योजनाएँ" ध्यान से पढ़िए। कुछ में मासिक जमा के बाद एक अतिरिक्त किश्त मिलती है, पर शर्तें, निकासी के नियम और लागू होने वाली धातु-दर हर योजना में अलग होती है।',
        ],
        pEn: [
          'The most frequently asked question is exactly this — buy now or wait? And the most honest answer is that nobody knows.',
          'The gold price moves on several things that are hard to forecast: international rates, the rupee, import duties, and global uncertainty. None of these can be known reliably in advance by anybody.',
          'So the approach that remains is the one that works for every uncertain asset: spreading purchases over time rather than committing a large amount at once. That reduces the importance of any single day\'s price on its own.',
          'And one warning worth repeating every year: read the "schemes" offered around festivals carefully. Some add an extra instalment after a run of monthly deposits, but the conditions, the withdrawal rules and the metal rate applied differ from scheme to scheme.',
        ],
      },
    ],
  },

  {
    slug: 'five-modern-upi-scams-three-questions',
    sections: [
      {
        hHi: 'पहला प्रश्न: संपर्क किसने शुरू किया',
        hEn: 'The first question: who started the contact',
        pHi: [
          'तीन प्रश्नों में से यह सबसे शक्तिशाली है और सबसे कम इस्तेमाल किया जाता है, क्योंकि उत्तर इतना सरल होता है कि लोग उसे महत्वपूर्ण नहीं मानते।',
          'यदि कॉल, संदेश या लिंक उनकी ओर से आया है, तो पूरी बातचीत संदेह से शुरू होनी चाहिए — चाहे वे कुछ भी कहें। और यदि आपने ख़ुद किसी आधिकारिक नंबर पर कॉल किया है, तो जोखिम बहुत कम है।',
          'यह भेद इतना उपयोगी है कि उसे एक नियम बनाया जा सकता है: कभी भी उस नंबर पर वापस बात मत कीजिए जो उन्होंने दिया। यदि कोई बैंक होने का दावा करता है, तो कॉल काटिए और कार्ड के पीछे लिखे नंबर पर ख़ुद कॉल कीजिए।',
          'यही एक आदत उन ठगी को रोक देती है जो सबसे अधिक विश्वसनीय लगती हैं, क्योंकि उन सबकी एक ही ज़रूरत है — कि आप उनके चुने हुए रास्ते पर बने रहें।',
        ],
        pEn: [
          'Of the three questions this is the most powerful and the least used, because the answer is so simple that people do not treat it as significant.',
          'If the call, message or link came from their side, the entire conversation should begin in suspicion — whatever they say. And if you dialled an official number yourself, the risk is very much lower.',
          'The distinction is useful enough to turn into a rule: never call back on the number they gave you. If somebody claims to be from a bank, end the call and dial the number printed on the back of your card instead.',
          'That single habit stops the frauds that feel most convincing, because all of them need the same thing — for you to stay on the channel they chose.',
        ],
      },
      {
        hHi: 'दूसरा प्रश्न: वास्तव में माँगा क्या जा रहा है',
        hEn: 'The second question: what is actually being asked for',
        pHi: [
          'ठगी की भाषा हमेशा घुमावदार होती है, इसलिए यह प्रश्न पूछना कि "इस बातचीत के अंत में मुझसे क्या करवाया जा रहा है" चीज़ों को तुरंत साफ़ कर देता है।',
          'उत्तर लगभग हमेशा चार में से एक होता है: कोई ऐप इंस्टॉल करवाना, कोई कोड बताना, कोई लिंक खुलवाना, या कोई भुगतान करवाना। यदि बातचीत इन चारों में से किसी की ओर जा रही है, तो वह ठगी हो सकती है — चाहे कहानी कितनी भी विश्वसनीय हो।',
          'एक ख़ास बात ध्यान देने लायक़ है: असली संस्थाएँ जानकारी देती हैं, कार्रवाई नहीं करवातीं। बैंक आपको बताएगा कि आपके खाते में क्या हुआ; वह आपसे फ़ोन पर कुछ करवाने की कोशिश नहीं करेगा।',
          'इसलिए जब कोई कहे कि "बस यह एक काम कर दीजिए और मामला हल हो जाएगा", तो वही वाक्य सबसे बड़ा संकेत है। असली समस्याएँ फ़ोन पर तीन मिनट में हल नहीं होतीं।',
        ],
        pEn: [
          'The language of a scam is always indirect, so asking "what am I being made to do by the end of this conversation" clears things up immediately.',
          'The answer is almost always one of four: install an app, read out a code, open a link, or make a payment. If the conversation is heading towards any of those, it may well be fraud — however convincing the story around it.',
          'One thing is worth noting particularly: genuine institutions give information, they do not make you perform actions. A bank will tell you what happened in your account; it will not try to get you to do something on the phone.',
          'So when somebody says "just do this one thing and the matter will be resolved", that sentence is itself the largest signal. Real problems are not solved on a phone call in three minutes.',
        ],
      },
      {
        hHi: 'तीसरा प्रश्न: यदि मैं कल करूँ तो क्या होगा',
        hEn: 'The third question: what happens if I do this tomorrow',
        pHi: [
          'यह प्रश्न लगभग हर ठगी को अकेले तोड़ देता है, क्योंकि हर ठगी की एकमात्र वास्तविक ज़रूरत समय है — और यह प्रश्न उसे छीन लेता है।',
          'असली स्थितियों में देरी का परिणाम मामूली होता है। यदि सचमुच कोई भुगतान लंबित है, तो वह कल भी लंबित रहेगा। यदि सचमुच कोई KYC अधूरा है, तो उसके लिए शाखा में जाया जा सकता है।',
          'ठगी में उत्तर हमेशा उलटा होता है: "कल तक खाता बंद हो जाएगा", "यह ऑफ़र दस मिनट में ख़त्म है", "अभी नहीं किया तो मामला दर्ज हो जाएगा"। यह तात्कालिकता कहानी का हिस्सा नहीं, कहानी का पूरा उद्देश्य है।',
          'इसलिए इस प्रश्न का उत्तर सुनना ही पर्याप्त है। जो व्यक्ति आपको कल तक रुकने नहीं दे रहा, उसके पास कल तक टिकने वाली कोई बात नहीं है।',
        ],
        pEn: [
          'This question breaks nearly every scam on its own, because the one thing every scam truly needs is time — and this question takes it away.',
          'In genuine situations the consequence of a delay is minor. If a payment really is pending, it will still be pending tomorrow. If a KYC really is incomplete, it can be done at a branch.',
          'In a scam the answer always runs the other way: "the account will be frozen by tomorrow", "this offer ends in ten minutes", "a case will be filed if you do not act now". That urgency is not part of the story; it is the entire purpose of the story.',
          'So simply hearing the answer to this question is enough. Somebody who will not let you wait until tomorrow has nothing that would survive until tomorrow.',
        ],
      },
      {
        hHi: 'नौकरी और टास्क वाली ठगी',
        hEn: 'The job-offer and task scam',
        pHi: [
          'यह हाल के वर्षों में सबसे तेज़ी से बढ़ने वाली श्रेणी है और यह UPI ठगी की पुरानी सूची में नहीं आती, इसलिए इसे अलग से पहचानना ज़रूरी है।',
          'शुरुआत हानिरहित लगती है: किसी संदेश या समूह के माध्यम से घर बैठे काम का प्रस्ताव, जिसमें छोटे-छोटे "टास्क" पूरे करने पर भुगतान मिलता है। पहले कुछ भुगतान सचमुच आते हैं, और यही इस ठगी की असली चाल है।',
          'भरोसा बन जाने के बाद ढाँचा बदल जाता है। अब बड़े टास्क के लिए पहले "जमा" करनी पड़ती है, इस वादे के साथ कि वह भुगतान के साथ वापस मिलेगी। यह जमा बढ़ती जाती है, और किसी बिंदु पर खाता बंद हो जाता है।',
          'पहचान का नियम सरल है: किसी भी असली काम में आपसे पैसा नहीं लिया जाता। नियोक्ता भुगतान करता है, प्राप्त नहीं करता — और इस नियम का कोई अपवाद नहीं है।',
          'यह श्रेणी विशेष रूप से युवाओं और नई नौकरी खोज रहे लोगों तक पहुँचती है, इसलिए घर में इसकी चर्चा करना उतना ही उपयोगी है जितना UPI के PIN की।',
        ],
        pEn: [
          'This is the fastest-growing category of recent years and it does not appear on older lists of UPI frauds, so it is worth recognising separately.',
          'It begins harmlessly: an offer of work from home through a message or a group, with payment for completing small "tasks". The first few payments genuinely arrive, and that is the real mechanism of the scam.',
          'Once trust exists the structure changes. Larger tasks now require a "deposit" first, with a promise that it comes back along with the payment. The deposit grows, and at some point the account goes silent.',
          'The rule for recognising it is simple: no genuine work takes money from you. An employer pays, they do not receive — and there is no exception to that rule.',
          'This category reaches young people and those looking for a first job particularly, so discussing it at home is as useful as discussing the UPI PIN.',
        ],
      },
      {
        hHi: 'निवेश समूह वाली ठगी',
        hEn: 'The investment-group scam',
        pHi: [
          'यह दूसरी नई श्रेणी है और यह विशेष रूप से ख़तरनाक है क्योंकि इसमें बड़ी राशियाँ जाती हैं और शिकार अक्सर पढ़े-लिखे लोग होते हैं।',
          'ढाँचा यह होता है: किसी संदेश समूह में जुड़ाव, जहाँ "विशेषज्ञ" रोज़ सलाह देते हैं और अन्य सदस्य अपने मुनाफ़े की तस्वीरें साझा करते हैं। वे अन्य सदस्य प्रायः असली नहीं होते।',
          'कुछ दिनों बाद एक ऐप या मंच पर पैसा लगाने को कहा जाता है, जहाँ आपका "पोर्टफ़ोलियो" बढ़ता हुआ दिखता है। छोटी निकासी शुरू में सफल हो जाती है, जिससे भरोसा और बढ़ता है। बड़ी निकासी के समय कोई शुल्क, कोई कर, या कोई सत्यापन बीच में आ जाता है।',
          'पहचान के तीन संकेत हैं: कोई ऐसा मंच जो मान्यता-प्राप्त नहीं है, ऐसा प्रतिफल जो नियमित और असामान्य रूप से ऊँचा हो, और निकासी में कोई अतिरिक्त भुगतान की शर्त। इनमें से कोई एक भी पर्याप्त कारण है रुक जाने का।',
          'सामान्य नियम यह है कि निवेश केवल मान्यता-प्राप्त, नियमित संस्थाओं के माध्यम से किया जाए, और किसी भी मंच के बारे में उसकी अपनी वेबसाइट के बाहर से पुष्टि की जाए।',
        ],
        pEn: [
          'This is the second new category and it is particularly dangerous, because the amounts involved are large and the victims are frequently well-educated people.',
          'The structure runs like this: joining a messaging group where "experts" give daily advice and other members post screenshots of their profits. Those other members are usually not real people.',
          'After a few days you are asked to put money into an app or platform where your "portfolio" appears to grow. Small withdrawals succeed at first, which builds confidence further. At the point of a large withdrawal, a fee, a tax or a verification step suddenly appears.',
          'There are three signs: a platform that is not registered, returns that are regular and unusually high, and a condition requiring a further payment before withdrawal. Any one of them is sufficient reason to stop.',
          'The general rule is to invest only through registered, regulated entities, and to verify any platform from somewhere other than its own website.',
        ],
      },
      {
        hHi: 'शिकायत कैसे और कहाँ दर्ज करें',
        hEn: 'How and where to file a complaint',
        pHi: [
          'ठगी के बाद क्या करना है, यह जानना उतना ही महत्वपूर्ण है जितना ठगी पहचानना, क्योंकि पहले कुछ घंटों में की गई कार्रवाई ही सबसे अधिक असर रखती है।',
          'पहला चरण बैंक है — आधिकारिक नंबर पर कॉल करके लेन-देन की सूचना और खाते पर रोक की माँग। यह सूचना जितनी जल्दी दर्ज होती है, उत्तरदायित्व के नियम उतने ही अनुकूल रहते हैं।',
          'दूसरा चरण राष्ट्रीय साइबर अपराध रिपोर्टिंग व्यवस्था है, जिसमें ऑनलाइन शिकायत दर्ज की जा सकती है और एक समर्पित हेल्पलाइन भी है। शिकायत संख्या सुरक्षित रखिए, वह हर आगे के क़दम में माँगी जाती है।',
          'तीसरा चरण, यदि बैंक से संतोषजनक उत्तर न मिले, तो बैंकिंग लोकपाल के पास शिकायत है। यह रास्ता निशुल्क है और उसकी प्रक्रिया लिखित होती है।',
          'और एक अंतिम बात: तुरंत बताइए, चाहे शर्म आए। ठगी का शिकार होना बुद्धि की कमी नहीं है — ये तरकीबें पेशेवर रूप से बनाई जाती हैं। देरी ही एकमात्र चीज़ है जो नुक़सान को स्थायी बनाती है।',
        ],
        pEn: [
          'Knowing what to do after a fraud matters as much as recognising one, because action taken in the first few hours has by far the largest effect.',
          'The first step is the bank — call the official number, report the transaction and ask for the account to be blocked. The sooner that report is on record, the more favourable the liability rules remain.',
          'The second step is the national cybercrime reporting system, where a complaint can be filed online and where a dedicated helpline also exists. Keep the complaint number; it is asked for at every subsequent stage.',
          'The third step, if the bank\'s response is unsatisfactory, is a complaint to the banking ombudsman. That route costs nothing and its process is conducted in writing.',
          'And one last thing: report it immediately, however embarrassing it feels. Being defrauded is not a failure of intelligence — these tricks are built professionally. Delay is the only thing that makes the loss permanent.',
        ],
      },
    ],
  },

  {
    slug: 'credit-score-samjhiye',
    sections: [
      {
        hHi: 'चार ब्यूरो, चार अलग संख्याएँ',
        hEn: 'Four bureaus, four different numbers',
        pHi: [
          'बहुत से लोग यह मानते हैं कि क्रेडिट स्कोर एक ही संख्या है, और फिर दो अलग जगहों पर दो अलग आँकड़े देखकर उलझ जाते हैं।',
          'वास्तव में भारत में एक से अधिक क्रेडिट सूचना कंपनियाँ काम करती हैं, और हर एक अपना स्कोर निकालती है। उनके पास आने वाला डेटा भी पूरी तरह एक जैसा नहीं होता, क्योंकि हर ऋणदाता हर ब्यूरो को एक ही समय पर रिपोर्ट नहीं भेजता।',
          'इसका अर्थ यह नहीं कि कोई एक ग़लत है। इसका अर्थ केवल यह है कि संख्या को एक बिंदु के रूप में नहीं, एक दायरे के रूप में देखना चाहिए। तीस-चालीस अंकों का अंतर सामान्य है।',
          'व्यावहारिक सलाह यह है कि साल में एक बार एक से अधिक ब्यूरो की रिपोर्ट देख लीजिए — इसलिए नहीं कि स्कोर अलग है, बल्कि इसलिए कि किसी एक रिपोर्ट में मौजूद ग़लती दूसरी में न हो, और तुलना से वह पकड़ में आ जाती है।',
        ],
        pEn: [
          'Many people assume the credit score is a single number, and then get confused on finding two different figures in two different places.',
          'In fact more than one credit information company operates in India, and each produces its own score. The data reaching them is not identical either, because lenders do not report to every bureau at the same time.',
          'This does not mean one of them is wrong. It only means the number should be read as a range rather than as a point. A difference of thirty or forty points between bureaus is ordinary.',
          'The practical advice is to look at reports from more than one bureau once a year — not because the scores differ, but because an error present in one report may be absent from another, and comparing them is how it gets caught.',
        ],
      },
      {
        hHi: 'ऋणदाता संख्या से आगे क्या देखता है',
        hEn: 'What a lender looks at beyond the number',
        pHi: [
          'स्कोर एक सारांश है, और कोई भी गंभीर ऋणदाता केवल सारांश पर निर्णय नहीं लेता। रिपोर्ट में स्कोर के अलावा जो कुछ है, वह अक्सर उतना ही मायने रखता है।',
          'पहली चीज़ जो देखी जाती है वह हाल का व्यवहार है। दो साल पुरानी एक चूक और पिछले महीने की एक चूक स्कोर पर लगभग एक जैसा असर डाल सकती हैं, पर ऋणदाता की नज़र में वे बिल्कुल अलग हैं।',
          'दूसरी चीज़ खातों का मिश्रण है। केवल असुरक्षित ऋण — व्यक्तिगत ऋण और कार्ड — वाला रिकॉर्ड उसी स्कोर वाले उस रिकॉर्ड से कमज़ोर पढ़ा जाता है जिसमें कोई सुरक्षित ऋण भी नियमित रूप से चुकाया गया हो।',
          'तीसरी चीज़ हाल की पूछताछ है। यदि पिछले कुछ महीनों में कई ऋणदाताओं ने आपकी रिपोर्ट देखी है, तो यह संकेत जाता है कि आप कई जगह आवेदन कर रहे हैं — और यह अपने आप एक चेतावनी के रूप में पढ़ा जाता है।',
          'इसलिए स्कोर बढ़ाने का काम केवल संख्या का काम नहीं है। रिपोर्ट को एक कहानी की तरह पढ़ा जाता है, और वह कहानी सुसंगत होनी चाहिए।',
        ],
        pEn: [
          'The score is a summary, and no serious lender decides on a summary alone. What sits in the report besides the score often matters just as much.',
          'The first thing looked at is recent behaviour. A default two years old and one from last month may affect the score similarly, but in a lender\'s eyes they are entirely different things.',
          'The second is the mix of accounts. A record containing only unsecured borrowing — personal loans and cards — reads as weaker than a record with the same score that also shows a secured loan being repaid regularly.',
          'The third is recent enquiries. If several lenders have pulled your report over the past few months, that signals you are applying in many places — and it is read as a warning in itself.',
          'So improving a score is not purely a matter of the number. The report is read as a story, and the story needs to be coherent.',
        ],
      },
      {
        hHi: 'हार्ड और सॉफ़्ट पूछताछ का अंतर',
        hEn: 'The difference between hard and soft enquiries',
        pHi: [
          'यह अंतर छोटा लगता है और व्यवहार में महत्वपूर्ण है, ख़ासकर उन लोगों के लिए जो कोई बड़ा ऋण लेने की योजना बना रहे हैं।',
          'जब आप ख़ुद अपना स्कोर देखते हैं, तो वह सॉफ़्ट पूछताछ है और उससे स्कोर पर कोई असर नहीं पड़ता। यह डर कि "बार-बार देखने से स्कोर गिरता है" ग़लत है, और उसी डर के कारण बहुत से लोग अपनी रिपोर्ट कभी नहीं देखते।',
          'जब कोई ऋणदाता आपके आवेदन पर आपकी रिपोर्ट निकालता है, तो वह हार्ड पूछताछ है और वह रिपोर्ट में दर्ज होती है। एक-दो का असर मामूली है; कम समय में कई का असर जुड़ जाता है।',
          'इससे एक व्यावहारिक नियम निकलता है: कई जगह एक साथ आवेदन मत कीजिए। पहले पात्रता जाँचिए — कई ऋणदाता यह सुविधा बिना हार्ड पूछताछ के देते हैं — और फिर केवल वहीं औपचारिक आवेदन कीजिए जहाँ संभावना सबसे अच्छी हो।',
        ],
        pEn: [
          'This distinction sounds minor and matters in practice, particularly for anybody planning a large loan in the near future.',
          'When you check your own score it is a soft enquiry and has no effect at all. The fear that "checking repeatedly lowers the score" is simply wrong, and that fear is why many people never look at their own report.',
          'When a lender pulls your report against an application, that is a hard enquiry and it is recorded. One or two make little difference; several within a short period add up.',
          'A practical rule follows from this: do not apply in many places at once. Check eligibility first — many lenders offer this without a hard enquiry — and then submit a formal application only where the chance is best.',
        ],
      },
      {
        hHi: 'स्कोर का उपयोग ऋण के बाहर',
        hEn: 'Where the score is used outside lending',
        pHi: [
          'बहुत से लोग स्कोर की परवाह केवल तब करते हैं जब ऋण लेना हो, जबकि उसका उपयोग धीरे-धीरे अन्य जगहों तक फैला है।',
          'सबसे स्पष्ट उदाहरण क्रेडिट कार्ड की सीमा है। वही व्यक्ति, वही आय, पर बेहतर स्कोर पर अधिक सीमा और बेहतर शर्तें मिलती हैं — और सीमा अपने आप उपयोग अनुपात को सुधार देती है।',
          'दूसरा उदाहरण ऋण की दर है, जो शायद सबसे महँगा प्रभाव है। एक बड़े और लंबे ऋण पर ब्याज दर में आधे प्रतिशत का अंतर भी कुल भुगतान में बड़ी राशि बना देता है।',
          'तीसरा, कुछ मामलों में मकान किराए पर लेते समय या कुछ प्रकार की नौकरियों में — विशेष रूप से वित्तीय ज़िम्मेदारी वाले पदों पर — रिकॉर्ड देखा जा सकता है।',
          'इसका निष्कर्ष यह है कि स्कोर को केवल ऋण के समय याद करने वाली चीज़ मत मानिए। यह एक ऐसा रिकॉर्ड है जो चुपचाप बनता रहता है, और वह उसी दिन काम आता है जिस दिन उसे बनाना संभव नहीं होता।',
        ],
        pEn: [
          'Many people think about the score only when a loan is needed, whereas its use has gradually spread into other places.',
          'The clearest example is credit card limits. The same person on the same income gets a higher limit and better terms with a better score — and a higher limit improves the utilisation ratio on its own.',
          'The second example is the interest rate, which is probably the most expensive effect. On a large, long loan even half a percentage point of difference turns into a substantial sum across the total repayment.',
          'Third, in some cases the record may be looked at when renting a home, or for certain kinds of employment — particularly roles carrying financial responsibility.',
          'The conclusion is not to treat the score as something to remember at loan time. It is a record that builds quietly, and it becomes useful on precisely the day when building it is no longer possible.',
        ],
      },
      {
        hHi: 'सेटलमेंट और "क्लोज़्ड" के बीच का ख़तरनाक अंतर',
        hEn: 'The dangerous gap between "settled" and "closed"',
        pHi: [
          'यह रिपोर्ट का वह विवरण है जो सबसे अधिक नुक़सान करता है और जिसके बारे में सबसे कम बताया जाता है।',
          'जब कोई ऋण पूरी तरह चुका दिया जाता है, तो वह "क्लोज़्ड" के रूप में दर्ज होता है, और यह एक सकारात्मक प्रविष्टि है। जब ऋणदाता कम राशि लेकर मामला ख़त्म करने को राज़ी होता है, तो वह "सेटल्ड" दर्ज होता है — और यह एक नकारात्मक प्रविष्टि है जो वर्षों तक रहती है।',
          'बहुत से लोग सेटलमेंट को राहत समझकर स्वीकार कर लेते हैं, यह जाने बिना कि इसका दीर्घकालिक असर क्या है। भविष्य में कोई भी ऋणदाता इस प्रविष्टि को देखकर सावधान हो जाता है, क्योंकि उसका सीधा अर्थ है कि पिछला ऋणदाता पूरा पैसा वापस नहीं पा सका।',
          'यदि संभव हो, तो सेटलमेंट के बजाय पुनर्गठन या लंबी अवधि की बातचीत बेहतर है। और यदि सेटलमेंट पहले ही हो चुका है, तो शेष राशि चुकाकर "नो ड्यूज़" प्रमाणपत्र लेना और रिपोर्ट में स्थिति सुधरवाना संभव होता है — यह प्रक्रिया लंबी है, पर यह मौजूद है।',
        ],
        pEn: [
          'This is the detail in a report that does the most damage and about which the least is said.',
          'When a loan is repaid in full it is recorded as "closed", which is a positive entry. When a lender agrees to accept a lower amount and end the matter, it is recorded as "settled" — and that is a negative entry which stays for years.',
          'Many people accept a settlement as relief without knowing its longer-term effect. Any future lender seeing that entry becomes cautious, because it means directly that a previous lender did not get all its money back.',
          'Where possible, restructuring or negotiating a longer term is better than settling. And if a settlement has already happened, paying the remaining amount, obtaining a no-dues certificate and getting the report status corrected is possible — the process is slow, but it exists.',
        ],
      },
      {
        hHi: 'स्कोर की सीमाएँ',
        hEn: 'The limits of what a score can say',
        pHi: [
          'अंत में एक संतुलन ज़रूरी है, क्योंकि स्कोर को इतना महत्व दे दिया जाता है कि लोग उसे अपने वित्तीय स्वास्थ्य का माप समझने लगते हैं। वह यह नहीं है।',
          'स्कोर केवल एक बात मापता है: आपने उधार लिया हुआ पैसा कैसे चुकाया। वह यह नहीं जानता कि आपके पास कितनी बचत है, आपका आपातकालीन कोष है या नहीं, आपका बीमा है या नहीं, या आपकी आय स्थिर है या नहीं।',
          'इसका अर्थ यह है कि 800 का स्कोर रखने वाला व्यक्ति वित्तीय रूप से नाज़ुक हो सकता है, और बिना किसी स्कोर वाला व्यक्ति पूरी तरह सुरक्षित। स्कोर ऋणदाता के प्रश्न का उत्तर है, आपके प्रश्न का नहीं।',
          'इसलिए स्कोर को उतना ही महत्व दीजिए जितना उसका है — वह ऋण की क़ीमत तय करता है, और वही उसका पूरा काम है। बाक़ी वित्तीय स्वास्थ्य कहीं और मापा जाता है: बचत में, बीमा में, और उस अंतर में जो हर महीने आय और ख़र्च के बीच बचता है।',
        ],
        pEn: [
          'A balancing point belongs at the end, because the score is given so much weight that people begin to treat it as a measure of their financial health. It is not that.',
          'A score measures one thing only: how you repaid money you borrowed. It knows nothing about how much you have saved, whether you have an emergency fund, whether you are insured, or whether your income is stable.',
          'This means a person with a score of 800 can be financially fragile, and a person with no score at all can be entirely secure. The score answers a lender\'s question, not yours.',
          'So give it exactly the weight it deserves — it prices your borrowing, and that is the whole of its job. Financial health is measured elsewhere: in savings, in insurance, and in the gap that remains between income and spending each month.',
        ],
      },
    ],
  },

  {
    slug: 'tax-regime-kaise-chunein',
    sections: [
      {
        hHi: 'ब्रेक-ईवन कटौती: एक संख्या जो सब कुछ आसान कर देती है',
        hEn: 'The break-even deduction: one number that simplifies everything',
        pHi: [
          'पूरी तुलना को एक ही प्रश्न में बदला जा सकता है, और यह तरीक़ा हर साल की माथापच्ची बचा देता है।',
          'प्रश्न यह है: आपकी आय पर वह कुल कटौती कितनी है जिस पर दोनों व्यवस्थाओं में कर बराबर हो जाता है? यही ब्रेक-ईवन कटौती है। यदि आपकी वास्तविक कटौतियाँ इससे अधिक हैं, तो पुरानी व्यवस्था बेहतर है; यदि कम हैं, तो नई।',
          'इसका बड़ा लाभ यह है कि आपको हर बार पूरा कर-गणना नहीं करनी पड़ती। एक बार अपनी आय-श्रेणी के लिए यह संख्या निकाल लीजिए, फिर हर साल केवल यह देखिए कि आपकी कटौतियाँ उससे ऊपर हैं या नीचे।',
          'यह संख्या आय के साथ बदलती है, और दरों में बदलाव के साथ भी। इसलिए इसे हर वर्ष एक बार दोबारा निकालना ज़रूरी है — पर वह काम पूरी तुलना दोहराने से कहीं छोटा है।',
        ],
        pEn: [
          'The whole comparison can be reduced to a single question, and doing so saves the annual head-scratching entirely.',
          'The question is: at what level of total deductions does the tax under both regimes come out the same for your income? That is the break-even deduction. If your actual deductions exceed it, the old regime is better; if they fall short, the new one is.',
          'The advantage is that you no longer have to run a full tax calculation each time. Work the number out once for your income band, and thereafter simply check whether your deductions sit above or below it.',
          'This figure moves with income and also whenever rates change, so it needs recalculating once a year — but that is a far smaller task than repeating the entire comparison.',
        ],
      },
      {
        hHi: 'प्रोफ़ाइल के अनुसार एक सरल निर्णय-वृक्ष',
        hEn: 'A simple decision tree by profile',
        pHi: [
          'हर किसी की स्थिति अलग होती है, फिर भी कुछ सामान्य प्रोफ़ाइल हैं जिनके लिए दिशा प्रायः स्पष्ट होती है। यह अंतिम उत्तर नहीं, केवल शुरुआती बिंदु है।',
          'युवा वेतनभोगी, कोई ऋण नहीं, कोई बड़ा बीमा नहीं, किराए के मकान में नहीं: इनके पास गिनने को अधिक कटौतियाँ नहीं होतीं, इसलिए यह प्रोफ़ाइल प्रायः नई व्यवस्था की ओर झुकती है।',
          'परिवार, गृह ऋण, स्वास्थ्य बीमा, बच्चों की फ़ीस: यहाँ कटौतियाँ आसानी से बड़ी हो जाती हैं, और यह प्रोफ़ाइल प्रायः पुरानी व्यवस्था की ओर झुकती है — विशेषकर ऋण के शुरुआती वर्षों में।',
          'किराए के मकान में रहने वाला वेतनभोगी जिसे किराए से जुड़ी छूट मिलती है: यह श्रेणी बीच में है और यहाँ वास्तविक गणना सबसे अधिक ज़रूरी है, क्योंकि किराए की राशि शहर के हिसाब से बहुत बदलती है।',
          'व्यवसाय या पेशे से आय: यहाँ नियम अलग हैं और चुनाव बदलने की स्वतंत्रता सीमित है, इसलिए यह वह प्रोफ़ाइल है जिसे सामान्य सलाह के बजाय व्यक्तिगत सलाह चाहिए।',
        ],
        pEn: [
          'Everybody\'s position differs, and some common profiles nevertheless point in a fairly clear direction. This is a starting point rather than a final answer.',
          'A young salaried person with no loan, no large insurance and not paying rent: there are not many deductions to count, so this profile usually leans towards the new regime.',
          'A family with a home loan, health insurance and school fees: deductions add up quickly here, and this profile usually leans towards the old regime, particularly in the early years of the loan.',
          'A salaried person living in rented accommodation and eligible for rent-related relief: this sits in the middle and is where an actual calculation matters most, because rent varies enormously between cities.',
          'Business or professional income: the rules differ here and the freedom to switch is limited, so this is the profile that needs individual advice rather than general guidance.',
        ],
      },
      {
        hHi: 'नियोक्ता को दी गई घोषणा और असली स्थिति',
        hEn: 'The declaration given to an employer versus the real position',
        pHi: [
          'वेतनभोगी लोगों के लिए एक व्यावहारिक उलझन यह है कि घोषणा वर्ष की शुरुआत में देनी होती है, जब बहुत कुछ अभी हुआ ही नहीं होता।',
          'इसका परिणाम यह होता है कि साल भर TDS एक व्यवस्था के अनुसार कटता है, और रिटर्न भरते समय पता चलता है कि दूसरी व्यवस्था बेहतर थी। यह कोई आपदा नहीं है — रिटर्न में सही व्यवस्था चुनी जा सकती है और अंतर वापसी के रूप में मिल जाता है।',
          'पर इसमें एक असुविधा है: वह पैसा साल भर आपके पास नहीं रहता। इसलिए शुरुआत में की गई घोषणा जितनी सटीक होगी, नक़दी का प्रवाह उतना ही बेहतर रहेगा।',
          'इसका व्यावहारिक हल यह है कि घोषणा भरते समय केवल वे कटौतियाँ लिखिए जिनके बारे में आप निश्चित हैं। बाद में यदि कोई और कटौती जुड़ जाए, तो नियोक्ता को बीच वर्ष में सूचित किया जा सकता है, और अधिकांश नियोक्ता यह अनुमति देते हैं।',
        ],
        pEn: [
          'A practical difficulty for salaried people is that the declaration has to be given at the start of the year, when much of what it covers has not happened yet.',
          'The result is that TDS is deducted all year under one regime, and at filing time it turns out the other one was better. This is not a disaster — the correct regime can be chosen in the return and the difference comes back as a refund.',
          'There is an inconvenience in it though: that money is not with you during the year. So the more accurate the declaration made at the start, the better the cash flow across the year.',
          'The practical fix is to declare only those deductions you are certain about. If something else is added later, the employer can be informed mid-year, and most employers allow this.',
        ],
      },
      {
        hHi: 'जब दोनों व्यवस्थाओं का अंतर बहुत छोटा हो',
        hEn: 'When the difference between the two is very small',
        pHi: [
          'कभी-कभी पूरी गणना के बाद अंतर कुछ हज़ार रुपये का ही निकलता है, और तब यह प्रश्न उठता है कि इतनी मेहनत का क्या अर्थ है।',
          'ऐसी स्थिति में एक अतिरिक्त कारक देखा जा सकता है जो पैसों में नहीं गिना जाता: सरलता। नई व्यवस्था में प्रमाण जुटाने, रसीदें सँभालने और घोषणाएँ करने का काम कम है।',
          'दूसरा कारक लचीलापन है। यदि पुरानी व्यवस्था चुनने का अर्थ यह है कि आपको कर बचाने के लिए हर साल एक निश्चित राशि किसी लंबी अवधि के उत्पाद में डालनी पड़ेगी, तो वह बाध्यता अपने आप में एक लागत है।',
          'तीसरा कारक स्थिरता है। यदि अगले कुछ वर्षों में आपकी स्थिति बदलने वाली है — ऋण समाप्त होने वाला है, या कोई बड़ा ख़र्च शुरू होने वाला है — तो आज का छोटा अंतर वैसे भी टिकने वाला नहीं है।',
          'इन तीनों को जोड़कर देखने पर छोटे अंतर वाली स्थिति में निर्णय प्रायः आसान हो जाता है, और वह निर्णय अक्सर सरलता के पक्ष में जाता है।',
        ],
        pEn: [
          'Sometimes the whole calculation produces a difference of only a few thousand rupees, and then the question arises of what all the effort was for.',
          'In that situation an additional factor can be weighed which does not appear in rupees: simplicity. The new regime involves less work in gathering proofs, keeping receipts and making declarations.',
          'The second factor is flexibility. If choosing the old regime means committing a fixed amount to a long-term product every year purely to save tax, that obligation is itself a cost.',
          'The third factor is stability. If your position is going to change over the next few years — a loan ending, or a large expense beginning — then today\'s small difference will not hold anyway.',
          'Taking those three together usually makes the decision easy when the gap is small, and the decision quite often goes in favour of simplicity.',
        ],
      },
      {
        hHi: 'सामान्य ग़लतफ़हमियाँ जो हर साल दोहराई जाती हैं',
        hEn: 'The misconceptions repeated every year',
        pHi: [
          'इस विषय पर कुछ धारणाएँ इतनी बार दोहराई जाती हैं कि वे तथ्य लगने लगती हैं। उन्हें अलग से स्पष्ट कर देना उपयोगी है।',
          'पहली: "नई व्यवस्था सबके लिए बेहतर है क्योंकि दरें कम हैं।" दरें कम हैं और कटौतियाँ भी कम हैं, इसलिए यह तुलना अधूरी है। कुल कर मायने रखता है, दर नहीं।',
          'दूसरी: "पुरानी व्यवस्था हमेशा बेहतर है अगर गृह ऋण हो।" यह प्रायः सच होता है पर हमेशा नहीं, क्योंकि यह ऋण की उम्र, ब्याज की राशि और आय के स्तर पर निर्भर करता है।',
          'तीसरी: "एक बार चुन लिया तो हमेशा के लिए।" वेतनभोगी व्यक्ति के लिए यह ग़लत है, और यह ग़लतफ़हमी लोगों को अनावश्यक रूप से चिंतित करती है।',
          'चौथी: "नई व्यवस्था में कोई राहत नहीं मिलती।" कुछ राहतें दोनों में लागू रहती हैं, और उन्हें छोड़ देना गणना को ग़लत कर देता है। इसीलिए अपनी पूरी सूची बनाकर देखना आवश्यक है।',
        ],
        pEn: [
          'A few beliefs on this subject are repeated so often that they start to sound like facts. They are worth clearing up separately.',
          'First: "the new regime is better for everybody because the rates are lower." The rates are lower and so are the deductions, which makes that comparison incomplete. Total tax is what matters, not the rate.',
          'Second: "the old regime is always better if there is a home loan." That is often true but not always, because it depends on the age of the loan, the amount of interest and the level of income.',
          'Third: "once chosen, it is fixed forever." For a salaried person that is wrong, and the misconception causes unnecessary anxiety.',
          'Fourth: "nothing at all is allowed under the new regime." Some reliefs apply under both, and leaving them out makes the calculation wrong. This is why building your own complete list is necessary.',
        ],
      },
      {
        hHi: 'जब निश्चित न हो पाएँ',
        hEn: 'When you cannot be certain',
        pHi: [
          'कुछ स्थितियाँ ऐसी होती हैं जिनमें ईमानदार उत्तर यही है कि अभी तय नहीं किया जा सकता, और यह मान लेना कमज़ोरी नहीं है।',
          'सबसे आम ऐसी स्थिति वह है जब वर्ष के बीच में कोई बड़ा बदलाव आने वाला हो — नई नौकरी, घर की ख़रीद, विवाह, या आय में बड़ा परिवर्तन। ऐसे वर्ष में शुरुआत में की गई कोई भी गणना अनुमान ही रहेगी।',
          'ऐसी स्थिति में व्यावहारिक रास्ता यह है: नियोक्ता को वह विकल्प बताइए जो आज की स्थिति में ठीक बैठता है, पूरे वर्ष के दस्तावेज़ सँभालिए, और अंतिम निर्णय रिटर्न भरते समय लीजिए, जब सारे आँकड़े सामने हों।',
          'और यदि राशि बड़ी है या स्थिति उलझी हुई है, तो एक बार किसी योग्य कर सलाहकार से पूछ लेना सबसे सस्ता निर्णय होता है। एक परामर्श का शुल्क प्रायः उस अंतर से बहुत कम होता है जो एक ग़लत चुनाव पैदा कर देता है।',
        ],
        pEn: [
          'Some situations genuinely cannot be settled in advance, and accepting that is not a weakness.',
          'The most common of these is a year in which something large is going to change — a new job, buying a house, a marriage, or a significant change in income. In such a year any calculation made at the start remains an estimate.',
          'The practical route then is: tell your employer the option that fits today\'s position, keep documentation across the whole year, and take the final decision at filing time when all the figures are actually available.',
          'And if the amounts are large or the situation is tangled, asking a qualified tax adviser once is the cheapest decision available. The fee for a single consultation is usually far smaller than the difference a wrong choice produces.',
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
