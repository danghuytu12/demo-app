import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PUBLIC}/leaderboards/top-uaw?time_frame=24h&sort=uaw&limit=30&with_time_series=true&all=false`).then((res) => setData(res.data))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        {
          data?.data?.items?.map((res: any) =>(
            <div key={res?.game_id}>
              <p>{res?.uaw_7d}</p>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
