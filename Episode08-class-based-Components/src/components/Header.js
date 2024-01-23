import { useState,useEffect } from "react";
import {Link} from "react-router-dom";

const Header = () => {

  // let btnNameJS="Login";

  const [btnNameReact,setbtnNameReact]=useState("Login");
  console.log("Header Rendered");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty =[] => useEffect is called on initial render(just once)
  // if dependency array is [variable_name]=> called everytime variable_name is updated

useEffect(()=>{
  console.log("useEffect called");
},[btnNameReact]);


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={require("../../Assets/ff-transparent.svg")}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about"> About Us </Link></li>
            <li><Link to="/contact"> Contact Us </Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              // btnNameJS="Logout";
              // console.log(btnNameJS);
              // btnName will change to Logout but it will not updated in case of using JS variable
              
              console.log(btnNameReact);
              btnNameReact === "Login" ? setbtnNameReact("Logout"):setbtnNameReact("Login");
              
            }}>
              {/* on clicking on button setbtnNameReact will help i re-render the Whole Component and it will update only LOGIn Button
              but in case of btnNameJS react will not have track of this variable */}
              {/* {btnNameJS} */}
              {/* how const variable is modified ? -- when u click on button it will re-render the whole header Component and btnNameReact will be new variable..... */}
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;