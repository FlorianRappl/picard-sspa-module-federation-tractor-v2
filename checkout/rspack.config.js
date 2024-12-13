const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack");

module.exports = {
  output: {
    uniqueName: "checkout",
    publicPath: "auto",
  },
  devServer: {
    port: 6002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
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
    new ModuleFederationPlugin({
      name: "checkout",
      filename: "remoteEntry.js",
      exposes: {
        "page:/checkout/cart": "./src/CartPage.jsx",
        "page:/checkout/checkout": "./src/Checkout.jsx",
        "page:/checkout/thanks": "./src/Thanks.jsx",
        "AddToCart": "./src/AddToCart.jsx",
        "MiniCart": "./src/MiniCart.jsx",
      },
      shared: ["react", "react-dom/client", "canvas-confetti"],
    }),
  ],
};
