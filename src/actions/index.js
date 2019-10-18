import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './types'

export function addTodo (todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

export function toggleTodo (id, bool) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
      bool
    }
  }
}