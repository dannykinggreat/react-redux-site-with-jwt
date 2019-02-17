import express from "express";
import authorization from "../middlewares/authenticate";

const router = express.Router();

router.post("/", authorization, (req, res) => {
  console.log("reuest is ", req.headers);
  res.status(201).json({ success: "Succeess", user: req.currentUser });
});

export default router;
