import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), text: newTask };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditText(task.text);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editText } : task
      )
    );
    setEditTaskId(null);
    setEditText("");
  };

  return (
    <UserContext.Provider
      value={{ tasks, newTask, setNewTask, addTask, deleteTask, editTaskId, startEdit, saveEdit, editText, setEditText }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
