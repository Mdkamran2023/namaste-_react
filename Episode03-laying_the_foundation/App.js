import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement ==>{Object}
// element create using React(not readable)
const heading=React.createElement("h1",{id:"heading"},"Namaste React !!!!!");
console.log(heading);
// above way is very lengthy way to create ,so JSX ccame into picture

//JSX-- HTML like syntax(is not HTML in JS)  
//js engine not able to read this code
// jsx(transpiled before it reaches the JS Engine)
// if jsx is in multiple lines it will be included in small bracket  to make babel understandable .

const elem= <span>React Element Inside React Element</span>;

const jsxHeading =
(<h1 id="heading"
 className="head">
    {elem}
    <br></br>
    Namaste React using JSX </h1>);
console.log(jsxHeading);



//React Component =>everything in REact is Component
// there are two types of Components 
// CLass Based Component --- OLD
// Functional Component -- NEW

// React Functional Component 
//  just normal js functions which return some JSX elements
// function which returns react Element

const Title=()=>{
    return (
        <div id="container">
        <h1 className="heading"> Namaste React Functional Component Title </h1>
        </div>
    )
}
const number=10000;

// Component Composition
const HeadingComponent=()=>{
    return (
        <div id="container">
            {/* {to write javascript } */ jsxHeading}
            {<h2>{number}</h2>}
            {Title()}
            <Title/>
            <Title></Title>
        <h1 className="heading"> Namaste React Functional Component </h1>
        </div>
    )
}
 


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// rendering react Element 
root.render(jsxHeading);  

// <HeadingComponent/> babel understand this as a Component

// rendering react Component
root.render(<HeadingComponent/>);
