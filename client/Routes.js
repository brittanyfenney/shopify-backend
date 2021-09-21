import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, AllImages, AddImage } from "./components/";

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
        <Route path="/add">
          <AddImage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
