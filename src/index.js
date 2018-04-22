import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './App'
import appState from './store/app-state'

const root = document.getElementById('root')

ReactDOM.render(
  <Provider appState={appState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root,
)
