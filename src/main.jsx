import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterWithCustomHook from "./useState/CounterWithCustomHook";
// // import HooksApp from "./HooksApp";
// import CounterApp from "./useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
);
