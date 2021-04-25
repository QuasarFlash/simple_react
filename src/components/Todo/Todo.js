import React, { Component } from "react";
import {v4 as uuidv4} from "uuid";
import List from "./List";
import "./Todo.css";
export default class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      items: [],
    };
  }
  componentWillMount() {
    // Setting default tasks
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: "Pay the rent",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Go to the gym",
          completed: false,
        },

        {
          id: uuidv4(),
          task: "Do my Homework",
          completed: false,
        },
      ],
    });
  }
  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      task: value,
    });
  };
  handleOnSumbit = (e) => {
    // Prevent default to avoid the actual form submit
    e.preventDefault();

    if (this.state.task.trim() !== "") {
      this.setState({
        task: "",
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            complete: false,
          },
        ],
      });
    }
  };
  markAsCompleted = (id) => {
    const foundTask = this.state.items.find((task) => task.id === id);
    foundTask.completed = true;
    this.setState({
      ...this.state.items,
      ...foundTask,
    });
  };
  removeTask = (id) => {
    const filteredTasks = this.state.items.filter((task) => task.id !== id);
    this.setState({
      items: filteredTasks,
    });
  };
  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <form onSubmit={this.handleOnSumbit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>
        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}
