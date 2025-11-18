import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-200 py-10 w-full mt-20 mx-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Farm Matrix AI</h2>
          <p className="mt-3 text-gray-300 text-sm">
            Smart farming powered by AI – helping farmers make better decisions
            using soil data, weather insights, and machine learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/recommendation" className="hover:text-white">Crop Recommendation</a></li>
            <li><a href="/soil" className="hover:text-white">Soil Analysis</a></li>
            <li><a href="/compare" className="hover:text-white">Crop Comparison</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-8 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Farm Matrix AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
