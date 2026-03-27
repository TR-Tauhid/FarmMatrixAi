import React from "react";
import logo from "../assets/farmMatrixAI.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="mt-10">
      <div className="flex justify-between max-w-11/12 items-stretch mx-auto items-center">
        {/* Title */}

        <div className="w-4/12">
          <NavLink to="./" className="space-x-6 flex w-full grow items-center">
            <div>
              <img
                className="w-18 h-18 rounded-xl border-2 border-emerald-700"
                src={logo}
                alt="logo"
              />
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-4xl text-primary font-lato font-black leading-7">
                {t("navbar.title")}
              </p>
              <p className="text-lg text-slate-600 leading-4">
                {t("navbar.subTitle")}
              </p>
            </div>
          </NavLink>
        </div>

        {/* Search and Setting, Profiles */}

        <div className="flex gap-x-3 w-full justify-end items-center ">
          {/* Search Bar */}

          {/* <div className="max-h-28 min-w-full grow">
            <label className="input text-[#64748B] border-none custom-s-bar outline-none shadow-sm">
              <svg
                className="h-[1em] opacity-50 text-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input className="font-normal text-xl" type="search" required placeholder="Search fields, sensors or alerts..." />
            </label>
          </div> */}

          <div className="flex justify-around gap-2 items-center">
            {/* Language Switcher */}

            <div className="w-full ">
              <LanguageSwitcher></LanguageSwitcher>
            </div>

            {/* Theme Toggle */}

            <div className="text-[#64748B]">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            {/* Setting */}

            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost text-[#64748B] hover:bg-transparent border-none shadow-none text-3xl m-1"
                >
                  <FiSettings />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Setting 1</a>
                  </li>
                  <li>
                    <a>Setting 2</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Profile */}

            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="btn rounded-full p-0 h-12 border-none">
                <button className="btn rounded-full h-12 text-5xl p-0 m-0 font-bold border-none">
                  <RxAvatar />
                </button>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu backdrop-blur-2xl text-black font-bold border last:border-b-0 *:hover:bg-black *:hover:text-white p-0 rounded-box z-1 m-2 shadow-sm"
              >
                <li className="flex justify-center rounded-box border-b">
                  <NavLink to="./login" className="text-center">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
