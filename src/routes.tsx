import React from "react";
import {
    Route,
    BrowserRouter as Routesr,
    Switch,
    HashRouter
} from "react-router-dom";


import DashboardScreen from "./component/DashboardScreen/DashboardScreen";


const routes = () => (
    <Routesr >
        <Switch>
            <Route exact path={ "/" } component={ DashboardScreen } />
            <Route component={ Error } render={ () => <h1>404 Error</h1> } />
        </Switch>
    </Routesr>
);

export default routes;
