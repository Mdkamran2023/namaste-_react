const parent = React.createElement(
  "div",
  { id: "parent" },
 [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am what I am (H1 TAG)"),
        React.createElement("h2", {}, "I am what I am (H2 TAG)"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am what I am (H1 TAG)"),
        React.createElement("h2", {}, "I am what I am (H2 TAG)"),
      ])
 ]
);
//tags,attribute,content

// creating an object and on rendering it will convert to HTML
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); //object

//root is place where all the code will run ,rendered inside the root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
// if something in #root in HTML it will replaced by this reactElement