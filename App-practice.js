// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Heading = () => (
    <h1 className="heading" id="heading">
        Namaste React 🚀
    </h1>
)

// console.log(heading);


const HeadingComponent = () => (
    <div id="container">
        {}
        <h1>Hello bro</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);