import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM & JSX Practice
// components in pascal case
// function MyApp() {
//   return (
//     <ul>
//       <li>a</li>
//       <li>b</li>
//       <li>c</li>
//     </ul>
//   )
// }

// ReactDOM.render(
//   <MyApp />,
//   document.getElementById("root")
// );


// React Functional Components Practice
// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser

// import MyInfo from "./components/MyInfo"

// ReactDOM.render(
//   <MyInfo />,
//   document.getElementById("root")
// )

//React Parent/Child Component Practice
// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

// import App from "./components/App-old"

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )


// React Todo App
// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it
// import App from "./components/App"

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )



// React TODO App: Phase 3
// Let's practice props and mapping components on our todo list app!
//
// I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 
//
// Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.

import ChecklistItem from "./components/ChecklistItem"
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
