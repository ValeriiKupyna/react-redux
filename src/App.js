import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
      const shape = {
          type: 'types',
          coordinates: {
              start: [10, 5],
              end: [12, 3],
          }
      }

      const {type, coordinates: { start: [startX, startY], end: [endX, endY] }} = shape;

      console.log(type, startX, startY, endX, endY);

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
      </div>
    );
  }
}

export default App;
