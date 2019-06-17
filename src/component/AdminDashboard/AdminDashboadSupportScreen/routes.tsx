import React from "react";
import { Route, BrowserRouter as Routesr, Switch } from "react-router-dom";

const DashboardScreen = React.lazy( () =>
  import( "../DashboardScreen/DashboardScreen" )
);


const TableDetailsScreen = React.lazy( () =>
  import( "../TableDetailsScreen/TableDetailsScreen" )
);

const UserDetailsScreen = React.lazy( () =>
  import( "../UserDetailsScreen/UserDetailsScreen" )
);

//export default routes;
const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: DashboardScreen
  },
  {
    path: "/tabledetails",
    name: "Table Details",
    component: DashboardScreen
  },
  {
    path: "/userdetails",
    name: "User Details",
    component: UserDetailsScreen
  },
];

export default routes;
