import React, { Component } from "react";
import timezone from "../data/timezone";
import PropTypes from "prop-types";
import validateInput from "../../server/shared/validations/signup";
import TextFieldGroup from "./common/TextFieldGroup";
import shortid from "shortid";
import { checkUserExists } from "./actions/signUpActions";
import { connect } from "react-redux";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    timeZone: "",
    errors: {},
    isLoading: false,
    inValid: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Used for client side validation. Validates each field in state object
  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    console.log("vali?? ", isValid);
    if (!isValid) {
      this.setState({ errors, isValid });
    }
    return isValid;
  };

  isUserExist = e => {
    console.log("firing onblur validator", e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    e.preventDefault();
    let { errors, inValid } = this.state;

    if (value !== null) {
      this.props.checkUserExists(value).then(user => {
        if (user.data.length !== 0) {
          console.log("firing onblur validator", user.data.length);
          errors[name] = `This ${name} is already taken!!`;
          inValid = true;
        } else {
          errors[name] = "";
          inValid = false;
        }
        this.setState({ errors, inValid });
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      //If client side validation passes, then remove error object and set loading to true.
      this.setState({ errors: {}, isLoading: true });

      this.props
        .handleSubmit(this.state)
        .then(result => {
          //gets router object from context and pushes home path to history
          this.context.router.history.push("/home");
          console.log("result", result);
        })
        //.then takes upto two parameters.Both are functions(onFullFilled, onRejected(optional))
        .then(() => {
          console.log("inside flashaction");
          this.props.addFlashMessage({
            id: shortid.generate(),
            type: "success",
            text: "You have logged in!!"
          });
        })
        .catch(err => {
          console.log("inside errors");
          this.setState({ errors: err.response.data, isLoading: false });
        });
      console.log("final header", header);
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
          type="text"
          label="User Name"
          error={errors.username}
          name="username"
          id="username"
          placeholder="Enter User Name"
          handleChange={this.handleChange}
          isUserExist={this.isUserExist}
        />
        <TextFieldGroup
          type="password"
          label=" Password"
          error={errors.password}
          name="password"
          id="password"
          placeholder="Enter Password"
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          type="password"
          label="Confirm Password"
          error={errors.passwordWarning}
          name="passwordConfirmation"
          id="passwordConfirmation"
          placeholder="Confirm Password"
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          type="email"
          label="E-mail"
          error={errors.email}
          name="email"
          id="email"
          placeholder="Enter your  E-mail"
          handleChange={this.handleChange}
          isUserExist={this.isUserExist}
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

        <button
          type="submit"
          disabled={this.state.inValid || this.state.isLoading}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}
SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};
SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExist: PropTypes.func
};

export default connect(
  null,
  { checkUserExists }
)(SignUpForm);
