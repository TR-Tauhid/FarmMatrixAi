import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./shared/Footer";
import KeenSlider from 'keen-slider'
import "./provider/i18n";
import { LanguageProvider } from "./provider/LanguageProvider";

export default function Root() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white overflow-scroll">
        <ToastContainer />

        <Navbar />

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
