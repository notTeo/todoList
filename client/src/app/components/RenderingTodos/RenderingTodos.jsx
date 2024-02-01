import React, { useState, useRef } from "react";
import "./RenderingTodos.css";
import RenderingTodosLogic from "../../contexts/RenderingTodosContext";

function RenderingTodos(props) {

  return (
    <div className="mainContainer">
      <ul className="todoList">
        <RenderingTodosLogic {...props}/>
      </ul>
    </div>
  );
}

export default RenderingTodos;
