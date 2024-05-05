import React, { useRef } from "react";
import "../styles/FocusScreen.css";

export default function FocusScreen() {
  const inputRef = useRef(null);
  console.log(inputRef);

  const focusInput = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h2>Focus Screen</h2>
      <hr />
      <input ref={inputRef} type="text" placeholder="Ingrese su nombre" />
      <button onClick={focusInput} className="button-set-focus">
        Set focus
      </button>
    </>
  );
}
