# 🚀 Schnellstart: Seite veröffentlichen

## Methode 1: GitHub Pages (5 Minuten)

### Schritt 1: GitHub-Account
1. Gehe zu https://github.com
2. Klicke "Sign up" (kostenlos)

### Schritt 2: Neues Repository
1. Klicke auf das "+" oben rechts → "New repository"
2. Name: `tubas-plottelier` (oder ein anderer Name)
3. ✅ Wähle "Public"
4. ❌ NICHT "Initialize with README" ankreuzen
5. Klicke "Create repository"

### Schritt 3: Dateien hochladen

**Option A: Mit GitHub Desktop (Einfachste Methode)**
1. Lade GitHub Desktop herunter: https://desktop.github.com
2. Installiere und melde dich an
3. Klicke "File" → "Add Local Repository"
4. Wähle deinen Verkauf-Ordner
5. Klicke "Publish repository"
6. Wähle "Public"
7. Klicke "Publish repository"

**Option B: Mit Git (Für Fortgeschrittene)**
```bash
# Im Verkauf-Ordner öffnen
cd C:\Users\Fatih\Desktop\Verkauf

# Git initialisieren
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/tubas-plottelier.git
git push -u origin main
```

### Schritt 4: GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings" (oben rechts)
3. Scrolle zu "Pages" (links im Menü)
4. Unter "Source" wähle "main" Branch
5. Klicke "Save"
6. Warte 1-2 Minuten

### Schritt 5: Fertig! 🎉
Deine Seite ist jetzt unter erreichbar:
`https://DEIN-USERNAME.github.io/tubas-plottelier`

---

## Methode 2: Netlify Drop (2 Minuten)

### Schritt 1: Vorbereitung
1. Komprimiere deinen Verkauf-Ordner zu einer ZIP-Datei

### Schritt 2: Hochladen
1. Gehe zu https://app.netlify.com/drop
2. Ziehe die ZIP-Datei in den Bereich
3. Fertig! Deine Seite ist sofort online

**URL:** Netlify gibt dir eine zufällige URL (z.B. `amazing-site-123.netlify.app`)

---

## Methode 3: Vercel (3 Minuten)

### Schritt 1: Account erstellen
1. Gehe zu https://vercel.com
2. Klicke "Sign Up" (kostenlos)

### Schritt 2: Projekt hochladen
1. Klicke "Add New" → "Project"
2. Ziehe deinen Verkauf-Ordner hinein
3. Klicke "Deploy"
4. Fertig!

---

## 🔒 Sicherheitstipps

### 1. E-Mail-Adresse schützen
**Problem:** Deine E-Mail `Fatih1106@live.de` ist im JavaScript-Code sichtbar.

**Lösung:** Verwende EmailJS für das Kontaktformular (kostenlos)

1. Gehe zu https://www.emailjs.com
2. Erstelle kostenlosen Account
3. Erstelle Service (Gmail/Outlook)
4. Erstelle Email Template
5. Ersetze mailto: durch EmailJS API

### 2. Vor Veröffentlichung prüfen
- [ ] Keine Passwörter im Code
- [ ] Keine privaten Daten sichtbar
- [ ] Alle Funktionen getestet
- [ ] Mobile Ansicht getestet

### 3. Regelmäßige Backups
- Nutze Git für Versionskontrolle
- Speichere lokale Kopien
- Teste Updates vor Veröffentlichung

---

## 📱 Custom Domain (Optional)

Wenn du eine eigene Domain möchtest (z.B. `tubas-plottelier.de`):

1. **Domain kaufen** (ca. 10-15€/Jahr)
   - Namecheap: https://www.namecheap.com
   - GoDaddy: https://www.godaddy.com

2. **Mit GitHub Pages verbinden:**
   - Settings → Pages → Custom domain
   - Füge deine Domain ein
   - Folge den DNS-Anweisungen

3. **Mit Netlify verbinden:**
   - Site settings → Domain management
   - Add custom domain
   - Folge den Anweisungen

---

## 🆘 Hilfe bei Problemen

### Problem: Seite lädt nicht
- Warte 2-3 Minuten nach dem ersten Upload
- Prüfe, ob alle Dateien hochgeladen wurden
- Prüfe die Browser-Konsole (F12)

### Problem: Bilder werden nicht angezeigt
- Prüfe, ob der `img`-Ordner hochgeladen wurde
- Prüfe die Pfade in `script.js` (sollten `img/` sein)

### Problem: E-Mail funktioniert nicht
- mailto: funktioniert nur, wenn E-Mail-Client installiert ist
- Für bessere Lösung: EmailJS verwenden

---

## ✅ Checkliste vor Veröffentlichung

- [ ] Alle Dateien lokal getestet
- [ ] Bilder sind im `img`-Ordner
- [ ] E-Mail-Adresse ist korrekt
- [ ] Warenkorb funktioniert
- [ ] Kontaktformular funktioniert
- [ ] Mobile Ansicht getestet
- [ ] Keine Fehler in Browser-Konsole (F12)

---

## 📞 Nächste Schritte

1. **Jetzt:** Wähle eine Veröffentlichungsmethode
2. **Dann:** Teste die veröffentlichte Seite
3. **Optional:** Custom Domain einrichten
4. **Optional:** EmailJS für besseres Kontaktformular

**Viel Erfolg! 🎉**

