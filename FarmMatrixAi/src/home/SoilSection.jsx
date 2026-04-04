import { useTranslation } from "react-i18next";

const SoilSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-6 bg-yellow-50 rounded-lg shadow ">
      <h3 className="text-2xl font-bold text-yellow-700">{t("soil.title")}</h3>
      <p className="text-gray-700 mt-2">{t("soil.nitrogen")}, {t("soil.ph")} & {t("soil.phosphorus")} analysis.</p>

      <button className="mt-4 px-5 py-2 bg-yellow-600  rounded-lg hover:bg-yellow-700 transition">
        {t("soil.title")}
      </button>
    </section>
  );
};

export default SoilSection;
