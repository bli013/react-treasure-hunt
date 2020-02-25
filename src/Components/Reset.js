import React, { Component } from 'react';


class Reset extends Component {


  render() {
    return (
      <div>
        <button id="reset" onClick= {this.props.reset}>Restart Game</button>
      </div>
    );
  }
}

export default Reset;
