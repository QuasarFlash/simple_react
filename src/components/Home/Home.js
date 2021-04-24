import React, { Component } from "react";
import "./Home.css";
export default class Home extends Component {
  render() {
    const Anchor = (props) => {
      return <a {...props}>{props.children}</a>;
    };
    const buttonStyle = {
      backgroundColor: "grey",
      border: "1px solid black",
    };
    return (
      <div>
        <h1>I'm Home, Hello Honey</h1>
        <p>
          Styling Time with React Look at this link here <br />
          <Anchor href="https://github.com/QuasarFlash/">QuasarFlash</Anchor>
        </p>
        <button
          style={{
            backgroundColor: "grey",
            border: "1px solid black",
          }}
        >
          Click Me!
        </button>
        <button style={buttonStyle}>Click me First!</button>
      </div>
    );
  }
}

