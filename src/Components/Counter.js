import React, { Component } from 'react';


class Counter extends Component {


  render() {
    return (
      <h2 id="counter">
        You Have {this.props.counter} Tries Left.
      </h2>
    );
  }
}

export default Counter;
