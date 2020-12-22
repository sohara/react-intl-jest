"use strict";
const ts = require("typescript");
const { transform } = require("@formatjs/ts-transformer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const transform = function (ctx) {
//   return function (sf) {
//     function visit(node) {
//       console.log("Visiting ", ts.SyntaxKind[node.kind]);
//       return ts.visitEachChild(node, visit, ctx);
//     }
//     return ts.visitNode(sf, visit);
//   };
// };
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => {
            console.log("getting getCustomTransformers");
            return {
              before: [
                transform({
                  overrideIdFn: "[sha512:contenthash:base64:6]",
                  extractFromFormatMessageCall: true,
                  ast: true,
                }),
              ],
            };
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "Hello",
    }),
  ],
};
