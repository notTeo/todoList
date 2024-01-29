import React from "react";

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
    <div>
      <ul>
        {props.backendData.todos.map((todo) => (
          <div className="todoContainer">
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => handleDelete(todo.id)}>Del</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RenderingTodos;
