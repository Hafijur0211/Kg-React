# Kg-React

What is React

1. Javascript library to build Dynamic and intractive user interfaces
2. Developed at Facebook in 2011
3. Currently most widely used Js library for frontend development
4. Used to create single page application

---

Working of DOM

1. Browser takes HTML and create DOM.
2. Js help us modify DOM based on user actions or events.
3. In big applications, working with DOM becomes more complicated.

---

Problem with JavaScript

1. React has a simpler mental model
2. Js is cumbersome
3. Js is Error-prone
4. Js is Hard to maintain

---

Working of React

1. No need to worry about querying and updating DOM
2. React creates a web page with small and reusable components
3. React will take care of creating and updating DOM elements
4. IT saves a lot of time

---

Js vs React

1. Js is imperative: you define steps to reach your desired state
2. React is Declarative: You define the target UI state and then react figure out how to reach that state

---

Introduction to components

1. components help us write reusable, modular and better organized
2. React applications is a tree of components with app components as the root bringing everything together.

---

What is IDE

1. IDE stands for Integrated Development Environment.
2. Software suite that consolidates basic tools required for software development.
3. Central hub for coding, finding problems, and testing.
4. Design to improve developer efficiency.

---

Need of IDE

1. Streamline development.
2. Increase productivity.
3. Simplifies complex tasks.
4. Offers a unified workspace.
5. IDE Feature
   1. Code Autocomplete
   2. Syntax highlighting
   3. Version control
   4. Error checking

---

Create a React App

1. Official tool is CRA(Create a React App).
2. Vite is modern tool to create a React Project.
3. Vite produce Quick and Small bundle size.
4. Vite: Use npm run dev to launch dev server.
5. Use npm start for CRA.

---

Project Structure

1. node_modules has all the installed node packages
2. public_directory: Contains static files that don't change.
3. src_directory: Main folder for the React code.
   1. Component: Reusable part of UI, like buttons or headers.
   2. assets: image, fonts and other static files.
   3. styles: CSS or stylesheets.
4. package.json contain information about this project like name, version, dependencies on other react packages.
5. vite.config.js contain vite configuration.

---

File extensions

.Js

- Stand for JavaScript
- Contains regular javascript code
- Used for general logic and components

.JSX

- Stand for javascript XML
- Combined javascript with HTML-like tags
- Make it easier to design UI components

---

Class Vs Function Components

1. Class Components.

- Stateful: Can manage state.
- Lifecycle: Access to lifecycle methods
- Verbose: More boilerplate code.
- Not Preferred anymore.

2. Function Components.

- Initially stateless.
- Can use Hooks for state and effects.
- Simpler and more concise
- More Popular.

---

What is JSX

1. Definition : JSX determines how the UI will look whenever the component is used.
2. Not HTML: Through it resemble HTML, you are actually writing JSX, which stands for JavaScript XML.
3. Conversion : JSX get converted to regular JavaScript.
4. Babeljs.io/repl is tool that allows you to see how JSX is transformed into JavaScript.

---

Exporting components

1. Enable the use of components in other parts
2. Default Export : Allow exporting a single component as the default from a module.
3. Named Export: Allow exporting multiple items from a module.
4. Importing : To use an exported component, you need to import it in the destination file using import syntax.

---

Other important points

1. Naming : Must be capitalized; Lowercase for default HTML.
2. HTML : Unlike vanilla javascript where you can't directly write HTML, in React you can enable HTML-like syntax using JSX.
3. CSS : In React, CSS can directly imported into components files, allowing for modular and component-specific styling.

---

Dynamic Component

1. Dynamic Content : JSX allows the creation of dynamic and interactive UI components.
2. JavaScript Expression : Using {}, we can embed any JS expression directly within JSX. This includes variables, function calls and more.

---

Reusable Components

1. Modularity : Components are modular allowing for easy reuse across different parts of an application.
2. Consistency : Reuse components ensure UI consistency and reduce the chance of discrepancies.
3. Efficiency : Reduces development time and effort by avoiding duplication of code.
4. Maintainability : Changes made to a reused component reflect everywhere its used simplifying updates and bug fixes.

---

Including Bootstrap

1. Responsive : Mobile-first design for all device sizes.
2. Components : Pre-styled elements like buttons and navbars.
3. Customizable : Consistent look across browsers.
4. Open-Source : Free with community support.

   1. Install

   - npm i bootstrap@5.3.2

   2. Import

   - import "bootstrap/dist/css/bootstrap.min.css";

---

Fragments

1. What

Allow grouping of multiple elements without extra DOM nodes.

2. Why

   - Return multiple elements without a wrapping parent.
   - Cleaner DOM and consistent styling.

3. How

   1. <React.Fragment>...</React.Fragment>
   2. Short: <>...</>

---

Map Methods

1. Purposes: Render lists from array data.
2. JSX Elements: Transform array items into JSX.
3. Inline Renderings: Directly inside JSX 
```
 {items.map(item => <li key={item.id}>{item.name}</li>)} 
```
4. Key Prop: Assign unique key for optimized re-renders.
``` 
<div key={item.id}>{item.name}</div> 
```

--- 

Conditional Rendering

1. Conditional Rendering
   - Displaying content based on certain conditional.
   - Allows for dynamic user interfaces.

2. Method 
   - if-else statements: Choose between two blocks of content
   - Ternary operator: Quick way to choose between two options
   - Logical operator: Useful for rendering content when a condition is true.

3. Benefits
   - Enhances user experience.
   - Reduces unnecessary rendering.
   - Makes apps more interactive and responsive.

---

Passing Data via Props

Props in React
- Short for properties
- Mechanism for passing data.
- Read-only by default

Usage
- Pass data from parent to child components.
- Make component reusable.
- Define as attribute in JSX.

Key Points
- Data flows one-way (downwards).
- Prop are immutable.
- Used for communication between components.

Examples

``` <Header title="My App" /> ```

--- 

Css Modules

1. Localized class names to avoid global conflicts.
2. Styles are scoped to individual components.
3. Help in creating components-specific styles.
4. Automatically generated unique class names.
5. Promotes modular and maintainable Css.
6. Can use alongside global Css when needed.

--- 

Passing Children

1. Children is a special prop for passing elements into components
2. Used for flexible and reusable components designs.
3. Common in layout or container components.
4. Accessed with props.children.
5. Can be any content: string, number, JSX, or components.
6. Enhanced components compatibility and reusability.

``` 
function Container(props){
   return (
      <div className="container-styles" >
      {props.children}
      </div>
   );
}
```

```
<Container>
<h1>Welcome to my App</h1>
<p>This content is passed as children to the Container component.</p>
</Container>
```

--- 

Handling Events

1. React events use camelCase, e.g onClick.
2. Uses synthetic events, not direct browser events.
3. Events handler can be function or arrow functions.
4. Use onChange for controlled form inputs.
5. Avoid inline arrow functions in JSX for performance.

--- 

Passing Function via Props

1. Pass dynamic behaviour between components.
2. Enable upward communication between child to parent.
3. Commonly used for events handling.
4. Parent define a function, child invoke it.
5. Enhances component interactivity.
6. Example ``` <Button onClick ={handleClick}>```

--- 

Managing State

1. State represent data that change over time.
2. State is local and private to the component.
3. State change the components to re-render.
4. For functional components, use the useState hook.
5. React functions that start with word use are called hooks.
6. Hooks should only be used inside components.
7. Parent components can pass state down to child via props.
8. Lifting state up: share state between components by moving it to their closest common ancestor.

---

State Vs Props

State

- Local and mutable data within a components.
- Initialized within the components.
- Can change over time.
- Cause re-render when updated.
- Managed using useState in functional components.

Props

- Passed into a component from its parent.
- Read-only (immutable) within the receiving components.
- Allow parent-to-child component communication.
- Changes in props can also cause a re-render.

---
