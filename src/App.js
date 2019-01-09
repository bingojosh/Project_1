import React, { Component } from 'react';
import './App.css';
import Search from "./Search/Search.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}
          <h1 className="title">MusicifyTube</h1>
        </header>
        <div className="search">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
