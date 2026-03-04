# Language Mode Integration Guide

## Overview
Language mode has been successfully integrated into your FarmMatrixAI project using **i18next** and **react-i18next**. The system supports 4 languages:
- English (en)
- Bangla (bn)
- Hindi (hi)
- Punjabi (pa)

## What Was Set Up

### 1. **Translation Files** (`src/locales/`)
- `en.json` - English translations
- `bn.json` - Bengali/Bangla translations
- `hi.json` - Hindi translations
- `pa.json` - Punjabi translations

Each file contains organized translation keys for different sections like navbar, hero, features, etc.

### 2. **Language Provider** (`src/provider/`)
- **i18n.js** - i18next configuration that:
  - Loads all translation files
  - Auto-detects browser language
  - Saves language preference to localStorage
  - Sets "en" as fallback language

- **LanguageProvider.jsx** - React context provider that:
  - Wraps your app with language functionality
  - Provides `useLanguage()` hook to access language controls
  - Exposes `changeLanguage()` function

### 3. **Updated Components**
- **LanguageSwitcher.jsx** - Now fully functional with:
  - Language dropdown menu
  - Active language indicator
  - Smooth language switching

- **Navbar.jsx** - Now uses translations for "Home" button

- **Root.jsx** - Wraps app with LanguageProvider

## How to Use in Components

### Basic Usage
Import the translation hook in any component:

```jsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("navbar.home")}</h1>
      <p>{t("hero.title")}</p>
    </div>
  );
}
```

### Add New Translations
1. Add keys to all language files in `src/locales/`:
   ```json
   {
     "mySection": {
       "myText": "Your English text"
     }
   }
   ```

2. Use in component:
   ```jsx
   {t("mySection.myText")}
   ```

## How Language Switching Works

1. User clicks Language button in navbar
2. Selects a language from dropdown
3. `changeLanguage()` is called
4. Language preference saved to localStorage
5. App instantly updates all translated text
6. On page reload, saved language is restored

## Browser Language Detection

The app automatically detects user's browser language:
- If browser language matches (en/bn/hi/pa), that language loads
- Otherwise, defaults to English
- User can always override by selecting a different language

## Available Translation Keys

Browse `src/locales/en.json` to see all available translation keys organized by section:
- `navbar.*` - Navigation bar texts
- `hero.*` - Hero section
- `features.*` - Features section
- `cropRecommendation.*` - Crop recommendation module
- `diseaseDetection.*` - Disease detection module
- `weather.*` - Weather section
- `soil.*` - Soil analysis section
- `about.*` - About section
- `howItWorks.*` - How it works section
- `footer.*` - Footer section
- `common.*` - Common UI texts (buttons, placeholders, etc.)

## Example: Translate a Section

Let's say you want to translate the Home component:

```jsx
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      {/* Replace hardcoded text with t() calls */}
    </div>
  );
}
```

## Storage & Persistence

- Selected language stored in browser's localStorage under key: `"language"`
- Language preference survives page reloads and browser restarts
- Clear localStorage to reset language preferences

## Next Steps

To complete the integration:
1. Add `useTranslation()` hook to all major components
2. Replace hardcoded text with translation keys
3. Add more translation keys as needed to `src/locales/` files
4. Test language switching across all components

## Troubleshooting

**Translations not showing?**
- Ensure i18n is imported in Root.jsx: `import "./provider/i18n"`
- Check that component is wrapped with LanguageProvider
- Verify translation keys exist in all language files

**Language not persisting?**
- Check browser's localStorage (DevTools → Application → Local Storage)
- Clear browser cache if needed

**New text not translating?**
- Add the translation key to all 4 language JSON files
- Use exact key path in your component: `t("section.key")`
