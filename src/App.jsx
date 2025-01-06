import "./App.css";
import Home from "./Formik & Yup/Home";
// import Home from "./CostomeHooks/APICall/Home";
// import Home from "./CostomeHooks/FormValidation/Home";
// import Counter from "./CostomeHooks/Counter/Counter";
// import ComA from "./Contex/ComA";
// import Home from "./UseMemo.jsx/Home";
// import Home from "./React.memo/Home";

function App() {
  return (
    <>
      <div className="p-4 flex justify-center items-center  flex-col">
        {/* React.memo */}
        {/* <Home />   */}

        {/* useMemo */}
        {/* <Home />   */}

        {/* Context */}
        {/* <ComA />   */}

        {/* Custom Hook */}
        {/* <Counter />   */}

        {/* Custom Hook */}
        {/* <Home />   */}

        {/* Custom Hook */}
        {/* <Home /> */}

        {/* Formik & Yup */}
        <Home />
      </div>
    </>
  );
}

export default App;
