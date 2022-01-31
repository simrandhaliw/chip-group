import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import "./fonts.css";
import React from "react";
import Chips from "./option1";

function App() {
  return <Chips />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
