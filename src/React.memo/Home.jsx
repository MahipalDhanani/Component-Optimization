import React from "react";
import {ChildComponent} from "./ChildComponent";

function Home() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1 className="font-medium">Home</h1>
      <p>Click on the other tabs to see the difference in rendering</p>
      <h1>{count}</h1>
      <button className="btn bg-teal-600 text-white p-2 rounded-md shadow-md" onClick={() => setCount((pre) => pre + 1)}>Click Me</button>
      <ChildComponent />
    </div>
  );
}

export default Home;
