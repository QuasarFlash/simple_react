import React, { Component } from "react";
import "./Coins.css";
export default class Coins extends Component {
  constructor() {
    super();
    this.state = {
      dollars: 0,
    };
  }
  shouldComponentUpdate(props, state) {
      //with this method the output will only update if input is multiple of 10
      // To output on any input comment or remove this function
    return state.dollars % 10 === 0;
  }
  handleOnChange = (e) => {
    this.setState({
      dollars: Number(e.target.value || 0),
    });
  };

  render() {
    return (
      <div className="Coins">
        <h1> Buy Crypto Coins</h1>
        <div className="question">
          <p> How much dollars do you have?</p>
          <p>
            <input placeholder="0" type="text" onChange={this.handleOnChange} />
          </p>
        </div>
        <div className="answer">
          <p>Crypto Coin price: $10</p>
          <p>
            You can buy <strong>{this.state.dollars / 10}</strong>
          </p>
        </div>
      </div>
    );
  }
}
