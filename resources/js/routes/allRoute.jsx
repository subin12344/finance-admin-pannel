import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";

// Define routes for authenticated users
const userRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // Default redirect to /dashboard if the root path is visited
  {
    path: "/",
    component: <Navigate to="/dashboard" />,
  },
];

// Define routes for non-authenticated users
const authRoutes = [{ path: "/login", component: <Login /> }];

export { userRoutes, authRoutes };
