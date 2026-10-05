import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// JSX - HTML like or XML like syntax (transpiled before it goes to JS Engine) -> PARCEL -> Babel

// JSX => Babel transpiled it to React.createElement => ReactElement - JS Object => HTMLElement(render)

// REACT ELEMENT
const jsxHeading = (
  <h1 id="heading">
    Namaste React using JSX 🚀
  </h1>
);

const ele = <span>React Element</span>;
const Title = () => (
    <h1 className="head" tabIndex={0}>
        {ele}
        Namaste React using JSX 🚀
    </h1>
)

// React Components
// Class based components - OLD
// Functional components - NEW
// React Functional component is a normal JS function
// Component Composition

const number = 10000;
const HeadingComponent = () => (
    <div id="container">
        {number}
        {/* {title} */}
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

// const HeadingComponent = () => <h1>Namaste React Functional Component</h1>
// const HeadingComponent = () => (<h1 className="heading">Namaste React Functional Component</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);