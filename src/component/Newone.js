import React, { Component } from "react";
export default class Newone extends Component {
  state = {
    counter: 0,
  };
  Increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  Decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <h2>Counter Component</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decrement}>-</button>
      </div>
    );
  }
}
