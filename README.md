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
