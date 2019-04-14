import React, { Component } from 'react'

export class todoitem extends Component {
	render() {
		return (
		 <div>
          <p>{ this.props.todo.title }</p>
        </div>
	  )
	}
  }


export default todoitem