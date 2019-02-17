import jwt from "jsonwebtoken";
import { User } from "../../models/user";
import { decode } from "punycode";

export default (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(" ")[1];
  }

  if (token) {
    jwt.verify(token, "securekey", (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Failed to Authenticate" });
      } else {
        console.log("decode is ", decoded);
        User.find({ username: decoded.username }, "username email").then(
          user => {
            if (!user) {
              res.status(404).json({ error: "No such user found" });
            } else {
              console.log("User is", user);
              req.currentUser = user;
              next();
            }
          }
        );
      }
    });
  } else {
    res.status(403).json({ error: "No Token provided" });
  }
};
