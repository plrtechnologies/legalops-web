import { getToken } from "./auth";
import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function PrivateRoute({ children }) {
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    const interval = setInterval(() => {
      const t = getToken();
      setToken(t);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!token || token === "") {
    return <Navigate to="/Login" replace />;
  }
  return children;
}
