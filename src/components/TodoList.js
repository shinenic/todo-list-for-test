import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class TodoList extends Component {
  state = { display: 'TODO' }

  renderNoData() {
    switch (this.state.display) {
      case 'TODO':
        if (this.props.todos.todoList.filter(value => !value.completed).length === 0) {
          return (
            <h4>Please enter something to create todos.</h4>
            // <h4>There is nothing to be found here.</h4>
          )
        }
        break;

      case 'COMPLETED':
        if (this.props.todos.todoList.filter(value => value.completed).length === 0) {
          return (
            <h4>There is nothing to be found here.</h4>
            // <h4>No completed todos found.</h4>
          )
        }
        break;

      default: // 'ALL'
        if (this.props.todos.todoList.length === 0) {
          return (
            <h4>Please enter something to create todos.</h4>
          )
        }
        break;
    }
  }

  switchDisplayMode(mode) {
    this.setState({ display: mode })
  }

  renderComments() {
    const todoList
      = this.state.display === 'ALL'
        ? [...this.props.todos.todoList.filter(value => !value.completed), ...this.props.todos.todoList.filter(value => value.completed)]
        : this.props.todos.todoList.filter(value => this.state.display === 'TODO' ? !value.completed : value.completed)
    return todoList.map((value, index) => {
      return (
        <div name="todo" key={index + this.state.display} className={value.completed ? "todo todolist-grid-container todo--completed" : "todo todolist-grid-container todo--uncompleted"}>
          <div style={value.completed ? { textDecoration: "line-through" } : {}}>{value.content}</div>
          <div>
            <img name="uncheck" className={value.completed ? "todo__icon--uncheck" : "todo__icon--uncheck hide"} onClick={() => this.props.toggleTodo(value.id, false)} alt="uncheck" />
            <img name="check" className={value.completed ? "todo__icon--check hide" : "todo__icon--check"} onClick={() => this.props.toggleTodo(value.id, true)} alt="check" />
          </div>
          <div>
            <img name="remove" className="todo__icon--remove" onClick={() => this.props.removeTodo(value.id)} alt="remove" />
          </div>
        </div>)
    })
  }

  render() {
    return (
      <div>
        <div className="switch-container">
          <div className={this.state.display === "TODO" ? "switch--active" : undefined} onClick={() => this.switchDisplayMode('TODO')}>Todo</div>
          <div className={this.state.display === "ALL" ? "switch--active" : undefined} onClick={() => this.switchDisplayMode('ALL')}>All</div>
          <div className={this.state.display === "COMPLETED" ? "switch--active" : undefined} onClick={() => this.switchDisplayMode('COMPLETED')}>Completed</div>
        </div>
        {!!this.props.todos.todoList && this.renderComments()}
        <div className="no-data">
          {this.renderNoData()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, actions)(TodoList)