import React from "react";
import logo from "../assets/farmMatrixAI.png";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="navbar shadow-sm rounded-2xl bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex md:gap-3 justify-center items-center text-black ">
            <img
              src={logo}
              alt="Farm Matrix AI"
              className="w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-3xl "
            />
            <a className="btn btn-ghost text-xl md:text-4xl font-bold">Farm Matrix AI</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4">
            <LanguageSwitcher></LanguageSwitcher>
          </div>
        </div>
      </div>
    </div>
  );
}
