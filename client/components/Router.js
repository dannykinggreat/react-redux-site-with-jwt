import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./login";
import WelcomePage from "./welcomePage";
import newEvent from "./newEvent";
//import { Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { createBrowserHistory as createHistory } from "history";
import { setCurrentUser } from "../components/actions/loginActions";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";

class Routes extends Component {
  history = createHistory();
  state = {};
  render() {
    if (localStorage.getItem("jwtToken")) {
      setAuthorizationToken(localStorage.getItem("jwtToken"));
      store.dispatch(
        setCurrentUser(jwt.decode(localStorage.getItem("jwtToken")))
      );

      console.log("local storage is ", localStorage.getItem("jwtToken"));
    }

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
            <Route path="/user" component={WelcomePage} />
            <Route path="/new-event" component={newEvent} />
          </div>
        </BrowserRouter>
        {/* </Router> */}
      </Provider>
    );
  }
}

export default Routes;
