import { React, memo } from "react";

export const Small = memo(({ value }) => {
    console.log("Recórcholis me rendericé");

  return <small>{value}</small>;
});
