import { useTranslation } from "react-i18next";
import { useLanguage } from "../provider/LanguageProvider";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage } = useLanguage();

  const languages = [
    { code: "en", name: "English", label: "🇬🇧 English" },
    { code: "bn", name: "Bangla", label: "🇧🇩 বাংলা" },
    { code: "hi", name: "Hindi", label: "🇮🇳 हिंदी" },
    { code: "pa", name: "Punjabi", label: "🇮🇳 ਪੰਜਾਬੀ" },
  ];

  const handleLanguageChange = (lang) => {
    console.log("Changing language to:", lang);
    changeLanguage(lang);
  };

  return (
    <div className="dropdown dropdown-end z-50">
      <button
        className="btn btn-sm md:btn-md btn-primary font-bold gap-2 text-white"
        tabIndex={0}
        role="button"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10m-5 10l-4-20" />
        </svg>
        {t("navbar.language")}
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-56 text-base-content border border-gray-200"
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange(lang.code);
              }}
              className={currentLanguage === lang.code ? "font-bold text-green-700" : ""}
              style={{ cursor: "pointer" }}
            >
              <span className="text-base">{lang.label}</span>
              {currentLanguage === lang.code && (
                <span className="badge badge-sm badge-success text-white">✓</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
