import React, { useEffect } from "react";

const UseMemoComponent = ({ number }) => {
  const expensiveResult = React.useMemo(() => {
    console.log("Expensive calculation");
    return number * 2;
  },[number]);

//   let data = 0;
//   useEffect(() => {
//     console.log("Expensive calculation");
//     data = number * 2;
//   }, []);

  return (
    <>
      <div>
        <h1>expensiveResult : {expensiveResult}</h1> <br />
        {/* <h1>Data : {data}</h1> */}
        {/* {console.log("first")} */}
      </div>
    </>
  );
};

export default UseMemoComponent;
