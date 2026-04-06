import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
import AuthContext from "../context/AuthContext";

const SidebarLayout = ({ children }) => {
  const AuthValue = useContext(AuthContext);
  const { user } = AuthValue;

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

          {/* Profile Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/30">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full border-2 border-emerald-100">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                    alt="User"
                  />
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold  truncate">
                  {user?.displayName}
                </p>
                <p className="text-[10px]  font-bold uppercase tracking-widest">
                  {user?.isActive}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
