import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateSignUpRequest } from "./actions/signUpActions";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-md-offset-4">
            <SignUpForm handleSubmit={this.props.updateSignUpRequest} />
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  updateSignUpRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateSignUpRequest }
)(SignUp);
