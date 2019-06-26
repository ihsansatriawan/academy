import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autonomous from './Autonomous';
import HoCUser from './HoCUser';
import RenderPropsUser from './RenderPropsUser';

function App() {
  return (
    <div className="App">
      <p>
        Data Fetching
      </p>
      <Autonomous />
      <HoCUser />
      <RenderPropsUser />
    </div>
  );
}

export default App;
