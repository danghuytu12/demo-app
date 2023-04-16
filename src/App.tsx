import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

const test = process.env.REACT_APP_API_PUBLIC

function App() {
  useEffect(() => {
    axios.get(`${test}/todos/1`).then((res) => console.log(res))
  }, [])
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
