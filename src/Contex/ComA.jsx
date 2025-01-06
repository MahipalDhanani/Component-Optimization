import React, { useState } from "react";
import ComB from "./ComB";
import ComD from "./ComD";

export const Bio = React.createContext();
const ComA = () => {
  let [obj, setObj] = useState({
    name: "Rahul",
    age: 25,
    city: "Delhi",
  });

  const changeValue = (key, value) => {
    console.log(key, value);
    setObj({ ...obj, [key]: value });
  };

  return (
    <div>
      <Bio.Provider value={{ obj, changeValue }}>
        <ComB />
      </Bio.Provider>
      <ComD />
    </div>
  );
};

export default ComA;
