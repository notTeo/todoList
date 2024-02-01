import React, {useState} from "react";
import deleteTodos from "../../api/deleteTodos";
import patchTodos from "../../api/patchTodos";
import fetchData from "./fetchData";

export default function RenderingTodosLogic(props) {

    const [newState, setNewState] = useState(true);
    const [updatedTodoId, setUpdatedTodoId] = useState(null);
  
    function handleDelete(todoId) {
        deleteTodos(todoId)
        .then((data) => {
          console.log("Success:", data);
          fetchData(props.setBackendData);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
  
    function handleUpdate(todoId) {
      patchTodos(todoId, newState)
        .then((data) => {
          console.log("Success:", data);
          fetchData(props.setBackendData);
          setUpdatedTodoId(todoId)
          setNewState(!newState);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
  return (
    <>
      {props.backendData.todos.map((todo) => (
        <div className="todoContainer" key={todo.id}>
          <li
            style={{
              textDecoration:
                todo.id === updatedTodoId && newState ? "line-through" : "none",
            }}
          >
            {todo.text}
          </li>
          <div className="buttons">
            <button onClick={() => handleDelete(todo.id)}>🗑️</button>
            <button onClick={() => handleUpdate(todo.id)}>✅</button>
          </div>
        </div>
      ))}
    </>
  );
}
