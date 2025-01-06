import React, { useState } from "react";
import UseValidate from "./UseValidate";

function Home() {
  const [handleSubmit, handleChange, errors, obj] = UseValidate();

  return (
    <>
      <div className="border p-4 rounded-md shadow-2xl">
        <div className="flex-col flex text-start p-2">
          <h1 className="text-2xl font-bold">Login</h1>
          <hr />
        </div>
        <div className="flex-col flex text-start p-2">
          <label htmlFor="username">Username<span className="text-red-500">*</span>{" "}
          </label>
          <input
            id="username"
            type="text"
            placeholder="Name"
            className="p-2 rounded-md border outline-none"
            autoFocus
            value={obj.username}
            onChange={handleChange}
            name="username"
          />
          <span className="text-red-500">{errors.username}</span>
        </div>
        <div className="flex-col flex text-start p-2">
          <label htmlFor="email">Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="p-2 rounded-md border outline-none"
            value={obj.email}
            onChange={handleChange}
            name="email"
          />
          <span className="text-red-500">{errors.email}</span>
        </div>
        <div className="flex-col flex text-start p-2">
          <label htmlFor="password">Password<span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-2 rounded-md border outline-none"
            name="password"
            value={obj.password}
            onChange={handleChange}
          />
          <span className="text-red-500">{errors.password}</span>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Home;
