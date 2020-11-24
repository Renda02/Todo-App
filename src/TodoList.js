import "./App.css";
import React from "react";
import Todo from "./Todo";

function TodoList({todos}) {
  return (
    <div>
      <p className="todos-title">Todos:</p>
      <p>
        {todos.map(todo => (
          <Todo text={todo.text} key={todo.id}/> //pass down a props
        ))}
      </p>
    </div>
  );
}

export default TodoList;
