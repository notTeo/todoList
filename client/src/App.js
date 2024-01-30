import React, { useEffect, useState } from 'react';
import "./styles/App.css"
import RenderingTodos from './components/RenderingTodos';
import TodoInput from './components/TodoInput';


function App() {
  const [backendData, setBackendData] = useState({ todos: [] });
  
  function fetchData(){

    fetch("/api/todos")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);    
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
      
  }

  useEffect(() => {
    fetchData();
    console.log(backendData);
  }, []);


  

  return (
    <div className='App'>
      <TodoInput fetchData={fetchData}/>
      <RenderingTodos backendData={backendData} fetchData={fetchData}/>
    </div>
  );
}

export default App;