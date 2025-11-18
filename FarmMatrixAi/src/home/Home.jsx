import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CropRecCard from "../components/CropRecCard";
import WeatherSection from "../components/WeatherSection";
import SoilSection from "../components/SoilSection";
import CropCompare from "../components/CropCompare";
import HistorySection from "../components/HistorySection";
import DiseaseDetection from "../components/DiseaseDetection";

export default function Home() {
  return (
    <div className="text-center w-11/12 mx-auto">
      <div className="*:rounded-2xl flex flex-col gap-6 my-10">
        <Hero></Hero>
        <Features></Features>
        <CropRecCard></CropRecCard>
        <div className="grid grid-cols-3 gap-5 *:grow">
          <WeatherSection></WeatherSection>
          <SoilSection></SoilSection>
          <CropCompare></CropCompare>
        </div>
        <HistorySection></HistorySection>
        <DiseaseDetection></DiseaseDetection>
      </div>
      <Carousel></Carousel>
    </div>
  );
}
