import React from "react";
import Root from "../Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home"; // Home page
import Login from "../auth/Login";
import Register from "../auth/Register";
import CropRecommendationInput from "../home/CropRecommendationInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "CropRecommendationInput", element: <CropRecommendationInput /> },
    ],
  },
]);

export default router;
