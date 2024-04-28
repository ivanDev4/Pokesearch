import React, { useEffect } from "react";

export default function Message() {
  useEffect(() => {
    console.log("Message Mounted");

    return () => {
      console.log("Message Unmounted");
    };
  }, []);

  return (
    <>
      <h5 className="alert alert-danger mt-2 fs-6 p-3">El usuario ya existe</h5>
    </>
  );
}
