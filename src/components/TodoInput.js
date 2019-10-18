import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class TodoInput extends Component {
  state = { todo: '' }

  addTodo = () => {
    //防止空字串
    this.state.todo !== '' && this.props.addTodo(this.state.todo)
    this.setState({ todo: '' })
  }

  handleChange = e => {
    this.setState({ todo: e.target.value })
  }
  handleKeyDown = e => {
    e.key === 'Enter' && this.addTodo()
  }

  switchMode = () => {

  }

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          placeholder="add something to do..."
          value={this.state.todo}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
        <img alt="add" className="input-add-img" onClick={this.addTodo}></img>
      </div>
    )
  }
}

export default connect(null, actions)(TodoInput)