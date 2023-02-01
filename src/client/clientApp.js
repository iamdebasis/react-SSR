//this is the entry point of out Client side FE code.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

//now we do not need home anynmore because we have routing set up
// import { Home } from "./components/Home";

// ReactDOM.hydrate(<Home />, document.querySelector("#root"));
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
