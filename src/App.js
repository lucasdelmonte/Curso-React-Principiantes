import React, { Component } from 'react';
import './App.css';

import tasks from './sample/task.json';

// Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm.js';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: 45
    }
    console.log(newTask);
  }

  render() {
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;
