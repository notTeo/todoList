import React, { useState } from "react";
import postTodos from "../../api/postTodos";
import fetchData from "./fetchData";
import "../components/TodoInput/TodoInput.css"

export default function TodoInputsContext(props) {
    const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    const ID = Date.now().toString();
    postTodos(inputValue, ID)
      .then((data) => {
        console.log("Success:", data);
        fetchData(props.setBackendData);
        setInputValue("");
      });
  }
  return (
    <>
      <input className="input" value={inputValue} onChange={handleChange} type="text" />
      <button className="addButton" onClick={handleClick}>➕</button>
    </>
    
  );
}