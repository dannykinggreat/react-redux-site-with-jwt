import React, { Component } from "react";
import timezone from "../data/timezone";
import PropTypes from "prop-types";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    timeZone: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .handleSubmit(this.state)
      .then(result => {
        console.log("results", JSON.stringify(result));
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
        console.log("errors", JSON.stringify(err.response.data));
      });
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
        <div className="form-group">
          <label className="control-label" htmlFor="username">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            name="username"
            id="username"
            aria-describedby="user name field"
            placeholder="Enter User Name"
            onChange={this.handleChange}
          />
          {errors.username && (
            <small className="form-text text-muted">{errors.username}</small>
          )}
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          {errors.password && (
            <small className="form-text text-muted">{errors.password}</small>
          )}
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="passwordConfirmation">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errors.passwordConfirmation || errors.passwordWarning
                ? "is-invalid"
                : ""
            }`}
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="Password"
            onChange={this.handleChange}
          />
          {errors.passwordConfirmation && (
            <small className="form-text text-muted">
              {errors.passwordConfirmation}
            </small>
          )}
          {errors.passwordWarning && (
            <small className="form-text text-muted">
              {errors.passwordWarning}
            </small>
          )}
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            id="email"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          {errors.email && (
            <small className="form-text text-muted">{errors.email}</small>
          )}
        </div>

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
