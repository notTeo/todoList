import React from "react";
import "./styles/renderingTodos.css"

function RenderingTodos(props) {
  function handleDelete(todoId) {
    fetch("/api/todos/" + todoId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.fetchData();
      });
  }

  return (
    <div className="mainContainer">
      <ul className="todoList">
        {props.backendData.todos.map((todo) => (
          <div className="todoContainer" key={todo.id}>
            <li className="text">{todo.text}</li>
            <div className="buttons">
              <button onClick={() => handleDelete(todo.id)}>🗑️</button>
              <button>✅</button>
            </div>

          </div>
        ))}
      </ul>
    </div>
  );
}

export default RenderingTodos;
