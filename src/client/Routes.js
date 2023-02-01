//this is the file that will be shared on both server side and client side codebases.

import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";

//we will create a react component that will set up all odf our route mapping, the normal routing that we write in our react router file.
//we will import this file in both server side and client side and set up a seperate router in each one.
export const Routes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};
