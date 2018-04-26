import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default
    render(NextApp)
  })
}