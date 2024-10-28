import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ element: Component }) => {
  const token = Cookies.get("access_token");

  return token ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
