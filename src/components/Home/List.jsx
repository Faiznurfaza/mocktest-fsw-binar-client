import React, { useState, useEffect } from "react";
import ListForm from "./ListForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addList,
  editList,
  deleteList,
  fetchListData,
} from "../../redux/features/todoSlices";
import Cookies from "js-cookie";

export default function List() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const userId = Cookies.get("userId");
  const username = Cookies.get("username");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);

  useEffect(() => {
    dispatch(fetchListData(userId));
  }, [dispatch, userId]);

  const handleTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ id: userId, list: newTaskTitle }));
    setNewTaskTitle("");
  };

  const handleEdit = async (listId, updatedTitle) => {
    await dispatch(editList({ id: listId, list: updatedTitle }));
    dispatch(fetchListData(userId));
    setEditingTaskId(null);
  };

  const handleDelete = async (listId) => {
    await dispatch(deleteList(listId));
    dispatch(fetchListData(userId));
  };

  const handleEditToggle = (listId, initialTitle) => {
    setEditingTaskId(listId);
    setEditedTitle(initialTitle);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <ListForm
        title={newTaskTitle}
        handleTitleChange={handleTitleChange}
        handleSubmit={handleSubmit}
      />
      <h1 className="text-3xl font-bold mb-4 text-center">{`${username}'s To-do list: `}</h1>
      <ul>
        {todos?.map((list) => (
          <li
            key={list?.id}
            className="bg-white shadow-md p-4 mb-2 rounded-lg flex justify-between items-center"
          >
            {editingTaskId === list.id ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                onBlur={() => {
                  if (editedTitle !== list.list) {
                    handleEdit(list.id, editedTitle);
                  }
                }}
              />
            ) : (
              <span>{`- ${list?.list}`}</span>
            )}
            <div className="space-x-2">
              {editingTaskId === list.id ? (
                <button
                  className="text-blue-600"
                  onClick={() => handleEdit(list.id, editedTitle)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-blue-600"
                  onClick={() => handleEditToggle(list.id, list.list)}
                >
                  Edit
                </button>
              )}
              <button
                className="text-red-600"
                onClick={() => handleDelete(list.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
