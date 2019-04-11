import React, { Component } from 'react';
import Todo from './Components/Todo';

import './App.css';

class App extends Component {
  state = {
    todo:  [
     {
      id: 1,
      title: 'Take out the trash',
      completed: false
     },
     {
      id: 2,
      title: 'Dinner with wife',
      completed: false
     },
     {
      id: 3,
      title: 'Meeting with Josef',
      completed: false
     }
  ]
}

  render() {
    
    return (
      <div className="App">
        <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
