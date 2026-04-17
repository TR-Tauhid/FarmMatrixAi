import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-green-800 text-gray-200 py-10 w-full mt-20 mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold "> {t("navbar.title")}</h2>
          <p className="mt-3 text-gray-300 text-sm">{t("about.description")}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:">
                {t("footer.links.home")}
              </a>
            </li>
            <li>
              <a href="/recommendation" className="hover:">
                {t("footer.links.cropRecommendation")}
              </a>
            </li>
            <li>
              <a href="/soil" className="hover:">
                {t("footer.links.soilAnalysis")}
              </a>
            </li>
            <li>
              <a href="/compare" className="hover:">
                {t("footer.links.cropComparison")}
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">{t("footer.support")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:">
                {t("footer.links.faq")}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:">
                {t("footer.links.contact")}
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:">
                {t("footer.links.privacy")}
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:">
                {t("footer.links.terms")}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">
            {t("footer.followUs")}
          </h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:">
              <FaTwitter />
            </a>
            <a href="#" className="hover:">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-8 pt-5 text-center text-sm text-gray-400">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
