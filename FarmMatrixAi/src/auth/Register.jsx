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

    // --- Sanitization & Extraction ---
    const name = form.get("name")?.trim();
    const email = form.get("email")?.trim().toLowerCase();
    const password = form.get("password");
    const confirmPass = form.get("confirmPass");

    // --- Validation Logic ---
    if (!name || !email || !password) {
      return notify("All fields are required", "error");
    }

    if (password.length < 6) {
      return notify("Password should be at least 6 characters", "error");
    }

    if (password !== confirmPass) {
      return notify("Passwords do not match", "error");
    }

    setLoading(true);

    createUserWithEmail(email, password, name)
      .then((res) => {
        notify(`Welcome...${name}...!!!`, "success");
        updateName(name); // Updating profile name after creation
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        notify(err?.message, "error");
      });
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen w-full flex items-stretch transition-colors duration-500"
      style={{ backgroundImage: `url(${greenFarmland})` }}
    >
      {/* Dynamic Overlay & Content Container */}
      <div
        className="w-full flex flex-col overflow-y-auto transition-all duration-500 
        bg-linear-to-r from-white/75 via-[#92b99299] to-[#ffffff60] lg:to-white/10
        dark:from-slate-950/95 dark:via-slate-900/80 dark:to-transparent lg:dark:to-slate-950"
      >
        <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-20 xl:ml-32 p-6 md:p-12 lg:py-20 flex flex-col justify-center">
          {/* Brand Logo & Title */}
          <div className="mb-8 md:mb-10">
            <NavLink to="/" className="flex items-center gap-4 md:gap-6 group">
              <div className="shrink-0">
                <img
                  className="w-14 h-14 md:w-18 md:h-18 rounded-xl border-2 border-emerald-700 object-cover shadow-sm transition-transform group-hover:scale-105"
                  src={logo}
                  alt="logo"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-2xl md:text-4xl font-lato font-black leading-tight text-[#047857] dark:text-emerald-400">
                  {t("navbar.title")}
                </p>
                <p className="text-sm md:text-lg font-medium leading-tight text-slate-600 dark:text-slate-400">
                  {t("navbar.subTitle")}
                </p>
              </div>
            </NavLink>
          </div>

          {/* Welcome Section */}
          <div className="space-y-2 mb-8 text-slate-900 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
              Create Account
            </h1>
            <h4 className="text-base md:text-lg font-medium opacity-70">
              Join Farm Matrix AI to start monitoring your land.
            </h4>
          </div>

          {/* Registration Form */}
          <div className="w-full">
            <form onSubmit={handleSummitBtn}>
              <fieldset className="grid grid-cols-1 gap-4">
                {/* Name Input */}
                <div>
                  <label className="block font-bold text-[10px] uppercase tracking-widest mb-2 ml-1 text-slate-500 dark:text-emerald-500/60">
                    Full Name *
                  </label>
                  <div
                    className="flex items-center shadow-sm p-3.5 rounded-2xl border transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 
                    bg-white/80 border-slate-200 focus-within:border-emerald-600 text-black
                    dark:bg-slate-800/50 dark:border-slate-700 dark:focus-within:border-emerald-500 dark:text-white"
                  >
                    <MdDriveFileRenameOutline className="text-xl shrink-0 opacity-50" />
                    <input
                      type="text"
                      name="name"
                      required
                      className="bg-transparent border-none outline-none w-full px-3 text-sm md:text-base font-medium placeholder:opacity-30"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block font-bold text-[10px] uppercase tracking-widest mb-2 ml-1 text-slate-500 dark:text-emerald-500/60">
                    Email Address *
                  </label>
                  <div
                    className="flex items-center shadow-sm p-3.5 rounded-2xl border transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 
                    bg-white/80 border-slate-200 focus-within:border-emerald-600 text-black
                    dark:bg-slate-800/50 dark:border-slate-700 dark:focus-within:border-emerald-500 dark:text-white"
                  >
                    <MdOutlineEmail className="text-xl shrink-0 opacity-50" />
                    <input
                      type="email"
                      name="email"
                      required
                      className="bg-transparent border-none outline-none w-full px-3 text-sm md:text-base font-medium placeholder:opacity-30"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Password Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[10px] uppercase tracking-widest mb-2 ml-1 text-slate-500 dark:text-emerald-500/60">
                      Password
                    </label>
                    <div
                      className="flex items-center shadow-sm p-3.5 rounded-2xl border transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 
                      bg-white/80 border-slate-200 focus-within:border-emerald-600 text-black
                      dark:bg-slate-800/50 dark:border-slate-700 dark:focus-within:border-emerald-500 dark:text-white"
                    >
                      <CiLock className="text-xl shrink-0 opacity-50" />
                      <input
                        type="password"
                        name="password"
                        required
                        className="bg-transparent border-none outline-none w-full px-3 text-sm md:text-base font-medium placeholder:opacity-30"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[10px] uppercase tracking-widest mb-2 ml-1 text-slate-500 dark:text-emerald-500/60">
                      Confirm Pass
                    </label>
                    <div
                      className="flex items-center shadow-sm p-3.5 rounded-2xl border transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 
                      bg-white/80 border-slate-200 focus-within:border-emerald-600 text-black
                      dark:bg-slate-800/50 dark:border-slate-700 dark:focus-within:border-emerald-500 dark:text-white"
                    >
                      <CiLock className="text-xl shrink-0 opacity-50" />
                      <input
                        type="password"
                        name="confirmPass"
                        required
                        className="bg-transparent border-none outline-none w-full px-3 text-sm md:text-base font-medium placeholder:opacity-30"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full py-4 font-black cursor-pointer rounded-2xl mt-6 shadow-xl transition-all active:scale-95 uppercase tracking-[0.2em] text-xs md:text-sm 
                  bg-slate-900 text-white hover:bg-black
                  dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
                >
                  Register Now
                </button>
              </fieldset>
            </form>
          </div>

          {/* Redirect Section */}
          <div className="mt-8 flex flex-col md:flex-row gap-2 items-center justify-center text-center">
            <p className="font-medium text-sm md:text-lg text-slate-600 dark:text-slate-400">
              Already have an account?
            </p>
            <NavLink
              to="/login"
              className="font-black hover:underline underline-offset-2 text-sm md:text-base uppercase tracking-widest text-emerald-700 dark:text-emerald-400"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
