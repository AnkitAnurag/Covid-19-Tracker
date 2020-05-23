import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountryData from "./CountryWiseData";
import Home from "./Home";
import About from "./About";


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/countrywisedata" exact component={CountryData} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;