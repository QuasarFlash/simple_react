import React, { Component } from "react";
import "./Home.css";
export default class Home extends Component {
  constructor() {
    super();
    this.state = { name: "Rashif" };
    
  }
  componentDidMount(){
    // with this method, triggered once
    setTimeout(() => {
      this.setState({
        name: 'QuasarFlash'
      });
    }, 1000);
  }
  render() {
    const Anchor = (props) => {
      return <a {...props}>{props.children}</a>;
    };
    const buttonStyle = {
      backgroundColor: "grey",
      border: "1px solid black",
    };
    // setTimeout(() => {
    //   // run infinitely every 1 sec, affects performance
    //   this.setState({
    //     name: 'QuasarFlash'
    //   });
    // }, 1000);
    return (
      <div className="Home">
        <p> Hi, my name is {this.state.name}</p>
      </div>
    );
  }
}
