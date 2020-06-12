import React, { useEffect } from 'react';
import { render } from 'rax';
import View from 'rax-view';
import DriverUniversal from 'driver-universal';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    render(<View>This is Rax View</View>, document.getElementById('rax-container'), {
      driver: DriverUniversal,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="rax-container"></div>
    </div>
  );
}

export default App;
