import { createRoot } from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
