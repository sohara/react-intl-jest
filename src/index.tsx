import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

interface indexProps {}

const App: FunctionComponent = () => {
  return (
    <>
      <h1>Hello from React</h1>
      <p>This is a fake page</p>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
