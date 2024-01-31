import React, { useEffect, useState } from "react";
import "./App.css";
import RenderingTodos from "./components/RenderingTodos/RenderingTodos";
import TodoInput from "./components/TodoInput/TodoInput";
import getTodos from "../api/getTodos";

function App() {
  const [backendData, setBackendData] = useState({ todos: [] });

  function fetchData() {
    getTodos()
      .then((data) => {
        if (data) {
          setBackendData(data);
        } else {
          console.error("Empty or invalid JSON data received");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }
  

  useEffect(() => {
    fetchData();
    console.log(backendData);
  }, []);

  return (
    <div className="App">
      <TodoInput fetchData={fetchData} />
      <RenderingTodos backendData={backendData} fetchData={fetchData} />
    </div>
  );
}

export default App;
