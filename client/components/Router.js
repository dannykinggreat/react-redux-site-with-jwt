import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";
class Routes extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
