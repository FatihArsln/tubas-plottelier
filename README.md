# Tuba's Plottelier - Veröffentlichungsanleitung

## Kostenlose Veröffentlichungsoptionen

### Option 1: GitHub Pages (Empfohlen)

**Vorteile:**
- ✅ Komplett kostenlos
- ✅ Automatisches SSL-Zertifikat (HTTPS)
- ✅ Schnelle Ladezeiten
- ✅ Einfache Einrichtung
- ✅ Automatische Updates bei Git-Push

**Schritte:**

1. **GitHub-Account erstellen** (falls noch nicht vorhanden)
   - Gehe zu https://github.com
   - Erstelle einen kostenlosen Account

2. **Repository erstellen**
   - Klicke auf "New repository"
   - Name: z.B. "tubas-plottelier"
   - Wähle "Public" (für kostenloses Hosting)
   - Klicke "Create repository"

3. **Dateien hochladen**
   - Installiere Git: https://git-scm.com/downloads
   - Oder verwende GitHub Desktop: https://desktop.github.com
   - Lade alle Dateien hoch (index.html, style.css, script.js, img-Ordner)

4. **GitHub Pages aktivieren**
   - Gehe zu Settings → Pages
   - Unter "Source" wähle "main" Branch
   - Klicke "Save"
   - Deine Seite ist unter: `https://dein-username.github.io/tubas-plottelier` erreichbar

**Sicherheit:**
- ✅ Automatisches HTTPS
- ✅ DDoS-Schutz durch GitHub
- ✅ Regelmäßige Backups durch Git

---

### Option 2: Netlify

**Vorteile:**
- ✅ Kostenlos
- ✅ Automatisches SSL
- ✅ Einfaches Drag & Drop
- ✅ Custom Domain möglich

**Schritte:**

1. Gehe zu https://www.netlify.com
2. Erstelle kostenlosen Account
3. Ziehe den gesamten Ordner in den Netlify-Bereich
4. Fertig! Deine Seite ist sofort online

**Sicherheit:**
- ✅ Automatisches HTTPS
- ✅ DDoS-Schutz
- ✅ Firewall-Regeln möglich

---

### Option 3: Vercel

**Vorteile:**
- ✅ Kostenlos
- ✅ Sehr schnell
- ✅ Automatisches SSL
- ✅ Einfache Einrichtung

**Schritte:**

1. Gehe zu https://vercel.com
2. Erstelle kostenlosen Account
3. Verbinde mit GitHub oder lade Dateien hoch
4. Fertig!

---

## Wichtige Sicherheitshinweise

### 1. E-Mail-Adresse schützen

**Aktuell:** Die E-Mail-Adresse ist im JavaScript-Code sichtbar.

**Besser:** Verwende ein Kontaktformular mit Backend (z.B. Formspree, EmailJS)

**Schnelle Lösung mit EmailJS (kostenlos):**

1. Gehe zu https://www.emailjs.com
2. Erstelle kostenlosen Account
3. Erstelle einen Service (Gmail, Outlook, etc.)
4. Erstelle eine Email Template
5. Ersetze die mailto: Links durch EmailJS

### 2. Dateien prüfen

- ✅ Keine Passwörter im Code
- ✅ Keine API-Keys im Frontend-Code
- ✅ Keine persönlichen Daten im Code

### 3. HTTPS verwenden

- ✅ Alle modernen Hosting-Anbieter bieten automatisch HTTPS
- ✅ Nie auf HTTP-Seiten persönliche Daten eingeben

### 4. Regelmäßige Updates

- ✅ Halte deine Dateien aktuell
- ✅ Prüfe regelmäßig auf Sicherheitslücken

---

## Empfohlene Schritte vor Veröffentlichung

1. **E-Mail-Adresse prüfen**
   - Aktuell: `Fatih1106@live.de` ist im Code sichtbar
   - Überlege, ob du diese öffentlich zeigen möchtest

2. **Testen**
   - Teste alle Funktionen lokal
   - Prüfe auf mobile Geräte
   - Teste den Warenkorb
   - Teste das Kontaktformular

3. **Bilder optimieren**
   - Komprimiere Bilder für schnellere Ladezeiten
   - Verwende WebP-Format wenn möglich

4. **Backup erstellen**
   - Speichere alle Dateien sicher
   - Nutze Git für Versionskontrolle

---

## Custom Domain (Optional)

Wenn du eine eigene Domain haben möchtest (z.B. tubas-plottelier.de):

1. Kaufe Domain bei einem Anbieter (z.B. Namecheap, GoDaddy)
2. Verbinde Domain mit GitHub Pages/Netlify/Vercel
3. Folge den Anweisungen des Hosting-Anbieters

**Kosten:** Domain ca. 10-15€/Jahr

---

## Support

Bei Fragen zur Veröffentlichung:
- GitHub Pages Docs: https://docs.github.com/en/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

