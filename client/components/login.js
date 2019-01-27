import React, { Component } from "react";
import LoginForm from "./loginForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFlashMessage } from "./actions/flashMessages";
import { login } from "./actions/loginActions";

class Login extends Component {
  state = {};
  render() {
    const { login, addFlashMessage } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-md-offset-4">
            <LoginForm handleSubmit={login} addFlashMessage={addFlashMessage} />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { addFlashMessage, login }
)(Login);
