import validator from "validator";

const validateInput = data => {
  let errors = {};
  console.log("inside validator", data.username);
  if (validator.isEmpty(data.username)) {
    console.log("lolerror");
    errors.username = "Username is required!!";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required!!";
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "Password is required!!";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required!!";
  }
  if (data.email && !validator.isEmail(data.email)) {
    errors.email = "E-mail is invalid";
  }
  if (validator.isEmpty(data.timeZone)) {
    errors.timeZone = "Time zone is required!!";
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordWarning = "Passwords do not match!!";
  }
  console.log("fina errors", JSON.stringify(errors));
  return {
    errors,
    isValid: Object.keys(errors).length === 0 && errors.constructor === Object
  };
};

export default validateInput;
