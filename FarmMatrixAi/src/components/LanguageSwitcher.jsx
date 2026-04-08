import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";
import { FaLanguage } from "react-icons/fa6";
import { useContext } from "react";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const LanguageValue = useContext(LanguageContext);
  const { changeLanguage, currentLanguage } = LanguageValue;

  const languages = [
    { code: "en", name: "English", label: "🇬🇧 English" },
    { code: "bn", name: "Bangla", label: "🇧🇩 বাংলা" },
    { code: "hi", name: "Hindi", label: "🇮🇳 हिंदी" },
    { code: "pa", name: "Punjabi", label: "🇮🇳 ਪੰਜਾਬੀ" },
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <div className="dropdown dropdown-top md:dropdown-end">
      <button
        className="btn btn-neutral dark:text-white border-none shadow-none font-bold gap-2 justify-start text-lg"
        tabIndex={0}
        role="button"
      >
        <FaLanguage className="text-4xl" />
        {t("navbar.language")}
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content font-semibold menu mt-2 p-0 shadow rounded-xl md:w-40 bg-white/40 dark:bg-black/60 backdrop-blur-[80px] border"
      >
        {languages.map((lang) => (
          <li
            key={lang.code}
            className="w-full border-b rounded-none first:rounded-t-xl last:rounded-b-xl active:border-0 last:border-0 overflow-hidden"
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange(lang.code);
              }}
              className={currentLanguage === lang.code ? "font-extrabold" : ""}
              style={{ cursor: "pointer", maxWidth: "180px" }}
            >
              <span className="text-base">{lang.label}</span>
              {currentLanguage === lang.code && (
                <span className="badge badge-md badge-success dark:bg-white border-none">
                  ✓
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
