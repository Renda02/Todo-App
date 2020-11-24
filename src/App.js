import "./App.css";
import { useState } from "react";

function App(props) {
  // Create a todos state handler to store all our todos as an array
  const [input, setInput] = useState("");
 

  // Create a currenttodo state handler to store the current todo

  // Create an error state handler to help us inform the user in case there is an error

  const handleChange = (e) => {
    setInput(e.target.value);// We capture the value of the input and set it as current todo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*props.onSubmit({
    id: Math.floor(Math.random() * 1000),
      text: input)};*/
    setInput('');
  };

  
    

  return (
    <>
      <div class="header">Rendani's Tasks</div>
      <div className="root">
        <div className="dashboard">
          <p className="n-progress">{}</p>
          <p>In progress</p>
        </div>
        <form onSubmit={handleSubmit} className="add-todo-form">
          <div className="input-row">
            <input
              placeholder="Add a todo here..."
              className="input"
              onChange={handleChange}
              type="text"
            ></input>
            <button className="submit-button" type="submit">
              Add todo
            </button>
          </div>
        </form>
        <p className="todos-title">Todos:</p>
      </div>
    </>
  );
}

export default App;
