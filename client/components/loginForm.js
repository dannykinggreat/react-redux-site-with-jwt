import React, { Component } from "react";
import TextFieldGroup from "./common/TextFieldGroup";
import validateInput from "../../server/shared/validations/login";
import PropTypes from "prop-types";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
    isLoading: false,
    isValid: true
  };

  handleSubmit = e => {
    e.preventDefault();
    let { errors, isValid } = validateInput(this.state);
    if (isValid) {
      this.setState({ isLoading: true });
      this.props.handleSubmit(this.state);
    }
    this.setState({ errors, isValid });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors, isValid, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Member Log In</h1>
        <TextFieldGroup
          label="User Name"
          name="username"
          type="text"
          id="username"
          error={errors.username}
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          label="Password"
          name="password"
          type="password"
          id="password"
          error={errors.password}
          handleChange={this.handleChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isValid || isLoading}
        >
          Log In
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  addFlashMessage: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
