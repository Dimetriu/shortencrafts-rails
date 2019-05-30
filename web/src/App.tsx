import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [resp, setResp] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const api = () => {
      window.fetch('api/v1/', {
        credentials: 'include'
      }).then(res => res.json())
      .then(json => setResp(json["current_profile"]))
      .catch(error => console.log(error));
    }

    return api();
  });

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>{`${resp.username} and ${resp.email}`}</p> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
);}

export default App;
