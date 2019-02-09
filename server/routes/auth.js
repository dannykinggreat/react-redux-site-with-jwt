import express from "express";
import { User } from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  User.find({ $or: [{ username: username }, { email: username }] }).then(
    user => {
      console.log(user[0].password);

      if (user) {
        if (bcrypt.compareSync(password, user[0].password)) {
          const token = jwt.sign(
            {
              id: user[0].id,
              username: user[0].username
            },
            "securekey"
          );
          res.status(200).send({ token });
        } else {
          console.log("bcrypt else");
          res.status(401).json({ errors: { form: "Invalid credentials!!" } });
        }
      }
    },
    error => {
      res.status(401).json({ errors: { form: "Invalid credentials!!" } });
    }
  );
});

export default router;
