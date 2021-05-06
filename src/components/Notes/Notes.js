import React, { Component } from "react";
import moment from "moment";
import "./Notes.css";

const formatTime = "YYYY-MM_DD HH:mm:ss";
export default class Notes extends Component {
  constructor() {
    super();
    this.myNotes = React.createRef();
    this.state = {
      lastUpdate: moment().format(formatTime).toString(),
    };
  }
  getSnapshotBeforeUpdate = (nextProps, prevState) => {
      // updates page to show when the last time new data was registered
    if (nextProps.notes !== this.props.notes) {
      this.setState({
        lastUpdate: moment().format(formatTime).toString(),
      });
    }
    return null;
  };
  componentWillUnmount(){
      // used for clean up for elements created by componentWillMount
      console.log("Bye Bye");
      document.body.style = 'background: black;';
      document.getElementById('unmountMessage').style.color = 'white'; 
  }
  componentDidUpdate() {
      console.log("Hello Hello");
      document.body.style = 'background:white;';
      document.getElementById('unmountMessage').style.color = 'black';
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="Notes" ref={this.myNotes}>
        <h1>Notes:</h1>
        <ul>
          {notes.map((note, key) => (
            <li key={key}>
              {note.title} - {note.content}
            </li>
          ))}
        </ul>
        <p>
          Last Update: <strong>{this.state.lastUpdate}</strong>
        </p>
      </div>
    );
  }
}
