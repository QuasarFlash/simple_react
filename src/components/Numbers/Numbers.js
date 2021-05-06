import React, { Component } from "react";
import Result from "./Result";
import "./Numbers.css";

export default class Numbers extends Component {
  state = {
    numbers: "", // save input values
    results: [], // save the sum results
  };
  handleNumberChange = (e) => {
    const {
      target: { value },
    } = e;
    // convert string to array
    const numbers = Array.from(value);
    // sum all numbers from the array
    const result = numbers.reduce((a, b) => Number(a) + Number(b));
    // Update the local state
    this.setState({
      numbers: value,
      results: [...this.state.results, result],
    });
  };

  render() {
    return (
      <div className="Numbers">
        <input
          type="number"
          placeholder= "Write numbers here"
          value={this.state.numbers}
          onChange={this.handleNumberChange}
        />
        <ul>
          {this.state.results.map((result, i) => (
            <Result key={i} result={result}></Result>
          ))}
        </ul>
      </div>
    );
  }
}
