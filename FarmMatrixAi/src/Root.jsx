import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./shared/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ToastContainer />

      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
