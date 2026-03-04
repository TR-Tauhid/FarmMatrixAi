import { useTranslation } from "react-i18next";

const WeatherSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-6 bg-blue-50 rounded-lg shadow ">
      <h3 className="text-2xl font-bold text-blue-700">{t("weather.title")}</h3>
      <p className="text-gray-700 mt-2">{t("weather.temperature")}, {t("weather.humidity")} & {t("weather.rainfall")} data.</p>

      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        {t("common.submit")}
      </button>
    </section>
  );
};

export default WeatherSection;
