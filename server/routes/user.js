import express from "express";
import validator from "validator";
// const app = express();
// const user = app.route();
let router = express.Router();
router.post("/", (req, res) => {
  console.log("request in xxx", req.body);
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    console.log("sending errors back");
    res.status(400).json(errors);
  }
});

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
  if (validator.isEmail(data.email)) {
    errors.email = "E-mail is invalid";
  }
  if (validator.isEmpty(data.timeZone)) {
    errors.timeZone = "Time zone is required!!";
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordWarning = "Passwords do not match!!";
  }

  return {
    errors,
    isValid: errors == null
  };
};
export default router;
