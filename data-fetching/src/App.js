import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autonomous from './Autonomous';
import HoCUser from './HoCUser';
import RenderPropsUser from './RenderPropsUser';
import UserHooks from './UserWithHooks';

function App() {
  return (
    <div className="App">
      <p>
        Data Fetching
      </p>
      <Autonomous />
      <HoCUser />
      <RenderPropsUser />
      <UserHooks />
    </div>
  );
}

export default App;
