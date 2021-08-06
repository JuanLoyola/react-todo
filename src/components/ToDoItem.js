import React, { Component } from 'react'
import './ToDoitem.css'

class ToDoItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="TodoItem">
          <p className="ToDoItem-text">{this.props.item}</p>
          <div className="ToDoItem-Delete"
            onClick={this.props.deleteItem}
          >-
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoItem;