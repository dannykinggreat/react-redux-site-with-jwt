import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={App} />
            <Route exact path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
