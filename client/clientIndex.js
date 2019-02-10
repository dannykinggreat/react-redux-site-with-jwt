import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import setAuthorizationToken from "../client/utils/setAuthorizationToken";

import Router from "./components/Router";

if (localStorage.getItem("jwtToken")) {
  setAuthorizationToken(localStorage.getItem("jwtToken"));
  console.log("local storage is ", localStorage.jwtToken);
}

ReactDOM.render(
  <AppContainer>
    <Router />
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./components/Router", () => {
    ReactDOM.render(
      <AppContainer>
        <Router />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
