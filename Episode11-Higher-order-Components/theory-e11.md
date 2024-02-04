# Dependencies Vs DEv-Dependencies
- dependencies are the packages that your application needs to run in production, while devDependencies are packages that are only needed during development or releasing, like compilers that take your code and compile it into JavaScript, test frameworks or documentation generators 


# higher Order Components
- It is a function that takes a component and returns a new component.
- They allow you to reuse component logic across multiple components.
- HOC is a function that takes a component as an argument and returns a new component that wraps component the original component.
- HOCs allows u to add additional functionality to a component without modifying the component's code.
- For example, you can use a HOC to add authentication or routing capabilities to a component or to apply a specific style or behavior to multiple components.
- HOCs can take additional arguments, which lets you customize the behavior of the HOC. 
- This makes them a flexible and reusable way to add functionality to your components.
  
  [freeCodeCamp--HOC](https://www.freecodecamp.org/news/higher-order-components-in-react/)


# controlled and uncontrolled components
- React supports two ways to handle the form data; it can either be a Controlled component or an Uncontrolled component.
- React provides two distinctively flexible solutions, i.e., model-view (controlled) and only-view (uncontrolled).
 - Controlled components have a one-way data flow where the state inside the component serves as the single source of truth.
- The parent component has held over the form data in the controlled component.
- The DOM itself handles all the form data in an uncontrolled component.
- It can become cumbersome to work with controlled components if there are many input fields on the page.
- Controlled component react provides validation benefits on every keystroke of the user.
 - All the state changes in a controlled component are made with the help of the setState() method.
- An uncontrolled component stores the current value of the form data using react ref.
- Uncontrolled component react are helpful when we need to integrate react with other libraries which do not follow react design patterns.
  
  [contolled and uncontrolled components](https://dev.to/javanshir_ab/understanding-react-the-difference-between-controlled-and-uncontrolled-components-1m09)


# props drilling
- prop drilling is the process of passing props from a parent component to a child component, and then to another child component,and so on,until the data reaches the final child component that needs it.
- Prop drilling can be challenging for the efficiency and maintainability of applications.

- To avoid prop drilling, you can use React Context API or Redux. The Context API allows you to pass data through the component tree without having to pass props down manually at every level. 
- You can also use useContext hook to consume the context in the child components.

Here is an example of how to solve prop drilling with useContext hook:

```JavaScript
import { createContext, useContext } from 'react';

const MyContext = createContext();

function Parent() {
  const data = { name: 'John', age: 25 };
  return (
    <MyContext.Provider value={data}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const data = useContext(MyContext);
  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
    </div>
  );
}

```

# In class-based components, you can use the Context.Consumer component to access the context. Here’s how you can modify the above example for a class-based component:

``` JavaScript
import React, { createContext } from 'react';

const MyContext = createContext();

class Parent extends React.Component {
  render() {
    const data = { name: 'John', age: 25 };
    return (
      <MyContext.Provider value={data}>
        <Child />
      </MyContext.Provider>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {data => (
          <div>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}


```