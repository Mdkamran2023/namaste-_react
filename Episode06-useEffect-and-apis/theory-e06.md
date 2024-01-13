# State Variable
- A state variable is an object that stores data that can change over time and can be used to control the behavior of Component
- u can create a state variable using the useState hook,which is a built-in hook in react
- for example 
  
        import React, { useState } from 'react';
        function Example() {
        const [count, setCount] = useState(0);
        return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
         Click me
        </button>
        </div>
               );
          }

        In this example, we create a state variable called count and initialize it to 0 using the useState hook. We also create a function called setCount that we can use to update the value of count. When the user clicks the button, we call setCount with the new value of count (which is count + 1) to update the state variable.

 

## useState Hook

- useState is a React Hook that allows u to add state variables to ur functional components.

- It returns an array with two values
  -  the current state and a function update it

- The hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

- Example
      
      function Example() {
      const [state, setState] = useState(initialState);
      // ...
      }

## Shimmer UI
- Shimmer UI is a technique used to display loading states in a more visually appealing way.
-  It is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear
-  



  ### whenever state variables update ,react triggers a reconcilation cycle (re-renders the Component)
