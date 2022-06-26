const path = require("path");

module.exports = {
  // bundling mode
  mode: "development",
  devtool: "eval-source-map",
  // entry files
  entry: "./src/index.ts",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  // output bundles (location)
  output: {
    publicPath: "dist",
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
};
