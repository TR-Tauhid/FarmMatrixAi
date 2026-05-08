import React from "react";
import Carousel from "./Carousel";
import Banner from "./Banner";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorks";
import AIModelsSection from "./AIModelsSection";
import SystemArchSec from "./SystemArchSec";
import HistorySection from "./HistorySection";
import AboutSection from "./AboutSection";
import CropRecCard from "./CropRecCard";
import WeatherSection from "./WeatherSection";
import SoilSection from "./SoilSection";
import CropCompare from "./CropCompare";
import DiseaseDetection from "./DiseaseDetection";

export default function Home() {
  return (
    <div className="text-center w-11/12 mx-auto">
      <div className="*:rounded-2xl flex flex-col gap-6 my-10">
        <Banner />
        <FeaturesSection />
        <HowItWorksSection />
        <AIModelsSection />
        <SystemArchSec />
        <CropRecCard />
        <HistorySection />
      </div>
      <Carousel />
      <AboutSection />
    </div>
  );
}
