two types of Export/Import

 # Default Export/Import
export default Component/Variable;
import Component/Variable from "path";

# Named Export/Import

export const Component
import {Component} from  "path";


# React Hooks
- Normal Js utility function written by Facebook & are in available in react
- These are two very important react hooks
- useState() - Superpowerful State Variables in react{need to be imported using named import}
  - it is going create the state varaible
- useEffect()

# whenever a state variable updates React re-renders the Components

- React do DOM manipulation fast 

# Dom
- it is tree-like representation of structure of document

# VDOM
- it is lightweight ,in-memory representation of actual DOM
- basically normal  JS  Object{nested objects}

# hook
- a hook is a special function that lets u "hook into"

# useState Hook

- useState is a React Hook that allows u to add state variables to ur functional components.

- It returns an array with two values
   - the current state and a function update it

- The hook takes an initial state valueas an argument and returns an updated state value whenever the setter function is called.

# Example
- function Example() {
  const [state, setState] = useState(initialState);
  // ... 
  }