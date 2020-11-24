
import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); // will be arrays since we will have arrays of object
  return (
    <>
      <div className="header">Rendani's Tasks</div>
      <div className="root">
        <div className="dashboard">
          <p className="n-progress">{}</p>
          <p>In progress</p>
        </div>
        <Form
          todos={todos}
          inputText={inputText}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList todos={todos}/>
      </div>
    </>
  );
}

export default App;
