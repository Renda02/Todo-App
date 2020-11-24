
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";

import "./App.css";

function Todo() {
  return (
    <div className="todo">
      <i>
        <RiCloseCircleLine size={30} />
      </i>

      <i>
        <AiOutlinePlusCircle size={30} />
      </i>
    </div>
  );
}

export default Todo;
