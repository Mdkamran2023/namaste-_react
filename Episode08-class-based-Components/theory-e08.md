# class Based Component

- A class-based component is a type of component in ReactJS that is defined using a class instead of a function. Class components are more complex than functional components and have access to a state which dictates the current behavior and appearance of the component 1.

- To create a class component, we can define a class that extends the React.Component class and implement a render() method that returns a React component to be rendered 

- In React, the constructor(props) method is used to create a new instance of a component. The props parameter is an object that contains the properties passed to the component. The constructor method is called before the component is mounted and is used to initialize the component’s state and bind methods to the component.

- The super(props) method is used to call the constructor of the parent class and pass the props parameter to it. This is required when creating a new instance of a component that extends another component.

```JavaScript

import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;

```


/****
 * -------MOUNTING CYLCLE----------
 * 
 * constructor(dummy)
 * render (dummy)
 *        <HTML  Dummy>
 * Component did Mount is called
 *        <API CALLED>
 *        <this.setState> -->>State Variable is updated
 * 
 * -------UPDATING---------------
 * render(API data)
 * <HTML(new API data)>
 * Component Did Update
 * 
 * ---- UnMOUNTING-----
 * componentWillUnmount ---->whenever going to aother page
 * 
 * 
 */