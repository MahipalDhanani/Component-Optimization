import React, { useState } from 'react'

function UseValidate() {
  const [arr, setArr] = useState([]);
  let [blanck, setBlanck] = useState({});
  const [errors, setErrors] = useState({});
  const [obj, setObj] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    obj[name] = value;
    blanck[name] = "";
    setObj({ ...obj });
    setBlanck({ ...blanck });

    errors[name] = !obj[name] ? `Please enter ${name}` : "";
  };

  const submitValidation = () => {
    const validationErrors = {};
    if (!obj.username) validationErrors.username = "Please enter username";
    if (!obj.email) validationErrors.email = "Please enter email";
    if (!obj.password) validationErrors.password = "Please enter password";

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleSubmit = () => {
    const validationErrors = submitValidation();
    const hasErrors = Object.values(validationErrors).some((error) => error);
    if (hasErrors) return;

    arr.push(obj);
    setArr(arr);
    setObj({ ...blanck });
    console.log(arr);
  };
  return [handleSubmit,handleChange,errors,obj]
}

export default UseValidate