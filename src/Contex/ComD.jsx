import React, { useContext } from "react";
import { Bio } from "./ComA";

const ComD = () => {
  const obj = useContext(Bio);
  console.log(obj)

  return <div>ComD</div>;
};

export default ComD;
