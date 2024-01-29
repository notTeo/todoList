import React, { useEffect, useState } from 'react';
import "./styles/App.css"
import RenderingTodos from './components/RenderingTodos';
import TodoInput from './components/TodoInput';


function App() {
  const [backendData, setBackendData] = useState({ todos: [] });
  
  function fetchData(){
    console.log(backendData)
    fetch("/api/todos")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  }

  useEffect(() => {
    fetchData();
  }, []);


  

  return (
    <div>
      <TodoInput fetchData={fetchData}/>
      <RenderingTodos backendData={backendData} fetchData={fetchData}/>
    </div>
  );
}

export default App;