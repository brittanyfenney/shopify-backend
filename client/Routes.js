import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, AllImages } from "./components/";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/images">
          <AllImages />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
