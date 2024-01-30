import React, { useState } from "react";
import "./styles/renderingTodos.css";

function RenderingTodos(props) {

  const [newState, setNewState] = useState(true)

  function handleDelete(todoId) {
    fetch("/api/todos/" + todoId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.fetchData();
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }

  function handleUpdate(todoId) {

    fetch("/api/todos/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: newState
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.fetchData();
      })
      .catch((err) => {
        console.error("Error updating todo:", err);
      });

      setNewState(!newState);
  }
  

  return (
    <div className="mainContainer">
      <ul className="todoList">
        {props.backendData.todos.map((todo) => (
          <div className="todoContainer" key={todo.id}>
            <li className="text">{todo.text}</li>
            <div className="buttons">
              <button onClick={() => handleDelete(todo.id)}>🗑️</button>
              <button onClick={() => handleUpdate(todo.id)}>✅</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RenderingTodos;
