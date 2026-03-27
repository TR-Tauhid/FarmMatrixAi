import { useTranslation } from "react-i18next";
import { useLanguage } from "../provider/LanguageProvider";
import { FaLanguage } from "react-icons/fa6";


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
    <div className="dropdown dropdown-center z-50 w-full ">
      <button
        className="btn btn-neutral btn-outline border-none shadow-none font-bold gap-2 w-full justify-start text-lg"
        tabIndex={0}
        role="button"
      >
        <FaLanguage  className="text-4xl"/>
        {t("navbar.language")}
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content text-black font-semibold z-50 menu p-0 shadow rounded-xl overflow-visible md:w-40 backdrop-blur-2xl border block"
      >
        {languages.map((lang) => (
          <li key={lang.code} className="w-full border-b rounded-none first:rounded-t-xl last:rounded-b-xl hover:bg-black hover:text-white active:border-0 last:border-0 overflow-hidden">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange(lang.code);
              }}
              className={
                currentLanguage === lang.code ? "font-extrabold underline " : ""
              }
              style={{ cursor: "pointer", maxWidth: "180px" }}
            >
              <span className="text-base">{lang.label}</span>
              {currentLanguage === lang.code && (
                <span className="badge badge-sm badge-success bg-black border-none text-white underline-offset-0">
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
