# 📝 Git - Code aktualisieren

## Methode 1: GitHub Desktop (Einfachste Methode) ⭐

### Erste Einrichtung (einmalig)
1. **GitHub Desktop installieren**
   - Lade herunter: https://desktop.github.com
   - Installiere und melde dich mit deinem GitHub-Account an

2. **Repository hinzufügen**
   - Klicke "File" → "Add Local Repository"
   - Wähle deinen `Verkauf`-Ordner: `C:\Users\Fatih\Desktop\Verkauf`
   - Klicke "Add repository"

3. **Erstes Mal veröffentlichen**
   - Klicke "Publish repository"
   - Wähle "Public"
   - Klicke "Publish repository"

### Code aktualisieren (jedes Mal wenn du Änderungen machst)

1. **GitHub Desktop öffnen**
   - Öffne GitHub Desktop
   - Dein Repository sollte automatisch geladen sein

2. **Änderungen sehen**
   - Links siehst du alle geänderten Dateien
   - Rote Dateien = geändert
   - Neue Dateien = grün

3. **Änderungen committen**
   - Unten links: Schreibe eine Nachricht (z.B. "Neue Produkte hinzugefügt")
   - Klicke "Commit to main"

4. **Hochladen (Push)**
   - Klicke "Push origin" (oben rechts)
   - Warte bis "Fetch origin" erscheint
   - Fertig! ✅

**Deine Änderungen sind jetzt online!**

---

## Methode 2: Git Kommandozeile (Für Fortgeschrittene)

### Erste Einrichtung (einmalig)

1. **Git installieren**
   - Lade herunter: https://git-scm.com/downloads
   - Installiere mit Standard-Einstellungen

2. **Repository initialisieren**
   ```bash
   # Öffne PowerShell oder CMD im Verkauf-Ordner
   cd C:\Users\Fatih\Desktop\Verkauf
   
   # Git initialisieren (nur beim ersten Mal)
   git init
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/tubas-plottelier.git
   ```

### Code aktualisieren (jedes Mal)

**Öffne PowerShell oder CMD im Verkauf-Ordner:**

```bash
# 1. Gehe zum Projekt-Ordner
cd C:\Users\Fatih\Desktop\Verkauf

# 2. Zeige alle Änderungen
git status

# 3. Füge alle Änderungen hinzu
git add .

# 4. Erstelle einen Commit (mit Nachricht)
git commit -m "Beschreibung deiner Änderungen"

# 5. Lade Änderungen hoch
git push origin main
```

**Beispiel:**
```bash
cd C:\Users\Fatih\Desktop\Verkauf
git add .
git commit -m "Neue Produkte hinzugefügt und Design verbessert"
git push origin main
```

---

## 📋 Häufige Git-Befehle

### Status prüfen
```bash
git status
```
Zeigt alle geänderten Dateien

### Alle Änderungen hinzufügen
```bash
git add .
```
Fügt alle geänderten Dateien hinzu

### Bestimmte Datei hinzufügen
```bash
git add index.html
```
Fügt nur eine bestimmte Datei hinzu

### Commit erstellen
```bash
git commit -m "Deine Nachricht hier"
```
Speichert die Änderungen mit einer Nachricht

### Hochladen
```bash
git push origin main
```
Lädt alle Commits zum Server hoch

### Neueste Version herunterladen
```bash
git pull origin main
```
Lädt die neueste Version vom Server herunter

---

## ⚠️ Wichtige Hinweise

### 1. Immer commiten vor Push
- Erst `git add .`
- Dann `git commit -m "Nachricht"`
- Dann `git push`

### 2. Gute Commit-Nachrichten
- Beschreibe was du geändert hast
- Beispiele:
  - "Neue Produkte hinzugefügt"
  - "Design verbessert"
  - "Bug im Warenkorb behoben"
  - "Kontaktformular aktualisiert"

### 3. Regelmäßig pushen
- Nach jeder größeren Änderung pushen
- So hast du immer ein Backup online

### 4. Bei Fehlern
```bash
# Änderungen verwerfen (VORSICHT!)
git reset --hard

# Letzten Commit rückgängig machen
git reset --soft HEAD~1
```

---

## 🔄 Workflow (Tägliche Nutzung)

1. **Änderungen machen**
   - Bearbeite Dateien in deinem Editor
   - Speichere alle Dateien

2. **GitHub Desktop öffnen**
   - Siehst du alle Änderungen

3. **Commit erstellen**
   - Schreibe Nachricht
   - Klicke "Commit to main"

4. **Push**
   - Klicke "Push origin"
   - Warte bis fertig

5. **Fertig!** ✅
   - Deine Seite ist aktualisiert

---

## 🆘 Probleme lösen

### Problem: "Repository not found"
- Prüfe, ob Repository auf GitHub existiert
- Prüfe, ob du eingeloggt bist

### Problem: "Permission denied"
- Prüfe deine GitHub-Anmeldedaten
- Bei GitHub Desktop: Account → Options → Sign out → Sign in

### Problem: "Merge conflict"
- GitHub Desktop zeigt Konflikte an
- Wähle welche Version du behalten möchtest

### Problem: Änderungen werden nicht angezeigt
- Warte 1-2 Minuten (GitHub Pages braucht Zeit)
- Leere Browser-Cache (Strg + F5)
- Prüfe ob Push erfolgreich war

---

## 💡 Tipps

1. **GitHub Desktop verwenden**
   - Viel einfacher als Kommandozeile
   - Visuelles Interface
   - Weniger Fehler

2. **Regelmäßig committen**
   - Nicht zu viele Änderungen auf einmal
   - Lieber öfter kleine Commits

3. **Backup**
   - Git ist automatisch ein Backup
   - Alle Versionen sind gespeichert

4. **Branch verwenden (optional)**
   - Für größere Änderungen
   - Teste erst, bevor du auf main pusht

---

## ✅ Checkliste vor jedem Push

- [ ] Alle Dateien gespeichert
- [ ] Änderungen getestet
- [ ] Commit-Nachricht geschrieben
- [ ] Push durchgeführt
- [ ] Auf GitHub geprüft (1-2 Min warten)

---

**Viel Erfolg! 🚀**

