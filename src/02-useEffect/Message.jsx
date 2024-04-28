import React, { useEffect, useState } from "react";

export default function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h5 className="alert alert-danger mt-2 fs-6 p-3">El usuario ya existe</h5>
      {JSON.stringify(coords)}
    </>
  );
}
