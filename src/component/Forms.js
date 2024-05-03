import React, { Component } from "react";
export default class Forms extends Component {
  state={
    inputvalue:""
  }  
  onHandlechange = (event) => {
    console.log(event.target.value)
    this.setState({
        inputvalue:event.target.value
    })
    onsubmit =()=>
    console.log(this.state.inputvalue)
  };
  render() {
    return (
      <form>
        <h1>Form Component</h1>
        <input type="text" onChange={this.onHandlechange}></input>
        <button type="button" onClick={this.onsubmit}>submit</button>
      </form>
    );
  }
}
