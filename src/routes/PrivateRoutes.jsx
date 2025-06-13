import React, { use } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  return user ? children : <Navigate to="/signin"></Navigate>;
};

export default PrivateRoutes;
