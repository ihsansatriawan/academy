import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext('light');

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;

  render() {
    return <div>{this.context}</div>;
  }
}

function App() {
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
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
