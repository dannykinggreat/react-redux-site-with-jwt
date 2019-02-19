import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../components/actions/loginActions";

class NavigationBar extends Component {
  state = {};

  logout = e => {
    console.log("this is", this);
    e.preventDefault();
    this.props.logout();
    console.log("pushng history");
    this.context.router.history.push("home");
  };
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" onClick={this.logout} className="nav-link">
            Logout <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <Link to="/Signup" className="nav-link">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            Log In
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand mr-3">
          Red Dice
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse mr-sm-2" id="navbarNav">
          {isAuthenticated ? userLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStatToProps = state => {
  return {
    auth: state.authReducer
  };
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  mapStatToProps,
  { logout }
)(NavigationBar);
