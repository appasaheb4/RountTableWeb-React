import React from "react";
import {
    Route,
    BrowserRouter as Routesr,
    Switch,
    HashRouter
} from "react-router-dom";


import HomeScreen from "./component/HomeScreen/HomeScreen";
import AdminDashboardScreen from "./component/AdminDashboard/AdminDashboadSupportScreen/AdminDashboardScreen";


const routes = () => (
    <Routesr >
        <Switch>
            <Route exact path={ "/" } component={ HomeScreen } />
            <Route path={ "/userdetails" } component={ AdminDashboardScreen } />
            <Route component={ Error } render={ () => <h1>404 Error</h1> } />
        </Switch>
    </Routesr>
);


export default routes;
