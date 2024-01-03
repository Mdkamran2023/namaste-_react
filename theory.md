### included  EPISODE 01 AND 02

# React
- react is the core library of React that provides the functionality for defining and creating React Components

- It includes essential features such as the "React.Component' class for class components ,JSX transformation, and the reconcilation algorithm for efficiently updating the DOM.

- React enables u to create a component-based user interface and manage the state and props of these documents.

# ReactDom
- 'react-dom ' is a package that provides DOM-specific methods for rendering React Components in the browser.

- It includes methods like 'ReactDOM.render()' for mounting React elements into the DOM and updating them the state or props change

- reeact-dom is used when u are building applications that run in browser ,as it interacts with the HTML DOM.

# In a typical React application, you will use react to define your components and manage their logic, and react-dom to render those components into the actual HTML DOM.

## package.json
-- it stores depedencies and configuration for npm
-- stores normal dependencies

## package-lock.json
--- storing exact versions of dependencies (and their dependencies) 

## package.json
-- want as devdependencies "npm i -D parcel"

--in Integrity we have hash , it will store same  exact version for production as local 

 # Dependency is an object that contains the library, which your project requires for production environments and functioning effectively. devDependencies are those packages in the package. json file that you need only for project development purposes.

## bundler
--- webpack,veet,parcel
--- 

## ^(caret) --for minor upgradation
## ~(tilde) -- for major upgradation


## transitive dependency
-- dependecies having some dependencies and dependencies having some also


##  using cdn is not a good way for using any package
-- it is heavy process and if we have some updated version fo package we need to update it every time ,,but by installing it and using ^ , ~


## parcel
- Dev Build
- Local Server
- HMR-- Hot Module Replacement
- File Watching Algorithm -- written in C++
- Caching---Faster Builds
- Do image optimization
- Minification
- Bundling 
- Compressed the file 
- consistent Hashing  
- Code Splitting
- Differential Bundling(to support of older browser)
- Diagnostic
- Error Handling 
- Host on HTTPs
- Tree Shaking(remove unused code)
- Different dev and prod bundles

# browserslist 
- making compatible for older browser



