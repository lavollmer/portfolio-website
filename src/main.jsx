//import React library
import React from "react";
//import ReactDOM library - renders components in the DOM
import ReactDOM from "react-dom/client";
//import App component - JavaScript file with JSX syntax to allow HTML to be written in the file
import App from "./App.jsx";
//import index.css file
import "./index.css";

//create a new React root and render the App component
//ReactStrictMode is a tool for highlighting potential problems in an application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
