import { createRoot } from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";
import AuthProvider from "./provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./provider/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
