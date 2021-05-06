import React, { Component } from "react";
import "./Animation.css";
export default class Animation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  getSnapshotBeforeUpdate = (newProps, newState) => {
    if (!newState.show) {
      document.getElementById("fade").style = "opacity: 1;";
    } else {
      document.getElementById("fade").style = "opacity: 0;";
    }
  };
  toggleCollapse = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="Animation">
        <button onClick={this.toggleCollapse}>
          {this.state.show ? "Collapse" : "Expand"}
        </button>
        <div
          id="fade"
          className={this.state.show ? "transition show" : "transition hide"}
        >
          This text will disappear
        </div>
      </div>
    );
  }
}
