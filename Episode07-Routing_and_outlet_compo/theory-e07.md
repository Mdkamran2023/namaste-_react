
### useEffect
- if no dependency array => useEffect is called on every render
- if dependency array is empty =[] => useEffect is called on initial render(just once)
-  if dependency array is [variable_name]=> called everytime variable_name is updated
      
        useEffect(()=>{
        console.log("useEffect called");
        },[variable_name]);

### useState
- Always make state variable inside the functional Component  
- useState is used for creating local state variable 
- always do state variable declaration in top in functional Component
- Never create state variables inside if-else,function,for-loop
-  it will create inconsistency(iif-else)
-  

# React-router-dom
- it gives a hook "useRouteError"
- common convention to use "use" for hook

## createBrowserRouter 
- It is a function in React Router that creates a router Object using JSX routes. 
- it is recommended router for all React Router Web Projects
- It uses the DOM History API to update the URL and manage the history stack.
- It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
  
                import * as React from "react";
                import * as ReactDOM from "react-dom";
                import { createBrowserRouter, RouterProvider } from "react-router-dom";

                const router = createBrowserRouter([
                  {
                    path: "/",
                    element: <Home />,
                  },
                  {
                    path: "/about",
                    element: <About />,
                  },
                ]);
                
                ReactDOM.createRoot(document.getElementById("root")).render(
                  <RouterProvider router={router} />
                );

## RouterProvider
- It is a component in React Router that is used to render ur app and enable the rest of the data APIs
- It is used to pass the router object to the rest of the app ROuterProvider is used in conjunction with createBrowserRouter , createMemoryRouter, or createStaticRouter to create a router Object.
  
## outlet
- An Outlet is a component in React Router that should be used in parent route elements to render their child route elements. 
-  This allows nested UI to show up when child routes are rendered.
-  If the parent route matched exactly, it will render a child index route or nothing if there is no index route


## useRouteError()
- It is a hook provided by react-router-dom that allows you to access the current error state of the router. This hook returns an object with the following properties:

- error: The current error object, or null if there is no error.
- You can use this hook in your React component to catch any errors that may occur during routing.
 - However, the error object returned by this hook is of type unknown. To infer the error type, you can use type narrowing as suggested by one of the maintainers of React Router.
  
## Link
- Link Component will help in not reloading the page again
- but by using anchor tag page get reloaded
- React is Single Page Application(it will not reload everytime)

# Single Page Application
- A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content of the page as the user interacts with it, without requiring a full page reload.
  
# 2 types of Routing in web apps
- Client Side Routing (React --All the Components will be loaded at once)
  
- Server side Routing (u make a network call ,it loads the data from server and shown to user  )
