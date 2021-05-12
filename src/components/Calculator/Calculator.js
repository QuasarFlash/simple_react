import React, { Component } from "react";
import "./Calculator.css";

// Learning to use constructors and arrow functions
export default class Calculattor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    };
    // Binding methods so the error:
    // TypeError: Cannot read property 'setState' of undefined
    // Goes away
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  handleOnChange(e) {
    const {
      target: { value, name },
    } = e;
    this.setState({
      [name]: Number(value),
    });
  }

  handleResult(e) {
    this.setState({
      result: this.state.number1 + this.state.number2,
    });
  }

  render() {
    return (
      <div className="Calculator">
        <h1>Calculator: </h1>
        <p>
          <input
            name="number1"
            type="text"
            value={this.state.number1}
            onChange={this.handleOnChange}
          />
          {" + "}
          <input
            type="text"
            name="number2"
            value={this.state.number2}
            onChange={this.handleOnChange}
          />
        </p>
        <p>
          <button onClick={this.handleResult}>=</button>
        </p>
        <p className="result">{this.state.result}</p>
      </div>
    );
  }
}
