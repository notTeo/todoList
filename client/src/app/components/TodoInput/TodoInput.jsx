import React, { useState } from "react";
import TodoInputsContext from "../../contexts/TodoInputsContext";
import "./TodoInput.css"

function TodoInput(props) {
  return (
    <div className="mainContainer">
      <div className="inputsContainer">
        <TodoInputsContext {...props}/>
      </div>
    </div>
  );
}

export default TodoInput;
