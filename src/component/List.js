import React, { PureComponent } from "react";

export default class List extends PureComponent {
  state = {
    score:5,
    data: [
      {
        id: 1,
        name: "vishnu",
        age: 22,
      },
      {
        id: 2,
        name: "sumesh",
        age: 23,
      },
    ],
  };

  incrementScore = ()=>{
    this.setState({
        score:10
    });

  }
  /*lifecycle method
  componentDidMount() {
    alert();
  }
  componentWillUnmount() {
    console.log("exit");
  }*/
  render() {
    console.log(this.state.score);
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => (
            <li>
              {value.id} - {value.name} - {value.age}
            </li>
          ))}
        </ul>
        <button onClick={this.incrementScore}>click here</button>
      </div>
    );
  }
}
