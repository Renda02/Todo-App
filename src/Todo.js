
import React from "react";

import "./App.css"
//import { RiCloseCircleLine } from "react-icons/ri";
//import { AiOutlinePlusCircle } from "react-icons/ai";

import "./App.css";

function Todo({ text }) {
//Add Event
  
  return (<>
    <div className="todo">
      {text}
      {/*<i>
        <RiCloseCircleLine size={30} />
      </i>

      <i>
        <AiOutlinePlusCircle size={30} />
      </i>*/}
    </div>
    </>
  );
}

export default Todo;
