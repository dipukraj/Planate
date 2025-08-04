// Planet data with detailed information in Hindi
const planetData = {
    sun: {
        name: "सूर्य (Sun)",
        distance: "0 km (केंद्र)",
        diameter: "1,392,700 km",
        temperature: "5,778 K (सतह), 15,000,000 K (केंद्र)",
        description: "सूर्य हमारे सौर मंडल का केंद्र है। यह एक तारा है जो नाभिकीय संलयन से ऊर्जा पैदा करता है। सूर्य से प्रकाश और गर्मी मिलती है जो पृथ्वी पर जीवन के लिए आवश्यक है। सूर्य का गुरुत्वाकर्षण सभी ग्रहों को अपनी कक्षा में रखता है।",
        function: "ऊर्जा का स्रोत, गुरुत्वाकर्षण केंद्र",
        rotation: "25-35 दिन (अक्षीय घूर्णन)"
    },
    mercury: {
        name: "बुध (Mercury)",
        distance: "57.9 मिलियन km (सूर्य से)",
        diameter: "4,879 km",
        temperature: "167°C (दिन), -173°C (रात)",
        description: "बुध सूर्य के सबसे नजदीक का ग्रह है। यह सबसे छोटा ग्रह है और सूर्य के चारों ओर सबसे तेज घूमता है। बुध पर वायुमंडल नहीं है, इसलिए यहाँ तापमान में बहुत अंतर है।",
        function: "सौर मंडल का सबसे तेज ग्रह",
        rotation: "59 दिन (अक्षीय घूर्णन), 88 दिन (सूर्य की परिक्रमा)"
    },
    venus: {
        name: "शुक्र (Venus)",
        distance: "108.2 मिलियन km (सूर्य से)",
        diameter: "12,104 km",
        temperature: "462°C (औसत)",
        description: "शुक्र को 'सुबह का तारा' भी कहते हैं। यह सबसे गर्म ग्रह है क्योंकि इसका वायुमंडल कार्बन डाइऑक्साइड से भरा है। शुक्र पृथ्वी के आकार का है लेकिन पूरी तरह से अलग है।",
        function: "सौर मंडल का सबसे गर्म ग्रह",
        rotation: "243 दिन (अक्षीय घूर्णन), 225 दिन (सूर्य की परिक्रमा)"
    },
    earth: {
        name: "पृथ्वी (Earth)",
        distance: "149.6 मिलियन km (सूर्य से)",
        diameter: "12,756 km",
        temperature: "15°C (औसत)",
        description: "पृथ्वी एकमात्र ज्ञात ग्रह है जहाँ जीवन है। इसमें पानी, ऑक्सीजन और सुरक्षात्मक वायुमंडल है। पृथ्वी का एक चंद्रमा है जो ज्वार-भाटा पैदा करता है।",
        function: "जीवन का घर, जल का ग्रह",
        rotation: "24 घंटे (अक्षीय घूर्णन), 365.25 दिन (सूर्य की परिक्रमा)"
    },
    mars: {
        name: "मंगल (Mars)",
        distance: "227.9 मिलियन km (सूर्य से)",
        diameter: "6,792 km",
        temperature: "-65°C (औसत)",
        description: "मंगल को 'लाल ग्रह' कहते हैं क्योंकि इसकी सतह लोहे के ऑक्साइड से लाल है। यहाँ पानी के निशान मिले हैं और भविष्य में मानव बस्ती बसाने की योजना है।",
        function: "मानव अन्वेषण का लक्ष्य",
        rotation: "24.6 घंटे (अक्षीय घूर्णन), 687 दिन (सूर्य की परिक्रमा)"
    },
    jupiter: {
        name: "बृहस्पति (Jupiter)",
        distance: "778.5 मिलियन km (सूर्य से)",
        diameter: "142,984 km",
        temperature: "-110°C",
        description: "बृहस्पति सबसे बड़ा ग्रह है। यह गैस का ग्रह है और इसमें 79 चंद्रमा हैं। बृहस्पति का गुरुत्वाकर्षण सौर मंडल को स्थिर रखने में मदद करता है।",
        function: "सौर मंडल का रक्षक, सबसे बड़ा ग्रह",
        rotation: "9.9 घंटे (अक्षीय घूर्णन), 12 वर्ष (सूर्य की परिक्रमा)"
    },
    saturn: {
        name: "शनि (Saturn)",
        distance: "1.43 बिलियन km (सूर्य से)",
        diameter: "120,536 km",
        temperature: "-140°C",
        description: "शनि अपने सुंदर वलयों के लिए प्रसिद्ध है। ये वलय बर्फ और चट्टान के टुकड़ों से बने हैं। शनि के 82 चंद्रमा हैं।",
        function: "सौर मंडल का सबसे सुंदर ग्रह",
        rotation: "10.7 घंटे (अक्षीय घूर्णन), 29.5 वर्ष (सूर्य की परिक्रमा)"
    },
    uranus: {
        name: "अरुण (Uranus)",
        distance: "2.87 बिलियन km (सूर्य से)",
        diameter: "51,118 km",
        temperature: "-195°C",
        description: "अरुण अपनी तरफ लेटा हुआ घूमता है। यह हाइड्रोजन और हीलियम से बना है। अरुण के 27 चंद्रमा हैं और यह नीले रंग का दिखता है।",
        function: "अपनी तरफ घूमने वाला ग्रह",
        rotation: "17 घंटे (अक्षीय घूर्णन), 84 वर्ष (सूर्य की परिक्रमा)"
    },
    neptune: {
        name: "वरुण (Neptune)",
        distance: "4.50 बिलियन km (सूर्य से)",
        diameter: "49,528 km",
        temperature: "-200°C",
        description: "वरुण सबसे दूर का ग्रह है। यहाँ तेज हवाएं चलती हैं जो 2,100 km/h तक पहुंच सकती हैं। वरुण के 14 चंद्रमा हैं।",
        function: "सौर मंडल का सबसे दूर का ग्रह",
        rotation: "16 घंटे (अक्षीय घूर्णन), 165 वर्ष (सूर्य की परिक्रमा)"
    },
    moon: {
        name: "चंद्रमा (Moon)",
        distance: "384,400 km (पृथ्वी से)",
        diameter: "3,474 km",
        temperature: "127°C (दिन), -173°C (रात)",
        description: "चंद्रमा पृथ्वी का एकमात्र प्राकृतिक उपग्रह है। यह पृथ्वी पर ज्वार-भाटा पैदा करता है। चंद्रमा पर कोई वायुमंडल नहीं है।",
        function: "पृथ्वी का उपग्रह, ज्वार-भाटा का कारण",
        rotation: "27.3 दिन (पृथ्वी की परिक्रमा)"
    }
};

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
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
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
    initializeSolarSystem();
    setupEventListeners();
    updateInfoPanel('sun');
    showWelcomeMessage();
    
    // Ensure planet names are set after a short delay
    setTimeout(() => {
        ensurePlanetNames();
    }, 100);
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
        });
    });
    
    // Add click event to sun
    const sun = document.querySelector('.sun');
    sun.addEventListener('click', function() {
        updateInfoPanel('sun');
        highlightPlanet(this);
    });
    
    // Add click event to moon
    const moon = document.querySelector('.moon');
    if (moon) {
        moon.addEventListener('click', function() {
            updateInfoPanel('moon');
            highlightPlanet(this);
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
        animationSpeed = Math.min(animationSpeed * 2, 8);
        updateAnimationSpeed();
    });
    
    // Slow down button
    document.getElementById('slowDown').addEventListener('click', function() {
        animationSpeed = Math.max(animationSpeed / 2, 0.25);
        updateAnimationSpeed();
    });
    
    // Reset button
    document.getElementById('reset').addEventListener('click', function() {
        animationSpeed = 1;
        updateAnimationSpeed();
        updateInfoPanel('sun');
        removeHighlight();
    });
    
    // Toggle Info button
    document.getElementById('toggleInfo').addEventListener('click', function() {
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
    
    // Add fact button
    const factButton = document.createElement('button');
    factButton.textContent = '💡 तथ्य';
    factButton.id = 'showFact';
    factButton.addEventListener('click', showRandomFact);
    document.querySelector('.controls').appendChild(factButton);
}

function updateInfoPanel(planetType) {
    const data = planetData[planetType];
    if (data) {
        document.getElementById('planetTitle').textContent = data.name;
        document.getElementById('distance').textContent = data.distance;
        document.getElementById('diameter').textContent = data.diameter;
        document.getElementById('temperature').textContent = data.temperature;
        document.getElementById('function').textContent = data.function;
        document.getElementById('rotation').textContent = data.rotation;
        document.getElementById('description').textContent = data.description;
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
        'showFact': 'F - तथ्य दिखाएं'
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
    // Adjust solar system size for mobile
    const solarSystem = document.querySelector('.solar-system');
    const container = document.querySelector('.container');
    
    if (window.innerWidth < 768) {
        solarSystem.style.transform = 'scale(0.6)';
    } else if (window.innerWidth < 1024) {
        solarSystem.style.transform = 'scale(0.8)';
    } else {
        solarSystem.style.transform = 'scale(1)';
    }
});

// Initialize responsive behavior
window.dispatchEvent(new Event('resize'));

// Function to ensure all planet names are properly set
function ensurePlanetNames() {
    const planetNames = {
        'sun': 'सूर्य',
        'mercury': 'बुध',
        'venus': 'शुक्र',
        'earth': 'पृथ्वी',
        'mars': 'मंगल',
        'jupiter': 'बृहस्पति',
        'saturn': 'शनि',
        'uranus': 'अरुण',
        'neptune': 'वरुण',
        'moon': 'चंद्रमा'
    };
    
    // Add names to all planets including sun
    Object.keys(planetNames).forEach(planetType => {
        const planet = document.querySelector(`[data-planet="${planetType}"]`);
        if (planet) {
            let nameElement = planet.querySelector('.planet-name');
            if (!nameElement) {
                nameElement = document.createElement('div');
                nameElement.className = 'planet-name';
                planet.appendChild(nameElement);
            }
            nameElement.textContent = planetNames[planetType];
            
            // Remove any existing event listeners
            planet.removeEventListener('mouseenter', showPlanetName);
            planet.removeEventListener('mouseleave', hidePlanetName);
            
            // Add hover event listeners
            planet.addEventListener('mouseenter', showPlanetName);
            planet.addEventListener('mouseleave', hidePlanetName);
        }
    });
    
    // Also add to sun element specifically
    const sun = document.querySelector('.sun');
    if (sun) {
        let sunNameElement = sun.querySelector('.planet-name');
        if (!sunNameElement) {
            sunNameElement = document.createElement('div');
            sunNameElement.className = 'planet-name';
            sun.appendChild(sunNameElement);
        }
        sunNameElement.textContent = 'सूर्य';
        
        sun.removeEventListener('mouseenter', showPlanetName);
        sun.removeEventListener('mouseleave', hidePlanetName);
        sun.addEventListener('mouseenter', showPlanetName);
        sun.addEventListener('mouseleave', hidePlanetName);
    }
}

// Function to show planet name on hover
function showPlanetName() {
    const nameEl = this.querySelector('.planet-name');
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
function hidePlanetName() {
    const nameEl = this.querySelector('.planet-name');
    if (nameEl) {
        nameEl.style.opacity = '0';
        nameEl.style.visibility = 'hidden';
        nameEl.style.display = 'none';
    }
}