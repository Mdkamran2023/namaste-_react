# Single Responsibility Priciple
- The Single Responsibility Principle (SRP) is a programming principle that states that every module, class, or function in a computer program should have responsibility over a single part of that program’s functionality, and it should encapsulate that part.
-  In other words, a module should be responsible for one and only one actor. 
-  The term actor refers to a group (consisting of one or more stakeholders or users) that requires a change in the module.
1.   It helps create maintainable, reusable, and flexible software designs . 
2.   By keeping a class focused on a single concern, it makes the class more robust.
  

  # Hooks
  - Hooks are a feature introduced in React16.8 that allow u to use state and other features without writing a class. They are functions that let u hook into React state and lifecycle features from function Components.
  
  1. useState: This hook lets you add state to a functional component. It returns an array with two elements: the current state value and a function to update it .
2. useEffect: This hook lets you perform side effects in a functional component. It runs after every render and accepts a function that can perform any necessary cleanup .

# Custom Hooks
- Custom Hooks are a way to reuse logic between components in React.
-  They allow you to extract stateful logic from a component so that it can be reused across multiple components.
-  You can create your own custom hooks for your application’s needs. 
-  Custom hooks must be named starting with use followed by a capital letter. 
-  They only share stateful logic, not state itself.
-  You can pass reactive values from one hook to another, and they stay up-to-date. 
 - All hooks re-run every time your component re-renders.