import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../public/style/common.css'

if (__DEV__) {
  console.log('开发环境')
} else {
  console.log('生产环境')
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)