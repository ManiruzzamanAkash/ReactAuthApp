import React from "react";

const LoginContainer = React.lazy(() => import("../views/auth/LoginContainer"));
const DashboardContainer = React.lazy(() =>
  import("../views/dashboard/DashboardContainer")
);

// import LoginContainer from "../views/auth/LoginContainer";
// import DashboardContainer from "../views/dashboard/DashboardContainer";

const routes = [
  {
    path: "/",
    name: "Login Component",
    component: LoginContainer,
    exact: true
  },
  {
    path: "/login",
    name: "Login Component",
    component: LoginContainer,
    exact: true
  },
  {
    path: "/dashboard",
    name: "Dashboard Component",
    component: DashboardContainer,
    exact: true
  }
];

export default routes;
