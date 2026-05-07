import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

export default function PrivateRouter({ children }) {
  const location = useLocation();
  const AuthValue = useContext(AuthContext);
  const { user, loading, notify, theme } = AuthValue;

  useEffect(() => {
    if (!loading && !user) {
      notify("Please Log in first..!!!", "error");
    }
  }, [user, loading, notify]);

  if (loading) {
    return <Loading theme={theme}></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location.pathname }} to="/login" replace></Navigate>;
}
