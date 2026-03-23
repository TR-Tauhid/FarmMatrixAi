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
    <div className="dropdown z-50 w-full ">
      <button
        className="btn border-none shadow-none font-bold gap-2 w-full justify-start text-lg"
        tabIndex={0}
        role="button"
      >
        <FaLanguage />
        {t("navbar.language")}
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content z-50 menu p-2  shadow rounded-2xl overflow-visible md:w-40 text-base-content border bg-[#047857] block"
      >
        {languages.map((lang) => (
          <li key={lang.code} className="w-fit">
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
                <span className="badge badge-sm badge-success text-white underline-none">
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
