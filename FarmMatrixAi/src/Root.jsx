import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import "./provider/i18n";
import { LanguageProvider } from "./provider/LanguageProvider";
import SidebarLayout from "./components/SidebarLayout";

export default function Root() {
  return (
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-base-100 overflow-scroll">
          <Navbar />
          <SidebarLayout>
            <Outlet />
          </SidebarLayout>
          <Footer />
        </div>
      </LanguageProvider>
  );
}
