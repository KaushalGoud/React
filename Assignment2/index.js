import React from "react";
import ReactDOM from "react-dom/client";
const getRoot = document.getElementById("root");
const Header = () => <h1>k xa guys</h1>;
const Header2 = () => {
  return (
    <div>
      <Header />

      <h1>Another Header</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(getRoot);
root.render(<Header2 />);
