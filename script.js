// Planet data with detailed information in Hindi and English
const planetData = {
    sun: {
        name: "सूर्य (Sun)",
        distance: "0 km (केंद्र)",
        diameter: "1,392,700 km",
        temperature: "5,778 K (सतह), 15,000,000 K (केंद्र)",
        description: "सूर्य हमारे सौर मंडल का केंद्र है। यह एक तारा है जो नाभिकीय संलयन से ऊर्जा पैदा करता है। सूर्य से प्रकाश और गर्मी मिलती है जो पृथ्वी पर जीवन के लिए आवश्यक है। सूर्य का गुरुत्वाकर्षण सभी ग्रहों को अपनी कक्षा में रखता है।",
        function: "ऊर्जा का स्रोत, गुरुत्वाकर्षण केंद्र",
        rotation: "25-35 दिन (अक्षीय घूर्णन)",
        // नई जानकारी
        atmosphere: "कोरोना और सोलर विंड",
        gravity: "274 m/s² (पृथ्वी से 28 गुना)",
        moons: "0 (सूर्य का कोई चंद्रमा नहीं)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "हाइड्रोजन (73%), हीलियम (25%), अन्य तत्व (2%)",
        surfaceFeatures: "सोलर स्पॉट्स, फ्लेयर्स, प्रोमिनेंसेस",
        colorReason: "नाभिकीय संलयन से निकलने वाली ऊर्जा",
        funFacts: [
            "सूर्य का द्रव्यमान सौर मंडल का 99.86% है",
            "सूर्य से प्रकाश पृथ्वी तक 8 मिनट 20 सेकंड में पहुंचता है",
            "सूर्य हर सेकंड में 600 मिलियन टन हाइड्रोजन को हीलियम में बदलता है",
            "सूर्य का तापमान केंद्र में 15,000,000°C है"
        ]
    },
    mercury: {
        name: "बुध (Mercury)",
        distance: "57.9 मिलियन km (सूर्य से)",
        diameter: "4,879 km",
        temperature: "167°C (दिन), -173°C (रात)",
        description: "बुध सूर्य के सबसे नजदीक का ग्रह है। यह सबसे छोटा ग्रह है और सूर्य के चारों ओर सबसे तेज घूमता है। बुध पर वायुमंडल नहीं है, इसलिए यहाँ तापमान में बहुत अंतर है।",
        function: "सौर मंडल का सबसे तेज ग्रह",
        rotation: "59 दिन (अक्षीय घूर्णन), 88 दिन (सूर्य की परिक्रमा)",
        atmosphere: "नगण्य वायुमंडल",
        gravity: "3.7 m/s² (पृथ्वी का 38%)",
        moons: "0",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "लोहा, सिलिकेट्स",
        surfaceFeatures: "क्रेटर्स, मैरिया, स्कार्प्स",
        colorReason: "लोहे के ऑक्साइड और सिलिकेट चट्टानें",
        funFacts: [
            "बुध सबसे तेज ग्रह है - 88 दिन में सूर्य की परिक्रमा",
            "बुध पर एक दिन 176 पृथ्वी दिनों के बराबर है",
            "बुध का कोई वायुमंडल नहीं है",
            "बुध पर सबसे बड़ा क्रेटर कैलोरिस बेसिन है"
        ]
    },
    venus: {
        name: "शुक्र (Venus)",
        distance: "108.2 मिलियन km (सूर्य से)",
        diameter: "12,104 km",
        temperature: "462°C (औसत)",
        description: "शुक्र को 'सुबह का तारा' भी कहते हैं। यह सबसे गर्म ग्रह है क्योंकि इसका वायुमंडल कार्बन डाइऑक्साइड से भरा है। शुक्र पृथ्वी के आकार का है लेकिन पूरी तरह से अलग है।",
        function: "सौर मंडल का सबसे गर्म ग्रह",
        rotation: "243 दिन (अक्षीय घूर्णन), 225 दिन (सूर्य की परिक्रमा)",
        atmosphere: "कार्बन डाइऑक्साइड (96.5%), नाइट्रोजन (3.5%)",
        gravity: "8.87 m/s² (पृथ्वी का 91%)",
        moons: "0",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "सिलिकेट्स, कार्बोनेट्स",
        surfaceFeatures: "ज्वालामुखी, मैदान, पहाड़",
        colorReason: "सल्फ्यूरिक एसिड के बादल",
        funFacts: [
            "शुक्र सबसे गर्म ग्रह है - 462°C औसत तापमान",
            "शुक्र पीछे की तरफ घूमता है",
            "शुक्र पर सबसे ऊंचा पर्वत मैक्सवेल मॉन्स है",
            "शुक्र को 'पृथ्वी की बहन' कहा जाता है"
        ]
    },
    earth: {
        name: "पृथ्वी (Earth)",
        distance: "149.6 मिलियन km (सूर्य से)",
        diameter: "12,756 km",
        temperature: "15°C (औसत)",
        description: "पृथ्वी एकमात्र ज्ञात ग्रह है जहाँ जीवन है। इसमें पानी, ऑक्सीजन और सुरक्षात्मक वायुमंडल है। पृथ्वी का एक चंद्रमा है जो ज्वार-भाटा पैदा करता है।",
        function: "जीवन का घर, जल का ग्रह",
        rotation: "24 घंटे (अक्षीय घूर्णन), 365.25 दिन (सूर्य की परिक्रमा)",
        atmosphere: "नाइट्रोजन (78%), ऑक्सीजन (21%), अन्य (1%)",
        gravity: "9.81 m/s²",
        moons: "1 (चंद्रमा)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "लोहा, सिलिकेट्स, पानी",
        surfaceFeatures: "महाद्वीप, महासागर, पर्वत",
        colorReason: "पानी और वनस्पति",
        funFacts: [
            "पृथ्वी अपनी धुरी पर 1,674 km/h की गति से घूमती है",
            "पृथ्वी सूर्य की परिक्रमा 107,000 km/h की गति से करती है",
            "पृथ्वी का 71% भाग पानी से ढका है",
            "पृथ्वी एकमात्र ज्ञात ग्रह है जहाँ जीवन है"
        ]
    },
    mars: {
        name: "मंगल (Mars)",
        distance: "227.9 मिलियन km (सूर्य से)",
        diameter: "6,792 km",
        temperature: "-65°C (औसत)",
        description: "मंगल को 'लाल ग्रह' कहते हैं क्योंकि इसकी सतह लोहे के ऑक्साइड से लाल है। यहाँ पानी के निशान मिले हैं और भविष्य में मानव बस्ती बसाने की योजना है।",
        function: "मानव अन्वेषण का लक्ष्य",
        rotation: "24.6 घंटे (अक्षीय घूर्णन), 687 दिन (सूर्य की परिक्रमा)",
        atmosphere: "कार्बन डाइऑक्साइड (95%), नाइट्रोजन (2.7%)",
        gravity: "3.71 m/s² (पृथ्वी का 38%)",
        moons: "2 (फोबोस, डीमोस)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "लोहा ऑक्साइड, सिलिकेट्स",
        surfaceFeatures: "ओलंपस मॉन्स, वैलेस मैरिनेरिस, ध्रुवीय बर्फ",
        colorReason: "लोहे के ऑक्साइड (जंग)",
        funFacts: [
            "मंगल पर सबसे ऊंचा पर्वत है - ओलंपस मॉन्स (21.9 km)",
            "मंगल पर सबसे बड़ा कैन्यन वैलेस मैरिनेरिस है",
            "मंगल के दो चंद्रमा हैं - फोबोस और डीमोस",
            "मंगल पर पानी के निशान मिले हैं"
        ]
    },
    jupiter: {
        name: "बृहस्पति (Jupiter)",
        distance: "778.5 मिलियन km (सूर्य से)",
        diameter: "142,984 km",
        temperature: "-110°C",
        description: "बृहस्पति सबसे बड़ा ग्रह है। यह गैस का ग्रह है और इसमें 79 चंद्रमा हैं। बृहस्पति का गुरुत्वाकर्षण सौर मंडल को स्थिर रखने में मदद करता है।",
        function: "सौर मंडल का रक्षक, सबसे बड़ा ग्रह",
        rotation: "9.9 घंटे (अक्षीय घूर्णन), 12 वर्ष (सूर्य की परिक्रमा)",
        atmosphere: "हाइड्रोजन (90%), हीलियम (10%)",
        gravity: "24.79 m/s² (पृथ्वी का 2.5 गुना)",
        moons: "79 (ज्ञात)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "हाइड्रोजन, हीलियम, मीथेन",
        surfaceFeatures: "ग्रेट रेड स्पॉट, बैंड्स, जोन्स",
        colorReason: "अमोनिया और हाइड्रोकार्बन के बादल",
        funFacts: [
            "बृहस्पति सबसे बड़ा ग्रह है - पृथ्वी से 318 गुना बड़ा",
            "बृहस्पति के 79 चंद्रमा हैं",
            "ग्रेट रेड स्पॉट 400 साल से चल रहा तूफान है",
            "बृहस्पति का गुरुत्वाकर्षण क्षुद्रग्रहों को रोकता है"
        ]
    },
    saturn: {
        name: "शनि (Saturn)",
        distance: "1.43 बिलियन km (सूर्य से)",
        diameter: "120,536 km",
        temperature: "-140°C",
        description: "शनि अपने सुंदर वलयों के लिए प्रसिद्ध है। ये वलय बर्फ और चट्टान के टुकड़ों से बने हैं। शनि के 82 चंद्रमा हैं।",
        function: "सौर मंडल का सबसे सुंदर ग्रह",
        rotation: "10.7 घंटे (अक्षीय घूर्णन), 29.5 वर्ष (सूर्य की परिक्रमा)",
        atmosphere: "हाइड्रोजन (96%), हीलियम (3%)",
        gravity: "10.44 m/s² (पृथ्वी का 1.06 गुना)",
        moons: "82 (ज्ञात)",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "हाइड्रोजन, हीलियम, बर्फ",
        surfaceFeatures: "रिंग्स, हेक्सागोनल स्टॉर्म",
        colorReason: "अमोनिया क्रिस्टल और हाइड्रोकार्बन",
        funFacts: [
            "शनि के वलय 282,000 km तक फैले हैं",
            "शनि के 82 चंद्रमा हैं",
            "शनि का घनत्व पानी से कम है",
            "शनि के वलय बर्फ और चट्टान से बने हैं"
        ]
    },
    uranus: {
        name: "अरुण (Uranus)",
        distance: "2.87 बिलियन km (सूर्य से)",
        diameter: "51,118 km",
        temperature: "-195°C",
        description: "अरुण अपनी तरफ लेटा हुआ घूमता है। यह हाइड्रोजन और हीलियम से बना है। अरुण के 27 चंद्रमा हैं और यह नीले रंग का दिखता है।",
        function: "अपनी तरफ घूमने वाला ग्रह",
        rotation: "17 घंटे (अक्षीय घूर्णन), 84 वर्ष (सूर्य की परिक्रमा)",
        atmosphere: "हाइड्रोजन (83%), हीलियम (15%), मीथेन (2%)",
        gravity: "8.69 m/s² (पृथ्वी का 0.89 गुना)",
        moons: "27 (ज्ञात)",
        discovery: "1781 में विलियम हर्शेल",
        composition: "हाइड्रोजन, हीलियम, मीथेन",
        surfaceFeatures: "रिंग्स, बैंड्स",
        colorReason: "मीथेन गैस नीला रंग अवशोषित करती है",
        funFacts: [
            "अरुण अपनी तरफ लेटा हुआ घूमता है",
            "अरुण के 27 चंद्रमा हैं",
            "अरुण को 'आइस जायंट' कहा जाता है",
            "अरुण के रिंग्स हैं लेकिन बहुत कमजोर हैं"
        ]
    },
    neptune: {
        name: "वरुण (Neptune)",
        distance: "4.50 बिलियन km (सूर्य से)",
        diameter: "49,528 km",
        temperature: "-200°C",
        description: "वरुण सबसे दूर का ग्रह है। यहाँ तेज हवाएं चलती हैं जो 2,100 km/h तक पहुंच सकती हैं। वरुण के 14 चंद्रमा हैं।",
        function: "सौर मंडल का सबसे दूर का ग्रह",
        rotation: "16 घंटे (अक्षीय घूर्णन), 165 वर्ष (सूर्य की परिक्रमा)",
        atmosphere: "हाइड्रोजन (80%), हीलियम (19%), मीथेन (1%)",
        gravity: "11.15 m/s² (पृथ्वी का 1.14 गुना)",
        moons: "14 (ज्ञात)",
        discovery: "1846 में जोहान गाले",
        composition: "हाइड्रोजन, हीलियम, मीथेन",
        surfaceFeatures: "ग्रेट डार्क स्पॉट, बैंड्स",
        colorReason: "मीथेन गैस नीला रंग अवशोषित करती है",
        funFacts: [
            "वरुण पर सबसे तेज हवाएं चलती हैं - 2,100 km/h",
            "वरुण के 14 चंद्रमा हैं",
            "वरुण को गणित से खोजा गया था",
            "वरुण का एक वर्ष 165 पृथ्वी वर्षों के बराबर है"
        ]
    },
    moon: {
        name: "चंद्रमा (Moon)",
        distance: "384,400 km (पृथ्वी से)",
        diameter: "3,474 km",
        temperature: "127°C (दिन), -173°C (रात)",
        description: "चंद्रमा पृथ्वी का एकमात्र प्राकृतिक उपग्रह है। यह पृथ्वी पर ज्वार-भाटा पैदा करता है। चंद्रमा पर कोई वायुमंडल नहीं है।",
        function: "पृथ्वी का उपग्रह, ज्वार-भाटा का कारण",
        rotation: "27.3 दिन (पृथ्वी की परिक्रमा)",
        atmosphere: "नगण्य वायुमंडल",
        gravity: "1.62 m/s² (पृथ्वी का 16.6%)",
        moons: "0",
        discovery: "प्राचीन काल से ज्ञात",
        composition: "सिलिकेट्स, लोहा",
        surfaceFeatures: "क्रेटर्स, मैरिया, हाइलैंड्स",
        colorReason: "सिलिकेट चट्टानें और धूल",
        funFacts: [
            "चंद्रमा पृथ्वी से 384,400 km दूर है",
            "चंद्रमा पर कोई वायुमंडल नहीं है",
            "चंद्रमा पर 12 अंतरिक्ष यात्री चले हैं",
            "चंद्रमा धीरे-धीरे पृथ्वी से दूर जा रहा है"
        ]
    }
};

// English planet data
const planetDataEn = {
    sun: {
        name: "Sun",
        distance: "0 km (center)",
        diameter: "1,392,700 km",
        temperature: "5,778 K (surface), 15,000,000 K (core)",
        description: "The Sun is the center of our solar system. It is a star that produces energy through nuclear fusion. Light and heat from the Sun are essential for life on Earth. The Sun's gravity keeps all planets in their orbits.",
        function: "Energy source, gravitational center",
        rotation: "25-35 days (axial rotation)",
        atmosphere: "Corona and solar wind",
        gravity: "274 m/s² (28 times Earth's)",
        moons: "0 (Sun has no moons)",
        discovery: "Known since ancient times",
        composition: "Hydrogen (73%), Helium (25%), Other elements (2%)",
        surfaceFeatures: "Solar spots, flares, prominences",
        colorReason: "Energy from nuclear fusion",
        funFacts: [
            "The Sun's mass is 99.86% of the solar system",
            "Light from the Sun takes 8 minutes 20 seconds to reach Earth",
            "The Sun converts 600 million tons of hydrogen to helium every second",
            "The Sun's core temperature is 15,000,000°C"
        ]
    },
    mercury: {
        name: "Mercury",
        distance: "57.9 million km (from Sun)",
        diameter: "4,879 km",
        temperature: "167°C (day), -173°C (night)",
        description: "Mercury is the closest planet to the Sun. It is the smallest planet and orbits the Sun the fastest. Mercury has no atmosphere, so there is a huge temperature difference here.",
        function: "Fastest planet in the solar system",
        rotation: "59 days (axial rotation), 88 days (solar orbit)",
        atmosphere: "Negligible atmosphere",
        gravity: "3.7 m/s² (38% of Earth's)",
        moons: "0",
        discovery: "Known since ancient times",
        composition: "Iron, silicates",
        surfaceFeatures: "Craters, maria, scarps",
        colorReason: "Iron oxides and silicate rocks",
        funFacts: [
            "Mercury is the fastest planet - orbits Sun in 88 days",
            "One day on Mercury equals 176 Earth days",
            "Mercury has no atmosphere",
            "The largest crater on Mercury is Caloris Basin"
        ]
    },
    venus: {
        name: "Venus",
        distance: "108.2 million km (from Sun)",
        diameter: "12,104 km",
        temperature: "462°C (average)",
        description: "Venus is also called the 'Morning Star'. It is the hottest planet because its atmosphere is filled with carbon dioxide. Venus is Earth-sized but completely different.",
        function: "Hottest planet in the solar system",
        rotation: "243 days (axial rotation), 225 days (solar orbit)",
        atmosphere: "Carbon dioxide (96.5%), Nitrogen (3.5%)",
        gravity: "8.87 m/s² (91% of Earth's)",
        moons: "0",
        discovery: "Known since ancient times",
        composition: "Silicates, carbonates",
        surfaceFeatures: "Volcanoes, plains, mountains",
        colorReason: "Sulfuric acid clouds",
        funFacts: [
            "Venus is the hottest planet - 462°C average temperature",
            "Venus rotates backwards",
            "The highest mountain on Venus is Maxwell Montes",
            "Venus is called 'Earth's sister'"
        ]
    },
    earth: {
        name: "Earth",
        distance: "149.6 million km (from Sun)",
        diameter: "12,756 km",
        temperature: "15°C (average)",
        description: "Earth is the only known planet with life. It has water, oxygen, and a protective atmosphere. Earth has one moon that creates tides.",
        function: "Home of life, water planet",
        rotation: "24 hours (axial rotation), 365.25 days (solar orbit)",
        atmosphere: "Nitrogen (78%), Oxygen (21%), Others (1%)",
        gravity: "9.81 m/s²",
        moons: "1 (Moon)",
        discovery: "Known since ancient times",
        composition: "Iron, silicates, water",
        surfaceFeatures: "Continents, oceans, mountains",
        colorReason: "Water and vegetation",
        funFacts: [
            "Earth rotates on its axis at 1,674 km/h",
            "Earth orbits the Sun at 107,000 km/h",
            "71% of Earth is covered with water",
            "Earth is the only known planet with life"
        ]
    },
    mars: {
        name: "Mars",
        distance: "227.9 million km (from Sun)",
        diameter: "6,792 km",
        temperature: "-65°C (average)",
        description: "Mars is called the 'Red Planet' because its surface is red from iron oxide. Signs of water have been found here and there are plans to establish human settlements in the future.",
        function: "Target for human exploration",
        rotation: "24.6 hours (axial rotation), 687 days (solar orbit)",
        atmosphere: "Carbon dioxide (95%), Nitrogen (2.7%)",
        gravity: "3.71 m/s² (38% of Earth's)",
        moons: "2 (Phobos, Deimos)",
        discovery: "Known since ancient times",
        composition: "Iron oxide, silicates",
        surfaceFeatures: "Olympus Mons, Valles Marineris, polar ice",
        colorReason: "Iron oxide (rust)",
        funFacts: [
            "The highest mountain on Mars is Olympus Mons (21.9 km)",
            "The largest canyon on Mars is Valles Marineris",
            "Mars has two moons - Phobos and Deimos",
            "Signs of water have been found on Mars"
        ]
    },
    jupiter: {
        name: "Jupiter",
        distance: "778.5 million km (from Sun)",
        diameter: "142,984 km",
        temperature: "-110°C",
        description: "Jupiter is the largest planet. It is a gas planet and has 79 moons. Jupiter's gravity helps keep the solar system stable.",
        function: "Protector of solar system, largest planet",
        rotation: "9.9 hours (axial rotation), 12 years (solar orbit)",
        atmosphere: "Hydrogen (90%), Helium (10%)",
        gravity: "24.79 m/s² (2.5 times Earth's)",
        moons: "79 (known)",
        discovery: "Known since ancient times",
        composition: "Hydrogen, helium, methane",
        surfaceFeatures: "Great Red Spot, bands, zones",
        colorReason: "Ammonia and hydrocarbon clouds",
        funFacts: [
            "Jupiter is the largest planet - 318 times bigger than Earth",
            "Jupiter has 79 moons",
            "The Great Red Spot is a storm that has been raging for 400 years",
            "Jupiter's gravity stops asteroids"
        ]
    },
    saturn: {
        name: "Saturn",
        distance: "1.43 billion km (from Sun)",
        diameter: "120,536 km",
        temperature: "-140°C",
        description: "Saturn is famous for its beautiful rings. These rings are made of ice and rock pieces. Saturn has 82 moons.",
        function: "Most beautiful planet in the solar system",
        rotation: "10.7 hours (axial rotation), 29.5 years (solar orbit)",
        atmosphere: "Hydrogen (96%), Helium (3%)",
        gravity: "10.44 m/s² (1.06 times Earth's)",
        moons: "82 (known)",
        discovery: "Known since ancient times",
        composition: "Hydrogen, helium, ice",
        surfaceFeatures: "Rings, hexagonal storm",
        colorReason: "Ammonia crystals and hydrocarbons",
        funFacts: [
            "Saturn's rings extend 282,000 km",
            "Saturn has 82 moons",
            "Saturn's density is less than water",
            "Saturn's rings are made of ice and rock"
        ]
    },
    uranus: {
        name: "Uranus",
        distance: "2.87 billion km (from Sun)",
        diameter: "51,118 km",
        temperature: "-195°C",
        description: "Uranus rotates on its side. It is made of hydrogen and helium. Uranus has 27 moons and appears blue in color.",
        function: "Planet that rotates on its side",
        rotation: "17 hours (axial rotation), 84 years (solar orbit)",
        atmosphere: "Hydrogen (83%), Helium (15%), Methane (2%)",
        gravity: "8.69 m/s² (0.89 times Earth's)",
        moons: "27 (known)",
        discovery: "1781 by William Herschel",
        composition: "Hydrogen, helium, methane",
        surfaceFeatures: "Rings, bands",
        colorReason: "Methane gas absorbs blue light",
        funFacts: [
            "Uranus rotates on its side",
            "Uranus has 27 moons",
            "Uranus is called an 'Ice Giant'",
            "Uranus has rings but they are very faint"
        ]
    },
    neptune: {
        name: "Neptune",
        distance: "4.50 billion km (from Sun)",
        diameter: "49,528 km",
        temperature: "-200°C",
        description: "Neptune is the farthest planet. Strong winds blow here that can reach 2,100 km/h. Neptune has 14 moons.",
        function: "Farthest planet in the solar system",
        rotation: "16 hours (axial rotation), 165 years (solar orbit)",
        atmosphere: "Hydrogen (80%), Helium (19%), Methane (1%)",
        gravity: "11.15 m/s² (1.14 times Earth's)",
        moons: "14 (known)",
        discovery: "1846 by Johann Galle",
        composition: "Hydrogen, helium, methane",
        surfaceFeatures: "Great Dark Spot, bands",
        colorReason: "Methane gas absorbs blue light",
        funFacts: [
            "The fastest winds on Neptune reach 2,100 km/h",
            "Neptune has 14 moons",
            "Neptune was discovered through mathematics",
            "One year on Neptune equals 165 Earth years"
        ]
    },
    moon: {
        name: "Moon",
        distance: "384,400 km (from Earth)",
        diameter: "3,474 km",
        temperature: "127°C (day), -173°C (night)",
        description: "The Moon is Earth's only natural satellite. It creates tides on Earth. The Moon has no atmosphere.",
        function: "Earth's satellite, cause of tides",
        rotation: "27.3 days (Earth orbit)",
        atmosphere: "Negligible atmosphere",
        gravity: "1.62 m/s² (16.6% of Earth's)",
        moons: "0",
        discovery: "Known since ancient times",
        composition: "Silicates, iron",
        surfaceFeatures: "Craters, maria, highlands",
        colorReason: "Silicate rocks and dust",
        funFacts: [
            "The Moon is 384,400 km from Earth",
            "The Moon has no atmosphere",
            "12 astronauts have walked on the Moon",
            "The Moon is slowly moving away from Earth"
        ]
    }
};

// सौर मंडल का इतिहास टाइमलाइन
const solarSystemTimeline = [
    {
        year: "4.6 बिलियन साल पहले",
        event: "सौर मंडल का जन्म",
        description: "सौर निहारिका से सूर्य और ग्रहों का निर्माण शुरू हुआ"
    },
    {
        year: "4.5 बिलियन साल पहले",
        event: "सूर्य का जन्म",
        description: "नाभिकीय संलयन शुरू हुआ और सूर्य तारा बना"
    },
    {
        year: "4.4 बिलियन साल पहले",
        event: "पहले ग्रहों का निर्माण",
        description: "बुध, शुक्र, पृथ्वी और मंगल का निर्माण"
    },
    {
        year: "4.3 बिलियन साल पहले",
        event: "गैसीय ग्रहों का निर्माण",
        description: "बृहस्पति, शनि, अरुण और वरुण का निर्माण"
    },
    {
        year: "4.2 बिलियन साल पहले",
        event: "पृथ्वी पर जीवन की शुरुआत",
        description: "पहले जीवाणुओं का जन्म"
    },
    {
        year: "3.8 बिलियन साल पहले",
        event: "चंद्रमा का निर्माण",
        description: "पृथ्वी से टकराने वाले पिंड से चंद्रमा बना"
    },
    {
        year: "वर्तमान",
        event: "मानव सभ्यता",
        description: "अंतरिक्ष अन्वेषण और सौर मंडल की खोज"
    }
];

// एजुकेशनल क्विज डेटा
const quizData = [
    {
        question: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        options: ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
        correct: 1,
        explanation: "बृहस्पति सबसे बड़ा ग्रह है। यह पृथ्वी से 318 गुना बड़ा है।"
    },
    {
        question: "कौन सा ग्रह सबसे गर्म है?",
        options: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        correct: 1,
        explanation: "शुक्र सबसे गर्म ग्रह है। इसका औसत तापमान 462°C है।"
    },
    {
        question: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह कौन सा है?",
        options: ["फोबोस", "चंद्रमा", "डीमोस", "टाइटन"],
        correct: 1,
        explanation: "चंद्रमा पृथ्वी का एकमात्र प्राकृतिक उपग्रह है।"
    },
    {
        question: "कौन सा ग्रह अपनी तरफ लेटा हुआ घूमता है?",
        options: ["शनि", "अरुण", "वरुण", "बृहस्पति"],
        correct: 1,
        explanation: "अरुण अपनी तरफ लेटा हुआ घूमता है।"
    },
    {
        question: "सौर मंडल का केंद्र क्या है?",
        options: ["पृथ्वी", "सूर्य", "बृहस्पति", "चंद्रमा"],
        correct: 1,
        explanation: "सूर्य सौर मंडल का केंद्र है।"
    }
];

// English quiz data
const quizDataEn = [
    {
        question: "Which is the largest planet in the solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correct: 1,
        explanation: "Jupiter is the largest planet. It is 318 times bigger than Earth."
    },
    {
        question: "Which planet is the hottest?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correct: 1,
        explanation: "Venus is the hottest planet. Its average temperature is 462°C."
    },
    {
        question: "What is Earth's only natural satellite?",
        options: ["Phobos", "Moon", "Deimos", "Titan"],
        correct: 1,
        explanation: "The Moon is Earth's only natural satellite."
    },
    {
        question: "Which planet rotates on its side?",
        options: ["Saturn", "Uranus", "Neptune", "Jupiter"],
        correct: 1,
        explanation: "Uranus rotates on its side."
    },
    {
        question: "What is the center of the solar system?",
        options: ["Earth", "Sun", "Jupiter", "Moon"],
        correct: 1,
        explanation: "The Sun is the center of the solar system."
    }
];

// Add educational facts about the solar system
const solarSystemFacts = {
    sunFacts: [
        "सूर्य का द्रव्यमान सौर मंडल का 99.86% है",
        "सूर्य से प्रकाश पृथ्वी तक 8 मिनट 20 सेकंड में पहुंचता है",
        "सूर्य का तापमान केंद्र में 15,000,000°C है",
        "सूर्य हर सेकंड में 600 मिलियन टन हाइड्रोजन को हीलियम में बदलता है"
    ],
    earthFacts: [
        "पृथ्वी अपनी धुरी पर 1,674 km/h की गति से घूमती है",
        "पृथ्वी सूर्य की परिक्रमा 107,000 km/h की गति से करती है",
        "चंद्रमा पृथ्वी से 384,400 km दूर है",
        "पृथ्वी का 71% भाग पानी से ढका है"
    ],
    planetFacts: [
        "बुध सबसे तेज ग्रह है - 88 दिन में सूर्य की परिक्रमा",
        "शुक्र सबसे गर्म ग्रह है - 462°C औसत तापमान",
        "मंगल पर सबसे ऊंचा पर्वत है - ओलंपस मॉन्स (21.9 km)",
        "बृहस्पति सबसे बड़ा ग्रह है - पृथ्वी से 318 गुना बड़ा",
        "शनि के वलय 282,000 km तक फैले हैं",
        "अरुण अपनी तरफ लेटा हुआ घूमता है",
        "वरुण पर सबसे तेज हवाएं चलती हैं - 2,100 km/h"
    ]
};

// 3D ग्रह व्यू के लिए डेटा
const planet3DData = {
    sun: {
        texture: "sun-texture.jpg",
        rotationSpeed: 0.01,
        features: ["सोलर स्पॉट्स", "फ्लेयर्स", "प्रोमिनेंसेस"]
    },
    mercury: {
        texture: "mercury-texture.jpg",
        rotationSpeed: 0.005,
        features: ["क्रेटर्स", "मैरिया", "स्कार्प्स"]
    },
    venus: {
        texture: "venus-texture.jpg",
        rotationSpeed: 0.003,
        features: ["ज्वालामुखी", "मैदान", "पहाड़"]
    },
    earth: {
        texture: "earth-texture.jpg",
        rotationSpeed: 0.01,
        features: ["महाद्वीप", "महासागर", "बादल"]
    },
    mars: {
        texture: "mars-texture.jpg",
        rotationSpeed: 0.008,
        features: ["ओलंपस मॉन्स", "वैलेस मैरिनेरिस", "ध्रुवीय बर्फ"]
    },
    jupiter: {
        texture: "jupiter-texture.jpg",
        rotationSpeed: 0.02,
        features: ["ग्रेट रेड स्पॉट", "बैंड्स", "जोन्स"]
    },
    saturn: {
        texture: "saturn-texture.jpg",
        rotationSpeed: 0.015,
        features: ["रिंग्स", "हेक्सागोनल स्टॉर्म"]
    },
    uranus: {
        texture: "uranus-texture.jpg",
        rotationSpeed: 0.012,
        features: ["रिंग्स", "बैंड्स"]
    },
    neptune: {
        texture: "neptune-texture.jpg",
        rotationSpeed: 0.018,
        features: ["ग्रेट डार्क स्पॉट", "बैंड्स"]
    }
};

// साउंड इफेक्ट्स
const soundEffects = {
    planetClick: "planet-click.mp3",
    spaceAmbient: "space-ambient.mp3",
    buttonClick: "button-click.mp3",
    factNotification: "fact-notification.mp3"
};

// भाषा अनुवाद डेटा
const translations = {
    hi: {
        // Navigation
        title: "🌞 सौर मंडल अन्वेषक",
        subtitle: "सौर मंडल की खोज करें और ग्रहों के बारे में जानें",
        currentLang: "हिंदी",
        
        // Controls
        playPause: "⏸️ रोकें",
        play: "▶️ चलाएं",
        speedUp: "⏩ तेज करें",
        slowDown: "⏪ धीमा करें",
        reset: "🔄 रीसेट",
        toggleInfo: "ℹ️ जानकारी",
        showInfo: "ℹ️ जानकारी दिखाएं",
        hideInfo: "ℹ️ जानकारी छिपाएं",
        show3D: "🌍 3D व्यू",
        startQuiz: "🎮 क्विज",
        showTimeline: "⏰ टाइमलाइन",
        toggleSound: "🔊 साउंड",
        soundOff: "🔇 साउंड",
        showFact: "💡 तथ्य",
        
        // Info Panel
        distance: "🌍 दूरी:",
        diameter: "📏 व्यास:",
        temperature: "🌡️ तापमान:",
        function: "⚙️ कार्य:",
        rotation: "🔄 घूर्णन:",
        atmosphere: "🌫️ वायुमंडल:",
        gravity: "⚖️ गुरुत्वाकर्षण:",
        moons: "🌙 चंद्रमा:",
        discovery: "🔍 खोज:",
        composition: "🧪 संरचना:",
        surfaceFeatures: "🏔️ सतही विशेषताएं:",
        colorReason: "🎨 रंग का कारण:",
        description: "📝 विवरण:",
        funFacts: "🎯 रोचक तथ्य:",
        
        // Legend
        planetIdentification: "🌌 ग्रहों की पहचान:",
        solarSystemFacts: "🌌 सौर मंडल के तथ्य:",
        farthestFromSun: "सूर्य से सबसे दूर: वरुण (4.5 बिलियन km)",
        largestPlanet: "सबसे बड़ा ग्रह: बृहस्पति",
        smallestPlanet: "सबसे छोटा ग्रह: बुध",
        hottestPlanet: "सबसे गर्म ग्रह: शुक्र",
        onlyLifePlanet: "एकमात्र जीवन वाला ग्रह: पृथ्वी",
        
        // Quiz
        quizTitle: "सौर मंडल क्विज",
        question: "प्रश्न",
        correctAnswer: "सही उत्तर! 🎉",
        wrongAnswer: "गलत उत्तर! 😔",
        quizComplete: "क्विज समाप्त! 🎉",
        yourScore: "आपका स्कोर:",
        percentage: "प्रतिशत:",
        excellent: "बहुत बढ़िया! आपको सौर मंडल की अच्छी जानकारी है। 🌟",
        good: "अच्छा प्रदर्शन! और अधिक सीखने की कोशिश करें। 👍",
        keepTrying: "कोशिश जारी रखें! सौर मंडल के बारे में और जानें। 📚",
        close: "बंद करें",
        
        // Timeline
        timelineTitle: "सौर मंडल का इतिहास",
        
        // Notifications
        soundOn: "साउंड चालू हो गया है",
        soundOff: "साउंड बंद हो गया है",
        
        // Welcome Message
        welcomeTitle: "🌟 सौर मंडल में आपका स्वागत है! 🌟",
        howToUse: "🎯 कैसे उपयोग करें:",
        clickPlanet: "• किसी भी ग्रह पर क्लिक करें - उसकी जानकारी देखें",
        spacebar: "• स्पेसबार - एनीमेशन रोकें/चलाएं",
        arrowKeys: "• तीर कुंजी - गति बदलें",
        factKey: "• F - रोचक तथ्य देखें",
        infoKey: "• I - जानकारी पैनल छिपाएं/दिखाएं",
        threeDKey: "• 3 - 3D ग्रह व्यू देखें",
        quizKey: "• Q - क्विज खेलें",
        timelineKey: "• T - टाइमलाइन देखें",
        soundKey: "• S - साउंड बंद/चालू करें",
        earthRotation: "🌍 पृथ्वी की घूर्णन और चंद्रमा की कक्षा देखें",
        sunInfo: "🌞 सूर्य के बारे में विस्तृत जानकारी प्राप्त करें",
        planetInfo: "🪐 सभी ग्रहों की सही दूरी और विशेषताएं जानें",
        interactiveFeatures: "🎮 इंटरैक्टिव क्विज और 3D व्यू का आनंद लें"
    },
    en: {
        // Navigation
        title: "🌞 Solar System Explorer",
        subtitle: "Explore the solar system and learn about planets",
        currentLang: "English",
        
        // Controls
        playPause: "⏸️ Pause",
        play: "▶️ Play",
        speedUp: "⏩ Speed Up",
        slowDown: "⏪ Slow Down",
        reset: "🔄 Reset",
        toggleInfo: "ℹ️ Info",
        showInfo: "ℹ️ Show Info",
        hideInfo: "ℹ️ Hide Info",
        show3D: "🌍 3D View",
        startQuiz: "🎮 Quiz",
        showTimeline: "⏰ Timeline",
        toggleSound: "🔊 Sound",
        soundOff: "🔇 Sound",
        showFact: "💡 Fact",
        
        // Info Panel
        distance: "🌍 Distance:",
        diameter: "📏 Diameter:",
        temperature: "🌡️ Temperature:",
        function: "⚙️ Function:",
        rotation: "🔄 Rotation:",
        atmosphere: "🌫️ Atmosphere:",
        gravity: "⚖️ Gravity:",
        moons: "🌙 Moons:",
        discovery: "🔍 Discovery:",
        composition: "🧪 Composition:",
        surfaceFeatures: "🏔️ Surface Features:",
        colorReason: "🎨 Color Reason:",
        description: "📝 Description:",
        funFacts: "🎯 Fun Facts:",
        
        // Legend
        planetIdentification: "🌌 Planet Identification:",
        solarSystemFacts: "🌌 Solar System Facts:",
        farthestFromSun: "Farthest from Sun: Neptune (4.5 billion km)",
        largestPlanet: "Largest Planet: Jupiter",
        smallestPlanet: "Smallest Planet: Mercury",
        hottestPlanet: "Hottest Planet: Venus",
        onlyLifePlanet: "Only Planet with Life: Earth",
        
        // Quiz
        quizTitle: "Solar System Quiz",
        question: "Question",
        correctAnswer: "Correct Answer! 🎉",
        wrongAnswer: "Wrong Answer! 😔",
        quizComplete: "Quiz Complete! 🎉",
        yourScore: "Your Score:",
        percentage: "Percentage:",
        excellent: "Excellent! You have good knowledge of the solar system. 🌟",
        good: "Good performance! Try to learn more. 👍",
        keepTrying: "Keep trying! Learn more about the solar system. 📚",
        close: "Close",
        
        // Timeline
        timelineTitle: "Solar System History",
        
        // Notifications
        soundOn: "Sound turned on",
        soundOff: "Sound turned off",
        
        // Welcome Message
        welcomeTitle: "🌟 Welcome to the Solar System! 🌟",
        howToUse: "🎯 How to Use:",
        clickPlanet: "• Click on any planet - view its information",
        spacebar: "• Spacebar - pause/play animation",
        arrowKeys: "• Arrow keys - change speed",
        factKey: "• F - show interesting facts",
        infoKey: "• I - hide/show info panel",
        threeDKey: "• 3 - view 3D planet",
        quizKey: "• Q - play quiz",
        timelineKey: "• T - view timeline",
        soundKey: "• S - turn sound on/off",
        earthRotation: "🌍 Watch Earth's rotation and Moon's orbit",
        sunInfo: "🌞 Get detailed information about the Sun",
        planetInfo: "🪐 Learn about all planets' correct distances and features",
        interactiveFeatures: "🎮 Enjoy interactive quiz and 3D view"
    }
};

// वैरिएबल्स
let currentQuizQuestion = 0;
let quizScore = 0;
let isQuizActive = false;
let is3DViewActive = false;
let current3DPlanet = null;
let isSoundEnabled = true;
let isTimelineActive = false;
let currentLanguage = 'hi'; // Default language is Hindi

// Function to show random facts
function showRandomFact() {
    const allFacts = [
        ...solarSystemFacts.sunFacts,
        ...solarSystemFacts.earthFacts,
        ...solarSystemFacts.planetFacts
    ];
    const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
    
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.className = 'fact-notification';
    notification.textContent = randomFact;
    document.body.appendChild(notification);
    
    // Play sound effect
    if (isSoundEnabled) {
        playSound('factNotification');
    }
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// साउंड प्ले करने का फंक्शन
function playSound(soundType) {
    if (!isSoundEnabled) return;
    
    try {
        const audio = new Audio();
        audio.src = soundEffects[soundType] || 'button-click.mp3';
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Sound play failed:', e));
    } catch (error) {
        console.log('Sound not available:', error);
    }
}

// 3D ग्रह व्यू फंक्शन
function show3DPlanetView(planetType) {
    if (is3DViewActive) return;
    
    is3DViewActive = true;
    current3DPlanet = planetType;
    
    // Get planet data
    const planetData = currentLanguage === 'en' ? planetDataEn[planetType] : planetData[planetType];
    
    if (!planetData) {
        console.error('Planet data not found for:', planetType);
        is3DViewActive = false;
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'planet-3d-modal';
    modal.innerHTML = `
        <div class="planet-3d-content">
            <div class="planet-3d-header">
                <h2>🌌 ${planetData.name} - 3D Solar System View</h2>
                <button class="close-3d-btn" onclick="close3DView()">✕</button>
            </div>
            
            <div class="solar-system-3d-container">
                <div class="solar-system-3d" id="solarSystem3D">
                    <!-- Sun -->
                    <div class="planet-3d sun-3d" data-planet="sun">
                        <div class="planet-glow"></div>
                        <div class="planet-label">सूर्य (Sun)</div>
                    </div>
                    
                    <!-- Mercury -->
                    <div class="planet-3d mercury-3d" data-planet="mercury">
                        <div class="planet-label">बुध (Mercury)</div>
                    </div>
                    
                    <!-- Venus -->
                    <div class="planet-3d venus-3d" data-planet="venus">
                        <div class="planet-label">शुक्र (Venus)</div>
                    </div>
                    
                    <!-- Earth -->
                    <div class="planet-3d earth-3d" data-planet="earth">
                        <div class="planet-label">पृथ्वी (Earth)</div>
                        <div class="moon-3d" data-planet="moon">
                            <div class="planet-label">चंद्रमा (Moon)</div>
                        </div>
                    </div>
                    
                    <!-- Mars -->
                    <div class="planet-3d mars-3d" data-planet="mars">
                        <div class="planet-label">मंगल (Mars)</div>
                    </div>
                    
                    <!-- Jupiter -->
                    <div class="planet-3d jupiter-3d" data-planet="jupiter">
                        <div class="planet-label">बृहस्पति (Jupiter)</div>
                    </div>
                    
                    <!-- Saturn -->
                    <div class="planet-3d saturn-3d" data-planet="saturn">
                        <div class="planet-label">शनि (Saturn)</div>
                        <div class="saturn-rings-3d"></div>
                    </div>
                    
                    <!-- Uranus -->
                    <div class="planet-3d uranus-3d" data-planet="uranus">
                        <div class="planet-label">अरुण (Uranus)</div>
                    </div>
                    
                    <!-- Neptune -->
                    <div class="planet-3d neptune-3d" data-planet="neptune">
                        <div class="planet-label">वरुण (Neptune)</div>
                    </div>
                </div>
            </div>
            
            <div class="planet-3d-controls">
                <button onclick="rotate3DSolarSystem('left')">🔄 Rotate Left</button>
                <button onclick="rotate3DSolarSystem('right')">🔄 Rotate Right</button>
                <button onclick="zoom3DSolarSystem('in')">🔍 Zoom In</button>
                <button onclick="zoom3DSolarSystem('out')">🔍 Zoom Out</button>
                <button onclick="reset3DView()">🔄 Reset View</button>
            </div>
            
            <div class="planet-3d-info">
                <h3>🌍 ${planetData.name} Information:</h3>
                <div class="planet-details">
                    <div class="detail-item">
                        <span class="detail-label">Distance:</span>
                        <span class="detail-value">${planetData.distance}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Diameter:</span>
                        <span class="detail-value">${planetData.diameter}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Temperature:</span>
                        <span class="detail-value">${planetData.temperature}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Moons:</span>
                        <span class="detail-value">${planetData.moons}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Start 3D solar system animation
    start3DSolarSystemAnimation();
    
    console.log('3D Solar System view opened for:', planetType);
}

// 3D Solar System Animation
function start3DSolarSystemAnimation() {
    const solarSystem = document.getElementById('solarSystem3D');
    if (!solarSystem) return;
    
    let rotation = 0;
    let scale = 1;
    
    function animate3D() {
        if (!is3DViewActive) return;
        
        // Rotate entire solar system
        solarSystem.style.transform = `rotateY(${rotation}deg) scale(${scale})`;
        
        // Individual planet rotations
        const planets = solarSystem.querySelectorAll('.planet-3d');
        planets.forEach((planet, index) => {
            const planetRotation = rotation * (index + 1) * 0.5;
            planet.style.transform = `rotateY(${planetRotation}deg)`;
        });
        
        rotation += 0.5;
        requestAnimationFrame(animate3D);
    }
    
    animate3D();
}

// 3D Solar System Controls
function rotate3DSolarSystem(direction) {
    const solarSystem = document.getElementById('solarSystem3D');
    if (!solarSystem) return;
    
    const currentRotation = solarSystem.style.transform.match(/rotateY\(([^)]+)\)/);
    let rotation = currentRotation ? parseFloat(currentRotation[1]) : 0;
    
    if (direction === 'left') {
        rotation -= 45;
    } else {
        rotation += 45;
    }
    
    const currentScale = solarSystem.style.transform.match(/scale\(([^)]+)\)/);
    const scale = currentScale ? parseFloat(currentScale[1]) : 1;
    
    solarSystem.style.transform = `rotateY(${rotation}deg) scale(${scale})`;
}

function zoom3DSolarSystem(direction) {
    const solarSystem = document.getElementById('solarSystem3D');
    if (!solarSystem) return;
    
    const currentScale = solarSystem.style.transform.match(/scale\(([^)]+)\)/);
    let scale = currentScale ? parseFloat(currentScale[1]) : 1;
    
    if (direction === 'in') {
        scale = Math.min(scale * 1.2, 3);
    } else {
        scale = Math.max(scale / 1.2, 0.5);
    }
    
    const currentRotation = solarSystem.style.transform.match(/rotateY\(([^)]+)\)/);
    const rotation = currentRotation ? parseFloat(currentRotation[1]) : 0;
    
    solarSystem.style.transform = `rotateY(${rotation}deg) scale(${scale})`;
}

function reset3DView() {
    const solarSystem = document.getElementById('solarSystem3D');
    if (solarSystem) {
        solarSystem.style.transform = 'rotateY(0deg) scale(1)';
    }
}

// 3D व्यू बंद करने का फंक्शन
function close3DView() {
    is3DViewActive = false;
    const modal = document.querySelector('.planet-3d-modal');
    if (modal) {
        modal.remove();
    }
}

// 3D ग्रह को घुमाने का फंक्शन
function rotate3DPlanet(direction) {
    const sphere = document.getElementById('planet3DSphere');
    if (!sphere) return;
    
    const currentRotation = sphere.style.transform.match(/rotateY\(([^)]+)\)/);
    let rotation = currentRotation ? parseFloat(currentRotation[1]) : 0;
    
    if (direction === 'left') {
        rotation -= 45;
    } else {
        rotation += 45;
    }
    
    sphere.style.transform = `rotateY(${rotation}deg)`;
}

// 3D ग्रह को ज़ूम करने का फंक्शन
function zoom3DPlanet(direction) {
    const sphere = document.getElementById('planet3DSphere');
    if (!sphere) return;
    
    const currentScale = sphere.style.transform.match(/scale\(([^)]+)\)/);
    let scale = currentScale ? parseFloat(currentScale[1]) : 1;
    
    if (direction === 'in') {
        scale = Math.min(scale * 1.2, 3);
    } else {
        scale = Math.max(scale / 1.2, 0.5);
    }
    
    sphere.style.transform = `scale(${scale})`;
}

// क्विज शुरू करने का फंक्शन
function startQuiz() {
    if (isQuizActive) return;
    
    isQuizActive = true;
    currentQuizQuestion = 0;
    quizScore = 0;
    
    showQuizQuestion();
}

// क्विज प्रश्न दिखाने का फंक्शन
function showQuizQuestion() {
    const currentQuizData = currentLanguage === 'en' ? quizDataEn : quizData;
    if (currentQuizQuestion >= currentQuizData.length) {
        endQuiz();
        return;
    }
    
    const question = currentQuizData[currentQuizQuestion];
    
    const t = translations[currentLanguage];
    const modal = document.createElement('div');
    modal.className = 'quiz-modal';
    modal.innerHTML = `
        <div class="quiz-content">
            <div class="quiz-header">
                <h2>${t.quizTitle}</h2>
                <div class="quiz-header-right">
                    <span class="quiz-progress">${t.question} ${currentQuizQuestion + 1}/${currentQuizData.length}</span>
                    <button class="close-quiz-btn" onclick="closeQuiz()">✕</button>
                </div>
            </div>
            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" onclick="selectQuizAnswer(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// क्विज उत्तर चुनने का फंक्शन
function selectQuizAnswer(selectedIndex) {
    const currentQuizData = currentLanguage === 'en' ? quizDataEn : quizData;
    const question = currentQuizData[currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const t = translations[currentLanguage];
    
    // सभी बटन को डिसेबल करें
    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === question.correct) {
        quizScore++;
        options[selectedIndex].classList.add('correct');
        showNotification(t.correctAnswer, 'success');
        
        // सही उत्तर के लिए विशेष फीडबैक
        const correctOption = options[selectedIndex];
        correctOption.innerHTML += '<span class="answer-feedback">✅ सही उत्तर!</span>';
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        showNotification(t.wrongAnswer, 'error');
        
        // गलत उत्तर के लिए विशेष फीडबैक
        const wrongOption = options[selectedIndex];
        const correctOption = options[question.correct];
        
        wrongOption.innerHTML += '<span class="answer-feedback">❌ गलत उत्तर</span>';
        correctOption.innerHTML += '<span class="answer-feedback">✅ सही उत्तर</span>';
    }
    
    // स्पष्टीकरण दिखाएं
    setTimeout(() => {
        showExplanation(question.explanation);
    }, 1500);
    
    // अगला प्रश्न
    setTimeout(() => {
        currentQuizQuestion++;
        const modal = document.querySelector('.quiz-modal');
        if (modal) modal.remove();
        showQuizQuestion();
    }, 4000);
}

// स्पष्टीकरण दिखाने का फंक्शन
function showExplanation(explanation) {
    const notification = document.createElement('div');
    notification.className = 'explanation-notification';
    notification.textContent = explanation;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// क्विज समाप्त करने का फंक्शन
function endQuiz() {
    isQuizActive = false;
    const currentQuizData = currentLanguage === 'en' ? quizDataEn : quizData;
    const percentage = Math.round((quizScore / currentQuizData.length) * 100);
    const t = translations[currentLanguage];
    
    const modal = document.createElement('div');
    modal.className = 'quiz-result-modal';
    modal.innerHTML = `
        <div class="quiz-result-content">
            <h2>${t.quizComplete}</h2>
            <div class="quiz-score">
                <h3>${t.yourScore} ${quizScore}/${currentQuizData.length}</h3>
                <p>${t.percentage} ${percentage}%</p>
            </div>
            <div class="quiz-feedback">
                ${percentage >= 80 ? t.excellent :
                  percentage >= 60 ? t.good :
                  t.keepTrying}
            </div>
            <div class="certificate-section">
                <h4>🏆 ${currentLanguage === 'hi' ? 'प्रमाणपत्र डाउनलोड करें' : 'Download Certificate'}</h4>
                <p>${currentLanguage === 'hi' ? 'अपनी उपलब्धि का प्रमाणपत्र PNG फॉर्मेट में डाउनलोड करें' : 'Download your achievement certificate in PNG format'}</p>
                <div class="download-options">
                    <button class="download-png-btn" onclick="downloadCertificatePNG('${quizScore}', '${currentQuizData.length}', '${percentage}')">
                        🖼️ ${currentLanguage === 'hi' ? 'PNG प्रमाणपत्र डाउनलोड' : 'Download PNG Certificate'}
                    </button>
                </div>
            </div>
            <button class="close-quiz-result-btn" onclick="closeQuizResult()">${t.close}</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// क्विज रिजल्ट बंद करने का फंक्शन
function closeQuizResult() {
    const modal = document.querySelector('.quiz-result-modal');
    if (modal) {
        modal.remove();
    }
}

// टाइमलाइन दिखाने का फंक्शन
function showTimeline() {
    if (isTimelineActive) return;
    
    isTimelineActive = true;
    const t = translations[currentLanguage];
    
    const modal = document.createElement('div');
    modal.className = 'timeline-modal';
    modal.innerHTML = `
        <div class="timeline-content">
            <div class="timeline-header">
                <h2>${t.timelineTitle}</h2>
                <button class="close-timeline-btn" onclick="closeTimeline()">✕</button>
            </div>
            <div class="timeline-container">
                ${solarSystemTimeline.map((event, index) => `
                    <div class="timeline-event">
                        <div class="timeline-dot"></div>
                        <div class="timeline-info">
                            <h3>${event.year}</h3>
                            <h4>${event.event}</h4>
                            <p>${event.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// टाइमलाइन बंद करने का फंक्शन
function closeTimeline() {
    isTimelineActive = false;
    const modal = document.querySelector('.timeline-modal');
    if (modal) {
        modal.remove();
    }
}

// भाषा स्विच करने का फंक्शन
function switchLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    try {
        // Update navigation
        const navBrand = document.querySelector('.nav-brand h2');
        if (navBrand) navBrand.textContent = t.title;
        
        const headerTitle = document.querySelector('header h1');
        const headerSub = document.querySelector('header p');
        if (headerTitle) headerTitle.textContent = t.title;
        if (headerSub) headerSub.textContent = t.subtitle;
        
        const currentLangSpan = document.getElementById('currentLang');
        if (currentLangSpan) currentLangSpan.textContent = t.currentLang;
        
        // Update control buttons
        const playPauseBtn = document.getElementById('playPause');
        if (playPauseBtn) playPauseBtn.textContent = isPlaying ? t.playPause : t.play;
        
        const speedUpBtn = document.getElementById('speedUp');
        if (speedUpBtn) speedUpBtn.textContent = t.speedUp;
        
        const slowDownBtn = document.getElementById('slowDown');
        if (slowDownBtn) slowDownBtn.textContent = t.slowDown;
        
        const resetBtn = document.getElementById('reset');
        if (resetBtn) resetBtn.textContent = t.reset;
        
        const toggleInfoBtn = document.getElementById('toggleInfo');
        if (toggleInfoBtn) toggleInfoBtn.textContent = t.toggleInfo;
        
        const show3DBtn = document.getElementById('show3D');
        if (show3DBtn) show3DBtn.textContent = t.show3D;
        
        const startQuizBtn = document.getElementById('startQuiz');
        if (startQuizBtn) startQuizBtn.textContent = t.startQuiz;
        
        const showTimelineBtn = document.getElementById('showTimeline');
        if (showTimelineBtn) showTimelineBtn.textContent = t.showTimeline;
        
        const toggleSoundBtn = document.getElementById('toggleSound');
        if (toggleSoundBtn) toggleSoundBtn.textContent = isSoundEnabled ? t.toggleSound : t.soundOff;
        
        const showFactBtn = document.getElementById('showFact');
        if (showFactBtn) showFactBtn.textContent = t.showFact;
        
        // Update info panel labels
        const infoPanel = document.getElementById('infoPanel');
        if (infoPanel) {
            const labels = infoPanel.querySelectorAll('strong');
            labels.forEach(label => {
                const text = label.textContent;
                if (text.includes('दूरी') || text.includes('Distance')) label.textContent = t.distance;
                else if (text.includes('व्यास') || text.includes('Diameter')) label.textContent = t.diameter;
                else if (text.includes('तापमान') || text.includes('Temperature')) label.textContent = t.temperature;
                else if (text.includes('कार्य') || text.includes('Function')) label.textContent = t.function;
                else if (text.includes('घूर्णन') || text.includes('Rotation')) label.textContent = t.rotation;
                else if (text.includes('वायुमंडल') || text.includes('Atmosphere')) label.textContent = t.atmosphere;
                else if (text.includes('गुरुत्वाकर्षण') || text.includes('Gravity')) label.textContent = t.gravity;
                else if (text.includes('चंद्रमा') || text.includes('Moons')) label.textContent = t.moons;
                else if (text.includes('खोज') || text.includes('Discovery')) label.textContent = t.discovery;
                else if (text.includes('संरचना') || text.includes('Composition')) label.textContent = t.composition;
                else if (text.includes('सतही विशेषताएं') || text.includes('Surface Features')) label.textContent = t.surfaceFeatures;
                else if (text.includes('रंग का कारण') || text.includes('Color Reason')) label.textContent = t.colorReason;
                else if (text.includes('विवरण') || text.includes('Description')) label.textContent = t.description;
                else if (text.includes('रोचक तथ्य') || text.includes('Fun Facts')) label.textContent = t.funFacts;
            });
        }
        
        // Update legend
        const legend = document.querySelector('.legend');
        if (legend) {
            const legendTitles = legend.querySelectorAll('h4');
            legendTitles.forEach(title => {
                const text = title.textContent;
                if (text.includes('ग्रहों की पहचान') || text.includes('Planet Identification')) {
                    title.textContent = t.planetIdentification;
                } else if (text.includes('सौर मंडल के तथ्य') || text.includes('Solar System Facts')) {
                    title.textContent = t.solarSystemFacts;
                }
            });
            
            const legendItems = legend.querySelectorAll('li');
            legendItems.forEach(item => {
                const text = item.textContent;
                if (text.includes('सूर्य से सबसे दूर') || text.includes('Farthest from Sun')) item.textContent = t.farthestFromSun;
                else if (text.includes('सबसे बड़ा ग्रह') || text.includes('Largest Planet')) item.textContent = t.largestPlanet;
                else if (text.includes('सबसे छोटा ग्रह') || text.includes('Smallest Planet')) item.textContent = t.smallestPlanet;
                else if (text.includes('सबसे गर्म ग्रह') || text.includes('Hottest Planet')) item.textContent = t.hottestPlanet;
                else if (text.includes('एकमात्र जीवन वाला ग्रह') || text.includes('Only Planet with Life')) item.textContent = t.onlyLifePlanet;
            });
        }
        
        // Update language dropdown active state
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update current planet info if any planet is selected
        const currentPlanet = document.querySelector('.highlighted') || document.querySelector('.sun');
        if (currentPlanet) {
            const planetType = currentPlanet.getAttribute('data-planet') || 'sun';
            updateInfoPanel(planetType);
        }
        
        // Show notification
        showNotification(lang === 'hi' ? 'भाषा हिंदी में बदल गई है' : 'Language changed to English', 'info');
        
        console.log(`Language switched to: ${lang}`);
        
    } catch (error) {
        console.error('Error switching language:', error);
        showNotification('Language switch failed. Please try again.', 'error');
    }
}

// नोटिफिकेशन दिखाने का फंक्शन
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Welcome message function
function showWelcomeMessage() {
    const welcomeMessage = `
        🌟 सौर मंडल में आपका स्वागत है! 🌟
        
        🎯 कैसे उपयोग करें:
        • किसी भी ग्रह पर क्लिक करें - उसकी जानकारी देखें
        • स्पेसबार - एनीमेशन रोकें/चलाएं
        • तीर कुंजी - गति बदलें
        • F - रोचक तथ्य देखें
        • I - जानकारी पैनल छिपाएं/दिखाएं
        • 3D - 3D ग्रह व्यू देखें
        • Q - क्विज खेलें
        • T - टाइमलाइन देखें
        • S - साउंड बंद/चालू करें
        
        🌍 पृथ्वी की घूर्णन और चंद्रमा की कक्षा देखें
        🌞 सूर्य के बारे में विस्तृत जानकारी प्राप्त करें
        🪐 सभी ग्रहों की सही दूरी और विशेषताएं जानें
    `;
    
    const notification = document.createElement('div');
    notification.className = 'welcome-notification';
    notification.innerHTML = welcomeMessage.replace(/\n/g, '<br>');
    document.body.appendChild(notification);
    
    // Remove after 8 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 1000);
    }, 8000);
}

// Animation control variables
let animationSpeed = 1;
let isPlaying = true;
let orbits = [];

// Initialize the solar system
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== 'hi') {
        console.log('Loading saved language:', savedLanguage);
        switchLanguage(savedLanguage);
    } else {
        console.log('Using default language: Hindi');
        currentLanguage = 'hi';
    }
    
    initializeSolarSystem();
    setupEventListeners();
    updateInfoPanel('sun');
    showWelcomeMessage();
    
    // Ensure planet names are set after a short delay
    setTimeout(() => {
        ensurePlanetNames();
    }, 100);
    
    // Debug: Log current language state
    console.log('Current language:', currentLanguage);
    console.log('Available translations:', Object.keys(translations));
});

function initializeSolarSystem() {
    // Get all orbit elements
    orbits = document.querySelectorAll('.orbit');
    
    // Set initial animation speeds
    orbits.forEach(orbit => {
        const animationName = orbit.style.animationName || 'orbit';
        orbit.style.animationPlayState = 'running';
    });
    
    // Add click events to planets
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.addEventListener('click', function() {
            const planetType = this.getAttribute('data-planet');
            updateInfoPanel(planetType);
            highlightPlanet(this);
            playSound('planetClick');
        });
    });
    
    // Add click event to sun
    const sun = document.querySelector('.sun');
    sun.addEventListener('click', function() {
        updateInfoPanel('sun');
        highlightPlanet(this);
        playSound('planetClick');
    });
    
    // Add click event to moon
    const moon = document.querySelector('.moon');
    if (moon) {
        moon.addEventListener('click', function() {
            updateInfoPanel('moon');
            highlightPlanet(this);
            playSound('planetClick');
        });
    }
    
    // Initialize Earth rotation and Moon details
    addEarthRotation();
    addMoonDetails();
    
    // Add tooltips
    addTooltips();
    
    // Ensure all planet names are properly set
    ensurePlanetNames();
}

function setupEventListeners() {
    // Play/Pause button
    document.getElementById('playPause').addEventListener('click', function() {
        playSound('buttonClick');
        if (isPlaying) {
            pauseAnimation();
            this.textContent = '▶️ चलाएं';
        } else {
            playAnimation();
            this.textContent = '⏸️ रोकें';
        }
        isPlaying = !isPlaying;
    });
    
    // Speed up button
    document.getElementById('speedUp').addEventListener('click', function() {
        playSound('buttonClick');
        animationSpeed = Math.min(animationSpeed * 2, 8);
        updateAnimationSpeed();
    });
    
    // Slow down button
    document.getElementById('slowDown').addEventListener('click', function() {
        playSound('buttonClick');
        animationSpeed = Math.max(animationSpeed / 2, 0.25);
        updateAnimationSpeed();
    });
    
    // Reset button
    document.getElementById('reset').addEventListener('click', function() {
        playSound('buttonClick');
        animationSpeed = 1;
        updateAnimationSpeed();
        updateInfoPanel('sun');
        removeHighlight();
    });
    
    // Toggle Info button
    document.getElementById('toggleInfo').addEventListener('click', function() {
        playSound('buttonClick');
        const infoPanel = document.getElementById('infoPanel');
        const legend = document.querySelector('.legend');
        
        if (infoPanel.style.display === 'none') {
            infoPanel.style.display = 'block';
            legend.style.display = 'block';
            this.textContent = 'ℹ️ जानकारी छिपाएं';
        } else {
            infoPanel.style.display = 'none';
            legend.style.display = 'none';
            this.textContent = 'ℹ️ जानकारी दिखाएं';
        }
    });
    
    // Show fact button event listener
    document.getElementById('showFact').addEventListener('click', showRandomFact);
    
    // Add new feature buttons event listeners
    document.getElementById('show3D').addEventListener('click', function() {
        const currentPlanet = document.querySelector('.highlighted') || document.querySelector('.sun');
        if (currentPlanet) {
            const planetType = currentPlanet.getAttribute('data-planet') || 'sun';
            show3DPlanetView(planetType);
        } else {
            show3DPlanetView('sun');
        }
    });
    
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    
    document.getElementById('showTimeline').addEventListener('click', showTimeline);
    
    document.getElementById('toggleSound').addEventListener('click', function() {
        isSoundEnabled = !isSoundEnabled;
        this.textContent = isSoundEnabled ? '🔊 साउंड' : '🔇 साउंड';
        showNotification(isSoundEnabled ? 'साउंड चालू हो गया है' : 'साउंड बंद हो गया है', 'info');
    });
    
    // Language switcher event listeners
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            languageDropdown.classList.remove('active');
        });
    });
}

function updateInfoPanel(planetType) {
    const data = currentLanguage === 'en' ? planetDataEn[planetType] : planetData[planetType];
    if (data) {
        document.getElementById('planetTitle').textContent = data.name;
        document.getElementById('distance').textContent = data.distance;
        document.getElementById('diameter').textContent = data.diameter;
        document.getElementById('temperature').textContent = data.temperature;
        document.getElementById('function').textContent = data.function;
        document.getElementById('rotation').textContent = data.rotation;
        document.getElementById('atmosphere').textContent = data.atmosphere;
        document.getElementById('gravity').textContent = data.gravity;
        document.getElementById('moons').textContent = data.moons;
        document.getElementById('discovery').textContent = data.discovery;
        document.getElementById('composition').textContent = data.composition;
        document.getElementById('surfaceFeatures').textContent = data.surfaceFeatures;
        document.getElementById('colorReason').textContent = data.colorReason;
        document.getElementById('description').textContent = data.description;
        
        // Update fun facts
        const funFactsList = document.getElementById('funFacts');
        if (funFactsList && data.funFacts) {
            funFactsList.innerHTML = data.funFacts.map(fact => `<li>${fact}</li>`).join('');
        }
    }
}

// Add Earth rotation animation
function addEarthRotation() {
    const earth = document.querySelector('.earth');
    if (earth) {
        earth.style.animation = 'earthRotation 24s linear infinite';
    }
}

// Add Moon orbit details
function addMoonDetails() {
    const moon = document.querySelector('.moon');
    if (moon) {
        moon.title = 'चंद्रमा - पृथ्वी का एकमात्र प्राकृतिक उपग्रह';
    }
}

// Enhanced planet highlighting with more information
function highlightPlanet(element) {
    // Remove previous highlights
    removeHighlight();
    
    // Add highlight to selected planet
    element.classList.add('highlighted');
    element.style.boxShadow = '0 0 20px #4CAF50, 0 0 40px #4CAF50';
    element.style.transform = 'scale(1.3)';
    
    // Add special effects for Earth
    if (element.classList.contains('earth')) {
        const moonOrbit = document.querySelector('.moon-orbit');
        if (moonOrbit) {
            moonOrbit.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.6)';
        }
    }
    
    // Add special effects for Saturn
    if (element.classList.contains('saturn')) {
        const rings = element.querySelector('.saturn-rings');
        if (rings) {
            rings.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
        }
    }
}

function removeHighlight() {
    const highlighted = document.querySelectorAll('.highlighted');
    highlighted.forEach(element => {
        element.classList.remove('highlighted');
        element.style.boxShadow = '';
        element.style.transform = '';
    });
}

function pauseAnimation() {
    orbits.forEach(orbit => {
        orbit.style.animationPlayState = 'paused';
    });
    
    // Pause sun animation
    const sun = document.querySelector('.sun');
    const sunGlow = document.querySelector('.sun-glow');
    sun.style.animationPlayState = 'paused';
    sunGlow.style.animationPlayState = 'paused';
    
    // Pause moon orbit
    const moonOrbit = document.querySelector('.moon-orbit');
    if (moonOrbit) {
        moonOrbit.style.animationPlayState = 'paused';
    }
}

function playAnimation() {
    orbits.forEach(orbit => {
        orbit.style.animationPlayState = 'running';
    });
    
    // Resume sun animation
    const sun = document.querySelector('.sun');
    const sunGlow = document.querySelector('.sun-glow');
    sun.style.animationPlayState = 'running';
    sunGlow.style.animationPlayState = 'running';
    
    // Resume moon orbit
    const moonOrbit = document.querySelector('.moon-orbit');
    if (moonOrbit) {
        moonOrbit.style.animationPlayState = 'running';
    }
}

function updateAnimationSpeed() {
    // Update orbit speeds
    const mercuryOrbit = document.querySelector('.mercury-orbit');
    const venusOrbit = document.querySelector('.venus-orbit');
    const earthOrbit = document.querySelector('.earth-orbit');
    const marsOrbit = document.querySelector('.mars-orbit');
    const jupiterOrbit = document.querySelector('.jupiter-orbit');
    const saturnOrbit = document.querySelector('.saturn-orbit');
    const uranusOrbit = document.querySelector('.uranus-orbit');
    const neptuneOrbit = document.querySelector('.neptune-orbit');
    const moonOrbit = document.querySelector('.moon-orbit');
    
    if (mercuryOrbit) mercuryOrbit.style.animationDuration = `${10 / animationSpeed}s`;
    if (venusOrbit) venusOrbit.style.animationDuration = `${15 / animationSpeed}s`;
    if (earthOrbit) earthOrbit.style.animationDuration = `${20 / animationSpeed}s`;
    if (marsOrbit) marsOrbit.style.animationDuration = `${30 / animationSpeed}s`;
    if (jupiterOrbit) jupiterOrbit.style.animationDuration = `${50 / animationSpeed}s`;
    if (saturnOrbit) saturnOrbit.style.animationDuration = `${70 / animationSpeed}s`;
    if (uranusOrbit) uranusOrbit.style.animationDuration = `${90 / animationSpeed}s`;
    if (neptuneOrbit) neptuneOrbit.style.animationDuration = `${120 / animationSpeed}s`;
    if (moonOrbit) moonOrbit.style.animationDuration = `${2 / animationSpeed}s`;
}

// Add some interactive features
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case ' ': // Spacebar to play/pause
            event.preventDefault();
            document.getElementById('playPause').click();
            break;
        case 'ArrowUp': // Speed up
            event.preventDefault();
            document.getElementById('speedUp').click();
            break;
        case 'ArrowDown': // Slow down
            event.preventDefault();
            document.getElementById('slowDown').click();
            break;
        case 'r': // Reset
        case 'R':
            event.preventDefault();
            document.getElementById('reset').click();
            break;
        case 'f': // Show fact
        case 'F':
            event.preventDefault();
            showRandomFact();
            break;
        case 'i': // Toggle info
        case 'I':
            event.preventDefault();
            document.getElementById('toggleInfo').click();
            break;
        case '3': // 3D view
        case '3':
            event.preventDefault();
            show3DPlanetView('sun'); // Default to Sun for now
            break;
        case 'q': // Quiz
        case 'Q':
            event.preventDefault();
            startQuiz();
            break;
        case 't': // Timeline
        case 'T':
            event.preventDefault();
            showTimeline();
            break;
        case 's': // Sound
        case 'S':
            event.preventDefault();
            isSoundEnabled = !isSoundEnabled;
            document.getElementById('toggleSound').textContent = isSoundEnabled ? '🔊 साउंड' : '🔇 साउंड';
            showNotification(isSoundEnabled ? 'साउंड चालू!' : 'साउंड बंद!', 'info');
            break;
    }
});

// Add tooltips for keyboard shortcuts
function addTooltips() {
    const controls = document.querySelector('.controls');
    const buttons = controls.querySelectorAll('button');
    
    const tooltips = {
        'playPause': 'स्पेसबार - चलाएं/रोकें',
        'speedUp': '↑ तीर - तेज करें',
        'slowDown': '↓ तीर - धीमा करें',
        'reset': 'R - रीसेट',
        'toggleInfo': 'I - जानकारी',
        'showFact': 'F - तथ्य देखें',
        'show3D': '3 - 3D ग्रह व्यू',
        'startQuiz': 'Q - क्विज खेलें',
        'showTimeline': 'T - टाइमलाइन देखें',
        'toggleSound': 'S - साउंड बंद/चालू'
    };
    
    buttons.forEach(button => {
        const id = button.id;
        if (tooltips[id]) {
            button.title = tooltips[id];
        }
    });
}

// Add smooth scrolling and responsive behavior
window.addEventListener('resize', function() {
    // Debounce resize events for better performance
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(function() {
        adjustSolarSystemSize();
    }, 250);
});

// Function to adjust solar system size based on screen size
function adjustSolarSystemSize() {
    const solarSystem = document.querySelector('.solar-system');
    const container = document.querySelector('.container');
    
    if (window.innerWidth <= 480) {
        // Small phones
        solarSystem.style.transform = 'scale(0.8)';
        solarSystem.style.width = '300px';
        solarSystem.style.height = '300px';
        adjustPlanetPositions('small-mobile');
    } else if (window.innerWidth <= 768) {
        // Medium phones
        solarSystem.style.transform = 'scale(0.75)';
        solarSystem.style.width = '400px';
        solarSystem.style.height = '400px';
        adjustPlanetPositions('medium-mobile');
    } else if (window.innerWidth <= 1024) {
        // Tablets
        solarSystem.style.transform = 'scale(0.8)';
        solarSystem.style.width = '600px';
        solarSystem.style.height = '600px';
        adjustPlanetPositions('tablet');
    } else if (window.innerWidth >= 1200) {
        // Large screens
        solarSystem.style.transform = 'scale(1)';
        solarSystem.style.width = '900px';
        solarSystem.style.height = '900px';
        adjustPlanetPositions('desktop');
    } else {
        // Standard desktop
        solarSystem.style.transform = 'scale(1)';
        solarSystem.style.width = '800px';
        solarSystem.style.height = '800px';
        adjustPlanetPositions('desktop');
    }
}

// Function to adjust planet positions based on screen size
function adjustPlanetPositions(screenSize) {
    const planets = document.querySelectorAll('.planet, .sun, .moon');
    
    planets.forEach(planet => {
        // Reset any inline styles that might interfere
        planet.style.position = 'absolute';
        
        if (screenSize === 'small-mobile') {
            // Ensure planets are properly sized for small mobile
            if (planet.classList.contains('moon')) {
                planet.style.width = '6px';
                planet.style.height = '6px';
            }
        } else if (screenSize === 'medium-mobile') {
            // Ensure planets are properly sized for medium mobile
            if (planet.classList.contains('moon')) {
                planet.style.width = '7px';
                planet.style.height = '7px';
            }
        }
    });
}

// Initialize responsive behavior
window.dispatchEvent(new Event('resize'));

// Function to ensure all planet names are properly set
function ensurePlanetNames() {
    // Add hover events to all planets and sun
    const allElements = document.querySelectorAll('.planet, .sun, .moon');
    
    allElements.forEach(element => {
        // Remove any existing event listeners
        element.removeEventListener('mouseenter', showPlanetName);
        element.removeEventListener('mouseleave', hidePlanetName);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
        
        // Add hover event listeners for desktop
        element.addEventListener('mouseenter', showPlanetName);
        element.addEventListener('mouseleave', hidePlanetName);
        
        // Add touch event listeners for mobile
        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchend', handleTouchEnd);
    });
}

// Touch event handlers for mobile
function handleTouchStart(event) {
    event.preventDefault();
    showPlanetName(event.target);
}

function handleTouchEnd(event) {
    event.preventDefault();
    setTimeout(() => {
        hidePlanetName(event.target);
    }, 2000); // Show name for 2 seconds on touch
}

// Function to show planet name on hover
function showPlanetName(element) {
    const nameEl = element.querySelector('.planet-name');
    if (nameEl) {
        nameEl.style.opacity = '1';
        nameEl.style.visibility = 'visible';
        nameEl.style.display = 'block';
        nameEl.style.transform = 'translateX(-50%) translateY(-8px) scale(1.05)';
        nameEl.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.8)';
        nameEl.style.zIndex = '1000';
    }
}

// Function to hide planet name on mouse leave
function hidePlanetName(element) {
    const nameEl = element.querySelector('.planet-name');
    if (nameEl) {
        nameEl.style.opacity = '0';
        nameEl.style.visibility = 'hidden';
        nameEl.style.display = 'none';
    }
}

// Test function for language switching
function testLanguageSwitch() {
    console.log('Testing language switch...');
    console.log('Current language before switch:', currentLanguage);
    
    // Test switching to English
    switchLanguage('en');
    console.log('Language switched to English');
    
    // Test switching back to Hindi
    setTimeout(() => {
        switchLanguage('hi');
        console.log('Language switched back to Hindi');
    }, 2000);
}

// Add test function to window for debugging
window.testLanguageSwitch = testLanguageSwitch;

// क्विज बंद करने का फंक्शन
function closeQuiz() {
    isQuizActive = false;
    currentQuizQuestion = 0;
    quizScore = 0;
    
    const modal = document.querySelector('.quiz-modal');
    if (modal) {
        modal.remove();
    }
    
    // Show notification
    const message = currentLanguage === 'hi' ? 'क्विज बंद कर दिया गया है' : 'Quiz closed';
    showNotification(message, 'info');
}



// PNG प्रमाणपत्र डाउनलोड करने का फंक्शन
function downloadCertificatePNG(score, total, percentage) {
    try {
        const currentDate = new Date().toLocaleDateString();
        const userName = localStorage.getItem('userName') || 'Solar System Explorer';
        
        // Create certificate HTML for canvas
        const certificateHTML = `
            <div style="
                width: 1200px; 
                height: 800px; 
                background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
                color: white; 
                text-align: center;
                padding: 60px;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    background: linear-gradient(135deg, #2c3e50, #34495e);
                    border: 8px solid #4CAF50;
                    border-radius: 20px;
                    padding: 60px;
                    height: 100%;
                    box-sizing: border-box;
                    position: relative;
                ">
                    <div style="position: relative; z-index: 1;">
                        <h1 style="
                            font-size: 48px; 
                            color: #4CAF50; 
                            margin: 0 0 20px 0;
                            text-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
                        ">🌞 Solar System Explorer</h1>
                        
                        <p style="
                            font-size: 24px; 
                            color: #81C784; 
                            margin: 0 0 40px 0;
                        ">सौर मंडल अन्वेषक</p>
                        
                        <div style="
                            font-size: 32px; 
                            margin: 30px 0;
                            color: #FFD700;
                        ">🪐 🌍 🌞 🚀</div>
                        
                        <h2 style="
                            font-size: 36px; 
                            color: #FFD700; 
                            margin: 30px 0;
                            text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
                        ">🏆 Certificate of Achievement</h2>
                        
                        <div style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 15px;
                            padding: 30px;
                            margin: 30px 0;
                        ">
                            <p style="font-size: 18px; margin: 10px 0;"><strong>This is to certify that</strong></p>
                            <h3 style="
                                font-size: 28px; 
                                color: #4CAF50; 
                                margin: 20px 0;
                            ">${userName}</h3>
                            <p style="font-size: 18px; margin: 10px 0;"><strong>has successfully completed the Solar System Quiz</strong></p>
                        </div>
                        
                        <div style="
                            font-size: 40px; 
                            color: #4CAF50; 
                            margin: 20px 0;
                        ">Score: ${score}/${total}</div>
                        
                        <div style="
                            font-size: 36px; 
                            color: #FFD700; 
                            margin: 15px 0;
                        ">Achievement: ${percentage}%</div>
                        
                        <div style="
                            font-size: 20px; 
                            color: #81C784; 
                            margin: 20px 0;
                        ">Date: ${currentDate}</div>
                        
                        <div style="
                            margin-top: 40px; 
                            font-size: 16px; 
                            color: #ccc;
                        ">
                            <p style="margin: 10px 0;">Congratulations on exploring the wonders of our solar system!</p>
                            <p style="margin: 10px 0;">Keep learning and exploring the universe! 🌌</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Create temporary element
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = certificateHTML;
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        document.body.appendChild(tempDiv);
        
        const certificateElement = tempDiv.firstElementChild;
        
        // Convert to canvas
        html2canvas(certificateElement, {
            width: 1200,
            height: 800,
            scale: 2,
            backgroundColor: null,
            logging: false
        }).then(canvas => {
            // Download as PNG
            const link = document.createElement('a');
            link.download = `Solar_System_Certificate_${userName}_${currentDate}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Clean up
            document.body.removeChild(tempDiv);
            
            // Show success notification
            const message = currentLanguage === 'hi' ? 'PNG प्रमाणपत्र डाउनलोड हो गया है!' : 'PNG Certificate downloaded successfully!';
            showNotification(message, 'success');
        });
        
    } catch (error) {
        console.error('Error generating PNG:', error);
        const message = currentLanguage === 'hi' ? 'PNG बनाने में त्रुटि हुई' : 'Error generating PNG';
        showNotification(message, 'error');
    }
}

// प्रमाणपत्र डाउनलोड करने का फंक्शन
function downloadCertificate(score, total, percentage) {
    const currentDate = new Date().toLocaleDateString();
    const userName = localStorage.getItem('userName') || 'Solar System Explorer';
    
    // Certificate HTML template
    const certificateHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Solar System Explorer Certificate</title>
            <style>
                body {
                    margin: 0;
                    padding: 40px;
                    font-family: 'Arial', sans-serif;
                    background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
                    color: white;
                    text-align: center;
                }
                .certificate {
                    background: linear-gradient(135deg, #2c3e50, #34495e);
                    border: 8px solid #4CAF50;
                    border-radius: 20px;
                    padding: 60px;
                    max-width: 800px;
                    margin: 0 auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
                    position: relative;
                    overflow: hidden;
                }
                .certificate::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, transparent 70%);
                    animation: rotate 20s linear infinite;
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .certificate-content {
                    position: relative;
                    z-index: 1;
                }
                .header {
                    margin-bottom: 40px;
                }
                .title {
                    font-size: 3rem;
                    color: #4CAF50;
                    margin: 0;
                    text-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
                    font-weight: bold;
                }
                .subtitle {
                    font-size: 1.5rem;
                    color: #81C784;
                    margin: 10px 0;
                }
                .achievement {
                    font-size: 2rem;
                    color: #FFD700;
                    margin: 30px 0;
                    text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
                }
                .user-info {
                    background: rgba(76, 175, 80, 0.1);
                    border: 2px solid rgba(76, 175, 80, 0.3);
                    border-radius: 15px;
                    padding: 30px;
                    margin: 30px 0;
                }
                .score {
                    font-size: 2.5rem;
                    color: #4CAF50;
                    margin: 20px 0;
                }
                .percentage {
                    font-size: 2rem;
                    color: #FFD700;
                    margin: 15px 0;
                }
                .date {
                    font-size: 1.2rem;
                    color: #81C784;
                    margin: 20px 0;
                }
                .footer {
                    margin-top: 40px;
                    font-size: 1rem;
                    color: #ccc;
                }
                .planets-decoration {
                    font-size: 2rem;
                    margin: 20px 0;
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            </style>
        </head>
        <body>
            <div class="certificate">
                <div class="certificate-content">
                    <div class="header">
                        <h1 class="title">🌞 Solar System Explorer</h1>
                        <p class="subtitle">सौर मंडल अन्वेषक</p>
                    </div>
                    
                    <div class="planets-decoration">
                        🪐 🌍 🌞 🚀
                    </div>
                    
                    <h2 class="achievement">🏆 Certificate of Achievement</h2>
                    
                    <div class="user-info">
                        <p><strong>This is to certify that</strong></p>
                        <h3>${userName}</h3>
                        <p><strong>has successfully completed the Solar System Quiz</strong></p>
                    </div>
                    
                    <div class="score">
                        Score: ${score}/${total}
                    </div>
                    
                    <div class="percentage">
                        Achievement: ${percentage}%
                    </div>
                    
                    <div class="date">
                        Date: ${currentDate}
                    </div>
                    
                    <div class="footer">
                        <p>Congratulations on exploring the wonders of our solar system!</p>
                        <p>Keep learning and exploring the universe! 🌌</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    
    // Create blob and download
    const blob = new Blob([certificateHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Solar_System_Certificate_${userName}_${currentDate}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show success notification
    const message = currentLanguage === 'hi' ? 'प्रमाणपत्र डाउनलोड हो गया है!' : 'Certificate downloaded successfully!';
    showNotification(message, 'success');
}