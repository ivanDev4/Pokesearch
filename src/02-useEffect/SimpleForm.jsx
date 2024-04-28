import React, { useEffect, useState } from "react";
import Message from "./Message";

export default function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("formState cambió");
  }, [email]);

  return (
    <>
      <div>Formulario Simple</div>
      <hr />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="* Username"
        name="username"
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="* example@gmail.com"
        name="email"
        onChange={onInputChange}
      />

      {username === "cactus" || email === "cactus@gmail" ? <Message /> : null}
    </>
  );
}
