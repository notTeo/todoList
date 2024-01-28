import React from 'react';

function RenderingTodos(props) {
  return (
    <div>
      <ul>
        {props.backendData.todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingTodos;
