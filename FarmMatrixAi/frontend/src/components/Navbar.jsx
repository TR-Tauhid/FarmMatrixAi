import React, { useContext, useState } from "react";
import logo from "../assets/farmMatrixAI.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import AuthContext from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { t } = useTranslation();
  const AuthValue = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const { user, logOut, notify } = AuthValue;
  const [scrolling, setScrolling] = useState(false);

  const miniNavBar = () => {
    if (window.scrollY >= 110) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", miniNavBar);

  const handleLogOutBtn = () => {
    logOut()
      .then((res) => {
        console.log(res);
        notify("Bye Bye...!!!", "success");
      })
      .catch((err) => notify(err?.message, "error"));
  };

  return (
    <div
      className={`w-full fixed -top-4 left-0 z-100 rounded-sm md:rounded-2xl backdrop-blur-2xl bg-base-100/30 transition-all duration-500 ease-in-out md:p-10 ${scrolling ? "md:px-3 md:scale-75 p-2 md:p-4" : "p-4 md:px-10"}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 max-w-[1440px] mx-auto">
        {/* Title Section*/}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <NavLink to="./" className="flex items-center gap-4 group">
            <div className="shrink-0">
              <img
                className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl border-2 border-emerald-700 shadow-sm transition-transform group-hover:scale-105"
                src={logo}
                alt="logo"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-xl md:text-2xl lg:text-4xl text-[#047857] dark:text-emerald-400 font-lato font-black leading-tight">
                {t("navbar.title")}
              </p>
              <p className="text-xs md:text-sm lg:text-lg  font-medium leading-tight">
                {t("navbar.subTitle")}
              </p>
            </div>
          </NavLink>
        </div>

        {/* Utilities Section*/}
        <div
          className={`hidden md:flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4 w-full md:w-auto duration-500 transition-all ease-in-out ${scrolling ? "hidden md:flex " : ""}`}
        >
          {/* Language Switcher */}
          <div className="scale-90 md:scale-100">
            <LanguageSwitcher />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-black dark:bg-white  mx-1"></div>

          <div className="flex items-center gap-1 md:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle "
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  className="h-7 w-7 md:h-9 md:w-9 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7 md:h-9 md:w-9 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              )}
            </button>

            {/* Settings Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle  text-2xl md:text-3xl"
              >
                <FiSettings />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu backdrop-blur-3xl rounded-box z-50 w-52 p-2 shadow-xl border border-slate-100 mt-2 dropdown-content font-semibold rounded-xl overflow-visible md:w-40 bg-white/40 dark:bg-black/60 "
              >
                <li>
                  <a className="py-3">Account Settings</a>
                </li>
                <li>
                  <a className="py-3">Preferences</a>
                </li>
              </ul>
            </div>

            {/* Profile Dropdown */}
            <div className={`dropdown dropdown-end `}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-slate-200 hover:border-emerald-600 transition-colors"
              >
                <div className="w-10 md:w-12 rounded-full">
                  {user ? (
                    <div className="w-full h-full tooltip" data-tip="Hey...!!!">
                      <button className="cursor-pointer">
                        <img
                          className="w-full"
                          title={
                            user?.photoUrl
                              ? user?.displayName
                              : "You don't have a profile Picture...!!!"
                          }
                          src={
                            user?.photoUrl ||
                            "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                          }
                          alt="Profile Icon."
                        />
                      </button>
                    </div>
                  ) : (
                    <RxAvatar
                      title="Log In."
                      className="tooltip-bottom w-full h-full "
                    />
                  )}
                </div>
              </div>

              {user ? (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu font-bold border backdrop-blur-3xl p-0 mt-4 w-48 shadow-2xl border-slate-100 rounded-2xl dropdown-content md:w-40 bg-white/40 dark:bg-black/60 block"
                >
                  <li className="backdrop-blur-2xl transition-colors">
                    <button
                      onClick={handleLogOutBtn}
                      className="py-4 justify-center"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              ) : (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu font-bold backdrop-blur-3xl border border-slate-200 p-0 rounded-xl z-50 mt-4 w-48 shadow-2xl overflow-hidden"
                >
                  <li className="transition-colors">
                    <NavLink to="/login" className="py-4 justify-center">
                      Log In
                    </NavLink>
                  </li>
                  <li className="transition-colors border-t border-slate-100">
                    <NavLink to="/register" className="py-4 justify-center">
                      Register
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
