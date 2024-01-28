import React, { useEffect, useState } from 'react';
import "./styles/App.css"
import RenderingTodos from './components/RenderingTodos';
import TodoInput from './components/TodoInput';


function App() {
  const [backendData, setBackendData] = useState({ todos: [] });
  
  useEffect(() => {
    fetch("/api/todos")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <TodoInput/>
      <RenderingTodos backendData={backendData}/>
    </div>
  );
}

export default App;