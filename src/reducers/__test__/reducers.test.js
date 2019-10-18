import todoReducer from '../todos'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../actions/types'

describe('reducer', () => {
  it('handles actions with unknown type', () => {
    const newState = todoReducer({}, {})
    expect(newState).toEqual({})
  })

  it('handles actions with type ADD_TODO', () => {
    const action = { type: ADD_TODO, payload: 'test todo' }
    const newState = todoReducer(undefined, action)
    expect(newState.todoList).toEqual([{ content: 'test todo', id: 0, completed: false }])
  })

  it('handles actions with type REMOVE_TODO', () => {
    const initState = {
      currentId: 1,
      todoList: [{ content: 'test todo', id: 0, completed: false }]
    }
    const action = { type: REMOVE_TODO, payload: 0 }
    const newState = todoReducer(initState, action)
    expect(newState.todoList).toEqual([])
  })

  it('handles actions with type TOGGLE_TODO', () => {
    const initState = {
      currentId: 1,
      todoList: [{ content: 'test todo', id: 0, completed: false }]
    }
    const actionTrue = { type: TOGGLE_TODO, payload: { id: 0, bool: true } }
    const actionFalse = { type: TOGGLE_TODO, payload: { id: 0, bool: false } }
    let newState = todoReducer(initState, actionTrue)

    expect(newState.todoList[0].completed).toEqual(true)

    newState = todoReducer(initState, actionFalse)
    expect(newState.todoList[0].completed).toEqual(false)
  })
})