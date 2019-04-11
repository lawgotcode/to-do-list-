import React, { Component } from 'react';
import todoitem from './todoitem';



class Todo extends Component {
    render() {
  	return this.props.todo.map((todo) => (
  		<todoitem />
  		
  		));
  }
}

export default Todo;