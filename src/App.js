import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";
import Newone from "./component/Newone";
import Forms from "./component/Forms";
class App extends Component {
  state = {
    mystring: "hello",
    mystringone: "vengad"
  };
  handlechange = () => {
    this.setState({
      mystringone: "Kallingal,vengad"
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.mystring}</h1>
        <h1><button onClick={this.handlechange}>change text</button></h1>
        <Todo sendingdata={this.state.mystringone} />
        <Todo sending={this.state.mystring} />
        <hr></hr>
        <Newone />
        <hr></hr>
        <Forms />
      </div>
    );
  }
}
export default App;
