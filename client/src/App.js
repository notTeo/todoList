import React, { useEffect, useState } from 'react';
import "./styles/App.css"
import "./components/RenderingTodos"
import "./components/TodoInput"
import RenderingTodos from './components/RenderingTodos';
import TodoInput from './components/TodoInput';


function App() {
  const [backendData, setBackendData] = useState({ todos: [] });


  useEffect(() => {
    fetch("/api")
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
      <RenderingTodos/>
      <TodoInput/>
    </div>
  );
}

export default App;