import validator from "validator";

const validateInput = data => {
  let errors = {};
  console.log("inside validator", data.username);
  if (validator.isEmpty(data.username)) {
    errors.username = "This field is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0 && errors.constructor === Object
  };
};

export default validateInput;
