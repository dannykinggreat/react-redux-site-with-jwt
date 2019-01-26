import express from "express";
import validator from "validator";
import validateInput from "../shared/validations/signup";
import { addUser } from "../../models/user";
import bcrypt from "bcrypt";
// const app = express();
// const user = app.route();
let router = express.Router();
router.post("/", (req, res) => {
  console.log("request in xxx", req.body);
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    var passwordHash = bcrypt.hashSync(req.body.password, 10);
    var user = { ...req.body, password: passwordHash };
    addUser(user, (err, req) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({ Status: "success" });
        console.log("sending success back");
        console.log("Successfully added User");
        res.json(req.body);
      }
    });
  } else {
    console.log("sending errors back");
    res.status(400).json(errors);
  }
});

export default router;
