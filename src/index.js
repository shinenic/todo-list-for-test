import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Root from './Root'
import './styles/Index.scss'

ReactDOM.render(
  <Root>
    <App />
  </Root>
  , document.querySelector('#root')
)
