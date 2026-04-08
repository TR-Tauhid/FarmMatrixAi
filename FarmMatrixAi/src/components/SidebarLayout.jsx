import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import AuthContext from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

import {
  MdDashboard,
  MdPsychology,
  MdBiotech,
  MdWbSunny,
  MdTrendingUp,
  MdNewspaper,
  MdInfo,
  MdChevronRight,
} from "react-icons/md";

const SidebarLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const AuthValue = useContext(AuthContext);
  const { user, notify, logOut } = AuthValue;

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/" },
    {
      name: "Recommendations",
      icon: <MdPsychology />,
      path: "/recommendations",
    },
    { name: "Diagnostics", icon: <MdBiotech />, path: "/diagnostics" },
    { name: "Environment", icon: <MdWbSunny />, path: "/environment" },
    { name: "Markets", icon: <MdTrendingUp />, path: "/markets" },
    { name: "News", icon: <MdNewspaper />, path: "/news" },
    { name: "About Us", icon: <MdInfo />, path: "/about" },
  ];

  const handleLogOutBtn = () => {
    logOut()
      .then((res) => {
        console.log(res);
        notify("Bye Bye...!!!", "success");
      })
      .catch((err) => notify(err?.message, "error"));
  };
  return (
    <div className="drawer min-h-screen overflow-x-hidden">
      <input id="my-sidebar" type="checkbox" className="drawer-toggle peer" />

      {/* Toggle Button */}
      <div className="drawer-toggle-btn fixed top-40 left-0 z-9999 ml-1">
        <label
          htmlFor="my-sidebar"
          className="btn btn-circle btn-sm text-white bg-emerald-600 hover:bg-emerald-700  border-none shadow-xl cursor-pointer flex items-center justify-center transition-all active:scale-90"
        >
          <MdChevronRight className="text-2xl transition-transform duration-700" />
        </label>
      </div>

      {/* Main Page Content Area */}
      <div className="drawer-content flex flex-col min-h-screen">
        <main className="grow">{children}</main>
      </div>

      {/* Sidebar Side */}
      <div className="drawer-side z-100 overflow-visible fixed">
        <label
          htmlFor="my-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay backdrop-blur-[2px]"
        ></label>

        {/* The Sidebar Container */}
        <div className="relative w-72 min-h-full bg-transparent backdrop-blur-xl bg-top-right from-500% from-white to-50% to-black border-r border-slate-200 flex flex-col pt-10 overflow-visible transition-all duration-300">
          {/* Navigation Links */}
          <nav className="flex-1 pl-4 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => {
                  const drawer = document.getElementById("my-sidebar");
                  if (drawer) drawer.checked = false;
                }}
                className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3.5 rounded-lg font-semibold transition-all duration-500 ease-linear group 
                  ${
                    isActive
                      ? "bg-emerald-50 dark:bg-black/30 border-r-4 border-emerald-600 rounded-r-none underline underline-offset-4 "
                      : "hover:backdrop-blur-3xl relative after:absolute after:bg-black dark:after:bg-gray-200 after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                  }
                `}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[15px] menu-style-unerline menu-style-unerline ">
                  {item.name}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Utilities Section*/}

          <div>
            {/* Language Switcher */}
            <div className="flex justify-end scale-90 md:scale-100">
              <LanguageSwitcher />
            </div>

            <div className="p-3 flex flex-col">
              {/* Settings Dropdown */}
              <div className="dropdown dropdown-top">
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
            </div>

            {/* Divider */}
            <div className="w-11/12 mx-auto h-px bg-black dark:bg-white"></div>

            {/* Profile Dropdown */}
            <div className={`dropdown dropdown-top p-3 `}>
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
                  className="dropdown-content menu font-bold backdrop-blur-3xl bg-white/50 dark:bg-black/50 border border-slate-200 p-0 rounded-xl z-50 mt-4 w-48 shadow-2xl overflow-hidden"
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
};

export default SidebarLayout;
