import webpack from "webpack";
import path from "path";

export default {
  devtool: "inline-source-map",

  entry: [
    //for hot realoading on changing react codeS
    "react-hot-loader/patch",
    //This connects to the server to receive notifications when the bundle
    //rebuilds and then updates your client bundle accordingly.
    "webpack-hot-middleware/client",
    path.join(__dirname, "/client/clientIndex.js")
  ],

  output: {
    path: "/",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, "client")],
        exclude: [path.join(__dirname, "node_modules")],
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, "client/css")],

        loaders: ["style-loader!css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [" ", ".js"]
  }
};
