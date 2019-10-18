import { addTodo, removeTodo, toggleTodo } from '../index'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../types'

describe('action ADD_TODO', () => {
  it('has correct type', () => {
    expect(addTodo().type).toEqual(ADD_TODO)
  })
  it('has correct payload', () => {
    expect(addTodo('test').payload).toEqual('test')
  })
})

describe('action REMOVE_TODO', () => {
  it('has correct type', () => {
    expect(removeTodo().type).toEqual(REMOVE_TODO)
  })
  it('has correct payload', () => {
    expect(removeTodo(1).payload).toEqual(1)
  })
})

describe('action TOGGLE_TODO', () => {
  it('has correct type', () => {
    expect(toggleTodo().type).toEqual(TOGGLE_TODO)
  })
  it('has correct payload', () => {
    expect(toggleTodo(1, true).payload).toEqual({ id: 1, bool: true })
  })
})