import React, { Component } from "react";
import c3 from "c3";
import "./Chart.css";

export default class Chart extends Component {
  componentDidMount() {
    // On mount update chart
    this.updateChart();
  }
  componentDidUpdate() {
    // on new prop update chart
    this.updateChart();
  }
  updateChart() {
    c3.generate({
      bindto: "#charts",
      data: {
        columns: this.props.columns,
        type: this.props.chartType,
      },
    });
  }

  render() {
    return (
      <div className="Chart">
        <div id="charts"></div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
