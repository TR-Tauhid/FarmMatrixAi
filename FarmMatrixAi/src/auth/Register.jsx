import React from "react";
import logo from "../assets/farmMatrixAI.png";
import greenFarmland from "../assets/greenFarmland.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

export default function Register() {
  const { t } = useTranslation();

  return (
    <div
      className="h-dvh bg-cover "
      style={{
        backgroundImage: `url(${greenFarmland})`,
      }}
    >
      <div className="bg-linear-to-r/srgb from-[#ffffffd8] to-[#00000000] h-dvh">
        <div className="w-2/6 p-24 ">
          <div className="mb-10">
            <NavLink
              to="./"
              className="space-x-6 flex w-full grow items-center"
            >
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
          <div className="space-y-3 mb-10">
            <h1 className="text-black text-4xl font-bold font-inter">
              Welcome
            </h1>
            <h4 className="font-inter text-lg text-[#3C4A42] ">
              Enter your credentials to access your field insights.
            </h4>
          </div>

          <div>
            <fieldset className="fieldset rounded-box w-full">
              <label className="label font-inter font-semibold text-sm text-[#3C4A42]">
                Name
              </label>

              <div className="flex items-center shadow-sm bg-base-100 p-3 rounded-2xl mb-6 border">
                <MdDriveFileRenameOutline className="text-xl text-[#6C7A71] w-5"></MdDriveFileRenameOutline >
                <input
                  type="text"
                  className="input input-ghost border-base-100 outline-0"
                  placeholder="Your Name"
                />
              </div>
              <label className="label font-inter font-semibold text-sm text-[#3C4A42]">
                Email or Phone Number
              </label>

              <div className="flex items-center shadow-sm bg-base-100 p-3 rounded-2xl mb-6 border">
                <MdOutlineEmail className="text-xl text-[#6C7A71] w-5"></MdOutlineEmail>
                <input
                  type="email"
                  className="input input-ghost border-base-100 outline-0"
                  placeholder="email@example.com or +1 (555) 000-0000"
                />
              </div>

              <div className="flex justify-between">
                <label className="label font-inter font-semibold text-sm text-[#3C4A42]">
                  Password
                </label>
                <label className="label hover:underline underline-offset-2 cursor-pointer font-inter font-semibold text-lg text-[#006C49]">
                  Forgotten Password?
                </label>
              </div>

              <div className="flex items-center shadow-sm bg-base-100 p-3 rounded-2xl border">
                <CiLock className="text-xl text-[#6C7A71] w-5"></CiLock>

                <input
                  type="password"
                  className="input input-ghost border-base-100 outline-0 w-full"
                  placeholder="Password"
                />
              </div>

              <button className="btn btn-neutral mt-10 h-15 rounded-xl text-xl">
                Register
              </button>
            </fieldset>
          </div>

          <div className="flex items-center my-6">
            <div className="border-y h-0 border-black-400 w-full"></div>
            <h1 className="text-[#3C4A42] font-medium text-lg font-inter shrink-0 px-4">
              Or Continue With{" "}
            </h1>
            <div className="border-y h-0 border-black-400 w-full"></div>
          </div>

          <div className="flex gap-x-2 justify-around">
            <p className="text-[#3C4A42] font-medium text-lg font-inter">
              Already have an account ?{" "}
            </p>
            <NavLink
              to="/login"
              className="font-inter hover:underline underline-offset-2 cursor-pointer font-bold text-lg text-[#006C49]"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
