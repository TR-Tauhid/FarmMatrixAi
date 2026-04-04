import React, { useContext } from "react";
import logo from "../assets/farmMatrixAI.png";
import greenFarmland from "../assets/greenFarmland.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import AuthContext from "../context/AuthContext";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const { t } = useTranslation();
  const AuthValue = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    user,
    notify,
    logOut,
    loading,
    createUserWithEmail,
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
        console.log(res.user);
        navigate(location?.state ? location?.state : "/");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogeBtn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res?.user?.displayName);
        navigate(location?.state ? location?.state : "./");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
      })
      .catch((error) => console.log(error.message));
  };
  const handleFacebookBtn = () => {
    signInWithFacebook()
      .then((res) => {
        console.log(res?.user?.displayName);
        navigate(location?.state ? location?.state : "./");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
      })
      .catch((error) => console.log(error.message));
  };
  const handleGithubBtn = () => {
    signInWithGithub()
      .then((res) => {
        console.log(res?.user?.displayName);
        navigate(location?.state ? location?.state : "./");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
      })
      .catch((error) => console.log(error.message));
  };

  const handleTwitterBtn = () => {
    signInWithTwitter()
      .then((res) => {
        console.log(res?.user?.displayName, location?.state);
        navigate("./");
        notify(
          `Welcome ${res?.user?.displayName ? res?.user?.displayName : "User"}`,
          "success",
        );
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div
      className="bg-cover overflow-scroll bg-fixed h-dvh"
      style={{
        backgroundImage: `url(${greenFarmland})`,
      }}
    >
      <ToastContainer></ToastContainer>
      <div className="bg-linear-to-r/srgb from-[#ffffffd8] to-[#00000000] bg-cover overflow-scroll bg-fixed min-h-full">
        <div className="w-2/6 p-24 ml-20">
          <div className="mb-10">
            {/* Title */}

            <NavLink to="/" className="space-x-6 flex w-full grow items-center">
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

          <div className="space-y-3 mb-6">
            <h1 className="text-black text-4xl font-bold font-inter">
              Welcome back
            </h1>
            <h4 className="font-inter text-lg text-[#3C4A42] ">
              Enter your credentials to access your field insights.
            </h4>
          </div>

          <div>
            <form onSubmit={handleSubmitBtn}>
              <fieldset className="fieldset rounded-box w-full">
                <label className="label font-inter font-semibold text-sm text-[#3C4A42]">
                  Email or Phone Number
                </label>

                <div className="flex items-center shadow-sm bg-base-100 p-3 rounded-2xl mb-6 border">
                  <MdOutlineEmail className="text-xl text-[#6C7A71] w-5"></MdOutlineEmail>
                  <input
                    type="email"
                    name="email"
                    className="input input-ghost focus-within:bg-[#1D232A] outline-0 w-full"
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
                    name="password"
                    className="input input-ghost focus-within:bg-[#1D232A] outline-0 w-full"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-neutral mt-6 h-15 rounded-xl"
                >
                  Log In
                </button>
              </fieldset>
            </form>
          </div>

          <div className="flex items-center my-6">
            <div className="border-y h-0 border-black-400 w-full"></div>
            <h1 className="text-[#3C4A42] font-medium text-lg font-inter shrink-0 px-4">
              Or Continue With{" "}
            </h1>
            <div className="border-y h-0 border-black-400 w-full"></div>
          </div>

          <div className="flex justify-between gap-3 max-w-72 mb-6 mx-auto">
            <div>
              {/* GitHub */}
              <button
                type="submit"
                onClick={handleGithubBtn}
                className="btn rounded-xl p-5 w-20 h-12 bg-black text-white border-black"
              >
                <svg
                  aria-label="GitHub logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
              </button>
            </div>

            <div>
              {/* Google */}
              <button
                type="submit"
                onClick={handleGoogeBtn}
                className="btn rounded-xl p-5 w-20 h-12 bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div>
              {/* Twitter */}
              <button
                type="submit"
                onClick={handleTwitterBtn}
                className="btn rounded-xl p-5 w-20 h-12 bg-white text-black border-[#e5e5e5]"
              >
                <BsTwitterX></BsTwitterX>
              </button>
            </div>

            <div>
              {/* Facebook */}
              <button
                type="submit"
                onClick={handleFacebookBtn}
                className="btn rounded-xl p-5 w-20 h-12 bg-[#1A77F2] text-white border-[#005fd8]"
              >
                <svg
                  aria-label="Facebook logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-x-2 justify-around">
            <p className="text-[#3C4A42] font-medium text-lg font-inter">
              Don't have an account ?{" "}
            </p>
            <NavLink
              to="/register"
              className="font-inter hover:underline underline-offset-2 cursor-pointer font-bold text-lg text-[#006C49]"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
