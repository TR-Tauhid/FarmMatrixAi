import { createRoot } from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
