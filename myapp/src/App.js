import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://harishvanmamserver.onrender.com/api/greeting')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">

      <h1>SERVER    :     {message}</h1>
      <br/>
      <img src="https://avatars.githubusercontent.com/u/90057346?s=400&u=d9f29d67c5270e4cd14b9ba4bb6c23088726a92f&v=4"/>
    </div>
  );
}

export default App;