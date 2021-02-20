import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

import MyInfo from "./components/MyInfo"

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
