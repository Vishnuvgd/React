import React, { Component } from "react";
export default class Forms extends Component {

  constructor(props){
    super(props)

    this.state={
      firstName:"",
      lastName:""
    }; 
    this.inputone=React.createRef();
    this.inputtwo=React.createRef();
  }



  /*state={
    firstName:"",
    lastName:""
  };  

  onHandlechange = (event) => {
    console.log(event.target.value)
    this.setState({
        [event.target.name]:event.target.value
    });
  };*/

    onsubmit =()=>{
    console.log(this.inputone.value)
    console.log(this.inputtwo.value)
  };

  render(){
    return (
      <form>
        <h1>Form Component</h1>

        {/*Fname
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onHandlechange}></input>
        Lname
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onHandlechange}></input>*/}


        {/*Uncontrol Property*/}
        <input type="text" name="firstName" ref={input=>this.inputone=input}></input>
        <input type="text" name="lastName" ref={input=>this.inputtwo=input}></input>
        <button type="button" onClick={this.onsubmit}>submit</button>
      </form>
    );
  }
}
