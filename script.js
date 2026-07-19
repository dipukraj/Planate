// ==========================================================================
// 🌞 SOUR MANDAL ANVESHAK - SOLAR SYSTEM EXPLORER JAVASCRIPT
// Interactive Engine, Real-Time Data, View Switcher, Audio Narrator
// ==========================================================================

// Global State
let currentLanguage = 'hi';
let currentPlanet = 'sun';
let isPaused = false;
let animationSpeed = 1;
let soundEnabled = true;
let isSpeaking = false;
let currentActiveTab = 'overview';

// Planet Data in Hindi
const planetDataHi = {
    sun: {
        name: "सूर्य (Sun)",
        subtitle: "सौर मंडल का केंद्र और जीवनदाता",
        type: "जी-टाइप मुख्य अनुक्रम तारा (Yellow Dwarf Star)",
        distance: "0 km (0.00 AU - केंद्र)",
        diameter: "1,392,700 km",
        temperature: "5,778 K (सतह), 15,000,000 K (केंद्र)",
        speed: "220 km/s (गैलेक्सी परिक्रमा)",
        description: "सूर्य हमारे सौर मंडल का केंद्र है। यह एक विशाल चमकता हुआ तारा है जो नाभिकीय संलयन (Nuclear Fusion) से अटूट ऊर्जा उत्पन्न करता है। इसका शक्तिशाली गुरुत्वाकर्षण बल सभी 8 ग्रहों को उनकी कक्षाओं में थामे रखता है।",
        function: "सौर मंडल का गुरुत्वाकर्षण केंद्र, प्रकाश व ऊर्जा का एकमात्र स्रोत",
        rotation: "25 से 35 दिन (अक्षीय घूर्णन)",
        atmosphere: "कोरोना, क्रोमोस्फीयर और सोलर विंड",
        gravity: "274 m/s² (पृथ्वी से 28 गुना)",
        moons: "0 (सूर्य का कोई चंद्रमा नहीं)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "हाइड्रोजन (73%), हीलियम (25%), ऑक्सीजन व लोहा (2%)",
        surfaceFeatures: "सोलर स्पॉट्स, फ्लेयर्स, सोलर प्रोमिनेंसेस",
        colorReason: "नाभिकीय संलयन प्रक्रिया से उत्सर्जित तीव्र फोटॉन ऊर्जा",
        funFacts: [
            "सूर्य का द्रव्यमान पूरे सौर मंडल के कुल द्रव्यमान का 99.86% है।",
            "सूर्य से निकला प्रकाश पृथ्वी तक पहुँचने में 8 मिनट 20 सेकंड लेता है।",
            "सूर्य हर एक सेकंड में 600 मिलियन टन हाइड्रोजन को हीलियम में बदलता है।",
            "सूर्य के केंद्र का तापमान 1.5 करोड़ डिग्री सेल्सियस है।"
        ]
    },
    mercury: {
        name: "बुध (Mercury)",
        subtitle: "सूर्य का सबसे निकटतम और छोटा ग्रह",
        type: "आंतरिक चट्टानी ग्रह (Terrestrial Planet)",
        distance: "57.9 मिलियन km (0.39 AU)",
        diameter: "4,879 km",
        temperature: "430°C (दिन), -180°C (रात)",
        speed: "47.36 km/s (सबसे तेज़)",
        description: "बुध सूर्य के सबसे नजदीक स्थित ग्रह है। यह हमारे सौर मंडल का सबसे छोटा ग्रह है। वायुमंडल न होने के कारण यहाँ दिन अत्यधिक गर्म और रातें अत्यंत बर्फीली होती हैं।",
        function: "सौर मंडल का सबसे तीव्र गति से परिक्रमा करने वाला ग्रह",
        rotation: "59 दिन (घूर्णन), 88 दिन (सूर्य परिक्रमा)",
        atmosphere: "अत्यंत पतला एक्सोस्फीयर (ऑक्सीजन, सोडियम, हाइड्रोजन)",
        gravity: "3.7 m/s² (पृथ्वी का 38%)",
        moons: "0",
        discovery: "प्राचीन काल से ज्ञात (सुमेरियन युग)",
        composition: "लोहा (70% कोर), सिलिकेट चट्टानें (30%)",
        surfaceFeatures: "कैलोरिस बेसिन, असीम क्रेटर्स, स्कार्प्स",
        colorReason: "लोहे के ऑक्साइड और सिलिकेट युक्त काली चट्टानी धूल",
        funFacts: [
            "बुध केवल 88 दिनों में सूर्य का एक पूरा चक्कर लगा लेता है।",
            "बुध पर एक दिन (रात-दिन चक्र) पृथ्वी के 176 दिनों के बराबर होता है।",
            "सूर्य के इतना पास होने के बावजूद शुक्र ग्रह बुध से भी ज्यादा गर्म है।",
            "बुध के पास कोई चंद्रमा या वलय (Rings) नहीं हैं।"
        ]
    },
    venus: {
        name: "शुक्र (Venus)",
        subtitle: "सौर मंडल का सबसे गर्म ग्रह & पृथ्वी की बहन",
        type: "आंतरिक चट्टानी ग्रह (Terrestrial Planet)",
        distance: "108.2 मिलियन km (0.72 AU)",
        diameter: "12,104 km",
        temperature: "464°C (सतत औसत)",
        speed: "35.02 km/s",
        description: "शुक्र को 'सुबह या शाम का तारा' (Morning/Evening Star) भी कहा जाता है। घने कार्बन डाइऑक्साइड के बादलों के कारण यहाँ भयंकर ग्रीनहाउस प्रभाव होता है, जिससे यह बुध से भी अधिक गर्म है।",
        function: "तीव्र ग्रीनहाउस प्रभाव का ज्वलंत उदाहरण",
        rotation: "243 दिन (उल्टा घूर्णन), 225 दिन (सूर्य परिक्रमा)",
        atmosphere: "कार्बन डाइऑक्साइड (96.5%), सल्फ्यूरिक एसिड के बादल",
        gravity: "8.87 m/s² (पृथ्वी का 91%)",
        moons: "0",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "सिलिकेट्स, बेसाल्टिक लावा चट्टानें",
        surfaceFeatures: "मैक्सवेल मॉन्स पर्वत, हज़ारों सक्रिय ज्वालामुखी",
        colorReason: "सल्फ्यूरिक एसिड के घने बादलों द्वारा सूर्य प्रकाश का परावर्तन",
        funFacts: [
            "शुक्र अपनी धुरी पर पूर्व से पश्चिम (उल्टा) घूमता है।",
            "शुक्र का एक दिन (243 दिन) उसके एक साल (225 दिन) से लंबा होता है!",
            "शुक्र का वायुमंडलीय दबाव पृथ्वी से 92 गुना अधिक है।",
            "आकार और द्रव्यमान में समानता के कारण इसे 'पृथ्वी का जुड़वां' कहते हैं।"
        ]
    },
    earth: {
        name: "पृथ्वी (Earth)",
        subtitle: "हमारा नीला ग्रह & जीवन का एकमात्र घर",
        type: "आंतरिक जल समृद्ध चट्टानी ग्रह",
        distance: "149.6 मिलियन km (1.00 AU)",
        diameter: "12,756 km",
        temperature: "15°C (औसत वैश्विक तापमान)",
        speed: "29.78 km/s",
        description: "पृथ्वी संपूर्ण ब्रह्मांड में जीवन को आश्रय देने वाला एकमात्र ज्ञात ग्रह है। यहाँ तरल जल, ऑक्सीजन समृद्ध वायुमंडल और एक शक्तिशाली चुंबकीय क्षेत्र (Magnetic Field) मौजूद है।",
        function: "जैव विविधता और जीवन का आधार",
        rotation: "23 घंटे 56 मिनट (घूर्णन), 365.25 दिन (सूर्य परिक्रमा)",
        atmosphere: "नाइट्रोजन (78%), ऑक्सीजन (21%), आर्गन (0.9%)",
        gravity: "9.81 m/s² (मानक गुरुत्वाकर्षण)",
        moons: "1 (चंद्रमा / Luna)",
        discovery: "मानव सभ्यता की जननी",
        composition: "लोहा (32%), ऑक्सीजन (30%), सिलिकॉन (15%), मैग्नीशियम (13%)",
        surfaceFeatures: "महासागर (71%), महाद्वीप, पर्वत, टेक्टोनिक प्लेट्स",
        colorReason: "विशाल महासागरों द्वारा नीले प्रकाश का बिखरना और हरी वनस्पति",
        funFacts: [
            "पृथ्वी की सतह का 71% हिस्सा जल से ढका हुआ है।",
            "पृथ्वी सूर्य की परिक्रमा 107,000 km/h की अविश्वसनीय गति से करती है।",
            "पृथ्वी का कोर (Core) सूर्य की सतह जितना गर्म (5500°C) है।",
            "पृथ्वी का ओजोन परत हमें सूर्य की हानिकारक UV किरणों से बचाता है।"
        ]
    },
    mars: {
        name: "मंगल (Mars)",
        subtitle: "लाल ग्रह & मानव अन्वेषण का भविष्य",
        type: "आंतरिक चट्टानी ग्रह",
        distance: "227.9 मिलियन km (1.52 AU)",
        diameter: "6,792 km",
        temperature: "-65°C (औसत)",
        speed: "24.07 km/s",
        description: "मंगल को 'लाल ग्रह' कहा जाता है क्योंकि इसकी मिट्टी में प्रचुर मात्रा में लोहे का ऑक्साइड (जंग) मौजूद है। वैज्ञानिकों का मानना है कि प्राचीन काल में यहाँ नदियाँ और महासागर बहते थे।",
        function: "भावी मानव बस्तियों और जीवन की खोज का प्रमुख केंद्र",
        rotation: "24 घंटे 37 मिनट (घूर्णन), 687 दिन (सूर्य परिक्रमा)",
        atmosphere: "कार्बन डाइऑक्साइड (95%), नाइट्रोजन (2.6%), आर्गन (1.9%)",
        gravity: "3.71 m/s² (पृथ्वी का 38%)",
        moons: "2 (फोबोस और डीमोस)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "बेसाल्टिक चट्टानें, आयरन ऑक्साइड धूल",
        surfaceFeatures: "ओलंपस मॉन्स (सबसे ऊंचा ज्वालामुखी), वैलेस मैरिनेरिस कैन्यन",
        colorReason: "सतही धूल और चट्टानों में आयरन ऑक्साइड (लोहे की जंग)",
        funFacts: [
            "मंगल पर स्थित 'ओलंपस मॉन्स' माउंट एवरेस्ट से 3 गुना ऊंचा (21.9 km) है।",
            "मंगल पर विशालकाय धूल भरे तूफान महीनों तक पूरे ग्रह को ढके रखते हैं।",
            "मंगल के दोनों ध्रुवों पर जमी हुई बर्फ और ड्राई आइस मौजूद है।",
            "भारत का 'मंगलयान' (MOM) पहले ही प्रयास में मंगल पर पहुँचने वाला इतिहास बना चुका है।"
        ]
    },
    jupiter: {
        name: "बृहस्पति (Jupiter)",
        subtitle: "सौर मंडल का दानव & सुरक्षा कवच",
        type: "बाहरी गैस दानव (Gas Giant)",
        distance: "778.6 मिलियन km (5.20 AU)",
        diameter: "142,984 km",
        temperature: "-110°C (बादल स्तर)",
        speed: "13.07 km/s",
        description: "बृहस्पति सौर मंडल का सबसे बड़ा ग्रह है। यह इतना विशाल है कि इसमें बाकी सभी ग्रह समा सकते हैं। इसका शक्तिशाली गुरुत्वाकर्षण हानिकारक उल्कापिंडों से पृथ्वी की रक्षा करता है।",
        function: "सौर मंडल का रक्षक व गुरुत्वाकर्षण संतुलनकर्ता",
        rotation: "9 घंटे 55 मिनट (सबसे तेज़ घूर्णन), 11.86 वर्ष (परिक्रमा)",
        atmosphere: "हाइड्रोजन (90%), हीलियम (10%)",
        gravity: "24.79 m/s² (पृथ्वी का 2.5 गुना)",
        moons: "95 (ज्ञानचंद्रमा - गेनीमेड, यूरोपा, कैलिस्टो, इओ)",
        discovery: "प्राचीन काल से ज्ञात (गैलीलियो द्वारा 1610 में चंद्रमा खोजे गए)",
        composition: "तरल व गैसीय हाइड्रोजन और हीलियम",
        surfaceFeatures: "ग्रेट रेड स्पॉट (350+ वर्ष पुराना तूफान), अमोनिया क्लाउड बैंड्स",
        colorReason: "अमोनिया क्रिस्टल, फास्फोरस व सल्फर यौगिकों के तूफान",
        funFacts: [
            "बृहस्पति का 'ग्रेट रेड स्पॉट' एक ऐसा तूफान है जो पृथ्वी से भी बड़ा है।",
            "बृहस्पति का चंद्रमा 'गेनीमेड' बुध ग्रह से भी बड़ा है।",
            "बृहस्पति अपनी धुरी पर सबसे तेज़ (मात्र 10 घंटे में) एक चक्कर पूरा करता है।",
            "बृहस्पति के पास भी एक धुंधला वलय (Ring System) मौजूद है।"
        ]
    },
    saturn: {
        name: "शनि (Saturn)",
        subtitle: "अद्भुत छल्लों वाला ब्रह्मांडीय रत्न",
        type: "बाहरी गैस दानव (Gas Giant)",
        distance: "1.43 बिलियन km (9.54 AU)",
        diameter: "120,536 km",
        temperature: "-140°C",
        speed: "9.68 km/s",
        description: "शनि अपने भव्य और विशाल वलयों (Rings) के लिए पूरे ब्रह्मांड में प्रसिद्ध है। ये छल्ले अरबों बर्फ के टुकड़ों, धूल और चट्टानों से मिलकर बने हैं जो सूर्य के प्रकाश में चमकते हैं।",
        function: "सौर मंडल का सबसे मनोरम खगोलीय पिंड",
        rotation: "10 घंटे 33 मिनट (घूर्णन), 29.45 वर्ष (सूर्य परिक्रमा)",
        atmosphere: "हाइड्रोजन (96%), हीलियम (3%), मीथेन",
        gravity: "10.44 m/s² (पृथ्वी के लगभग समान)",
        moons: "146 (सबसे अधिक चंद्रमा, उदा. टाइटन, एनसेलाडस)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "हाइड्रोजन, हीलियम, बर्फ कोर",
        surfaceFeatures: "शानदार 3D वलय प्रणाली, उत्तरी ध्रुव पर षट्कोणीय तूफान (Hexagon)",
        colorReason: "अमोनिया बर्फ के बादलों द्वारा पीला-सुनहरा परावर्तन",
        funFacts: [
            "शनि पानी से भी हल्का है - यदि इसे विशाल समुद्र में रखा जाए तो यह तैरेगा!",
            "शनि के चंद्रमा 'टाइटन' पर पृथ्वी की तरह घना वायुमंडल और मीथेन की नदियाँ हैं।",
            "शनि के वलय 282,000 km चौड़े हैं लेकिन इनकी मोटाई मात्र 10 मीटर है।",
            "शनि के पास सौर मंडल में सबसे ज्यादा (146) मान्यता प्राप्त चंद्रमा हैं।"
        ]
    },
    uranus: {
        name: "अरुण (Uranus)",
        subtitle: "लेटा हुआ बर्फ़ीला दानव (Ice Giant)",
        type: "बाहरी बर्फ़ीला दानव (Ice Giant)",
        distance: "2.87 बिलियन km (19.2 AU)",
        diameter: "51,118 km",
        temperature: "-195°C (न्यूनतम -224°C)",
        speed: "6.80 km/s",
        description: "अरुण सौर मंडल का तीसरा सबसे बड़ा ग्रह है। यह अपनी धुरी पर 98 डिग्री तक झुका हुआ है, जिससे लगता है कि यह अपनी कक्षा में लुढ़कता हुआ घूम रहा है। यहाँ अत्यधिक ठंड है।",
        function: "अद्वितीय अक्षीय झुकाव व सौर मंडल का सबसे ठंडा वातावरण",
        rotation: "17 घंटे 14 मिनट (उल्टा घूर्णन), 84 वर्ष (सूर्य परिक्रमा)",
        atmosphere: "हाइड्रोजन (83%), हीलियम (15%), मीथेन (2%)",
        gravity: "8.69 m/s² (पृथ्वी का 89%)",
        moons: "27 (उदा. मिरांडा, एरियल, टाइटेनिया)",
        discovery: "1781 में सर विलियम हर्शेल द्वारा दूरबीन से",
        composition: "जल, मीथेन और अमोनिया की बर्फ तथा चट्टानी कोर",
        surfaceFeatures: "धुंधले लंबवत वलय, हल्की वायुमंडलीय पट्टियां",
        colorReason: "वायुमंडल में मीथेन गैस लाल प्रकाश अवशोषित कर नीला-हरा रंग बिखेरती है",
        funFacts: [
            "अत्यधिक झुकाव के कारण अरुण के ध्रुवों पर 42 साल तक लगातार दिन और 42 साल रात रहती है।",
            "अरुण का वायुमंडल सौर मंडल का सबसे ठंडा वातावरण (-224°C) मापा गया है।",
            "यह आधुनिक इतिहास में टेलीस्कोप से खोजा जाने वाला पहला ग्रह था।",
            "अरुण शुक्र की तरह ही पूर्व से पश्चिम दिशा में उल्टा घूमता है।"
        ]
    },
    neptune: {
        name: "वरुण (Neptune)",
        subtitle: "अंतिम सीमा & तूफानी नीला ग्रह",
        type: "बाहरी बर्फ़ीला दानव (Ice Giant)",
        distance: "4.50 बिलियन km (30.1 AU)",
        diameter: "49,528 km",
        temperature: "-200°C",
        speed: "5.43 km/s",
        description: "वरुण सूर्य से सबसे दूर स्थित अंतिम अधिकारिक ग्रह है। यह एक गहरा नीला बर्फ़ीला दानव है जहाँ सौर मंडल की सबसे तीव्र हवाएं (2100 km/h) चलती हैं।",
        function: "सौर मंडल की बाहरी सीमा का प्रहरी",
        rotation: "16 घंटे 6 मिनट (घूर्णन), 164.8 वर्ष (सूर्य परिक्रमा)",
        atmosphere: "हाइड्रोजन (80%), हीलियम (19%), मीथेन (1%)",
        gravity: "11.15 m/s² (पृथ्वी का 1.14 गुना)",
        moons: "14 (उदा. ट्राइटन - जो उल्टा घूमता है)",
        discovery: "1846 में गणितीय गणना द्वारा (अर्बन ले वेरिए व जोहान गाले)",
        composition: "भारी जल, अमोनिया, मीथेन बर्फ व धातु कोर",
        surfaceFeatures: "ग्रेट डार्क स्पॉट (विशाल तूफान), सफेद मीथेन के बादल",
        colorReason: "सघन मीथेन और अज्ञात वायुमंडलीय घटकों द्वारा गहरा शाही नीला रंग",
        funFacts: [
            "वरुण पर चलने वाली हवाओं की गति 2,100 km/h है - जो ध्वनि की गति से भी तेज है!",
            "1846 में खोज के बाद वरुण ने 2011 में सूर्य का अपना पहला एक चक्कर पूरा किया।",
            "वरुण का चंद्रमा 'ट्राइटन' बेहद ठंडा है और उस पर नाइट्रोजन के गीज़र उबलते हैं।",
            "वरुण को दूरबीन से देखने से पहले गणितीय गणनाओं से खोजा गया था।"
        ]
    },
    moon: {
        name: "चंद्रमा (Moon)",
        subtitle: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह",
        type: "प्राकृतिक उपग्रह (Natural Satellite)",
        distance: "384,400 km (पृथ्वी से)",
        diameter: "3,474 km",
        temperature: "120°C (दिन), -130°C (रात)",
        speed: "1.02 km/s (पृथ्वी परिक्रमा)",
        description: "चंद्रमा पृथ्वी का निकटतम पड़ोसी और एकमात्र प्राकृतिक उपग्रह है। इसका गुरुत्वाकर्षण बल पृथ्वी पर ज्वार-भाटा (Tides) उत्पन्न करता है और हमारी धुरी को स्थिर रखता है।",
        function: "समुद्री ज्वार-भाटा का नियंत्रण & पृथ्वी की धुरी का स्थायित्व",
        rotation: "27.3 दिन (टाइडली लॉक्ड - हमेशा एक ही चेहरा दिखता है)",
        atmosphere: "नगण्य एक्सोस्फीयर",
        gravity: "1.62 m/s² (पृथ्वी का 1/6 भाग)",
        moons: "0",
        discovery: "प्राचीन काल से मानव द्वारा दृश्य",
        composition: "सिलिकेट चट्टानें, बेसाल्ट, आग्नेय शैल",
        surfaceFeatures: "विशाल क्रेटर्स, मैरिया (काले मैदान), हाइलैंड्स",
        colorReason: "सिलिकेट चट्टानी धूल और सौर विकिरण का प्रभाव",
        funFacts: [
            "चंद्रमा टाइडली लॉक्ड है, इसलिए पृथ्वी से इसका हमेशा 59% हिस्सा ही दिखता है।",
            "चंद्रमा पर 12 इंसानों ने कदम रखा है, सबसे पहले नील आर्मस्ट्रांग (1969)।",
            "चंद्रमा हर साल पृथ्वी से 3.8 सेमी दूर खिसक रहा है।",
            "चंद्रमा पर हवा और पानी न होने के कारण एस्ट्रोनॉट्स के पैरों के निशान करोड़ों साल तक रहेंगे।"
        ]
    }
};

// English Planet Data
const planetDataEn = {
    sun: {
        name: "Sun",
        subtitle: "Center of Solar System & Energy Source",
        type: "G-Type Main-Sequence Star (Yellow Dwarf)",
        distance: "0 km (0.00 AU - Center)",
        diameter: "1,392,700 km",
        temperature: "5,778 K (Surface), 15,000,000 K (Core)",
        speed: "220 km/s (Galactic Orbit)",
        description: "The Sun is the luminous heart of our solar system. It generates colossal energy via nuclear fusion, holding all 8 planets in stable gravitational orbits.",
        function: "Gravitational anchor and sole light/heat source",
        rotation: "25-35 Days",
        atmosphere: "Corona, Chromosphere, Solar Wind",
        gravity: "274 m/s² (28x Earth's)",
        moons: "0",
        discovery: "Known since antiquity",
        composition: "Hydrogen (73%), Helium (25%), Oxygen & Iron (2%)",
        surfaceFeatures: "Sunspots, Solar Flares, Prominences",
        colorReason: "High energy photon emissions from nuclear fusion",
        funFacts: [
            "The Sun contains 99.86% of all mass in the Solar System.",
            "Sunlight takes 8 minutes and 20 seconds to reach Earth.",
            "It converts 600 million tons of hydrogen into helium every second.",
            "Core temperature reaches an astounding 15 million °C."
        ]
    },
    mercury: {
        name: "Mercury",
        subtitle: "Innermost & Smallest Planet",
        type: "Terrestrial Planet",
        distance: "57.9 Million km (0.39 AU)",
        diameter: "4,879 km",
        temperature: "430°C (Day), -180°C (Night)",
        speed: "47.36 km/s",
        description: "Mercury is the closest planet to the Sun and the smallest in our solar system. Lacking an atmosphere, it endures extreme temperature swings.",
        function: "Fastest revolving planetary body",
        rotation: "59 Days (Rotation), 88 Days (Orbit)",
        atmosphere: "Thin exosphere (Oxygen, Sodium)",
        gravity: "3.7 m/s² (38% of Earth's)",
        moons: "0",
        discovery: "Known since ancient times",
        composition: "Iron core (70%), Silicate crust (30%)",
        surfaceFeatures: "Caloris Basin, Impact Craters, Scarps",
        colorReason: "Dark silicate rock and iron dust",
        funFacts: [
            "Mercury orbits the Sun in just 88 Earth days.",
            "A single solar day on Mercury lasts 176 Earth days.",
            "Despite being closest to the Sun, Venus is hotter than Mercury.",
            "Mercury has zero moons and zero rings."
        ]
    },
    venus: {
        name: "Venus",
        subtitle: "Hottest Planet & Earth's Sister",
        type: "Terrestrial Planet",
        distance: "108.2 Million km (0.72 AU)",
        diameter: "12,104 km",
        temperature: "464°C (Average)",
        speed: "35.02 km/s",
        description: "Venus is shrouded in dense carbon dioxide clouds triggering a runaway greenhouse effect, making it hotter than Mercury.",
        function: "Extreme greenhouse environment prototype",
        rotation: "243 Days (Retrograde), 225 Days (Orbit)",
        atmosphere: "96.5% CO2, Sulfuric Acid clouds",
        gravity: "8.87 m/s² (91% of Earth's)",
        moons: "0",
        discovery: "Known since antiquity",
        composition: "Silicates, Basaltic volcanic rock",
        surfaceFeatures: "Maxwell Montes, Active Volcanoes",
        colorReason: "Reflective sulfuric acid cloud deck",
        funFacts: [
            "Venus rotates backwards (East to West).",
            "A day on Venus is longer than its entire year!",
            "Atmospheric pressure is 92 times greater than Earth's.",
            "Often called Earth's twin due to similar size and mass."
        ]
    },
    earth: {
        name: "Earth",
        subtitle: "Our Home & Cradle of Life",
        type: "Terrestrial Ocean Planet",
        distance: "149.6 Million km (1.00 AU)",
        diameter: "12,756 km",
        temperature: "15°C (Average)",
        speed: "29.78 km/s",
        description: "Earth is the only known planet harboring life, liquid oceans, protective atmosphere, and a strong magnetosphere.",
        function: "Haven for biological life & biodiversity",
        rotation: "23h 56m (Rotation), 365.25 Days (Orbit)",
        atmosphere: "78% Nitrogen, 21% Oxygen, 0.9% Argon",
        gravity: "9.81 m/s²",
        moons: "1 (The Moon)",
        discovery: "Cradle of Humanity",
        composition: "Iron (32%), Oxygen (30%), Silicon (15%)",
        surfaceFeatures: "71% Oceans, Continents, Plate Tectonics",
        colorReason: "Rayleigh scattering by oceans and atmosphere",
        funFacts: [
            "71% of Earth's surface is covered with liquid water.",
            "Earth zooms around the Sun at 107,000 km/h.",
            "Earth's inner core is as hot as the surface of the Sun.",
            "The ozone layer shields all life from cosmic UV rays."
        ]
    },
    mars: {
        name: "Mars",
        subtitle: "The Red Planet & Future Frontier",
        type: "Terrestrial Planet",
        distance: "227.9 Million km (1.52 AU)",
        diameter: "6,792 km",
        temperature: "-65°C (Average)",
        speed: "24.07 km/s",
        description: "Mars appears red due to iron oxide dust. It features giant volcanoes, deep canyons, and ancient dried riverbeds.",
        function: "Primary candidate for human interplanetary colonization",
        rotation: "24h 37m (Rotation), 687 Days (Orbit)",
        atmosphere: "95% CO2, Nitrogen, Argon",
        gravity: "3.71 m/s² (38% of Earth's)",
        moons: "2 (Phobos & Deimos)",
        discovery: "Known since antiquity",
        composition: "Basalt rock, Iron Oxide dust",
        surfaceFeatures: "Olympus Mons, Valles Marineris",
        colorReason: "Widespread iron oxide (rust) on surface rocks",
        funFacts: [
            "Olympus Mons on Mars is 3x taller than Mount Everest.",
            "Global dust storms can engulf the entire planet for months.",
            "Contains polar ice caps made of water ice and dry ice.",
            "India's Mangalyaan reached Mars on its very first attempt."
        ]
    },
    jupiter: {
        name: "Jupiter",
        subtitle: "King of Planets & Shield of Earth",
        type: "Gas Giant",
        distance: "778.6 Million km (5.20 AU)",
        diameter: "142,984 km",
        temperature: "-110°C",
        speed: "13.07 km/s",
        description: "Jupiter is the largest planet in our solar system. Its massive gravity acts as a cosmic shield, sweeping away asteroids.",
        function: "Gravitational protector of the inner solar system",
        rotation: "9h 55m (Fastest rotation), 11.86 Years (Orbit)",
        atmosphere: "90% Hydrogen, 10% Helium",
        gravity: "24.79 m/s² (2.5x Earth's)",
        moons: "95 (Ganymede, Europa, Callisto, Io)",
        discovery: "Known since antiquity (Galilean moons 1610)",
        composition: "Liquid & gaseous Hydrogen/Helium",
        surfaceFeatures: "Great Red Spot, Cloud Belts",
        colorReason: "Ammonia crystals and sulfur compounds",
        funFacts: [
            "The Great Red Spot is a storm larger than Earth.",
            "Jupiter's moon Ganymede is larger than Mercury.",
            "Has the fastest rotation of any planet (under 10 hours).",
            "Faint dust rings also surround Jupiter."
        ]
    },
    saturn: {
        name: "Saturn",
        subtitle: "Jewel of the Solar System",
        type: "Gas Giant",
        distance: "1.43 Billion km (9.54 AU)",
        diameter: "120,536 km",
        temperature: "-140°C",
        speed: "9.68 km/s",
        description: "Saturn is famed for its spectacular ring system composed of billions of ice particles, dust, and rock fragments.",
        function: "Most visually stunning planetary ring system",
        rotation: "10h 33m (Rotation), 29.45 Years (Orbit)",
        atmosphere: "96% Hydrogen, 3% Helium",
        gravity: "10.44 m/s²",
        moons: "146 (Titan, Enceladus)",
        discovery: "Known since antiquity",
        composition: "Hydrogen, Helium, Ice core",
        surfaceFeatures: "Majestic 3D Rings, Hexagonal North Pole storm",
        colorReason: "Ammonia ice clouds reflecting sunlight",
        funFacts: [
            "Saturn is less dense than water; it would float in a giant ocean!",
            "Titan has liquid methane lakes and a thick atmosphere.",
            "Rings span 282,000 km across but are only ~10 meters thick.",
            "Boasts the highest count of recognized moons (146)."
        ]
    },
    uranus: {
        name: "Uranus",
        subtitle: "Tilted Ice Giant",
        type: "Ice Giant",
        distance: "2.87 Billion km (19.2 AU)",
        diameter: "51,118 km",
        temperature: "-195°C",
        speed: "6.80 km/s",
        description: "Uranus rotates nearly on its side with a 98-degree axial tilt, causing dramatic 42-year long seasons.",
        function: "Extreme axial tilt and coldest planetary atmosphere",
        rotation: "17h 14m (Retrograde), 84 Years (Orbit)",
        atmosphere: "83% Hydrogen, 15% Helium, 2% Methane",
        gravity: "8.69 m/s² (89% of Earth's)",
        moons: "27 (Miranda, Titania)",
        discovery: "1781 by Sir William Herschel",
        composition: "Water, Methane & Ammonia ice",
        surfaceFeatures: "Faint vertical rings, Pale cloud bands",
        colorReason: "Methane gas absorbing red light, reflecting cyan",
        funFacts: [
            "Each pole gets 42 years of continuous sunlight and 42 years of darkness.",
            "Holds the record for coldest temperature in solar system (-224°C).",
            "First planet discovered using a telescope.",
            "Rotates backwards like Venus."
        ]
    },
    neptune: {
        name: "Neptune",
        subtitle: "Outer Guardian & Windy Azure Giant",
        type: "Ice Giant",
        distance: "4.50 Billion km (30.1 AU)",
        diameter: "49,528 km",
        temperature: "-200°C",
        speed: "5.43 km/s",
        description: "Neptune is the outermost official planet. It is a deep blue ice giant with supersonic winds reaching 2,100 km/h.",
        function: "Guardian of the solar system's outer planetary frontier",
        rotation: "16h 6m (Rotation), 164.8 Years (Orbit)",
        atmosphere: "80% Hydrogen, 19% Helium, 1% Methane",
        gravity: "11.15 m/s² (1.14x Earth's)",
        moons: "14 (Triton)",
        discovery: "1846 via mathematical calculations",
        composition: "Water/Ammonia ice mantle, Heavy core",
        surfaceFeatures: "Great Dark Spot, Supersonic wind belts",
        colorReason: "Dense atmospheric methane reflecting vibrant azure blue",
        funFacts: [
            "Winds on Neptune blow up to 2,100 km/h (faster than sound!).",
            "Completed its first orbit since 1846 discovery in 2011.",
            "Moon Triton orbits backwards and has active ice geysers.",
            "First planet discovered via math before being seen in a telescope."
        ]
    },
    moon: {
        name: "The Moon",
        subtitle: "Earth's Only Natural Satellite",
        type: "Natural Satellite",
        distance: "384,400 km (From Earth)",
        diameter: "3,474 km",
        temperature: "120°C (Day), -130°C (Night)",
        speed: "1.02 km/s",
        description: "The Moon stabilizes Earth's axial tilt and drives oceanic tides, providing stability for Earth's climate.",
        function: "Tidal control & Earth axial stabilization",
        rotation: "27.3 Days (Tidally Locked)",
        atmosphere: "Negligible exosphere",
        gravity: "1.62 m/s² (1/6th of Earth's)",
        moons: "0",
        discovery: "Observed since prehistoric times",
        composition: "Silicate rock, Basalt",
        surfaceFeatures: "Lunar Maria, Impact Craters",
        colorReason: "Silicate dust and solar weathering",
        funFacts: [
            "Tidally locked: we only ever see 59% of the Moon's surface from Earth.",
            "12 humans have walked on the Moon (Apollo missions).",
            "Drifting away from Earth at 3.8 cm per year.",
            "Footprints will remain preserved for millions of years due to no wind/water erosion."
        ]
    }
};

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupLanguageEvents();
    setupViewSwitcher();
    setupSearchFilter();
    setupPlanetClickEvents();
    setupHoverTooltip();
    setupTabNavigation();
    setupAudioNarrator();
    setupControlToolbar();
    populatePlanetGrid();
    selectPlanet('sun');
}

// Language Switcher Logic
function setupLanguageEvents() {
    const langBtn = document.getElementById('languageBtn');
    const langDropdown = document.getElementById('languageDropdown');
    const options = document.querySelectorAll('.language-option');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const chosenLang = opt.getAttribute('data-lang');
            setLanguage(chosenLang);
            options.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            langDropdown.classList.remove('active');
        });
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('currentLang').textContent = lang === 'hi' ? 'हिंदी' : 'English';
    document.documentElement.lang = lang;
    
    // Refresh text content for current planet
    selectPlanet(currentPlanet);
    populatePlanetGrid();
}

function getPlanetDataset() {
    return currentLanguage === 'hi' ? planetDataHi : planetDataEn;
}

// View Switcher (Orbit vs Scale vs Grid)
function setupViewSwitcher() {
    const btns = document.querySelectorAll('.view-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewMode = btn.getAttribute('data-view');
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchView(viewMode);
        });
    });
}

function switchView(viewMode) {
    const orbitContainer = document.getElementById('solarSystemContainer');
    const scaleContainer = document.getElementById('linearScaleViewContainer');
    const gridContainer = document.getElementById('planetGridViewContainer');

    orbitContainer.style.display = 'none';
    scaleContainer.style.display = 'none';
    gridContainer.style.display = 'none';

    if (viewMode === 'orbit') {
        orbitContainer.style.display = 'flex';
    } else if (viewMode === 'scale') {
        scaleContainer.style.display = 'block';
    } else if (viewMode === 'grid') {
        gridContainer.style.display = 'block';
    }
}

// Search Filter Input & Auto-Complete
function setupSearchFilter() {
    const input = document.getElementById('planetSearchInput');
    const dropdown = document.getElementById('searchResultsDropdown');
    const clearBtn = document.getElementById('clearSearchBtn');

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length > 0) {
            clearBtn.style.display = 'block';
            filterSearch(query, dropdown);
        } else {
            clearBtn.style.display = 'none';
            dropdown.style.display = 'none';
        }
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        dropdown.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-search')) {
            dropdown.style.display = 'none';
        }
    });
}

function filterSearch(query, dropdown) {
    const dataset = getPlanetDataset();
    dropdown.innerHTML = '';
    let matchesCount = 0;

    for (let key in dataset) {
        const item = dataset[key];
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.subtitle.toLowerCase().includes(query);

        if (nameMatch || descMatch) {
            matchesCount++;
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <span style="font-size:16px;">🪐</span>
                <div>
                    <strong style="color:#fff; font-size:13px;">${item.name}</strong>
                    <div style="font-size:11px; color:rgba(255,255,255,0.6);">${item.subtitle}</div>
                </div>
                <span class="planet-type-tag">${item.distance}</span>
            `;
            div.addEventListener('click', () => {
                selectPlanet(key);
                dropdown.style.display = 'none';
            });
            dropdown.appendChild(div);
        }
    }

    dropdown.style.display = matchesCount > 0 ? 'flex' : 'none';
}

// Safe Hover Helpers for Inline HTML Events
function showPlanetName(el) {
    if (el) {
        const nameEl = el.querySelector('.planet-name');
        if (nameEl) nameEl.style.opacity = '1';
    }
}
function hidePlanetName(el) {
    if (el) {
        const nameEl = el.querySelector('.planet-name');
        if (nameEl) nameEl.style.opacity = '0';
    }
}
function handlePlanetHover(el) {}
function handlePlanetLeave(el) {}

// Planet Selection Logic & HUD Update (Handles Click & Touch on All Planets)
function setupPlanetClickEvents() {
    const triggerSelect = (e) => {
        // Find closest element with data-planet attribute
        const target = e.target.closest('[data-planet]');
        if (target) {
            e.stopPropagation();
            const pKey = target.getAttribute('data-planet');
            if (pKey) {
                selectPlanet(pKey);
                playBeepSound();
            }
        }
    };

    // Attach click and touch events via delegation
    document.addEventListener('click', triggerSelect);
    document.addEventListener('touchend', (e) => {
        const target = e.target.closest('[data-planet]');
        if (target) {
            triggerSelect(e);
        }
    });

    // Info panel close button
    const closeBtn = document.getElementById('closePanelBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('infoPanel').classList.remove('active');
            stopSpeech();
        });
    }
}

function selectPlanet(planetKey) {
    if (!planetKey) return;
    currentPlanet = planetKey;
    const data = getPlanetDataset()[planetKey];
    if (!data) return;

    // Highlight selected planet visually
    document.querySelectorAll('[data-planet]').forEach(el => el.classList.remove('planet-selected'));
    document.querySelectorAll(`[data-planet="${planetKey}"]`).forEach(el => el.classList.add('planet-selected'));

    // Open Info Panel HUD
    const panel = document.getElementById('infoPanel');
    panel.classList.add('active');
    panel.scrollTop = 0;

    // Reset Tabs to Overview
    const tabs = document.querySelectorAll('.panel-tab');
    tabs.forEach(t => t.classList.remove('active'));
    const overviewTab = document.querySelector('.panel-tab[data-tab="overview"]');
    if (overviewTab) overviewTab.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const tabOverview = document.getElementById('tabOverview');
    if (tabOverview) tabOverview.classList.add('active');

    // Populate Panel Fields
    document.getElementById('planetTitle').textContent = data.name;
    document.getElementById('planetSubtitle').textContent = data.subtitle;
    document.getElementById('description').textContent = data.description;
    document.getElementById('distance').textContent = data.distance;
    document.getElementById('diameter').textContent = data.diameter;
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('gravity').textContent = data.gravity;

    document.getElementById('composition').textContent = data.composition;
    document.getElementById('atmosphere').textContent = data.atmosphere;
    document.getElementById('surfaceFeatures').textContent = data.surfaceFeatures;
    document.getElementById('colorReason').textContent = data.colorReason;

    document.getElementById('rotation').textContent = data.rotation;
    document.getElementById('moons').textContent = data.moons;
    document.getElementById('discovery').textContent = data.discovery;
    document.getElementById('function').textContent = data.function;

    // Icon
    const iconsMap = {
        sun: '🌞', mercury: '🔘', venus: '🟡', earth: '🌍',
        mars: '🔴', jupiter: '🪐', saturn: '🪐', uranus: '🌐',
        neptune: '🔵', moon: '🌙'
    };
    document.getElementById('panelPlanetIcon').textContent = iconsMap[planetKey] || '🪐';

    // Fun facts list
    const factsUl = document.getElementById('funFacts');
    factsUl.innerHTML = '';
    data.funFacts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        factsUl.appendChild(li);
    });

    stopSpeech();
}

// Live Distance Hover Card Tooltip
function setupHoverTooltip() {
    const card = document.getElementById('planetHoverCard');
    const planetEls = document.querySelectorAll('[data-planet]');

    planetEls.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const pKey = el.getAttribute('data-planet');
            const data = getPlanetDataset()[pKey];
            if (!data) return;

            document.getElementById('hoverPlanetName').textContent = data.name;
            document.getElementById('hoverPlanetType').textContent = data.type || 'खगोलीय पिंड';
            document.getElementById('hoverPlanetDistance').textContent = data.distance;
            document.getElementById('hoverPlanetSpeed').textContent = data.speed || 'N/A';
            document.getElementById('hoverPlanetDiameter').textContent = data.diameter;

            card.style.left = (e.clientX + 15) + 'px';
            card.style.top = (e.clientY + 15) + 'px';
            card.classList.add('active');
        });

        el.addEventListener('mouseleave', () => {
            card.classList.remove('active');
        });
    });
}

function handlePlanetHover(el) {
    // Helper function called in HTML inline
}

function handlePlanetLeave(el) {
    // Helper function called in HTML inline
}

// Tabbed Info Panel Navigation
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.panel-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const target = tab.getAttribute('data-tab');
            currentActiveTab = target;

            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            if (target === 'overview') document.getElementById('tabOverview').classList.add('active');
            else if (target === 'structure') document.getElementById('tabStructure').classList.add('active');
            else if (target === 'orbit') document.getElementById('tabOrbit').classList.add('active');
            else if (target === 'facts') document.getElementById('tabFacts').classList.add('active');
        });
    });
}

// Web Speech API (Audio Narrator)
function setupAudioNarrator() {
    const narrateBtn = document.getElementById('narrateBtn');
    narrateBtn.addEventListener('click', () => {
        if (isSpeaking) {
            stopSpeech();
        } else {
            speakCurrentPlanet();
        }
    });
}

function speakCurrentPlanet() {
    if (!('speechSynthesis' in window)) {
        alert("आपका ब्राउज़र टेक्स्ट-टू-स्पीच सपोर्ट नहीं करता है। (Speech Synthesis not supported)");
        return;
    }

    stopSpeech();

    const data = getPlanetDataset()[currentPlanet];
    if (!data) return;

    const speechText = `${data.name}। ${data.subtitle}। ${data.description} सूर्य से दूरी ${data.distance} है। व्यास ${data.diameter} है।`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
    utterance.rate = 0.95;

    const narrateBtn = document.getElementById('narrateBtn');
    const narrateBtnText = document.getElementById('narrateBtnText');

    utterance.onstart = () => {
        isSpeaking = true;
        narrateBtn.classList.add('speaking');
        narrateBtnText.textContent = currentLanguage === 'hi' ? 'रोकें (Stop)' : 'Stop';
    };

    utterance.onend = () => {
        isSpeaking = false;
        narrateBtn.classList.remove('speaking');
        narrateBtnText.textContent = currentLanguage === 'hi' ? 'सुनें (Narrate)' : 'Narrate';
    };

    utterance.onerror = () => {
        isSpeaking = false;
        narrateBtn.classList.remove('speaking');
        narrateBtnText.textContent = currentLanguage === 'hi' ? 'सुनें (Narrate)' : 'Narrate';
    };

    window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    const narrateBtn = document.getElementById('narrateBtn');
    const narrateBtnText = document.getElementById('narrateBtnText');
    if (narrateBtn) narrateBtn.classList.remove('speaking');
    if (narrateBtnText) narrateBtnText.textContent = currentLanguage === 'hi' ? 'सुनें (Narrate)' : 'Narrate';
}

// Dynamic Grid Cards Generator for View 3
function populatePlanetGrid() {
    const grid = document.getElementById('planetCardsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const dataset = getPlanetDataset();
    for (let key in dataset) {
        const p = dataset[key];
        const card = document.createElement('div');
        card.className = 'planet-card-item';
        card.setAttribute('data-planet', key);

        card.innerHTML = `
            <div class="card-planet-preview scale-${key}-visual"></div>
            <h4 class="card-planet-title">${p.name}</h4>
            <span class="card-distance-badge">📍 ${p.distance}</span>
            <p style="font-size:12px; color:rgba(255,255,255,0.7); text-align:center; margin-bottom:10px;">${p.subtitle}</p>
            <div class="card-quick-stats">
                <span>📏 ${p.diameter}</span>
                <span>🌡️ ${p.temperature.split(',')[0]}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            selectPlanet(key);
            playBeepSound();
        });

        grid.appendChild(card);
    }
}

// Toolbar Control Actions
function setupControlToolbar() {
    const playPauseBtn = document.getElementById('playPause');
    const speedUpBtn = document.getElementById('speedUp');
    const slowDownBtn = document.getElementById('slowDown');
    const resetBtn = document.getElementById('reset');
    const toggleInfoBtn = document.getElementById('toggleInfo');
    const toggleSoundBtn = document.getElementById('toggleSound');
    const showFactBtn = document.getElementById('showFact');

    playPauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        const orbits = document.querySelectorAll('.orbit, .moon-orbit');
        orbits.forEach(o => {
            o.style.animationPlayState = isPaused ? 'paused' : 'running';
        });
        playPauseBtn.innerHTML = isPaused ? 
            '<i class="fas fa-play"></i> <span>चलाएं</span>' : 
            '<i class="fas fa-pause"></i> <span>रोकें</span>';
    });

    speedUpBtn.addEventListener('click', () => {
        animationSpeed = Math.min(animationSpeed * 1.5, 5);
        updateAnimationSpeed();
    });

    slowDownBtn.addEventListener('click', () => {
        animationSpeed = Math.max(animationSpeed / 1.5, 0.2);
        updateAnimationSpeed();
    });

    resetBtn.addEventListener('click', () => {
        animationSpeed = 1;
        isPaused = false;
        const orbits = document.querySelectorAll('.orbit, .moon-orbit');
        orbits.forEach(o => {
            o.style.animationPlayState = 'running';
        });
        updateAnimationSpeed();
        selectPlanet('sun');
    });

    toggleInfoBtn.addEventListener('click', () => {
        const panel = document.getElementById('infoPanel');
        panel.classList.toggle('active');
    });

    toggleSoundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        toggleSoundBtn.innerHTML = soundEnabled ?
            '<i class="fas fa-volume-up"></i> <span>साउंड</span>' :
            '<i class="fas fa-volume-mute"></i> <span>मौन</span>';
    });

    showFactBtn.addEventListener('click', () => {
        showRandomFact();
    });
}

function updateAnimationSpeed() {
    const orbits = document.querySelectorAll('.orbit, .moon-orbit');
    orbits.forEach(o => {
        o.style.animationDuration = (parseFloat(getComputedStyle(o).animationDuration) / animationSpeed) + 's';
    });
}

function showRandomFact() {
    const dataset = getPlanetDataset();
    const keys = Object.keys(dataset);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const planet = dataset[randomKey];
    const fact = planet.funFacts[Math.floor(Math.random() * planet.funFacts.length)];
    
    alert(`💡 ${planet.name} तथ्य:\n\n${fact}`);
}

// Web Audio API Synthesizer (No external assets required)
function playBeepSound() {
    if (!soundEnabled) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 pitch
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5 pitch

        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    } catch(e) {
        // Fallback
    }
}