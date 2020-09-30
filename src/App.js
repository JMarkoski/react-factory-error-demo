import React from "react";
import logo from "./logo.svg";
import "./App.css";

const TryFactory = React.createFactory("div"); // returns a react element, should work, RE type is 'createElementWithValidation'
const TryFunctionComponent = () => React.createElement("div"); // obviously should work, RE type is 'TryFunctionComponent', like above two, returns a react element

function App() {
  return React.createElement(TryFactory);
}

export default App;
