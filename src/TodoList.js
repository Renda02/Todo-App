import "./App.css";
import React from "react";
import Todo from "./Todo";

function TodoList() {
  return (
    <div>
      <p className="todos-title">Todos:</p>
      <Todo />
    </div>
  );
}

export default TodoList;
