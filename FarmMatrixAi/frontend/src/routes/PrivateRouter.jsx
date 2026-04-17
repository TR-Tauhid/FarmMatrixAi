import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function PrivateRouter({ children }) {
  const navigate = useNavigate();
  const AuthValue = useContext(AuthContext);
  const { user, authChecked, loading, notify, theme } = AuthValue;
  if (!authChecked && !user) {
    notify("Please Log in first..!!!", "error");
    navigate("/login");
  }

  if (loading) {
    return <Loading theme={theme}></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>;
}
