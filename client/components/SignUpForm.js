import React, { Component } from "react";
import timezone from "../data/timezone";
import PropTypes from "prop-types";
import validateInput from "../../server/shared/validations/signup";
import TextFieldGroup from "./common/TextFieldGroup";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    timeZone: "",
    errors: {},
    isLoading: false,
    isValid: true
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Used for client side validation. Validates each field in state object
  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      //If client side validation passes, then remove error object and set loading to true.
      this.setState({ errors: {}, isLoading: true });
      this.props
        .handleSubmit(this.state)
        .then(result => {
          console.log("results", JSON.stringify(result));
        })
        .catch(err => {
          this.setState({ errors: err.response.data, isLoading: false });
          console.log("errorslol", JSON.stringify(err.response.data));
        });
    }
  };

  render() {
    const options = Object.entries(timezone).map(([key, value]) => {
      //   console.log(`key is ${key} and value is ${value}`);
      return (
        <option key={key} value={value}>
          {key}
        </option>
      );
    });
    const { errors } = this.state;
    //console.log("options are", JSON.stringify(options));
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> We beg you to Sign Up!!!</h1>

        <TextFieldGroup
          label="User Name"
          error={errors.username}
          name="username"
          id="username"
          placeholder="Enter User Name"
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          label=" Password"
          error={errors.password}
          name="password"
          id="password"
          placeholder="Enter Password"
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          label="Confirm Password"
          error={errors.passwordConfirmation}
          name="passwordConfimation"
          id="passwordConfimation"
          placeholder="Confirm Password"
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          label="E-mail"
          error={errors.email}
          name="email"
          id="email"
          placeholder="Enter your  E-mail"
          handleChange={this.handleChange}
        />

        <div className="form-group">
          <label className="control-label" htmlFor="timeZone">
            Time Zone
          </label>
          <select
            className={`form-control ${errors.timeZone ? "is-invalid" : ""}`}
            name="timeZone"
            id="timeZone"
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose your Time Zone
            </option>
            {options}
          </select>
          {errors.timeZone && (
            <small className="form-text text-muted">{errors.timeZone}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default SignUpForm;
