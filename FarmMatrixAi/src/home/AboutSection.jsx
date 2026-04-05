import React from "react";
import { LuLeaf, LuTrendingUp } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { motion } from "framer-motion";
import field from "../assets/field.jpg";

const AboutPage = () => {
  const stats = [
    { label: "FARMS EMPOWERED", value: "12k+" },
    { label: "ACRES MONITORED", value: "4.2M" },
  ];

  const team = [
    {
      name: "Marcus Vane",
      role: "CHIEF EXECUTIVE OFFICER",
      desc: "Ex-NASA telemetry lead with a passion for sustainable land management.",
      img: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Dr. Elena Rostova",
      role: "HEAD OF AI & SOIL SCIENCE",
      desc: "PhD in Soil Microbiology. Pioneering the 'Neural Soil' predictive engine.",
      img: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Jacob Miller",
      role: "VP OPERATIONS",
      desc: "Third-generation farmer. Ensuring our tech works in the mud, not just the lab.",
      img: "https://i.pravatar.cc/300?img=8",
    },
    {
      name: "Sarah Chen",
      role: "DIRECTOR OF PRODUCT DESIGN",
      desc: "Focused on making complex agrarian data intuitive for every user.",
      img: "https://i.pravatar.cc/300?img=26",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 mx-auto px-10 pb-20 transition-colors duration-500 bg-base-100 text-base-content overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 pt-10 md:pt-20">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <span className="bg-emerald-200 dark:bg-emerald-900/30 text-[#267700] dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-wider">
            Our Origin
          </span>
          <h1 className="text-4xl md:text-7xl font-black leading-tight">
            Cultivating the{" "}
            <span className="text-[#047857] dark:text-emerald-500">Future</span>{" "}
            of Soil.
          </h1>
          <p className="text-sm md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-70">
            Founded in the heart of the central plains, Farm Matrix AI Pro was born
            from a simple observation: the most vital data in farming was the
            hardest to see.
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
                Sustainability Through Intelligence
              </h3>
              <p className="max-w-md text-xs md:text-sm leading-relaxed opacity-70">
                Reducing waste by applying nutrients only where the soil asks.
                Our AI models predict depletion before it affects the yield.
              </p>
            </div>
          </div>

          {/* Real-time Diagnostics Card */}
          <div className="rounded-3xl md:rounded-4xl bg-[#006b44] p-6 md:p-10 flex flex-col justify-between text-white shadow-lg min-h-[200px]">
            <LuTrendingUp className="text-3xl md:text-4xl" />
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold">
                Real-time Diagnostics
              </h3>
              <p className="opacity-80 text-[10px] md:text-sm leading-tight">
                Captured in milliseconds, delivered instantly.
              </p>
            </div>
          </div>

          {/* Hyper-Local Weather Card */}
          <div className="rounded-3xl md:rounded-4xl bg-blue-50 dark:bg-blue-900/20 p-6 md:p-10 flex flex-col justify-between border border-blue-100 dark:border-blue-900/30">
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-bold text-blue-900 dark:text-blue-100">
                Weather
              </h3>
              <p className="text-[10px] md:text-sm leading-relaxed opacity-70">
                Micro-climate tracking that goes beyond the zip code.
              </p>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 mt-4">
              Learn more <HiOutlineArrowNarrowRight />
            </button>
          </div>

          {/* Bridging the Gap Card */}
          <div className="md:col-span-2 rounded-3xl md:rounded-4xl bg-slate-100 dark:bg-slate-800 p-6 md:p-10 flex items-center justify-between gap-4 border border-slate-200 dark:border-slate-700">
            <div className="space-y-2 md:space-y-4 max-w-md">
              <h3 className="text-xl md:text-3xl font-bold">
                Bridging the Gap
              </h3>
              <p className="text-[10px] md:text-sm leading-relaxed opacity-70">
                Connecting traditional wisdom with modern algorithmic precision.
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
              The Minds Behind the Pulse
            </h2>
            <p className="text-xs md:text-base opacity-60">
              Interdisciplinary collective of scientists and agronomists.
            </p>
          </div>
          <button className="w-full md:w-auto btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6 text-xs">
            Open Positions
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {team.map((member, i) => (
            <div key={i} className="space-y-2 md:space-y-4 group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-base-200">
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
      <section className="bg-slate-900 dark:bg-emerald-950/40 rounded-2xl md:rounded-[2rem] p-4 md:p-8 text-white flex flex-col md:flex-row items-center gap-6 border border-slate-800 dark:border-emerald-900/30 overflow-hidden">
        {/* Left Side: Info (Short & Wide) */}
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-8">
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter">
              Get in Touch
            </h2>
            <p className="text-[10px] opacity-50 font-medium">
              Partner for a sustainable future.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px]">
              @
            </div>
            <p className="text-[10px] font-bold tracking-tight opacity-80">
              hello@farmmatrixai.com
            </p>
          </div>
        </div>

        {/* Right Side: Form (Dense Grid) */}
        <div className="flex-1 w-full">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="NAME"
              className="bg-slate-800/40 border border-slate-700 rounded-lg p-2.5 text-[9px] font-bold focus:outline-emerald-500 w-full placeholder:opacity-30"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-slate-800/40 border border-slate-700 rounded-lg p-2.5 text-[9px] font-bold focus:outline-emerald-500 w-full placeholder:opacity-30"
            />
            <textarea
              placeholder="MESSAGE"
              rows="1"
              className="sm:col-span-2 bg-slate-800/40 border border-slate-700 rounded-lg p-2.5 text-[9px] font-bold focus:outline-emerald-500 w-full placeholder:opacity-30 resize-none"
            />
            <button className="sm:col-span-2 w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black text-[9px] rounded-md uppercase tracking-[0.2em] transition-all active:scale-95">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
