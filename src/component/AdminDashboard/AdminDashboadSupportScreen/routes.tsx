import React from "react";
import { Route, BrowserRouter as Routesr, Switch } from "react-router-dom";

const Dashboard = React.lazy( () =>
  import( "../AdminDashboardScreen/AdminDashboardScreen" )
);

//export default routes;
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
];

export default routes;
