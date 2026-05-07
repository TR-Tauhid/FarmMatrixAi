import React from "react";
import Root from "../Root";
import Home from "../home/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AboutSection from "../home/AboutSection";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import ErrorBoundaryPage from "../components/ErrorBoundaryPage";
import CropRecommendationInput from "../home/CropRecommendationInput";
import MarketNewsDashboard from "../components/news/MarketNewsDashboard";
import MarketTrendDashboard from "../components/market/MarketTrendDashboard";
import EnvironmentDashboard from "../components/environment/EnvironmentDashboard";
import DiagnosticDashboard from "../components/aiEngine/recommendation/CropRecommendationDashboard.jsx";
import CropRecommendationDashboard from "../components/aiEngine/recommendation/CropRecommendationDashboard.jsx";
import DiseaseDetectionDashboard from "../components/aiEngine/diseaseDetection/DiseaseDetectionDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "croprecommendationinput",
        element: (
          <PrivateRouter>
            <CropRecommendationDashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "recommendations",
        element: (
          <PrivateRouter>
            <CropRecommendationDashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "disease",
        element: (
          <PrivateRouter>
            <DiseaseDetectionDashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "diagnostics",
        element: (
          <PrivateRouter>
            <DiagnosticDashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "environment",
        element: (
          <PrivateRouter>
            <EnvironmentDashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "markets",
        element: (
          <PrivateRouter>
            <MarketTrendDashboard />
          </PrivateRouter>
        ),
      },
      { path: "news", element: <MarketNewsDashboard /> },
      { path: "about", element: <AboutSection /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

export default router;
