import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-md-offset-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
