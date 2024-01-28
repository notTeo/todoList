import React from 'react';

function RenderingTodos(props) {
  return (
    <div>
      <ul>
        {props.backendData.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingTodos;
