import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import { AppContainer } from "react-hot-loader";

import Router from "./components/Router";

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
