"use strict";
const ts = require("typescript");
const { transform } = require("@formatjs/ts-transformer");

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
  entry: "./src/index.ts",
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
              before: [transform()],
            };
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
