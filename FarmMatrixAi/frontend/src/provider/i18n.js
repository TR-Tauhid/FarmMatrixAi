import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/en.json";
import bnTranslations from "../locales/bn.json";
import hiTranslations from "../locales/hi.json";
import paTranslations from "../locales/pa.json";

// Get saved language from localStorage or detect browser language
const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem("language");
    if (saved) return saved;
  } catch (e) {
    console.error("localStorage not available", e);
  }

  try {
    const browserLang = navigator.language.split("-")[0];
    const supportedLangs = ["en", "bn", "hi", "pa"];
    return supportedLangs.includes(browserLang) ? browserLang : "en";
  } catch (e) {
    console.error("Error", e);
    return "en";
  }
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslations },
      bn: { translation: bnTranslations },
      hi: { translation: hiTranslations },
      pa: { translation: paTranslations },
    },
    lng: getSavedLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
