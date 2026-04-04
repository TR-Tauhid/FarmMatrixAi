import { useTranslation } from "react-i18next";

const CropRecCard = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-xl font-bold text-green-700">{t("cropRecCard.title")}</h3>
      <p className="text-gray-700 mt-2">{t("cropRecCard.description")}</p>

      <button className="mt-4 px-5 py-2 bg-green-600  rounded-lg hover:bg-green-700 transition">
        {t("cropRecCard.buttonText")}
      </button>
    </div>
  );
};

export default CropRecCard;
