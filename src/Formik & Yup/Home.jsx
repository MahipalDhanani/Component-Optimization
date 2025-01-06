import { useFormik } from "formik";
import React from "react";
import { SignUpSchemas } from "./Schemas";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Home = () => {
  const { errors, handleChange, handleSubmit, handleBlur, values, touched } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchemas,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2 text-start"
          >
            Username<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="text-red-500">
            {errors.username && touched.username && errors.username}
          </span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2 text-start"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="text-red-500">
            {errors.email && touched.email && errors.email}
          </span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2 text-start"
          >
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="text-red-500">
            {errors.password && touched.password && errors.password}
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-medium mb-2 text-start"
          >
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="text-red-500">
            {errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Home;
