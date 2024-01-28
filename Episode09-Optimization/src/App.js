import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand Loading
// dynamix import

const Grocery= lazy(()=>import("./components/Grocery"));

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
      {/* this element will render either <Body/> when the url is "/",
      render <About/> when URL "/about",
      render <Contact/> when URL "/contact"
       */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);
