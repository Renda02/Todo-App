import React from "react";
import "./App.css"

function Form({ inputText, setInputText, todos, setTodos }) {
  // Create a todos state handler to store all our todos as an array

  // Create a currenttodo state handler to store the current todo

  // Create an error state handler to help us inform the user in case there is an error

  const handleChange = (e) => {
    setInputText(e.target.value); // We capture the value of the input and set it as current todo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="input-row">
          <input
            placeholder="Add a todo here..."
            className="input"
            value={inputText}
            onChange={handleChange}
            type="text"
          ></input>
          <button className="submit-button" type="submit">
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
