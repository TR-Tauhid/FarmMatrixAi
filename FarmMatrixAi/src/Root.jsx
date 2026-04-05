import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import "./provider/i18n";
import { LanguageProvider } from "./provider/LanguageProvider";
import SidebarLayout from "./components/SidebarLayout";

export default function Root() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-linear-to-br from-blue-200 via-blue-300 to-cyan-200  dark:from-[#0e1629] dark:via-[#1e293b]  dark:to-[#1e3a8a]">
          <Navbar />
        <div className="flex flex-1 pt-24 md:pt-32 overflow-hidden">
          <SidebarLayout>
            <div className="h-full overflow-y-auto custom-scrollbar">
              <Outlet />
              <Footer />
            </div>
          </SidebarLayout>
        </div>
      </div>
    </LanguageProvider>
  );
}
