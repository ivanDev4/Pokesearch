import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
// import SimpleForm from "./02-useEffect/SimpleForm";
// import CounterWithCustomHook from "./useState/CounterWithCustomHook";
// // import HooksApp from "./HooksApp";
// import CounterApp from "./useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MultipleCustomHooks />
  // </React.StrictMode>
);
