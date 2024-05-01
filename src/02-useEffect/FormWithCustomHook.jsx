import React, { useEffect } from "react";
import Message from "./Message";
import useForm from "../hooks/useForm";

export default function SimpleForm() {
  const { onInputChange, onResetForm, username, email, password } = useForm({});

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
        value={username}
        name="username"
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="* example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="* Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>

      {username === "cactus" || email === "cactus@gmail" ? <Message /> : null}
    </>
  );
}
