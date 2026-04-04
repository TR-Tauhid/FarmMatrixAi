import React, { useContext } from "react";
import logo from "../assets/farmMatrixAI.png";
import greenFarmland from "../assets/greenFarmland.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const { t } = useTranslation();
  const AuthValue = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    notify,
    setLoading,
    loginWithEmailPass,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signInWithTwitter,
  } = AuthValue;

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    loginWithEmailPass(email, password)
      .then((res) => {
        navigate("/");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
        setLoading(false);
      })
      .catch((error) => notify(error?.message, "error"));
  };
  const handleGoogeBtn = () => {
    signInWithGoogle()
      .then((res) => {
        navigate("/");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
        setLoading(false);
      })
      .catch((error) => notify(error?.message, "error"));
  };
  const handleFacebookBtn = () => {
    signInWithFacebook()
      .then((res) => {
        navigate("/");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
        setLoading(false);
      })
      .catch((error) => notify(error?.message, "error"));
  };
  const handleGithubBtn = () => {
    signInWithGithub()
      .then((res) => {
        navigate("/");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
        setLoading(false);
      })
      .catch((error) => notify(error?.message, "error"));
  };
  const handleTwitterBtn = () => {
    signInWithTwitter()
      .then((res) => {
        navigate("/");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
        setLoading(false);
      })
      .catch((error) => notify(error?.message, "error"));
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen w-full flex items-stretch"
      style={{
        backgroundImage: `url(${greenFarmland})`,
      }}
    >
      {/* Overlay & Content Container */}
      <div className="bg-linear-to-r/srgb from-[#ffffffd8] via-[#e0d5fd9c] to-[#ffffff60] lg:to-[#00000000] w-full flex flex-col justify-center overflow-y-auto">
        <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-20 xl:ml-32 p-6 md:p-12 lg:p-16">
          {/* Header / Logo Section */}
          <div className="mb-8 md:mb-12">
            <NavLink to="/" className="flex items-center gap-4 md:gap-6">
              <div className="shrink-0">
                <img
                  className="w-12 h-12 md:w-18 md:h-18 rounded-xl border-2 border-emerald-700 object-cover"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl md:text-4xl  font-lato font-black leading-tight">
                  {t("navbar.title")}
                </p>
                <p className="text-sm md:text-lg  leading-tight">
                  {t("navbar.subTitle")}
                </p>
              </div>
            </NavLink>
          </div>

          {/* Welcome Text */}
          <div className="space-y-2 mb-8">
            <h1 className=" text-3xl md:text-4xl font-bold font-inter">
              Welcome back
            </h1>
            <h4 className="font-inter text-base md:text-lg text-[#3C4A42]">
              Enter your credentials to access your field insights.
            </h4>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmitBtn} className="w-full">
            <fieldset className="space-y-4">
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

              <div>
                <div className="flex justify-between items-end mb-1.5 ml-1">
                  <label className="font-inter font-semibold text-sm text-[#3C4A42]">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs md:text-sm hover:underline underline-offset-2 font-bold text-[#006C49]"
                  >
                    Forgotten Password?
                  </button>
                </div>
                <div className="flex items-center shadow-sm bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200 focus-within:border-emerald-500 transition-all">
                  <CiLock className="text-xl text-[#6C7A71] shrink-0" />
                  <input
                    type="password"
                    name="password"
                    className="bg-transparent border-none outline-none w-full px-3 "
                    placeholder="Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer bg-black  font-bold rounded-2xl mt-4 shadow-lg"
              >
                Log In
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="h-px bg-slate-300 w-full"></div>
            <span className="text-[#3C4A42] font-medium text-sm md:text-base font-inter shrink-0 px-4">
              Or Continue With
            </span>
            <div className="h-px bg-slate-300 w-full"></div>
          </div>

          {/* Social Buttons - Grid for perfect alignment on small screens */}
          <div className="grid grid-cols-4 gap-3 md:gap-4 mb-8">
            <button
              onClick={handleGithubBtn}
              className="flex justify-center items-center h-12 rounded-xl bg-black border-black hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </button>
            <button
              onClick={handleGoogeBtn}
              className="flex justify-center items-center h-12 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 512 512">
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
              </svg>
            </button>
            <button
              onClick={handleTwitterBtn}
              className="flex justify-center items-center h-12 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <BsTwitterX className=" text-lg" />
            </button>
            <button
              onClick={handleFacebookBtn}
              className="flex justify-center items-center h-12 rounded-xl bg-[#1A77F2] hover:bg-[#166fe5] transition-colors"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
                <path d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z" />
              </svg>
            </button>
          </div>

          {/* Footer Link */}
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-center">
            <p className="text-[#3C4A42] font-medium text-base md:text-lg font-inter">
              Don't have an account?
            </p>
            <NavLink
              to="/register"
              className="font-inter hover:underline underline-offset-2 font-bold text-base md:text-lg text-[#006C49]"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
