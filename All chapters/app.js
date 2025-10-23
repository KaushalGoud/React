import React from "react";
import ReactDOM from "react-dom/client";
//React element
// const Heading=React.createElement("div",{id:"parent"},"Hello I am inside div");
// console.log(Heading)
const Name = "Kaushal";
const JsxElement = ( props) => (
  <h1>Hello world I am JSX different than react I am written by{Name}</h1>
);

const Heading = () => (
  <div>
    <JsxElement >I am in middle</JsxElement>
    <h1>This is a Junctional react based component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
