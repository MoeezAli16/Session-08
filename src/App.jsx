import React from "react";
import './App.jsx'; 
import UserContextProvider from "./contexts/UserContextProvider.jsx";
import TodoApp from "./components/TodoApp.jsx";

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <TodoApp/>
    </div>
    </UserContextProvider>
  );
};

export default App;
