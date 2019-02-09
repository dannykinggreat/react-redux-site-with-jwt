import express from "express";
import path from "path";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConf from "../webpack.config.js";
import webpackHot from "webpack-hot-middleware";
import users from "./routes/user";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/auth";

//1 declare a const for express()
const app = express();

//4 Adding webpack and webpack hot
//this should be placed before app.get function **important**
const config = webpack(webpackConf);

//Conect to mongoDB in local
mongoose.connect("mongodb://localhost/users");
//Connection instance
var db = mongoose.connection;
//Check if successfully connected
db.on("error", console.error.bind(console, "Mongo Connection error"));
db.once("open", () => {
  console.log("Mongo connected");
});

app.use(
  webpackMiddleware(config, {
    noInfo: true,
    publicPath: webpackConf.output.publicPath
  })
);

console.log("in server");
app.use(bodyParser.json());
app.use("/api/auth", auth);
app.use("/api/users", users);
//for relaoding page on code changes
app.use(webpackHot(config));

//2 declare the URL pattern to which the specified html file must be served
app.get("*/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

//3 mention the port where the file will be served
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
