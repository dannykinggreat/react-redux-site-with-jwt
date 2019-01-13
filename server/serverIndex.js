import express from "express";
import path from "path";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConf from "../webpack.config.js";
import webpackHot from "webpack-hot-middleware";

//1 declare a const for express()
const app = express();

//4 Adding webpack and webpack hot
//this should be placed before app.get function **important**
const config = webpack(webpackConf);

app.use(
  webpackMiddleware(config, {
    noInfo: true,
    publicPath: webpackConf.output.publicPath
  })
);
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
