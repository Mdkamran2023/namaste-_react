import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -ResturantContainer
 *      --ResturantCard
 *         ---img
 *         ---Name of Res,Star Rating,cuisine,delivery time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */






const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
