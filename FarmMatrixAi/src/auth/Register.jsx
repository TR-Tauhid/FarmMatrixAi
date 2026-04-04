import React, { useContext } from "react";
import logo from "../assets/farmMatrixAI.png";
import greenFarmland from "../assets/greenFarmland.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import AuthContext from "../context/AuthContext";

export default function Register() {
  const { t } = useTranslation();
  const AuthValue = useContext(AuthContext);

  const { setLoading, updateName, createUserWithEmail, notify } = AuthValue;

  const handleSummitBtn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const confomrPass = form.get("conformPass");
    const name = form.get("name");

    
    createUserWithEmail(email, password, name)
      .then((res) => {
        notify(`Welcome...${res?.user?.displayName}...!!!`, "success");
        setLoading(false);
      })
      .catch((err) => notify(err?.message, "error"));
    updateName(name);
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen w-full flex items-stretch"
      style={{
        backgroundImage: `url(${greenFarmland})`,
      }}
    >
      <div className="bg-linear-to-r/srgb from-[#ffffffd8] via-[#e0d5fd9c] to-[#ffffff60] lg:to-[#00000000] w-full flex flex-col overflow-y-auto">

        <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-20 xl:ml-32 p-6 md:p-12 lg:py-20 flex flex-col justify-center">
          {/* Brand Logo & Title */}
          <div className="mb-8 md:mb-10">
            <NavLink to="/" className="flex items-center gap-4 md:gap-6 group">
              <div className="shrink-0">
                <img
                  className="w-14 h-14 md:w-18 md:h-18 rounded-xl border-2 border-emerald-700 object-cover shadow-sm"
                  src={logo}
                  alt="logo"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-2xl md:text-4xl text-[#047857] font-lato font-black leading-tight">
                  {t("navbar.title")}
                </p>
                <p className="text-sm md:text-lg  leading-tight">
                  {t("navbar.subTitle")}
                </p>
              </div>
            </NavLink>
          </div>

          {/* Welcome Section */}
          <div className="space-y-2 mb-8">
            <h1 className=" text-3xl md:text-4xl font-bold font-inter">
              Welcome
            </h1>
            <h4 className="font-inter text-base md:text-lg text-[#3C4A42]">
              Enter your credentials to access your field insights.
            </h4>
          </div>

          {/* Registration Form */}
          <div className="w-full">
            <form onSubmit={handleSummitBtn}>
              <fieldset className="grid grid-cols-1 gap-4">
                {/* Name Input */}
                <div>
                  <label className="block font-inter font-semibold text-sm text-[#3C4A42] mb-1.5 ml-1">
                    Name *
                  </label>
                  <div className="flex items-center shadow-sm bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200 focus-within:border-emerald-500 transition-all">
                    <MdDriveFileRenameOutline className="text-xl text-[#6C7A71] shrink-0" />
                    <input
                      type="text"
                      name="name"
                      required
                      className="bg-transparent border-none outline-none w-full px-3 font-semibold "
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block font-inter font-semibold text-sm text-[#3C4A42] mb-1.5 ml-1">
                    Email or Phone Number
                  </label>
                  <div className="flex items-center shadow-sm bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200 focus-within:border-emerald-500 transition-all">
                    <MdOutlineEmail className="text-xl text-[#6C7A71] shrink-0" />
                    <input
                      type="email"
                      name="email"
                      className="bg-transparent border-none outline-none w-full px-3 "
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Password Logic (Responsive Grid for Tablet+) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter font-semibold text-sm text-[#3C4A42] mb-1.5 ml-1">
                      Password
                    </label>
                    <div className="flex items-center shadow-sm bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200 focus-within:border-emerald-500 transition-all">
                      <CiLock className="text-xl text-[#6C7A71] shrink-0" />
                      <input
                        type="password"
                        name="password"
                        className="bg-transparent border-none outline-none w-full px-3 "
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter font-semibold text-sm text-[#3C4A42] mb-1.5 ml-1">
                      Confirm Password
                    </label>
                    <div className="flex items-center shadow-sm bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200 focus-within:border-emerald-500 transition-all">
                      <CiLock className="text-xl text-[#6C7A71] shrink-0" />
                      <input
                        type="password"
                        name="confomrPass"
                        className="bg-transparent border-none outline-none w-full px-3 "
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full py-4 bg-slate-900 hover:bg-black  font-bold rounded-xl transition-all mt-6 text-lg md:text-xl shadow-lg active:scale-[0.98]">
                  Register
                </button>
              </fieldset>
            </form>
          </div>

          {/* Redirect Section */}
          <div className="mt-8 flex flex-col md:flex-row gap-2 items-center justify-center text-center">
            <p className="text-[#3C4A42] font-medium text-base md:text-lg font-inter">
              Already have an account?
            </p>
            <NavLink
              to="/login"
              className="font-inter hover:underline underline-offset-2 font-bold text-base md:text-lg text-[#006C49]"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
