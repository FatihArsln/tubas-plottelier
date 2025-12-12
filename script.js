// Produktdaten mit echten Bildern aus dem img-Ordner
// WICHTIG: Alle Produkte können mit eigenen Motiven personalisiert werden
// Kategorien: "textilien", "geschenke", "taschen"
const products = [
    {
        id: 0, // Eindeutige Produkt-ID (Größenübersicht - wird zuerst angezeigt)
        name: "Größenübersicht", // Produktname
        description: "Übersicht der verfügbaren Taschen-Größen", // Produktbeschreibung
        price: 0, // Kein Preis für Größenübersicht
        image: "img/groessenuebersicht.jpg", // Pfad zum Größenübersichtsbild (bitte Dateiname anpassen)
        category: "taschen", // Kategorie des Produkts
        isSizeGuide: true // Markiert dieses Produkt als Größenübersicht
    },
    {
        id: 1, // Eindeutige Produkt-ID
        name: "Tasche klein", // Produktname
        description: "Personalisierte Tasche - wählen Sie Ihr eigenes Motiv", // Produktbeschreibung
        price: 29.99, // Geschätzter Produktpreis in Euro (Endpreis nach Absprache)
        image: "img/IMG-20251108-WA0006.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 2, // Eindeutige Produkt-ID
        name: "Produkt 2", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 34.99, // Geschätzter Produktpreis in Euro (Endpreis nach Absprache)
        image: "img/IMG-20251108-WA0007.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 3, // Eindeutige Produkt-ID
        name: "Produkt 3", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 39.99, // Geschätzter Produktpreis in Euro (Endpreis nach Absprache)
        image: "img/IMG-20251108-WA0008.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 4, // Eindeutige Produkt-ID
        name: "Produkt 4", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 44.99, // Geschätzter Produktpreis in Euro (Endpreis nach Absprache)
        image: "img/IMG-20251108-WA0009.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 5, // Eindeutige Produkt-ID
        name: "Produkt 5", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 49.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0010.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 6, // Eindeutige Produkt-ID
        name: "Produkt 6", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 54.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0011.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 7, // Eindeutige Produkt-ID
        name: "Produkt 7", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 59.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0012.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 8, // Eindeutige Produkt-ID
        name: "Produkt 8", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 64.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0013.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 9, // Eindeutige Produkt-ID
        name: "Produkt 9", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 69.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0014.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 10, // Eindeutige Produkt-ID
        name: "Produkt 10", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 74.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0015.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 11, // Eindeutige Produkt-ID
        name: "Produkt 11", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 79.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0016.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 12, // Eindeutige Produkt-ID
        name: "Produkt 12", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 84.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0017.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 13, // Eindeutige Produkt-ID
        name: "Produkt 13", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 89.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0018.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 14, // Eindeutige Produkt-ID
        name: "Produkt 14", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 94.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0019.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 15, // Eindeutige Produkt-ID
        name: "Produkt 15", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 99.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0020.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 16, // Eindeutige Produkt-ID
        name: "Produkt 16", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 104.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0021.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 17, // Eindeutige Produkt-ID
        name: "Produkt 17", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 109.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0022.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 18, // Eindeutige Produkt-ID
        name: "Produkt 18", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 114.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0023.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 19, // Eindeutige Produkt-ID
        name: "Produkt 19", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 119.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0024.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 20, // Eindeutige Produkt-ID
        name: "Produkt 20", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 124.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0025.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 21, // Eindeutige Produkt-ID
        name: "Reise Etui", // Produktname
        description: "Personalisierbares Reise Etui für Documente - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 129.99, // Produktpreis in Euro
        images: [
            "img/IMG-20251108-WA0026.jpg",
            "img/IMG-20251108-WA0027.jpg"
        ], // Pfad zum Produktbild (mehrere Bilder)
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 22, // Eindeutige Produkt-ID
        name: "Produkt 23", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 139.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0028.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 23, // Eindeutige Produkt-ID
        name: "Produkt 24", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 144.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0029.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 24, // Eindeutige Produkt-ID
        name: "Produkt 25", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 149.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0030.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 25, // Eindeutige Produkt-ID
        name: "Produkt 26", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 154.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0031.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 26, // Eindeutige Produkt-ID
        name: "Produkt 27", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 159.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0032.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 27, // Eindeutige Produkt-ID
        name: "Produkt 28", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 164.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0033.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 28, // Eindeutige Produkt-ID
        name: "Produkt 29", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 169.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0034.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 29, // Eindeutige Produkt-ID
        name: "Produkt 30", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 174.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0035.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 30, // Eindeutige Produkt-ID
        name: "Produkt 31", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 179.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0036.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 31, // Eindeutige Produkt-ID
        name: "Produkt 32", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 184.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0037.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 32, // Eindeutige Produkt-ID
        name: "Produkt 33", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 189.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0038.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 33, // Eindeutige Produkt-ID
        name: "Produkt 34", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 194.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0039.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 34, // Eindeutige Produkt-ID
        name: "Baby Kiopfkissen", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 199.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0040.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 35, // Eindeutige Produkt-ID
        name: "Produkt 36", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 204.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0041.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 36, // Eindeutige Produkt-ID
        name: "Produkt 37", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 209.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0042.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 37, // Eindeutige Produkt-ID
        name: "Produkt 38", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 214.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0043.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 38, // Eindeutige Produkt-ID
        name: "Produkt 39", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 219.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0044.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 39, // Eindeutige Produkt-ID
        name: "Verlobungs Tablett", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 224.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0045.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 40, // Eindeutige Produkt-ID
        name: "", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 229.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0046.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 41, // Eindeutige Produkt-ID
        name: "Verlobungsband", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 234.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0047.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 42, // Eindeutige Produkt-ID
        name: "Produkt 43", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 239.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0048.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 43, // Eindeutige Produkt-ID
        name: "Produkt 44", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 244.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0049.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 44, // Eindeutige Produkt-ID
        name: "Produkt 45", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 249.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0050.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 45, // Eindeutige Produkt-ID
        name: "Produkt 46", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 254.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0051.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 46, // Eindeutige Produkt-ID
        name: "Produkt 47", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 259.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0052.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 47, // Eindeutige Produkt-ID
        name: "Produkt 48", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 264.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0053.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 48, // Eindeutige Produkt-ID
        name: "Produkt 49", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 269.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0054.jpg", // Pfad zum Produktbild
        category: "textilien" // Kategorie des Produkts
    },
    {
        id: 49, // Eindeutige Produkt-ID
        name: "Produkt 50", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 274.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0055.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 50, // Eindeutige Produkt-ID
        name: "Produkt 51", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 279.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0056.jpg", // Pfad zum Produktbild
        category: "taschen" // Kategorie des Produkts
    },
    {
        id: 51, // Eindeutige Produkt-ID
        name: "Produkt 52", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 284.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0057.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    },
    {
        id: 52, // Eindeutige Produkt-ID
        name: "Geschenke Box", // Produktname
        description: "Personalisierbares Produkt - mit Ihrem eigenen Motiv", // Produktbeschreibung
        price: 289.99, // Produktpreis in Euro
        image: "img/IMG-20251108-WA0058.jpg", // Pfad zum Produktbild
        category: "geschenke" // Kategorie des Produkts
    }
];

// Warenkorb-Array (speichert alle hinzugefügten Produkte)
let cart = [];

// Aktive Kategorie für Filter (null = alle anzeigen)
let activeCategory = null;

// E-Mail-Adresse für Anfragen (kann hier angepasst werden)
const CONTACT_EMAIL = "service_7ke1md3@live.de"; // Bitte durch Ihre E-Mail-Adresse ersetzen

// WhatsApp-Nummer für Anfragen (bitte hier Ihre Nummer eintragen, z.B. "491234567890" ohne + oder Leerzeichen)
const WHATSAPP_NUMBER = "905388343974"; // Bitte hier Ihre WhatsApp-Nummer eintragen (z.B. "491234567890")

// Zoom-Variablen für das Popup-Bild
let zoomLevel = 1; // Aktueller Zoom-Level (1 = 100%)
let isDragging = false; // Gibt an, ob das Bild gerade gezogen wird
let startX = 0; // Start-X-Position beim Ziehen
let startY = 0; // Start-Y-Position beim Ziehen
let offsetX = 0; // X-Offset für die Bildposition
let offsetY = 0; // Y-Offset für die Bildposition
let lastTouchDistance = 0; // Letzte Distanz zwischen zwei Touch-Punkten (für Pinch-Zoom)

// Funktion zum Initialisieren der Seite (wird beim Laden aufgerufen)
function init() {
    setupNavigation(); // Richtet Navigation ein
    updateCartDisplay(); // Aktualisiert die Warenkorb-Anzeige
    setupEventListeners(); // Richtet Event-Listener ein
    showPage("home"); // Zeigt die Startseite
}

// Funktion zum Einrichten der Navigation
function setupNavigation() {
    const homeLink = document.getElementById("homeLink"); // Holt den Startseiten-Link
    const shopLinkNav = document.getElementById("shopLinkNav"); // Holt den Shop-Link in der Navigation
    const shopLink = document.getElementById("shopLink"); // Holt den Shop-Link auf der Startseite
    const contactForm = document.getElementById("contactForm"); // Holt das Kontaktformular

    // Event-Listener für Startseiten-Link
    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault(); // Verhindert Standard-Link-Verhalten
            showPage("home"); // Zeigt die Startseite
        });
    }

    // Event-Listener für Katalog-Link in Navigation
    if (shopLinkNav) {
        shopLinkNav.addEventListener("click", (e) => {
            e.preventDefault(); // Verhindert Standard-Link-Verhalten
            showPage("shop"); // Zeigt die Katalog-Seite
        });
    }

    // Event-Listener für Katalog-Link auf Startseite
    if (shopLink) {
        shopLink.addEventListener("click", (e) => {
            e.preventDefault(); // Verhindert Standard-Link-Verhalten
            showPage("shop"); // Zeigt die Katalog-Seite
        });
    }

    // Event-Listener für Kontaktformular
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Verhindert Standard-Formular-Verhalten
            handleContactForm(); // Behandelt das Kontaktformular
        });
    }
}

// Funktion zum Wechseln zwischen den Seiten
function showPage(page) {
    const homeSection = document.getElementById("home"); // Holt die Startseite
    const shopSection = document.getElementById("shop"); // Holt die Shop-Seite
    const homeLink = document.getElementById("homeLink"); // Holt den Startseiten-Link
    const shopLinkNav = document.getElementById("shopLinkNav"); // Holt den Shop-Link

    // Entfernt aktive Klasse von allen Seiten
    if (homeSection) homeSection.classList.remove("active"); // Entfernt aktive Klasse von Startseite
    if (shopSection) shopSection.classList.remove("active"); // Entfernt aktive Klasse von Shop-Seite

    // Entfernt aktive Klasse von allen Links
    if (homeLink) homeLink.classList.remove("active"); // Entfernt aktive Klasse von Startseiten-Link
    if (shopLinkNav) shopLinkNav.classList.remove("active"); // Entfernt aktive Klasse von Shop-Link

    // Zeigt die gewünschte Seite
    if (page === "home") {
        if (homeSection) homeSection.classList.add("active"); // Fügt aktive Klasse zur Startseite hinzu
        if (homeLink) homeLink.classList.add("active"); // Fügt aktive Klasse zum Startseiten-Link hinzu
    } else if (page === "shop") {
        if (shopSection) shopSection.classList.add("active"); // Fügt aktive Klasse zur Katalog-Seite hinzu
        if (shopLinkNav) shopLinkNav.classList.add("active"); // Fügt aktive Klasse zum Katalog-Link hinzu
        renderProducts(); // Rendert die Produkte (nur wenn Katalog geöffnet wird)
    }
}

// Funktion zum Behandeln des Kontaktformulars
function handleContactForm() {
    const name = document.getElementById("contactName").value; // Holt den Namen
    const email = document.getElementById("contactEmail").value; // Holt die E-Mail
    const message = document.getElementById("contactMessage").value; // Holt die Nachricht

    // Erstellt den E-Mail-Betreff
    const subject = encodeURIComponent("Kontaktanfrage von " + name); // Betreff der E-Mail

    // Erstellt den E-Mail-Text
    const body = encodeURIComponent(`Hallo,

ich habe eine Frage:

${message}

Mit freundlichen Grüßen
${name}
${email}`); // Text der E-Mail

    // Erstellt den mailto: Link
    const emailLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`; // Erstellt mailto: Link
    window.location.href = emailLink; // Öffnet den E-Mail-Client

    // Setzt das Formular zurück
    document.getElementById("contactForm").reset(); // Setzt das Formular zurück
}

// Funktion zum Rendern aller Produkte
function renderProducts() {
    const productsGrid = document.getElementById("productsGrid"); // Holt das Produktgrid-Element
    productsGrid.innerHTML = ""; // Leert das Grid

    // Filtert Produkte nach aktiver Kategorie
    let filteredProducts = activeCategory 
        ? products.filter(product => product.category === activeCategory) // Filtert nach Kategorie
        : products; // Zeigt alle Produkte, wenn keine Kategorie ausgewählt ist

    // Sortiert Produkte: Größenübersicht zuerst, dann nach ID
    filteredProducts = filteredProducts.sort((a, b) => {
        if (a.isSizeGuide) return -1; // Größenübersicht kommt zuerst
        if (b.isSizeGuide) return 1; // Größenübersicht kommt zuerst
        return a.id - b.id; // Ansonsten nach ID sortieren
    });

    // Geht durch jedes gefilterte Produkt im Array
    filteredProducts.forEach(product => {
        // Erstellt eine Produktkarte für jedes Produkt
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard); // Fügt die Karte zum Grid hinzu
    });
}

// Hilfsfunktion zum Abrufen der Bilder eines Produkts (unterstützt sowohl image als auch images)
function getProductImages(product) {
    // Prüft, ob das Produkt ein images-Array hat
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
        return product.images; // Gibt das images-Array zurück
    }
    // Fallback: verwendet das einzelne image
    return product.image ? [product.image] : []; // Gibt ein Array mit einem Bild zurück
}

// Funktion zum Erstellen einer Produktkarte
function createProductCard(product) {
    // Erstellt ein div-Element für die Karte
    const card = document.createElement("div");
    
    // Setzt CSS-Klasse basierend auf Produkttyp
    if (product.isSizeGuide) {
        card.className = "product-card size-guide-card"; // Spezielle Klasse für Größenübersicht
    } else {
        card.className = "product-card"; // Normale Produktkarte
    }

    // Prüft, ob das Produkt bereits im Warenkorb ist (nur für normale Produkte)
    const isInCart = product.isSizeGuide ? false : cart.some(item => item.id === product.id);

    // Holt alle Bilder des Produkts
    const productImages = getProductImages(product); // Ruft getProductImages auf
    const firstImage = productImages[0] || ""; // Nimmt das erste Bild (oder leeren String)

    // Prüft, ob es eine URL (echtes Bild) oder ein Emoji ist
    let imageHTML = ""; // Variable für das Bild-HTML
    if (firstImage.startsWith("http") || firstImage.startsWith("/") || firstImage.startsWith("./") || firstImage.startsWith("img/")) {
        // Wenn es eine URL/Pfad ist, wird ein img-Tag erstellt
        imageHTML = `<img src="${firstImage}" alt="${product.name}" class="product-img">`; // Erstellt img-Tag mit Klasse
    } else {
        // Wenn es ein Emoji ist, wird es als Text angezeigt
        imageHTML = firstImage; // Setzt das Emoji als Text
    }

    // Erstellt einen Indikator für mehrere Bilder
    const imageCountIndicator = productImages.length > 1 
        ? `<div class="image-count-badge">${productImages.length} Bilder</div>` // Zeigt Anzahl der Bilder
        : ""; // Kein Indikator bei nur einem Bild

    // Erstellt den HTML-Inhalt der Karte
    if (product.isSizeGuide) {
        // Spezielles Layout für Größenübersicht (ohne Button)
        card.innerHTML = `
            <div class="product-image-container" data-product-id="${product.id}">
                <div class="product-image">${imageHTML}</div> <!-- Zeigt das Produktbild -->
            </div>
            <div class="product-name">${product.name}</div> <!-- Zeigt den Produktnamen -->
            <div class="product-description">${product.description}</div> <!-- Zeigt die Beschreibung -->
        `;
    } else {
        // Normales Layout für Produkte (mit Button)
        card.innerHTML = `
            <div class="product-image-container" data-product-id="${product.id}">
                <div class="product-image">${imageHTML}</div> <!-- Zeigt das Produktbild -->
                ${imageCountIndicator} <!-- Zeigt Indikator für mehrere Bilder -->
            </div>
            <div class="product-name">${product.name}</div> <!-- Zeigt den Produktnamen -->
            <div class="product-description">${product.description}</div> <!-- Zeigt die Beschreibung -->
            <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" data-product-id="${product.id}">
                ${isInCart ? '✓ Im Warenkorb' : 'Zum Warenkorb hinzufügen'} <!-- Button-Text je nach Status -->
            </button>
        `;

        // Event-Listener für den Button zum Hinzufügen (nur für normale Produkte)
        const addButton = card.querySelector(".add-to-cart-btn");
        if (addButton) {
            addButton.addEventListener("click", () => addToCart(product.id)); // Ruft addToCart auf beim Klick
        }
    }

    // Event-Listener für das Produktbild (öffnet Popup)
    const productImageContainer = card.querySelector(".product-image-container");
    if (productImageContainer) {
        productImageContainer.addEventListener("click", () => {
            openImagePopup(product); // Öffnet das Bild-Popup
        });
    }

    return card; // Gibt die fertige Karte zurück
}

// Funktion zum Hinzufügen eines Produkts zum Warenkorb
function addToCart(productId) {
    // Findet das Produkt anhand der ID
    const product = products.find(p => p.id === productId);

    // Prüft, ob das Produkt bereits im Warenkorb ist
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Wenn bereits vorhanden, erhöht die Menge um 1
        existingItem.quantity += 1;
    } else {
        // Wenn nicht vorhanden, fügt das Produkt mit Menge 1 hinzu
        cart.push({
            ...product, // Kopiert alle Produkteigenschaften
            quantity: 1 // Setzt die Menge auf 1
        });
    }

    // Aktualisiert die Anzeige
    updateCartDisplay(); // Aktualisiert die Warenkorb-Anzeige
    renderProducts(); // Rendert Produkte neu, um Button-Status zu aktualisieren
}

// Funktion zum Entfernen eines Produkts aus dem Warenkorb
function removeFromCart(productId) {
    // Findet den Index des Artikels im Warenkorb
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        // Entfernt das Element aus dem Array
        cart.splice(itemIndex, 1);
        // Aktualisiert die Anzeige
    updateCartDisplay(); // Aktualisiert die Warenkorb-Anzeige
        renderProducts(); // Rendert Produkte neu, um Button-Status zu aktualisieren
    }
}

// Funktion zum Aktualisieren der Warenkorb-Anzeige
function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems"); // Holt das Warenkorb-Container-Element
    const cartCount = document.getElementById("cartCount"); // Holt das Zähler-Element
    const cartNotice = document.getElementById("cartNotice"); // Holt den Hinweis-Container
    const clearCartBtn = document.getElementById("clearCartBtn"); // Holt den Leeren-Button
    const sendRequestBtn = document.getElementById("sendRequestBtn"); // Holt den Anfrage-Button

    // Berechnet die Gesamtanzahl der Artikel im Warenkorb
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems; // Aktualisiert den Zähler

    // Wenn der Warenkorb leer ist
    if (cart.length === 0) {
        if (cartItems) cartItems.innerHTML = '<p class="empty-cart">Ihre Auswahl ist leer</p>'; // Zeigt leeren Warenkorb-Hinweis
        if (cartNotice) cartNotice.style.display = "none"; // Versteckt den Hinweis
        if (clearCartBtn) clearCartBtn.style.display = "none"; // Versteckt den Leeren-Button
        if (sendRequestBtn) sendRequestBtn.style.display = "none"; // Versteckt den Anfrage-Button (wird durch requestButtons ersetzt)
        const requestButtons = document.getElementById("requestButtons"); // Holt den Container für Anfrage-Buttons
        if (requestButtons) requestButtons.style.display = "none"; // Versteckt den Container
    } else {
        // Wenn der Warenkorb Artikel enthält
        if (cartItems) cartItems.innerHTML = ""; // Leert den Container

        // Geht durch jeden Artikel im Warenkorb
        cart.forEach(item => {
            // Erstellt ein Element für jeden Artikel
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item"; // Setzt die CSS-Klasse

            // Erstellt den HTML-Inhalt des Artikels
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.name}</span> <!-- Name -->
                    ${item.quantity > 1 ? `<span class="cart-item-quantity">Menge: ${item.quantity}</span>` : ''} <!-- Menge wenn > 1 -->
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item-btn" data-product-id="${item.id}" title="Entfernen">×</button> <!-- Button zum Entfernen -->
                </div>
            `;

            // Event-Listener für den Entfernen-Button
            const removeButton = cartItem.querySelector(".remove-item-btn");
            if (removeButton) {
            removeButton.addEventListener("click", () => removeFromCart(item.id)); // Ruft removeFromCart auf beim Klick
            }

            if (cartItems) cartItems.appendChild(cartItem); // Fügt den Artikel zum Container hinzu
        });

        // Zeigt die Elemente an
        if (cartNotice) cartNotice.style.display = "block"; // Zeigt den Hinweis
        if (clearCartBtn) clearCartBtn.style.display = "block"; // Zeigt den Leeren-Button
        const requestButtons = document.getElementById("requestButtons"); // Holt den Container für Anfrage-Buttons
        if (requestButtons) requestButtons.style.display = "flex"; // Zeigt den Container mit beiden Buttons
    }
}

// Funktion zum Erstellen der E-Mail-Nachricht
function createEmailMessage() {
    // Erstellt eine Liste der ausgewählten Produkte
    let productList = ""; // Variable für die Produktliste
    cart.forEach((item, index) => {
        productList += `${index + 1}. ${item.name}${item.quantity > 1 ? ` (Menge: ${item.quantity})` : ''}\n`; // Fügt jedes Produkt zur Liste hinzu
    });

    // Erstellt den E-Mail-Betreff
    const subject = encodeURIComponent("Anfrage für personalisierte Produkte"); // Betreff der E-Mail

    // Erstellt den E-Mail-Text
    const body = encodeURIComponent(`Hallo,

ich interessiere mich für folgende personalisierte Produkte:

${productList}

Bitte kontaktieren Sie mich, um die Gestaltung der Produkte zu besprechen.

Mit freundlichen Grüßen`); // Text der E-Mail

    // Erstellt den mailto: Link
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`; // Gibt den mailto: Link zurück
}

// Funktion zum Erstellen eines direkten WhatsApp-Links (ohne Nachricht)
function createWhatsAppDirectLink() {
    // Entfernt + und Leerzeichen aus der Nummer für WhatsApp-Link
    const cleanNumber = WHATSAPP_NUMBER.replace(/[\s\+]/g, ""); // Entfernt Leerzeichen und +
    
    // Erstellt den direkten WhatsApp-Link
    return `https://wa.me/${cleanNumber}`; // Gibt den direkten WhatsApp-Link zurück
}

// Funktion zum Erstellen der WhatsApp-Nachricht für Warenkorb-Anfrage
function createWhatsAppRequestMessage() {
    // Erstellt eine Liste der ausgewählten Produkte
    let productList = ""; // Variable für die Produktliste
    cart.forEach((item, index) => {
        productList += `${index + 1}. ${item.name}${item.quantity > 1 ? ` (Menge: ${item.quantity})` : ''}\n`; // Fügt jedes Produkt zur Liste hinzu
    });

    // Erstellt die WhatsApp-Nachricht
    const whatsappMessage = `Hallo,

ich interessiere mich für folgende personalisierte Produkte:

${productList}

Bitte kontaktieren Sie mich, um die Gestaltung der Produkte zu besprechen.

Mit freundlichen Grüßen`; // Text der WhatsApp-Nachricht

    // Kodiert die Nachricht für URL
    const encodedMessage = encodeURIComponent(whatsappMessage); // Kodiert die Nachricht

    // Entfernt + und Leerzeichen aus der Nummer für WhatsApp-Link
    const cleanNumber = WHATSAPP_NUMBER.replace(/[\s\+]/g, ""); // Entfernt Leerzeichen und +

    // Erstellt den WhatsApp-Link
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`; // Gibt den WhatsApp-Link zurück
}

// Funktion zum Senden der Anfrage per E-Mail
function sendRequest() {
    if (cart.length === 0) {
        alert("Ihr Warenkorb ist leer. Bitte fügen Sie zuerst Produkte hinzu."); // Zeigt Warnung, wenn Warenkorb leer ist
        return; // Beendet die Funktion
    }

    // Erstellt den E-Mail-Link
    const emailLink = createEmailMessage(); // Ruft createEmailMessage auf
    window.location.href = emailLink; // Öffnet den E-Mail-Client
}

// Funktion zum Senden der Anfrage per WhatsApp
function sendWhatsAppRequest() {
    if (cart.length === 0) {
        alert("Ihr Warenkorb ist leer. Bitte fügen Sie zuerst Produkte hinzu."); // Zeigt Warnung, wenn Warenkorb leer ist
        return; // Beendet die Funktion
    }

    // Prüft, ob WhatsApp-Nummer eingetragen ist
    if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.trim() === "") {
        alert("WhatsApp-Nummer wurde noch nicht konfiguriert. Bitte kontaktieren Sie den Administrator."); // Zeigt Warnung
        return; // Beendet die Funktion
    }

    // Erstellt den WhatsApp-Link
    const whatsappLink = createWhatsAppRequestMessage(); // Ruft createWhatsAppRequestMessage auf
    window.open(whatsappLink, "_blank"); // Öffnet WhatsApp in neuem Tab
}

// Funktion zum Öffnen des direkten WhatsApp-Links
function openWhatsAppDirect() {
    // Prüft, ob WhatsApp-Nummer eingetragen ist
    if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.trim() === "") {
        alert("WhatsApp-Nummer wurde noch nicht konfiguriert. Bitte kontaktieren Sie den Administrator."); // Zeigt Warnung
        return; // Beendet die Funktion
    }

    // Erstellt den direkten WhatsApp-Link
    const whatsappLink = createWhatsAppDirectLink(); // Ruft createWhatsAppDirectLink auf
    window.open(whatsappLink, "_blank"); // Öffnet WhatsApp in neuem Tab
}

// Aktuelles Bild-Index im Popup (für Navigation zwischen mehreren Bildern)
let currentImageIndex = 0; // Aktueller Index des angezeigten Bildes
let currentProductImages = []; // Array der Bilder des aktuellen Produkts

// Funktion zum Öffnen des Bild-Popups
function openImagePopup(product) {
    const popup = document.getElementById("imagePopup"); // Holt das Popup-Element
    const popupImage = document.getElementById("popupImage"); // Holt das Bild-Element im Popup
    const popupProductName = document.getElementById("popupProductName"); // Holt das Namens-Element im Popup
    const popupBackground = document.getElementById("popupBackground"); // Holt das Hintergrund-Element
    const prevBtn = document.getElementById("prevImageBtn"); // Holt den Vorherigen-Button
    const nextBtn = document.getElementById("nextImageBtn"); // Holt den Nächsten-Button
    const indicators = document.getElementById("imageIndicators"); // Holt den Indikatoren-Container

    // Setzt Zoom und Position zurück
    zoomLevel = 1; // Setzt Zoom auf 100%
    offsetX = 0; // Setzt X-Offset auf 0
    offsetY = 0; // Setzt Y-Offset auf 0
    isDragging = false; // Setzt Drag-Status auf false
    currentImageIndex = 0; // Setzt Bild-Index auf 0

    // Holt alle Bilder des Produkts
    currentProductImages = getProductImages(product); // Ruft getProductImages auf

    // Zeigt/versteckt Navigation-Buttons basierend auf Anzahl der Bilder
    if (currentProductImages.length > 1) {
        prevBtn.style.display = "block"; // Zeigt Vorherigen-Button
        nextBtn.style.display = "block"; // Zeigt Nächsten-Button
        createImageIndicators(currentProductImages.length); // Erstellt Bild-Indikatoren
    } else {
        prevBtn.style.display = "none"; // Versteckt Vorherigen-Button
        nextBtn.style.display = "none"; // Versteckt Nächsten-Button
        indicators.innerHTML = ""; // Leert Indikatoren
    }

    // Zeigt das erste Bild
    showImageInPopup(currentProductImages[0], product.name); // Zeigt das erste Bild

    popupProductName.textContent = product.name; // Setzt den Produktnamen

    // Aktiviert das Popup
    popup.classList.add("active"); // Fügt die 'active' Klasse hinzu
    document.body.classList.add("popup-open"); // Verhindert Scrollen auf der Seite

    // Richtet Zoom-Event-Listener ein, wenn es ein echtes Bild ist
    if (currentProductImages[0] && (currentProductImages[0].startsWith("http") || currentProductImages[0].startsWith("/") || currentProductImages[0].startsWith("./") || currentProductImages[0].startsWith("img/"))) {
        setupZoomEvents(); // Richtet Zoom-Events ein
    }
}

// Funktion zum Anzeigen eines Bildes im Popup
function showImageInPopup(imagePath, productName) {
    const popupImage = document.getElementById("popupImage"); // Holt das Bild-Element im Popup

    // Setzt Zoom zurück
    zoomLevel = 1; // Setzt Zoom auf 100%
    offsetX = 0; // Setzt X-Offset auf 0
    offsetY = 0; // Setzt Y-Offset auf 0

    // Prüft, ob es eine URL (echtes Bild) oder ein Emoji ist
    if (imagePath.startsWith("http") || imagePath.startsWith("/") || imagePath.startsWith("./") || imagePath.startsWith("img/")) {
        // Wenn es eine URL/Pfad ist, wird ein img-Tag erstellt
        popupImage.innerHTML = `
            <img src="${imagePath}" alt="${productName}" id="popupImg" class="popup-img">
            <div class="zoom-controls">
                <button class="zoom-btn zoom-in" id="zoomInBtn" title="Vergrößern">+</button>
                <button class="zoom-btn zoom-out" id="zoomOutBtn" title="Verkleinern">-</button>
                <button class="zoom-btn zoom-reset" id="zoomResetBtn" title="Zurücksetzen">↻</button>
            </div>
        `; // Erstellt img-Tag mit Zoom-Controls
        
        // Richtet Zoom-Event-Listener ein
        setupZoomEvents(); // Richtet Zoom-Events ein
    } else {
        // Wenn es ein Emoji ist, wird es als Text angezeigt
        popupImage.innerHTML = imagePath; // Setzt das Emoji als innerHTML
        popupImage.style.fontSize = "8rem"; // Setzt große Schriftgröße für Emoji
    }

    // Aktualisiert die Indikatoren
    updateImageIndicators(); // Aktualisiert die Bild-Indikatoren
}

// Funktion zum Erstellen der Bild-Indikatoren (Punkte)
function createImageIndicators(count) {
    const indicators = document.getElementById("imageIndicators"); // Holt den Indikatoren-Container
    indicators.innerHTML = ""; // Leert den Container

    // Erstellt für jedes Bild einen Indikator-Punkt
    for (let i = 0; i < count; i++) {
        const indicator = document.createElement("span"); // Erstellt ein span-Element
        indicator.className = "image-indicator"; // Setzt die CSS-Klasse
        if (i === 0) indicator.classList.add("active"); // Markiert den ersten als aktiv
        indicator.addEventListener("click", () => {
            currentImageIndex = i; // Setzt den aktuellen Index
            showImageInPopup(currentProductImages[i], document.getElementById("popupProductName").textContent); // Zeigt das ausgewählte Bild
        });
        indicators.appendChild(indicator); // Fügt den Indikator hinzu
    }
}

// Funktion zum Aktualisieren der Bild-Indikatoren
function updateImageIndicators() {
    const indicators = document.querySelectorAll(".image-indicator"); // Holt alle Indikatoren
    indicators.forEach((indicator, index) => {
        if (index === currentImageIndex) {
            indicator.classList.add("active"); // Markiert den aktiven Indikator
        } else {
            indicator.classList.remove("active"); // Entfernt aktive Klasse von anderen
        }
    });
}

// Funktion zum Wechseln zum nächsten Bild
function nextImage() {
    if (currentProductImages.length > 1) {
        currentImageIndex = (currentImageIndex + 1) % currentProductImages.length; // Erhöht Index (mit Wrap-around)
        showImageInPopup(currentProductImages[currentImageIndex], document.getElementById("popupProductName").textContent); // Zeigt das nächste Bild
    }
}

// Funktion zum Wechseln zum vorherigen Bild
function prevImage() {
    if (currentProductImages.length > 1) {
        currentImageIndex = (currentImageIndex - 1 + currentProductImages.length) % currentProductImages.length; // Verringert Index (mit Wrap-around)
        showImageInPopup(currentProductImages[currentImageIndex], document.getElementById("popupProductName").textContent); // Zeigt das vorherige Bild
    }
}

// Funktion zum Schließen des Bild-Popups
function closeImagePopup() {
    const popup = document.getElementById("imagePopup"); // Holt das Popup-Element
    const popupImage = document.getElementById("popupImage"); // Holt das Bild-Element im Popup

    // Setzt Zoom und Position zurück
    zoomLevel = 1; // Setzt Zoom auf 100%
    offsetX = 0; // Setzt X-Offset auf 0
    offsetY = 0; // Setzt Y-Offset auf 0
    isDragging = false; // Setzt Drag-Status auf false

    // Deaktiviert das Popup
    popup.classList.remove("active"); // Entfernt die 'active' Klasse
    document.body.classList.remove("popup-open"); // Ermöglicht wieder Scrollen auf der Seite

    // Leert den Inhalt des Popups
    popupImage.innerHTML = ""; // Leert den Bild-Container
    popupImage.style.fontSize = ""; // Setzt die Schriftgröße zurück
}

// Funktion zum Anwenden des Zooms auf das Bild
function applyZoom() {
    const popupImg = document.getElementById("popupImg"); // Holt das Bild-Element
    if (popupImg) {
        popupImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomLevel})`; // Wendet Zoom und Position an
        popupImg.style.transformOrigin = "center center"; // Setzt den Transformationsursprung
        popupImg.style.cursor = zoomLevel > 1 ? "grab" : "default"; // Setzt Cursor basierend auf Zoom-Level
    }
}

// Funktion zum Vergrößern des Bildes
function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.25, 5); // Erhöht Zoom um 0.25, maximal 5x
    applyZoom(); // Wendet den Zoom an
}

// Funktion zum Verkleinern des Bildes
function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.25, 0.5); // Verringert Zoom um 0.25, minimal 0.5x
    applyZoom(); // Wendet den Zoom an
}

// Funktion zum Zurücksetzen des Zooms
function resetZoom() {
    zoomLevel = 1; // Setzt Zoom auf 100%
    offsetX = 0; // Setzt X-Offset auf 0
    offsetY = 0; // Setzt Y-Offset auf 0
    applyZoom(); // Wendet den Reset an
}

// Funktion zum Berechnen der Distanz zwischen zwei Touch-Punkten
function getTouchDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX; // Berechnet X-Differenz
    const dy = touch1.clientY - touch2.clientY; // Berechnet Y-Differenz
    return Math.sqrt(dx * dx + dy * dy); // Berechnet euklidische Distanz
}

// Funktion zum Einrichten der Zoom-Event-Listener
function setupZoomEvents() {
    const popupImg = document.getElementById("popupImg"); // Holt das Bild-Element
    const popupImage = document.getElementById("popupImage"); // Holt den Bild-Container
    const zoomInBtn = document.getElementById("zoomInBtn"); // Holt den Zoom-In-Button
    const zoomOutBtn = document.getElementById("zoomOutBtn"); // Holt den Zoom-Out-Button
    const zoomResetBtn = document.getElementById("zoomResetBtn"); // Holt den Reset-Button

    if (!popupImg) return; // Beendet Funktion, wenn kein Bild vorhanden ist

    // Event-Listener für Zoom-In-Button
    if (zoomInBtn) {
        zoomInBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Event weitergegeben wird
            zoomIn(); // Ruft Zoom-In-Funktion auf
        });
    }

    // Event-Listener für Zoom-Out-Button
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Event weitergegeben wird
            zoomOut(); // Ruft Zoom-Out-Funktion auf
        });
    }

    // Event-Listener für Reset-Button
    if (zoomResetBtn) {
        zoomResetBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Event weitergegeben wird
            resetZoom(); // Ruft Reset-Funktion auf
        });
    }

    // Event-Listener für Mouse-Wheel-Zoom
    popupImage.addEventListener("wheel", (e) => {
        e.preventDefault(); // Verhindert Standard-Scroll-Verhalten
        
        // Berechnet die Mausposition relativ zum Bild-Container
        const rect = popupImage.getBoundingClientRect(); // Holt die Position und Größe des Containers
        const mouseX = e.clientX - rect.left; // Berechnet X-Position relativ zum Container
        const mouseY = e.clientY - rect.top; // Berechnet Y-Position relativ zum Container
        
        // Berechnet die Zentrumsposition des Containers
        const centerX = rect.width / 2; // X-Zentrum des Containers
        const centerY = rect.height / 2; // Y-Zentrum des Containers
        
        // Berechnet die Differenz zwischen Mausposition und Zentrum
        const deltaX = mouseX - centerX; // X-Differenz
        const deltaY = mouseY - centerY; // Y-Differenz
        
        const oldZoom = zoomLevel; // Speichert alten Zoom-Level
        
        // Zoomt rein oder raus
        if (e.deltaY < 0) {
            zoomLevel = Math.min(zoomLevel + 0.25, 5); // Erhöht Zoom um 0.25, maximal 5x
        } else {
            zoomLevel = Math.max(zoomLevel - 0.25, 0.5); // Verringert Zoom um 0.25, minimal 0.5x
        }
        
        // Passt die Position an, um zum Mauszeiger zu zoomen
        if (zoomLevel !== oldZoom) {
            const zoomChange = zoomLevel / oldZoom; // Berechnet Zoom-Änderungsfaktor
            offsetX = (offsetX + deltaX) * zoomChange - deltaX; // Passt X-Offset an
            offsetY = (offsetY + deltaY) * zoomChange - deltaY; // Passt Y-Offset an
            applyZoom(); // Wendet den Zoom an
        }
    }, { passive: false });

    // Event-Listener für Maus-Down (Start des Ziehens)
    popupImg.addEventListener("mousedown", (e) => {
        if (zoomLevel > 1) {
            isDragging = true; // Aktiviert Drag-Modus
            startX = e.clientX - offsetX; // Speichert Start-X-Position
            startY = e.clientY - offsetY; // Speichert Start-Y-Position
            popupImg.style.cursor = "grabbing"; // Ändert Cursor zu grabbing
        }
    });

    // Event-Listener für Maus-Move (während des Ziehens)
    document.addEventListener("mousemove", (e) => {
        if (isDragging && zoomLevel > 1) {
            offsetX = e.clientX - startX; // Berechnet neuen X-Offset
            offsetY = e.clientY - startY; // Berechnet neuen Y-Offset
            applyZoom(); // Wendet neue Position an
        }
    });

    // Event-Listener für Maus-Up (Ende des Ziehens)
    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false; // Deaktiviert Drag-Modus
            if (popupImg) {
                popupImg.style.cursor = zoomLevel > 1 ? "grab" : "default"; // Ändert Cursor zurück
            }
        }
    });

    // Touch-Events für Pinch-Zoom und Drag auf mobilen Geräten
    let touches = []; // Array für Touch-Punkte

    // Event-Listener für Touch-Start
    popupImg.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Verhindert Standard-Touch-Verhalten
        touches = Array.from(e.touches); // Speichert alle Touch-Punkte
        if (touches.length === 2) {
            lastTouchDistance = getTouchDistance(touches[0], touches[1]); // Speichert initiale Distanz
        } else if (touches.length === 1 && zoomLevel > 1) {
            isDragging = true; // Aktiviert Drag-Modus
            startX = e.touches[0].clientX - offsetX; // Speichert Start-X-Position
            startY = e.touches[0].clientY - offsetY; // Speichert Start-Y-Position
        }
    }, { passive: false });

    // Event-Listener für Touch-Move
    popupImg.addEventListener("touchmove", (e) => {
        e.preventDefault(); // Verhindert Standard-Touch-Verhalten
        touches = Array.from(e.touches); // Aktualisiert Touch-Punkte
        if (touches.length === 2) {
            const currentDistance = getTouchDistance(touches[0], touches[1]); // Berechnet aktuelle Distanz
            if (lastTouchDistance > 0) {
                const scale = currentDistance / lastTouchDistance; // Berechnet Skalierungsfaktor
                zoomLevel = Math.max(0.5, Math.min(5, zoomLevel * scale)); // Aktualisiert Zoom-Level
                applyZoom(); // Wendet neuen Zoom an
            }
            lastTouchDistance = currentDistance; // Speichert neue Distanz
        } else if (touches.length === 1 && isDragging && zoomLevel > 1) {
            offsetX = e.touches[0].clientX - startX; // Berechnet neuen X-Offset
            offsetY = e.touches[0].clientY - startY; // Berechnet neuen Y-Offset
            applyZoom(); // Wendet neue Position an
        }
    }, { passive: false });

    // Event-Listener für Touch-End
    popupImg.addEventListener("touchend", (e) => {
        e.preventDefault(); // Verhindert Standard-Touch-Verhalten
        if (e.touches.length < 2) {
            lastTouchDistance = 0; // Setzt Distanz zurück
        }
        if (e.touches.length === 0) {
            isDragging = false; // Deaktiviert Drag-Modus
        }
    }, { passive: false });

    // Setzt Cursor-Style basierend auf Zoom-Level
    popupImg.style.cursor = zoomLevel > 1 ? "grab" : "default"; // Setzt Cursor-Style
}

// Funktion zum Öffnen des Warenkorb-Popups
function openCartPopup() {
    const cartPopup = document.getElementById("cartPopup"); // Holt das Warenkorb-Popup-Element
    updateCartDisplay(); // Aktualisiert die Warenkorb-Anzeige
    cartPopup.classList.add("active"); // Fügt die 'active' Klasse hinzu
    document.body.classList.add("popup-open"); // Verhindert Scrollen auf der Seite
}

// Funktion zum Schließen des Warenkorb-Popups
function closeCartPopup() {
    const cartPopup = document.getElementById("cartPopup"); // Holt das Warenkorb-Popup-Element
    cartPopup.classList.remove("active"); // Entfernt die 'active' Klasse
    document.body.classList.remove("popup-open"); // Ermöglicht wieder Scrollen auf der Seite
}

// Funktion zum Einrichten von Event-Listenern
function setupEventListeners() {
    // Holt den Button zum Leeren des Warenkorbs
    const clearCartBtn = document.getElementById("clearCartBtn");
    // Holt den Warenkorb-Header-Button (Icon)
    const cartHeaderBtn = document.getElementById("cartHeaderBtn");
    // Holt den Schließen-Button im Warenkorb-Popup
    const closeCartBtn = document.getElementById("closeCartBtn");
    // Holt den Hintergrund des Warenkorb-Popups
    const cartPopupBackground = document.getElementById("cartPopupBackground");

    // Event-Listener für Warenkorb-Button (öffnet Popup)
    if (cartHeaderBtn) {
        cartHeaderBtn.addEventListener("click", () => {
            openCartPopup(); // Öffnet das Warenkorb-Popup
        });
    }

    // Event-Listener für Schließen-Button im Warenkorb-Popup
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", () => {
            closeCartPopup(); // Schließt das Warenkorb-Popup
        });
    }

    // Event-Listener für Hintergrund-Klick (schließt Warenkorb-Popup)
    if (cartPopupBackground) {
        cartPopupBackground.addEventListener("click", () => {
            closeCartPopup(); // Schließt das Warenkorb-Popup
        });
    }

    // Event-Listener für das Leeren des Warenkorbs
    if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
        cart = []; // Leert das Warenkorb-Array
        updateCartDisplay(); // Aktualisiert die Anzeige
        renderProducts(); // Rendert Produkte neu, um Button-Status zu aktualisieren
    });
    }

    // Event-Listener für den E-Mail-Anfrage-Button
    const sendRequestBtn = document.getElementById("sendRequestBtn"); // Holt den E-Mail-Anfrage-Button
    if (sendRequestBtn) {
        sendRequestBtn.addEventListener("click", () => {
            sendRequest(); // Ruft sendRequest auf
        });
    }

    // Event-Listener für den WhatsApp-Anfrage-Button
    const whatsappRequestBtn = document.getElementById("whatsappRequestBtn"); // Holt den WhatsApp-Anfrage-Button
    if (whatsappRequestBtn) {
        whatsappRequestBtn.addEventListener("click", () => {
            sendWhatsAppRequest(); // Ruft sendWhatsAppRequest auf
        });
    }

    // Event-Listener für den direkten WhatsApp-Button
    const whatsappDirectBtn = document.getElementById("whatsappDirectBtn"); // Holt den direkten WhatsApp-Button
    if (whatsappDirectBtn) {
        // Setzt den href direkt
        whatsappDirectBtn.href = createWhatsAppDirectLink(); // Setzt den direkten WhatsApp-Link
        
        whatsappDirectBtn.addEventListener("click", (e) => {
            // Prüft, ob WhatsApp-Nummer eingetragen ist
            if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.trim() === "") {
                e.preventDefault(); // Verhindert Standard-Link-Verhalten
                alert("WhatsApp-Nummer wurde noch nicht konfiguriert. Bitte kontaktieren Sie den Administrator."); // Zeigt Warnung
                return; // Beendet die Funktion
            }
            // Link öffnet sich automatisch durch href
        });
    }

    // Event-Listener für ESC-Taste zum Schließen der Popups
    document.addEventListener("keydown", (e) => {
        const imagePopup = document.getElementById("imagePopup"); // Holt das Bild-Popup-Element
        const cartPopup = document.getElementById("cartPopup"); // Holt das Warenkorb-Popup-Element
        
        if (e.key === "Escape") { // Prüft, ob ESC-Taste gedrückt wurde
            if (imagePopup && imagePopup.classList.contains("active")) { // Prüft, ob Bild-Popup aktiv ist
                closeImagePopup(); // Schließt das Bild-Popup
            } else if (cartPopup && cartPopup.classList.contains("active")) { // Prüft, ob Warenkorb-Popup aktiv ist
                closeCartPopup(); // Schließt das Warenkorb-Popup
            }
        } else if (imagePopup && imagePopup.classList.contains("active")) {
            // Pfeiltasten-Navigation für mehrere Bilder
            if (e.key === "ArrowLeft") { // Linke Pfeiltaste
                e.preventDefault(); // Verhindert Standard-Verhalten
                prevImage(); // Zeigt vorheriges Bild
            } else if (e.key === "ArrowRight") { // Rechte Pfeiltaste
                e.preventDefault(); // Verhindert Standard-Verhalten
                nextImage(); // Zeigt nächstes Bild
            }
        }
    });

    // Event-Listener für Navigation-Buttons im Bild-Popup
    const prevImageBtn = document.getElementById("prevImageBtn"); // Holt den Vorherigen-Button
    const nextImageBtn = document.getElementById("nextImageBtn"); // Holt den Nächsten-Button

    if (prevImageBtn) {
        prevImageBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Event weitergegeben wird
            prevImage(); // Zeigt vorheriges Bild
        });
    }

    if (nextImageBtn) {
        nextImageBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Event weitergegeben wird
            nextImage(); // Zeigt nächstes Bild
        });
    }

    // Event-Listener für das Schließen beim Klick auf den Hintergrund (Bild-Popup)
    const popupBackground = document.getElementById("popupBackground"); // Holt das Hintergrund-Element
    if (popupBackground) {
    popupBackground.addEventListener("click", closeImagePopup); // Ruft closeImagePopup auf beim Klick
    }

    // Verhindert, dass Klicks auf den Popup-Inhalt das Popup schließen
    const popupContent = document.querySelector(".popup-content"); // Holt den Popup-Content
    if (popupContent) {
    popupContent.addEventListener("click", (e) => {
        e.stopPropagation(); // Verhindert, dass das Event zum Hintergrund durchdringt
    });
    }

    // Verhindert, dass Klicks auf den Warenkorb-Popup-Inhalt das Popup schließen
    const cartPopupContent = document.querySelector(".cart-popup-content"); // Holt den Warenkorb-Popup-Content
    if (cartPopupContent) {
        cartPopupContent.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Event zum Hintergrund durchdringt
        });
    }

    // Event-Listener für Filter-Buttons
    const filterButtons = document.querySelectorAll(".filter-btn"); // Holt alle Filter-Buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Entfernt aktive Klasse von allen Buttons
            filterButtons.forEach(btn => btn.classList.remove("active")); // Entfernt aktive Klasse
            // Fügt aktive Klasse zum geklickten Button hinzu
            button.classList.add("active"); // Fügt aktive Klasse hinzu
            
            // Setzt die aktive Kategorie
            const category = button.getAttribute("data-category"); // Holt die Kategorie aus dem data-Attribut
            activeCategory = category === "all" ? null : category; // Setzt aktive Kategorie (null = alle)
            
            // Rendert die Produkte neu mit dem Filter
            renderProducts(); // Rendert Produkte neu
        });
    });
}

// Wartet, bis die Seite vollständig geladen ist, und initialisiert dann die Anwendung
document.addEventListener("DOMContentLoaded", init);

