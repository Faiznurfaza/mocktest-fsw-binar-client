import React, { useState } from "react";

const ListForm = ({ title, handleTitleChange, handleSubmit }) => {
  return (
    <div className="flex justify-center items-center mb-5">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-1/2 max-w-md p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Todo List App
        </h2>
        <div className="mb-6">
          <label className="block font-medium mb-2">What to do?</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add List
        </button>
      </form>
    </div>
  );
};

export default ListForm;
