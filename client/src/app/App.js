import React, { useEffect, useState } from "react";
import "./App.css";
import RenderingTodos from "./components/RenderingTodos/RenderingTodos";
import TodoInput from "./components/TodoInput/TodoInput";
import fetchData from "./contexts/fetchData";

function App() {
  const [backendData, setBackendData] = useState({ todos: [] });
  

  useEffect(() => {
    fetchData(setBackendData);
  }, []);

  return (
    <div className="App">
      <TodoInput backendData={backendData} setBackendData={setBackendData}/>
      <RenderingTodos backendData={backendData} setBackendData={setBackendData}/>
    </div>
  );
}

export default App;
