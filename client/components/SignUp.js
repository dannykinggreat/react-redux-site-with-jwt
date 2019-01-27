import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateSignUpRequest, checkUserExists } from "./actions/signUpActions";
import { addFlashMessage } from "./actions/flashMessages";

class SignUp extends Component {
  render() {
    const { updateSignUpRequest, addFlashMessage } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-md-offset-4">
            <SignUpForm
              handleSubmit={updateSignUpRequest}
              addFlashMessage={addFlashMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  updateSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateSignUpRequest, addFlashMessage, checkUserExists }
)(SignUp);
