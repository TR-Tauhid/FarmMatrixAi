import React from "react";
import logo from "../assets/farmMatrixAI.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="w-11/12 mx-auto mt-6">
      {/* Title Farm Matrix AI */}

      {/* Navbar Menu */}

      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-1" className="btn drawer-button">
            Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a className="flex">
                {" "}
                <div className="w-full" >
                  <LanguageSwitcher></LanguageSwitcher>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4">
        <div className="flex md:gap-3 justify-center items-center">
          <img
            src={logo}
            alt="Farm Matrix AI"
            className="w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-3xl "
          />
          <NavLink
            to="./"
            className="btn btn-ghost md:p-10 text-xl md:text-4xl font-bold"
          >
            {t("navbar.title")}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
