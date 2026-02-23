

## Datenschutz-Checkbox zum E-Mail-Formular hinzufügen

Eine Pflicht-Checkbox mit Datenschutzerklaerung-Link wird unter dem E-Mail-Eingabefeld eingefuegt.

### Aenderungen

**Datei: `src/pages/Index.tsx`**

1. Neuen State `privacyAccepted` (boolean, default `false`) hinzufuegen
2. Zwischen dem E-Mail-Input und dem Submit-Button eine Zeile mit der Checkbox einfuegen:
   - Radix UI Checkbox-Komponente (bereits vorhanden)
   - Label-Text: "Ich stimme der Datenschutzerklaerung zu."
   - "Datenschutzerklaerung" wird als externer Link (`<a>`) gestaltet, der vorerst auf `#` zeigt (kann spaeter angepasst werden)
3. Den Submit-Button deaktivieren (`disabled`), solange `privacyAccepted` nicht `true` ist
4. Nach erfolgreichem Submit wird `privacyAccepted` zurueckgesetzt

### Technische Details

- Import der `Checkbox` aus `@/components/ui/checkbox`
- Der Link oeffnet sich in einem neuen Tab (`target="_blank"`)
- Styling: kleinere Schriftgroesse, passend zum bestehenden Design (text-muted-foreground, gold-Akzent fuer den Link)
- Der Button erhaelt eine `disabled`-Klasse mit reduzierter Deckkraft

