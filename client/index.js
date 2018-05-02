import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import appState from './store/appState';
import App from './views/App';

const root = document.querySelector('#root');

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={ appState }>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default
    render(NextApp);
  })
}