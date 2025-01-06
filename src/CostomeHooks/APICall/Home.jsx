import React, { useState } from "react";
import useFatch from "./useFatch";

function Home() {
  const [allData, getAPIData, error,postAPIData] = useFatch();
  const [dataById, setDataById] = useState();
  const [formOpen, setFormOpen] = useState(false);
  const [obj, setObj] = useState({});
    const addData = ()=>{
        setObj(obj)
        postAPIData(obj)
    }
  return (
    <>
      <h1>Custom Hook For API</h1>
      <button onClick={() => setFormOpen(true)}>Form</button>
      <section
        className={
          formOpen
            ? "block absolute bg-slate-300 p-8 w-1/2 rounded-md"
            : "hidden"
        }
      >
        <div className="flex-col flex gap-3">
          <span className="flex justify-end ">
            <span
              className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setFormOpen(false)}
            >
              Close
            </span>
          </span>
          <input
            className="p-2 rounded-md outline-none"
            type="number"
            value={obj.userId}
            onChange={(e) => (obj.userId = Number(e.target.value))}
            placeholder="userId"
          />
          <input
            className="p-2 rounded-md outline-none"
            type="text"
            value={obj.title}
            onChange={(e) => (obj.title = e.target.value)}
            placeholder="title"
          />
          <input
            className="p-2 rounded-md outline-none"
            type="text"
            value={obj.body}
            onChange={(e) => (obj.body = e.target.value)}
            placeholder="body"
          />
            <button
              className="text-white p-2 rounded-md cursor-pointer"
              onClick={addData}
            >
              Submit
          </button>
        </div>
      </section>
      <input
        type="number"
        className="border p-2 rounded-md"
        placeholder="Enter id"
        onChange={(e) => setDataById(e.target.value)}
      />
      <button onClick={() => getAPIData(dataById)}>Get Data</button>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-slate-100 bg-slate-500 text-white p-2">
                ID
              </th>
              <th className="border border-slate-100 bg-slate-500 text-white p-2">
                User ID
              </th>
              <th className="border border-slate-100 bg-slate-500 text-white p-2">
                Title
              </th>
              <th className="border border-slate-100 bg-slate-500 text-white p-2">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(allData) ? (
              allData?.map((data) => {
                return (
                  <tr key={data.id}>
                    <td className="border border-slate-300 p-2">{data.id}</td>
                    <td className="border border-slate-300 p-2">
                      {data.userId}
                    </td>
                    <td className="border border-slate-300 p-2">
                      {data.title}
                    </td>
                    <td className="border border-slate-300 p-2 text-justify">
                      {data.body}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr key={allData.id}>
                <td className="border border-slate-300 p-2">{allData.id}</td>
                <td className="border border-slate-300 p-2">
                  {allData.userId}
                </td>
                <td className="border border-slate-300 p-2">{allData.title}</td>
                <td className="border border-slate-300 p-2 text-justify">
                  {allData.body}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Home;
