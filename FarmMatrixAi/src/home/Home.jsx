import React from "react";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CropRecCard from "./CropRecCard";
import WeatherSection from "./WeatherSection";
import SoilSection from "./SoilSection";
import CropCompare from "./CropCompare";
import HistorySection from "./HistorySection";
import DiseaseDetection from "./DiseaseDetection";
import AboutSection from "./AboutSection";
import HowItWorksSection from "./HowItWorks";
import AIModelsSection from "./AIModelsSection";
import SystemArchSec from "./SystemArchSec";
import ScreenshotsSection from "./ScreenshotsSec";
import CropRecommendationInput from "./CropRecommendationInput";
import CropRecommendationResult from "./CropRecommendationResult";
import DiseaseDiagnosisOutput from "./DiseaseDiagnosisOutput";
import VirtualSensorModule from "./VirtualSensorModule";

export default function Home() {
  return (
    <div className="text-center w-11/12 mx-auto">
      <div className="*:rounded-2xl flex flex-col gap-6 my-10">
        <HeroSection/>
        <CropRecommendationInput/>
        <CropRecommendationResult/>
        <DiseaseDetection/>
        <DiseaseDiagnosisOutput/>
        <VirtualSensorModule/>
        <AboutSection/>
        <FeaturesSection/>
        <HowItWorksSection/>
        <AIModelsSection/>
        <SystemArchSec/>
        <ScreenshotsSection/>
        <CropRecCard/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 *:grow">
          <WeatherSection/>
          <SoilSection/>
          <CropCompare/>
        </div>
        <HistorySection/>
      </div>
      <Carousel/>
    </div>
  );
}
