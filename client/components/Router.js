import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./login";
//import { Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { createBrowserHistory as createHistory } from "history";

class Routes extends Component {
  history = createHistory();
  state = {};
  render() {
    return (
      <Provider store={store}>
        {/* Router is using custom createBrowserHistory */}
        {/* <Router history={this.history}> */}
        {/* BrowserRouter has alredy defined history in it */}
        <BrowserRouter>
          <div>
            <Route path="/" component={App} />
            <Route exact path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
        {/* </Router> */}
      </Provider>
    );
  }
}

export default Routes;
