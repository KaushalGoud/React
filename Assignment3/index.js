import ReactDOM from "react-dom/client";
import React from "react";
const takeRoot = document.getElementById("root");
const root = ReactDOM.createRoot(takeRoot);
const Headings = () =>
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { key: "h1" }, "H1"),
    React.createElement("h2", { key: "h2" }, "H2"),
    React.createElement("h3", { key: "h3" }, "H3"),
  ]);
const HeadingUsingJSX = () => (
  <div>
    <Headings />
    <h1 className="head">Hello</h1>
    <h1 className="head">Hello</h1>
  </div>
);

const Header = () => {
  return (<div className="nav">
    <h1 id="head" className="h1">Logo</h1>
    
    <input type="text" placeholder="Search.." id="searchbar"></input>
    <h1 className="h1" id="icon" >User Icon</h1>
  </div>
  )
};
root.render(<Header/>);

