import React from "react";
import { LuLeaf, LuTrendingUp } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
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
    <div className="space-y-24 mx-auto w-11/12 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="bg-emerald-200 text-[#267700] px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Our Origin
          </span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Cultivating the{" "}
            <span className="text-[#047857] dark:text-[#03b403]">Future</span>{" "}
            of Soil.
          </h1>
          <p className="text-lg max-w-xl leading-relaxed">
            Founded in the heart of the central plains, AgriPulse Pro was born
            from a simple observation: the most vital data in farming was the
            hardest to see. We merged satellite telemetry with deep-earth
            sensors to give farmers a heartbeat of their land.
          </p>
          <div className="flex gap-12 pt-4">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-black ">{stat.value}</p>
                <p className="text-xs font-bold  uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src={field}
            alt="Field"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="font-bold ">Precision as a Philosophy</h3>
        <p className=" leading-relaxed">
          We don't just provide data; we provide clarity. Our mission is to
          transform the uncertainty of the seasons into the certainty of
          science.
        </p>
      </section>

      {/* Precision as a Philosphy */}

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          <div className="md:col-span-2 relative overflow-hidden rounded-4xl bg-[#f2f4f1] p-10 flex flex-col justify-center border border-slate-100 group">
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <LuLeaf className="text-[400px] black:text-black" />
            </div>

            <div className="relative z-10 space-y-4 dark:text-black">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                <LuLeaf className="text-2xl" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">
                Sustainability Through Intelligence
              </h3>
              <p className=" max-w-md leading-relaxed">
                Reducing waste by applying nutrients only where the soil asks
                for them. Our AI models predict nutrient depletion before it
                affects the yield.
              </p>
            </div>
          </div>

          {/* Real-time Diagnostics Card - Solid Emerald */}
          <div className="rounded-4xl bg-[#006b44] p-10 flex flex-col justify-between text-white border border-emerald-800">
            <LuTrendingUp className="text-4xl" />
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Real-time Diagnostics</h3>
              <p className="/80 text-sm leading-relaxed">
                Every heartbeat of your farm is captured in milliseconds,
                processed in seconds, and delivered to your hand instantly.
              </p>
            </div>
          </div>

          {/* Hyper-Local Weather Card - Light Blue */}
          <div className="rounded-4xl bg-[#f0f4ff] p-10 flex flex-col justify-between border border-blue-50">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold ">Hyper-Local Weather</h3>
              <p className=" text-sm leading-relaxed">
                Micro-climate tracking that goes beyond the zip code. We monitor
                the air exactly where your crops breathe.
              </p>
            </div>
            <button className="flex items-center gap-2  font-bold hover:gap-4 transition-all">
              Learn more <HiOutlineArrowNarrowRight />
            </button>
          </div>

          {/* Bridging the Gap Card - Spans 2 columns */}
          <div className="md:col-span-2 rounded-4xl bg-[#dfe7f6] p-10 flex items-center justify-between gap-8 border border-blue-100">
            <div className="space-y-4 max-w-md">
              <h3 className="text-3xl font-bold ">Bridging the Gap</h3>
              <p className=" leading-relaxed">
                Connecting traditional wisdom with modern algorithmic precision.
                We respect the intuition of the farmer and empower it with the
                data of the expert.
              </p>
            </div>

            {/* Circular Handshake Icon */}
            <div className="hidden sm:flex shrink-0 w-44 h-44 rounded-full bg-[#f0f4ff]/80 items-center justify-center border border-white/50 shadow-inner">
              <div className="w-16 h-16">
                <FaHandshakeSimple className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold ">The Minds Behind the Pulse</h2>
            <p className="">
              An interdisciplinary collective of data scientists and
              agronomists.
            </p>
          </div>
          <button className="btn btn-neutral bg-emerald-900 text-white border-none px-8">
            View Open Positions
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="space-y-4 group">
              <div className="aspect-4/5 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h4 className="font-bold ">{member.name}</h4>
                <p className="text-[10px] font-black  uppercase tracking-widest mb-2">
                  {member.role}
                </p>
                <p className="text-sm  leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="bg-slate-900 rounded-[40px] p-10 lg:p-20 text-white flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Ready to pulse with us?
          </h2>
          <p className="">
            Whether you are an enterprise farming operation or a precision
            agronomist, we'd love to hear how we can help your land thrive.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center ">
                @
              </div>
              <div>
                <p className="text-xs  font-bold uppercase">Email us</p>
                <p className="font-medium">hello@agripulse.pro</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center ">
                📍
              </div>
              <div>
                <p className="text-xs  font-bold uppercase">Our Office</p>
                <p className="font-medium">1200 Terra Way, Des Moines, IA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="NAME"
                className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:outline-emerald-500"
              />
              <input
                type="email"
                placeholder="WORK EMAIL"
                className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:outline-emerald-500"
              />
            </div>
            <textarea
              placeholder="MESSAGE"
              rows="4"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:outline-emerald-500"
            ></textarea>
            <button className="w-full btn bg-emerald-500 hover:bg-emerald-400 border-none  font-bold py-4 h-auto">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
