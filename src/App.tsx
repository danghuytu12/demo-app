import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const test = process.env.REACT_APP_API_PUBLIC

function App() {
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios.get(`${test}/todos/1`).then((res) => setData(res.data))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>UserID: {data.id}</p>
        <p>Completed: {data.completed}</p>
        <p>Title: {data.title}</p>
        <p>ID: {data.userId}</p>
      </header>
    </div>
  );
}

export default App;
