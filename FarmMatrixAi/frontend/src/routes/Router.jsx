import React from "react";
import Root from "../Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import CropRecommendationInput from "../home/CropRecommendationInput";
import AboutSection from "../home/AboutSection";
import ErrorBoundaryPage from "../components/ErrorBoundaryPage";
import EnvironmentDashboard from "../components/environment/EnvironmentDashboard";
import MarketTrendDashboard from "../components/market/MarketTrendDashboard";
import MarketNewsDashboard from "../components/news/MarketNewsDashboard";
import DiagnosticDashboard from "../components/aiEngine/diagonostic/DiagnosticDashboard";

import DiseaseDetectionUpload from "../home/DiseaseDetectionUpload";
import DiseaseDetectionDashboard from "../components/aiEngine/diseaseDetection/DiseaseDetectionDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "croprecommendationinput", element: <CropRecommendationInput /> },
      { path: "diagnostics", element: <DiagnosticDashboard /> },
      { path: "disease-detect", element: <DiagnosticDashboard /> },
      { path: "environment", element: <EnvironmentDashboard /> },
      { path: "markets", element: <MarketTrendDashboard /> },
      { path: "markets", element: <MarketNewsDashboard /> },
      { path: "about", element: <AboutSection /> },
      { path: "recommendations", element: <CropRecommendationInput /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

export default router;
