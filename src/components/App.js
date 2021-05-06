import "./App.css";

import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import Timer from "./PomodoroTimer/Timer";
import Coins from "./Coins/Coins";
import Notes from "./Notes/Notes";
import Chart from "./Chart/Chart";
// Fake data
import { notes1, notes2 } from "./Notes/data";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes1,
      chartType: "line",
    };
    this.columns = [
      ["BTC", 3000, 6000, 10000, 15000, 13000, 11000],
      ["ETH", 2000, 3000, 5000, 4000, 3000, 940],
      ["XRP", 100, 200, 300, 500, 400, 300],
    ];
  }
  setBarChart = () => {
    this.setState({
      chartType: "bar",
    });
  };
  setLineChart = () => {
    this.setState({
      chartType: "line",
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2],
      });
    }, 10000);
  }
  render() {
    return (
      <div className="App">
        <Header title="Hello Honey"></Header>
        <Content>
          <Home></Home>
          <Todo></Todo>
          <Timer></Timer>
          <Coins></Coins>
          <Notes notes={this.state.notes}></Notes>
          <Chart columns={this.columns} chartType={this.state.chartType}>
            <p>
              Chart Type
              <button onClick={this.setBarChart}>Bar</button>
              <button onClick={this.setLineChart}>Line</button>
            </p>
          </Chart>
        </Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
