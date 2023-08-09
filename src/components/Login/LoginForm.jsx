import React, { useState } from "react";

const LoginForm = ({ password, handlePasswordChange, handleSubmit }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-6">Login Todo List App</h2>
        <div className="mb-6">
          <label className="block font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your 4-digits password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
