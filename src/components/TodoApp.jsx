import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const TodoApp = () => {
  const {tasks, newTask, setNewTask, addTask, deleteTask, editTaskId, startEdit, saveEdit, editText, setEditText } = useContext(UserContext);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Todo Task</h2>

      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a New Task"
        />
        <button
          className="mt-2 w-full text-black py-2 rounded"
          onClick={addTask}
        >
         ➕
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between p-2 border-b border-gray-200">
            {editTaskId === task.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  className="border border-gray-300 p-1 w-full rounded"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="ml-2 py-1 px-3 rounded"
                  onClick={saveEdit}
                >
                 ✅
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span>{task.text}</span>
                <div className="space-x-2 ml-4">
                  <button
                    className="text-yellow-500"
                    onClick={() => startEdit(task)}
                  >
                   ✏️
                  </button>

                  <button
                    className="text-red-500"
                    onClick={() => deleteTask(task.id)}
                  >
                   ❌
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
