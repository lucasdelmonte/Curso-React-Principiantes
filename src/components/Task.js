import React, { Component } from "react";

import './Task.css';


class Task extends Component {
  render() {
    const { task } = this.props;
    const redColor = {background: 'red'};
    return (
      <p style={redColor}>
        {task.title} -
        {task.description} -
        {task.done} -
        {task.id}
        <input type="checkbox" />
        <button>x</button>
      </p>
    );
  }
}

export default Task;
