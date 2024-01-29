import React, { useState } from "react";

function TodoInput({ fetchData }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    const ID = Date.now().toString();

    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputValue, id: ID, state: "uncompleted" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetchData();
        setInputValue("");
      });
  }

  return (
    <div className="mainContainer">
      <div>
        <input value={inputValue} onChange={handleChange} type="text" />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoInput;
