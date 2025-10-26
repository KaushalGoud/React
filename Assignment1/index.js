const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "K xa guys")
  )
);
root.render(heading);
console.log(root)