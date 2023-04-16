import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const test = process.env.REACT_APP_API_PUBLIC

function App() {
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios.get(`${test}/leaderboards/top-uaw?time_frame=24h&sort=uaw&limit=30&with_time_series=true&all=false`).then((res) => setData(res.data))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>UserID: {data?.data?.metadata?.pagination?.page}</p>
      </header>
    </div>
  );
}

export default App;
