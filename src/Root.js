import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers/index'
import reduxPromise from 'redux-promise'

export default ({ children, initState = {} }) => {
  const store = createStore(Reducers, initState, applyMiddleware(reduxPromise))
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}