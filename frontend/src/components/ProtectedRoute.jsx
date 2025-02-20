import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();

  if (isAuthenticate) {
    if (
      (user?.role === "admin" && location.pathname.includes("/login")) ||
      location.pathname.includes("/register")
    ) {
      return <Navigate to="/admin/dashboard" />;
    }

    if (
      user?.role === "user" &&
      (location.pathname.includes("/login") ||
        location.pathname.includes("/register"))
    ) {
      return <Navigate to="/" />;
    }
  }
};

export default ProtectedRoute;
