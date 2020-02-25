import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board'


class App extends Component {
  render() {
    return (
      <div id= "background">
        <h1 id= "title">Treasure Adventures</h1>
        <Board />
      </div>
    );
  }
}

export default App;
