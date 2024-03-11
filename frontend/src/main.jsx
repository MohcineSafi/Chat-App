import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter from react-router-dom
import "./index.css";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
