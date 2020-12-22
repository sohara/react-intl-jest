import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

interface indexProps {}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
