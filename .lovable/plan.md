

## Rollen-Auswahl und Datenbank-Speicherung

### Was wird gebaut

Ueber dem E-Mail-Eingabefeld werden zwei Tab-Buttons ("Ich bin ein Brautpaar" / "Ich bin ein Dienstleister") hinzugefuegt. Der aktive Tab wird farblich hervorgehoben (Gold-Akzent). Die Auswahl wird zusammen mit der E-Mail gespeichert.

### Voraussetzung: Supabase-Anbindung

Aktuell ist **keine Datenbank** mit dem Projekt verbunden. Um E-Mails und Rollen zu speichern, muss zuerst **Supabase aktiviert** werden. Der Plan umfasst daher zwei Teile:

---

### Teil 1: UI-Aenderungen (src/pages/Index.tsx)

1. **Neuer State** `userRole` mit den Werten `"couple"` oder `"vendor"` (Standard: `"couple"`)
2. **Zwei Tab-Buttons** oberhalb des E-Mail-Feldes:
   - "Ich bin ein Brautpaar" und "Ich bin ein Dienstleister"
   - Aktiver Tab: Gold-Hintergrund mit dunklem Text
   - Inaktiver Tab: Transparenter Hintergrund mit Border
   - Sanfte Uebergaenge via Tailwind-Klassen
3. **Reset** des `userRole`-State nach erfolgreichem Absenden

### Teil 2: Datenbank (Supabase erforderlich)

Sobald Supabase aktiviert ist:

1. **Neue Tabelle** `waitlist` mit den Spalten:
   - `id` (UUID, Primary Key)
   - `email` (Text, unique)
   - `role` (Text: "couple" oder "vendor")
   - `created_at` (Timestamp)
2. **handleSubmit** wird angepasst, um die Daten via Supabase-Client in die Tabelle einzufuegen
3. Fehlerbehandlung mit Toast-Benachrichtigungen

---

### Technische Details

- Kein zusaetzliches Package noetig -- die Tabs werden mit einfachen `<button>`-Elementen und bedingtem Styling gebaut (passend zum bestehenden Design)
- Styling nutzt die vorhandenen `gold`, `plum` und `card`-Farben aus der Tailwind-Konfiguration
- Ohne Supabase wird die UI trotzdem funktionieren, aber die Daten werden nur im Frontend bestaetigt (nicht persistent gespeichert)

### Empfehlung

Da noch keine Datenbank verbunden ist, wuerde ich **zuerst die UI bauen** (Teil 1). Anschliessend kannst du Supabase aktivieren, und wir richten die Datenbank-Speicherung ein (Teil 2).
