import { useTranslation } from "react-i18next";

const CropCompare = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-6 bg-purple-50 rounded-lg shadow ">
      <h3 className="text-2xl font-bold text-purple-700">{t("cropCompare.heading")}</h3>
      <p className="text-gray-700 mt-2">
        {t("cropCompare.description")}
      </p>

      <button className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        {t("cropCompare.button")}
      </button>
    </section>
  );
};

export default CropCompare;

