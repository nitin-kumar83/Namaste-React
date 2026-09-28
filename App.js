// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * <div id="parent">
 *    <div id="child">
 *       <h1>This is h1 heading</h1>
 *       <h2>This is h2 heading</h2>
 *    </div>
 * <div id="child">
 *       <h1>This is h1 heading</h1>
 *       <h2>This is h2 heading</h2>
 *    </div>
 * </div>
 */

const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"}, [ React.createElement("h1", {}, "This is h1 heading"), React.createElement("h2", {}, "This is h2 heading")]), React.createElement("div", {id: "child2"}, [ React.createElement("h1", {}, "This is h1 heading"), React.createElement("h2", {}, "This is h2 heading")])]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);