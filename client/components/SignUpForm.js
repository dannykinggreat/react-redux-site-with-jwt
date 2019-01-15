import React, { Component } from "react";
import timezone from "../data/timezone";
import PropTypes from "prop-types";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    timeZone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
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
    //console.log("options are", JSON.stringify(options));
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> We beg you to Sign Up!!!</h1>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="user name field"
            placeholder="Enter User Name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeZone">Time Zone</label>
          <select
            className="form-control"
            name="timeZone"
            id="timeZone"
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose your Time Zone
            </option>
            {options}
          </select>
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
