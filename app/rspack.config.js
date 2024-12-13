const rspack = require("@rspack/core");
const path = require("path");

const checkoutUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}checkout/mf-manifest.json`
  : "";
const decideUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}decide/mf-manifest.json`
  : "";
const exploreUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}explore/mf-manifest.json`
  : "";

module.exports = {
  output: {
    uniqueName: "app",
    publicPath: "auto",
  },
  devServer: {
    port: 1234,
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: "asset",
      },
      {
        test: /\.png$/,
        type: "asset",
      },
      {
        test: /\.jsx$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new rspack.DefinePlugin({
      "process.env.CHECKOUT_URL": JSON.stringify(
        checkoutUrl || "http://localhost:6002/mf-manifest.json"
      ),
      "process.env.DECIDE_URL": JSON.stringify(
        decideUrl || "http://localhost:6003/mf-manifest.json"
      ),
      "process.env.EXPLORE_URL": JSON.stringify(
        exploreUrl || "http://localhost:6001/mf-manifest.json"
      ),
    }),
    new rspack.HtmlRspackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
