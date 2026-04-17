import React, { useContext } from "react";
import logo from "../assets/farmMatrixAI.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiSettings, FiLogOut, FiUser, FiMoon, FiSun } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import AuthContext from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ minimized }) {
  const { t } = useTranslation();
  const AuthValue = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const { user, logOut, notify } = AuthValue;

  const handleLogOutBtn = () => {
    logOut()
      .then(() => notify("Logged out successfully", "success"))
      .catch((err) => notify(err?.message, "error"));
  };

  return (
    <nav className={`w-full transition-all duration-500 ease-in-out px-4 md:px-10 ${
      minimized ? "py-2 bg-base-100/80 backdrop-blur-md shadow-lg" : "py-4 md:py-6"
    }`}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-4">
        
        {/* --- BRAND SECTION --- */}
        <NavLink to="/" className="flex items-center gap-3 md:gap-4 group shrink-0">
          <div className="relative">
            <img
              className={`rounded-xl border-2 border-emerald-700 shadow-emerald-900/20 transition-all duration-500 group-hover:scale-105 ${
                minimized ? "w-10 h-10 md:w-12 md:h-12" : "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              }`}
              src={logo}
              alt="logo"
            />
            {/* Online Status Dot */}
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-base-100 rounded-full"></span>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className={`font-black tracking-tighter leading-none transition-all duration-500 text-emerald-800 dark:text-emerald-400 ${
              minimized ? "text-lg md:text-xl" : "text-xl md:text-3xl lg:text-5xl"
            }`}>
              {t("navbar.title")}
            </h1>
            <p className={`font-bold transition-all duration-500 text-base-content opacity-60 leading-none mt-1 ${
              minimized ? "text-[8px] md:text-[10px]" : "text-[10px] md:text-xs lg:text-base"
            }`}>
              {t("navbar.subTitle")}
            </p>
          </div>
        </NavLink>

        {/* --- UTILITIES SECTION --- */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          
          {/* Language Switcher - Highest Z-Index */}
          <div className="relative z-[110]">
            <LanguageSwitcher />
          </div>

          <div className="hidden sm:block w-px h-6 bg-base-content/20 mx-1"></div>

          <div className="flex items-center gap-1 md:gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm md:btn-md hover:bg-emerald-500/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FiMoon className="text-xl md:text-2xl" />
              ) : (
                <FiSun className="text-xl md:text-2xl text-amber-400" />
              )}
            </button>

            {/* Settings Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm md:btn-md text-xl md:text-2xl">
                <FiSettings />
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-base-100/90 backdrop-blur-xl rounded-2xl w-52 mt-4 border border-base-content/10 z-[105]">
                <li className="font-bold"><a><FiUser /> Account Settings</a></li>
                <li className="font-bold"><a><FiSettings /> Preferences</a></li>
              </ul>
            </div>

            {/* Profile Section */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar border-2 transition-all duration-300 ${
                  user ? "border-emerald-500" : "border-base-content/20 animate-pulse"
                }`}
              >
                <div className="w-8 md:w-10 rounded-full">
                  {user ? (
                    <img
                      src={user?.photoUrl || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}
                      alt="User Profile"
                      title={user?.displayName}
                    />
                  ) : (
                    <RxAvatar className="w-full h-full opacity-50" />
                  )}
                </div>
              </div>

              <ul tabIndex={0} className="dropdown-content menu p-0 shadow-2xl bg-base-100/90 backdrop-blur-xl rounded-2xl w-52 mt-4 border border-base-content/10 overflow-hidden z-[105]">
                {user ? (
                  <>
                    <li className="p-4 bg-emerald-500/10 border-b border-base-content/5 text-center">
                      <p className="text-xs font-black truncate">{user.displayName}</p>
                      <p className="text-[8px] opacity-50">{user.email}</p>
                    </li>
                    <li>
                      <button onClick={handleLogOutBtn} className="py-4 justify-center font-black text-rose-500 text-xs uppercase tracking-widest">
                        <FiLogOut /> Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><NavLink to="/login" className="py-4 justify-center font-black text-xs uppercase tracking-widest">Log In</NavLink></li>
                    <li className="border-t border-base-content/5">
                      <NavLink to="/register" className="py-4 justify-center font-black text-xs uppercase tracking-widest text-emerald-600">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}