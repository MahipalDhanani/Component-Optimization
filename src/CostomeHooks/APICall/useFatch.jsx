import axios from "axios";
import React, { useState } from "react";

function useFatch() {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState();
  const head = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_TOKEN_HERE",
    },
  };
  const getAPIData = async (id) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id ? id : ""}`, head)
      .then((res) => {
        setAllData(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const postAPIData = async (obj) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", obj, head)
      .then((res) => {
        setAllData(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return [allData, getAPIData, error, postAPIData];
}

export default useFatch;
