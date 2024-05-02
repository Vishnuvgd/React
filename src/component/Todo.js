import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <h1>Todo Component</h1>
        <h2>{this.props.sendingdata}</h2>
        <h3>{this.props.sending}</h3>
      </div>
    );
  }
}
export default Todo;
