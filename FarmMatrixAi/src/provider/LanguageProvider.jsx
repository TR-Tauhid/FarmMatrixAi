import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChanged = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem("language", lang);
    } catch (e) {
      console.log("Could not save language to localStorage");
    }
    setCurrentLang(lang);
  };

  const value = {
    currentLanguage: currentLang,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
