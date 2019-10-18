import React from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'



export default () => {
  return (
    <div className="app">
      <h2>Todo List!</h2>
      <TodoInput />
      <TodoList />
      <div className="link">
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/shinenic/strokes-operation-react">
            <span>source code</span>
          </a>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/shinenic/strokes-operation-react">
          <img className="github-icon" alt="github" />
        </a>
      </div>
    </div>
  )
}