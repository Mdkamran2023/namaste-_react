# steps to follow
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- slice(cartSlice)
- dispatch(action)
- Selector(for reading data)


#  while React is used for building the UI of your application, React-Redux connects your React application with a Redux store, and Redux Toolkit provides utilities to make working with Redux easier and more efficient.

- React: React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes1.

- React-Redux: React-Redux is the official React binding for Redux. It allows your React components to read data from a Redux store, and dispatch actions to the store to update data. It provides the useSelector and useDispatch hooks for accessing the state and dispatching actions.

# Redux Toolkit (RTK):
# "Configuring a Redux store is too complicated"
 # I have to add a lot of packages to get Redux to do anything useful"
# Redux requires too much boilerplate code"
- Redux Toolkit is a library that provides a set of tools to simplify common Redux use cases. It includes utilities to simplify several Redux patterns, including store setup, defining reducers, immutable update logic, and even creating entire “slices” of state at once. RTK is a hooks-based incarnation of Redux that simplifies Redux development, with quality of life improvements, like the ability to write mutable state updates in reducers which are converted to immutable state updates behind the scenes using a library called Immer, and auto-generated actions from the reducers themselves.


# Redux
- Redux is a predictable state container for JavaScript applications.
-  It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 
-  It centralizes your application’s state and logic, and lets you debug and trace your changes with the Redux DevTools. 
-  You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.
-   Redux Toolkit is our official recommended approach for writing Redux logic.
-    It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app.
-     Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications. 
- RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire “slices” of state at once.
-  Whether you’re a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better.
-  
# Important to be noted
  ## How to write data to redux store
- when u hit the add button it dispatches an action function which calls reducer function which updates the slices of Redux Store
- useDispatch hook for dispatching an action

## How to read data
- for reading data we need to be subscribed using useSelector hook....