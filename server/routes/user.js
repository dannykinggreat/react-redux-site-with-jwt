import express from "express";
import validator from "validator";
import validateInput from "../shared/validations/signup";
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

export default router;
