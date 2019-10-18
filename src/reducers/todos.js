import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types'

const initState = {
  currentId: 0,
  todoList: []
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {

    case ADD_TODO:
      const newTodo = { content: action.payload, id: state.currentId, completed: false }
      return Object.assign({}, state, {
        currentId: state.currentId + 1,
        todoList: [...state.todoList, newTodo]
      })

    case REMOVE_TODO:
      return Object.assign({}, state, {
        todoList: state.todoList.filter(value => value.id !== action.payload)
      })

    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todoList: state.todoList.map(value => value.id !== action.payload.id
          ? value
          : { content: value.content, id: action.payload.id, completed: action.payload.bool })
      })

    default:
      return state
  }
}

export default todoReducer