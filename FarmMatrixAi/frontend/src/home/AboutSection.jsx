import React from "react";
import { useTranslation } from "react-i18next";
import { LuLeaf, LuTrendingUp } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import field from "../assets/field.jpg";

const AboutPage = () => {
  const { t } = useTranslation();

  const teamData = [
    {
      name: "Poojitha Kotagiri",
      img: "https://i.ibb.co/2HVPNWX/poojita.png",
    },
    {
      name: "Tohibur Rahman",
      img: "https://i.ibb.co/fdK1Qc5K/tauhid.jpg",
    },
    {
      name: "Jeshan Karim",
      img: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Kamaleswar Ghosh",
      img: "https://i.ibb.co/dJfL17kf/kamleshwar-gosh.jpg",
    },
    {
      name: "Sweta",
      img: "https://i.pravatar.cc/300?img=26",
    },
    {
      name: "Dr Komal Singh Gill",
      img: "https://i.pravatar.cc/300?img=26",
    },
  ];

  const stats = [
    { label: t("about.farmsEmpowered"), value: "12k+" },
    { label: t("about.acresMonitored"), value: "4.2M" },
  ];

  const team = teamData.map((member, i) => ({
    ...member,
    role: t(`about.team.${i}.role`),
    desc: t(`about.team.${i}.desc`),
  }));

  return (
    <div className="space-y-16 md:space-y-24 mx-auto px-10 pb-20 transition-colors duration-500 bg-base-100 text-base-content overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 pt-10 md:pt-20">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <span className="bg-emerald-200 dark:bg-emerald-900/30 text-[#267700] dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-wider">
            {t("about.origin")}
          </span>
          <h1 className="text-4xl md:text-7xl font-black leading-tight">
            {t("about.heroTitle")}
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-70">
            {t("about.heroDescription")}
          </p>
          <div className="flex justify-center lg:justify-start gap-8 md:gap-12 pt-4">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-black">{stat.value}</p>
                <p className="text-[9px] md:text-xs font-bold uppercase opacity-50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <img
            src={field}
            alt="Field"
            className="rounded-3xl shadow-xl w-full h-[300px] md:h-[500px] object-cover border dark:border-slate-800"
          />
        </div>
      </section>

      {/* Precision Grid - Responsive Rows */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[280px]">
          {/* Sustainability Card */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl md:rounded-4xl bg-base-200 dark:bg-slate-800/40 p-6 md:p-10 border border-emerald-50/50 dark:border-slate-700">
            <LuLeaf className="absolute right-0 top-0 opacity-5 text-[200px] md:text-[400px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
            <div className="relative z-10 space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-700 shadow-sm">
                <LuLeaf className="text-xl text-emerald-700 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-emerald-900 dark:text-white">
                {t("about.sustainability")}
              </h3>
              <p className="max-w-md text-xs md:text-sm leading-relaxed opacity-70">
                {t("about.sustainabilityDesc")}
              </p>
            </div>
          </div>

          {/* Real-time Diagnostics Card */}
          <div className="rounded-3xl md:rounded-4xl bg-[#006b44] p-6 md:p-10 flex flex-col justify-between text-white shadow-lg min-h-[200px]">
            <LuTrendingUp className="text-3xl md:text-4xl" />
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold">
                {t("about.realTimeDiagnostics")}
              </h3>
              <p className="opacity-80 text-[10px] md:text-sm leading-tight">
                {t("about.realTimeDiagnosticsDesc")}
              </p>
            </div>
          </div>

          {/* Hyper-Local Weather Card */}
          <div className="rounded-3xl md:rounded-4xl bg-blue-50 dark:bg-blue-900/20 p-6 md:p-10 flex flex-col justify-between border border-blue-100 dark:border-blue-900/30">
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold text-blue-900 dark:text-blue-100">
                {t("about.weather")}
              </h3>
              <p className="text-[10px] md:text-sm leading-relaxed opacity-70">
                {t("about.weatherDesc")}
              </p>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 mt-4">
              {t("about.learnMore")} <HiOutlineArrowNarrowRight />
            </button>
          </div>

          {/* Bridging the Gap Card */}
          <div className="md:col-span-2 rounded-3xl md:rounded-4xl bg-slate-100 dark:bg-slate-800 p-6 md:p-10 flex items-center justify-between gap-4 border border-slate-200 dark:border-slate-700">
            <div className="space-y-2 md:space-y-4 max-w-md">
              <h3 className="text-xl md:text-3xl font-bold">
                {t("about.bridgingTheGap")}
              </h3>
              <p className="text-[10px] md:text-sm leading-relaxed opacity-70">
                {t("about.bridgingDesc")}
              </p>
            </div>
            <FaHandshakeSimple className="hidden sm:block w-12 h-12 md:w-16 md:h-16 text-emerald-700 dark:text-emerald-400 opacity-20 md:opacity-100" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">
              {t("about.teamTitle")}
            </h2>
            <p className="text-xs md:text-base opacity-60">
              {t("about.teamSubtitle")}
            </p>
          </div>
          <button className="w-full md:w-auto btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6 text-xs cursor-pointer">
            {t("about.openPositions")}
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {team.map((member, i) => (
            <div key={i} className="space-y-2 md:space-y-4 group">
              <div className="aspect-3/4 overflow-hidden rounded-2xl bg-base-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm md:text-lg truncate">
                  {member.name}
                </h4>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  {member.role}
                </p>
                <p className="hidden md:block text-xs opacity-70 leading-relaxed mt-2">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Compact */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-4xl p-5 md:p-8 text-slate-800 dark:text-slate-200 flex flex-col md:flex-row items-center gap-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start justify-between md:justify-around gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pb-4 md:pb-0 md:pr-8">
          <div>
            <h2 className="text-lg md:text-2xl font-bold tracking-tight">
              {t("about.getInTouch")}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t("about.partnerSustainable")}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
              @
            </div>
            <p className="font-medium">{t("about.email")}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder={t("about.namePlaceholder")}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />

            <input
              type="email"
              placeholder={t("about.emailPlaceholder")}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />

            <textarea
              placeholder={t("about.messagePlaceholder")}
              rows="3"
              className="sm:col-span-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 resize-none"
            />

            <button className="sm:col-span-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg transition active:scale-95 cursor-pointer">
              {t("about.sendMessage")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;