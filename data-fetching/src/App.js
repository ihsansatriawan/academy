import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autonomous from './Autonomous';
import HoCUser from './HoCUser';

function App() {
  return (
    <div className="App">
      <p>
        Data Fetching
      </p>
      <Autonomous />
      <HoCUser />
    </div>
  );
}

export default App;
