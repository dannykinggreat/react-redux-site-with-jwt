import express from "express";
import validator from "validator";
import otherValidateInput from "../shared/validations/signup";
import { User, addUser } from "../../models/user";
import bcrypt from "bcrypt";
import { promises } from "fs";
// const app = express();
// const user = app.route();
let router = express.Router();
var validateInput = (otherValidateInput, data) => {
  let { errors } = otherValidateInput(data);
  //this function returns promise object
  return User.find({
    $or: [{ username: data.username }, { email: data.email }]
  }).then(users => {
    users.forEach(user => {
      if (user.username === data.username) {
        errors.username = "This Username is taken!!";
      }
      if (user.email === data.email) {
        errors.email = "This Email is taken!!";
      }
    });
    console.log("logging errors ", JSON.stringify(errors));
    return {
      errors,
      isValid: Object.keys(errors).length === 0 && errors.constructor === Object
    };
  });
};

router.post("/", (req, res) => {
  console.log("request in xxx", req.body);
  //const { errors, isValid } = validateInput(req.body);
  validateInput(otherValidateInput, req.body).then(({ errors, isValid }) => {
    console.log("Testing promises", JSON.stringify(errors));
    if (isValid) {
      var passwordHash = bcrypt.hashSync(req.body.password, 10);
      var user = { ...req.body, password: passwordHash };
      addUser(user, (err, req) => {
        if (err) {
          throw err;
        } else {
          res.status(200).json({ Status: "success" });
          console.log("sending success back");
          //req===user!!!
          console.log("Successfully added User", JSON.stringify(req));
        }
      });
    } else {
      console.log("sending errors back");
      res.status(400).json(errors);
    }
  });
});

router.get("/:identifier", (req, res) => {
  console.log("Uniquenes param", req.params.identifier);
  User.find(
    {
      $or: [
        { username: req.params.identifier },
        { email: req.params.identifier }
      ]
    },
    (err, req) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(req);
        console.log("sending success back");
        //req===user!!!
        console.log("Successfully found User", JSON.stringify(req));
      }
    }
  );
  // .then(user => {
  //   console.log("Uniquenes onBlur", JSON.stringify(req));
  //   console.log("Uniquenes onBlur", JSON.stringify(user));

  //   res.send(user);
  // })
  // .catch(err => res.status(404));
});

export default router;
