import React from "react"
import ReactDOM from "react-dom/client"
const root=ReactDOM.createRoot(document.getElementById("root"))
const element=React.createElement("div",{id:"parent",key:"parent"},[
React.createElement("div",{id:"child",key:"child"},
  [
    React.createElement("h1",{id:"h1",key:"h1"},"h1"),
    React.createElement("h2",{id:"h2",key:"h2"},"h2")
  ]
),
React.createElement("div",{id:"child2",key:"child2"},
  [
    React.createElement("h1",{id:"h1",key:"h1"},"h1"),
    React.createElement("h2",{id:"h2",key:"h2"},"h2")
  ]
)

])

root.render(element)